import React from 'react';
import { 
  ShieldCheck, 
  Sparkles, 
  Calendar, 
  ArrowRight, 
  CheckCircle2, 
  Star, 
  Award, 
  Activity, 
  Users 
} from 'lucide-react';
import { clinicData } from '../data/clinicData';
import './Hero.css';

export default function Hero({ onOpenBooking, lang }) {
  const highlights = lang === 'en' ? [
    'International Autoclave Sterilization Standards',
    'Gold Medalist Specialist & Consultant Surgeon',
    'Painless Single-Sitting Root Canal Technology',
    'Transparent Fee Structure & Affordable Care'
  ] : [
    'عالمی معیار کا سٹرلائزیشن اور صفائی کا نظام',
    'گولڈ میڈلسٹ اسپیشلسٹ اور کنسلٹنٹ سرجن',
    'جدید ترین اور درد سے پاک روٹ کینال علاج',
    'شفاف اور مناسب فیس شیڈول'
  ];

  return (
    <section id="hero" className="hero-section">
      <div className="container hero-container">
        {/* Left Content Column */}
        <div className="hero-content">
          <div className="hero-badge">
            <Award size={16} className="badge-icon" />
            <span>{lang === 'en' ? "Peshawar's Top Rated Dental Clinic" : "پشاور کا بہترین ڈینٹل کلینک"}</span>
          </div>

          <h1 className="hero-title">
            {lang === 'en' ? (
              <>
                Precision Dental Care & <span className="text-gradient">Aesthetic Excellence</span>
              </>
            ) : (
              <>
                جدید ڈینٹل کیئر اور <span className="text-gradient">خوبصورت مسکراہٹ</span>
              </>
            )}
          </h1>

          <p className="hero-tagline">
            {lang === 'en' 
              ? clinicData.tagline 
              : clinicData.taglineUrdu}
          </p>

          <p className="hero-location-line">
            <ShieldCheck size={16} className="text-teal" />
            <span>{clinicData.location.facility} • {clinicData.location.city}</span>
          </p>

          {/* Highlights List */}
          <ul className="hero-highlights">
            {highlights.map((item, idx) => (
              <li key={idx} className="highlight-item">
                <CheckCircle2 size={18} className="check-icon" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* Action Buttons */}
          <div className="hero-actions">
            <button className="btn-primary hero-btn" onClick={() => onOpenBooking()}>
              <Calendar size={18} />
              <span>{lang === 'en' ? 'Book Consultation' : 'اپوائنٹمنٹ بُک کریں'}</span>
            </button>

            <a href="#services" className="btn-secondary hero-btn">
              <span>{lang === 'en' ? 'View Treatments' : 'خدمات دیکھیں'}</span>
              <ArrowRight size={18} />
            </a>
          </div>

          {/* Micro Trust Stats */}
          <div className="hero-micro-trust">
            <div className="micro-stat">
              <div className="avatar-group">
                <div className="avatar">A</div>
                <div className="avatar">M</div>
                <div className="avatar">K</div>
                <div className="avatar">Z</div>
              </div>
              <div className="micro-stat-text">
                <span className="micro-stat-num">10,000+</span>
                <span className="micro-stat-label">{lang === 'en' ? 'Satisfied Patients' : 'مطمئن مریض'}</span>
              </div>
            </div>
            
            <div className="micro-stat-divider"></div>

            <div className="micro-stat">
              <div className="star-rating-box">
                <Star size={16} fill="#D4AF37" color="#D4AF37" />
                <span className="rating-score">5.0</span>
              </div>
              <span className="micro-stat-label">{lang === 'en' ? 'Verified Reviews' : 'مثبت تاثرات'}</span>
            </div>
          </div>
        </div>

        {/* Right Media Column - High Quality Interior Image with Glowing Overlay */}
        <div className="hero-media">
          <div className="hero-image-wrapper glass-card">
            <img 
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=80" 
              alt="AlFa Dental Clinic Treatment Room" 
              className="hero-img"
            />
            
            {/* Glowing Backdrop Mesh */}
            <div className="glow-effect-teal"></div>
            <div className="glow-effect-gold"></div>

            {/* Glowing Rating Badge Overlay */}
            <div className="rating-overlay-badge glass-card animate-float">
              <div className="badge-stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="#D4AF37" color="#D4AF37" />
                ))}
              </div>
              <div className="badge-info">
                <span className="badge-num">5.0 Rating</span>
                <span className="badge-sub">{lang === 'en' ? 'AlFa Dental Clinic • Dabgari Gardens' : 'الفا ڈینٹل کلینک • پشاور'}</span>
              </div>
            </div>

            {/* Sterilization Overlay Badge */}
            <div className="sterilization-overlay-badge glass-card animate-float-delayed">
              <ShieldCheck size={24} className="text-teal" />
              <div>
                <span className="badge-title">{lang === 'en' ? '100% Autoclaved' : 'جرثومہ سے پاک'}</span>
                <span className="badge-desc">{lang === 'en' ? 'Hospital Sterilization' : 'ہسپتال کا معیار'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
