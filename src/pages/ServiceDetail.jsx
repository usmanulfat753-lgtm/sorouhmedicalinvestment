import { useParams, Link, Navigate } from 'react-router-dom'
import { FaArrowRight, FaCheckCircle, FaPhone, FaWhatsapp, FaArrowLeft } from 'react-icons/fa'
import { getServiceById, servicesData } from '../data/services'

const ServiceDetail = () => {
  const { id } = useParams()
  const service = getServiceById(id)

  if (!service) return <Navigate to="/services" replace />

  const related = servicesData.filter((s) => s.id !== service.id).slice(0, 3)

  return (
    <div>
      <section className="relative h-[300px] md:h-[450px] overflow-hidden">
        <img src={service.heroImage} alt={service.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-950/90 via-primary-950/60 to-primary-950/30" />
        <div className="absolute inset-0 flex items-end">
          <div className="container-custom mx-auto px-4 pb-8 md:pb-12 w-full">
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 backdrop-blur rounded-full text-xs font-semibold mb-3 text-white">
              {service.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-3">{service.title}</h1>
            <p className="text-white/90 text-sm md:text-lg max-w-3xl">{service.description}</p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 md:gap-12">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-primary-950 mb-4">About This Service</h2>
                <p className="text-gray-700 leading-relaxed mb-4">{service.longDescription}</p>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-primary-950 mb-6">What's Included</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {service.features.map((f, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl hover:bg-primary-50 transition">
                      <FaCheckCircle className="text-accent-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-primary-950 mb-6">Key Benefits</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {service.benefits.map((b, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 bg-gradient-to-r from-primary-50 to-accent-50 rounded-xl">
                      <div className="w-8 h-8 rounded-full bg-accent-500 text-white flex items-center justify-center flex-shrink-0">
                        <FaCheckCircle className="text-xs" />
                      </div>
                      <span className="text-sm font-medium text-gray-800">{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <aside className="space-y-6">
              <div className="bg-gradient-to-br from-primary-700 to-accent-700 text-white rounded-2xl p-6 md:p-8 shadow-xl">
                <h3 className="text-xl font-bold mb-2">Need This Service?</h3>
                <p className="text-primary-100 text-sm mb-5">Get a free quote within 24 hours.</p>
                <div className="space-y-2">
                  <a href="tel:+966594946392" className="flex items-center gap-2 bg-white text-primary-700 px-4 py-3 rounded-xl font-semibold hover:shadow-lg transition text-sm">
                    <FaPhone /> +966 594946392
                  </a>
                  <a href="https://wa.me/966594946392" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-green-500 text-white px-4 py-3 rounded-xl font-semibold hover:shadow-lg transition text-sm">
                    <FaWhatsapp /> WhatsApp Us
                  </a>
                  <Link to="/contact" className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur border-2 border-white/30 px-4 py-3 rounded-xl font-semibold hover:bg-white/20 transition text-sm">
                    Request a Quote <FaArrowRight />
                  </Link>
                </div>
              </div>
              <Link to="/services" className="flex items-center gap-2 text-primary-600 font-semibold hover:gap-3 transition-all text-sm">
                <FaArrowLeft /> Back to all services
              </Link>
            </aside>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section-padding bg-gray-50">
          <div className="container-custom mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-primary-950">Related <span className="gradient-text">Services</span></h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((r) => (
                <Link key={r.id} to={`/services/${r.id}`} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all border border-gray-100">
                  <div className="aspect-video overflow-hidden">
                    <img src={r.image} alt={r.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-primary-950 mb-2 group-hover:text-primary-600 transition">{r.title}</h3>
                    <span className="inline-flex items-center gap-2 text-primary-600 font-semibold text-sm group-hover:gap-3 transition-all">
                      Learn More <FaArrowRight />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}

export default ServiceDetail