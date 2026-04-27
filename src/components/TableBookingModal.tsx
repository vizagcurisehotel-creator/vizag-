"use client";
import { useState } from 'react';
import { X, Calendar, Clock, Users, Mail, Sparkles, ArrowLeft } from 'lucide-react';

interface TableBookingModalProps {
  onClose: () => void;
  onSuccess: () => void;
}

const TableBookingModal = ({ onClose, onSuccess }: TableBookingModalProps) => {
  const [formData, setFormData] = useState({
    guestName: '',
    guestEmail: '',
    date: new Date().toISOString().split('T')[0],
    time: '19:00',
    guests: 2
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!formData.guestName || !formData.guestEmail || !formData.date || !formData.time) {
      setError('Please provide all details for your reservation.');
      return;
    }

    setLoading(true);
    try {
      const response = await fetch('/api/table-bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (!response.ok) throw new Error('Booking failed');
      onSuccess();
    } catch (err) {
      setError('A momentary ripple in the sea. Please try again.');
      setLoading(false);
    }
  };

  return (
    <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(10px)', zIndex: 2000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
      <div className="glass reveal active" style={{ width: '100%', maxWidth: '600px', border: '1px solid var(--luxury-gold)', background: 'var(--luxury-black)', position: 'relative' }}>
        
        {/* Back / Close Actions */}
        <div style={{ position: 'absolute', top: '30px', left: '30px', right: '30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <button 
            onClick={onClose} 
            style={{ 
              background: 'transparent', 
              border: 'none', 
              color: 'var(--luxury-pearl)', 
              opacity: 0.6, 
              cursor: 'pointer', 
              display: 'flex', 
              alignItems: 'center', 
              gap: '10px',
              fontSize: '0.7rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              transition: 'all 0.3s'
            }}
            onMouseEnter={(e) => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.color = 'var(--luxury-gold)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.opacity = '0.6'; e.currentTarget.style.color = 'var(--luxury-pearl)'; }}
          >
            <ArrowLeft size={18} /> Back
          </button>
          
          <button onClick={onClose} style={{ background: 'transparent', border: 'none', color: 'var(--luxury-gold)', cursor: 'pointer' }}>
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div style={{ padding: '60px' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <Sparkles size={30} color="var(--luxury-gold)" style={{ marginBottom: '20px' }} />
            <h3 style={{ fontFamily: 'var(--font-heading)', color: 'var(--luxury-white)', fontSize: '1.8rem', marginBottom: '10px' }}>Admiral's <span className="gold-text">Table</span></h3>
            <p style={{ color: 'var(--luxury-pearl)', opacity: 0.6, fontSize: '0.9rem' }}>Bespoke Gastronomy Reservation</p>
          </div>

          {error && <div style={{ color: '#ff4d4d', fontSize: '0.8rem', marginBottom: '20px', textAlign: 'center' }}>{error}</div>}
          
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            <div style={{ borderBottom: '1px solid rgba(212, 175, 55, 0.3)', paddingBottom: '10px' }}>
              <label style={{ display: 'block', fontSize: '0.6rem', color: 'var(--luxury-gold)', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '10px' }}>Guest Name</label>
              <input 
                type="text" 
                value={formData.guestName} 
                onChange={e => setFormData({...formData, guestName: e.target.value})} 
                style={{ width: '100%', background: 'transparent', border: 'none', color: 'var(--luxury-white)', fontSize: '1rem', outline: 'none' }} 
                placeholder="Name for the reservation" 
              />
            </div>

            <div style={{ borderBottom: '1px solid rgba(212, 175, 55, 0.3)', paddingBottom: '10px' }}>
              <label style={{ display: 'block', fontSize: '0.6rem', color: 'var(--luxury-gold)', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '10px' }}>Email</label>
              <input 
                type="email" 
                value={formData.guestEmail} 
                onChange={e => setFormData({...formData, guestEmail: e.target.value})} 
                style={{ width: '100%', background: 'transparent', border: 'none', color: 'var(--luxury-white)', fontSize: '1rem', outline: 'none' }} 
                placeholder="For your confirmation" 
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px' }}>
              <div style={{ borderBottom: '1px solid rgba(212, 175, 55, 0.3)', paddingBottom: '10px' }}>
                <label style={{ display: 'block', fontSize: '0.6rem', color: 'var(--luxury-gold)', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '10px' }}>Date</label>
                <input type="date" value={formData.date} onChange={e => setFormData({...formData, date: e.target.value})} style={{ width: '100%', background: 'transparent', border: 'none', color: 'var(--luxury-white)', cursor: 'pointer', outline: 'none' }} />
              </div>
              <div style={{ borderBottom: '1px solid rgba(212, 175, 55, 0.3)', paddingBottom: '10px' }}>
                <label style={{ display: 'block', fontSize: '0.6rem', color: 'var(--luxury-gold)', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '10px' }}>Time</label>
                <input type="time" value={formData.time} onChange={e => setFormData({...formData, time: e.target.value})} style={{ width: '100%', background: 'transparent', border: 'none', color: 'var(--luxury-white)', cursor: 'pointer', outline: 'none' }} />
              </div>
              <div style={{ borderBottom: '1px solid rgba(212, 175, 55, 0.3)', paddingBottom: '10px' }}>
                <label style={{ display: 'block', fontSize: '0.6rem', color: 'var(--luxury-gold)', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '10px' }}>Guests</label>
                <input type="number" min="1" max="12" value={formData.guests} onChange={e => setFormData({...formData, guests: parseInt(e.target.value)})} style={{ width: '100%', background: 'transparent', border: 'none', color: 'var(--luxury-white)', cursor: 'pointer', outline: 'none' }} />
              </div>
            </div>

            <button type="submit" disabled={loading} className="gold-btn" style={{ width: '100%', padding: '20px' }}>
              {loading ? 'PREPARING YOUR TABLE...' : 'CONFIRM DINING RESERVATION'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TableBookingModal;
