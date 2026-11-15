// src/components/FloatingParticles.jsx
const FloatingParticles = ({ count = 20 }) => {
  const particles = Array.from({ length: count }).map((_, i) => {
    const size = 4 + Math.random() * 12
    const left = Math.random() * 100
    const top = Math.random() * 100
    const delay = Math.random() * 5
    const duration = 6 + Math.random() * 8

    return {
      id: i,
      style: {
        width: `${size}px`,
        height: `${size}px`,
        left: `${left}%`,
        top: `${top}%`,
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
      },
    }
  })

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <div key={p.id} className="particle" style={p.style} />
      ))}
    </div>
  )
}

export default FloatingParticles