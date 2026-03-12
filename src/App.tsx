import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Truck, 
  Thermometer, 
  ShieldCheck, 
  Clock, 
  Phone, 
  Printer,
  Headset,
  Briefcase,
  Users,
  Mail, 
  MapPin, 
  ChevronRight,
  Menu,
  X,
  ArrowRight,
  Upload,
  FileUp,
  AlertCircle,
  TrafficConeIcon
} from 'lucide-react';

import logo from './assets/ploadslogo.jpeg';
import truck1 from './assets/truck1.jpg';
import truck2 from './assets/truck2.jpg';

const Navbar = ({ onOpenQuote }: { onOpenQuote: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Protected Loads Logo" className="w-10 h-10 object-contain rounded-lg" />
          <span className="text-xl font-bold tracking-tight text-brand-blue uppercase">
            PROTECTED<span className="text-brand-red">LOADS</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-sm font-medium text-slate-600 hover:text-brand-blue transition-colors">Services</a>
          <a href="#about" className="text-sm font-medium text-slate-600 hover:text-brand-blue transition-colors">About</a>
          <a href="#careers" className="text-sm font-medium text-slate-600 hover:text-brand-blue transition-colors">Careers</a>
          <a href="#contact" className="text-sm font-medium text-slate-600 hover:text-brand-blue transition-colors">Contact</a>
          <button 
            onClick={onOpenQuote}
            className="bg-brand-blue text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-slate-800 transition-all shadow-md"
          >
            Get a Quote
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-slate-600" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-slate-100 p-6 flex flex-col gap-4"
        >
          <a href="#services" className="text-lg font-medium" onClick={() => setIsOpen(false)}>Services</a>
          <a href="#about" className="text-lg font-medium" onClick={() => setIsOpen(false)}>About</a>
          <a href="#contact" className="text-lg font-medium" onClick={() => setIsOpen(false)}>Contact</a>
          <button 
            onClick={() => {
              setIsOpen(false);
              onOpenQuote();
            }}
            className="bg-brand-blue text-white w-full py-3 rounded-xl font-semibold"
          >
            Get a Quote
          </button>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = ({ onOpenQuote }: { onOpenQuote: () => void }) => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50 -z-10 rounded-l-[100px] hidden lg:block" />
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red/10 text-brand-red text-xs font-bold uppercase tracking-wider mb-6">
            <ShieldCheck className="w-4 h-4" />
            Protection Guaranteed
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold text-brand-blue leading-[1.1] mb-6">
            Protection, <br />
            <span className="text-brand-red">Is Not Optional.</span>
          </h1>
          <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
            Protected Loads Inc. provides secure dry van and reefer logistics solutions across North America. We combine elite service with uncompromising safety.
          </p>
          <div className="flex flex-wrap gap-4">
            <button 
              onClick={onOpenQuote}
              className="bg-brand-blue text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:bg-slate-800 transition-all shadow-lg group"
            >
              Book a Load
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative lg:-mr-24 lg:-my-12"
        >
          <div className="aspect-[16/10] rounded-[50px] overflow-hidden shadow-2xl">
            <img 
              src={truck1} 
              alt="Modern Semi Truck" 
              className="w-full h-full object-cover scale-105"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl hidden sm:block border border-slate-100">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-brand-red/10 rounded-full flex items-center justify-center">
                <Thermometer className="text-brand-red w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Reefer Services</p>
                <p className="text-xl font-bold text-brand-blue">Available on Demand</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const ServiceCard = ({ icon: Icon, title, description, features }: { icon: any, title: string, description: string, features: string[] }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all"
  >
    <div className="w-14 h-14 bg-brand-blue/5 rounded-2xl flex items-center justify-center mb-6">
      <Icon className="text-brand-blue w-8 h-8" />
    </div>
    <h3 className="text-2xl font-bold text-brand-blue mb-4">{title}</h3>
    <p className="text-slate-600 mb-6 leading-relaxed">{description}</p>
    <ul className="space-y-3">
      {features.map((f, i) => (
        <li key={i} className="flex items-center gap-3 text-sm font-medium text-slate-700">
          <div className="w-1.5 h-1.5 rounded-full bg-brand-red" />
          {f}
        </li>
      ))}
    </ul>
  </motion.div>
);

const Services = () => {
  return (
    <section id="services" className="section-padding bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-brand-red uppercase tracking-[0.2em] mb-4">Our Promise</h2>
          <h3 className="text-4xl lg:text-5xl font-bold text-brand-blue">Secure Logistics Solutions</h3>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <ServiceCard 
            icon={Truck}
            title="Dry Van Transport"
            description="Secure, weather-protected transportation for non-perishable goods. Our dry van fleet is maintained to the highest standards of cleanliness and structural integrity."
            features={[
              "53' Air-ride trailers",
              "GPS real-time tracking",
              "High-value cargo insurance",
              "Expedited delivery options"
            ]}
          />
          <ServiceCard 
            icon={Thermometer}
            title="Reefer (Refrigerated)"
            description="Precision temperature-controlled logistics for sensitive cargo. From pharmaceuticals to fresh produce, we maintain the cold chain without exception."
            features={[
              "Remote temperature monitoring",
              "Multi-temp capabilities",
              "Pre-cooling protocols",
              "24/7 reefer unit support"
            ]}
          />
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="aspect-square rounded-2xl overflow-hidden bg-brand-light p-4">
                <img src={logo} alt="Protected Loads Logo" className="w-full h-full object-contain" />
              </div>
              <div className="bg-brand-red p-8 rounded-2xl text-white">
                <p className="text-4xl font-bold mb-1">99.9%</p>
                <p className="text-sm font-medium opacity-80 uppercase tracking-wider">On-Time Delivery</p>
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="bg-brand-blue p-8 rounded-2xl text-white">
                <p className="text-4xl font-bold mb-1">24/7</p>
                <p className="text-sm font-medium opacity-80 uppercase tracking-wider">Dispatch Support</p>
              </div>
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img src={truck2} alt="Protected Loads Fleet" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="order-1 lg:order-2">
          <h2 className="text-sm font-bold text-brand-red uppercase tracking-[0.2em] mb-4">Why Choose Us</h2>
          <h3 className="text-4xl lg:text-5xl font-bold text-brand-blue mb-8 leading-tight">Safety Driven, <br />Reliability Powered.</h3>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            Founded on the principles of integrity and excellence, Protected Loads Inc. has grown into a trusted partner for shippers across the continent. We don't just move freight; we protect your business reputation with every mile.
          </p>
          
          <div className="space-y-6">
            {[
              { icon: ShieldCheck, title: "Fully Insured & Bonded", desc: "Your cargo is protected by industry-leading insurance coverage." },
              { icon: TrafficConeIcon, title: "Industry Leading Safety Measures", desc: "We understand that in logistics, reliability is crucial." },
              { icon: MapPin, title: "North American Coverage", desc: "Operating across all major corridors in the US and Canada." }
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center">
                  <item.icon className="text-brand-blue w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-blue">{item.title}</h4>
                  <p className="text-sm text-slate-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Careers = () => {
  const jobs = [
    { title: "Long Haul Driver (AZ)", type: "Full-Time", icon: Truck, urgent: true },
    { title: "Owner Operators (AZ)", type: "Contract", icon: Users, urgent: true },
    { title: "Dispatcher", type: "Full-Time", icon: Headset },
    
  ];

  return (
    <section id="careers" className="section-padding bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-brand-red uppercase tracking-[0.2em] mb-4">Join Our Team</h2>
          <h3 className="text-4xl lg:text-5xl font-bold text-brand-blue mb-6">Drive Your Future With Us</h3>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            At Protected Loads Inc., we value safety, integrity, and our people. We're looking for dedicated professionals to join our growing North American network.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {jobs.map((job, i) => (
            <motion.div 
              key={i}
              whileHover={{ x: 10 }}
              className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center justify-between group cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-blue/5 rounded-xl flex items-center justify-center group-hover:bg-brand-blue/10 transition-colors">
                  <job.icon className="text-brand-blue w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-bold text-brand-blue">{job.title}</h4>
                    {job.urgent && (
                      <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red/10 text-brand-red text-xs font-bold uppercase tracking-wider mb-6">
                        Urgent
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-slate-500">{job.type}</p>
                </div>
              </div>
              <ChevronRight className="text-slate-300 group-hover:text-brand-red transition-colors" />
            </motion.div>
          ))}
        </div>

        <div className="mt-16 bg-brand-blue rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden">
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <h4 className="text-3xl font-bold mb-4">Don't see the right fit?</h4>
              <p className="text-white/70">Send us your resume anyway! We're always looking for great talent.</p>
            </div>
            <a 
              href="mailto:loads@ploads.ca" 
              className="bg-white text-brand-blue px-8 py-4 rounded-xl font-bold hover:bg-slate-100 transition-all shadow-lg whitespace-nowrap"
            >
              Apply Now
            </a>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red/10 rounded-full blur-3xl -mr-32 -mt-32" />
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-brand-blue text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red/10 rounded-full blur-3xl -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -ml-48 -mb-48" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-brand-red uppercase tracking-[0.2em] mb-4">Get In Touch</h2>
          <h3 className="text-4xl lg:text-5xl font-bold mb-4">Ready to move? <br />Let's talk logistics.</h3>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Our team is available 24/7 to handle your most critical shipments. Contact us via phone, email, or visit our headquarters.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: Phone, label: "Call Us", value: "416-521-3131" },
            { icon: Headset, label: "Toll Free", value: "844-350-1947" },
            { icon: Printer, label: "Fax", value: "416-521-3138" },
            { icon: Mail, label: "Email Us", value: "loads@ploads.ca" },
            { icon: MapPin, label: "Headquarters", value: "Toronto, ON" },
            { icon: Clock, label: "Availability", value: "24/7 Dispatch" }
          ].map((item, i) => (
            <div key={i} className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-6 group-hover:bg-brand-red/20 transition-colors">
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <p className="text-sm text-white/60 uppercase tracking-widest font-bold mb-1">{item.label}</p>
              <p className="text-xl font-bold">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const QuoteModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  const [step, setStep] = useState(1);
  const [files, setFiles] = useState<File[]>([]);
  const [assessment, setAssessment] = useState<{ risk: string, margin: string, actions: string[] } | null>(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    shipment_type: 'Dry Van',
    temp_required: '',
    pickup_location: '',
    delivery_location: '',
    driver_preference: 'Solo',
    specs: '',
    contact_name: '',
    company_name: '',
    email: '',
    phone: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await fetch('http://localhost:3001/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setAssessment({
          risk: "Low",
          margin: "18%",
          actions: [
            "Pre-cool trailer to requested temperature",
            "Verify high-value cargo seals",
            "Log GPS tracking checkpoints every 4 hours"
          ]
        });
        setStep(3);
      } else {
        alert('Failed to submit quote. Please try again.');
      }
    } catch (error) {
      console.error('Submission Error:', error);
      alert('Error connecting to the server.');
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onClick={onClose}
        className="absolute inset-0 bg-brand-blue/40 backdrop-blur-md"
      />
      <motion.div 
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl relative z-10 overflow-hidden max-h-[90vh] flex flex-col"
      >
        <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-white sticky top-0 z-20">
          <div>
            <h2 className="text-2xl font-bold text-brand-blue">Request a Quote</h2>
            <p className="text-sm text-slate-500">Step {step} of 3</p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-slate-50 rounded-full transition-colors">
            <X className="w-6 h-6 text-slate-400" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-8">
          {step === 1 && (
            <div className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Shipment Type</label>
                  <select 
                    name="shipment_type"
                    value={formData.shipment_type}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-blue/20 outline-none"
                  >
                    <option>Dry Van</option>
                    <option>Reefer (Temperature Controlled)</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Temperature Required</label>
                  <input 
                    type="text" 
                    name="temp_required"
                    value={formData.temp_required}
                    onChange={handleInputChange}
                    placeholder="e.g. 34°F" 
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-blue/20 outline-none" 
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Pickup Location</label>
                  <input 
                    type="text" 
                    name="pickup_location"
                    value={formData.pickup_location}
                    onChange={handleInputChange}
                    placeholder="City, State/Province" 
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-blue/20 outline-none" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Delivery Location</label>
                  <input 
                    type="text" 
                    name="delivery_location"
                    value={formData.delivery_location}
                    onChange={handleInputChange}
                    placeholder="City, State/Province" 
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-blue/20 outline-none" 
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Driver Preference</label>
                <div className="flex gap-4">
                  {['Solo', 'Team'].map(pref => (
                    <label key={pref} className="flex-1 flex items-center justify-center gap-2 p-3 border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-50 transition-colors">
                      <input 
                        type="radio" 
                        name="driver_preference" 
                        value={pref}
                        checked={formData.driver_preference === pref}
                        onChange={handleInputChange}
                        className="text-brand-red" 
                      />
                      <span className="font-medium text-slate-700">{pref}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Shipment Specs / Details</label>
                <textarea 
                  name="specs"
                  value={formData.specs}
                  onChange={handleInputChange}
                  rows={4} 
                  placeholder="Weight, dimensions, special instructions..." 
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-blue/20 outline-none"
                ></textarea>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Supporting Documents</label>
                <div className="border-2 border-dashed border-slate-200 rounded-2xl p-8 text-center hover:border-brand-blue/40 transition-colors relative">
                  <input type="file" multiple onChange={handleFileChange} className="absolute inset-0 opacity-0 cursor-pointer" />
                  <Upload className="w-10 h-10 text-slate-300 mx-auto mb-4" />
                  <p className="text-sm text-slate-600 font-medium">Click to upload or drag and drop</p>
                  <p className="text-xs text-slate-400 mt-1">PDF, JPG, PNG or DOCX</p>
                </div>
                {files.length > 0 && (
                  <div className="mt-4 space-y-2">
                    {files.map((file, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-brand-blue font-medium bg-brand-blue/5 p-2 rounded-lg">
                        <FileUp className="w-4 h-4" />
                        {file.name}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <button 
                onClick={() => setStep(2)}
                className="w-full bg-brand-blue text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-slate-800 transition-all shadow-lg"
              >
                Next Step
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          )}

          {step === 2 && (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Contact Name</label>
                  <input 
                    required 
                    type="text" 
                    name="contact_name"
                    value={formData.contact_name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-blue/20 outline-none" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Company Name</label>
                  <input 
                    required 
                    type="text" 
                    name="company_name"
                    value={formData.company_name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-blue/20 outline-none" 
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Email Address</label>
                  <input 
                    required 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-blue/20 outline-none" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Phone Number</label>
                  <input 
                    required 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-blue/20 outline-none" 
                  />
                </div>
              </div>

              <div className="flex gap-4 pt-6">
                <button 
                  type="button"
                  onClick={() => setStep(1)}
                  className="flex-1 px-8 py-4 border border-slate-200 text-slate-600 rounded-xl font-bold hover:bg-slate-50 transition-all"
                >
                  Back
                </button>
                <button 
                  type="submit"
                  disabled={loading}
                  className="flex-[2] bg-brand-red text-white py-4 rounded-xl font-bold hover:bg-red-700 transition-all shadow-lg disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : "Submit Quote"}
                </button>
              </div>
            </form>
          )}

          {step === 3 && assessment && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="space-y-8"
            >
              <div className="bg-green-50 border border-green-100 p-6 rounded-2xl flex items-center gap-4 text-green-800">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="text-white w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold">Quote Submitted</h4>
                  <p className="text-sm opacity-80 text-green-700">Your quote has been successfully sent to loads@ploads.ca.</p>
                </div>
              </div>

              <button 
                onClick={onClose}
                className="w-full bg-brand-blue text-white py-4 rounded-xl font-bold hover:bg-slate-800 transition-all"
              >
                Done
              </button>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

const Footer = ({ onOpenPrivacyPolicy, onOpenTermsOfService }: { onOpenPrivacyPolicy: () => void; onOpenTermsOfService: () => void }) => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <img src={logo} alt="Protected Loads Logo" className="w-10 h-10 object-contain rounded-lg" />
              <span className="text-lg font-bold tracking-tight text-brand-blue uppercase">
                PROTECTED<span className="text-brand-red">LOADS</span>
              </span>
            </div>
            <p className="text-slate-500 max-w-sm leading-relaxed">
              Premium logistics solutions for the modern world. We specialize in safe, reliable, and temperature-controlled transportation across North America.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-brand-blue mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm font-medium text-slate-600">
              <li><a href="#services" className="hover:text-brand-red transition-colors">Services</a></li>
              <li><a href="#about" className="hover:text-brand-red transition-colors">About Us</a></li>
              <li><a href="#careers" className="hover:text-brand-red transition-colors">Careers</a></li>
              <li><a href="#contact" className="hover:text-brand-red transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-brand-blue mb-6">Legal</h4>
            <ul className="space-y-4 text-sm font-medium text-slate-600">
              <li><button onClick={onOpenPrivacyPolicy} className="hover:text-brand-red transition-colors cursor-pointer text-left">Privacy Policy</button></li>
              <li><button onClick={onOpenTermsOfService} className="hover:text-brand-red transition-colors cursor-pointer text-left">Terms of Service</button></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
            © 2026 Protected Loads Inc. All rights reserved.
          </p>
          <div className="flex gap-6">
            <div className="w-5 h-5 bg-slate-200 rounded-full" />
            <div className="w-5 h-5 bg-slate-200 rounded-full" />
            <div className="w-5 h-5 bg-slate-200 rounded-full" />
          </div>
        </div>
      </div>
    </footer>
  );
};

const PrivacyPolicyModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onClick={onClose}
        className="absolute inset-0 bg-brand-blue/40 backdrop-blur-md"
      />
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        className="bg-white w-full max-w-3xl rounded-3xl shadow-2xl relative z-10 overflow-hidden max-h-[90vh] flex flex-col"
      >
        <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-white sticky top-0 z-20">
          <div>
            <h2 className="text-2xl font-bold text-brand-blue">Privacy Policy for ploads.ca</h2>
            <p className="text-sm text-slate-500">Effective Date: March 11, 2026</p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-slate-50 rounded-full transition-colors">
            <X className="w-6 h-6 text-slate-400" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-8 text-slate-600 space-y-6">
          <p>
            At ploads.ca, we provide logistics and trucking solutions. We understand that the transportation industry relies on the secure handling of proprietary shipment data and personal driver information. This policy explains how we collect, use, and protect that data.
          </p>

          <div>
            <h3 className="text-lg font-bold text-brand-blue mb-2">1. Information We Collect</h3>
            <p className="mb-2">To facilitate transportation services, we collect:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Company Data:</strong> Legal name, MC/DOT numbers, tax IDs (EIN/HST), and insurance certificates.</li>
              <li><strong>Driver Information:</strong> Name, CDL details, and contact information for active loads.</li>
              <li><strong>Shipment Details:</strong> Pickup/delivery locations, commodity descriptions, and weight.</li>
              <li><strong>Tracking Data:</strong> Real-time GPS location data provided via ELD integration or mobile tracking apps (e.g., Project44, MacroPoint) during active hauls.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-brand-blue mb-2">2. How We Use Your Information</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Load Management:</strong> To match carriers with available freight and monitor transit progress.</li>
              <li><strong>Compliance:</strong> To verify US DOT/Ontario Ministry of Transportation operating authority and safety ratings.</li>
              <li><strong>Payment Processing:</strong> To facilitate QuickPay, factoring, or standard ACH transfers.</li>
              <li><strong>Safety & Security:</strong> To ensure the integrity of high-value cargo and monitor for fraudulent "double-brokering" activity.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-brand-blue mb-2">3. Data Sharing & Disclosure</h3>
            <p className="mb-2">We do not sell your commercial data. Information is shared only with:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Shipping Partners:</strong> To coordinate pickup and delivery.</li>
              <li><strong>Regulatory Bodies:</strong> When required by law (e.g., FMCSA or MTO audits).</li>
              <li><strong>Financial Services:</strong> Banks or factoring companies involved in settling freight invoices.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-brand-blue mb-2">4. Location Tracking</h3>
            <p>
              For carriers and drivers, location tracking is load-specific. We only request or monitor GPS data during the "Active" status of a shipment (from dispatch to BOL upload). Once a load is marked "Delivered," tracking for that specific shipment is terminated.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-brand-blue mb-2">5. Data Security</h3>
            <p className="mb-2">We implement industry-standard safeguards to protect against unauthorized access, including:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Encrypted storage of sensitive documents (Insurance, W-9/W-8BEN).</li>
              <li>Secure API protocols for ELD and TMS integrations.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-brand-blue mb-2">6. Your Rights</h3>
            <p>
              You may request to view, update, or delete your company profile or driver data at any time, provided there are no active contractual obligations or pending legal requirements for record-keeping (e.g., IFTA or safety logs).
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-brand-blue mb-2">7. Contact Information</h3>
            <p>
              For privacy-related inquiries, please contact:<br />
              <strong>Compliance Department</strong><br />
              Email: <a href="mailto:loads@loads.ca" className="text-brand-blue hover:text-brand-red font-semibold">loads@loads.ca</a>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const TermsOfServiceModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onClick={onClose}
        className="absolute inset-0 bg-brand-blue/40 backdrop-blur-md"
      />
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        className="bg-white w-full max-w-4xl rounded-3xl shadow-2xl relative z-10 overflow-hidden max-h-[90vh] flex flex-col"
      >
        <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-white sticky top-0 z-20">
          <div>
            <h2 className="text-2xl font-bold text-brand-blue">Terms and Conditions</h2>
            <p className="text-sm text-slate-500">Effective Date: March 11, 2026</p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-slate-50 rounded-full transition-colors">
            <X className="w-6 h-6 text-slate-400" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-8 text-slate-600 space-y-8">
          <section>
            <h3 className="text-lg font-bold text-brand-blue mb-3">1. Introduction</h3>
            <p>
              1.1. The following contains the general terms and conditions of contract (“Terms”) under which Protected Loads Inc. and their affiliates (each herein referred to as “Service Provider”) provide transportation services to a “Customer.” To the extent the Service Provider and a Customer have entered into a binding written agreement for the provision of services, such agreement shall supersede the Terms. In tendering a shipment for service, the Customer agrees that the Terms will apply. The Terms are effective on the date set forth above and are subject to change without notice.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-brand-blue mb-3">2. Definitions</h3>
            <ul className="space-y-2">
              <li><strong>2.1. “Business Day”</strong> means any day other than Sunday or a statutory or civic holiday (Federal and / or Provincial);</li>
              <li><strong>2.2. “Parties”</strong> means, collectively, Service Provider and the Customer;</li>
              <li><strong>2.3. “Person”</strong> means a natural person, firm, trust, partnership, association, corporation, syndicate, government or governmental board or agency;</li>
              <li><strong>2.4. “Points of Delivery”</strong> means such destinations for delivery of product as the Customer designates from time to time;</li>
              <li><strong>2.5. “Points of Supply”</strong> means such locations for Product pickup as the Customer designates from time to time;</li>
              <li><strong>2.6. “Product”</strong> means such commodities that the Customer designates and Service Provider agrees to transport;</li>
              <li><strong>2.7. “Service”</strong> means the transportation services requested by Customer and provided by Service Provider.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-lg font-bold text-brand-blue mb-3">3. Transportation Services</h3>
            <p>3.1. Service Provider shall in general provide the equipment, facilities and personnel necessary to provide the Services.</p>
            <p>3.2. Service Provider agrees to use commercially reasonable efforts to provide Service in a safe, timely, economical and professional manner.</p>
            <p>3.3. The Customer shall provide Service Provider with access to its information and reporting systems to the extent required in connection with loading and unloading at Customer sites.</p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-brand-blue mb-3">4. Subcontractors</h3>
            <p>4.1. Service Provider may engage subcontractors to perform Services. Such engagement shall not relieve Service Provider of its responsibilities to the Customer hereunder.</p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-brand-blue mb-3">5. Equipment and Personnel</h3>
            <p>5.1. Service Provider shall ensure that the drivers are licensed and qualified in the safe handling of the Product. Drivers will maintain a clean and orderly appearance and extend politeness and courtesy.</p>
            <p>5.2. Service Provider agrees to keep all equipment in mechanically sound operating condition and presentable in appearance.</p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-brand-blue mb-3">6. Compensation and Invoicing</h3>
            <p>6.1. Customer shall compensate Service Provider in accordance with the agreed “Rate Schedule.”</p>
            <p>6.2. Invoices are issued weekly. Customer agrees to pay invoices within thirty (30) days. Overdue amounts are subject to a 2% monthly interest charge.</p>
            <p>6.4. Service Provider shall have a particular lien and general right of detention upon Products and documents for all amounts owing.</p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-brand-blue mb-3">7. Compliance</h3>
            <p>7.1. Service Provider shall maintain all required licenses and permits and comply with applicable statutes and laws.</p>
            <p>7.2. Customer’s load securement shall meet North American Cargo Securement Standards. Service Provider is not liable for damage resulting from securement failure not caused by an at-fault collision.</p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-brand-blue mb-3">8. Confidentiality</h3>
            <p>8.1. Both Parties agree to keep all data and information provided in connection with the Services confidential.</p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-brand-blue mb-3">9. Non-Solicitation</h3>
            <p>9.1. Neither Party shall solicit the other Party’s employees or contractors involved in the Service for one (1) year following the termination of Services.</p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-brand-blue mb-3">10. Documentation</h3>
            <p>10.2. Customer must provide accurate shipment weight. Violations resulting from inaccurate weight provided by Customer shall be financially assumed by Customer.</p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-brand-blue mb-3">12. Indemnification</h3>
            <p>12.1. Each Party shall indemnify and hold the other Party harmless from losses, damages, and claims arising from performance of this Agreement, except to the extent caused by the other Party’s actions.</p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-brand-blue mb-3">13. Liabilities and Claims for Product Loss</h3>
            <p>13.1. Service Provider is liable for Product loss/damage while in its custody, except for acts of God, public authority, or inherent nature of Product.</p>
            <p>13.2. Legal Limit of Liability is $2.00/lb ($4.41/kg) unless a higher value is declared on the Bill of Lading.</p>
            <p>13.4. Under no circumstances will Service Provider be liable for consequential damages.</p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-brand-blue mb-3">14. Insurance</h3>
            <p>14.1. Service Provider maintains Commercial General Liability ($2M), Automobile Liability ($2M), and Cargo Insurance ($250k).</p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-brand-blue mb-3">15. Force Majeure</h3>
            <p>15.1. Neither Party is liable for failure to perform due to acts of God, strikes, fire, war, or events beyond reasonable control.</p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-brand-blue mb-3">16. Mediation</h3>
            <p>16.1. Parties agree to attempt good-faith negotiation and mediation before commencing litigation.</p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-brand-blue mb-3">17. General</h3>
            <p>17.1. Terms are governed by the laws of Ontario.</p>
            <p>17.3. Service Provider is an independent contractor.</p>
          </section>
        </div>
      </motion.div>
    </div>
  );
};

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isPrivacyPolicyModalOpen, setIsPrivacyPolicyModalOpen] = useState(false);
  const [isTermsOfServiceModalOpen, setIsTermsOfServiceModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white selection:bg-brand-red/20 selection:text-brand-red">
      <Navbar onOpenQuote={() => setIsQuoteModalOpen(true)} />
      <main>
        <Hero onOpenQuote={() => setIsQuoteModalOpen(true)} />
        <Services />
        <About />
        <Careers />
        <Contact />
      </main>
      <Footer 
        onOpenPrivacyPolicy={() => setIsPrivacyPolicyModalOpen(true)} 
        onOpenTermsOfService={() => setIsTermsOfServiceModalOpen(true)}
      />
      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
      <PrivacyPolicyModal isOpen={isPrivacyPolicyModalOpen} onClose={() => setIsPrivacyPolicyModalOpen(false)} />
      <TermsOfServiceModal isOpen={isTermsOfServiceModalOpen} onClose={() => setIsTermsOfServiceModalOpen(false)} />
    </div>
  );
}
