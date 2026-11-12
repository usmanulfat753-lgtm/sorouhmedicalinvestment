import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaMapMarkerAlt, FaClock, FaBriefcase, FaArrowRight, FaSearch, FaCheckCircle, FaHeart, FaGraduationCap, FaBalanceScale } from 'react-icons/fa'
import AnimatedBackground from '../components/AnimatedBackground'
import SectionReveal from '../components/SectionReveal'

const Careers = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [filter, setFilter] = useState('All')

  const jobs = [
    { id: 1, title: 'Biomedical Engineer', dept: 'Biomedical', location: 'Taif', type: 'Full-time', desc: 'Maintain and repair hospital biomedical equipment, perform calibration, and respond to breakdowns.' },
    { id: 2, title: 'Biomedical Technician', dept: 'Biomedical', location: 'Taif', type: 'Full-time', desc: 'Preventive maintenance and servicing of university laboratory and teaching equipment.' },
    { id: 3, title: 'Network Engineer', dept: 'IT', location: 'Taif', type: 'Full-time', desc: 'Design, install, and support hospital and university networks, structured cabling, and security systems.' },
    { id: 4, title: 'IT Support Specialist', dept: 'IT', location: 'Taif', type: 'Full-time', desc: 'On-site IT troubleshooting, user support, and asset management for institutional clients.' },
    { id: 5, title: 'Projector Repair Technician', dept: 'Technical', location: 'Taif', type: 'Full-time', desc: 'Diagnose and repair multimedia projectors, replace lamps/lenses, and perform on-site servicing.' },
    { id: 6, title: 'Manpower Operations Coordinator', dept: 'Operations', location: 'Taif', type: 'Full-time', desc: 'Coordinate deployment of biomedical and IT manpower to client sites across the region.' },
  ]

  const departments = ['All', 'Biomedical', 'IT', 'Technical', 'Operations']

  const filtered = jobs.filter(j => {
    const matchSearch = j.title.toLowerCase().includes(searchTerm.toLowerCase())
    const matchFilter = filter === 'All' || j.dept === filter
    return matchSearch && matchFilter
  })

  const perks = [
    { icon: FaHeart, title: 'Health Insurance', desc: 'Comprehensive medical coverage for you and your family', color: 'from-red-500 to-pink-500' },
    { icon: FaGraduationCap, title: 'Certification Support', desc: 'Sponsorship for biomedical & IT certifications', color: 'from-blue-500 to-indigo-500' },
    { icon: FaBalanceScale, title: 'Work-Life Balance', desc: 'Flexible scheduling and generous paid time off', color: 'from-emerald-500 to-teal-500' },
    { icon: FaCheckCircle, title: 'Career Growth', desc: 'Clear progression paths and mentorship programs', color: 'from-orange-500 to-amber-500' },
  ]

  return (
    <div className="overflow-hidden">
      <section className="bg-gradient-to-br from-primary-950 via-primary-900 to-accent-950 text-white py-16 md:py-24 relative overflow-hidden">
        <AnimatedBackground variant="secondary" />
        <div className="container-custom mx-auto px-4 text-center relative">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur rounded-full text-sm font-semibold mb-4">
              <span className="w-2 h-2 rounded-full bg-accent-400 animate-pulse" /> We're Hiring
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Join Our <span className="bg-gradient-to-r from-accent-300 to-white bg-clip-text text-transparent">Team</span>
            </h1>
            <p className="text-primary-200 text-base md:text-lg max-w-2xl mx-auto">
              Build a rewarding career in biomedical maintenance, IT support, and manpower operations.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom mx-auto px-4">
          <SectionReveal>
            <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
              <span className="text-accent-600 font-semibold text-sm uppercase tracking-wider">Why Work With Us</span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-950 mt-3">Benefits & <span className="gradient-text">Perks</span></h2>
            </div>
          </SectionReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {perks.map((p, i) => (
              <SectionReveal key={i} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-2xl card-hover border border-gray-100 h-full group">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${p.color} flex items-center justify-center text-white text-xl mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform shadow-lg`}>
                    <p.icon />
                  </div>
                  <h3 className="font-bold text-base md:text-lg text-primary-950 mb-2">{p.title}</h3>
                  <p className="text-gray-600 text-xs md:text-sm leading-relaxed">{p.desc}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50 relative overflow-hidden">
        <AnimatedBackground variant="primary" />
        <div className="container-custom mx-auto px-4 relative">
          <SectionReveal>
            <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
              <span className="text-accent-600 font-semibold text-sm uppercase tracking-wider">Open Positions</span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-950 mt-3 mb-6">Find Your <span className="gradient-text">Dream Job</span></h2>
              <div className="relative max-w-xl mx-auto">
                <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search job titles..."
                  className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-4 focus:ring-primary-100 outline-none bg-white transition"
                />
              </div>
              <div className="flex flex-wrap gap-2 justify-center mt-6">
                {departments.map(d => (
                  <button
                    key={d}
                    onClick={() => setFilter(d)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                      filter === d ? 'bg-gradient-to-r from-primary-600 to-accent-600 text-white shadow-lg' : 'bg-white text-gray-700 hover:bg-primary-50'
                    }`}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>
          </SectionReveal>

          <div className="space-y-4">
            {filtered.length === 0 ? (
              <div className="text-center py-16 text-gray-500">
                <p className="text-lg">No jobs found matching your search.</p>
              </div>
            ) : (
              filtered.map((job, i) => (
                <SectionReveal key={job.id} delay={i * 0.05}>
                  <div className="bg-white rounded-2xl p-5 md:p-6 shadow-sm hover:shadow-2xl transition-all border border-gray-100 group">
                    <div className="flex flex-col lg:flex-row justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2 flex-wrap">
                          <span className="px-3 py-1 bg-primary-100 text-primary-700 text-xs font-semibold rounded-full">{job.dept}</span>
                          <span className="px-3 py-1 bg-accent-100 text-accent-700 text-xs font-semibold rounded-full">{job.type}</span>
                        </div>
                        <h3 className="text-lg md:text-xl font-bold text-primary-950 mb-2 group-hover:text-primary-600 transition">{job.title}</h3>
                        <p className="text-gray-600 mb-3 text-sm md:text-base">{job.desc}</p>
                        <div className="flex flex-wrap gap-3 md:gap-4 text-xs md:text-sm text-gray-500">
                          <span className="flex items-center gap-1"><FaMapMarkerAlt className="text-accent-500" /> {job.location}</span>
                          <span className="flex items-center gap-1"><FaClock className="text-accent-500" /> {job.type}</span>
                          <span className="flex items-center gap-1"><FaBriefcase className="text-accent-500" /> {job.dept}</span>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <button className="btn-primary whitespace-nowrap text-sm">
                          Apply Now <FaArrowRight />
                        </button>
                      </div>
                    </div>
                  </div>
                </SectionReveal>
              ))
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Careers