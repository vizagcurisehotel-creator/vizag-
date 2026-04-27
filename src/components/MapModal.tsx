"use client";
import { X, MapPin, Navigation, Compass } from 'lucide-react';

interface MapModalProps {
  onClose: () => void;
}

const MapModal = ({ onClose }: MapModalProps) => {
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d60792.8368502591!2d83.3150537873535!3d17.72!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sattractions%20in%20visakhapatnam!5e0!3m2!1sen!2sin!4v1713636000000!5m2!1sen!2sin";

  return (
    <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.9)', zIndex: 4000, display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(20px)', padding: '20px' }}>
      <div className="glass reveal active" style={{ width: '100%', maxWidth: '1200px', height: '85vh', border: '1px solid var(--luxury-gold)', background: 'var(--luxury-black)', overflow: 'hidden', position: 'relative', display: 'flex', flexDirection: 'column' }}>
        
        {/* Modal Header */}
        <div style={{ padding: '30px 40px', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <Compass size={28} color="var(--luxury-gold)" />
            <div>
              <h2 style={{ fontSize: '1.4rem', margin: 0, fontFamily: 'var(--font-heading)', color: 'var(--luxury-white)' }}>Visual Navigator</h2>
              <p style={{ fontSize: '0.7rem', color: 'var(--luxury-pearl)', opacity: 0.5, margin: 0, textTransform: 'uppercase', letterSpacing: '0.2em' }}>Mapping Your Coastal Discovery</p>
            </div>
          </div>
          <button onClick={onClose} style={{ background: 'transparent', border: '1px solid var(--luxury-gold)', borderRadius: '50%', width: '45px', height: '45px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'var(--luxury-gold)' }}>
            <X size={24} />
          </button>
        </div>

        {/* Map Content */}
        <div style={{ flex: 1, position: 'relative' }}>
          <iframe 
            src={mapUrl}
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
          />
        </div>

      </div>
    </div>
  );
};

export default MapModal;
