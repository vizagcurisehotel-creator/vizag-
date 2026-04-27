import { useState } from 'react';
import { Star, MapPin } from 'lucide-react';

const BanquetSection = ({ onSeeMore }: { onSeeMore: () => void }) => {
  const [activeImg, setActiveImg] = useState('/banquet-1.png');

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
              Host your most prestigious moments in a venue that breathes grandeur. Our convention center is the pinnacle of event spaces, offering a seamless blend of technological sophistication and royal aesthetics for weddings and corporate galas.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '40px' }}>
              <div>
                <h4 style={{ color: 'var(--luxury-gold)', marginBottom: '5px' }}>Banquets</h4>
                <p style={{ fontSize: '0.8rem', opacity: 0.6 }}>Elegant Dining Setup</p>
              </div>
              <div>
                <h4 style={{ color: 'var(--luxury-gold)', marginBottom: '5px' }}>Conferences</h4>
                <p style={{ fontSize: '0.8rem', opacity: 0.6 }}>Professional Stage & Audio</p>
              </div>
            </div>
            <button onClick={onSeeMore} className="gold-btn">Plan Your Event</button>
          </div>

          {/* Right Column - Image Gallery */}
          <div style={{ flex: '1 1 500px', position: 'relative' }}>
            <div style={{ borderRadius: '2px', overflow: 'hidden', border: '1px solid rgba(212, 175, 55, 0.2)', padding: '15px', background: 'rgba(255,255,255,0.05)' }}>
              <img 
                src={activeImg} 
                alt="The Grand Ballroom" 
                style={{ width: '100%', height: '400px', objectFit: 'cover', display: 'block', transition: 'all 0.5s ease' }} 
              />
              <div style={{ display: 'flex', gap: '10px', marginTop: '15px' }}>
                <img 
                  src="/banquet-1.png" 
                  alt="Ballroom view 1"
                  onClick={() => setActiveImg('/banquet-1.png')}
                  style={{ width: '80px', height: '60px', objectFit: 'cover', cursor: 'pointer', border: activeImg === '/banquet-1.png' ? '2px solid var(--luxury-gold)' : '1px solid transparent', opacity: activeImg === '/banquet-1.png' ? 1 : 0.6 }}
                />
                <img 
                  src="/banquet-2.png" 
                  alt="Ballroom view 2"
                  onClick={() => setActiveImg('/banquet-2.png')}
                  style={{ width: '80px', height: '60px', objectFit: 'cover', cursor: 'pointer', border: activeImg === '/banquet-2.png' ? '2px solid var(--luxury-gold)' : '1px solid transparent', opacity: activeImg === '/banquet-2.png' ? 1 : 0.6 }}
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BanquetSection;
