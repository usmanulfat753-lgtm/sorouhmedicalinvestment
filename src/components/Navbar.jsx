// src/components/Navbar.jsx
import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FaBars, FaTimes, FaPhone, FaEnvelope, FaSearch,
  FaChevronDown, FaMapMarkerAlt, FaClock, FaGlobe, FaStar,
} from 'react-icons/fa'
import SearchBar from './SearchBar'
import logo from '../assets/logo.png' // CHANGE TO .svg IF YOUR LOGO IS SVG

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [showSearch, setShowSearch] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const location = useLocation()

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/services', label: 'Services' },
    { path: '/team', label: 'Team' },
    { path: '/partners', label: 'Partners' },
    { path: '/contact', label: 'Contact' },
    { path: '/careers', label: 'Careers' },
  ]

  const moreLinks = [
    { path: '/blog', label: 'Blog & News' },
    { path: '/faq', label: 'FAQ' },
  ]

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
    setShowSearch(false)
    setOpenDropdown(null)
  }, [location])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset'
    return () => { document.body.style.overflow = 'unset' }
  }, [isOpen])

  useEffect(() => {
    const onKey = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setShowSearch((s) => !s)
      }
      if (e.key === 'Escape') {
        setShowSearch(false)
        setOpenDropdown(null)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <>
      {/* ═══════════════════════════════════════════════════════
         TOP BAR
         ═══════════════════════════════════════════════════════ */}
      <div className="hidden lg:block bg-navy-950 text-white text-xs relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600/10 via-transparent to-accent-500/10 pointer-events-none" />
        <div className="container-custom mx-auto px-4 py-2.5 flex justify-between items-center relative z-10">
          
          <div className="flex items-center gap-6">
            <a href="tel:+966594946392" className="flex items-center gap-2 text-gray-300 hover:text-accent-300 transition group">
              <FaPhone className="text-accent-400 group-hover:scale-125 transition-transform text-[10px]" />
              <span>+966 594946392</span>
            </a>
            <span className="w-px h-3 bg-white/10" />
            <a href="mailto:info@sorouhmedical.com" className="flex items-center gap-2 text-gray-300 hover:text-accent-300 transition group">
              <FaEnvelope className="text-accent-400 group-hover:scale-125 transition-transform text-[10px]" />
              <span>info@sorouhmedical.com</span>
            </a>
            <span className="w-px h-3 bg-white/10" />
            <div className="flex items-center gap-2 text-gray-300">
              <FaMapMarkerAlt className="text-accent-400 text-[10px]" />
              <span>Taif City, Saudi Arabia</span>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-gray-300">
              <FaClock className="text-accent-400 text-[10px]" />
              <span>Sun - Thu: 8AM - 5PM</span>
            </div>
            <span className="w-px h-3 bg-white/10" />
            <div className="flex items-center gap-2 text-gray-300">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              <span>Available 24/7</span>
            </div>
          </div>

        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════
         MAIN NAVBAR — With Enhanced Logo Design
         ═══════════════════════════════════════════════════════ */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 200, damping: 25 }}
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-navy-950/80 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.3)] py-2 border-b border-white/5'
            : 'bg-navy-950/60 backdrop-blur-md py-4 border-b border-white/5'
        }`}
      >
        <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">

            {/* ═══ NEW ENHANCED LOGO ═══ */}
            <Link to="/" className="flex items-center gap-3 group flex-shrink-0 perspective-1000">
              {/* Logo Image Box with 3D glow */}
              <motion.div
                whileHover={{ rotateY: 180, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className="relative w-11 h-11 md:w-14 md:h-14 rounded-2xl bg-white p-1.5 shadow-lg shadow-primary-500/20 flex items-center justify-center border border-white/20"
              >
                {/* Glowing outer ring */}
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary-400 via-accent-400 to-primary-400 opacity-40 blur-sm group-hover:opacity-70 transition-opacity duration-500" />
                {/* The logo itself */}
                <img src={logo} alt="Sorouh Investment Medical" className="w-full h-full object-contain relative z-10" />
                {/* Badge: Small star indicator */}
                <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-gradient-to-br from-accent-400 to-accent-600 flex items-center justify-center text-white shadow-md border-2 border-white text-[8px] z-20">
                  <FaStar />
                </span>
              </motion.div>

              {/* Brand Text */}
              <div className="hidden sm:flex flex-col">
                <h1 className="font-display font-bold text-base md:text-xl text-white leading-tight tracking-tight">
                  Sorouh{' '}
                  <span className="bg-gradient-to-r from-primary-300 via-white to-accent-300 bg-clip-text text-transparent">
                    Investment
                  </span>{' '}
                  <span className="text-accent-300">Medical</span>
                </h1>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <div className="h-px w-6 bg-gradient-to-r from-primary-400 to-transparent" />
                  <p className="text-[10px] md:text-[11px] text-primary-300 font-medium tracking-wider uppercase">
                    Expert Care • Trusted Service
                  </p>
                </div>
              </div>
            </Link>

            {/* ═══ Desktop Nav Links ═══ */}
            <div className="hidden xl:flex items-center gap-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `relative px-4 py-2 rounded-xl font-medium text-sm transition-all duration-300 group ${
                      isActive ? 'text-white bg-white/10 shadow-inner shadow-white/5' : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span className="relative z-10">{link.label}</span>
                      <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] rounded-full bg-gradient-to-r from-primary-400 to-accent-400 transition-all duration-300 ${isActive ? 'w-8' : 'w-0 group-hover:w-8'}`} />
                    </>
                  )}
                </NavLink>
              ))}

              {/* More Dropdown */}
              <div className="relative" onMouseEnter={() => setOpenDropdown('more')} onMouseLeave={() => setOpenDropdown(null)}>
                <button className="px-4 py-2 rounded-xl font-medium text-sm text-gray-300 hover:text-white hover:bg-white/5 flex items-center gap-1.5 transition group">
                  More
                  <FaChevronDown className={`text-[10px] transition-transform duration-300 ${openDropdown === 'more' ? 'rotate-180 text-accent-400' : 'text-gray-400'}`} />
                </button>
                <AnimatePresence>
                  {openDropdown === 'more' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-48 bg-navy-900/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl py-2 overflow-hidden"
                    >
                      {moreLinks.map((link) => (
                        <NavLink
                          key={link.path}
                          to={link.path}
                          className={({ isActive }) =>
                            `block px-4 py-3 text-sm font-medium transition-all ${
                              isActive ? 'bg-white/10 text-accent-300 border-l-2 border-accent-400' : 'text-gray-300 hover:bg-white/5 hover:text-white hover:pl-5'
                            }`
                          }
                        >
                          {link.label}
                        </NavLink>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* ═══ Right Actions ═══ */}
            <div className="flex items-center gap-3">
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setShowSearch(!showSearch)}
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-gray-300 hover:text-accent-400 transition shadow-inner"
                aria-label="Search"
              >
                <FaSearch className="text-sm" />
              </motion.button>

              <Link
                to="/contact"
                className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary-600 to-accent-600 text-white text-sm font-semibold shadow-lg shadow-primary-500/30 hover:shadow-primary-500/50 hover:-translate-y-0.5 transition-all"
              >
                Get in Touch
              </Link>

              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="xl:hidden w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition"
                aria-label="Menu"
              >
                {isOpen ? <FaTimes /> : <FaBars />}
              </motion.button>
            </div>
          </div>

          <AnimatePresence>
            {showSearch && (
              <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden">
                <div className="py-4 border-t border-white/10 mt-3">
                  <SearchBar />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>

      {/* ═══════════════════════════════════════════════════════
         MOBILE MENU — Also shows the new brand name
         ═══════════════════════════════════════════════════════ */}
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[60] xl:hidden">
            <div className="absolute inset-0 bg-navy-950/90 backdrop-blur-md" onClick={() => setIsOpen(false)} />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-[85%] max-w-sm bg-navy-900 border-l border-white/10 shadow-2xl flex flex-col"
            >
              <div className="p-6 border-b border-white/10 flex items-center justify-between">
                <h2 className="text-xl font-bold text-white">Menu</h2>
                <button onClick={() => setIsOpen(false)} className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/10 transition">
                  <FaTimes />
                </button>
              </div>

              {/* Brand in mobile menu */}
              <div className="p-4 border-b border-white/10 flex items-center gap-3 bg-navy-950/50">
                <div className="w-10 h-10 rounded-xl bg-white p-1 shadow-lg border border-white/20">
                  <img src={logo} alt="Sorouh Investment Medical" className="w-full h-full object-contain" />
                </div>
                <div>
                  <p className="font-bold text-white text-sm">Sorouh <span className="text-accent-300">Investment</span> Medical</p>
                  <p className="text-[10px] text-primary-400 uppercase tracking-wider">Expert Care • Trusted Service</p>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto p-6 space-y-2">
                {[...navLinks, ...moreLinks].map((link, i) => (
                  <motion.div key={link.path} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 + 0.1 }}>
                    <NavLink
                      to={link.path}
                      className={({ isActive }) =>
                        `block px-4 py-3.5 rounded-xl font-semibold transition-all ${
                          isActive ? 'text-white bg-gradient-to-r from-primary-600 to-accent-600 shadow-lg shadow-primary-500/20' : 'text-gray-300 hover:bg-white/5 hover:text-white hover:pl-6'
                        }`
                      }
                    >
                      {link.label}
                    </NavLink>
                  </motion.div>
                ))}
              </div>

              <div className="p-6 border-t border-white/10 space-y-4 bg-navy-950">
                <Link to="/contact" onClick={() => setIsOpen(false)} className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-primary-600 to-accent-600 text-white font-semibold rounded-xl shadow-lg transition">
                  Get in Touch
                </Link>
                <div className="space-y-2 text-sm text-gray-400 pt-2">
                  <a href="tel:+966594946392" className="flex items-center gap-3 hover:text-white transition">
                    <FaPhone className="text-accent-500" /> +966 594946392
                  </a>
                  <a href="mailto:info@sorouhmedical.com" className="flex items-center gap-3 hover:text-white transition">
                    <FaEnvelope className="text-accent-500" /> info@sorouhmedical.com
                  </a>
                  <div className="flex items-center gap-3">
                    <FaMapMarkerAlt className="text-accent-500" /> Taif City, Saudi Arabia
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
export default Navbar