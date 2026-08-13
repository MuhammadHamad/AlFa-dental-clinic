import React from 'react';
import { X, CheckCircle, Clock, Tag, Calendar, ShieldCheck, ArrowRight } from 'lucide-react';
import './ServicesGrid.css';

export default function ServiceDetailModal({ service, onClose, onBook, lang }) {
  if (!service) return null;

  return (
    <div className="modal-overlay animate-fade-in" onClick={onClose}>
      <div className="service-modal-content glass-card" onClick={e => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        <div className="service-modal-header">
          <span className="service-category-badge">{service.category}</span>
          <h3 className="service-modal-title">{service.title}</h3>
          <p className="service-modal-desc">{service.description}</p>
        </div>

        <div className="service-modal-meta-grid">
          <div className="meta-card">
            <Tag size={20} className="text-teal" />
            <div>
              <span className="meta-label">{lang === 'en' ? 'Fee Estimate' : 'فیس تخمینہ'}</span>
              <span className="meta-value">{service.priceFormatted}</span>
            </div>
          </div>

          <div className="meta-card">
            <Clock size={20} className="text-cyan" />
            <div>
              <span className="meta-label">{lang === 'en' ? 'Recovery Time' : 'صحت یابی کا وقت'}</span>
              <span className="meta-value">{service.recoveryTime}</span>
            </div>
          </div>
        </div>

        <div className="service-modal-features">
          <h4 className="features-title">
            <ShieldCheck size={18} className="text-gold" />
            <span>{lang === 'en' ? 'Key Clinical Highlights' : 'اہم طبی خصوصیات'}</span>
          </h4>
          <ul className="features-list">
            {service.features.map((feat, idx) => (
              <li key={idx} className="feature-item">
                <CheckCircle size={16} className="text-cyan" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="service-modal-actions">
          <button 
            className="btn-primary modal-book-btn"
            onClick={() => {
              onClose();
              onBook(service);
            }}
          >
            <Calendar size={18} />
            <span>{lang === 'en' ? `Book ${service.title}` : 'یہ سروس بُک کریں'}</span>
          </button>
          <button className="btn-secondary modal-close-action" onClick={onClose}>
            <span>{lang === 'en' ? 'Close' : 'بند کریں'}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
