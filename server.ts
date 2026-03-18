import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import Database from 'better-sqlite3';
import nodemailer from 'nodemailer';
import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const db = new Database('protected_loads.db');

// Initialize Database
db.exec(`
  CREATE TABLE IF NOT EXISTS quotes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    shipment_type TEXT,
    temp_required TEXT,
    pickup_location TEXT,
    delivery_location TEXT,
    driver_preference TEXT,
    specs TEXT,
    contact_name TEXT,
    company_name TEXT,
    email TEXT,
    phone TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS applications (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT,
    phone TEXT,
    experience TEXT,
    resume_filename TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );
`);

const app = express();

app.use(cors({
  origin: ['https://ploads.ca', 'http://localhost:3000']
}));

const upload = multer({ storage: multer.memoryStorage() });

// Nodemailer Transporter Configuration (Gmail)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS // Requires Gmail App Password
  }
});

const escapeHtml = (str: unknown): string => {
  return String(str ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
};

app.post('/api/quote', upload.array('files'), async (req, res) => {
  const {
    shipment_type, temp_required, pickup_location, delivery_location,
    driver_preference, specs, contact_name, company_name, email, phone
  } = req.body;

  try {
    // 1. Persistence: Save to SQLite
    const stmt = db.prepare(`
      INSERT INTO quotes (
        shipment_type, temp_required, pickup_location, delivery_location,
        driver_preference, specs, contact_name, company_name, email, phone
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);

    stmt.run(
      shipment_type, temp_required, pickup_location, delivery_location,
      driver_preference, specs, contact_name, company_name, email, phone
    );

    // 2. Email Delivery: Send to Owner
    const attachments = (req.files as Express.Multer.File[] ?? []).map(f => ({
      filename: f.originalname,
      content: f.buffer
    }));

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: 'load@ploads.ca',
      subject: `New Quote Request: ${escapeHtml(company_name)}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; padding: 20px; border: 1px solid #eee;">
          <h2 style="color: #0A3D62;">New Quote Request - Protected Loads</h2>
          <hr />
          <h3>Contact Information</h3>
          <p><strong>Name:</strong> ${escapeHtml(contact_name)}</p>
          <p><strong>Company:</strong> ${escapeHtml(company_name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>

          <h3>Shipment Details</h3>
          <p><strong>Type:</strong> ${escapeHtml(shipment_type)}</p>
          <p><strong>Temp Required:</strong> ${escapeHtml(temp_required)}</p>
          <p><strong>Pickup:</strong> ${escapeHtml(pickup_location)}</p>
          <p><strong>Delivery:</strong> ${escapeHtml(delivery_location)}</p>
          <p><strong>Driver Pref:</strong> ${escapeHtml(driver_preference)}</p>

          <h3>Specifications</h3>
          <p>${escapeHtml(specs)}</p>
        </div>
      `,
      attachments
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ success: true, message: 'Quote saved and email sent' });
    } catch (emailError) {
      console.error('Email Delivery Error:', emailError);
      res.status(200).json({ success: true, message: 'Quote saved but failed to send email notification' });
    }
  } catch (error) {
    console.error('Database Error:', error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
});

app.post('/api/apply', upload.single('resume'), async (req, res) => {
  const { name, email, phone, experience } = req.body;
  const resumeFile = req.file as Express.Multer.File | undefined;

  try {
    const stmt = db.prepare(`
      INSERT INTO applications (name, email, phone, experience, resume_filename)
      VALUES (?, ?, ?, ?, ?)
    `);
    stmt.run(name, email, phone, experience, resumeFile?.originalname ?? null);

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: 'load@ploads.ca',
      subject: `New Dispatcher Application: ${escapeHtml(name)}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; padding: 20px; border: 1px solid #eee;">
          <h2 style="color: #0A3D62;">New Dispatcher Application - Protected Loads</h2>
          <hr />
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
          <p><strong>Experience:</strong> ${escapeHtml(experience)}</p>
        </div>
      `,
      attachments: resumeFile
        ? [{ filename: resumeFile.originalname, content: resumeFile.buffer }]
        : []
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ success: true, message: 'Application saved and email sent' });
    } catch (emailError) {
      console.error('Email Delivery Error:', emailError);
      res.status(200).json({ success: true, message: 'Application saved but failed to send email notification' });
    }
  } catch (error) {
    console.error('Database Error:', error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Backend Server running on port ${PORT}`);
});
