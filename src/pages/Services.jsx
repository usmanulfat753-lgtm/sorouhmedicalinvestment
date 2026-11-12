import { motion } from 'framer-motion'
import { FaHospital, FaUniversity, FaNetworkWired, FaVideo, FaUsers, FaTools, FaArrowRight, FaCheckCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import AnimatedBackground from '../components/AnimatedBackground'
import SectionReveal from '../components/SectionReveal'
import TiltCard from '../components/TiltCard'

const Services = () => {
  const services = [
    { icon: FaHospital, title: 'Hospital Biomedical Maintenance', desc: 'Comprehensive preventive and corrective maintenance for all hospital biomedical equipment.', features: ['Patient monitors & ventilators', 'Imaging & diagnostic systems', 'Calibration & safety testing', '24/7 emergency breakdown support'], color: 'from-blue-500 to-cyan-500' },
    { icon: FaUniversity, title: 'University Equipment Maintenance', desc: 'Scheduled maintenance for university laboratory, research, and educational biomedical equipment.', features: ['Lab analyzer maintenance', 'Teaching equipment servicing', 'Preventive maintenance contracts', 'Calibration certificates'], color: 'from-purple-500 to-pink-500' },
    { icon: FaNetworkWired, title: 'IT & Network Support', desc: 'End-to-end IT infrastructure support for healthcare and educational institutions.', features: ['Network setup & structured cabling', 'Servers, Wi-Fi & security systems', 'Remote & on-site troubleshooting', 'IT asset management'], color: 'from-emerald-500 to-teal-500' },
    { icon: FaVideo, title: 'Projector Repair Services', desc: 'Diagnostic, repair, and preventive maintenance for multimedia and lecture hall projectors.', features: ['Lamp & lens replacement', 'Optical & electronic repair', 'On-site servicing', 'Maintenance contracts'], color: 'from-orange-500 to-red-500' },
    { icon: FaUsers, title: 'Manpower Supply', desc: 'Qualified technical and administrative manpower supply for short- and long-term engagements.', features: ['Biomedical engineers & technicians', 'IT & network technicians', 'Maintenance staff', 'Rapid deployment on demand'], color: 'from-indigo-500 to-blue-500' },
    { icon: FaTools, title: 'Technical Consulting', desc: 'Expert consultancy for equipment planning, procurement, installation, and lifecycle management.', features: ['Equipment procurement planning', 'Installation & commissioning', 'Lifecycle & replacement planning', 'Compliance & safety audits'], color: 'from-pink-500 to-rose-500' },
  ]

  return (
    <div className="overflow-hidden">
      <section className="bg-gradient-to-br from-primary-950 via-primary-900 to-accent-950 text-white py-16 md:py-24 relative overflow-hidden">
        <AnimatedBackground variant="secondary" />
        <div className="container-custom mx-auto px-4 text-center relative">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur rounded-full text-sm font-semibold mb-4">
              <span className="w-2 h-2 rounded-full bg-accent-400 animate-pulse" /> What We Offer
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Our <span className="bg-gradient-to-r from-accent-300 to-white bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-primary-200 text-base md:text-lg max-w-2xl mx-auto">
              Biomedical maintenance for hospitals and universities, IT & network support, projector repair, and professional manpower supply.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding relative">
        <div className="container-custom mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
            {services.map((service, i) => (
              <SectionReveal key={i} delay={i * 0.08}>
                <TiltCard>
                  <div className="group relative bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 h-full overflow-hidden">
                    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.color} opacity-10 rounded-full blur-2xl group-hover:opacity-30 transition-opacity`} />
                    <div className={`w-14 md:w-16 h-14 md:h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white text-xl md:text-2xl mb-5 md:mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform shadow-lg`}>
                      <service.icon />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-primary-950 mb-3">{service.title}</h3>
                    <p className="text-sm md:text-base text-gray-600 mb-5 leading-relaxed">{service.desc}</p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((f, j) => (
                        <li key={j} className="flex items-start gap-2 text-xs md:text-sm text-gray-700">
                          <FaCheckCircle className="text-accent-500 flex-shrink-0 mt-0.5" /> {f}
                        </li>
                      ))}
                    </ul>
                    <Link to="/contact" className="inline-flex items-center gap-2 text-primary-600 font-semibold text-sm group-hover:gap-3 transition-all">
                      Request Service <FaArrowRight />
                    </Link>
                  </div>
                </TiltCard>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-r from-primary-800 to-primary-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(11,192,148,0.2),transparent)]" />
        <div className="container-custom mx-auto px-4 text-center relative">
          <SectionReveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Need a Custom Maintenance Contract?</h2>
            <p className="text-primary-100 mb-6 md:mb-8 max-w-2xl mx-auto">
              We tailor maintenance, IT, and manpower packages to your institution's exact requirements.
            </p>
            <Link to="/contact" className="px-6 md:px-8 py-3 md:py-4 bg-white text-primary-700 font-semibold rounded-full hover:shadow-2xl transition inline-flex items-center gap-2 group">
              Request a Quote <FaArrowRight className="group-hover:translate-x-1 transition" />
            </Link>
          </SectionReveal>
        </div>
      </section>
    </div>
  )
}

export default Services