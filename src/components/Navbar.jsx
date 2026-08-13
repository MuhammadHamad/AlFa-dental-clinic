import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Globe, 
  Menu, 
  X, 
  Calendar, 
  Sparkles, 
  ChevronRight,
  ShieldCheck
} from 'lucide-react';
import { clinicData } from '../data/clinicData';
import './Navbar.css';

export default function Navbar({ onOpenBooking, lang, setLang }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLang(prev => (prev === 'en' ? 'ur' : 'en'));
  };

  const navLinks = [
    { name: lang === 'en' ? 'Home' : 'ہوم', href: '#hero' },
    { name: lang === 'en' ? 'About Doctor' : 'معالج کی تفصیل', href: '#doctor' },
    { name: lang === 'en' ? 'Services' : 'خدمات', href: '#services' },
    { name: lang === 'en' ? 'Results' : 'نتائج', href: '#results' },
    { name: lang === 'en' ? 'Fee Calculator' : 'فیس کیلکولیٹر', href: '#calculator' },
    { name: lang === 'en' ? 'Location' : 'لوکیشن', href: '#location' },
  ];

  return (
    <header className={`navbar-header ${scrolled ? 'scrolled' : ''}`}>
      {/* Top Slim Info Bar - Hidden on Mobile (<900px) */}
      <div className="top-bar desktop-only">
        <div className="container top-bar-container">
          <div className="top-bar-left">
            <span className="info-item">
              <MapPin size={14} className="top-icon" />
              <span>{clinicData.location.address}</span>
            </span>
            <span className="info-divider">|</span>
            <span className="info-item live-status">
              <span className="status-dot"></span>
              <Clock size={14} className="top-icon" />
              <span>{clinicData.timing.hoursToday} ({clinicData.timing.statusText})</span>
            </span>
          </div>

          <div className="top-bar-right">
            <a href={`tel:${clinicData.contact.phone}`} className="info-item phone-link">
              <Phone size={14} className="top-icon" />
              <span>{clinicData.contact.phone}</span>
            </a>
            <button className="lang-toggle-btn" onClick={toggleLanguage} title="Switch Language">
              <Globe size={14} />
              <span>{lang === 'en' ? 'اردو' : 'English'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="main-nav">
        <div className="container main-nav-container">
          {/* Logo & Brand Name */}
          <a href="#hero" className="brand-logo">
            <div className="logo-icon-wrap">
              <Sparkles size={22} className="logo-sparkle" />
            </div>
            <div className="logo-text-group">
              <span className="brand-title">AlFa <span className="brand-highlight">Dental</span></span>
              <span className="brand-subtitle">Esthetics & Surgery • Peshawar</span>
            </div>
          </a>

          {/* Center Links - Desktop Only */}
          <nav className="desktop-nav-links desktop-only">
            {navLinks.map((link, idx) => (
              <a key={idx} href={link.href} className="nav-link">
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action CTAs - Desktop Only */}
          <div className="desktop-actions desktop-only">
            <button className="btn-primary" onClick={() => onOpenBooking()}>
              <Calendar size={16} />
              <span>{lang === 'en' ? 'Book Appointment' : 'اپوائنٹمنٹ لیں'}</span>
            </button>
          </div>

          {/* Mobile Right Bar (<900px): Live Hours Badge + Hamburger */}
          <div className="mobile-header-right mobile-only">
            <div className="mobile-live-badge">
              <span className="status-dot"></span>
              <span>Open</span>
            </div>
            <button 
              className="hamburger-btn" 
              onClick={() => setMobileMenuOpen(prev => !prev)}
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Full-Screen Slide-Down Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer animate-fade-in">
          <div className="mobile-drawer-inner">
            <div className="drawer-top-info">
              <div className="drawer-clinic-title">
                <ShieldCheck className="text-teal" size={20} />
                <span>{clinicData.clinicName}</span>
              </div>
              <p className="drawer-address">{clinicData.location.address}</p>
            </div>

            <nav className="mobile-drawer-links">
              {navLinks.map((link, idx) => (
                <a 
                  key={idx} 
                  href={link.href} 
                  className="drawer-link"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span>{link.name}</span>
                  <ChevronRight size={18} />
                </a>
              ))}
            </nav>

            <div className="drawer-footer-actions">
              <button 
                className="btn-primary drawer-book-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
              >
                <Calendar size={18} />
                <span>{lang === 'en' ? 'Book Appointment Now' : 'ابھی اپوائنٹمنٹ لیں'}</span>
              </button>

              <div className="drawer-contact-row">
                <a href={`tel:${clinicData.contact.phone}`} className="btn-secondary flex-1">
                  <Phone size={16} />
                  <span>Call</span>
                </a>
                <button className="lang-toggle-btn drawer-lang" onClick={toggleLanguage}>
                  <Globe size={16} />
                  <span>{lang === 'en' ? 'Urdu (اردو)' : 'English'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
