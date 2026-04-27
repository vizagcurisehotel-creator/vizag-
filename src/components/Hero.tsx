"use client";
import { useState, useEffect, useRef } from 'react';
import { Play, Calendar, User, ChevronRight, ArrowDown, X } from 'lucide-react';

const Hero = ({ onSearch, globalDates, setGlobalDates, guests, setGuests }: { onSearch: any, globalDates: any, setGlobalDates: any, guests: any, setGuests: any }) => {
  const [scrollY, setScrollY] = useState(0);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="hero-section" style={{ position: 'relative', height: '100vh', width: '100%', overflow: 'hidden' }}>
      
      {/* ── Background Video w/ Parallax ────────────────── */}
      <div 
        className="parallax-bg"
        style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          width: '100%', 
          height: '120%', 
          zIndex: 1,
          minHeight: '100%',
          willChange: 'transform'
        }}
      >

        {/* Cinematic Vignette & Tint Overlay */}
        <div style={{ 
          position: 'absolute', 
          inset: 0, 
          background: 'radial-gradient(circle, rgba(0,0,0,0) 0%, rgba(0,0,0,0.4) 60%, rgba(10,10,10,0.9) 100%), linear-gradient(to bottom, rgba(212, 175, 55, 0.05) 0%, rgba(0,0,0,0) 50%, rgba(0,0,0,0.8) 100%)', 
          zIndex: 2 
        }} />
        
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          poster="/luxury-hero.png"
          style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover',
            filter: 'contrast(1.1) brightness(0.75) saturate(1.1) sepia(0.1)' // Cinematic grading
          }}
        >
          <source src="/Vizag_Cruise_Luxury.mp4" type="video/mp4" />
        </video>
      </div>

      {/* ── Hero Content ────────────────────────────────── */}
      <div 
        className="container"
        style={{ 
          position: 'relative', 
          zIndex: 10, 
          height: '100%', 
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'center', 
          alignItems: 'center',
          textAlign: 'center',
          paddingBottom: '100px' // Adjusted for mobile
        }}
      >
        <div className="reveal active hero-content" style={{ transitionDelay: '0.2s', width: '100%' }}>
          <h2 style={{ 
            fontFamily: 'var(--font-body)', 
            fontSize: '0.8rem', 
            letterSpacing: '0.5em', 
            color: 'var(--luxury-gold)',
            marginBottom: '20px',
            textTransform: 'uppercase'
          }}>
            Welcome to the Apex of Hospitality
          </h2>
          <h1 style={{ 
            fontSize: 'clamp(2.5rem, 8vw, 5.5rem)', 
            fontFamily: 'var(--font-heading)',
            color: 'var(--luxury-white)',
            lineHeight: 1.1,
            marginBottom: '30px'
          }}>
            THE OCEAN<br />
            <span className="gold-text">STATEROOM</span>
          </h1>
          <p style={{ 
            maxWidth: '650px', 
            margin: '0 auto 40px', 
            fontSize: '0.9rem', 
            color: 'var(--luxury-pearl)',
            opacity: 0.8,
            lineHeight: 1.6
          }}>
            Experience Visakhapatnam's most iconic architectural marvel. A ship-shaped sanctuary where the horizon meets unparalleled luxury.
          </p>
          
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button 
              className="gold-btn"
              style={{ minWidth: '200px' }}
              onClick={onSearch}
            >
              Explore Suites
            </button>
            <button 
              className="outline-btn" 
              style={{ display: 'flex', alignItems: 'center', gap: '15px', minWidth: '200px', justifyContent: 'center' }}
              onClick={() => setIsVideoModalOpen(true)}
            >
              <Play size={18} fill="currentColor" /> View Film
            </button>
          </div>
        </div>

        {/* ── Floating Booking Bar ────────────────────────── */}
        <div 
          className="glass booking-bar"
          style={{ 
            position: 'absolute', 
            bottom: '40px', 
            left: '50%', 
            transform: 'translateX(-50%)', 
            width: '90%', 
            maxWidth: '1100px', 
            zIndex: 30,
            padding: '10px',
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '2px'
          }}
        >
          {/* Check-in */}
          <div className="booking-bar-item" style={{ flex: 1, minWidth: '200px', background: 'rgba(0,0,0,0.4)', padding: '15px 25px' }}>
            <label style={{ fontSize: '0.6rem', color: 'var(--luxury-gold)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '5px', display: 'block' }}>Arrival</label>
            <input 
              type="date" 
              value={globalDates.checkIn}
              onChange={(e) => setGlobalDates({...globalDates, checkIn: e.target.value})}
              style={{ background: 'transparent', border: 'none', color: '#fff', fontSize: '1rem', width: '100%', outline: 'none', cursor: 'pointer' }}
            />
          </div>

          {/* Check-out */}
          <div className="booking-bar-item" style={{ flex: 1, minWidth: '200px', background: 'rgba(0,0,0,0.4)', padding: '15px 25px' }}>
            <label style={{ fontSize: '0.6rem', color: 'var(--luxury-gold)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '5px', display: 'block' }}>Departure</label>
            <input 
              type="date" 
              value={globalDates.checkOut}
              onChange={(e) => setGlobalDates({...globalDates, checkOut: e.target.value})}
              style={{ background: 'transparent', border: 'none', color: '#fff', fontSize: '1rem', width: '100%', outline: 'none', cursor: 'pointer' }}
            />
          </div>

          {/* Guests */}
          <div className="booking-bar-item" style={{ flex: 1, minWidth: '200px', background: 'rgba(0,0,0,0.4)', padding: '15px 25px' }}>
            <label style={{ fontSize: '0.6rem', color: 'var(--luxury-gold)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '5px', display: 'block' }}>Guests</label>
            <div style={{ color: '#fff', fontSize: '1rem', cursor: 'pointer' }}>
              {guests.adults} Adults, {guests.children} Children
            </div>
          </div>

          <button 
            onClick={onSearch}
            className="gold-btn check-btn" 
            style={{ height: '70px', padding: '0 50px', flexShrink: 0 }}
          >
            Check Availability
          </button>
        </div>
      </div>

      {/* ── Video Modal ─────────────────────────────────── */}
      {isVideoModalOpen && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.95)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '5%' }}>
          <button 
            onClick={() => setIsVideoModalOpen(false)}
            style={{ position: 'absolute', top: '40px', right: '40px', background: 'transparent', border: '1px solid var(--luxury-gold)', color: 'var(--luxury-gold)', borderRadius: '50%', width: '50px', height: '50px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <X size={30} />
          </button>
          <video 
            autoPlay 
            controls 
            style={{ 
              width: '100%', 
              maxWidth: '1200px', 
              borderRadius: '4px', 
              border: '1px solid var(--luxury-gold)',
              filter: 'contrast(1.05) brightness(0.9) saturate(1.05)',
              boxShadow: '0 0 50px rgba(212, 175, 55, 0.2)'
            }}
          >
            <source src="/Vizag_Cruise_Luxury.mp4" type="video/mp4" />
          </video>
        </div>
      )}

      {/* ── Scroll Indicator ────────────────────────────── */}
      <div className="scroll-indicator" style={{ position: 'absolute', bottom: '120px', left: '50%', transform: 'translateX(-50%)', zIndex: 10, color: 'var(--luxury-gold)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
        <span style={{ fontSize: '0.6rem', letterSpacing: '0.3em', textTransform: 'uppercase' }}>Discover</span>
        <ArrowDown size={16} className="animate-bounce" />
      </div>

    </div>
  );
};

export default Hero;
