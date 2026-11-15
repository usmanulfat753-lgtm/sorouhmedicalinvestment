import { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa'

const FAQ = () => {
  const [open, setOpen] = useState(null)

  const faqs = [
    { q: 'What services do you provide?', a: 'We provide biomedical equipment maintenance, IT infrastructure support, electrical systems maintenance, laboratory equipment calibration, autoclave servicing, dental chair maintenance, medical imaging calibration, and annual maintenance contracts.' },
    { q: 'Where are you located?', a: 'Our head office is in Taif City, Saudi Arabia. We serve clients throughout the Kingdom.' },
    { q: 'How long have you been in business?', a: 'Over 15 years — since 2008.' },
    { q: 'What is your emergency response time?', a: 'We offer 24/7 emergency response. Critical breakdowns typically have on-site response within 4-8 hours.' },
    { q: 'Do you offer preventive maintenance contracts?', a: 'Yes. Our AMC includes scheduled inspections, calibration, safety testing, and priority repairs.' },
    { q: 'Do you use genuine spare parts?', a: 'Yes — we only use OEM parts and certified equivalents.' },
    { q: 'Are your technicians certified?', a: 'All biomedical engineers hold CBET or equivalent credentials. IT staff are CCNA/CompTIA certified.' },
    { q: 'Can you supply staff on demand?', a: 'Yes. We supply certified biomedical engineers, IT technicians, and support staff on short or long-term contracts.' },
  ]

  return (
    <div>
      <section className="bg-gradient-to-br from-primary-950 to-primary-800 text-white py-20">
        <div className="container-custom mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">FAQ</h1>
          <p className="text-primary-200 text-lg max-w-2xl mx-auto">
            Common questions about our services.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom mx-auto px-4 max-w-4xl">
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className={`bg-white rounded-2xl border transition ${open === i ? 'border-primary-300 shadow-lg' : 'border-gray-100'}`}>
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left"
                >
                  <span className="font-semibold text-primary-950">{faq.q}</span>
                  <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${open === i ? 'bg-primary-600 text-white' : 'bg-gray-100 text-gray-600'}`}>
                    <FaChevronDown className={`text-xs transition-transform ${open === i ? 'rotate-180' : ''}`} />
                  </span>
                </button>
                {open === i && <p className="px-5 pb-5 text-gray-600 leading-relaxed">{faq.a}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default FAQ