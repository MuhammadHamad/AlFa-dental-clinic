import React from 'react';
import { 
  MapPin, 
  Clock, 
  Phone, 
  ExternalLink, 
  CalendarCheck, 
  ShieldCheck, 
  Navigation, 
  Star
} from 'lucide-react';
import { clinicData } from '../data/clinicData';
import './LocationMap.css';

export default function LocationMap({ lang }) {
  const weeklyTimings = [
    { day: lang === 'en' ? 'Monday - Saturday' : 'پیر - ہفتہ', hours: '10:00 AM - 9:00 PM' },
    { day: lang === 'en' ? 'Sunday' : 'اتوار', hours: 'Emergency Appointments Only' }
  ];

  return (
    <section id="location" className="location-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <MapPin size={15} />
            <span>{lang === 'en' ? 'Location & Hours' : 'کلینک کا پتہ اور اوقات'}</span>
          </div>
          <h2 className="section-title">
            {lang === 'en' ? 'Visit AlFa Dental Clinic' : 'الفا ڈینٹل کلینک تشریف لائیں'}
          </h2>
          <p className="section-subtitle">
            {lang === 'en'
              ? 'Conveniently located at Mohmand Medical Complex in Dabgari Gardens, Peshawar.'
              : 'مہمند میڈیکل کمپلیکس، دبگری گارڈنز، پشاور میں واقع بہترین ڈینٹل سنٹر۔'}
          </p>
        </div>

        {/* Location Grid */}
        <div className="location-grid">
          {/* Left Column: Address, Hours, Portals */}
          <div className="location-details-col glass-card">
            {/* Facility Address Card */}
            <div className="loc-card-block">
              <div className="loc-block-header">
                <div className="loc-icon-badge">
                  <MapPin size={22} className="text-teal" />
                </div>
                <div>
                  <h3 className="loc-block-title">{clinicData.location.facility}</h3>
                  <span className="loc-floor-tag">{clinicData.location.floor}</span>
                </div>
              </div>
              <p className="loc-full-address">{clinicData.location.address}</p>
              
              <a 
                href={clinicData.location.googleMapsUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-primary get-directions-btn"
              >
                <Navigation size={16} />
                <span>{lang === 'en' ? 'Get Directions on Google Maps' : 'گوگل میپس پر راستہ دیکھیں'}</span>
              </a>
            </div>

            {/* Weekly Timings Matrix */}
            <div className="loc-card-block">
              <h4 className="loc-sub-title">
                <Clock size={18} className="text-cyan" />
                <span>{lang === 'en' ? 'Weekly Consultation Hours' : 'اوپراٹنگ اوقات'}</span>
              </h4>

              <div className="timings-list">
                {weeklyTimings.map((t, idx) => (
                  <div key={idx} className="hours-row">
                    <span className="day-name">{t.day}</span>
                    <span className="time-slot">{t.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Online Healthcare Portals */}
            <div className="loc-card-block">
              <h4 className="loc-sub-title">
                <CalendarCheck size={18} className="text-gold" />
                <span>{lang === 'en' ? 'Book via Healthcare Portals' : 'آن لائن ہیلتھ کیئر پورٹلز'}</span>
              </h4>

              <div className="portals-row">
                {clinicData.portals.map((portal, idx) => (
                  <a 
                    key={idx} 
                    href={portal.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="portal-link-btn"
                  >
                    <span>{portal.name}</span>
                    <ExternalLink size={14} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Embedded Google Map & Info Card */}
          <div className="location-map-col glass-card">
            {/* Top-Left Google Maps Info Card */}
            <div className="map-top-left-card glass-card">
              <div className="map-card-header">
                <div className="map-pin-circle">
                  <MapPin size={18} className="text-cyan" />
                </div>
                <div>
                  <h4 className="map-clinic-name">{clinicData.clinicName}</h4>
                  <div className="map-rating-row">
                    <Star size={13} fill="#D4AF37" color="#D4AF37" />
                    <span className="map-rating-val">4.9</span>
                    <span className="map-review-count">(500+ reviews)</span>
                  </div>
                </div>
              </div>

              <p className="map-card-desc">
                {lang === 'en' 
                  ? 'Premier Advanced Dental Care & Esthetics • Dr. Aleena Usman (BDS)' 
                  : clinicData.taglineUrdu}
              </p>

              <div className="map-card-address-box">
                <span className="address-label">{lang === 'en' ? 'Address:' : 'پتہ:'}</span>
                <span className="address-val">{clinicData.location.address}</span>
              </div>

              <a 
                href={clinicData.location.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="map-direct-directions-btn"
              >
                <Navigation size={14} />
                <span>{lang === 'en' ? 'Open Google Maps Route' : 'گوگل میپس روٹ پر جائیں'}</span>
              </a>
            </div>

            {/* Map Frame */}
            <div className="map-frame-wrapper">
              <iframe
                title="AlFa Dental Clinic Map - Mohmand Medical Complex Peshawar"
                src={`https://maps.google.com/maps?q=${encodeURIComponent(clinicData.location.embeddedMapQuery)}&t=&z=16&ie=UTF-8&iwloc=B&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="google-map-iframe"
              ></iframe>
            </div>

            {/* Floating Emergency Hotline Box */}
            <div className="hotline-overlay-box glass-card">
              <div className="hotline-icon-wrap">
                <Phone size={20} className="text-teal" />
              </div>
              <div className="hotline-text-group">
                <span className="hotline-label">{lang === 'en' ? '24/7 Dental Emergency Hotline' : 'ایمرجنسی ڈینٹل ہیلپ لائن'}</span>
                <a href={`tel:${clinicData.contact.emergency}`} className="hotline-number">
                  {clinicData.contact.emergency}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
