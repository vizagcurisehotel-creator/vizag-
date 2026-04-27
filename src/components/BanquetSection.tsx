"use client";
import { Star, MapPin } from 'lucide-react';

const BanquetSection = ({ onSeeMore }: { onSeeMore: () => void }) => {
  return (
    <section id="banquet" style={{ padding: '120px 5%', background: 'var(--luxury-charcoal)', position: 'relative' }}>
      <div className="container">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '80px', alignItems: 'center' }}>
          
          {/* Left Column - Text */}
          <div style={{ flex: '1 1 500px' }}>
            <div style={{ color: 'var(--luxury-gold)', fontSize: '0.7rem', letterSpacing: '0.4em', textTransform: 'uppercase', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Star size={14} /> Grand Events
            </div>
            <h2 style={{ fontSize: '3.5rem', color: 'var(--luxury-white)', marginBottom: '30px', lineHeight: 1.2 }}>
              The <span className="gold-text">Grand Ballroom</span>
            </h2>
            <p style={{ color: 'var(--luxury-pearl)', opacity: 0.8, fontSize: '1.1rem', marginBottom: '40px', lineHeight: 1.8 }}>
              Host your most prestigious moments in a venue that breathes grandeur. Our 15,500 square foot convention center is the pinnacle of event spaces in India, offering a seamless blend of technological sophistication and royal aesthetics.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '40px' }}>
              <div>
                <h4 style={{ color: 'var(--luxury-gold)', marginBottom: '5px' }}>15,500 sq ft</h4>
                <p style={{ fontSize: '0.8rem', opacity: 0.6 }}>Unrivaled Grandeur</p>
              </div>
              <div>
                <h4 style={{ color: 'var(--luxury-gold)', marginBottom: '5px' }}>9 Venues</h4>
                <p style={{ fontSize: '0.8rem', opacity: 0.6 }}>Bespoke Configurations</p>
              </div>
            </div>
            <button onClick={onSeeMore} className="gold-btn">Plan Your Event</button>
          </div>

          {/* Right Column - Image w/ Floating Element */}
          <div style={{ flex: '1 1 500px', position: 'relative' }}>
            <div style={{ borderRadius: '2px', overflow: 'hidden', border: '1px solid rgba(212, 175, 55, 0.2)', padding: '15px' }}>
              <img 
                src="/luxury-ballroom.png" 
                alt="The Grand Ballroom" 
                style={{ width: '100%', height: 'auto', display: 'block' }} 
              />
            </div>
            <div style={{ 
              position: 'absolute', 
              top: '50%', 
              left: '-20px', 
              transform: 'translateY(-50%)', 
              background: 'rgba(10, 10, 10, 0.8)', 
              backdropFilter: 'blur(10px)',
              padding: '30px',
              borderLeft: '4px solid var(--luxury-gold)',
              zIndex: 10,
              maxWidth: '250px'
            }}>
              <p style={{ fontStyle: 'italic', color: 'var(--luxury-white)', fontSize: '0.9rem' }}>
                "The most stunning ballroom in Visakhapatnam. A true masterpiece."
              </p>
              <p style={{ marginTop: '15px', color: 'var(--luxury-gold)', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em' }}>
                — ARCHITECTURAL DIGEST
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BanquetSection;
