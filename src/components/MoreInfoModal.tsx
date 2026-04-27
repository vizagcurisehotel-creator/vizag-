"use client";
import { X, Check, Clock, Sparkles } from 'lucide-react';

interface MoreInfoModalProps {
  title: string;
  onClose: () => void;
  content: {
    subtitle: string;
    description: string;
    highlights: string[];
    details: { icon: any, label: string, value: string }[];
    image: string;
  };
}

const MoreInfoModal = ({ title, onClose, content }: MoreInfoModalProps) => {
  return (
    <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.9)', zIndex: 3000, display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(15px)', padding: '20px' }}>
      <div className="glass reveal active" style={{ width: '100%', maxWidth: '1000px', maxHeight: '90vh', border: '1px solid var(--luxury-gold)', background: 'var(--luxury-black)', overflow: 'hidden', position: 'relative', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))' }}>
        
        {/* Close Button */}
        <button onClick={onClose} style={{ position: 'absolute', top: '25px', right: '25px', background: 'var(--luxury-black)', border: '1px solid var(--luxury-gold)', borderRadius: '50%', width: '45px', height: '45px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', zIndex: 10, color: 'var(--luxury-gold)' }}>
          <X size={24} />
        </button>

        {/* Cinematic Image Side */}
        <div style={{ position: 'relative', height: '100%', minHeight: '500px' }}>
           <img src={content.image} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.7 }} />
           <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--luxury-black) 0%, transparent 50%)' }} />
           <div style={{ position: 'absolute', bottom: '50px', left: '50px', right: '50px' }}>
              <h2 style={{ fontSize: '3rem', fontFamily: 'var(--font-heading)', color: 'var(--luxury-white)', marginBottom: '10px' }}>{title}</h2>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', color: 'var(--luxury-gold)' }}>
                <Sparkles size={18} />
                <p style={{ fontSize: '1.1rem', margin: 0, letterSpacing: '0.1em' }}>{content.subtitle}</p>
              </div>
           </div>
        </div>

        {/* Immersive Info Side */}
        <div style={{ padding: '60px', overflowY: 'auto' }}>
          <div style={{ marginBottom: '40px' }}>
            <h4 style={{ color: 'var(--luxury-gold)', fontSize: '0.7rem', letterSpacing: '0.4em', textTransform: 'uppercase', marginBottom: '20px' }}>The Experience</h4>
            <p style={{ color: 'var(--luxury-pearl)', lineHeight: '1.9', fontSize: '1.05rem', opacity: 0.8 }}>{content.description}</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', marginBottom: '50px' }}>
             {content.details.map((detail, idx) => (
               <div key={idx} style={{ padding: '20px', background: 'rgba(212, 175, 55, 0.05)', border: '1px solid rgba(212, 175, 55, 0.1)' }}>
                  <div style={{ color: 'var(--luxury-gold)', marginBottom: '10px' }}>{detail.icon}</div>
                  <div style={{ fontSize: '0.6rem', color: 'var(--luxury-gold)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '5px' }}>{detail.label}</div>
                  <div style={{ fontSize: '0.9rem', color: 'var(--luxury-white)', fontWeight: 600 }}>{detail.value}</div>
               </div>
             ))}
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h4 style={{ color: 'var(--luxury-gold)', fontSize: '0.7rem', letterSpacing: '0.4em', textTransform: 'uppercase', marginBottom: '25px' }}>Curated Highlights</h4>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '15px' }}>
               {content.highlights.map((item, idx) => (
                 <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '15px', color: 'var(--luxury-pearl)', fontSize: '0.9rem', opacity: 0.8 }}>
                    <div style={{ width: '8px', height: '8px', background: 'var(--luxury-gold)', borderRadius: '50%' }} />
                    {item}
                 </div>
               ))}
            </div>
          </div>

          <button onClick={onClose} className="gold-btn" style={{ width: '100%', padding: '20px' }}>
            RETURN TO VOYAGE
          </button>
        </div>
      </div>
    </div>
  );
};

export default MoreInfoModal;
