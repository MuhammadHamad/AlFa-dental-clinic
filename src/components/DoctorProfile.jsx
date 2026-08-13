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
            <span>{lang === 'en' ? 'Lead Dental Surgeon' : 'سربراہ معالج ڈینٹل سرجن'}</span>
          </div>
          <h2 className="section-title">
            {lang === 'en' ? 'Meet Principal Specialist' : 'ہمارے چیف ڈینٹل سرجن'}
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
            {/* Left Portrait / Avatar Column */}
            <div className="doctor-portrait-col">
              <div className="portrait-frame glass-card">
                <div className="doctor-placeholder-avatar">
                  <div className="avatar-graphic-box">
                    <svg viewBox="0 0 120 120" className="doctor-avatar-svg">
                      <circle cx="60" cy="60" r="58" fill="url(#docAvatarGrad)" stroke="rgba(0, 194, 203, 0.4)" strokeWidth="3" />
                      <defs>
                        <linearGradient id="docAvatarGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#16294A" />
                          <stop offset="100%" stopColor="#081225" />
                        </linearGradient>
                      </defs>
                      <path d="M60 22 C46 22 36 32 36 46 C36 58 45 67 58 68 C35 74 22 92 20 108 L100 108 C98 92 85 74 62 68 C75 67 84 58 84 46 C84 32 74 22 60 22 Z" fill="#00C2CB" opacity="0.85" />
                      <path d="M46 72 C46 84 74 84 74 72 L74 64 M60 84 L60 92 C60 96 56 100 50 100" stroke="#D4AF37" strokeWidth="3" strokeLinecap="round" fill="none" />
                      <circle cx="50" cy="100" r="4" fill="#D4AF37" />
                    </svg>
                  </div>

                  <div className="doctor-name-badge">
                    <ShieldCheck size={16} className="text-teal" />
                    <span>{doctor.name} ({doctor.titles.split(' ')[0]})</span>
                  </div>

                  <div className="doctor-distinction-pill">
                    <Award size={14} className="text-gold" />
                    <span>{doctor.distinction} • {doctor.experience}</span>
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

              {/* Qualifications & Specialties */}
              <div className="credentials-grid">
                <div className="cred-block">
                  <h4 className="cred-block-title">
                    <GraduationCap size={18} className="text-teal" />
                    <span>{lang === 'en' ? 'Qualifications' : 'قابلیت اور اسناد'}</span>
                  </h4>
                  <ul className="cred-list">
                    {doctor.credentials.map((cred, idx) => (
                      <li key={idx} className="cred-item">
                        <CheckCircle size={16} className="text-cyan flex-shrink-0" />
                        <span>{cred}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="cred-block">
                  <h4 className="cred-block-title">
                    <ShieldCheck size={18} className="text-teal" />
                    <span>{lang === 'en' ? 'Specialties' : 'خاص مہارتیں'}</span>
                  </h4>
                  <ul className="cred-list">
                    {doctor.specialties.map((spec, idx) => (
                      <li key={idx} className="cred-item">
                        <CheckCircle size={16} className="text-gold flex-shrink-0" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="doctor-actions">
                <button className="btn-primary doctor-btn" onClick={() => onOpenBooking()}>
                  <Calendar size={18} />
                  <span>{lang === 'en' ? 'Book Consultation' : 'کنسلٹیشن بُک کریں'}</span>
                </button>
                <a href={`tel:${clinicData.contact.phone}`} className="btn-secondary doctor-btn">
                  <PhoneCall size={18} />
                  <span>{lang === 'en' ? 'Call Desk' : 'کال کریں'}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
