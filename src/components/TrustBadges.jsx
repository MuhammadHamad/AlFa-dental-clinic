import React from 'react';
import { Smile, ShieldCheck, Award, Star } from 'lucide-react';
import { clinicData } from '../data/clinicData';
import './TrustBadges.css';

export default function TrustBadges({ lang }) {
  const iconMap = {
    Smile: <Smile size={28} className="stat-icon-teal" />,
    ShieldCheck: <ShieldCheck size={28} className="stat-icon-cyan" />,
    Award: <Award size={28} className="stat-icon-gold" />,
    Star: <Star size={28} className="stat-icon-gold" />
  };

  return (
    <section className="trust-badges-section">
      <div className="container">
        <div className="trust-matrix glass-card">
          {clinicData.trustMilestones.map((item, idx) => (
            <div key={idx} className="trust-stat-card">
              <div className="icon-wrapper">
                {iconMap[item.icon] || <ShieldCheck size={28} />}
              </div>
              <div className="stat-text-group">
                <span className="stat-number">{item.number}</span>
                <span className="stat-label">
                  {lang === 'en' ? item.label : item.labelUrdu}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
