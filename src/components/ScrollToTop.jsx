import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { FaArrowUp, FaWhatsapp } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  useEffect(() => {
    const toggleVisible = () => setVisible(window.scrollY > 300)
    window.addEventListener('scroll', toggleVisible)
    return () => window.removeEventListener('scroll', toggleVisible)
  }, [])

  return (
    <>
      {/* WhatsApp Float */}
      <motion.a
        href="https://wa.me/966594946392"
        target="_blank"
        rel="noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1 }}
        className="fixed bottom-6 left-6 z-40 w-14 h-14 rounded-full bg-green-500 text-white shadow-2xl flex items-center justify-center hover:scale-110 transition"
        aria-label="WhatsApp"
      >
        <FaWhatsapp className="text-2xl" />
        <span className="absolute inset-0 rounded-full bg-green-500 animate-pulse-ring" />
      </motion.a>

      <AnimatePresence>
        {visible && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-gradient-to-r from-primary-600 to-accent-500 text-white shadow-2xl flex items-center justify-center hover:scale-110 transition z-40"
            aria-label="Scroll to top"
          >
            <FaArrowUp />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  )
}

export default ScrollToTop