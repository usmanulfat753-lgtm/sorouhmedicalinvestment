import { FaStar } from 'react-icons/fa'

const MarqueeBar = () => {
  const items = [
    'Hospital Biomedical Maintenance',
    'University Equipment Service',
    'IT & Network Support',
    'Projector Repair',
    'Manpower Supply',
    '24/7 Emergency Support',
  ]

  return (
    <div className="bg-gradient-to-r from-primary-700 via-primary-800 to-accent-700 py-4 overflow-hidden relative">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="flex items-center gap-4 mx-6 text-white font-semibold text-sm md:text-base">
            <FaStar className="text-yellow-300 text-xs" />
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

export default MarqueeBar