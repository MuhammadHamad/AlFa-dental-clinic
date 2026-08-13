import React from 'react';
import { Sparkles, MapPin, Phone, Clock, Heart, ShieldCheck } from 'lucide-react';
import { clinicData } from '../data/clinicData';
import './Footer.css';

export default function Footer({ onOpenBooking, lang }) {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Info */}
          <div className="footer-col brand-col">
            <div className="footer-logo">
              <div className="footer-logo-icon">
                <Sparkles size={20} />
              </div>
              <span className="footer-logo-text">AlFa <span className="text-cyan">Dental</span></span>
            </div>
            <p className="footer-tagline">
              {lang === 'en' ? clinicData.tagline : clinicData.taglineUrdu}
            </p>
            <div className="footer-credentials-tag">
              <ShieldCheck size={16} className="text-gold" />
              <span>Dr. Aleena Usman (BDS, Gold Medalist)</span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="footer-col">
            <h4 className="footer-heading">{lang === 'en' ? 'Quick Navigation' : 'نیویگیشن'}</h4>
            <ul className="footer-links">
              <li><a href="#hero">{lang === 'en' ? 'Home' : 'ہوم'}</a></li>
              <li><a href="#doctor">{lang === 'en' ? 'Principal Surgeon' : 'سربراہ معالج'}</a></li>
              <li><a href="#services">{lang === 'en' ? 'Clinical Services' : 'خدمات'}</a></li>
              <li><a href="#results">{lang === 'en' ? 'Before & After Results' : 'نتائج'}</a></li>
              <li><a href="#calculator">{lang === 'en' ? 'Cost Calculator' : 'فیس کیلکولیٹر'}</a></li>
              <li><a href="#location">{lang === 'en' ? 'Location & Hours' : 'لوکیشن'}</a></li>
            </ul>
          </div>

          {/* Treatments List */}
          <div className="footer-col">
            <h4 className="footer-heading">{lang === 'en' ? 'Key Treatments' : 'اہم علاج'}</h4>
            <ul className="footer-links">
              <li><a href="#services">Painless Root Canal (RCT)</a></li>
              <li><a href="#services">Dental Implants & Crowns</a></li>
              <li><a href="#services">Laser Teeth Whitening</a></li>
              <li><a href="#services">Clear Aligners & Braces</a></li>
              <li><a href="#services">Smile Makeovers & Veneers</a></li>
              <li><a href="#services">Ultrasonic Scaling & Polish</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="footer-col">
            <h4 className="footer-heading">{lang === 'en' ? 'Clinic Contact' : 'رابطہ کریں'}</h4>
            <ul className="footer-contact-list">
              <li>
                <MapPin size={16} className="text-teal" />
                <span>{clinicData.location.address}</span>
              </li>
              <li>
                <Phone size={16} className="text-cyan" />
                <a href={`tel:${clinicData.contact.phone}`} className="footer-link-text">
                  {clinicData.contact.phone}
                </a>
              </li>
              <li>
                <Clock size={16} className="text-gold" />
                <span>{clinicData.timing.weekdays}</span>
              </li>
            </ul>

            <button className="btn-primary footer-book-btn" onClick={() => onOpenBooking()}>
              <span>{lang === 'en' ? 'Book Appointment' : 'اپوائنٹمنٹ لیں'}</span>
            </button>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} {clinicData.clinicName}. {lang === 'en' ? 'All Rights Reserved.' : 'جملہ حقوق محفوظ ہیں۔'}</p>
          <p className="footer-craft">
            <span>Crafted with</span>
            <Heart size={14} fill="#ef4444" color="#ef4444" />
            <span>for Peshawar</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
