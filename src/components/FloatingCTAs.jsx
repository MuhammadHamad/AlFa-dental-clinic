import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';
import { clinicData } from '../data/clinicData';
import './FloatingCTAs.css';

export default function FloatingCTAs() {
  const whatsappUrl = `https://wa.me/${clinicData.contact.whatsapp}?text=${encodeURIComponent('Hello AlFa Dental Clinic, I would like to inquire about dental services and appointments.')}`;

  return (
    <div className="floating-ctas-container">
      {/* Phone Call Float Button */}
      <a 
        href={`tel:${clinicData.contact.phone}`} 
        className="floating-btn phone-float" 
        title="Call AlFa Dental Clinic Desk"
        aria-label="Call Clinic Desk"
      >
        <Phone size={22} />
      </a>

      {/* WhatsApp Float Button */}
      <a 
        href={whatsappUrl} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="floating-btn whatsapp-float" 
        title="Chat on WhatsApp"
        aria-label="Chat on WhatsApp"
      >
        <MessageSquare size={22} />
      </a>
    </div>
  );
}
