import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import {
  FaHospital, FaUniversity, FaNetworkWired, FaVideo, FaUsers, FaTools,
  FaArrowRight, FaCheckCircle, FaStar, FaQuoteLeft, FaWrench, FaPlay, FaShieldAlt, FaClock, FaHeadset
} from 'react-icons/fa'
import AnimatedBackground from '../components/AnimatedBackground'
import SectionReveal from '../components/SectionReveal'
import AnimatedCounter from '../components/AnimatedCounter'
import TiltCard from '../components/TiltCard'
import MarqueeBar from '../components/MarqueeBar'
import MagneticButton from '../components/MagneticButton'

const Home = () => {
  const [services, setServices] = useState([])

  useEffect(() => {
    setServices([
      { icon: FaHospital, title: 'Hospital Biomedical Maintenance', desc: 'Preventive & corrective maintenance for all hospital biomedical equipment.', color: 'from-blue-500 to-cyan-500' },
      { icon: FaUniversity, title: 'University Equipment Service', desc: 'Scheduled maintenance & calibration for university lab devices.', color: 'from-purple-500 to-pink-500' },
      { icon: FaNetworkWired, title: 'IT & Network Support', desc: 'Complete IT infrastructure support & 24/7 troubleshooting.', color: 'from-emerald-500 to-teal-500' },
      { icon: FaVideo, title: 'Projector Repair', desc: 'Diagnostic & repair for multimedia projectors in lecture halls.', color: 'from-orange-500 to-red-500' },
      { icon: FaUsers, title: 'Manpower Supply', desc: 'Qualified technical & administrative manpower on demand.', color: 'from-indigo-500 to-blue-500' },
      { icon: FaTools, title: 'Technical Consulting', desc: 'Expert consultancy for equipment planning & lifecycle management.', color: 'from-pink-500 to-rose-500' },
    ])
  }, [])

  const stats = [
    { value: 50, suffix: '+', label: 'Hospitals & Universities' },
    { value: 5000, suffix: '+', label: 'Devices Maintained' },
    { value: 200, suffix: '+', label: 'Certified Engineers' },
    { value: 15, suffix: '+', label: 'Years Experience' },
  ]

  const testimonials = [
    { name: 'Dr. Ahmed Al-Rashid', role: 'Hospital Director', text: 'Sorouh Medical Investment keeps all our critical biomedical devices running smoothly. Their response time is unmatched.' },
    { name: 'Prof. Sarah Mohammed', role: 'University Lab Director', text: 'Their team maintains our lab equipment with exceptional precision. A trusted partner for our university.' },
    { name: 'Khalid Nasser', role: 'IT Manager', text: 'Reliable IT and network support, plus fast projector repair. Sorouh is our go-to technical partner.' },
  ]

  const features = [
    { icon: FaShieldAlt, title: 'Certified Experts', desc: 'All engineers are certified and trained' },
    { icon: FaClock, title: 'Fast Response', desc: '24/7 emergency breakdown support' },
    { icon: FaHeadset, title: 'Dedicated Support', desc: 'Personal account manager for every client' },
  ]

  return (
    <div className="overflow-hidden">
      {/* HERO */}
      <section className="relative overflow-hidden mesh-gradient">
        <AnimatedBackground variant="primary" />
        <div className="container-custom mx-auto px-4 section-padding relative">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full text-sm font-semibold mb-6 text-primary-800"
              >
                <span className="w-2 h-2 rounded-full bg-accent-500 animate-pulse" />
                <span className="hidden sm:inline">Biomedical • IT • Manpower</span>
                <span className="sm:hidden">Trusted Partner</span>
              </motion.span>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-950 leading-tight mb-4 md:mb-6">
                Trusted Partner for{' '}
                <span className="gradient-text">
                  <TypeAnimation
                    sequence={[
                      'Biomedical Maintenance',
                      2000,
                      'IT & Network Support',
                      2000,
                      'Projector Repair',
                      2000,
                      'Manpower Supply',
                      2000,
                    ]}
                    wrapper="span"
                    speed={40}
                    repeat={Infinity}
                  />
                </span>
              </h1>

              <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8 leading-relaxed max-w-xl">
                Sorouh Medical Investment delivers expert maintenance for hospital and university biomedical equipment, complete IT support, projector repair, and professional manpower supply in Taif, Saudi Arabia.
              </p>

              <div className="flex flex-wrap gap-3 md:gap-4">
                <MagneticButton>
                  <Link to="/services" className="btn-primary group">
                    <span>Explore Services</span>
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </MagneticButton>
                <MagneticButton>
                  <Link to="/contact" className="btn-secondary group">
                    <FaPlay className="text-xs" />
                    <span>Get a Quote</span>
                  </Link>
                </MagneticButton>
              </div>

              <div className="mt-8 md:mt-10 flex flex-wrap items-center gap-4 md:gap-6">
                <div className="flex -space-x-3">
                  {[1,2,3,4].map(i => (
                    <motion.div
                      key={i}
                      whileHover={{ y: -4, scale: 1.1, zIndex: 10 }}
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-400 to-accent-400 border-2 border-white flex items-center justify-center text-white font-bold text-sm shadow-md"
                    >
                      {String.fromCharCode(64 + i)}
                    </motion.div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1 text-yellow-400 mb-1">
                    {[1,2,3,4,5].map(i => <FaStar key={i} className="text-xs" />)}
                  </div>
                  <p className="text-xs md:text-sm text-gray-600">Trusted by 50+ institutions</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-primary-500/20 animate-float">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop"
                  alt="Biomedical Engineering"
                  className="w-full h-[350px] sm:h-[450px] md:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 glass-card rounded-xl p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white">
                      <FaShieldAlt />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Uptime Guarantee</p>
                      <p className="font-bold text-primary-950">99.9% Reliability</p>
                    </div>
                  </div>
                </div>
              </div>

              <motion.div
                animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-4 -right-4 md:-top-6 md:-right-6 bg-white rounded-2xl p-3 md:p-4 shadow-xl"
              >
                <div className="text-center">
                  <p className="text-2xl md:text-3xl font-bold gradient-text">
                    <AnimatedCounter end={24} suffix="/7" />
                  </p>
                  <p className="text-[10px] md:text-xs text-gray-500 font-medium">Support</p>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-white rounded-2xl p-3 md:p-4 shadow-xl"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-accent-100 flex items-center justify-center text-accent-600">
                    <FaCheckCircle />
                  </div>
                  <div>
                    <p className="text-xs md:text-sm font-bold text-primary-950">ISO Certified</p>
                    <p className="text-[10px] md:text-xs text-gray-500">Quality Assured</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <MarqueeBar />

      {/* STATS */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden">
        <div className="container-custom mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {stats.map((stat, i) => (
              <SectionReveal key={i} delay={i * 0.1}>
                <div className="relative text-center p-6 md:p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-accent-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition" />
                  <p className="text-3xl md:text-5xl font-bold gradient-text mb-2 relative">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="text-xs md:text-sm text-gray-600 font-medium relative">{stat.label}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <AnimatedBackground variant="secondary" />
        <div className="container-custom mx-auto px-4 relative">
          <SectionReveal>
            <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
              <span className="text-accent-600 font-semibold text-sm uppercase tracking-wider">Our Services</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-950 mt-3 mb-4">
                Complete <span className="gradient-text">Technical Solutions</span>
              </h2>
              <p className="text-gray-600 text-base md:text-lg">
                We keep hospitals, universities, and enterprises running with expert maintenance, IT support, and manpower.
              </p>
            </div>
          </SectionReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {services.map((service, i) => (
              <SectionReveal key={i} delay={i * 0.08}>
                <TiltCard>
                  <div className="group relative bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 h-full overflow-hidden">
                    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.color} opacity-10 rounded-full blur-2xl group-hover:opacity-30 transition-opacity`} />
                    <div className={`w-14 md:w-16 h-14 md:h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white text-xl md:text-2xl mb-5 md:mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform shadow-lg`}>
                      <service.icon />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-primary-950 mb-3">{service.title}</h3>
                    <p className="text-sm md:text-base text-gray-600 mb-4 leading-relaxed">{service.desc}</p>
                    <Link to="/services" className="inline-flex items-center gap-2 text-primary-600 font-semibold text-sm group-hover:gap-3 transition-all">
                      Learn More <FaArrowRight />
                    </Link>
                  </div>
                </TiltCard>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES STRIP */}
      <section className="py-12 md:py-16 bg-primary-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(11,192,148,0.2),transparent)]" />
        <div className="container-custom mx-auto px-4 relative">
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <SectionReveal key={i} delay={i * 0.1}>
                <div className="flex items-center gap-4 text-white p-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur flex items-center justify-center text-accent-400 text-xl flex-shrink-0">
                    <f.icon />
                  </div>
                  <div>
                    <h3 className="font-bold text-base md:text-lg">{f.title}</h3>
                    <p className="text-sm text-primary-200">{f.desc}</p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="section-padding">
        <div className="container-custom mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <SectionReveal direction="left">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&auto=format&fit=crop"
                  alt="Technical Team"
                  className="rounded-3xl shadow-2xl w-full h-[350px] md:h-[500px] object-cover"
                />
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -bottom-6 -right-6 glass-card rounded-2xl p-4 md:p-5 shadow-2xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white text-lg">
                      <FaStar />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-primary-950">
                        <AnimatedCounter end={99} suffix="%" />
                      </p>
                      <p className="text-xs text-gray-500">Client Satisfaction</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </SectionReveal>

            <SectionReveal direction="right" delay={0.15}>
              <span className="text-accent-600 font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-950 mt-3 mb-5 md:mb-6">
                Reliability You Can <span className="gradient-text">Count On</span>
              </h2>
              <p className="text-gray-600 mb-6 md:mb-8 leading-relaxed">
                With over 15 years of experience, we've built a reputation for keeping critical biomedical and IT systems operational when it matters most.
              </p>
              <div className="space-y-3 md:space-y-4">
                {[
                  'Certified biomedical engineers and IT specialists',
                  'Rapid response and 24/7 emergency support',
                  'Preventive maintenance contracts',
                  'Genuine spare parts and calibration tools',
                  'Flexible manpower supply on demand',
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3 group"
                  >
                    <div className="w-6 h-6 rounded-full bg-accent-100 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-accent-500 transition">
                      <FaCheckCircle className="text-accent-600 group-hover:text-white text-xs transition" />
                    </div>
                    <p className="text-gray-700 text-sm md:text-base">{item}</p>
                  </motion.div>
                ))}
              </div>
              <Link to="/about" className="btn-primary mt-6 md:mt-8 group">
                <span>Discover More</span>
                <FaArrowRight className="group-hover:translate-x-1 transition" />
              </Link>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section-padding bg-gradient-to-br from-primary-50 via-white to-accent-50 relative overflow-hidden">
        <AnimatedBackground variant="primary" />
        <div className="container-custom mx-auto px-4 relative">
          <SectionReveal>
            <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
              <span className="text-accent-600 font-semibold text-sm uppercase tracking-wider">Testimonials</span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-950 mt-3 mb-4">
                What Our <span className="gradient-text">Clients Say</span>
              </h2>
            </div>
          </SectionReveal>

          <div className="grid md:grid-cols-3 gap-5 md:gap-6">
            {testimonials.map((t, i) => (
              <SectionReveal key={i} delay={i * 0.12}>
                <div className="group bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 relative h-full border border-gray-100">
                  <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-primary-500/10 to-accent-500/10 rounded-br-full" />
                  <FaQuoteLeft className="text-accent-200 text-3xl md:text-4xl mb-4 relative" />
                  <p className="text-gray-600 mb-6 leading-relaxed italic text-sm md:text-base relative">"{t.text}"</p>
                  <div className="flex items-center gap-3 relative">
                    <div className="w-11 h-11 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white font-bold">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-primary-950 text-sm md:text-base">{t.name}</p>
                      <p className="text-xs md:text-sm text-gray-500">{t.role}</p>
                    </div>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-primary-800 via-primary-900 to-accent-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,white,transparent)]" />
        </div>
        <div className="container-custom mx-auto px-4 text-center relative">
          <SectionReveal>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6"
            >
              Need Maintenance or <span className="bg-gradient-to-r from-accent-300 to-white bg-clip-text text-transparent">Manpower Support?</span>
            </motion.h2>
            <p className="text-primary-100 text-base md:text-lg mb-6 md:mb-8 max-w-2xl mx-auto">
              Get a fast quote for biomedical equipment maintenance, IT support, projector repair, or manpower supply in Taif, Saudi Arabia.
            </p>
            <div className="flex flex-wrap gap-3 md:gap-4 justify-center">
              <MagneticButton>
                <Link to="/contact" className="px-6 md:px-8 py-3 md:py-4 bg-white text-primary-700 font-semibold rounded-full hover:shadow-2xl transition flex items-center gap-2 group">
                  Request a Quote <FaArrowRight className="group-hover:translate-x-1 transition" />
                </Link>
              </MagneticButton>
              <MagneticButton>
                <a href="tel:+966594946392" className="px-6 md:px-8 py-3 md:py-4 bg-transparent border-2 border-white/40 text-white font-semibold rounded-full hover:bg-white/10 transition">
                  Call: +966 594946392
                </a>
              </MagneticButton>
            </div>
          </SectionReveal>
        </div>
      </section>
    </div>
  )
}

export default Home