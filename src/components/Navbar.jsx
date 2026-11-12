import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FaBars, FaTimes, FaPhone, FaEnvelope, FaSearch } from 'react-icons/fa'
import SearchBar from './SearchBar'
import logo from '../assets/logo.jpg'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [showSearch, setShowSearch] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
    setShowSearch(false)
  }, [location])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset'
    return () => { document.body.style.overflow = 'unset' }
  }, [isOpen])

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/careers', label: 'Careers' },
    { path: '/contact', label: 'Contact' },
  ]

  return (
    <>
      <div className="hidden lg:block bg-gradient-to-r from-primary-950 via-primary-900 to-accent-950 text-white text-sm relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(11,192,148,0.15),transparent)]" />
        <div className="container-custom mx-auto px-4 py-2 flex justify-between items-center relative">
          <div className="flex items-center gap-6">
            <a href="tel:+966594946392" className="flex items-center gap-2 hover:text-accent-300 transition group">
              <FaPhone className="text-accent-400 group-hover:scale-125 transition-transform" /> +966 594946392
            </a>
            <a href="mailto:info@sorouhmedical.com" className="flex items-center gap-2 hover:text-accent-300 transition group">
              <FaEnvelope className="text-accent-400 group-hover:scale-125 transition-transform" /> info@sorouhmedical.com
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" /> Available 24/7
            </span>
          </div>
        </div>
      </div>

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled 
            ? 'bg-white/90 backdrop-blur-xl shadow-lg shadow-primary-900/5 py-2' 
            : 'bg-white/95 backdrop-blur-sm py-3 md:py-4'
        }`}
      >
        <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center gap-3 group flex-shrink-0">
              <motion.div whileHover={{ rotate: 360, scale: 1.1 }} transition={{ duration: 0.6 }}>
                <img
                  src={logo}
                  alt="Sorouh Medical Investment"
                  className="h-10 md:h-12 w-auto object-contain"
                />
              </motion.div>
              <div className="hidden xs:block">
                <h1 className="font-display font-bold text-base md:text-xl text-primary-950 leading-tight">
                  Sorouh <span className="gradient-text">Medical</span>
                </h1>
                <p className="text-[10px] md:text-xs text-gray-500 font-medium tracking-wider uppercase">Investment</p>
              </div>
            </Link>

            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `relative px-4 py-2 rounded-lg font-medium transition-all duration-300 group ${
                      isActive ? 'text-primary-700' : 'text-gray-700 hover:text-primary-700'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span className="relative z-10">{link.label}</span>
                      {isActive && (
                        <motion.div
                          layoutId="activeNav"
                          className="absolute inset-0 bg-primary-50 rounded-lg -z-0"
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                      <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 group-hover:w-8 transition-all duration-300 rounded-full" />
                    </>
                  )}
                </NavLink>
              ))}
            </div>

            <div className="flex items-center gap-2 md:gap-3">
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setShowSearch(!showSearch)}
                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-primary-100 flex items-center justify-center text-gray-700 hover:text-primary-700 transition"
                aria-label="Search"
              >
                <FaSearch className="text-sm" />
              </motion.button>
              <Link to="/contact" className="hidden md:inline-flex btn-primary text-sm !py-2.5 !px-5">
                <span>Get in Touch</span>
              </Link>
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden w-10 h-10 rounded-full bg-gradient-to-br from-primary-600 to-accent-600 text-white flex items-center justify-center shadow-lg"
                aria-label="Menu"
              >
                {isOpen ? <FaTimes /> : <FaBars />}
              </motion.button>
            </div>
          </div>

          <AnimatePresence>
            {showSearch && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden"
              >
                <div className="py-4">
                  <SearchBar />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>

      {/* Mobile Menu Fullscreen */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-[85%] max-w-sm bg-white shadow-2xl"
            >
              <div className="flex flex-col h-full">
                <div className="p-6 border-b border-gray-100">
                  <h2 className="text-xl font-bold text-primary-950">Menu</h2>
                </div>
                <div className="flex-1 overflow-y-auto p-6 space-y-2">
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.path}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 + 0.1 }}
                    >
                      <NavLink
                        to={link.path}
                        className={({ isActive }) =>
                          `block px-4 py-4 rounded-xl font-semibold text-lg transition ${
                            isActive
                              ? 'text-white bg-gradient-to-r from-primary-600 to-accent-600 shadow-lg'
                              : 'text-gray-700 hover:bg-gray-50'
                          }`
                        }
                      >
                        {link.label}
                      </NavLink>
                    </motion.div>
                  ))}
                </div>
                <div className="p-6 border-t border-gray-100 space-y-3">
                  <Link to="/contact" className="btn-primary w-full justify-center">
                    Get in Touch
                  </Link>
                  <div className="pt-3 space-y-2 text-sm text-gray-600">
                    <a href="tel:+966594946392" className="flex items-center gap-2 hover:text-primary-600">
                      <FaPhone className="text-accent-500" /> +966 594946392
                    </a>
                    <a href="mailto:info@sorouhmedical.com" className="flex items-center gap-2 hover:text-primary-600">
                      <FaEnvelope className="text-accent-500" /> info@sorouhmedical.com
                    </a>
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