import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const SectionReveal = ({ children, delay = 0, direction = 'up', className = '' }) => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  const directions = {
    up: { y: 60, x: 0 },
    down: { y: -60, x: 0 },
    left: { x: 60, y: 0 },
    right: { x: -60, y: 0 },
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...directions[direction] }}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default SectionReveal