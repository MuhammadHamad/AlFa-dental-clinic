import React, { useState } from 'react';
import { Calculator, Check, Calendar, ArrowRight, ShieldAlert, Sparkles, RefreshCw } from 'lucide-react';
import { clinicData } from '../data/clinicData';
import './CostCalculator.css';

export default function CostCalculator({ onOpenBooking, lang }) {
  const [selectedIds, setSelectedIds] = useState(['rct']); // default 1 selected

  const toggleSelect = (id) => {
    setSelectedIds(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const selectedServices = clinicData.services.filter(s => selectedIds.includes(s.id));
  
  const estimatedTotalMin = selectedServices.reduce((sum, s) => sum + s.startingPrice, 0);
  const estimatedTotalMax = selectedServices.reduce((sum, s) => sum + Math.round(s.startingPrice * 1.8), 0);

  const handleBookSelected = () => {
    onOpenBooking(selectedServices);
  };

  return (
    <section id="calculator" className="calculator-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Calculator size={15} />
            <span>{lang === 'en' ? 'Fee Calculator' : 'شفاف فیس کیلکولیٹر'}</span>
          </div>
          <h2 className="section-title">
            {lang === 'en' ? 'Treatment Cost Estimator' : 'علاج کا شفاف تخمینہ'}
          </h2>
          <p className="section-subtitle">
            {lang === 'en'
              ? 'Select desired dental procedures below to calculate an instant fee estimate in PKR.'
              : 'اپنی مرضی کے مطابق ڈینٹل علاج منتخب کریں اور پاکستانی روپے میں فوری تخمینہ دیکھیں۔'}
          </p>
        </div>

        {/* Calculator Interactive Grid */}
        <div className="calculator-grid">
          {/* Left Selection Checklist */}
          <div className="calculator-checklist glass-card">
            <div className="checklist-header">
              <h3 className="checklist-title">{lang === 'en' ? 'Select Treatments' : 'علاج منتخب کریں'}</h3>
              <button 
                className="reset-btn" 
                onClick={() => setSelectedIds([])}
                title="Clear all selections"
              >
                <RefreshCw size={14} />
                <span>{lang === 'en' ? 'Reset' : 'ری سیٹ'}</span>
              </button>
            </div>

            <div className="checklist-items">
              {clinicData.services.map((service) => {
                const isSelected = selectedIds.includes(service.id);
                return (
                  <div 
                    key={service.id} 
                    className={`checklist-row ${isSelected ? 'selected' : ''}`}
                    onClick={() => toggleSelect(service.id)}
                  >
                    <div className="checkbox-custom">
                      {isSelected && <Check size={14} className="check-mark" />}
                    </div>
                    <div className="checklist-info">
                      <span className="treatment-title">{service.title}</span>
                      <span className="treatment-category">{service.category}</span>
                    </div>
                    <span className="treatment-price">{service.priceFormatted}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Live Estimate Summary Box */}
          <div className="calculator-summary glass-card">
            <div className="summary-badge">
              <Sparkles size={16} className="text-gold" />
              <span>{lang === 'en' ? 'Instant Quote' : 'فوری تخمینہ'}</span>
            </div>

            <h3 className="summary-title">{lang === 'en' ? 'Estimated Total Fee' : 'کل تخمینہ فیس'}</h3>

            <div className="summary-price-box">
              <span className="currency-label">PKR</span>
              <span className="total-amount">
                {selectedServices.length > 0
                  ? `${estimatedTotalMin.toLocaleString()} - ${estimatedTotalMax.toLocaleString()}`
                  : '0'}
              </span>
            </div>

            <p className="summary-selected-count">
              {selectedServices.length} {lang === 'en' ? 'procedure(s) selected' : 'سروسز منتخب کی گئیں'}
            </p>

            {/* Selected Items List Pill view */}
            <div className="summary-pills-list">
              {selectedServices.map(s => (
                <span key={s.id} className="selected-pill">
                  {s.title}
                </span>
              ))}
            </div>

            <div className="summary-disclaimer">
              <ShieldAlert size={16} className="text-cyan flex-shrink-0" />
              <span>
                {lang === 'en'
                  ? 'Final cost will be confirmed after comprehensive clinical evaluation by Dr. Aleena Usman.'
                  : 'حتمی فیس کا تعین معالج کی کلینیکل چیک اپ کے بعد کیا جائے گا۔'}
              </span>
            </div>

            <button 
              className="btn-primary summary-book-btn"
              disabled={selectedServices.length === 0}
              onClick={handleBookSelected}
            >
              <Calendar size={18} />
              <span>{lang === 'en' ? 'Book Selected Treatments' : 'منتخب کردہ علاج کے لیے اپوائنٹمنٹ لیں'}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
