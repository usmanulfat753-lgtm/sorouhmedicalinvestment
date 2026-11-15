import { Link } from 'react-router-dom'
import { FaHome, FaArrowLeft } from 'react-icons/fa'

const NotFound = () => (
  <div className="min-h-[70vh] flex items-center justify-center px-4 py-20 bg-gradient-to-br from-primary-50 to-accent-50">
    <div className="text-center max-w-lg">
      <h1 className="text-[120px] md:text-[180px] font-bold bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent leading-none">404</h1>
      <h2 className="text-2xl md:text-3xl font-bold text-primary-950 mb-3">Page Not Found</h2>
      <p className="text-gray-600 mb-8">The page you're looking for doesn't exist.</p>
      <div className="flex flex-wrap gap-3 justify-center">
        <Link to="/" className="btn-primary"><FaHome /> Back to Home</Link>
        <button onClick={() => window.history.back()} className="btn-secondary"><FaArrowLeft /> Go Back</button>
      </div>
    </div>
  </div>
)

export default NotFound