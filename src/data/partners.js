// src/data/partners.js
const logoModules = import.meta.glob('../assets/logos/*.{png,jpg,jpeg,svg,webp}', {
  eager: true,
  import: 'default',
})

const getLogo = (baseName) => {
  const key = Object.keys(logoModules).find((path) =>
    path.toLowerCase().includes(baseName.toLowerCase())
  )
  return key ? logoModules[key] : null
}

export const universities = [
  { id: 'taif-university', name: 'Taif University', short: 'TU', logo: getLogo('taif-university'), type: 'University', color: 'from-blue-600 to-cyan-500', location: 'Taif, Saudi Arabia', since: '2012', website: 'https://www.tu.edu.sa', students: '45,000+', specialties: ['Medical Labs', 'Research', 'Biomedical'], description: 'Comprehensive laboratory equipment maintenance and calibration across all faculties.' },
  { id: 'umm-al-qura', name: 'Umm Al-Qura University', short: 'UQU', logo: getLogo('umm-al-qura'), type: 'University', color: 'from-purple-600 to-pink-500', location: 'Makkah, Saudi Arabia', since: '2016', website: 'https://www.uqu.edu.sa', students: '100,000+', specialties: ['Medical', 'Dental', 'Pharmacy'], description: 'Calibration and preventive maintenance for lab equipment.' },
  { id: 'shaqra-university', name: 'Shaqra University', short: 'SU', logo: getLogo('shaqra-university'), type: 'University', color: 'from-emerald-600 to-teal-500', location: 'Shaqra, Saudi Arabia', since: '2018', website: 'https://www.su.edu.sa', students: '30,000+', specialties: ['Science', 'Labs', 'Health'], description: 'Full-service maintenance for science laboratories.' },
  { id: 'al-baha-university', name: 'Al-Baha University', short: 'BU', logo: getLogo('al-baha-university'), type: 'University', color: 'from-amber-600 to-orange-500', location: 'Al-Baha, Saudi Arabia', since: '2017', website: 'https://www.bu.edu.sa', students: '25,000+', specialties: ['Medical', 'Science', 'Research'], description: 'Equipment maintenance and calibration across all science labs.' },
  { id: 'jeddah-university', name: 'University of Jeddah', short: 'UJ', logo: getLogo('jeddah-university'), type: 'University', color: 'from-cyan-600 to-blue-500', location: 'Jeddah, Saudi Arabia', since: '2019', website: 'https://www.uj.edu.sa', students: '40,000+', specialties: ['Biomedical', 'Research', 'Imaging'], description: 'Biomedical and imaging equipment maintenance.' },
  { id: 'tabuk-university', name: 'University of Tabuk', short: 'UT', logo: getLogo('tabuk-university'), type: 'University', color: 'from-rose-600 to-pink-500', location: 'Tabuk, Saudi Arabia', since: '2019', website: 'https://www.ut.edu.sa', students: '35,000+', specialties: ['Medical', 'Labs', 'Dental'], description: 'Dedicated laboratory equipment service team.' },
  { id: 'taibah-university', name: 'Taibah University', short: 'TBU', logo: getLogo('taibah-university'), type: 'University', color: 'from-indigo-600 to-blue-500', location: 'Madinah, Saudi Arabia', since: '2015', website: 'https://www.taibahu.edu.sa', students: '50,000+', specialties: ['Medical', 'Dental', 'Research'], description: 'Full biomedical coverage and lab calibration contracts.' },
  { id: 'najran-university', name: 'Najran University', short: 'NU', logo: getLogo('najran-university'), type: 'University', color: 'from-fuchsia-600 to-purple-500', location: 'Najran, Saudi Arabia', since: '2020', website: 'https://www.nu.edu.sa', students: '20,000+', specialties: ['Science', 'Labs', 'Health'], description: 'Precision calibration and preventive maintenance.' },
  { id: 'al-jouf-university', name: 'Al Jouf University', short: 'JU', logo: getLogo('al-jouf-university'), type: 'University', color: 'from-teal-600 to-emerald-500', location: 'Sakaka, Saudi Arabia', since: '2020', website: 'https://www.ju.edu.sa', students: '22,000+', specialties: ['Medical', 'Science', 'Labs'], description: 'Dedicated maintenance and calibration services.' },
]

export const universityPartners = universities
export const hospitalPartners = []
export const allPartners = universities

export const partnerStats = [
  { value: '9', label: 'Universities', sub: 'Top-ranked institutions' },
  { value: '50+', label: 'Faculties', sub: 'Across all regions' },
  { value: '50,000+', label: 'Devices Maintained', sub: 'Across all sectors' },
  { value: '15+', label: 'Years Experience', sub: 'Of trusted service' },
]

export const partnerTestimonials = [
  { text: 'Sorouh has been our trusted biomedical partner for over 5 years. Their response time is exceptional.', name: 'Dr. Ahmed Al-Rashid', role: 'Taif University', rating: 5, avatar: 'https://i.pravatar.cc/150?img=12' },
  { text: 'Their IT team transformed our campus network. Reliable, professional, and always available.', name: 'Prof. Sarah Mohammed', role: 'Umm Al-Qura University', rating: 5, avatar: 'https://i.pravatar.cc/150?img=45' },
  { text: 'The calibration service is outstanding. Quality technicians deployed within 24 hours.', name: 'Khalid Nasser', role: 'Taibah University', rating: 5, avatar: 'https://i.pravatar.cc/150?img=33' },
]

export const partnershipBenefits = [
  { title: 'Dedicated Account Manager', desc: 'A single point of contact for all your needs.', icon: 'user' },
  { title: 'SLA-Based Response', desc: 'Guaranteed same-day emergency response.', icon: 'clock' },
  { title: 'Quarterly Health Reports', desc: 'Detailed equipment health and usage reports.', icon: 'chart' },
  { title: 'Priority Spare Parts', desc: 'Faster access to genuine OEM parts.', icon: 'tools' },
  { title: 'Multi-Year Discounts', desc: 'Save more with longer contract commitments.', icon: 'tag' },
  { title: 'Free Training', desc: 'Annual training sessions for your staff.', icon: 'book' },
]