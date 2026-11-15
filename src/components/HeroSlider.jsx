// src/components/HeroSlider.jsx
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Autoplay, Pagination, Navigation, Keyboard } from 'swiper/modules'
import { motion } from 'framer-motion'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { equipmentSlides } from '../data/equipment'

// Swiper styles
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const HeroSlider = () => {
  return (
    <div className="relative">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 150,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        keyboard={{ enabled: true }}
        modules={[EffectCoverflow, Autoplay, Pagination, Navigation, Keyboard]}
        className="hero-swiper"
      >
        {equipmentSlides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full group">
              <img
                src={slide.image}
                alt={slide.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary-950/95 via-primary-950/40 to-transparent" />

              {/* Tag chip */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1.5 bg-white/20 backdrop-blur text-white text-xs font-bold rounded-full border border-white/30">
                  {slide.tag}
                </span>
              </div>

              {/* Stat chip */}
              <div className="absolute top-4 right-4">
                <div className="glass-card rounded-xl px-3 py-1.5 text-right">
                  <p className="text-xs text-gray-500">{slide.stats.label}</p>
                  <p className="text-sm font-bold text-primary-950">{slide.stats.value}</p>
                </div>
              </div>

              {/* Bottom content */}
              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 text-white">
                <p className="text-accent-300 text-xs font-semibold uppercase tracking-wider mb-1">
                  {slide.subtitle}
                </p>
                <h3 className="text-xl md:text-2xl font-bold mb-2 leading-tight">
                  {slide.title}
                </h3>
                <p className="text-xs md:text-sm text-white/80 line-clamp-2 mb-3">
                  {slide.description}
                </p>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold text-white hover:text-accent-300 transition group/link"
                >
                  Learn more
                  <FaArrowRight className="group-hover/link:translate-x-1 transition" />
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default HeroSlider