"use client";
import { Bed, Utensils, Users, Sparkles } from 'lucide-react';

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
            <h4 style={{ color: 'var(--luxury-gold)', letterSpacing: '0.4em', textTransform: 'uppercase', fontSize: '0.8rem', marginBottom: '20px' }}>Excellence</h4>
            <h2 className="features-title" style={{ fontSize: '3.5rem', color: 'var(--luxury-white)', marginBottom: '30px', lineHeight: 1.2 }}>
              A World of <span className="gold-text">Luxury</span> Under One Roof
            </h2>
            <p style={{ color: 'var(--luxury-pearl)', opacity: 0.8, fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '40px' }}>
              Vizag Cruise Hotel is more than a destination; it is a meticulously crafted world of opulence. From our signature staterooms to our grand event spaces, every detail is designed for absolute sophistication.
            </p>
          </div>

          <div style={{ flex: '2 1 600px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2px', background: 'rgba(212, 175, 55, 0.1)' }}>
            <ExperienceCard 
              icon={<Bed size={32} />} 
              title="Luxury Stay with Beach View" 
              description="Ocean-front staterooms offering breathtaking beach views, bespoke furniture, and private butler service."
            />
            <ExperienceCard 
              icon={<Utensils size={32} />} 
              title="Admiral's Dining" 
              description="A culinary odyssey featuring coastal flavors and global techniques in a 7-star environment."
            />
            <ExperienceCard 
              icon={<Users size={32} />} 
              title="Grand Ballroom" 
              description="Visakhapatnam's premier venue for royal weddings and global summits, holding up to 1,500 guests."
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
