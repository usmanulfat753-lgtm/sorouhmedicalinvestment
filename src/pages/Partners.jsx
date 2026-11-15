// src/pages/Partners.jsx
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FaHandshake, FaStar, FaQuoteLeft, FaArrowRight, FaCheckCircle,
  FaMapMarkerAlt, FaExternalLinkAlt, FaUniversity, FaSearch,
  FaGraduationCap, FaClock, FaChartLine, FaTools, FaTag, FaBook,
  FaUserTie, FaTimes, FaGlobe, FaBolt, FaWrench, FaUserShield, FaAward
} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Breadcrumbs from '../components/Breadcrumbs'
import {
  universities,
  partnerStats,
  partnerTestimonials,
  partnershipBenefits,
} from '../data/partners'

/* ─── Icon map for benefits ─── */
const iconMap = {
  user: FaUserTie,
  clock: FaClock,
  chart: FaChartLine,
  tools: FaTools,
  tag: FaTag,
  book: FaBook,
  bolt: FaBolt,
  wrench: FaWrench,
  shield: FaUserShield,
  award: FaAward,
}

/* ─── Fallback logo (gradient initials) ─── */
const LogoFallback = ({ short }) => (
  <div className="w-full h-full flex items-center justify-center bg-white/10 border border-white/20 text-white font-bold text-2xl rounded-lg">
    {short}
  </div>
)

/* ─── Single partner card ─── */
const PartnerCard = ({ partner, index, featured = false }) => {
  const [imgError, setImgError] = useState(false)
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.05, duration: 0.5 }}
        className={`group p-6 h-full flex flex-col cursor-pointer rounded-3xl transition-all duration-500 border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 hover:shadow-2xl hover:shadow-accent-500/20 hover:-translate-y-2 ${
          featured ? 'partner-featured' : ''
        }`}
        onClick={() => setShowModal(true)}
      >
        {/* Logo area */}
        <div className="relative w-full h-24 md:h-28 mb-5 flex items-center justify-center bg-white/5 rounded-2xl overflow-hidden group-hover:bg-white/10 transition border border-white/5">
          {!imgError && partner.logo ? (
            <img
              src={partner.logo}
              alt={`${partner.name} logo`}
              loading="lazy"
              onError={() => setImgError(true)}
              className="max-h-16 md:max-h-20 max-w-[80%] object-contain filter drop-shadow-lg"
            />
          ) : (
            <div className="w-16 h-16">
              <LogoFallback short={partner.short} />
            </div>
          )}
          <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-accent-500 text-white flex items-center justify-center text-[10px] shadow-lg shadow-accent-500/50">
            <FaCheckCircle />
          </div>
          {featured && (
            <div className="absolute top-2 left-2 px-2 py-0.5 bg-yellow-400 text-yellow-900 rounded-full text-[10px] font-bold flex items-center gap-1 shadow-lg">
              <FaStar className="text-[8px]" /> Featured
            </div>
          )}
        </div>

        {/* Info */}
        <div className="flex-1">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="font-bold text-white text-base md:text-lg leading-tight group-hover:text-accent-300 transition">
              {partner.name}
            </h3>
            <FaExternalLinkAlt className="text-white/30 group-hover:text-accent-400 transition text-xs mt-1 flex-shrink-0" />
          </div>

          <div className="flex items-center gap-2 text-xs text-primary-200 mb-3">
            <FaMapMarkerAlt className="text-accent-500 text-[10px]" />
            <span>{partner.location}</span>
          </div>

          <div className="flex flex-wrap gap-1.5 mb-4">
            {partner.specialties.slice(0, 2).map((s, i) => (
              <span key={i} className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-primary-900/50 text-primary-200 border border-primary-700/50">
                {s}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between pt-3 border-t border-white/10 mt-auto">
            <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold text-white bg-accent-500/20 text-accent-300 border border-accent-500/30">
              {partner.type}
            </span>
            <span className="text-[10px] text-white/40 font-medium">
              Since {partner.since}
            </span>
          </div>
        </div>
      </motion.div>

      {/* Detail Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-primary-950/80 backdrop-blur-md"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 30 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-primary-900 rounded-3xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-white/10"
            >
              <div className="relative bg-white/5 p-6 text-white border-b border-white/10">
                <button
                  onClick={() => setShowModal(false)}
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition text-white"
                >
                  <FaTimes />
                </button>
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 rounded-2xl bg-white flex items-center justify-center flex-shrink-0 p-2">
                    {!imgError && partner.logo ? (
                      <img src={partner.logo} alt={partner.name} className="max-w-full max-h-full object-contain" onError={() => setImgError(true)} />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-primary-900 font-bold text-xl">{partner.short}</div>
                    )}
                  </div>
                  <div>
                    <h2 className="text-xl font-bold leading-tight mb-1 text-white">{partner.name}</h2>
                    <p className="text-accent-300 text-sm font-semibold">{partner.type}</p>
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-5">
                <p className="text-primary-100 text-sm leading-relaxed">{partner.description}</p>
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                    <p className="text-xs text-primary-300">Location</p>
                    <p className="text-sm font-bold text-white mt-1 flex items-center gap-1"><FaMapMarkerAlt className="text-accent-400 text-xs" /> {partner.location}</p>
                  </div>
                  <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                    <p className="text-xs text-primary-300">Partner Since</p>
                    <p className="text-sm font-bold text-white mt-1 flex items-center gap-1"><FaHandshake className="text-accent-400 text-xs" /> {partner.since}</p>
                  </div>
                  {partner.students && (
                    <div className="p-3 bg-white/5 rounded-xl border border-white/5 col-span-2">
                      <p className="text-xs text-primary-300">Student Population</p>
                      <p className="text-sm font-bold text-white mt-1 flex items-center gap-1"><FaGraduationCap className="text-accent-400 text-xs" /> {partner.students}</p>
                    </div>
                  )}
                </div>
                <div>
                  <p className="text-xs text-primary-300 mb-2 font-semibold uppercase tracking-wide">Specialties</p>
                  <div className="flex flex-wrap gap-1.5">
                    {partner.specialties.map((s, i) => (
                      <span key={i} className="px-2 py-1 rounded-lg text-xs font-semibold bg-primary-800 text-primary-100 border border-primary-700">{s}</span>
                    ))}
                  </div>
                </div>
                {partner.website && (
                  <a href={partner.website} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 w-full py-3 mt-2 bg-accent-600 hover:bg-accent-500 text-white rounded-xl font-semibold shadow-lg shadow-accent-500/30 transition">
                    Visit Website <FaExternalLinkAlt className="text-xs" />
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

const Partners = () => {
  const [search, setSearch] = useState('')

  const filtered = universities.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  )

  // Additional content for "What You Get"
  const coreServices = [
    { icon: 'bolt', title: 'Fast Maintenance', desc: 'Rapid response times for critical breakdowns. We get your equipment back online in record time.' },
    { icon: 'award', title: 'World-Class Engineers', desc: 'Top-certified biomedical engineers and IT technicians with global training standards.' },
    { icon: 'shield', title: '24/7 On-Site Support', desc: 'Our teams are available around the clock for emergency on-site repairs.' },
    { icon: 'wrench', title: 'Genuine Parts', desc: 'Only OEM and certified replacement parts are used to guarantee long-term reliability.' },
    ...partnershipBenefits // Keep the original user benefits
  ]

  return (
    <div className="overflow-hidden bg-primary-950 text-white min-h-screen">
      <Breadcrumbs label="Partners" />

      {/* ═══════ HERO ═══════ */}
      <section className="relative pt-16 pb-24 md:pt-24 md:pb-32 overflow-hidden border-b border-white/10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary-600/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-accent-500/10 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="container-custom mx-auto px-4 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full text-sm font-semibold mb-6 text-accent-300">
              <FaHandshake /> University Partners
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              Our <span className="bg-gradient-to-r from-primary-300 via-white to-accent-300 bg-clip-text text-transparent">Partners</span>
            </h1>
            <p className="text-primary-200 text-base md:text-xl max-w-2xl mx-auto mb-10">
              Trusted by Saudi Arabia's leading universities for laboratory equipment maintenance, calibration, and world-class engineering.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════ STATS ═══════ */}
      <section className="py-12 bg-primary-900/50 border-b border-white/5">
        <div className="container-custom mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {partnerStats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors"
              >
                <p className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-accent-300 to-primary-300 bg-clip-text text-transparent mb-2">{s.value}</p>
                <p className="text-sm md:text-base font-semibold text-white">{s.label}</p>
                <p className="text-xs text-primary-300 mt-1">{s.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ UNIVERSITIES GRID ═══════ */}
      <section className="py-20 relative">
        <div className="container-custom mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <span className="text-accent-400 font-semibold text-sm uppercase tracking-wider">Trusted By</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4">Our Partner <span className="text-accent-400">Universities</span></h2>
            <p className="text-primary-200">Click any card to view detailed information.</p>
          </motion.div>

          <div className="max-w-xl mx-auto mb-12 relative">
            <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-primary-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search universities..."
              className="w-full pl-14 pr-5 py-4 rounded-2xl bg-white/5 border border-white/20 text-white placeholder-primary-400 focus:border-accent-400 focus:bg-white/10 focus:ring-4 focus:ring-accent-400/20 outline-none transition-all backdrop-blur-md"
            />
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-16 text-primary-300">
              <FaSearch className="text-4xl mx-auto mb-3 opacity-50" />
              <p>No universities found matching "{search}".</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {filtered.map((partner, i) => (
                <PartnerCard key={partner.id} partner={partner} index={i} featured={i === 0} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ═══════ WORLD-CLASS ENGINEERS SECTION (NEW) ═══════ */}
      <section className="py-20 bg-primary-900 border-y border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(14,165,233,0.1),transparent_70%)] pointer-events-none" />
        <div className="container-custom mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="text-accent-400 font-semibold text-sm uppercase tracking-wider">The Sorouh Advantage</span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mt-3 mb-6">
                World's Best <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-300 to-accent-300">Engineers & Technicians</span>
              </h2>
              <p className="text-primary-200 text-lg leading-relaxed mb-8">
                We don't just maintain equipment; we protect your operations. Our team consists of internationally certified biomedical engineers, IT specialists, and calibration experts trained to handle the most complex medical devices in the world.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
                  <FaBolt className="text-3xl text-accent-400 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-white">15 min</p>
                  <p className="text-xs text-primary-300">Average response time</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
                  <FaUserShield className="text-3xl text-accent-400 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-white">100%</p>
                  <p className="text-xs text-primary-300">Certified professionals</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/20 to-accent-500/20 rounded-3xl blur-2xl" />
              <div className="relative bg-navy-900 border border-white/10 rounded-3xl p-8 shadow-2xl">
                <h3 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-4">Our Engineers Specialize In:</h3>
                <ul className="space-y-4">
                  {[
                    'Hospital Biomedical & Life Support Systems',
                    'Advanced Laboratory Diagnostics (CBC, X-Ray, MRI)',
                    'Dental Chairs & Sterilization Equipment',
                    'IT Networking, Servers & Cybersecurity',
                    'Industrial Electrical & Control Panels',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <FaCheckCircle className="text-accent-400 mt-1 flex-shrink-0" />
                      <span className="text-primary-100 text-sm md:text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════ BENEFITS / WHAT YOU GET (UPDATED) ═══════ */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-primary-600/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="container-custom mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-14"
          >
            <span className="text-accent-400 font-semibold text-sm uppercase tracking-wider">Partnership Benefits</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">
              What You <span className="text-accent-400">Get</span>
            </h2>
            <p className="text-primary-300 mt-4">
              When you partner with Sorouh, you gain a dedicated team committed to total equipment reliability and operational excellence.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {coreServices.map((b, i) => {
              const Icon = iconMap[b.icon] || FaCheckCircle
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary-800 flex items-center justify-center text-accent-400 text-xl mb-5 border border-primary-700 group-hover:scale-110 transition-transform">
                    <Icon />
                  </div>
                  <h3 className="font-bold text-white mb-2">{b.title}</h3>
                  <p className="text-sm text-primary-200">{b.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ═══════ TESTIMONIALS ═══════ */}
      <section className="py-20 relative border-t border-white/5">
        <div className="container-custom mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-14"
          >
            <span className="text-accent-400 font-semibold text-sm uppercase tracking-wider">Testimonials</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">
              What Our <span className="text-accent-400">Partners Say</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {partnerTestimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-white/5 rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-colors"
              >
                <FaQuoteLeft className="text-primary-700 text-4xl mb-6" />
                <p className="text-primary-100 mb-8 leading-relaxed italic">"{t.text}"</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary-800 flex items-center justify-center text-white font-bold border border-primary-700">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-white text-sm">{t.name}</p>
                      <p className="text-xs text-primary-300">{t.role}</p>
                    </div>
                  </div>
                  <div className="flex gap-1 text-accent-400">
                    {[...Array(t.rating)].map((_, j) => <FaStar key={j} className="text-xs" />)}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ CTA ═══════ */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-t from-primary-900 to-primary-950 border-t border-white/10">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_0%,white,transparent_70%)] pointer-events-none" />
        </div>
        <div className="container-custom mx-auto px-4 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              Become a <span className="text-accent-400">Partner</span>
            </h2>
            <p className="text-primary-200 mb-10 max-w-2xl mx-auto text-lg">
              Join Saudi Arabia's leading universities who trust Sorouh Medical Investment for fast maintenance, world-class engineers, and lab equipment calibration.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent-600 hover:bg-accent-500 text-white font-bold rounded-full shadow-xl shadow-accent-500/20 transition-all hover:-translate-y-1 group"
            >
              Contact Us <FaArrowRight className="group-hover:translate-x-1 transition" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Partners