// src/App.jsx
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'

import AppBackground from './components/AppBackground'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import FloatingActions from './components/FloatingActions'

import Home from './pages/Home'
import About from './pages/About'
import Careers from './pages/Careers'
import Services from './pages/Services'
import ServiceDetail from './pages/ServiceDetail'
import Contact from './pages/Contact'
import Team from './pages/Team'
import Partners from './pages/Partners'
import FAQ from './pages/FAQ'
import Blog from './pages/Blog'
import NotFound from './pages/NotFound'

const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.4 }}
  >
    {children}
  </motion.div>
)

function App() {
  const location = useLocation()

  return (
    <div className="relative flex flex-col min-h-screen">
      <AppBackground />
      <div className="app-content-wrapper flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
              <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
              <Route path="/services" element={<PageWrapper><Services /></PageWrapper>} />
              <Route path="/services/:id" element={<PageWrapper><ServiceDetail /></PageWrapper>} />
              <Route path="/team" element={<PageWrapper><Team /></PageWrapper>} />
              <Route path="/partners" element={<PageWrapper><Partners /></PageWrapper>} />
              <Route path="/careers" element={<PageWrapper><Careers /></PageWrapper>} />
              <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
              <Route path="/faq" element={<PageWrapper><FAQ /></PageWrapper>} />
              <Route path="/blog" element={<PageWrapper><Blog /></PageWrapper>} />
              <Route path="*" element={<PageWrapper><NotFound /></PageWrapper>} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
      <ScrollToTop />
      <FloatingActions />
    </div>
  )
}

export default App