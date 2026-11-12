import axios from 'axios'

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api'

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 15000,
})

// Request interceptor
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error)
)

// Response interceptor
api.interceptors.response.use(
  (response) => response.data,
  (error) => {
    const message = error.response?.data?.message || error.message || 'Something went wrong'
    return Promise.reject(new Error(message))
  }
)

// ===== API ENDPOINTS (Ready for backend integration) =====
export const servicesAPI = {
  getAll: () => api.get('/services'),
  getById: (id) => api.get(`/services/${id}`),
}

export const careersAPI = {
  getJobs: () => api.get('/careers/jobs'),
  getJobById: (id) => api.get(`/careers/jobs/${id}`),
  apply: (data) => api.post('/careers/apply', data),
}

export const contactAPI = {
  send: (data) => api.post('/contact', data),
}

export const aboutAPI = {
  getInfo: () => api.get('/about'),
  getTeam: () => api.get('/about/team'),
}

export const searchAPI = {
  search: (query) => api.get(`/search?q=${encodeURIComponent(query)}`),
}

export default api