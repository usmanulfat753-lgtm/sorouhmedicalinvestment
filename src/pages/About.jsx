import { motion } from 'framer-motion'
import { FaBullseye, FaEye, FaHeart, FaUsers, FaAward, FaGlobe } from 'react-icons/fa'
import AnimatedBackground from '../components/AnimatedBackground'
import SectionReveal from '../components/SectionReveal'
import AnimatedCounter from '../components/AnimatedCounter'

const About = () => {
  const values = [
    { icon: FaHeart, title: 'Client First', desc: 'We prioritize uptime and reliability for every hospital, university, and enterprise we serve.' },
    { icon: FaAward, title: 'Excellence', desc: 'Certified engineers, genuine parts, and precise calibration in every job.' },
    { icon: FaUsers, title: 'Manpower Quality', desc: 'We supply only vetted, skilled biomedical engineers and IT technicians.' },
    { icon: FaGlobe, title: 'Integrity', desc: 'Transparent pricing, honest reporting, and ethical operations.' },
  ]

  const team = [
    { name: 'Dr. Fahad Al-Sorouh', role: 'CEO & Founder', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop' },
    { name: 'Eng. Layla Ahmed', role: 'Head of Biomedical Services', img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&auto=format&fit=crop' },
    { name: 'Mohammed Al-Otaibi', role: 'Head of IT & Network', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&auto=format&fit=crop' },
    { name: 'Nora Al-Qahtani', role: 'Manpower Operations Manager', img: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&auto=format&fit=crop' },
  ]

  return (
    <div className="overflow-hidden">
      <section className="bg-gradient-to-br from-primary-950 via-primary-900 to-accent-950 text-white py-16 md:py-24 relative overflow-hidden">
        <AnimatedBackground variant="secondary" />
        <div className="container-custom mx-auto px-4 text-center relative">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur rounded-full text-sm font-semibold mb-4">
              <span className="w-2 h-2 rounded-full bg-accent-400 animate-pulse" /> Our Story
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              About <span className="bg-gradient-to-r from-accent-300 to-white bg-clip-text text-transparent">Us</span>
            </h1>
            <p className="text-primary-200 text-base md:text-lg max-w-2xl mx-auto">
              Delivering dependable biomedical maintenance, IT support, and manpower solutions since 2008.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom mx-auto px-4 grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <SectionReveal direction="left">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop"
                alt="Our Story"
                className="rounded-3xl shadow-2xl w-full h-[350px] md:h-[500px] object-cover"
              />
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-6 -right-6 glass-card rounded-2xl p-4 shadow-2xl"
              >
                <p className="text-3xl font-bold gradient-text">
                  <AnimatedCounter end={15} suffix="+" />
                </p>
                <p className="text-xs text-gray-500 font-medium">Years of Service</p>
              </motion.div>
            </div>
          </SectionReveal>
          <SectionReveal direction="right">
            <span className="text-accent-600 font-semibold text-sm uppercase tracking-wider">Our Story</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-950 mt-3 mb-5 md:mb-6">
              Keeping Critical Systems <span className="gradient-text">Running Since 2008</span>
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Sorouh Medical Investment started as a small biomedical maintenance firm serving local hospitals. Over the years we expanded into university laboratory equipment, complete IT and network support, projector repair, and professional manpower supply.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Today we service 50+ institutions, maintain 5,000+ biomedical devices, and provide 200+ certified engineers and technicians — all committed to keeping your operations running without interruption.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl p-4">
                <p className="text-3xl font-bold text-primary-700"><AnimatedCounter end={15} suffix="+" /></p>
                <p className="text-sm text-gray-600">Years of Service</p>
              </div>
              <div className="bg-gradient-to-br from-accent-50 to-accent-100 rounded-xl p-4">
                <p className="text-3xl font-bold text-accent-700"><AnimatedCounter end={5000} suffix="+" /></p>
                <p className="text-sm text-gray-600">Devices Maintained</p>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className="section-padding bg-gray-50 relative overflow-hidden">
        <AnimatedBackground variant="primary" />
        <div className="container-custom mx-auto px-4 relative">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {[
              { icon: FaBullseye, title: 'Our Mission', text: 'To provide reliable biomedical maintenance, IT support, and skilled manpower that keeps hospitals, universities, and enterprises operating at peak performance.' },
              { icon: FaEye, title: 'Our Vision', text: 'To be the region\u2019s most trusted technical services partner for healthcare and educational institutions, known for precision, speed, and integrity.' },
            ].map((item, i) => (
              <SectionReveal key={i} delay={i * 0.15}>
                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg card-hover h-full relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-500/10 to-accent-500/10 rounded-full blur-2xl group-hover:opacity-60 transition" />
                  <div className="w-14 md:w-16 h-14 md:h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white text-xl md:text-2xl mb-5 md:mb-6 group-hover:rotate-12 transition-transform shadow-lg relative">
                    <item.icon />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-primary-950 mb-3 md:mb-4 relative">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base relative">{item.text}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom mx-auto px-4">
          <SectionReveal>
            <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
              <span className="text-accent-600 font-semibold text-sm uppercase tracking-wider">Our Values</span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-950 mt-3">What Drives Us <span className="gradient-text">Forward</span></h2>
            </div>
          </SectionReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {values.map((value, i) => (
              <SectionReveal key={i} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-2xl card-hover border border-gray-100 h-full group">
                  <div className="w-14 md:w-16 h-14 md:h-16 mx-auto rounded-full bg-gradient-to-br from-primary-100 to-accent-100 flex items-center justify-center text-primary-600 text-xl md:text-2xl mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                    <value.icon />
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-primary-950 mb-2">{value.title}</h3>
                  <p className="text-gray-600 text-xs md:text-sm leading-relaxed">{value.desc}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom mx-auto px-4">
          <SectionReveal>
            <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
              <span className="text-accent-600 font-semibold text-sm uppercase tracking-wider">Our Team</span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-950 mt-3">Meet Our <span className="gradient-text">Leadership</span></h2>
            </div>
          </SectionReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {team.map((member, i) => (
              <SectionReveal key={i} delay={i * 0.1}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg card-hover group">
                  <div className="aspect-square overflow-hidden bg-gray-200 relative">
                    <img src={member.img} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-950/60 to-transparent opacity-0 group-hover:opacity-100 transition" />
                  </div>
                  <div className="p-5 md:p-6 text-center">
                    <h3 className="font-bold text-base md:text-lg text-primary-950">{member.name}</h3>
                    <p className="text-accent-600 text-xs md:text-sm font-medium mt-1">{member.role}</p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About