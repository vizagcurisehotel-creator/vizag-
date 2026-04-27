"use client";
import { Sparkles, Utensils } from 'lucide-react';

const RestaurantSection = ({ onSeeMore, onReserveTable }: { onSeeMore: () => void, onReserveTable: () => void }) => {
  return (
    <section id="restaurant" style={{ padding: '120px 5%', background: 'var(--luxury-black)', overflow: 'hidden' }}>
      <style jsx>{`
        @media (max-width: 768px) {
          .est-badge { right: 20px !important; }
          .restaurant-title { font-size: 2.5rem !important; }
          .restaurant-grid { gap: 40px !important; }
        }
      `}</style>
      <div className="container">
        <div className="restaurant-grid" style={{ display: 'flex', flexWrap: 'wrap-reverse', gap: '80px', alignItems: 'center' }}>
          
          {/* Left Column - Image w/ Frame */}
          <div style={{ flex: '1 1 500px', position: 'relative' }}>
            <div style={{ 
              position: 'absolute', 
              top: '-30px', 
              left: '-30px', 
              width: '100%', 
              height: '100%', 
              border: '1px solid var(--luxury-gold-muted)', 
              zIndex: 1 
            }} />
            <div style={{ position: 'relative', zIndex: 2, overflow: 'hidden' }}>
              <img 
                src="/luxury-restaurant.png" 
                alt="Admiral's Dining" 
                style={{ width: '100%', height: 'auto', display: 'block', transition: 'transform 1s ease' }} 
              />
            </div>
            <div className="est-badge" style={{ 
              position: 'absolute', 
              bottom: '20px', 
              right: '-40px', 
              background: 'var(--luxury-gold)', 
              color: 'var(--luxury-black)', 
              padding: '15px 30px', 
              zIndex: 10,
              fontFamily: 'var(--font-heading)',
              letterSpacing: '0.2em',
              fontSize: '0.7rem',
              boxShadow: 'var(--gold-shadow)'
            }}>
              EST. 2024
            </div>
          </div>

          {/* Right Column - Text */}
          <div style={{ flex: '1 1 500px' }}>
            <div style={{ color: 'var(--luxury-gold)', fontSize: '0.7rem', letterSpacing: '0.4em', textTransform: 'uppercase', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Utensils size={14} /> Gastronomy
            </div>
            <h2 className="restaurant-title" style={{ fontSize: '3.5rem', color: 'var(--luxury-white)', marginBottom: '30px' }}>
              The <span className="gold-text">Admiral's</span><br />Dining Room
            </h2>
            <div style={{ color: 'var(--luxury-pearl)', opacity: 0.8, fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '40px' }}>
              <p style={{ marginBottom: '20px' }}>
                Embark on a culinary odyssey where the sea's bounty meets the shore's finest harvests. Our chefs curate a symphony of flavors inspired by coastal heritage and global excellence.
              </p>
              <p>
                From sunset aperitifs on the deck to intimate candlelit dinners in our vaulted hall, every moment at The Admiral's Dining Room is designed to be an unforgettable masterpiece of taste.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '20px' }}>
              <button onClick={onSeeMore} className="gold-btn">Explore Menu</button>
              <button 
                className="outline-btn"
                onClick={onReserveTable}
              >
                Reserve a Table
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default RestaurantSection;
