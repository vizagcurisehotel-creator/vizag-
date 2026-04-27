"use client";
import { useState } from 'react';
import { X, Calendar, User, Mail, Sparkles, ArrowLeft } from 'lucide-react';
import { Room } from '../lib/db';

interface BookingModalProps {
  room: Room;
  initialDates: { checkIn: string, checkOut: string };
  onClose: () => void;
  onSuccess: () => void;
}

const BookingModal = ({ room, initialDates, onClose, onSuccess }: BookingModalProps) => {
  const [formData, setFormData] = useState({
    guestName: '',
    guestEmail: '',
    checkIn: initialDates.checkIn,
    checkOut: initialDates.checkOut
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!formData.guestName || !formData.guestEmail || !formData.checkIn || !formData.checkOut) {
      setError('Please provide all details for your stateroom.');
      return;
    }

    setLoading(true);
    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          roomId: room.id,
          ...formData
        })
      });

      if (!response.ok) throw new Error('Booking failed');
      onSuccess();
    } catch (err) {
      setError('A momentary ripple in the sea. Please try again.');
      setLoading(false);
    }
  };

  const checkInDate = new Date(formData.checkIn);
  const checkOutDate = new Date(formData.checkOut);
  const diffDays = Math.ceil(Math.abs(checkOutDate.getTime() - checkInDate.getTime()) / (1000 * 60 * 60 * 24)) || 1;

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
            <ArrowLeft size={18} /> Back to Rooms
          </button>
          
          <button onClick={onClose} style={{ background: 'transparent', border: 'none', color: 'var(--luxury-gold)', cursor: 'pointer', transition: 'transform 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'rotate(90deg)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'rotate(0deg)'}>
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div style={{ padding: '60px' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <Sparkles size={30} color="var(--luxury-gold)" style={{ marginBottom: '20px' }} />
            <h3 style={{ fontFamily: 'var(--font-heading)', color: 'var(--luxury-white)', fontSize: '1.8rem', marginBottom: '10px' }}>Secure Your <span className="gold-text">Sanctuary</span></h3>
            <p style={{ color: 'var(--luxury-pearl)', opacity: 0.6, fontSize: '0.9rem' }}>Reserving the {room.name}</p>
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
                placeholder="Name for the voyage" 
              />
            </div>

            <div style={{ borderBottom: '1px solid rgba(212, 175, 55, 0.3)', paddingBottom: '10px' }}>
              <label style={{ display: 'block', fontSize: '0.6rem', color: 'var(--luxury-gold)', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '10px' }}>Private Email</label>
              <input 
                type="email" 
                value={formData.guestEmail} 
                onChange={e => setFormData({...formData, guestEmail: e.target.value})} 
                style={{ width: '100%', background: 'transparent', border: 'none', color: 'var(--luxury-white)', fontSize: '1rem', outline: 'none' }} 
                placeholder="For your confirmation" 
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
              <div style={{ borderBottom: '1px solid rgba(212, 175, 55, 0.3)', paddingBottom: '10px' }}>
                <label style={{ display: 'block', fontSize: '0.6rem', color: 'var(--luxury-gold)', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '10px' }}>Arrival</label>
                <input type="date" value={formData.checkIn} onChange={e => setFormData({...formData, checkIn: e.target.value})} style={{ width: '100%', background: 'transparent', border: 'none', color: 'var(--luxury-white)', cursor: 'pointer', outline: 'none' }} />
              </div>
              <div style={{ borderBottom: '1px solid rgba(212, 175, 55, 0.3)', paddingBottom: '10px' }}>
                <label style={{ display: 'block', fontSize: '0.6rem', color: 'var(--luxury-gold)', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '10px' }}>Departure</label>
                <input type="date" value={formData.checkOut} onChange={e => setFormData({...formData, checkOut: e.target.value})} style={{ width: '100%', background: 'transparent', border: 'none', color: 'var(--luxury-white)', cursor: 'pointer', outline: 'none' }} />
              </div>
            </div>

            <div style={{ marginTop: '20px', padding: '25px', background: 'rgba(212, 175, 55, 0.05)', border: '1px solid rgba(212, 175, 55, 0.1)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', fontSize: '0.8rem' }}>
                <span style={{ color: 'var(--luxury-pearl)', opacity: 0.6 }}>Experience Subtotal</span>
                <span style={{ color: 'var(--luxury-white)' }}>₹{(room.price * diffDays).toLocaleString()}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, color: 'var(--luxury-gold)', fontSize: '1.2rem' }}>
                <span style={{ fontFamily: 'var(--font-heading)' }}>Total Investment</span>
                <span>₹{(room.price * diffDays).toLocaleString()}</span>
              </div>
            </div>

            <button type="submit" disabled={loading} className="gold-btn" style={{ width: '100%', padding: '20px' }}>
              {loading ? 'SECURING...' : 'CONFIRM RESERVATION'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
