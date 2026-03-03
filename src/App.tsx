import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Truck, 
  Thermometer, 
  ShieldCheck, 
  Clock, 
  Phone, 
  Mail, 
  MapPin, 
  ChevronRight,
  Menu,
  X,
  ArrowRight
} from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-brand-blue flex items-center justify-center rounded-lg">
            <Truck className="text-white w-6 h-6" />
          </div>
          <span className="text-xl font-bold tracking-tight text-brand-blue">
            PROTECTED<span className="text-brand-red">LOADS</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-sm font-medium text-slate-600 hover:text-brand-blue transition-colors">Services</a>
          <a href="#about" className="text-sm font-medium text-slate-600 hover:text-brand-blue transition-colors">About</a>
          <a href="#contact" className="text-sm font-medium text-slate-600 hover:text-brand-blue transition-colors">Contact</a>
          <button className="bg-brand-blue text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-slate-800 transition-all shadow-md">
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
          <button className="bg-brand-blue text-white w-full py-3 rounded-xl font-semibold">
            Get a Quote
          </button>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
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
            Reliability Guaranteed
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold text-brand-blue leading-[1.1] mb-6">
            Your Cargo, <br />
            <span className="text-brand-red">Our Priority.</span>
          </h1>
          <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
            Protected Loads Inc. provides elite dry van and reefer logistics solutions across North America. We combine precision temperature control with uncompromising safety.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-brand-blue text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:bg-slate-800 transition-all shadow-lg group">
              Book a Load
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-white border border-slate-200 text-slate-700 px-8 py-4 rounded-xl font-bold hover:bg-slate-50 transition-all">
              Our Fleet
            </button>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=1000" 
              alt="Modern Semi Truck" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl hidden sm:block border border-slate-100">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-brand-red/10 rounded-full flex items-center justify-center">
                <Thermometer className="text-brand-red w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Reefer Precision</p>
                <p className="text-xl font-bold text-brand-blue">-20°F to +70°F</p>
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
          <h2 className="text-sm font-bold text-brand-red uppercase tracking-[0.2em] mb-4">Our Expertise</h2>
          <h3 className="text-4xl lg:text-5xl font-bold text-brand-blue">Specialized Logistics Solutions</h3>
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
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=500" alt="Warehouse" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
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
                <img src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=500" alt="Logistics" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
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
              { icon: Clock, title: "Precision Scheduling", desc: "We understand that in logistics, time is the most valuable currency." },
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

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-brand-blue text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red/10 rounded-full blur-3xl -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -ml-48 -mb-48" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-sm font-bold text-brand-red uppercase tracking-[0.2em] mb-4">Get In Touch</h2>
            <h3 className="text-4xl lg:text-5xl font-bold mb-8">Ready to move? <br />Let's talk logistics.</h3>
            
            <div className="space-y-8 mt-12">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-white/60 uppercase tracking-widest font-bold">Call Us</p>
                  <p className="text-xl font-bold">(800) 555-LOAD</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-white/60 uppercase tracking-widest font-bold">Email Us</p>
                  <p className="text-xl font-bold">dispatch@protectedloads.com</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-white/60 uppercase tracking-widest font-bold">Headquarters</p>
                  <p className="text-xl font-bold">Chicago, IL</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-3xl p-8 lg:p-12 text-slate-900 shadow-2xl">
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Full Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 transition-all" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Email Address</label>
                  <input type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 transition-all" placeholder="john@company.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Service Type</label>
                <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 transition-all">
                  <option>Dry Van</option>
                  <option>Reefer (Refrigerated)</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Message / Details</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 transition-all" placeholder="Tell us about your load requirements..."></textarea>
              </div>
              <button className="w-full bg-brand-red text-white py-4 rounded-xl font-bold text-lg hover:bg-red-700 transition-all shadow-lg">
                Request Quote
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-brand-blue flex items-center justify-center rounded-lg">
                <Truck className="text-white w-5 h-5" />
              </div>
              <span className="text-lg font-bold tracking-tight text-brand-blue">
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
              <li><a href="#contact" className="hover:text-brand-red transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-brand-red transition-colors">Careers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-brand-blue mb-6">Legal</h4>
            <ul className="space-y-4 text-sm font-medium text-slate-600">
              <li><a href="#" className="hover:text-brand-red transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-brand-red transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-brand-red transition-colors">Carrier Agreement</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
            © 2024 Protected Loads Inc. All rights reserved.
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

export default function App() {
  return (
    <div className="min-h-screen bg-white selection:bg-brand-red/20 selection:text-brand-red">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
