import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaWhatsapp, FaPhone, FaEnvelope, FaPlus, FaTimes, FaCommentDots } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const FloatingActions = () => {
  const [open, setOpen] = useState(false)

  const actions = [
    { icon: FaWhatsapp, href: 'https://wa.me/966594946392', label: 'WhatsApp', bg: 'bg-green-500' },
    { icon: FaPhone, href: 'tel:+966594946392', label: 'Call', bg: 'bg-blue-600' },
    { icon: FaEnvelope, href: 'mailto:info@sorouhmedical.com', label: 'Email', bg: 'bg-purple-600' },
  ]

  return (
    <div className="fixed bottom-24 right-6 z-40 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open &&
          actions.map((action, i) => (
            <motion.a
              key={i}
              href={action.href}
              target={action.href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              initial={{ opacity: 0, x: 20, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 20, scale: 0.8 }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.05 }}
              className="group flex items-center gap-2"
            >
              <span className="px-3 py-1.5 bg-white rounded-lg shadow-lg text-sm font-medium text-gray-700 opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
                {action.label}
              </span>
              <div className={`w-12 h-12 rounded-full ${action.bg} text-white shadow-xl flex items-center justify-center`}>
                <action.icon />
              </div>
            </motion.a>
          ))}
      </AnimatePresence>

      <motion.button
        onClick={() => setOpen(!open)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={`w-14 h-14 rounded-full text-white shadow-2xl flex items-center justify-center transition-colors ${
          open ? 'bg-gray-700' : 'bg-gradient-to-r from-primary-600 to-accent-600'
        }`}
        aria-label="Quick contact"
      >
        {open ? <FaTimes className="text-lg" /> : <FaCommentDots className="text-xl" />}
        {!open && <span className="absolute inset-0 rounded-full bg-primary-500 animate-ping opacity-30" />}
      </motion.button>
    </div>
  )
}

export default FloatingActions