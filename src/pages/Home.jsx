// src/pages/Home.jsx
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  FaArrowRight, FaCheckCircle, FaStar, FaQuoteLeft, FaPhone,
  FaPlay, FaVolumeMute,
} from 'react-icons/fa'
import { servicesData, images } from '../data/services'
import heroVideo from '../assets/videos/hero-video.mp4' // ← YOUR VIDEO FILE

const GALLERY_IMAGES = [
  { src: images.patientMonitor, label: 'Patient Monitors' },
  { src: images.labEquipment, label: 'Lab Analyzers' },
  { src: images.autoclave, label: 'Autoclaves' },
  { src: images.dentalChair, label: 'Dental Chairs' },
  { src: images.itNetwork, label: 'Network Systems' },
  { src: images.microscope, label: 'Microscopes' },
  { src: images.xrayMachine, label: 'X-Ray Machines' },
  { src: images.mechanicalSystem, label: 'Mechanical Systems' },
  { src: images.controlPanel, label: 'Control Panels' },
  { src: images.calibration, label: 'Calibration Tools' },
]

const Home = () => {
  const featuredServices = servicesData.slice(0, 6)

  return (
    <div>
      {/* ═══════════════════════════════════════════════════════
         HERO — VIDEO ONLY (No images, no slider)
         ═══════════════════════════════════════════════════════ */}
      <section className="relative min-h-[600px] md:min-h-[700px] overflow-hidden bg-primary-950 flex items-center">
        
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster={images.hero[0]}
        >
          <source src={heroVideo} type="video/mp4" />
        </video>

        {/* Readability Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-950/95 via-primary-950/70 to-primary-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-950/80 via-transparent to-primary-950/20" />

        {/* Video badge */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="absolute top-24 md:top-28 left-4 md:left-8 z-20 flex items-center gap-2 px-3 py-1.5 bg-red-500/20 backdrop-blur-md border border-red-500/30 rounded-full text-xs font-semibold text-white"
        >
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          NOW PLAYING
          <FaVolumeMute className="text-[10px] opacity-60" />
        </motion.div>

        {/* Content */}
        <div className="container-custom mx-auto px-4 py-20 md:py-28 relative z-10">
          <div className="max-w-3xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full text-sm font-semibold text-white mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-accent-400 animate-pulse" />
              Biomedical • IT • Electrical • Calibration
            </motion.span>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4">
                Engineering Excellence
              </h1>
              <p className="text-lg md:text-2xl text-accent-200 mb-8 max-w-xl">
                Watch our team in action — precision maintenance & rapid repair
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-base md:text-lg text-white/80 mb-8 max-w-xl leading-relaxed"
            >
              Sorouh Medical Investment keeps hospitals, universities, and clinics running with precision maintenance and rapid repair.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-3 md:gap-4 mb-8"
            >
              <Link
                to="/services"
                className="group inline-flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-400 hover:to-accent-500 text-white font-semibold rounded-full shadow-2xl shadow-accent-500/30 transform hover:-translate-y-1 transition-all"
              >
                Explore Services <FaArrowRight className="group-hover:translate-x-1 transition" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/10 backdrop-blur-xl border-2 border-white/30 hover:bg-white/20 text-white font-semibold rounded-full transition-all"
              >
                <FaPlay className="text-xs" /> Get a Quote
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap items-center gap-6 text-white/90 text-sm"
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-400 to-accent-400 border-2 border-white/60 flex items-center justify-center text-white font-bold text-xs">
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 text-yellow-400 mb-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <FaStar key={i} className="text-xs" />
                  ))}
                </div>
                <p className="text-white/80 text-xs">Trusted by 50+ institutions</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
         SCROLLING GALLERY
         ═══════════════════════════════════════════════════════ */}
      <section className="py-12 md:py-16 bg-white border-b border-gray-100 overflow-hidden">
        <div className="container-custom mx-auto px-4 mb-8">
          <div className="text-center">
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">Equipment We Service</span>
            <h2 className="text-2xl md:text-3xl font-bold text-primary-950 mt-2">
              Trusted <span className="gradient-text">Across Every Device</span>
            </h2>
          </div>
        </div>
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          <div className="flex logo-marquee-track gap-4 md:gap-6">
            {[...GALLERY_IMAGES, ...GALLERY_IMAGES].map((img, i) => (
              <div key={i} className="group relative w-56 md:w-72 h-40 md:h-48 flex-shrink-0 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all">
                <img src={img.src} alt={img.label} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="text-white font-semibold text-sm md:text-base">{img.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-white py-16 md:py-20">
        <div className="container-custom mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {[
              { v: '50+', l: 'Institutions' },
              { v: '50,000+', l: 'Devices Maintained' },
              { v: '200+', l: 'Certified Engineers' },
              { v: '15+', l: 'Years Experience' },
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6 md:p-8 rounded-2xl bg-gradient-to-br from-primary-50 to-white border border-primary-100 hover:shadow-2xl hover:-translate-y-2 transition-all group"
              >
                <p className="text-3xl md:text-5xl font-bold gradient-text mb-2">{s.v}</p>
                <p className="text-xs md:text-sm text-gray-600 font-medium">{s.l}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">Our Services</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-950 mt-3 mb-4">
              Complete <span className="gradient-text">Technical Solutions</span>
            </h2>
            <p className="text-gray-600 text-base md:text-lg">
              From X-ray machines to autoclaves — we maintain every device in your facility.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredServices.map((s, i) => (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <Link
                  to={`/services/${s.id}`}
                  className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100"
                >
                  <div className="aspect-video overflow-hidden bg-gray-200 relative">
                    <img
                      src={s.image}
                      alt={s.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
                    <span className="absolute top-3 left-3 px-3 py-1 bg-white/90 backdrop-blur text-primary-800 text-xs font-semibold rounded-full">
                      {s.category}
                    </span>
                  </div>
                  <div className="p-5 md:p-6">
                    <h3 className="text-lg font-bold text-primary-950 mb-2 group-hover:text-primary-600 transition">
                      {s.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">{s.description}</p>
                    <span className="inline-flex items-center gap-2 text-primary-600 font-semibold text-sm group-hover:gap-3 transition-all">
                      Learn More <FaArrowRight />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10 md:mt-14">
            <Link to="/services" className="btn-primary group">
              <span>View All {servicesData.length} Services</span>
              <FaArrowRight className="group-hover:translate-x-1 transition" />
            </Link>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img src={images.technicianWorking} alt="Technical Team" className="w-full h-[350px] md:h-[500px] object-cover" />
              </div>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-6 -right-6 glass-3d rounded-2xl p-4 md:p-5 shadow-2xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white text-lg">
                    <FaStar />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-primary-950">99%</p>
                    <p className="text-xs text-gray-500">Client Satisfaction</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-950 mt-3 mb-5">
                Reliability You Can <span className="gradient-text">Count On</span>
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                With over 15 years of experience, we've built a reputation for keeping critical biomedical systems operational when it matters most.
              </p>
              <div className="space-y-3">
                {['Certified biomedical engineers', 'Rapid response and 24/7 emergency support', 'Preventive maintenance contracts', 'Genuine spare parts and calibration tools', 'ISO-traceable calibration certificates'].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <FaCheckCircle className="text-accent-600 text-xs" />
                    </div>
                    <p className="text-gray-700 text-sm md:text-base">{item}</p>
                  </div>
                ))}
              </div>
              <Link to="/about" className="btn-primary mt-6 group">
                <span>Discover More</span>
                <FaArrowRight className="group-hover:translate-x-1 transition" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section-padding bg-navy-950 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-600/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="container-custom mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <span className="text-accent-400 font-semibold text-sm uppercase tracking-wider">Testimonials</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4">
              What Our <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">Clients Say</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5 md:gap-6">
            {[
              { name: 'Dr. Ahmed Al-Rashid', role: 'Hospital Director', text: 'Sorouh keeps all our X-ray and imaging equipment running flawlessly.' },
              { name: 'Prof. Sarah Mohammed', role: 'University Lab Director', text: 'Their team calibrates our lab equipment with exceptional precision.' },
              { name: 'Khalid Nasser', role: 'Dental Clinic Owner', text: 'Fast dental chair repairs and friendly service. Highly recommended.' },
            ].map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 rounded-2xl p-6 md:p-8 shadow-lg border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300"
              >
                <FaQuoteLeft className="text-primary-700 text-3xl mb-4" />
                <p className="text-primary-100 mb-6 leading-relaxed italic text-sm md:text-base">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-primary-800 border border-primary-700 flex items-center justify-center text-white font-bold">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-white text-sm md:text-base">{t.name}</p>
                    <p className="text-xs md:text-sm text-primary-300">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-primary-800 via-primary-900 to-accent-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,white,transparent)]" />
        </div>
        <div className="container-custom mx-auto px-4 text-center relative">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Need Maintenance or <span className="bg-gradient-to-r from-accent-300 to-white bg-clip-text text-transparent">Technical Support?</span>
          </h2>
          <p className="text-primary-100 text-base md:text-lg mb-8 max-w-2xl mx-auto">
            Get a fast quote for any service — X-ray, CBC, autoclave, dental chairs, or lab equipment.
          </p>
          <div className="flex flex-wrap gap-3 md:gap-4 justify-center">
            <Link to="/contact" className="px-6 md:px-8 py-3 md:py-4 bg-white text-primary-700 font-semibold rounded-full hover:shadow-2xl transition inline-flex items-center gap-2 group">
              Request a Quote <FaArrowRight className="group-hover:translate-x-1 transition" />
            </Link>
            <a href="tel:+966594946392" className="px-6 md:px-8 py-3 md:py-4 bg-transparent border-2 border-white/40 text-white font-semibold rounded-full hover:bg-white/10 transition">
              <FaPhone className="inline mr-2" /> +966 594946392
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home