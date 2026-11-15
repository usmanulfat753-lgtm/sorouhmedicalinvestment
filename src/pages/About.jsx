// src/pages/About.jsx
import { motion } from 'framer-motion'
import {
  FaBullseye, FaEye, FaHeart, FaUsers, FaAward, FaGlobe,
  FaArrowRight, FaWrench, FaMicroscope, FaTools, FaCheckCircle,
  FaQuoteLeft, FaPlay, FaQuoteRight,
} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Breadcrumbs from '../components/Breadcrumbs'
import { images } from '../data/services'

const About = () => {
  const values = [
    { icon: FaHeart, title: 'Client First', desc: 'We prioritize uptime and reliability for every client.', color: 'from-rose-500 to-pink-500' },
    { icon: FaAward, title: 'Excellence', desc: 'Certified engineers, genuine parts, precise calibration.', color: 'from-primary-500 to-accent-500' },
    { icon: FaUsers, title: 'Teamwork', desc: 'Skilled engineers and IT specialists working together.', color: 'from-purple-500 to-indigo-500' },
    { icon: FaGlobe, title: 'Integrity', desc: 'Transparent pricing and ethical operations.', color: 'from-amber-500 to-orange-500' },
  ]

  const engineersList = [
    'Senior Biomedical Engineers',
    'Network & IT Specialists',
    'Field Service Technicians',
    'Calibration Specialists',
    'Dental Equipment Experts',
    'Electrical Engineers',
  ]

  const stats = [
    { value: '15+', label: 'Years Experience' },
    { value: '50+', label: 'Partner Institutions' },
    { value: '50,000+', label: 'Devices Maintained' },
    { value: '200+', label: 'Certified Engineers' },
  ]

  return (
    <div className="overflow-hidden">
      <Breadcrumbs label="About Us" />

      {/* HERO */}
      <section className="relative bg-navy-900 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.08] pointer-events-none">
          <div className="absolute inset-0" style={{ backgroundImage: `linear-gradient(rgba(11,192,148,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(11,192,148,0.4) 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary-600/20 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="container-custom mx-auto px-4 py-16 md:py-24 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="relative pl-6 border-l-2 border-teal-400">
              <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="inline-flex items-center gap-2 text-teal-300 text-xs md:text-sm font-semibold uppercase tracking-[0.2em] mb-6">
                <span className="w-8 h-px bg-teal-400" /> About Sorouh
              </motion.span>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-4">Expertise with purpose.</h1>
              <h2 className="text-4xl md:text-6xl lg:text-7xl italic font-light text-rose-300 leading-[1.1] mb-8" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>Progress through partnership.</h2>

              <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-lg mb-8">Discover the people, principles and specialist services behind Sorouh Investment Company.</p>

              <div className="flex flex-wrap gap-3 mb-10">
                <Link to="/services" className="inline-flex items-center gap-2 px-6 py-3 bg-rose-600 hover:bg-rose-500 text-white font-semibold rounded-full transition-all hover:-translate-y-1">Explore Services <FaArrowRight /></Link>
                <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur border border-white/20 hover:bg-white/20 text-white font-semibold rounded-full transition-all"><FaPlay className="text-xs" /> Get in Touch</Link>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-white/10">
                {stats.map((s, i) => (
                  <div key={i}><p className="text-2xl md:text-3xl font-bold text-white mb-0.5">{s.value}</p><p className="text-xs text-gray-400">{s.label}</p></div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative hidden lg:block">
              <div className="relative h-[500px]">
                <motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }} className="absolute top-0 right-0 w-80 h-96 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10">
                  <img src={images.technicianWorking} alt="Technician repairing medical equipment" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4"><span className="inline-block px-3 py-1 bg-accent-500 text-white text-xs font-bold rounded-full">Biomedical Service</span></div>
                </motion.div>

                <motion.div animate={{ y: [0, 12, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }} className="absolute bottom-0 left-0 w-56 h-64 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10">
                  <img src={images.calibration} alt="Engineer working on lab equipment" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3"><span className="inline-block px-2 py-0.5 bg-rose-500 text-white text-[10px] font-bold rounded-full">Certified Experts</span></div>
                </motion.div>

                <motion.div animate={{ y: [0, -8, 0], rotate: [0, 3, 0] }} transition={{ duration: 4, repeat: Infinity }} className="absolute top-1/2 left-1/4 bg-white rounded-2xl p-4 shadow-2xl backdrop-blur">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-500 to-teal-500 flex items-center justify-center text-white"><FaTools /></div>
                    <div><p className="text-xs text-gray-500">On-time Service</p><p className="font-bold text-gray-900 text-sm">99.9%</p></div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 30L60 25C120 20 240 10 360 15C480 20 600 40 720 45C840 50 960 40 1080 32.5C1200 25 1320 20 1380 17.5L1440 15V60H1380C1320 60 1200 60 1080 60C960 60 840 60 720 60C600 60 480 60 360 60C240 60 120 60 60 60H0V30Z" fill="white" /></svg>
        </div>
      </section>

      {/* UPDATED CEO MESSAGE */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="container-custom mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto bg-gray-50 rounded-3xl p-8 md:p-14 shadow-xl border border-gray-100 relative"
          >
            <FaQuoteLeft className="absolute top-8 left-8 text-6xl md:text-8xl text-primary-100 opacity-50 pointer-events-none" />

            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
                Message from the <span className="bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">CEO</span>
              </h2>
              
              <div className="space-y-4 text-gray-600 text-base md:text-lg leading-relaxed">
                <p>
                  At our company, we believe that technology, innovation, and reliable services are the foundation of a better and more sustainable future.
                </p>
                <p>
                  Our mission is to deliver high-quality maintenance, technical support, and integrated solutions across the healthcare, education, and information technology sectors. We specialize in the installation, maintenance, repair, and technical support of biomedical and medical equipment used in hospitals, laboratories, universities, and research facilities. In addition, we provide comprehensive IT solutions and technology services designed to help organizations operate more efficiently and securely.
                </p>
                <p>
                  Our goal is not simply to provide services, but to build long-term partnerships based on trust, professionalism, and excellence. We are committed to maintaining the highest standards of quality, safety, and customer satisfaction while continuously adopting modern technologies and innovative approaches.
                </p>
                <p>
                  Looking ahead, our vision is to become a trusted leader in technical maintenance and integrated technology solutions, contributing to the advancement of healthcare, education, and digital transformation.
                </p>
                <p>
                  I sincerely appreciate the trust of our valued clients, the dedication of our professional team, and the continued support of our partners. Together, we will continue to grow, innovate, and create lasting value.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200 flex flex-col items-start">
                <p className="text-xl font-bold text-gray-900 mb-1">CEO</p>
                <p className="text-sm font-medium text-primary-600 italic">Leading with Vision, Delivering with Excellence.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* REPAIR GALLERY */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-rose-600 font-semibold text-sm uppercase tracking-wider">In Action</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">Our Engineers <span className="bg-gradient-to-r from-rose-500 to-primary-600 bg-clip-text text-transparent">at Work</span></h2>
            <p className="text-gray-600">Certified technicians repairing, calibrating, and maintaining critical medical equipment across Saudi Arabia.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { img: images.biomedicalDevice, title: 'Biomedical Repair', desc: 'Precision repair of medical monitoring devices', icon: FaMicroscope },
              { img: images.calibration, title: 'Equipment Calibration', desc: 'ISO-traceable calibration of lab instruments', icon: FaTools },
              { img: images.technicianWorking, title: 'On-Site Service', desc: 'Rapid response maintenance at your facility', icon: FaWrench },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }} className="group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all">
                <div className="aspect-[4/5] overflow-hidden"><img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" /></div>
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center mb-3 text-xl"><item.icon /></div>
                  <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-300">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-rose-600 font-semibold text-sm uppercase tracking-wider">Our Values</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">What Drives Us <span className="bg-gradient-to-r from-rose-500 to-primary-600 bg-clip-text text-transparent">Forward</span></h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-gray-50 rounded-2xl p-6 text-center shadow-sm hover:shadow-xl transition-all border border-gray-100 group">
                <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-br ${v.color} flex items-center justify-center text-white text-2xl mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform`}><v.icon /></div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-gray-600 text-sm">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-navy-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: `linear-gradient(rgba(11,192,148,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(11,192,148,0.3) 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />
        </div>
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-rose-500/20 rounded-full blur-3xl" />
        <div className="container-custom mx-auto px-4 text-center relative">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Ready to <span className="italic font-light text-rose-300" style={{ fontFamily: 'Georgia, serif' }}>work together?</span></h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">Get in touch to discuss your biomedical, IT, or calibration requirements.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-rose-600 hover:bg-rose-500 text-white font-semibold rounded-full transition-all hover:-translate-y-1 group">Contact Us <FaArrowRight className="group-hover:translate-x-1 transition" /></Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default About