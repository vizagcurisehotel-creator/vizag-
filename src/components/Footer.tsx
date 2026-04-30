"use client";
import { Camera, Globe, MessageCircle, MapPin, Mail, Phone, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{ background: 'var(--luxury-black)', padding: '120px 5% 60px', color: 'var(--luxury-white)', borderTop: '1px solid var(--luxury-gold-muted)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '80px', marginBottom: '80px' }}>
          
          {/* Brand Column */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
             <span style={{ 
                fontFamily: 'var(--font-heading)', 
                fontSize: '1.8rem', 
                letterSpacing: '0.2em', 
                color: 'var(--luxury-gold)',
                marginBottom: '20px'
              }}>
                VIZAG CRUISE
              </span>
            <p style={{ color: 'var(--luxury-pearl)', opacity: 0.6, lineHeight: 1.8, marginBottom: '30px', fontSize: '0.9rem', maxWidth: '350px' }}>
              The definitive destination for ultra-luxury hospitality. Where the legacy of the sea meets the pinnacle of modern architecture.
            </p>
            <div style={{ display: 'flex', gap: '20px' }}>
              <a href="#" style={{ color: 'var(--luxury-gold)', opacity: 0.8 }}><Instagram size={20}/></a>
              <a href="#" style={{ color: 'var(--luxury-gold)', opacity: 0.8 }}><Facebook size={20}/></a>
              <a href="#" style={{ color: 'var(--luxury-gold)', opacity: 0.8 }}><Twitter size={20}/></a>
            </div>
          </div>
          
          {/* Exploration Column */}
          <div>
            <h3 style={{ fontFamily: 'var(--font-heading)', color: 'var(--luxury-gold)', fontSize: '0.8rem', letterSpacing: '0.2em', marginBottom: '30px', textTransform: 'uppercase' }}>Exploration</h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '15px', color: 'var(--luxury-pearl)', fontSize: '0.9rem', opacity: 0.8 }}>
              <li><a href="#rooms" style={{ transition: 'color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--luxury-gold)'} onMouseLeave={(e) => e.currentTarget.style.color = 'inherit'}>The Staterooms</a></li>
              <li><a href="#restaurant" style={{ transition: 'color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--luxury-gold)'} onMouseLeave={(e) => e.currentTarget.style.color = 'inherit'}>Admiral's Dining</a></li>
              <li><a href="#banquet" style={{ transition: 'color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--luxury-gold)'} onMouseLeave={(e) => e.currentTarget.style.color = 'inherit'}>The Grand Ballroom</a></li>
              <li><a href="#features" style={{ transition: 'color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--luxury-gold)'} onMouseLeave={(e) => e.currentTarget.style.color = 'inherit'}>Experiences</a></li>
            </ul>
          </div>

          {/* Information Column */}
          <div>
            <h3 style={{ fontFamily: 'var(--font-heading)', color: 'var(--luxury-gold)', fontSize: '0.8rem', letterSpacing: '0.2em', marginBottom: '30px', textTransform: 'uppercase' }}>Information</h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '15px', color: 'var(--luxury-pearl)', fontSize: '0.9rem', opacity: 0.8 }}>
              <li><a href="#about" style={{ transition: 'color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--luxury-gold)'} onMouseLeave={(e) => e.currentTarget.style.color = 'inherit'}>About Us</a></li>
              <li><a href="#pricing" style={{ transition: 'color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--luxury-gold)'} onMouseLeave={(e) => e.currentTarget.style.color = 'inherit'}>Pricing</a></li>
              <li><a href="#contact" style={{ transition: 'color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--luxury-gold)'} onMouseLeave={(e) => e.currentTarget.style.color = 'inherit'}>Contact Us</a></li>
              <li><a href="#terms" style={{ transition: 'color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--luxury-gold)'} onMouseLeave={(e) => e.currentTarget.style.color = 'inherit'}>Terms of Use</a></li>
              <li><a href="#privacy" style={{ transition: 'color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--luxury-gold)'} onMouseLeave={(e) => e.currentTarget.style.color = 'inherit'}>Privacy Policy</a></li>
              <li><a href="#refund" style={{ transition: 'color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--luxury-gold)'} onMouseLeave={(e) => e.currentTarget.style.color = 'inherit'}>Refund & Cancellation Policy</a></li>
            </ul>
          </div>

          {/* Concierge Column */}
          <div>
            <h3 style={{ fontFamily: 'var(--font-heading)', color: 'var(--luxury-gold)', fontSize: '0.8rem', letterSpacing: '0.2em', marginBottom: '30px', textTransform: 'uppercase' }}>The Concierge</h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '20px', color: 'var(--luxury-pearl)', fontSize: '0.9rem', opacity: 0.8 }}>
              <li style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
                <MapPin size={18} color="var(--luxury-gold)" />
                <span>Rushikonda Beach, Visakhapatnam<br />Andhra Pradesh, India</span>
              </li>
              <li style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                <Phone size={18} color="var(--luxury-gold)" />
                <span>+91 80 777 000 77</span>
              </li>
              <li style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                <Mail size={18} color="var(--luxury-gold)" />
                <span>concierge@vizagcruise.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div style={{ textAlign: 'center', paddingTop: '40px', borderTop: '1px solid rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.3)', fontSize: '0.75rem', letterSpacing: '0.1em' }}>
          <p>MEMBER OF THE ELITE LUXURY COLLECTION</p>
          <p style={{ marginTop: '10px' }}>&copy; 2026 VIZAG CRUISE. AN ICON OF ELEGANCE.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
