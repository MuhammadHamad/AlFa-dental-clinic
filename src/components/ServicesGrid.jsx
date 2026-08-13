import React, { useState } from 'react';
import { 
  Zap, 
  Shield, 
  Sparkles, 
  Grid, 
  Sun, 
  Activity, 
  Maximize, 
  Heart, 
  Info, 
  Calendar, 
  Tag, 
  Clock 
} from 'lucide-react';
import { clinicData } from '../data/clinicData';
import ServiceDetailModal from './ServiceDetailModal';
import './ServicesGrid.css';

export default function ServicesGrid({ onOpenBooking, lang }) {
  const [selectedService, setSelectedService] = useState(null);

  const iconComponents = {
    Zap: <Zap size={26} className="service-icon-teal" />,
    Shield: <Shield size={26} className="service-icon-cyan" />,
    Sparkles: <Sparkles size={26} className="service-icon-gold" />,
    Grid: <Grid size={26} className="service-icon-teal" />,
    Sun: <Sun size={26} className="service-icon-gold" />,
    Activity: <Activity size={26} className="service-icon-cyan" />,
    Maximize: <Maximize size={26} className="service-icon-teal" />,
    Heart: <Heart size={26} className="service-icon-cyan" />
  };

  const handleBookService = (service) => {
    onOpenBooking(service);
  };

  return (
    <section id="services" className="services-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Sparkles size={15} />
            <span>{lang === 'en' ? 'Clinical Services' : 'ہماری خدمات'}</span>
          </div>
          <h2 className="section-title">
            {lang === 'en' ? 'Specialized Dental Treatments' : 'جدید ترین ڈینٹل خدمات'}
          </h2>
          <p className="section-subtitle">
            {lang === 'en'
              ? 'Comprehensive oral care, root canals, implants, and aesthetic dentistry under strict sterile protocols.'
              : 'مکمل منہ کی دیکھ بھال، روٹ کینال، امپلانٹس اور کاسمیٹک ڈینٹسٹری بہترین معیاری آلات کے ساتھ۔'}
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="services-grid">
          {clinicData.services.map((service) => (
            <div key={service.id} className="service-card glass-card">
              <div className="service-card-top">
                <div className="service-icon-box">
                  {iconComponents[service.iconName] || <Sparkles size={26} />}
                </div>
                <span className="service-cat-pill">{service.category}</span>
              </div>

              <h3 className="service-card-title">{service.title}</h3>
              <p className="service-card-desc">{service.description}</p>

              <div className="service-card-meta">
                <div className="meta-item">
                  <Tag size={15} className="text-teal" />
                  <span>{service.priceFormatted}</span>
                </div>
                <div className="meta-item">
                  <Clock size={15} className="text-cyan" />
                  <span>{service.recoveryTime}</span>
                </div>
              </div>

              <div className="service-card-actions">
                <button 
                  className="btn-secondary service-btn-details"
                  onClick={() => setSelectedService(service)}
                >
                  <Info size={16} />
                  <span>{lang === 'en' ? 'Details' : 'تفصیلات'}</span>
                </button>

                <button 
                  className="btn-primary service-btn-book"
                  onClick={() => handleBookService(service)}
                >
                  <Calendar size={16} />
                  <span>{lang === 'en' ? 'Book Now' : 'بُک کریں'}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Service Details Modal */}
      {selectedService && (
        <ServiceDetailModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
          onBook={handleBookService}
          lang={lang}
        />
      )}
    </section>
  );
}
