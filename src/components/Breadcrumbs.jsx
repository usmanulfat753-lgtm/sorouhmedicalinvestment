import { Link, useLocation } from 'react-router-dom'
import { FaChevronRight, FaHome } from 'react-icons/fa'

const Breadcrumbs = ({ label }) => {
  const location = useLocation()
  const pageName = label || location.pathname.slice(1).replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())

  return (
    <div className="bg-white border-b border-gray-100">
      <div className="container-custom mx-auto px-4 py-3 flex items-center gap-2 text-sm text-gray-500">
        <Link to="/" className="flex items-center gap-1 hover:text-primary-600 transition">
          <FaHome className="text-xs" /> Home
        </Link>
        <FaChevronRight className="text-[10px] text-gray-400" />
        <span className="text-primary-700 font-medium">{pageName || 'Page'}</span>
      </div>
    </div>
  )
}

export default Breadcrumbs