import { FaArrowRight, FaUser, FaCalendarAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Blog = () => {
  const posts = [
    { title: '5 Signs Your Hospital Equipment Needs Maintenance', category: 'Maintenance', date: 'Nov 10, 2025', author: 'Layla Ahmed', img: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&auto=format&fit=crop' },
    { title: 'Why Universities Need Preventive Lab Maintenance', category: 'Education', date: 'Nov 5, 2025', author: 'Fahad Al-Sorouh', img: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&auto=format&fit=crop' },
    { title: 'Network Security for Healthcare Facilities', category: 'IT', date: 'Oct 28, 2025', author: 'Mohammed Al-Otaibi', img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&auto=format&fit=crop' },
    { title: 'Calibration Best Practices for Laboratories', category: 'Calibration', date: 'Oct 20, 2025', author: 'Ahmed Saleh', img: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&auto=format&fit=crop' },
    { title: 'Electrical Safety in Medical Equipment', category: 'Electrical', date: 'Oct 12, 2025', author: 'Nora Al-Qahtani', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop' },
    { title: 'The Complete Guide to AMC Contracts', category: 'Contracts', date: 'Oct 3, 2025', author: 'Fahad Al-Sorouh', img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&auto=format&fit=crop' },
  ]

  return (
    <div>
      <section className="bg-gradient-to-br from-primary-950 to-primary-800 text-white py-20">
        <div className="container-custom mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Blog & News</h1>
          <p className="text-primary-200 text-lg max-w-2xl mx-auto">
            Expert insights on maintenance, IT, and calibration.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((p, i) => (
              <Link key={i} to="#" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition border border-gray-100">
                <div className="aspect-video overflow-hidden">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-xs font-semibold rounded-full mb-3">{p.category}</span>
                  <h3 className="font-bold text-lg text-primary-950 mb-2 group-hover:text-primary-600 transition">{p.title}</h3>
                  <div className="flex items-center justify-between text-xs text-gray-500 pt-3 border-t border-gray-100">
                    <span><FaUser className="inline text-accent-500 mr-1" /> {p.author}</span>
                    <span><FaCalendarAlt className="inline mr-1" /> {p.date}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Blog