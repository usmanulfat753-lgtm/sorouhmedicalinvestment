// src/pages/Team.jsx
import { motion } from 'framer-motion'
import {
  FaUsers, FaUserMd, FaNetworkWired, FaTools, FaFlask,
  FaBuilding, FaHeartbeat, FaCogs, FaBolt, FaBriefcase,
  FaArrowRight, FaHandshake,
} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import AnimatedBackground from '../components/AnimatedBackground'
import SectionReveal from '../components/SectionReveal'
import Breadcrumbs from '../components/Breadcrumbs'

const Team = () => {
  // Expanded list of roles without images
  const departments = [
    { icon: FaUserMd, title: 'Biomedical Engineering', count: '45+ Specialists', desc: 'Expert engineers handling hospital and lab equipment maintenance, calibration, and repair.' },
    { icon: FaNetworkWired, title: 'IT & Networking', count: '30+ Specialists', desc: 'Network engineers, IT support staff, and system administrators managing digital infrastructure.' },
    { icon: FaTools, title: 'Field Service Technicians', count: '60+ Technicians', desc: 'Rapid-response technicians deployed across the Kingdom for on-site repairs and support.' },
    { icon: FaFlask, title: 'Laboratory Specialists', count: '25+ Experts', desc: 'Microscope, autoclave, and analyzer specialists ensuring precise lab operations.' },
    { icon: FaBolt, title: 'Electrical Systems', count: '20+ Engineers', desc: 'Certified electrical engineers maintaining control panels and medical-grade power systems.' },
    { icon: FaCogs, title: 'Mechanical Systems', count: '15+ Experts', desc: 'HVAC, chiller, and mechanical system specialists keeping facilities operational.' },
    { icon: FaHeartbeat, title: 'Clinical Operations', count: '10+ Managers', desc: 'Clinical coordinators and managers overseeing partner hospital requirements.' },
    { icon: FaHandshake, title: 'Sales & Account Management', count: '12+ Managers', desc: 'Dedicated account managers coordinating directly with our partner universities and hospitals.' },
    { icon: FaBriefcase, title: 'Administrative Support', count: '15+ Staff', desc: 'HR, finance, and procurement professionals keeping our operations running smoothly.' },
  ]

  const stats = [
    { value: '200+', label: 'Total Team Members' },
    { value: '50+', label: 'Partner Institutions' },
    { value: '3', label: 'Regional Offices' },
    { value: '24/7', label: 'Active Support' },
  ]

  return (
    <div className="overflow-hidden">
      <Breadcrumbs label="Team" />

      {/* ═══════ HERO ═══════ */}
      <section className="bg-gradient-to-br from-primary-950 via-primary-900 to-accent-950 text-white py-16 md:py-24 relative overflow-hidden">
        <AnimatedBackground variant="secondary" />
        <div className="container-custom mx-auto px-4 text-center relative">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur rounded-full text-sm font-semibold mb-4">
              <FaUsers /> Our People
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Meet the <span className="bg-gradient-to-r from-accent-300 to-white bg-clip-text text-transparent">Team</span>
            </h1>
            <p className="text-primary-200 text-base md:text-lg max-w-2xl mx-auto">
              A dedicated workforce of over 200 certified engineers, IT specialists, and operations professionals working to keep your critical systems running 24/7.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════ STATS ═══════ */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container-custom mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {stats.map((s, i) => (
              <SectionReveal key={i} delay={i * 0.1}>
                <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:shadow-lg transition-all">
                  <p className="text-3xl md:text-5xl font-bold gradient-text mb-2">
                    {s.value}
                  </p>
                  <p className="text-sm text-gray-600 font-medium">{s.label}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ DEPARTMENTS / ROLES (No Images) ═══════ */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom mx-auto px-4">
          <SectionReveal>
            <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
              <span className="text-accent-600 font-semibold text-sm uppercase tracking-wider">Our Departments</span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-950 mt-3">
                Certified <span className="gradient-text">Specialists</span>
              </h2>
              <p className="text-gray-600 mt-4">
                We organize our specialists into focused departments to ensure precision, speed, and deep expertise in every area we service.
              </p>
            </div>
          </SectionReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept, i) => (
              <SectionReveal key={i} delay={i * 0.05}>
                <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-2xl card-hover border border-gray-100 h-full group">
                  
                  {/* Icon instead of image */}
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-100 to-accent-100 flex items-center justify-center text-primary-600 text-2xl mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                    <dept.icon />
                  </div>

                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-lg text-primary-950 leading-tight group-hover:text-primary-600 transition">
                      {dept.title}
                    </h3>
                  </div>
                  
                  {/* Department Count tag */}
                  <span className="inline-block px-3 py-1 bg-accent-50 text-accent-700 text-xs font-bold rounded-full mb-4">
                    {dept.count}
                  </span>

                  <p className="text-sm text-gray-600 leading-relaxed">
                    {dept.desc}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ CTA ═══════ */}
      <section className="section-padding bg-gradient-to-br from-primary-800 via-primary-900 to-accent-900 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,white,transparent)]" />
        </div>
        <div className="container-custom mx-auto px-4 relative">
          <SectionReveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Growing Team</h2>
            <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
              We are always looking for certified engineers and IT specialists to join our mission. Check our open positions.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/careers" className="px-8 py-4 bg-white text-primary-700 font-semibold rounded-full hover:shadow-2xl transition flex items-center gap-2">
                View Careers <FaArrowRight />
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>

    </div>
  )
}

export default Team