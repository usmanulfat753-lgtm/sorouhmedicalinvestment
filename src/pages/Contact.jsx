// src/pages/Contact.jsx
import { useState } from 'react'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaCheckCircle, FaWhatsapp } from 'react-icons/fa'

const COUNTRY_CODES = [
  { code: 'SA', dial: '+966', flag: '🇸🇦', name: 'Saudi Arabia' },
  { code: 'AE', dial: '+971', flag: '🇦🇪', name: 'UAE' },
  { code: 'KW', dial: '+965', flag: '🇰🇼', name: 'Kuwait' },
  { code: 'QA', dial: '+974', flag: '🇶🇦', name: 'Qatar' },
  { code: 'BH', dial: '+973', flag: '🇧🇭', name: 'Bahrain' },
  { code: 'OM', dial: '+968', flag: '🇴🇲', name: 'Oman' },
  { code: 'JO', dial: '+962', flag: '🇯🇴', name: 'Jordan' },
  { code: 'EG', dial: '+20', flag: '🇪🇬', name: 'Egypt' },
  { code: 'LB', dial: '+961', flag: '🇱🇧', name: 'Lebanon' },
  { code: 'SY', dial: '+963', flag: '🇸🇾', name: 'Syria' },
  { code: 'IQ', dial: '+964', flag: '🇮🇶', name: 'Iraq' },
  { code: 'YE', dial: '+967', flag: '🇾🇪', name: 'Yemen' },
  { code: 'SD', dial: '+249', flag: '🇸🇩', name: 'Sudan' },
  { code: 'MA', dial: '+212', flag: '🇲🇦', name: 'Morocco' },
  { code: 'TN', dial: '+216', flag: '🇹🇳', name: 'Tunisia' },
  { code: 'DZ', dial: '+213', flag: '🇩🇿', name: 'Algeria' },
  { code: 'PK', dial: '+92', flag: '🇵🇰', name: 'Pakistan' },
  { code: 'IN', dial: '+91', flag: '🇮🇳', name: 'India' },
  { code: 'BD', dial: '+880', flag: '🇧🇩', name: 'Bangladesh' },
  { code: 'PH', dial: '+63', flag: '🇵🇭', name: 'Philippines' },
  { code: 'ID', dial: '+62', flag: '🇮🇩', name: 'Indonesia' },
  { code: 'LK', dial: '+94', flag: '🇱🇰', name: 'Sri Lanka' },
  { code: 'NP', dial: '+977', flag: '🇳🇵', name: 'Nepal' },
  { code: 'GB', dial: '+44', flag: '🇬🇧', name: 'United Kingdom' },
  { code: 'US', dial: '+1', flag: '🇺🇸', name: 'United States' },
  { code: 'CA', dial: '+1', flag: '🇨🇦', name: 'Canada' },
  { code: 'AU', dial: '+61', flag: '🇦🇺', name: 'Australia' },
  { code: 'DE', dial: '+49', flag: '🇩🇪', name: 'Germany' },
  { code: 'FR', dial: '+33', flag: '🇫🇷', name: 'France' },
  { code: 'TR', dial: '+90', flag: '🇹🇷', name: 'Turkey' },
]

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', countryCode: 'SA', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setForm({ name: '', email: '', phone: '', countryCode: 'SA', subject: '', message: '' })
  }

  return (
    <div className="overflow-hidden">
      {/* HERO */}
      <section className="relative py-20 md:py-28 overflow-hidden border-b border-white/5 bg-navy-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(14,165,233,0.15),transparent_70%)] pointer-events-none" />
        <div className="container-custom mx-auto px-4 text-center relative z-10">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-semibold text-accent-300 mb-4">
            <span className="w-2 h-2 rounded-full bg-accent-400 animate-pulse" /> Get in Touch
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">Contact Us</h1>
          <p className="text-primary-200 text-base md:text-xl max-w-2xl mx-auto">
            Request any service — our team is ready to assist you.
          </p>
        </div>
      </section>

      <section className="section-padding bg-navy-950 relative">
        <div className="container-custom mx-auto px-4 relative z-10">
          
          {/* Info Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {[
              { icon: FaMapMarkerAlt, title: 'Visit Us', lines: ['Taif City', 'Saudi Arabia'] },
              { icon: FaPhone, title: 'Call Us', lines: ['+966 594946392', '24/7 Support'] },
              { icon: FaWhatsapp, title: 'WhatsApp', lines: ['+966 594946392', 'Quick Response'] },
              { icon: FaClock, title: 'Working Hours', lines: ['Sun-Thu: 8AM-5PM', 'Emergency: 24/7'] },
            ].map((item, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-colors">
                <div className="w-14 h-14 mx-auto rounded-xl bg-primary-900 flex items-center justify-center text-accent-400 text-xl mb-4 border border-primary-700">
                  <item.icon />
                </div>
                <h3 className="font-bold text-white mb-2">{item.title}</h3>
                {item.lines.map((l, j) => <p key={j} className="text-sm text-primary-200">{l}</p>)}
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
            
            {/* Contact Form */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 backdrop-blur-md shadow-2xl">
              <h2 className="text-2xl font-bold text-white mb-6">Send Us a Message</h2>
              
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-accent-500/20 flex items-center justify-center border border-accent-500/30">
                    <FaCheckCircle className="text-accent-400 text-4xl" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-primary-200 mb-6">We'll respond shortly.</p>
                  <button onClick={() => setSubmitted(false)} className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold transition">Send Another</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-semibold text-white mb-1.5 block">Full Name <span className="text-rose-400">*</span></label>
                      <input name="name" value={form.name} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-accent-400 focus:ring-2 focus:ring-accent-400/30 outline-none text-white placeholder-primary-400 transition" placeholder="Your name" />
                    </div>
                    <div>
                      <label className="text-sm font-semibold text-white mb-1.5 block">Email <span className="text-rose-400">*</span></label>
                      <input name="email" type="email" value={form.email} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-accent-400 focus:ring-2 focus:ring-accent-400/30 outline-none text-white placeholder-primary-400 transition" placeholder="you@email.com" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    {/* Country Code & Phone */}
                    <div>
                      <label className="text-sm font-semibold text-white mb-1.5 block">Phone Number</label>
                      <div className="flex rounded-xl overflow-hidden bg-white/5 border border-white/10 focus-within:border-accent-400 focus-within:ring-2 focus-within:ring-accent-400/30 transition">
                        <select
                          name="countryCode"
                          value={form.countryCode}
                          onChange={handleChange}
                          className="bg-white/10 border-r border-white/10 text-white text-sm font-medium outline-none cursor-pointer px-2 py-3 w-24 appearance-none text-center"
                          style={{ backgroundImage: 'none' }}
                        >
                          {COUNTRY_CODES.map(c => (
                            <option key={c.code} value={c.code} className="bg-navy-900 text-white">
                              {c.flag} {c.dial}
                            </option>
                          ))}
                        </select>
                        <input name="phone" value={form.phone} onChange={handleChange} placeholder="5XXXXXXXX" className="flex-1 px-3 py-3 outline-none bg-transparent text-white placeholder-primary-500 text-sm" />
                      </div>
                    </div>
                    
                    <div>
                      <label className="text-sm font-semibold text-white mb-1.5 block">Service <span className="text-rose-400">*</span></label>
                      <select name="subject" value={form.subject} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-accent-400 focus:ring-2 focus:ring-accent-400/30 outline-none text-white appearance-none transition">
                        <option value="" className="bg-navy-900">Select a service</option>
                        <option className="bg-navy-900">Hospital Biomedical Maintenance</option>
                        <option className="bg-navy-900">University Equipment Maintenance</option>
                        <option className="bg-navy-900">IT Infrastructure</option>
                        <option className="bg-navy-900">Dental Chair Maintenance</option>
                        <option className="bg-navy-900">Electrical Systems</option>
                        <option className="bg-navy-900">Lab Calibration</option>
                        <option className="bg-navy-900">Autoclave & Sterilizer</option>
                        <option className="bg-navy-900">Annual Maintenance Contracts</option>
                        <option className="bg-navy-900">Medical Imaging</option>
                        <option className="bg-navy-900">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-white mb-1.5 block">Message <span className="text-rose-400">*</span></label>
                    <textarea name="message" value={form.message} onChange={handleChange} required rows="4" placeholder="Describe your requirement..." className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-accent-400 focus:ring-2 focus:ring-accent-400/30 outline-none text-white placeholder-primary-400 transition resize-none" />
                  </div>

                  <button type="submit" className="w-full py-3.5 rounded-xl bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-500 hover:to-accent-500 text-white font-bold shadow-lg shadow-primary-500/20 transition-all">
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Map */}
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/10 h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119169.66763170416!2d40.35469364921856!3d21.28575069395458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c2064d6c5f4bdd%3A0x9e2f31e2c7d0a8bc!2sTaif%20Saudi%20Arabia!5e0!3m2!1sen!2ssa!4v1700000000000!5m2!1sen!2ssa"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Location"
                className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact