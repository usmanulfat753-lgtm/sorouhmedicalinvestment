import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight, FaSearch } from 'react-icons/fa'
import { servicesData, serviceCategories } from '../data/services'

const Services = () => {
  const [filter, setFilter] = useState('All')
  const [search, setSearch] = useState('')

  const filtered = servicesData.filter((s) => {
    const matchCat = filter === 'All' || s.category === filter
    const matchSearch = s.title.toLowerCase().includes(search.toLowerCase())
    return matchCat && matchSearch
  })

  return (
    <div>
      <section className="bg-gradient-to-br from-primary-950 to-primary-800 text-white py-16 md:py-24">
        <div className="container-custom mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Services</h1>
          <p className="text-primary-200 text-lg max-w-2xl mx-auto">
            Complete biomedical, IT, electrical, calibration, and mechanical services.
          </p>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container-custom mx-auto px-4">
          <div className="max-w-xl mx-auto mb-6">
            <div className="relative">
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search services..."
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none bg-white"
              />
            </div>
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            {serviceCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  filter === cat ? 'bg-primary-600 text-white shadow-lg' : 'bg-white text-gray-700 hover:bg-primary-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom mx-auto px-4">
          {filtered.length === 0 ? (
            <p className="text-center text-gray-500 py-20">No services found.</p>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((s) => (
                <Link
                  key={s.id}
                  to={`/services/${s.id}`}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all border border-gray-100"
                >
                  <div className="aspect-video overflow-hidden bg-gray-200 relative">
                    <img src={s.image} alt={s.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
                    <span className="absolute top-3 left-3 px-3 py-1 bg-white/90 text-primary-800 text-xs font-semibold rounded-full">
                      {s.category}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-primary-950 mb-2 group-hover:text-primary-600 transition">{s.title}</h3>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">{s.description}</p>
                    <span className="inline-flex items-center gap-2 text-primary-600 font-semibold text-sm group-hover:gap-3 transition-all">
                      View Details <FaArrowRight />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default Services