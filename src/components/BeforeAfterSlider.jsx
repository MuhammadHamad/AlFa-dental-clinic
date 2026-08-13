import React, { useState, useRef, useEffect, useCallback } from 'react';
import { SlidersHorizontal, Sparkles, ChevronLeft, ChevronRight, CheckCircle } from 'lucide-react';
import { beforeAfterCases } from '../data/beforeAfterData';
import './BeforeAfterSlider.css';

export default function BeforeAfterSlider({ lang }) {
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const [sliderPos, setSliderPos] = useState(50); // percentage 0 - 100
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const activeCase = beforeAfterCases[activeCaseIndex];

  // Calculate position percentage from mouse/touch event
  const updatePosition = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPos(percentage);
  }, []);

  // Event handlers for dragging logic (MouseDown/TouchStart)
  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsDragging(true);
    updatePosition(e.clientX);
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    if (e.touches && e.touches[0]) {
      updatePosition(e.touches[0].clientX);
    }
  };

  // Global listeners attached when dragging is active
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isDragging) return;
      updatePosition(e.clientX);
    };

    const handleTouchMove = (e) => {
      if (!isDragging) return;
      if (e.touches && e.touches[0]) {
        updatePosition(e.touches[0].clientX);
      }
    };

    const handleDragEnd = () => {
      if (isDragging) {
        setIsDragging(false);
      }
    };

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleDragEnd);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleDragEnd);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleDragEnd);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleDragEnd);
    };
  }, [isDragging, updatePosition]);

  return (
    <section id="results" className="before-after-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <SlidersHorizontal size={15} />
            <span>{lang === 'en' ? 'Real Clinical Results' : 'علاج کے حقیقی نتائج'}</span>
          </div>
          <h2 className="section-title">
            {lang === 'en' ? 'Interactive Before & After Comparison' : 'قبل اور بعد کا موازنہ'}
          </h2>
          <p className="section-subtitle">
            {lang === 'en'
              ? 'Drag the slider handle left or right to see true clinical smile transformations performed at AlFa Dental Clinic.'
              : 'الفا ڈینٹل کلینک کے حقیقی علاج کے نتائج دیکھنے کے لیے سلائیڈر کو دائیں بائیں کریں۔'}
          </p>
        </div>

        {/* Case Switcher Tabs */}
        <div className="case-tabs-row">
          {beforeAfterCases.map((item, idx) => (
            <button
              key={item.id}
              className={`case-tab-btn ${activeCaseIndex === idx ? 'active' : ''}`}
              onClick={() => {
                setActiveCaseIndex(idx);
                setSliderPos(50);
              }}
            >
              <span>{item.title}</span>
            </button>
          ))}
        </div>

        {/* Before & After Interactive Container */}
        <div className="slider-wrapper glass-card">
          <div className="case-meta-bar">
            <div className="case-info-group">
              <h3 className="case-title">{activeCase.title}</h3>
              <p className="case-desc">{activeCase.description}</p>
            </div>
            <div className="case-meta-pills">
              <span className="pill-item">
                <Sparkles size={14} className="text-gold" />
                <span>{activeCase.procedure}</span>
              </span>
              <span className="pill-item">
                <CheckCircle size={14} className="text-teal" />
                <span>{activeCase.duration}</span>
              </span>
            </div>
          </div>

          <div 
            ref={containerRef}
            className={`comparison-container ${isDragging ? 'is-dragging' : ''}`}
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
          >
            {/* AFTER Image (Full width background) */}
            <img 
              src={activeCase.afterImage} 
              alt="After Clinical Treatment" 
              className="comparison-img after-img"
            />

            {/* BEFORE Image (Clipped dynamically with clipPath) */}
            <div 
              className="before-img-wrapper" 
              style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
            >
              <img 
                src={activeCase.beforeImage} 
                alt="Before Clinical Treatment" 
                className="comparison-img before-img"
              />
            </div>

            {/* Top-Left BEFORE Badge (Safeguard: max-width 45%, text-overflow ellipsis) */}
            <div className="badge-before">
              <span className="badge-text">BEFORE</span>
            </div>

            {/* Bottom-Right AFTER Badge (Safeguard: max-width 45%, text-overflow ellipsis) */}
            <div className="badge-after">
              <span className="badge-text">AFTER</span>
            </div>

            {/* Drag Divider Line & Handle */}
            <div 
              className="divider-line" 
              style={{ left: `${sliderPos}%` }}
            >
              <div className="drag-handle" title="Hold and drag to compare">
                <ChevronLeft size={16} />
                <ChevronRight size={16} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
