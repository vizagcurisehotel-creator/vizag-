"use client";
import { useState, useEffect } from 'react';
import { Menu, X, User, Globe, Phone, Calendar } from 'lucide-react';
import BookNowButton from './BookNowButton';

const Navbar = ({ currentUser, onOpenAuth, onGoProfile, onGoHome, onExplore }: { currentUser: any, onOpenAuth: () => void, onGoProfile: () => void, onGoHome: () => void, onExplore: () => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'The Staterooms', href: '#rooms' },
    { label: 'The Admiral\'s Dining', href: '#restaurant' },
    { label: 'The Grand Ballroom', href: '#banquet' },
    { label: 'Exclusive Experiences', href: '#features' },
  ];

  return (
    <nav 
      className="glass"
      style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        right: 0, 
        zIndex: 1000, 
        padding: isScrolled ? '15px 5%' : '30px 5%',
        transition: 'all 0.6s cubic-bezier(0.2, 1, 0.3, 1)',
        background: isScrolled ? 'rgba(10, 10, 11, 0.9)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(20px)' : 'none',
        borderBottom: isScrolled ? '1px solid rgba(212, 175, 55, 0.2)' : 'none',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: isScrolled ? '0 10px 40px rgba(0,0,0,0.4)' : 'none'
      }}
    >

      {/* ── Logo ──────────────────────────────── */}
      <div 
        onClick={onGoHome} 
        style={{ 
          cursor: 'pointer', 
          display: 'flex', 
          alignItems: 'center',
          gap: '15px'
        }}
      >
        <img 
          src="/logo.png" 
          alt="Vizag Cruise Logo" 
          style={{ 
            height: isScrolled ? '40px' : '55px', 
            width: 'auto', 
            transition: 'all 0.5s ease',
            filter: 'drop-shadow(0 0 10px rgba(212, 175, 55, 0.2))'
          }} 
        />
        <div className="mobile-hide" style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={{ 
            fontFamily: 'var(--font-heading)', 
            fontSize: isScrolled ? '1rem' : '1.2rem', 
            letterSpacing: '0.2em', 
            color: 'var(--luxury-gold)',
            lineHeight: 1,
            transition: 'all 0.5s ease'
          }}>
            VIZAG CRUISE
          </span>
          <span style={{ 
            fontFamily: 'var(--font-body)', 
            fontSize: '0.5rem', 
            letterSpacing: '0.3em', 
            color: 'var(--luxury-pearl)',
            marginTop: '4px',
            textTransform: 'uppercase',
            opacity: 0.6
          }}>
            Ultra Luxury Hotel
          </span>
        </div>
      </div>

      {/* ── Desktop Links ────────────────────────── */}
      <div className="hidden lg-flex" style={{ gap: '30px', alignItems: 'center' }}>
        {navLinks.map((link) => (
          <a 
            key={link.label} 
            href={link.href}
            style={{ 
              fontFamily: 'var(--font-heading)', 
              fontSize: '0.7rem', 
              letterSpacing: '0.15em', 
              color: 'var(--luxury-pearl)',
              textTransform: 'uppercase',
              textDecoration: 'none',
              transition: 'color 0.3s',
              whiteSpace: 'nowrap'
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--luxury-gold)'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--luxury-pearl)'}
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* ── Actions ────────────────────────────── */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(10px, 3vw, 30px)' }}>
        <div className="hidden sm-flex" style={{ alignItems: 'center', gap: '10px', color: 'var(--luxury-gold)' }}>
          <Phone size={14} />
          <span style={{ fontSize: '0.7rem', letterSpacing: '0.1em' }}>RESERVATIONS</span>
        </div>

        {currentUser ? (
          <div onClick={onGoProfile} style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}>
            <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'var(--luxury-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--luxury-black)', fontWeight: 700, fontSize: '0.8rem' }}>
              {currentUser.name.charAt(0)}
            </div>
          </div>
        ) : (
          <button 
            onClick={onOpenAuth}
            className="outline-btn mobile-hide"
            style={{ padding: '8px 18px', fontSize: '0.65rem' }}
          >
            Sign In
          </button>
        )}



        <BookNowButton style={{ padding: '8px 25px', fontSize: '0.7rem' }}>
          <span className="mobile-hide">Reserve Now</span>
          <Calendar size={14} className="lg-hidden" />
        </BookNowButton>

        <button 
          className="lg-hidden" 
          style={{ background: 'transparent', border: 'none', color: 'var(--luxury-white)', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* ── Mobile Menu ────────────────────────── */}
      {isMenuOpen && (
        <div style={{ 
          position: 'fixed', 
          top: 0, 
          left: 0, 
          right: 0, 
          bottom: 0, 
          background: 'var(--luxury-black)', 
          zIndex: 999, 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          justifyContent: 'center', 
          gap: '40px' 
        }}>
          <button 
            style={{ position: 'absolute', top: '30px', right: '5%', background: 'transparent', border: 'none' }}
            onClick={() => setIsMenuOpen(false)}
          >
            <X size={32} color="var(--luxury-pearl)" />
          </button>
          {navLinks.map((link) => (
            <a 
              key={link.label} 
              href={link.href} 
              onClick={(e) => {
                e.preventDefault();
                setIsMenuOpen(false);
                document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
              }}
              style={{ 
                fontFamily: 'var(--font-heading)', 
                fontSize: '1.2rem', 
                letterSpacing: '0.2em', 
                color: 'var(--luxury-pearl)',
                textDecoration: 'none'
              }}
            >
              {link.label}
            </a>
          ))}
          <button 
            className="gold-btn" 
            style={{ marginTop: '20px' }}
            onClick={() => {
              setIsMenuOpen(false);
              document.getElementById('rooms')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Book Your Stay
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
