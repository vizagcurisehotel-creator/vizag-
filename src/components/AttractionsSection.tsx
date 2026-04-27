"use client";
import { MapPin, Compass, Waves, Trees, Landmark } from 'lucide-react';

const attractions = [
  {
    title: "Rushikonda Beach",
    distance: "1.85 km from the hotel",
    description: "The Jewel of the East Coast. Pristine sands and golden sunsets await our guests.",
    icon: <Waves size={20} />,
  },
  {
    title: "Kailasagiri Park",
    distance: "4.12 km from the hotel",
    description: "Panoramic vistas of the Bay of Bengal from the city's highest vantage point.",
    icon: <Landmark size={20} />,
  },
  {
    title: "Submarine Museum",
    distance: "7.55 km from the hotel",
    description: "A testament to naval engineering. Explore the INS Kursura on the beachfront.",
    icon: <Compass size={20} />,
  }
];

const AttractionsSection = ({ onShowMap }: { onShowMap: () => void }) => {
  return (
    <section id="attractions" style={{ padding: '120px 5%', background: 'var(--luxury-black)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <h4 style={{ color: 'var(--luxury-gold)', letterSpacing: '0.4em', textTransform: 'uppercase', fontSize: '0.8rem', marginBottom: '20px' }}>Neighborhood</h4>
          <h2 style={{ fontSize: '3.5rem', color: 'var(--luxury-white)', marginBottom: '30px' }}>Explore the <span className="gold-text">Horizon</span></h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px' }}>
          {attractions.map((attr, idx) => (
            <div key={idx} style={{ 
              background: 'rgba(255,255,255,0.02)', 
              border: '1px solid rgba(255,255,255,0.05)', 
              padding: '40px',
              transition: 'all 0.4s ease'
            }} className="reveal active">
              <div style={{ color: 'var(--luxury-gold)', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '15px' }}>
                {attr.icon}
                <span style={{ fontSize: '0.7rem', letterSpacing: '0.1em', color: 'var(--luxury-pearl)', opacity: 0.6 }}>{attr.distance}</span>
              </div>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--luxury-white)', fontFamily: 'var(--font-heading)', marginBottom: '15px' }}>{attr.title}</h3>
              <p style={{ color: 'var(--luxury-pearl)', opacity: 0.7, fontSize: '0.9rem', lineHeight: 1.7 }}>
                {attr.description}
              </p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '80px' }}>
          <button 
            onClick={onShowMap} 
            className="gold-btn"
            style={{ padding: '20px 60px' }}
          >
            <MapPin size={18} style={{ marginRight: '10px' }} /> Visual Navigator
          </button>
        </div>

      </div>
    </section>
  );
};

export default AttractionsSection;
