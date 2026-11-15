// src/data/services.js
// All images loaded from src/assets/images/

import hero1 from '../assets/images/dental-chair.jpg'
import hero2 from '../assets/images/lab-equipment.jpg'
import hero3 from '../assets/images/xray-machine.jpg'
import hero4 from '../assets/images/autoclave.jpg'
import hero5 from '../assets/images/biomedical-device.jpg'
import hero6 from '../assets/images/it-network.jpg'

import dentalChair from '../assets/images/dental-chair.jpg'
import labEquipment from '../assets/images/lab-equipment.jpg'
import xrayMachine from '../assets/images/xray-machine.jpg'
import autoclave from '../assets/images/autoclave.jpg'
import biomedicalDevice from '../assets/images/biomedical-device.jpg'
import itNetwork from '../assets/images/it-network.jpg'
import technicianWorking from '../assets/images/technician-working.jpg'
import calibration from '../assets/images/calibration.jpg'
import controlPanel from '../assets/images/control-panel.jpg'
import microscope from '../assets/images/microscope.jpg'
import patientMonitor from '../assets/images/patient-monitor.jpg'
import mechanicalSystem from '../assets/images/mechanical-system.jpg'

// Re-export so other files can use them
export const images = {
  hero: [hero1, hero2, hero3, hero4, hero5, hero6],
  dentalChair,
  labEquipment,
  xrayMachine,
  autoclave,
  biomedicalDevice,
  itNetwork,
  technicianWorking,
  calibration,
  controlPanel,
  microscope,
  patientMonitor,
  mechanicalSystem,
}

export const servicesData = [
  {
    id: 'hospital-biomedical',
    title: 'Hospital Biomedical Maintenance',
    shortTitle: 'Hospital Biomedical',
    category: 'Biomedical',
    image: biomedicalDevice,
    heroImage: biomedicalDevice,
    description: 'Comprehensive preventive and corrective maintenance for all hospital biomedical equipment.',
    longDescription: 'Our certified biomedical engineers keep your hospital operating at peak performance with scheduled inspections, calibration, safety testing, and 24/7 emergency breakdown response.',
    features: ['Patient monitors & ventilators', 'Infusion pumps', 'Defibrillators & ECG machines', 'Calibration & safety testing', '24/7 emergency support', 'Genuine spare parts'],
    benefits: ['Reduced equipment downtime', 'Extended device lifespan', 'Compliance with safety standards', 'Priority spare parts access'],
  },
  {
    id: 'university-equipment',
    title: 'University Equipment Maintenance',
    shortTitle: 'University Equipment',
    category: 'Education',
    image: labEquipment,
    heroImage: labEquipment,
    description: 'Scheduled maintenance and calibration for university laboratory, research, and educational equipment.',
    longDescription: 'From teaching labs to advanced research facilities, we keep your university equipment reliable and accurate with scheduled maintenance and calibration certificates.',
    features: ['Lab analyzer maintenance', 'Teaching equipment servicing', 'Research instrument calibration', 'Preventive contracts', 'Calibration certificates', 'Emergency repair response'],
    benefits: ['Accurate research results', 'Reduced class disruptions', 'Compliance-ready documentation', 'Cost-effective maintenance'],
  },
  {
    id: 'it-infrastructure',
    title: 'IT Infrastructure & Digital Systems',
    shortTitle: 'IT Infrastructure',
    category: 'IT',
    image: itNetwork,
    heroImage: itNetwork,
    description: 'End-to-end IT infrastructure support — networks, servers, Wi-Fi, and security systems.',
    longDescription: 'We design, deploy, and support complete IT infrastructure for healthcare and educational institutions.',
    features: ['Network setup & cabling', 'Servers & virtualization', 'Wi-Fi deployment', 'Firewall & security', 'Remote & on-site troubleshooting', 'IT asset management'],
    benefits: ['99.9% uptime guarantee', 'Enterprise-grade security', 'Scalable architecture', '24/7 monitoring'],
  },
  {
    id: 'dental-chair',
    title: 'Dental Chair Maintenance',
    shortTitle: 'Dental Chair',
    category: 'Dental',
    image: dentalChair,
    heroImage: dentalChair,
    description: 'Complete maintenance for dental chairs — hydraulics, lighting, suction, and control units.',
    longDescription: 'Our technicians service all major dental chair brands ensuring smooth hydraulics and reliable control units.',
    features: ['Hydraulic & motor servicing', 'Suction & water line cleaning', 'LED & halogen light repair', 'Control panel troubleshooting', 'Upholstery repair', 'Full chair calibration'],
    benefits: ['Improved patient comfort', 'Extended chair lifespan', 'Reduced clinic downtime', 'All brands supported'],
  },
  {
    id: 'electrical-systems',
    title: 'Electrical Systems & Control Panels',
    shortTitle: 'Electrical Systems',
    category: 'Electrical',
    image: controlPanel,
    heroImage: controlPanel,
    description: 'Design, installation, and maintenance of electrical systems and control panels.',
    longDescription: 'Our certified electricians install and maintain low- and medium-voltage systems, PLC-based control panels, and safety circuits.',
    features: ['Control panel installation', 'PLC & SCADA programming', 'Distribution board maintenance', 'Motor control centers', 'Emergency power systems', 'Safety testing'],
    benefits: ['Code-compliant installation', 'Reduced electrical hazards', 'Improved energy efficiency', 'Reliable automation'],
  },
  {
    id: 'electrical-medical',
    title: 'Electrical Medical Equipment',
    shortTitle: 'Electrical Medical',
    category: 'Biomedical',
    image: patientMonitor,
    heroImage: patientMonitor,
    description: 'Maintenance for electrically powered medical devices — ESU, lasers, and imaging generators.',
    longDescription: 'Electrically powered medical devices demand precise maintenance and electrical safety verification.',
    features: ['ESU testing', 'Laser therapy devices', 'X-ray generator servicing', 'IEC 60601 safety testing', 'Grounding checks', 'Battery replacement'],
    benefits: ['Patient safety ensured', 'Regulatory compliance', 'Accurate clinical output', 'Extended equipment life'],
  },
  {
    id: 'educational-lab',
    title: 'Educational Laboratory Equipment',
    shortTitle: 'Educational Lab',
    category: 'Education',
    image: microscope,
    heroImage: microscope,
    description: 'Maintenance for school and university teaching lab equipment.',
    longDescription: 'We maintain microscopes, analytical balances, spectrophotometers, and demo devices.',
    features: ['Microscope calibration', 'Analytical balance servicing', 'Spectrophotometer maintenance', 'Lab demo equipment repair', 'Safety cabinet inspection', 'Consumables replacement'],
    benefits: ['Smooth lab sessions', 'Accurate student results', 'Long equipment life', 'Predictable costs'],
  },
  {
    id: 'lab-calibration',
    title: 'Laboratory Equipment Calibration & Testing',
    shortTitle: 'Lab Calibration',
    category: 'Calibration',
    image: calibration,
    heroImage: calibration,
    description: 'ISO-traceable calibration for laboratory instruments.',
    longDescription: 'Accurate lab results depend on calibrated equipment.',
    features: ['Pipette calibration', 'Analytical balance calibration', 'pH meter calibration', 'Incubator validation', 'Centrifuge speed calibration', 'ISO 17025 certificates'],
    benefits: ['Audit-ready documentation', 'Accurate test results', 'Regulatory compliance', 'Reduced rework'],
  },
  {
    id: 'autoclave-sterilizer',
    title: 'Autoclave & Sterilizer Maintenance',
    shortTitle: 'Autoclave & Sterilizer',
    category: 'Sterilization',
    image: autoclave,
    heroImage: autoclave,
    description: 'Preventive maintenance, validation, and repair for autoclaves and sterilizers.',
    longDescription: 'We service steam autoclaves, dry heat sterilizers, and plasma sterilizers.',
    features: ['Chamber cleaning & descaling', 'Door gasket replacement', 'Pressure & temperature calibration', 'Safety valve testing', 'Biological validation', 'Preventive contracts'],
    benefits: ['Guaranteed sterilization', 'Patient safety assured', 'Extended lifespan', 'Regulatory compliance'],
  },
  {
    id: 'preventive-corrective',
    title: 'Preventive & Corrective Maintenance',
    shortTitle: 'Preventive & Corrective',
    category: 'Maintenance',
    image: technicianWorking,
    heroImage: technicianWorking,
    description: 'Scheduled preventive plans and rapid corrective repairs.',
    longDescription: 'Our preventive program schedules inspections, cleaning, lubrication, and calibration.',
    features: ['Scheduled inspections', 'Cleaning & lubrication', 'Wear part replacement', 'Performance verification', 'Emergency response', 'Detailed service reports'],
    benefits: ['Fewer unexpected failures', 'Reduced cost of ownership', 'Extended equipment life', 'Predictable budget'],
  },
  {
    id: 'annual-contracts',
    title: 'Annual Maintenance Contracts',
    shortTitle: 'Annual Contracts',
    category: 'Contracts',
    image: technicianWorking,
    heroImage: technicianWorking,
    description: 'Comprehensive AMC with guaranteed response times and full spare parts coverage.',
    longDescription: 'Annual Maintenance Contracts offer peace of mind with fixed-cost coverage.',
    features: ['Scheduled preventive visits', 'Unlimited corrective repairs', 'Priority response times', 'Genuine spare parts', 'Dedicated account manager', 'Quarterly health reports'],
    benefits: ['Budget certainty', 'Priority service', 'Unlimited repairs', 'One point of contact'],
  },
  {
    id: 'mechanical-equipment',
    title: 'Mechanical Equipment Maintenance',
    shortTitle: 'Mechanical Equipment',
    category: 'Mechanical',
    image: mechanicalSystem,
    heroImage: mechanicalSystem,
    description: 'Maintenance for mechanical equipment — HVAC, pumps, compressors, and building services.',
    longDescription: 'We maintain HVAC units, chillers, pumps, compressors, elevators, and other mechanical assets.',
    features: ['HVAC & chiller servicing', 'Pump & compressor maintenance', 'Ventilation cleaning', 'Elevator & lift servicing', 'Motor & bearing replacement', 'Vibration analysis'],
    benefits: ['Comfortable environment', 'Lower energy costs', 'Fewer failures', 'Regulatory compliance'],
  },
  {
    id: 'medical-imaging',
    title: 'Medical Imaging & Diagnostics',
    shortTitle: 'Medical Imaging',
    category: 'Imaging',
    image: xrayMachine,
    heroImage: xrayMachine,
    description: 'Maintenance, calibration, and repair for medical imaging systems.',
    longDescription: 'We provide specialized maintenance for X-ray, CT, MRI, ultrasound, and mammography systems.',
    features: ['X-ray & CT scanner servicing', 'MRI system maintenance', 'Ultrasound probe repair', 'Mammography calibration', 'Image quality testing', 'Radiation safety compliance'],
    benefits: ['Clear diagnostic images', 'Patient safety compliance', 'Extended scanner life', 'Reduced downtime'],
  },
]

export const getServiceById = (id) => servicesData.find((s) => s.id === id)
export const serviceCategories = ['All', ...new Set(servicesData.map((s) => s.category))]