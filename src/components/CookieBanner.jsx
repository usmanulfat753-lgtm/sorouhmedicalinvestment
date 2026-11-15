import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaCookieBite, FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const CookieBanner = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const accepted = localStorage.getItem('cookieAccepted')
    if (!accepted) {
      const t = setTimeout(() => setVisible(true), 1500)
      return () => clearTimeout(t)
    }
  }, [])

  const accept = () => {
    localStorage.setItem('cookieAccepted', 'true')
    setVisible(false)
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 120, opacity: 0 }}
          transition={{ type: 'spring', damping: 20 }}
          className="fixed bottom-4 left-4 right-4 md:left-6 md:right-6 lg:left-auto lg:right-6 lg:max-w-md z-[55]"
        >
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-5 relative">
            <button
              onClick={() => setVisible(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-700"
              aria-label="Close"
            >
              <FaTimes />
            </button>
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-600 flex-shrink-0">
                <FaCookieBite />
              </div>
              <div>
                <h3 className="font-bold text-primary-950 mb-1">We use cookies</h3>
                <p className="text-sm text-gray-600 mb-4">
                  We use cookies to improve your experience and analyze our traffic. By clicking "Accept" you consent to our use of cookies. Read our <Link to="#" className="text-primary-600 underline">Privacy Policy</Link>.
                </p>
                <div className="flex gap-2">
                  <button onClick={accept} className="btn-primary text-sm !py-2 !px-4">Accept All</button>
                  <button onClick={() => setVisible(false)} className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-full transition">
                    Decline
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default CookieBanner