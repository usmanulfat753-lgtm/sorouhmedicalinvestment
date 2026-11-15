// src/pages/Careers.jsx
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FaMapMarkerAlt, FaClock, FaBriefcase, FaArrowRight, FaSearch,
  FaCheckCircle, FaHeart, FaGraduationCap, FaBalanceScale,
  FaUser, FaEnvelope, FaFileUpload, FaTimes, FaCheck,
  FaChevronRight, FaChevronDown, FaSpinner, FaStar,
  FaPen, FaAlignLeft, FaInfoCircle, FaListUl,
} from 'react-icons/fa'
import Breadcrumbs from '../components/Breadcrumbs'

const COUNTRY_CODES = [
  { code: 'SA', dial: '+966', flag: '🇸🇦', name: 'Saudi Arabia' },
  { code: 'AE', dial: '+971', flag: '🇦🇪', name: 'UAE' },
  { code: 'KW', dial: '+965', flag: '🇰🇼', name: 'Kuwait' },
  { code: 'QA', dial: '+974', flag: '🇶🇦', name: 'Qatar' },
  { code: 'BH', dial: '+973', flag: '🇧🇭', name: 'Bahrain' },
  { code: 'OM', dial: '+968', flag: '🇴🇲', name: 'Oman' },
  { code: 'JO', dial: '+962', flag: '🇯🇴', name: 'Jordan' },
  { code: 'EG', dial: '+20', flag: '🇪🇬', name: 'Egypt' },
  { code: 'PK', dial: '+92', flag: '🇵🇰', name: 'Pakistan' },
  { code: 'IN', dial: '+91', flag: '🇮🇳', name: 'India' },
  { code: 'PH', dial: '+63', flag: '🇵🇭', name: 'Philippines' },
  { code: 'BD', dial: '+880', flag: '🇧🇩', name: 'Bangladesh' },
  { code: 'GB', dial: '+44', flag: '🇬🇧', name: 'United Kingdom' },
  { code: 'US', dial: '+1', flag: '🇺🇸', name: 'United States' },
]

const JOB_CATEGORIES = [
  'Biomedical Engineer', 'Biomedical Technician', 'Clinical Engineer',
  'Dental Chair Technician', 'X-Ray / Imaging Technician',
  'Laboratory Equipment Specialist', 'Calibration Specialist',
  'IT Support Specialist', 'Network Engineer', 'System Administrator',
  'Electrical Engineer', 'Electrical Technician', 'Mechanical Engineer',
  'Operations Coordinator', 'Project Manager', 'Field Service Technician',
  'Sales Executive', 'Accountant', 'HR Specialist', 'Other',
]

const Careers = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [filter, setFilter] = useState('All')
  const [showForm, setShowForm] = useState(false)
  const [selectedJob, setSelectedJob] = useState('')

  const jobs = [
    { id: 1, title: 'Biomedical Engineer', dept: 'Biomedical', location: 'Taif', type: 'Full-time', desc: 'Maintain and repair hospital biomedical equipment.' },
    { id: 2, title: 'Network Engineer', dept: 'IT', location: 'Taif', type: 'Full-time', desc: 'Design and support hospital networks.' },
    { id: 3, title: 'IT Support Specialist', dept: 'IT', location: 'Taif', type: 'Full-time', desc: 'On-site IT troubleshooting and user support.' },
    { id: 4, title: 'Field Service Technician', dept: 'Technical', location: 'Taif', type: 'Full-time', desc: 'Diagnose and repair medical equipment.' },
    { id: 5, title: 'Calibration Specialist', dept: 'Calibration', location: 'Taif', type: 'Full-time', desc: 'ISO-traceable calibration of lab instruments.' },
    { id: 6, title: 'Operations Coordinator', dept: 'Operations', location: 'Taif', type: 'Full-time', desc: 'Coordinate service deployments.' },
    { id: 7, title: 'Dental Chair Technician', dept: 'Technical', location: 'Taif', type: 'Full-time', desc: 'Repair and maintain dental chairs.' },
    { id: 8, title: 'Electrical Engineer', dept: 'Electrical', location: 'Taif', type: 'Full-time', desc: 'Maintain electrical systems and control panels.' },
  ]

  const departments = ['All', 'Biomedical', 'IT', 'Technical', 'Calibration', 'Operations', 'Electrical']

  const filtered = jobs.filter(j => {
    const matchSearch = j.title.toLowerCase().includes(searchTerm.toLowerCase())
    const matchFilter = filter === 'All' || j.dept === filter
    return matchSearch && matchFilter
  })

  const perks = [
    { icon: FaHeart, title: 'Health Insurance', desc: 'Comprehensive medical coverage for you and your family', color: 'from-rose-500 to-pink-500' },
    { icon: FaGraduationCap, title: 'Certification Support', desc: 'Sponsorship for biomedical & IT certifications', color: 'from-primary-500 to-accent-500' },
    { icon: FaBalanceScale, title: 'Work-Life Balance', desc: 'Flexible scheduling and generous paid time off', color: 'from-emerald-500 to-teal-500' },
    { icon: FaCheckCircle, title: 'Career Growth', desc: 'Clear progression paths and mentorship programs', color: 'from-amber-500 to-orange-500' },
  ]

  const openApplication = (jobTitle) => {
    setSelectedJob(jobTitle)
    setShowForm(true)
  }

  return (
    <div className="overflow-hidden bg-navy-950 text-white min-h-screen">
      <Breadcrumbs label="Careers" />

      <section className="relative py-20 md:py-28 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(14,165,233,0.15),transparent_70%)] pointer-events-none" />
        <div className="container-custom mx-auto px-4 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-semibold text-accent-300 mb-6 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-accent-400 animate-pulse" /> We're Hiring
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Join Our <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">Team</span>
            </h1>
            <p className="text-primary-200 text-base md:text-xl max-w-2xl mx-auto mb-10">
              Build a rewarding career in biomedical maintenance, IT support, and operations.
            </p>
            <button
              onClick={() => openApplication('')}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 text-white font-bold rounded-full shadow-xl shadow-primary-500/20 hover:-translate-y-1 transition-all group"
            >
              Apply Now <FaArrowRight className="group-hover:translate-x-1 transition" />
            </button>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24 relative">
        <div className="container-custom mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-accent-400 font-semibold text-sm uppercase tracking-wider">Why Work With Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">Benefits & <span className="text-accent-400">Perks</span></h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {perks.map((p, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white/5 rounded-2xl p-6 shadow-lg border border-white/10 hover:bg-white/10 transition-all h-full group">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${p.color} flex items-center justify-center text-white text-xl mb-4 group-hover:scale-110 transition-transform shadow-lg`}><p.icon /></div>
                <h3 className="font-bold text-base text-white mb-2">{p.title}</h3>
                <p className="text-primary-300 text-sm leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-primary-900/20 border-y border-white/5 relative">
        <div className="container-custom mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-accent-400 font-semibold text-sm uppercase tracking-wider">Open Positions</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-8">Find Your <span className="text-accent-400">Dream Job</span></h2>
            <div className="relative max-w-xl mx-auto">
              <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-primary-400" />
              <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search job titles..." className="w-full pl-14 pr-5 py-4 rounded-xl border border-white/10 focus:border-accent-400 focus:ring-4 focus:ring-accent-400/20 outline-none bg-white/5 text-white placeholder-primary-400 transition backdrop-blur-md" />
            </div>
            <div className="flex flex-wrap gap-2 justify-center mt-8">
              {departments.map(d => (
                <button key={d} onClick={() => setFilter(d)} className={`px-5 py-2.5 rounded-full text-sm font-medium transition ${filter === d ? 'bg-gradient-to-r from-primary-600 to-accent-600 text-white shadow-lg' : 'bg-white/5 text-gray-300 border border-white/10 hover:bg-white/10'}`}>{d}</button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            {filtered.length === 0 ? (
              <div className="text-center py-16 text-primary-300"><p className="text-lg">No jobs found matching your search.</p></div>
            ) : (
              filtered.map((job, i) => (
                <motion.div key={job.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:bg-white/10 hover:shadow-xl transition-all group backdrop-blur-sm">
                  <div className="flex flex-col lg:flex-row justify-between gap-6 items-start lg:items-center">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-3 flex-wrap">
                        <span className="px-3 py-1 bg-primary-500/20 text-primary-300 text-xs font-semibold rounded-full border border-primary-500/30">{job.dept}</span>
                        <span className="px-3 py-1 bg-accent-500/20 text-accent-300 text-xs font-semibold rounded-full border border-accent-500/30">{job.type}</span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent-300 transition">{job.title}</h3>
                      <p className="text-primary-200 mb-4">{job.desc}</p>
                      <div className="flex flex-wrap gap-6 text-sm text-gray-400">
                        <span className="flex items-center gap-2"><FaMapMarkerAlt className="text-accent-400" /> {job.location}</span>
                        <span className="flex items-center gap-2"><FaClock className="text-accent-400" /> {job.type}</span>
                        <span className="flex items-center gap-2"><FaBriefcase className="text-accent-400" /> {job.dept}</span>
                      </div>
                    </div>
                    <div>
                      <button onClick={() => openApplication(job.title)} className="whitespace-nowrap px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold transition border border-white/10 flex items-center gap-2">Apply Now <FaArrowRight /></button>
                    </div>
                  </div>
                </motion.div>
              ))
            )}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {showForm && <ApplicationModal initialJob={selectedJob} onClose={() => setShowForm(false)} />}
      </AnimatePresence>
    </div>
  )
}

const ApplicationModal = ({ initialJob, onClose }) => {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [fileName, setFileName] = useState('')
  const [fileError, setFileError] = useState('')
  const [errors, setErrors] = useState({})

  const [form, setForm] = useState({
    fullName: '', email: '', countryCode: 'SA', phone: '',
    category: initialJob || '', customRole: '', experience: '',
    coverLetter: '', resume: null,
  })

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = 'unset' }
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }))
  }

  const handleFile = (e) => {
    const file = e.target.files[0]
    setFileError('')
    if (!file) { setFileName(''); setForm(prev => ({ ...prev, resume: null })); return }
    const ext = '.' + file.name.split('.').pop().toLowerCase()
    if (!['.pdf', '.doc', '.docx'].includes(ext)) { setFileError('Only PDF, DOC, or DOCX files allowed'); return }
    if (file.size > 6 * 1024 * 1024) { setFileError('File must be under 6 MB'); return }
    setFileName(file.name)
    setForm(prev => ({ ...prev, resume: file }))
  }

  const requiredFields = [form.fullName, form.email, form.phone, form.category, form.category === 'Other' ? form.customRole : true, form.experience]
  const filled = requiredFields.filter(Boolean).length
  const progress = Math.round((filled / requiredFields.length) * 100)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newErrors = {}
    if (!form.fullName.trim()) newErrors.fullName = 'Full name is required'
    if (!form.email.trim() || !/^\S+@\S+\.\S+$/.test(form.email)) newErrors.email = 'Valid email required'
    if (!form.phone.trim()) newErrors.phone = 'Phone number is required'
    if (!form.category) newErrors.category = 'Please select a category'
    if (form.category === 'Other' && !form.customRole.trim()) newErrors.customRole = 'Please describe your role'
    if (!form.experience.trim()) newErrors.experience = 'Experience is required'
    if (Object.keys(newErrors).length > 0) { setErrors(newErrors); return }
    setSubmitting(true)
    await new Promise(r => setTimeout(r, 1500))
    setSubmitting(false)
    setSubmitted(true)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[80] flex items-start md:items-center justify-center p-3 md:p-4 bg-navy-950/80 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 30, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.9, y: 30, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-navy-900 border border-white/10 rounded-3xl max-w-3xl w-full my-8 shadow-2xl overflow-hidden"
      >
        <div className="relative p-6 md:p-8 bg-gradient-to-r from-primary-900/50 to-accent-900/50 border-b border-white/10">
          <button onClick={onClose} className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition text-white"><FaTimes /></button>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-accent-300 mb-2">
            <span>Your Application</span>
            <span className="w-6 h-px bg-accent-500/50" />
            <span>01</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-1">Apply for Job</h2>
          <p className="text-primary-200 text-sm">Tell us about yourself. Fields marked with <span className="text-rose-400 font-bold">*</span> are required.</p>
        </div>

        <div className="px-6 md:px-8 py-4 bg-white/5 border-b border-white/10">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs font-bold text-primary-200 uppercase tracking-wider">Application Progress</span>
            <span className={`text-sm font-bold ${progress === 100 ? 'text-emerald-400' : 'text-accent-300'}`}>{progress}%</span>
          </div>
          <div className="h-2 bg-navy-950 rounded-full overflow-hidden">
            <motion.div initial={{ width: 0 }} animate={{ width: `${progress}%` }} className={`h-full rounded-full ${progress === 100 ? 'bg-gradient-to-r from-emerald-400 to-emerald-500' : 'bg-gradient-to-r from-primary-500 to-accent-500'}`} />
          </div>
        </div>

        {submitted ? (
          <div className="p-8 md:p-12 text-center">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-accent-500/20 flex items-center justify-center border border-accent-500/30">
              <FaCheck className="text-accent-400 text-4xl" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Application Submitted!</h3>
            <p className="text-primary-200 mb-6">Thank you, <strong>{form.fullName}</strong>. We'll review your application and contact you within 5 business days.</p>
            <button onClick={onClose} className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold transition">Close</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-5 max-h-[70vh] overflow-y-auto">
            <div>
              <label className="text-sm font-semibold text-white mb-1.5 block">Full name <span className="text-rose-400">*</span></label>
              <div className="relative">
                <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-primary-400 text-sm" />
                <input type="text" name="fullName" value={form.fullName} onChange={handleChange} placeholder="Your full name" className={`w-full pl-11 pr-4 py-3 rounded-xl border outline-none transition bg-white/5 text-white placeholder-primary-500 ${errors.fullName ? 'border-rose-400 ring-2 ring-rose-400/30' : 'border-white/10 focus:border-accent-400 focus:ring-2 focus:ring-accent-400/30'}`} />
              </div>
              {errors.fullName && <p className="text-rose-400 text-xs mt-1">{errors.fullName}</p>}
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-semibold text-white mb-1.5 block">Email address <span className="text-rose-400">*</span></label>
                <div className="relative">
                  <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-primary-400 text-sm" />
                  <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="name@example.com" className={`w-full pl-11 pr-4 py-3 rounded-xl border outline-none transition bg-white/5 text-white placeholder-primary-500 ${errors.email ? 'border-rose-400 ring-2 ring-rose-400/30' : 'border-white/10 focus:border-accent-400 focus:ring-2 focus:ring-accent-400/30'}`} />
                </div>
                {errors.email && <p className="text-rose-400 text-xs mt-1">{errors.email}</p>}
              </div>

              {/* Country Code & Phone — Fixed with native select */}
              <div>
                <label className="text-sm font-semibold text-white mb-1.5 block">Phone number <span className="text-rose-400">*</span></label>
                <div className={`flex rounded-xl border overflow-hidden bg-white/5 transition ${errors.phone ? 'border-rose-400 ring-2 ring-rose-400/30' : 'border-white/10 focus-within:border-accent-400 focus-within:ring-2 focus-within:ring-accent-400/30'}`}>
                  <select
                    name="countryCode"
                    value={form.countryCode}
                    onChange={handleChange}
                    className="bg-white/10 border-r border-white/10 text-white text-sm font-medium outline-none cursor-pointer px-2 py-3 w-24 appearance-none text-center"
                    style={{ backgroundImage: 'none' }}
                  >
                    {COUNTRY_CODES.map(c => (
                      <option key={c.code} value={c.code} className="bg-navy-900 text-white">
                        {c.flag} {c.dial}
                      </option>
                    ))}
                  </select>
                  <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="5XXXXXXXX" className="flex-1 px-3 py-3 outline-none bg-transparent text-white placeholder-primary-500 text-sm" />
                </div>
                {errors.phone && <p className="text-rose-400 text-xs mt-1">{errors.phone}</p>}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-semibold text-white mb-1.5 block">Category <span className="text-rose-400">*</span></label>
                <div className="relative">
                  <FaListUl className="absolute left-4 top-1/2 -translate-y-1/2 text-primary-400 text-sm pointer-events-none" />
                  <select name="category" value={form.category} onChange={handleChange} className={`w-full pl-11 pr-10 py-3 rounded-xl border outline-none transition bg-white/5 text-white appearance-none ${errors.category ? 'border-rose-400 ring-2 ring-rose-400/30' : 'border-white/10 focus:border-accent-400 focus:ring-2 focus:ring-accent-400/30'}`}>
                    <option value="" className="bg-navy-900">Select a category</option>
                    {JOB_CATEGORIES.map(c => <option key={c} value={c} className="bg-navy-900">{c}</option>)}
                  </select>
                  <FaChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-primary-400 text-xs pointer-events-none" />
                </div>
                {errors.category && <p className="text-rose-400 text-xs mt-1">{errors.category}</p>}
              </div>

              <div>
                <label className="text-sm font-semibold text-white mb-1.5 block">Years of experience <span className="text-rose-400">*</span></label>
                <input type="text" name="experience" value={form.experience} onChange={handleChange} placeholder="For example, 3 years" className={`w-full px-4 py-3 rounded-xl border outline-none transition bg-white/5 text-white placeholder-primary-500 ${errors.experience ? 'border-rose-400 ring-2 ring-rose-400/30' : 'border-white/10 focus:border-accent-400 focus:ring-2 focus:ring-accent-400/30'}`} />
                {errors.experience && <p className="text-rose-400 text-xs mt-1">{errors.experience}</p>}
              </div>
            </div>

            <AnimatePresence>
              {form.category === 'Other' && (
                <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden">
                  <div className="bg-accent-500/10 border border-accent-500/20 rounded-xl p-4">
                    <label className="text-sm font-semibold text-white mb-1.5 flex items-center gap-2">
                      <FaPen className="text-accent-400 text-xs" /> Which role are you applying for? <span className="text-rose-400">*</span>
                    </label>
                    <input type="text" name="customRole" value={form.customRole} onChange={handleChange} placeholder="e.g. Radiology Equipment Specialist..." className={`w-full px-4 py-3 rounded-lg border outline-none transition bg-white/5 text-white placeholder-primary-500 ${errors.customRole ? 'border-rose-400 ring-2 ring-rose-400/30' : 'border-white/10 focus:border-accent-400 focus:ring-2 focus:ring-accent-400/30'}`} />
                    {errors.customRole && <p className="text-rose-400 text-xs mt-1">{errors.customRole}</p>}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div>
              <label className="text-sm font-semibold text-white mb-1.5 flex items-center gap-2"><FaAlignLeft className="text-accent-400 text-xs" /> Cover letter <span className="text-primary-400 font-normal">(optional)</span></label>
              <textarea name="coverLetter" value={form.coverLetter} onChange={handleChange} rows="3" placeholder="Briefly tell us why you're a great fit for this role..." className="w-full px-4 py-3 rounded-xl border border-white/10 focus:border-accent-400 focus:ring-2 focus:ring-accent-400/30 outline-none transition bg-white/5 text-white placeholder-primary-500 resize-none" />
            </div>

            <div>
              <label className="text-sm font-semibold text-white mb-1.5 flex items-center gap-2">Resume <span className="text-primary-400 font-normal">(optional, PDF or DOCX, up to 6 MB)</span></label>
              <label htmlFor="resume-upload" className={`flex flex-col items-center justify-center gap-2 p-6 rounded-xl border-2 border-dashed cursor-pointer transition ${fileName ? 'border-accent-500/50 bg-accent-500/10' : 'border-white/20 bg-white/5 hover:border-accent-400 hover:bg-white/10'}`}>
                <input id="resume-upload" type="file" accept=".pdf,.docx,.doc" onChange={handleFile} className="hidden" />
                {fileName ? <><FaCheckCircle className="text-3xl text-accent-400" /><p className="text-sm font-semibold text-white text-center break-all">{fileName}</p><p className="text-xs text-primary-400">Click to change file</p></> : <><FaFileUpload className="text-3xl text-accent-400" /><p className="text-sm font-semibold text-white">Choose your resume</p><p className="text-xs text-primary-400">PDF or DOCX · Maximum 6 MB</p></>}
              </label>
              {fileError && <p className="text-rose-400 text-xs mt-2">{fileError}</p>}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button type="button" onClick={onClose} className="flex-1 px-6 py-3 rounded-xl border border-white/10 text-gray-300 font-semibold hover:bg-white/5 transition">Cancel</button>
              <button type="submit" disabled={submitting} className="flex-1 px-6 py-3 rounded-xl bg-gradient-to-r from-primary-600 to-accent-600 text-white font-semibold hover:shadow-lg hover:-translate-y-0.5 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2">
                {submitting ? <><FaSpinner className="animate-spin" /> Submitting...</> : <>Submit Application <FaChevronRight /></>}
              </button>
            </div>
          </form>
        )}
      </motion.div>
    </motion.div>
  )
}

export default Careers