import { motion } from 'framer-motion'

const AnimatedBackground = ({ variant = 'primary' }) => {
  const colors = variant === 'primary'
    ? ['bg-primary-300', 'bg-accent-300', 'bg-primary-200']
    : ['bg-accent-300', 'bg-primary-300', 'bg-accent-200']

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className={`absolute top-0 -left-20 w-72 h-72 md:w-96 md:h-96 ${colors[0]} rounded-full blur-3xl opacity-30`}
        animate={{ x: [0, 50, 0], y: [0, 30, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className={`absolute top-1/3 -right-20 w-72 h-72 md:w-96 md:h-96 ${colors[1]} rounded-full blur-3xl opacity-30`}
        animate={{ x: [0, -50, 0], y: [0, -30, 0], scale: [1, 1.3, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className={`absolute bottom-0 left-1/2 w-72 h-72 md:w-96 md:h-96 ${colors[2]} rounded-full blur-3xl opacity-20`}
        animate={{ x: [0, 30, 0], y: [0, 40, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  )
}

export default AnimatedBackground