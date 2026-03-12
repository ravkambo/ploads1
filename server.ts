import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import Database from 'better-sqlite3';
import nodemailer from 'nodemailer';
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
  )
`);

const app = express();
app.use(cors());
app.use(express.json());

// Nodemailer Transporter Configuration (Gmail)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS // Requires Gmail App Password
  }
});

app.post('/api/quote', async (req, res) => {
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

    // 2. Email Delivery: Send to Owner (kamboj.r@gmail.com)
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: 'kamboj.r@gmail.com',
      subject: `New Quote Request: ${company_name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; padding: 20px; border: 1px solid #eee;">
          <h2 style="color: #0A3D62;">New Quote Request - Protected Loads</h2>
          <hr />
          <h3>Contact Information</h3>
          <p><strong>Name:</strong> ${contact_name}</p>
          <p><strong>Company:</strong> ${company_name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          
          <h3>Shipment Details</h3>
          <p><strong>Type:</strong> ${shipment_type}</p>
          <p><strong>Temp Required:</strong> ${temp_required}</p>
          <p><strong>Pickup:</strong> ${pickup_location}</p>
          <p><strong>Delivery:</strong> ${delivery_location}</p>
          <p><strong>Driver Pref:</strong> ${driver_preference}</p>
          
          <h3>Specifications</h3>
          <p>${specs}</p>
        </div>
      `
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

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Backend Server running on port ${PORT}`);
});
