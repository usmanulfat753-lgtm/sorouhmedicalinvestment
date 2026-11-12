import { Link } from 'react-router-dom'
import { FaHome, FaArrowLeft } from 'react-icons/fa'

const NotFound = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-20 bg-gradient-to-br from-primary-50 to-accent-50">
      <div className="text-center">
        <h1 className="text-9xl font-bold bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">404</h1>
        <h2 className="text-3xl font-bold text-primary-950 mt-4 mb-3">Page Not Found</h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link to="/" className="btn-primary">
            <FaHome /> Back to Home
          </Link>
          <button onClick={() => window.history.back()} className="btn-secondary">
            <FaArrowLeft /> Go Back
          </button>
        </div>
      </div>
    </div>
  )
}

export default NotFound
