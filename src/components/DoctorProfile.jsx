import React from 'react';
import { 
  Award, 
  GraduationCap, 
  CheckCircle, 
  Calendar, 
  PhoneCall, 
  Sparkles, 
  ShieldCheck 
} from 'lucide-react';
import { clinicData } from '../data/clinicData';
import './DoctorProfile.css';

export default function DoctorProfile({ onOpenBooking, lang }) {
  const doctor = clinicData.doctor;

  return (
    <section id="doctor" className="doctor-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Award size={15} />
            <span>{lang === 'en' ? 'Lead Dental Consultant' : 'سربراہ معالج ڈینٹل سرجن'}</span>
          </div>
          <h2 className="section-title">
            {lang === 'en' ? 'Meet Principal Surgeon' : 'ہمارے چیف ڈینٹل سرجن'}
          </h2>
          <p className="section-subtitle">
            {lang === 'en'
              ? 'Dedicated to high-precision restorative dentistry, root canal therapy, and aesthetic smile transformations in Peshawar.'
              : 'پشاور میں معیاری روٹ کینال، کاسمیٹک اور ایڈوانس ڈینٹل کیئر کے ماہر سرجن۔'}
          </p>
        </div>

        {/* Doctor Card Grid */}
        <div className="doctor-card glass-card">
          <div className="doctor-layout-grid">
            {/* Left Portrait Column */}
            <div className="doctor-portrait-col">
              <div className="portrait-frame">
                <img 
                  src="https://images.unsplash.com/photo-1594824813571-24a69c100417?auto=format&fit=crop&w=800&q=80" 
                  alt={doctor.name} 
                  className="doctor-photo"
                />
                
                <div className="portrait-badge glass-card">
                  <Award className="text-gold" size={20} />
                  <div>
                    <span className="portrait-badge-title">{doctor.distinction}</span>
                    <span className="portrait-badge-sub">{doctor.experience}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Bio Details Column */}
            <div className="doctor-info-col">
              <div className="doctor-header-group">
                <h3 className="doctor-name">{doctor.name}</h3>
                <p className="doctor-titles">{doctor.titles}</p>
                <div className="distinction-tag">
                  <Sparkles size={14} className="text-gold" />
                  <span>{doctor.distinction}</span>
                </div>
              </div>

              <p className="doctor-bio">{doctor.bio}</p>

              {/* Credentials & Specialties 1-Column Collapse on Mobile Safeguard */}
              <div className="credentials-grid">
                <div className="cred-block">
                  <h4 className="cred-block-title">
                    <GraduationCap size={18} className="text-teal" />
                    <span>{lang === 'en' ? 'Qualifications & Distinction' : 'قابلیت اور اسناد'}</span>
                  </h4>
                  <ul className="cred-list">
                    {doctor.credentials.map((cred, idx) => (
                      <li key={idx} className="cred-item">
                        <CheckCircle size={16} className="text-cyan" />
                        <span>{cred}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="cred-block">
                  <h4 className="cred-block-title">
                    <ShieldCheck size={18} className="text-teal" />
                    <span>{lang === 'en' ? 'Clinical Specialties' : 'خاص مہارتیں'}</span>
                  </h4>
                  <ul className="cred-list">
                    {doctor.specialties.map((spec, idx) => (
                      <li key={idx} className="cred-item">
                        <CheckCircle size={16} className="text-gold" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Buttons - Stacked Vertically on Mobile */}
              <div className="doctor-actions">
                <button className="btn-primary doctor-btn" onClick={() => onOpenBooking()}>
                  <Calendar size={18} />
                  <span>{lang === 'en' ? 'Book Consultation with Dr. Aleena' : 'کنسلٹیشن بُک کریں'}</span>
                </button>
                <a href={`tel:${clinicData.contact.phone}`} className="btn-secondary doctor-btn">
                  <PhoneCall size={18} />
                  <span>{lang === 'en' ? 'Call Clinic Desk' : 'کلینک پر کال کریں'}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
