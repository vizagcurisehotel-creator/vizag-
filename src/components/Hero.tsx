"use client";
import { useState, useEffect, useRef } from 'react';
import { Play, Calendar, User, ChevronRight, ArrowDown, X } from 'lucide-react';
import CustomDatePicker from './CustomDatePicker';

const Hero = ({ onSearch, globalDates, setGlobalDates, guests, setGuests }: { onSearch: any, globalDates: any, setGlobalDates: any, guests: any, setGuests: any }) => {
  const [scrollY, setScrollY] = useState(0);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isGuestsOpen, setIsGuestsOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const guestsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleClickOutside = (e: MouseEvent) => {
      if (guestsRef.current && !guestsRef.current.contains(e.target as Node)) {
        setIsGuestsOpen(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
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
            filter: 'contrast(1.0) brightness(0.9) saturate(1.1)' // Clearer, highlighted video
          }}
        >
          <source src="/hotel-tour.mp4" type="video/mp4" />
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
          alignItems: 'flex-start',
          textAlign: 'left',
          paddingBottom: '100px',
          paddingLeft: '5%' // Push to the side
        }}
      >
        <div className="reveal active hero-content" style={{ transitionDelay: '0.2s', width: '100%' }}>
          <h2 style={{ 
            color: 'var(--luxury-gold)', 
            letterSpacing: '0.5em', 
            textTransform: 'uppercase', 
            fontSize: '0.6rem', // Smaller welcome text
            marginBottom: '15px',
            fontWeight: 700
          }}>
            Welcome to the Apex of Hospitality
          </h2>
          <h1 style={{ 
            fontSize: 'clamp(1.4rem, 3vw, 2rem)', // Even smaller title
            fontFamily: 'var(--font-heading)',
            color: 'var(--luxury-white)',
            lineHeight: 1.1,
            marginBottom: '20px'
          }}>
            VIZAG CRUISE<br />
            <span className="gold-text">HOTEL</span>
          </h1>
          <p style={{ 
            maxWidth: '500px', // More compact description
            margin: '0 0 30px', 
            fontSize: '0.8rem', // Smaller body text
            color: 'var(--luxury-pearl)',
            opacity: 0.7,
            lineHeight: 1.5
          }}>
            Experience Visakhapatnam's most iconic architectural marvel. A ship-shaped hotel where the horizon meets unparalleled luxury.
          </p>
          
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'flex-start', flexWrap: 'wrap' }}>
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
            <CustomDatePicker 
              value={globalDates.checkIn}
              onChange={(val: string) => setGlobalDates({...globalDates, checkIn: val})}
              direction="up"
            />
          </div>

          {/* Check-out */}
          <div className="booking-bar-item" style={{ flex: 1, minWidth: '200px', background: 'rgba(0,0,0,0.4)', padding: '15px 25px' }}>
            <label style={{ fontSize: '0.6rem', color: 'var(--luxury-gold)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '5px', display: 'block' }}>Departure</label>
            <CustomDatePicker 
              value={globalDates.checkOut}
              onChange={(val: string) => setGlobalDates({...globalDates, checkOut: val})}
              direction="up"
            />
          </div>

          {/* Guests */}
          <div 
            ref={guestsRef}
            className="booking-bar-item" 
            style={{ flex: 1, minWidth: '200px', background: 'rgba(0,0,0,0.4)', padding: '15px 25px', position: 'relative', cursor: 'pointer' }}
            onClick={() => setIsGuestsOpen(!isGuestsOpen)}
          >
            <label style={{ fontSize: '0.6rem', color: 'var(--luxury-gold)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '5px', display: 'block' }}>Guests</label>
            <div style={{ color: '#fff', fontSize: '0.9rem', fontWeight: 600 }}>
              {guests.adults} Adults, {guests.children} Children
            </div>

            {/* Guest Popover */}
            {isGuestsOpen && (
              <div 
                onClick={(e) => e.stopPropagation()}
                className="glass"
                style={{ 
                  position: 'absolute', 
                  bottom: '100%', 
                  left: 0, 
                  width: '300px', 
                  padding: '30px', 
                  zIndex: 100, 
                  marginBottom: '20px', 
                  border: '1px solid var(--luxury-gold)',
                  boxShadow: '0 -25px 50px rgba(0,0,0,0.7)',
                  animation: 'fadeInUp 0.3s ease'
                }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--luxury-white)', letterSpacing: '0.1em', fontWeight: 700 }}>ADULTS</div>
                      <div style={{ fontSize: '0.6rem', color: 'var(--luxury-pearl)', opacity: 0.5 }}>Ages 13+</div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                      <button 
                        onClick={() => setGuests({...guests, adults: Math.max(1, guests.adults - 1)})}
                        style={{ width: '30px', height: '30px', background: 'transparent', border: '1px solid var(--luxury-gold)', color: 'var(--luxury-gold)', cursor: 'pointer' }}
                      >-</button>
                      <span style={{ color: 'var(--luxury-white)', minWidth: '20px', textAlign: 'center' }}>{guests.adults}</span>
                      <button 
                        onClick={() => setGuests({...guests, adults: guests.adults + 1})}
                        style={{ width: '30px', height: '30px', background: 'transparent', border: '1px solid var(--luxury-gold)', color: 'var(--luxury-gold)', cursor: 'pointer' }}
                      >+</button>
                    </div>
                  </div>
                  
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--luxury-white)', letterSpacing: '0.1em', fontWeight: 700 }}>CHILDREN</div>
                      <div style={{ fontSize: '0.6rem', color: 'var(--luxury-pearl)', opacity: 0.5 }}>Ages 0-12</div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                      <button 
                        onClick={() => setGuests({...guests, children: Math.max(0, guests.children - 1)})}
                        style={{ width: '30px', height: '30px', background: 'transparent', border: '1px solid var(--luxury-gold)', color: 'var(--luxury-gold)', cursor: 'pointer' }}
                      >-</button>
                      <span style={{ color: 'var(--luxury-white)', minWidth: '20px', textAlign: 'center' }}>{guests.children}</span>
                      <button 
                        onClick={() => setGuests({...guests, children: guests.children + 1})}
                        style={{ width: '30px', height: '30px', background: 'transparent', border: '1px solid var(--luxury-gold)', color: 'var(--luxury-gold)', cursor: 'pointer' }}
                      >+</button>
                    </div>
                  </div>

                  <button 
                    onClick={() => setIsGuestsOpen(false)} 
                    className="gold-btn" 
                    style={{ width: '100%', padding: '12px', fontSize: '0.7rem' }}
                  >
                    Done
                  </button>
                </div>
              </div>
            )}
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
            <source src="/hotel-tour.mp4" type="video/mp4" />
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
