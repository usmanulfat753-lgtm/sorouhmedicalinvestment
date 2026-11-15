// src/components/HeroSection.jsx
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { FaArrowRight, FaPlay, FaStar, FaShieldAlt, FaCheckCircle } from 'react-icons/fa'
import HeroSlider from './HeroSlider'
import FloatingParticles from './FloatingParticles'

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-950 via-primary-900 to-accent-950 text-white">
      {/* Animated mesh background */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary-500 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent-500 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Floating particles */}
      <FloatingParticles count={25} />

      <div className="container-custom mx-auto px-4 py-12 md:py-20 relative">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-6 items-center">
          {/* Left - Copy */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full text-sm font-semibold mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-accent-400 animate-pulse" />
              <span className="hidden sm:inline">Biomedical • IT • Electrical • Calibration</span>
              <span className="sm:hidden">Trusted Partner</span>
            </motion.span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-4 md:mb-6">
              Expert Maintenance for{' '}
              <span className="block mt-2 bg-gradient-to-r from-accent-300 via-white to-primary-300 bg-clip-text text-transparent">
                <TypeAnimation
                  sequence={[
                    'X-Ray Machines',
                    2000,
                    'CBC Analyzers',
                    2000,
                    'Autoclaves',
                    2000,
                    'Dental Chairs',
                    2000,
                    'Lab Devices',
                    2000,
                  ]}
                  wrapper="span"
                  speed={40}
                  repeat={Infinity}
                />
              </span>
            </h1>

            <p className="text-base md:text-lg text-primary-100 mb-6 md:mb-8 leading-relaxed max-w-xl">
              Sorouh Medical Investment keeps hospitals, universities, and clinics running with precision maintenance, calibration, and rapid repair — in Taif and across Saudi Arabia.
            </p>

            <div className="flex flex-wrap gap-3 md:gap-4 mb-8">
              <Link to="/services" className="group inline-flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-400 hover:to-accent-500 text-white font-semibold rounded-full shadow-2xl shadow-accent-500/30 transform hover:-translate-y-1 transition-all">
                Explore Services <FaArrowRight className="group-hover:translate-x-1 transition" />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/10 backdrop-blur-xl border-2 border-white/30 hover:bg-white/20 text-white font-semibold rounded-full transition-all">
                <FaPlay className="text-xs" /> Get a Quote
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center gap-4 md:gap-6 text-xs md:text-sm">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-primary-400 to-accent-400 border-2 border-white/60 flex items-center justify-center text-white font-bold text-xs md:text-sm shadow-lg"
                  >
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
                <p className="text-primary-200">Trusted by 50+ institutions</p>
              </div>
            </div>
          </motion.div>

          {/* Right - 3D Slider */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative perspective-2000"
          >
            {/* Orbiting rings behind slider */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="orbit w-[400px] h-[400px] md:w-[550px] md:h-[550px] rounded-full border border-white/10" />
              <div className="absolute orbit-reverse w-[300px] h-[300px] md:w-[420px] md:h-[420px] rounded-full border border-accent-500/20" />
            </div>

            {/* Slider */}
            <HeroSlider />

            {/* Floating badge top */}
            <motion.div
              animate={{ y: [0, -12, 0], rotate: [0, 4, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-2 -right-2 md:top-4 md:right-4 z-20 glass-3d rounded-2xl p-3 md:p-4"
            >
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white text-sm">
                  <FaShieldAlt />
                </div>
                <div>
                  <p className="text-[10px] md:text-xs text-gray-500">ISO Certified</p>
                  <p className="text-xs md:text-sm font-bold text-primary-950">Quality Assured</p>
                </div>
              </div>
            </motion.div>

            {/* Floating badge bottom */}
            <motion.div
              animate={{ y: [0, 12, 0], rotate: [0, -4, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute -bottom-2 -left-2 md:bottom-4 md:left-4 z-20 glass-3d rounded-2xl p-3 md:p-4"
            >
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-full bg-accent-100 flex items-center justify-center text-accent-600 text-sm">
                  <FaCheckCircle />
                </div>
                <div>
                  <p className="text-lg md:text-xl font-bold gradient-text">99.9%</p>
                  <p className="text-[10px] md:text-xs text-gray-500">Uptime</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave divider */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 30L60 25C120 20 240 10 360 15C480 20 600 40 720 45C840 50 960 40 1080 32.5C1200 25 1320 20 1380 17.5L1440 15V60H1380C1320 60 1200 60 1080 60C960 60 840 60 720 60C600 60 480 60 360 60C240 60 120 60 60 60H0V30Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  )
}

export default HeroSection