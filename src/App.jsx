import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBadges from './components/TrustBadges';
import DoctorProfile from './components/DoctorProfile';
import ServicesGrid from './components/ServicesGrid';
import BeforeAfterSlider from './components/BeforeAfterSlider';
import CostCalculator from './components/CostCalculator';
import LocationMap from './components/LocationMap';
import BookingModal from './components/BookingModal';
import FloatingCTAs from './components/FloatingCTAs';
import Footer from './components/Footer';

export default function App() {
  const [lang, setLang] = useState('en');
  const [bookingOpen, setBookingOpen] = useState(false);
  const [initialBookingServices, setInitialBookingServices] = useState([]);

  const handleOpenBooking = (services = null) => {
    if (services) {
      setInitialBookingServices(Array.isArray(services) ? services : [services]);
    } else {
      setInitialBookingServices([]);
    }
    setBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setBookingOpen(false);
  };

  return (
    <div className={`app-root lang-${lang}`}>
      {/* Navigation */}
      <Navbar 
        onOpenBooking={handleOpenBooking} 
        lang={lang} 
        setLang={setLang} 
      />

      {/* Hero Section */}
      <Hero 
        onOpenBooking={handleOpenBooking} 
        lang={lang} 
      />

      {/* Trust & Specialization Matrix */}
      <TrustBadges lang={lang} />

      {/* Principal Doctor Profile */}
      <DoctorProfile 
        onOpenBooking={handleOpenBooking} 
        lang={lang} 
      />

      {/* Interactive Clinical Services Grid */}
      <ServicesGrid 
        onOpenBooking={handleOpenBooking} 
        lang={lang} 
      />

      {/* Before & After Interactive Comparison Slider */}
      <BeforeAfterSlider lang={lang} />

      {/* Treatment Fee Estimator Calculator */}
      <CostCalculator 
        onOpenBooking={handleOpenBooking} 
        lang={lang} 
      />

      {/* Location & Operating Hours */}
      <LocationMap lang={lang} />

      {/* Footer */}
      <Footer 
        onOpenBooking={handleOpenBooking} 
        lang={lang} 
      />

      {/* Multi-Step Booking Modal */}
      {bookingOpen && (
        <BookingModal
          initialServices={initialBookingServices}
          onClose={handleCloseBooking}
          lang={lang}
        />
      )}

      {/* Responsive Floating CTAs (Call & WhatsApp) */}
      <FloatingCTAs />
    </div>
  );
}
