"use client";
import { Compass, Anchor, Wind, Shield } from 'lucide-react';

const ExperienceCard = ({ icon, title, description }: { icon: any, title: string, description: string }) => (
  <div style={{ padding: '40px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', transition: 'all 0.4s ease' }} className="reveal active">
    <div style={{ color: 'var(--luxury-gold)', marginBottom: '25px' }}>{icon}</div>
    <h3 style={{ fontFamily: 'var(--font-heading)', color: 'var(--luxury-white)', fontSize: '1.2rem', marginBottom: '15px', letterSpacing: '0.1em' }}>{title}</h3>
    <p style={{ color: 'var(--luxury-pearl)', opacity: 0.6, fontSize: '0.9rem', lineHeight: 1.6 }}>{description}</p>
  </div>
);

const FeaturesSection = () => {
  return (
    <section id="features" style={{ background: 'var(--luxury-black)', padding: '120px 5%' }}>
      <style jsx>{`
        @media (max-width: 768px) {
          .features-grid { gap: 40px !important; }
          .features-title { font-size: 2.5rem !important; }
        }
      `}</style>
      <div className="container">
        <div className="features-grid" style={{ display: 'flex', flexWrap: 'wrap', gap: '80px', alignItems: 'flex-start' }}>
          
          <div style={{ flex: '1 1 400px' }}>
            <h4 style={{ color: 'var(--luxury-gold)', letterSpacing: '0.4em', textTransform: 'uppercase', fontSize: '0.8rem', marginBottom: '20px' }}>Philosophy</h4>
            <h2 className="features-title" style={{ fontSize: '3.5rem', color: 'var(--luxury-white)', marginBottom: '30px', lineHeight: 1.2 }}>
              The Art of <span className="gold-text">Sailing</span> Without Moving
            </h2>
            <p style={{ color: 'var(--luxury-pearl)', opacity: 0.8, fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '40px' }}>
              Vizag Cruise is not just a destination; it is an experience of perpetual elegance. Inspired by the golden age of ocean travel, we offer a sanctuary where time slows down and the horizon is your only companion.
            </p>
            <button 
              className="outline-btn"
              onClick={() => alert("Vizag Cruise: A legacy of maritime excellence. Founded in 2024, our mission is to provide an unparalleled sanctuary where the horizon meets the shore.")}
            >
              The Cruise Story
            </button>
          </div>

          <div style={{ flex: '2 1 600px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2px', background: 'rgba(212, 175, 55, 0.1)' }}>
            <ExperienceCard 
              icon={<Compass size={32} />} 
              title="Private Charters" 
              description="Explore the Bay of Bengal on our private luxury yachts, curated specifically for our stateroom guests."
            />
            <ExperienceCard 
              icon={<Anchor size={32} />} 
              title="Butler Service" 
              description="A dedicated 24-hour concierge to cater to your every whim, from pillow menus to private excursions."
            />
            <ExperienceCard 
              icon={<Wind size={32} />} 
              title="Ocean Spa" 
              description="Revitalize your senses with treatments that harness the healing power of marine minerals and sea salt."
            />
            <ExperienceCard 
              icon={<Shield size={32} />} 
              title="Elite Privacy" 
              description="Discreet security and private entrances for our most distinguished guests, ensuring absolute peace."
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
