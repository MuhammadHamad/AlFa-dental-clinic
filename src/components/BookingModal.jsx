import React, { useState, useEffect } from 'react';
import { 
  X, 
  Calendar, 
  Clock, 
  User, 
  Phone, 
  CheckCircle2, 
  MessageSquare, 
  ChevronRight, 
  ChevronLeft, 
  ShieldCheck, 
  Sparkles 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { clinicData } from '../data/clinicData';
import './BookingModal.css';

export default function BookingModal({ initialServices = [], onClose, lang }) {
  // Wizard steps: 1 = Service Select, 2 = Date/Time, 3 = Patient Info, 4 = Success Confirmation
  const [step, setStep] = useState(1);
  
  // Form State
  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('11:00 AM');
  const [patientName, setPatientName] = useState('');
  const [patientPhone, setPatientPhone] = useState('');
  const [notes, setNotes] = useState('');

  // Handle preloaded initial services
  useEffect(() => {
    if (initialServices && initialServices.length > 0) {
      const list = Array.isArray(initialServices) ? initialServices : [initialServices];
      setSelectedServices(list.map(s => s.title || s));
    } else {
      setSelectedServices([clinicData.services[0].title]);
    }
    
    // Set default tomorrow date
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    setSelectedDate(tomorrow.toISOString().split('T')[0]);
  }, [initialServices]);

  const availableTimeSlots = [
    '10:30 AM', '11:30 AM', '02:00 PM', '04:00 PM', '06:00 PM', '07:30 PM'
  ];

  const toggleServiceChoice = (serviceTitle) => {
    setSelectedServices(prev => {
      if (prev.includes(serviceTitle)) {
        if (prev.length === 1) return prev; // keep at least 1
        return prev.filter(t => t !== serviceTitle);
      } else {
        return [...prev, serviceTitle];
      }
    });
  };

  const handleNextStep = (e) => {
    e.preventDefault();
    if (step === 1 && selectedServices.length === 0) return;
    if (step === 2 && (!selectedDate || !selectedTimeSlot)) return;
    if (step === 3) {
      if (!patientName.trim() || !patientPhone.trim()) return;
      
      // Trigger Confetti Blast on Successful Booking Submission!
      confetti({
        particleCount: 120,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#00A8B5', '#00C2CB', '#D4AF37', '#ffffff']
      });

      setStep(4);
      return;
    }
    setStep(prev => prev + 1);
  };

  // Generate WhatsApp Message Link
  const buildWhatsAppUrl = () => {
    const servicesListText = selectedServices.join(', ');
    const text = `*New Appointment Request - AlFa Dental Clinic*\n\n` +
      `*Patient Name:* ${patientName}\n` +
      `*Phone:* ${patientPhone}\n` +
      `*Service(s):* ${servicesListText}\n` +
      `*Preferred Date:* ${selectedDate}\n` +
      `*Preferred Time:* ${selectedTimeSlot}\n` +
      (notes ? `*Notes:* ${notes}\n` : '') +
      `\nPlease confirm my appointment slot at Mohmand Medical Complex, Peshawar.`;

    return `https://wa.me/${clinicData.contact.whatsapp}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="modal-overlay animate-fade-in" onClick={onClose}>
      <div className="booking-modal-content glass-card" onClick={e => e.stopPropagation()}>
        <button className="booking-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div className="booking-modal-header">
          <div className="modal-title-row">
            <ShieldCheck size={24} className="text-teal" />
            <h3 className="booking-modal-title">
              {lang === 'en' ? 'Book Dental Appointment' : 'اپوائنٹمنٹ بُکنگ فارم'}
            </h3>
          </div>
          <p className="booking-modal-sub">
            {clinicData.clinicName} • {clinicData.location.facility}, Peshawar
          </p>
        </div>

        {/* Step Indicator Bar (Steps 1 to 3) */}
        {step < 4 && (
          <div className="step-progress-bar">
            <div className={`progress-step ${step >= 1 ? 'active' : ''}`}>
              <span className="step-num">1</span>
              <span className="step-label">{lang === 'en' ? 'Treatments' : 'سروسز'}</span>
            </div>
            <div className="step-line"></div>
            <div className={`progress-step ${step >= 2 ? 'active' : ''}`}>
              <span className="step-num">2</span>
              <span className="step-label">{lang === 'en' ? 'Date & Time' : 'وقت'}</span>
            </div>
            <div className="step-line"></div>
            <div className={`progress-step ${step >= 3 ? 'active' : ''}`}>
              <span className="step-num">3</span>
              <span className="step-label">{lang === 'en' ? 'Patient Info' : 'معلومات'}</span>
            </div>
          </div>
        )}

        {/* Form Wizard Body */}
        <form onSubmit={handleNextStep} className="booking-form-body">
          {/* STEP 1: Select Service */}
          {step === 1 && (
            <div className="step-pane animate-fade-in">
              <h4 className="step-pane-title">
                {lang === 'en' ? 'Select Procedure / Treatment' : 'مطلوبہ علاج کا انتخاب کریں'}
              </h4>
              <div className="service-choice-grid">
                {clinicData.services.map((service) => {
                  const isChecked = selectedServices.includes(service.title);
                  return (
                    <div 
                      key={service.id} 
                      className={`service-choice-card ${isChecked ? 'selected' : ''}`}
                      onClick={() => toggleServiceChoice(service.title)}
                    >
                      <div className="choice-checkbox">
                        {isChecked && <CheckCircle2 size={16} />}
                      </div>
                      <div className="choice-text">
                        <span className="choice-title">{service.title}</span>
                        <span className="choice-price">{service.priceFormatted}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 2: Date & Time Selection */}
          {step === 2 && (
            <div className="step-pane animate-fade-in">
              <h4 className="step-pane-title">
                {lang === 'en' ? 'Choose Date & Time Slot' : 'تاریخ اور وقت منتخب کریں'}
              </h4>

              <div className="form-group mb-4">
                <label className="form-label">
                  <Calendar size={16} className="text-teal" />
                  <span>{lang === 'en' ? 'Preferred Date' : 'تاریخ'}</span>
                </label>
                <input 
                  type="date" 
                  className="form-input"
                  required
                  value={selectedDate}
                  min={new Date().toISOString().split('T')[0]}
                  onChange={e => setSelectedDate(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label className="form-label">
                  <Clock size={16} className="text-cyan" />
                  <span>{lang === 'en' ? 'Available Time Slot' : 'وقت'}</span>
                </label>
                <div className="time-slots-grid">
                  {availableTimeSlots.map((slot, idx) => (
                    <button
                      key={idx}
                      type="button"
                      className={`time-slot-btn ${selectedTimeSlot === slot ? 'active' : ''}`}
                      onClick={() => setSelectedTimeSlot(slot)}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: Patient Information */}
          {step === 3 && (
            <div className="step-pane animate-fade-in">
              <h4 className="step-pane-title">
                {lang === 'en' ? 'Patient Contact Details' : 'مریض کی ذاتی معلومات'}
              </h4>

              <div className="form-group mb-3">
                <label className="form-label">
                  <User size={16} className="text-teal" />
                  <span>{lang === 'en' ? 'Full Name *' : 'مکمل نام *'}</span>
                </label>
                <input 
                  type="text" 
                  className="form-input"
                  placeholder="e.g. Muhammad Hamza"
                  required
                  value={patientName}
                  onChange={e => setPatientName(e.target.value)}
                />
              </div>

              <div className="form-group mb-3">
                <label className="form-label">
                  <Phone size={16} className="text-cyan" />
                  <span>{lang === 'en' ? 'Mobile / WhatsApp Number *' : 'موبائل نمبر *'}</span>
                </label>
                <input 
                  type="tel" 
                  className="form-input"
                  placeholder="0300 1234567"
                  required
                  value={patientPhone}
                  onChange={e => setPatientPhone(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label className="form-label">
                  <MessageSquare size={16} className="text-muted" />
                  <span>{lang === 'en' ? 'Notes / Dental Issue (Optional)' : 'اضافی معلومات (اختیاری)'}</span>
                </label>
                <textarea 
                  className="form-textarea"
                  rows="2"
                  placeholder="Describe pain or symptoms..."
                  value={notes}
                  onChange={e => setNotes(e.target.value)}
                ></textarea>
              </div>
            </div>
          )}

          {/* STEP 4: Success Confetti & WhatsApp Confirmation */}
          {step === 4 && (
            <div className="step-pane success-pane animate-fade-in">
              <div className="success-icon-badge">
                <Sparkles size={36} className="text-gold" />
              </div>
              
              <h4 className="success-title">
                {lang === 'en' ? 'Appointment Pre-Booked!' : 'اپوائنٹمنٹ کامیابی سے محفوظ کی گئی'}
              </h4>

              <p className="success-desc">
                {lang === 'en'
                  ? 'Your appointment request has been recorded. Click below to instantly confirm via WhatsApp with our front desk.'
                  : 'آپ کی اپوائنٹمنٹ کی درخواست درج کر لی گئی ہے۔ واٹس ایپ پر فوراً تصدیق کریں۔'}
              </p>

              <div className="booking-summary-receipt glass-card">
                <div className="receipt-row">
                  <span className="receipt-label">Patient:</span>
                  <span className="receipt-val">{patientName}</span>
                </div>
                <div className="receipt-row">
                  <span className="receipt-label">Service:</span>
                  <span className="receipt-val">{selectedServices.join(', ')}</span>
                </div>
                <div className="receipt-row">
                  <span className="receipt-label">Date & Time:</span>
                  <span className="receipt-val">{selectedDate} @ {selectedTimeSlot}</span>
                </div>
              </div>

              <a 
                href={buildWhatsAppUrl()} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-primary whatsapp-confirm-btn"
              >
                <MessageSquare size={20} />
                <span>{lang === 'en' ? 'Confirm via WhatsApp Desk' : 'واٹس ایپ پر تصدیق کریں'}</span>
              </a>
            </div>
          )}

          {/* Wizard Footer Controls */}
          {step < 4 && (
            <div className="booking-modal-footer">
              {step > 1 ? (
                <button 
                  type="button" 
                  className="btn-secondary prev-step-btn"
                  onClick={() => setStep(prev => prev - 1)}
                >
                  <ChevronLeft size={16} />
                  <span>{lang === 'en' ? 'Back' : 'واپس'}</span>
                </button>
              ) : (
                <div></div>
              )}

              <button type="submit" className="btn-primary next-step-btn">
                <span>
                  {step === 3 
                    ? (lang === 'en' ? 'Complete Booking' : 'کمل کریں') 
                    : (lang === 'en' ? 'Next Step' : 'آگے بڑھیں')}
                </span>
                <ChevronRight size={16} />
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
