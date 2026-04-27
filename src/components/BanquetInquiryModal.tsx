"use client";
import { useState } from 'react';
import { X, Calendar, Users, Star, Send, CheckCircle2 } from 'lucide-react';

const BanquetInquiryModal = ({ onClose }: { onClose: () => void }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: 'Wedding',
    guests: '',
    date: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/event-inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setSubmitted(true);
        setTimeout(() => {
          onClose();
        }, 3000);
      }
    } catch (error) {
      console.error("Failed to send inquiry", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.9)', zIndex: 4000, display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(20px)', padding: '20px' }}>
      <div className="glass reveal active" style={{ width: '100%', maxWidth: '900px', background: 'var(--luxury-black)', border: '1px solid var(--luxury-gold)', position: 'relative', overflow: 'hidden', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))' }}>
        
        {/* Decorative Side */}
        <div style={{ position: 'relative', height: '100%', minHeight: '400px', background: 'url(/luxury-ballroom.png) center/cover' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, var(--luxury-black) 0%, rgba(0,0,0,0.4) 100%)' }} />
          <div style={{ position: 'absolute', bottom: '40px', left: '40px', right: '40px' }}>
            <div style={{ color: 'var(--luxury-gold)', fontSize: '0.7rem', letterSpacing: '0.4em', textTransform: 'uppercase', marginBottom: '15px' }}>Bespose Celebrations</div>
            <h2 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-heading)', color: '#fff', marginBottom: '15px' }}>The Grand <span className="gold-text">Ballroom</span></h2>
            <p style={{ color: 'var(--luxury-pearl)', opacity: 0.8, fontSize: '0.9rem', lineHeight: 1.6 }}>Our event curators will transform your vision into a legendary reality.</p>
          </div>
        </div>

        {/* Form Side */}
        <div style={{ padding: '50px' }}>
          <button onClick={onClose} style={{ position: 'absolute', top: '20px', right: '20px', background: 'transparent', border: 'none', color: 'var(--luxury-pearl)', cursor: 'pointer' }}>
            <X size={24} />
          </button>

          {submitted ? (
            <div style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
              <div style={{ color: 'var(--luxury-gold)', marginBottom: '20px' }}>
                <CheckCircle2 size={64} />
              </div>
              <h3 style={{ fontSize: '1.8rem', fontFamily: 'var(--font-heading)', color: '#fff', marginBottom: '15px' }}>Inquiry Received</h3>
              <p style={{ color: 'var(--luxury-pearl)', opacity: 0.7 }}>Our master of ceremonies will contact you shortly to refine the details of your grand event.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-heading)', color: '#fff', marginBottom: '10px' }}>Plan Your <span className="gold-text">Event</span></h3>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                <div style={{ borderBottom: '1px solid var(--glass-border)', paddingBottom: '5px' }}>
                  <label style={{ fontSize: '0.6rem', color: 'var(--luxury-gold)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Full Name</label>
                  <input 
                    required 
                    type="text" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    style={{ width: '100%', background: 'transparent', border: 'none', color: '#fff', padding: '8px 0', outline: 'none' }} 
                  />
                </div>
                <div style={{ borderBottom: '1px solid var(--glass-border)', paddingBottom: '5px' }}>
                  <label style={{ fontSize: '0.6rem', color: 'var(--luxury-gold)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Event Type</label>
                  <select 
                    value={formData.eventType}
                    onChange={(e) => setFormData({...formData, eventType: e.target.value})}
                    style={{ width: '100%', background: 'transparent', border: 'none', color: '#fff', padding: '8px 0', outline: 'none', cursor: 'pointer' }}
                  >
                    <option style={{ background: '#111' }}>Wedding</option>
                    <option style={{ background: '#111' }}>Corporate Gala</option>
                    <option style={{ background: '#111' }}>Private Celebration</option>
                    <option style={{ background: '#111' }}>Exhibition</option>
                  </select>
                </div>
              </div>

              <div style={{ borderBottom: '1px solid var(--glass-border)', paddingBottom: '5px' }}>
                <label style={{ fontSize: '0.6rem', color: 'var(--luxury-gold)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Email Address</label>
                <input 
                  required 
                  type="email" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  style={{ width: '100%', background: 'transparent', border: 'none', color: '#fff', padding: '8px 0', outline: 'none' }} 
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                <div style={{ borderBottom: '1px solid var(--glass-border)', paddingBottom: '5px' }}>
                  <label style={{ fontSize: '0.6rem', color: 'var(--luxury-gold)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Guest Count</label>
                  <input 
                    required 
                    type="number" 
                    placeholder="Min 100" 
                    value={formData.guests}
                    onChange={(e) => setFormData({...formData, guests: e.target.value})}
                    style={{ width: '100%', background: 'transparent', border: 'none', color: '#fff', padding: '8px 0', outline: 'none' }} 
                  />
                </div>
                <div style={{ borderBottom: '1px solid var(--glass-border)', paddingBottom: '5px' }}>
                  <label style={{ fontSize: '0.6rem', color: 'var(--luxury-gold)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Preferred Date</label>
                  <input 
                    required 
                    type="date" 
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                    style={{ width: '100%', background: 'transparent', border: 'none', color: '#fff', padding: '8px 0', outline: 'none' }} 
                  />
                </div>
              </div>

              <div style={{ borderBottom: '1px solid var(--glass-border)', paddingBottom: '5px' }}>
                <label style={{ fontSize: '0.6rem', color: 'var(--luxury-gold)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Special Requirements</label>
                <textarea 
                  rows={3} 
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  style={{ width: '100%', background: 'transparent', border: 'none', color: '#fff', padding: '8px 0', outline: 'none', resize: 'none' }} 
                />
              </div>

              <button type="submit" className="gold-btn" style={{ width: '100%', padding: '18px', marginTop: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                <Send size={16} /> SEND INQUIRY
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default BanquetInquiryModal;
