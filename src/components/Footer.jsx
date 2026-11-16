// src/components/Footer.jsx
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaPhone,
  FaEnvelope, FaMapMarkerAlt, FaArrowRight, FaWhatsapp, FaCheckCircle,
} from 'react-icons/fa'
import logo from '../assets/logo.jpg' // CHANGE TO .svg IF YOUR LOGO IS SVG
import { servicesData } from '../data/services'

const Footer = () => {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/team', label: 'Our Team' },
    { path: '/partners', label: 'Partners' },
  ]

  const footerServices = servicesData.slice(0, 5)

  const resources = [
    { path: '/blog', label: 'Blog & News' },
    { path: '/faq', label: 'FAQ' },
    { path: '/careers', label: 'Careers' },
    { path: '/contact', label: 'Contact Us' },
  ]

  const socials = [
    { icon: FaFacebook, href: '#', label: 'Facebook', color: 'hover:bg-blue-600' },
    { icon: FaTwitter, href: '#', label: 'Twitter', color: 'hover:bg-sky-500' },
    { icon: FaLinkedin, href: '#', label: 'LinkedIn', color: 'hover:bg-blue-700' },
    { icon: FaInstagram, href: '#', label: 'Instagram', color: 'hover:bg-pink-600' },
    { icon: FaWhatsapp, href: 'https://wa.me/966594946392', label: 'WhatsApp', color: 'hover:bg-green-500' },
  ]

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (!email || !email.includes('@')) return
    setSubscribed(true)
    setEmail('')
    setTimeout(() => setSubscribed(false), 4000)
  }

  return (
    <footer className="bg-navy-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-accent-500 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary-500 rounded-full blur-3xl" />
      </div>

      <div className="border-b border-white/10 relative">
        <div className="container-custom mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-2 gradient-text">Subscribe to Our Newsletter</h3>
              <p className="text-gray-400">Get the latest updates on biomedical maintenance and IT solutions.</p>
            </div>
            <form onSubmit={handleSubscribe} className="flex w-full md:w-auto gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 md:w-80 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 outline-none focus:border-accent-400 focus:bg-white/15 transition"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-accent-500 to-accent-600 rounded-xl font-semibold hover:shadow-lg hover:shadow-accent-500/50 transition flex items-center gap-2"
              >
                {subscribed ? <><FaCheckCircle /> Subscribed</> : <>Subscribe <FaArrowRight /></>}
              </motion.button>
            </form>
          </div>
        </div>
      </div>

      <div className="container-custom mx-auto px-4 py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Brand — Updated to "Sorouh Investment Company" */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Sorouh Investment Company" className="h-12 w-auto object-contain bg-white rounded-lg p-1" />
              <div>
                <h1 className="font-bold text-lg leading-tight">Sorouh Investment Company</h1>
                <p className="text-xs text-gray-400 tracking-wider uppercase">Expert Care • Trusted Service</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-md">
              Specialized in biomedical equipment maintenance for hospitals and universities, IT infrastructure, electrical systems, calibration, and mechanical services in Taif, Saudi Arabia.
            </p>
            <div className="flex gap-3 flex-wrap">
              {socials.map((social, i) => (
                <motion.a
                  key={i}
                  whileHover={{ y: -4, scale: 1.1 }}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noreferrer"
                  className={`w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center transition-all ${social.color}`}
                >
                  <social.icon />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold text-base mb-4">Quick Links</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-gray-400 hover:text-accent-400 transition flex items-center gap-2 group text-sm">
                    <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-base mb-4">Services</h3>
            <ul className="space-y-2.5">
              {footerServices.map((service) => (
                <li key={service.id}>
                  <Link to={`/services/${service.id}`} className="text-gray-400 hover:text-accent-400 transition flex items-center gap-2 group text-sm">
                    <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
                    {service.shortTitle}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/services" className="text-accent-400 hover:text-accent-300 font-semibold transition flex items-center gap-2 group text-sm pt-1">
                  View All Services <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-base mb-4">Resources</h3>
            <ul className="space-y-2.5 mb-6">
              {resources.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-gray-400 hover:text-accent-400 transition flex items-center gap-2 group text-sm">
                    <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="font-bold text-base mb-3">Contact</h3>
            <ul className="space-y-2.5">
              <li className="flex items-start gap-2">
                <FaMapMarkerAlt className="text-accent-400 mt-1 flex-shrink-0 text-xs" />
                <span className="text-gray-400 text-xs">Taif City, Saudi Arabia</span>
              </li>
              <li className="flex items-start gap-2">
                <FaPhone className="text-accent-400 mt-1 flex-shrink-0 text-xs" />
                <a href="tel:+966594946392" className="text-gray-400 text-xs hover:text-accent-400 transition">+966 594946392</a>
              </li>
              <li className="flex items-start gap-2">
                <FaEnvelope className="text-accent-400 mt-1 flex-shrink-0 text-xs" />
                <a href="mailto:info@sorouhmedical.com" className="text-gray-400 text-xs hover:text-accent-400 transition">info@sorouhmedical.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 relative">
        <div className="container-custom mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>© {currentYear} Sorouh Investment Company. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="#" className="hover:text-accent-400 transition">Privacy Policy</Link>
            <Link to="#" className="hover:text-accent-400 transition">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer