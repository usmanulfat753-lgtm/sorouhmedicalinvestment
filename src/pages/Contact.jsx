import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaCheckCircle, FaWhatsapp, FaPaperPlane } from 'react-icons/fa'
import AnimatedBackground from '../components/AnimatedBackground'
import SectionReveal from '../components/SectionReveal'

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      await new Promise(r => setTimeout(r, 1000))
      setSubmitted(true)
      setForm({ name: '', email: '', phone: '', subject: '', message: '' })
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const info = [
    {
      icon: FaMapMarkerAlt,
      title: 'Visit Us',
      lines: ['Taif City', 'Saudi Arabia'],
      color: 'from-blue-500 to-cyan-500',
      href: 'https://maps.google.com/?q=Taif,Saudi+Arabia',
    },
    {
      icon: FaPhone,
      title: 'Call Us',
      lines: ['+966 594946392', '24/7 Support'],
      color: 'from-emerald-500 to-teal-500',
      href: 'tel:+966594946392',
    },
    {
      icon: FaWhatsapp,
      title: 'WhatsApp',
      lines: ['+966 594946392', 'Quick Response'],
      color: 'from-green-500 to-lime-500',
      href: 'https://wa.me/966594946392',
    },
    {
      icon: FaClock,
      title: 'Working Hours',
      lines: ['Sun - Thu: 8AM - 5PM', 'Emergency: 24/7'],
      color: 'from-orange-500 to-amber-500',
    },
  ]

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-950 via-primary-900 to-accent-950 text-white py-16 md:py-24 relative overflow-hidden">
        <AnimatedBackground variant="secondary" />
        <div className="container-custom mx-auto px-4 text-center relative">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur rounded-full text-sm font-semibold mb-4">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" /> We're Online
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Get in <span className="bg-gradient-to-r from-accent-300 to-white bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="text-primary-200 text-base md:text-lg max-w-2xl mx-auto">
              Request biomedical maintenance, IT support, projector repair, or manpower supply — we respond fast.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Info cards */}
      <section className="section-padding relative">
        <div className="container-custom mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16">
            {info.map((item, i) => {
              const Card = item.href ? 'a' : 'div'
              return (
                <SectionReveal key={i} delay={i * 0.1}>
                  <Card
                    href={item.href}
                    target={item.href?.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer"
                    className="group block bg-white rounded-2xl p-5 md:p-6 shadow-sm hover:shadow-2xl card-hover border border-gray-100 text-center h-full relative overflow-hidden"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition`} />
                    <div className={`w-12 md:w-14 h-12 md:h-14 mx-auto rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white text-lg md:text-xl mb-3 md:mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform shadow-lg`}>
                      <item.icon />
                    </div>
                    <h3 className="font-bold text-base md:text-lg text-primary-950 mb-1.5 md:mb-2">{item.title}</h3>
                    {item.lines.map((line, j) => (
                      <p key={j} className="text-xs md:text-sm text-gray-600">{line}</p>
                    ))}
                  </Card>
                </SectionReveal>
              )
            })}
          </div>

          {/* Form + Map */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <SectionReveal direction="left">
              <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl border border-gray-100">
                <h2 className="text-2xl md:text-3xl font-bold text-primary-950 mb-2">Send Us a Message</h2>
                <p className="text-gray-500 text-sm mb-6">Fill out the form and our team will get back to you within 24 hours.</p>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 200 }}
                      className="w-20 h-20 mx-auto mb-4 rounded-full bg-accent-100 flex items-center justify-center"
                    >
                      <FaCheckCircle className="text-accent-500 text-4xl" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-primary-950 mb-2">Message Sent!</h3>
                    <p className="text-gray-600 mb-4">Thank you for reaching out. Our team will respond shortly.</p>
                    <button onClick={() => setSubmitted(false)} className="btn-secondary">Send Another</button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {error && <div className="p-3 bg-red-50 text-red-700 rounded-lg text-sm">{error}</div>}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-semibold text-gray-600 mb-1.5 block">Full Name *</label>
                        <input name="name" value={form.name} onChange={handleChange} required placeholder="Your name" className="input-field" />
                      </div>
                      <div>
                        <label className="text-xs font-semibold text-gray-600 mb-1.5 block">Email *</label>
                        <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="you@email.com" className="input-field" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-semibold text-gray-600 mb-1.5 block">Phone</label>
                        <input name="phone" value={form.phone} onChange={handleChange} placeholder="+966..." className="input-field" />
                      </div>
                      <div>
                        <label className="text-xs font-semibold text-gray-600 mb-1.5 block">Service *</label>
                        <select name="subject" value={form.subject} onChange={handleChange} required className="input-field">
                          <option value="">Select Service</option>
                          <option>Hospital Biomedical Maintenance</option>
                          <option>University Equipment Maintenance</option>
                          <option>IT & Network Support</option>
                          <option>Projector Repair</option>
                          <option>Manpower Supply</option>
                          <option>Other</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-gray-600 mb-1.5 block">Message *</label>
                      <textarea name="message" value={form.message} onChange={handleChange} required rows="4" placeholder="Describe your requirement..." className="input-field resize-none" />
                    </div>
                    <button type="submit" disabled={loading} className="btn-primary w-full justify-center disabled:opacity-50 group">
                      {loading ? (
                        <span className="flex items-center gap-2">
                          <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" /> Sending...
                        </span>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </SectionReveal>

            <SectionReveal direction="right" delay={0.15}>
              <div className="space-y-4 md:space-y-6">
                <div className="h-[300px] md:h-[400px] rounded-3xl overflow-hidden shadow-xl">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119169.66763170416!2d40.35469364921856!3d21.28575069395458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c2064d6c5f4bdd%3A0x9e2f31e2c7d0a8bc!2sTaif%20Saudi%20Arabia!5e0!3m2!1sen!2ssa!4v1700000000000!5m2!1sen!2ssa"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    title="Location - Taif, Saudi Arabia"
                  />
                </div>

                <div className="bg-gradient-to-br from-primary-600 to-accent-600 rounded-3xl p-6 md:p-8 text-white relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.2),transparent)]" />
                  <div className="relative">
                    <h3 className="text-xl md:text-2xl font-bold mb-2">Need Immediate Help?</h3>
                    <p className="text-primary-100 text-sm mb-4">Our emergency support team is available 24/7</p>
                    <a href="tel:+966594946392" className="inline-flex items-center gap-2 px-5 py-3 bg-white text-primary-700 font-semibold rounded-full hover:shadow-2xl transition group">
                      <FaPhone className="group-hover:rotate-12 transition-transform" /> Call Now
                    </a>
                  </div>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact