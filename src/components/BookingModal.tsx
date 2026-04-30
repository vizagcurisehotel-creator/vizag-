"use client";
import { useState } from 'react';
import CustomDatePicker from './CustomDatePicker';
import { X, Calendar, User, Mail, Sparkles, ArrowLeft, UploadCloud, CheckCircle } from 'lucide-react';
import { Room } from '../lib/db';
import { QRCodeSVG } from 'qrcode.react';
import { supabase } from '../lib/supabase';

interface BookingModalProps {
  room: Room;
  initialDates: { checkIn: string, checkOut: string };
  onClose: () => void;
  onSuccess: () => void;
}

const BookingModal = ({ room, initialDates, onClose, onSuccess }: BookingModalProps) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    guestName: '',
    guestEmail: '',
    guestPhone: '',
    checkIn: initialDates.checkIn,
    checkOut: initialDates.checkOut
  });
  const [paymentScreenshot, setPaymentScreenshot] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const checkInDate = new Date(formData.checkIn);
  const checkOutDate = new Date(formData.checkOut);
  const diffDays = Math.ceil(Math.abs(checkOutDate.getTime() - checkInDate.getTime()) / (1000 * 60 * 60 * 24)) || 1;
  const totalAmount = room.price * diffDays;

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!formData.guestName || !formData.guestEmail || !formData.guestPhone || !formData.checkIn || !formData.checkOut) {
      setError('Please provide all details for your stateroom.');
      return;
    }
    
    setStep(2);
  };

  const handleSubmit = async () => {
    setError('');

    if (!paymentScreenshot) {
      setError('Please upload your payment screenshot to proceed.');
      return;
    }

    setLoading(true);
    try {
      // 1. Upload screenshot to Supabase Storage
      const fileExt = paymentScreenshot.name.split('.').pop();
      const fileName = `${Date.now()}_${Math.random()}.${fileExt}`;
      const { error: uploadError } = await supabase.storage
        .from('payments')
        .upload(fileName, paymentScreenshot);

      if (uploadError) {
        console.error("Upload error:", uploadError);
        throw new Error('Failed to upload screenshot. Please try again.');
      }

      // 2. Get Public URL
      const { data: { publicUrl } } = supabase.storage
        .from('payments')
        .getPublicUrl(fileName);

      // 3. Create Booking via API
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          roomId: room.id,
          paymentScreenshot: publicUrl,
          ...formData
        })
      });

      if (!response.ok) throw new Error('Booking failed');
      
      setStep(3);
    } catch (err: any) {
      setError(err.message || 'A momentary ripple in the sea. Please try again.');
      setLoading(false);
    }
  };

  return (
    <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(10px)', zIndex: 2000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
      <div className="glass reveal active" style={{ width: '100%', maxWidth: '600px', border: '1px solid var(--luxury-gold)', background: 'var(--luxury-black)', position: 'relative' }}>
        
        {/* Back / Close Actions */}
        <div style={{ position: 'absolute', top: '30px', left: '30px', right: '30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <button 
            onClick={step === 2 ? () => setStep(1) : onClose} 
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
            <ArrowLeft size={18} /> {step === 2 ? 'Back to Details' : 'Back to Rooms'}
          </button>
          
          <button onClick={onClose} style={{ background: 'transparent', border: 'none', color: 'var(--luxury-gold)', cursor: 'pointer', transition: 'transform 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'rotate(90deg)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'rotate(0deg)'}>
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div style={{ padding: '60px' }}>
          
          {step === 1 && (
            <>
              <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                <Sparkles size={30} color="var(--luxury-gold)" style={{ marginBottom: '20px' }} />
                <h3 style={{ fontFamily: 'var(--font-heading)', color: 'var(--luxury-white)', fontSize: '1.8rem', marginBottom: '10px' }}>Secure Your <span className="gold-text">Sanctuary</span></h3>
                <p style={{ color: 'var(--luxury-pearl)', opacity: 0.6, fontSize: '0.9rem' }}>Reserving the {room.name}</p>
              </div>

              {error && <div style={{ color: '#ff4d4d', fontSize: '0.8rem', marginBottom: '20px', textAlign: 'center' }}>{error}</div>}
              
              <form onSubmit={handleNextStep} style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                  <div style={{ borderBottom: '1px solid rgba(212, 175, 55, 0.3)', paddingBottom: '10px' }}>
                    <label style={{ display: 'block', fontSize: '0.6rem', color: 'var(--luxury-gold)', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '10px' }}>Guest Name</label>
                    <input 
                      type="text" 
                      value={formData.guestName} 
                      onChange={e => setFormData({...formData, guestName: e.target.value})} 
                      style={{ width: '100%', background: 'transparent', border: 'none', color: 'var(--luxury-white)', fontSize: '1rem', outline: 'none' }} 
                      placeholder="Name" 
                    />
                  </div>

                  <div style={{ borderBottom: '1px solid rgba(212, 175, 55, 0.3)', paddingBottom: '10px' }}>
                    <label style={{ display: 'block', fontSize: '0.6rem', color: 'var(--luxury-gold)', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '10px' }}>Phone Number</label>
                    <input 
                      type="tel" 
                      value={formData.guestPhone} 
                      onChange={e => setFormData({...formData, guestPhone: e.target.value})} 
                      style={{ width: '100%', background: 'transparent', border: 'none', color: 'var(--luxury-white)', fontSize: '1rem', outline: 'none' }} 
                      placeholder="Contact Number" 
                    />
                  </div>
                </div>

                <div style={{ borderBottom: '1px solid rgba(212, 175, 55, 0.3)', paddingBottom: '10px' }}>
                  <label style={{ display: 'block', fontSize: '0.6rem', color: 'var(--luxury-gold)', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '10px' }}>Private Email</label>
                  <input 
                    type="email" 
                    value={formData.guestEmail} 
                    onChange={e => setFormData({...formData, guestEmail: e.target.value})} 
                    style={{ width: '100%', background: 'transparent', border: 'none', color: 'var(--luxury-white)', fontSize: '1rem', outline: 'none' }} 
                    placeholder="For confirmation" 
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
                  <div style={{ borderBottom: '1px solid rgba(212, 175, 55, 0.3)', paddingBottom: '10px' }}>
                    <label style={{ display: 'block', fontSize: '0.6rem', color: 'var(--luxury-gold)', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '10px' }}>Arrival</label>
                    <CustomDatePicker 
                      value={formData.checkIn}
                      onChange={(val) => setFormData({...formData, checkIn: val})}
                      label="Arrival"
                    />
                  </div>
                  <div style={{ borderBottom: '1px solid rgba(212, 175, 55, 0.3)', paddingBottom: '10px' }}>
                    <label style={{ display: 'block', fontSize: '0.6rem', color: 'var(--luxury-gold)', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '10px' }}>Departure</label>
                    <CustomDatePicker 
                      value={formData.checkOut}
                      onChange={(val) => setFormData({...formData, checkOut: val})}
                      label="Departure"
                    />
                  </div>
                </div>

                <div style={{ marginTop: '20px', padding: '25px', background: 'rgba(212, 175, 55, 0.05)', border: '1px solid rgba(212, 175, 55, 0.1)', textAlign: 'center' }}>
                  <p style={{ color: 'var(--luxury-gold)', fontFamily: 'var(--font-heading)', fontSize: '1rem', marginBottom: '5px' }}>BESPOKE CONCIERGE SERVICE</p>
                  <p style={{ color: 'var(--luxury-pearl)', opacity: 0.6, fontSize: '0.8rem' }}>Final arrangements and elite membership rates will be curated by your private concierge upon inquiry.</p>
                </div>

                <button type="submit" className="gold-btn" style={{ width: '100%', padding: '20px' }}>
                  SEND INQUIRY
                </button>
              </form>
            </>
          )}

          {step === 2 && (
            <>
              <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                <h3 style={{ fontFamily: 'var(--font-heading)', color: 'var(--luxury-white)', fontSize: '1.8rem', marginBottom: '10px' }}>Complete <span className="gold-text">Payment</span></h3>
                <p style={{ color: 'var(--luxury-pearl)', opacity: 0.6, fontSize: '0.9rem' }}>Scan QR Code via any UPI App</p>
              </div>

              {error && <div style={{ color: '#ff4d4d', fontSize: '0.8rem', marginBottom: '20px', textAlign: 'center' }}>{error}</div>}

              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
                <div style={{ padding: '20px', background: 'white', borderRadius: '10px' }}>
                  <QRCodeSVG 
                    value={`upi://pay?pa=hotel@upi&pn=Vizag Cruise Hotel&am=${totalAmount}&cu=INR`} 
                    size={180} 
                  />
                </div>
                <div style={{ color: 'var(--luxury-gold)', fontSize: '1.2rem', fontFamily: 'var(--font-heading)' }}>
                  UPI ID: hotel@upi
                </div>
                <div style={{ fontSize: '1.5rem', color: 'var(--luxury-white)', fontWeight: 'bold' }}>
                  Total: ₹{totalAmount.toLocaleString()}
                </div>

                <div style={{ width: '100%', marginTop: '20px', borderTop: '1px solid rgba(212, 175, 55, 0.2)', paddingTop: '20px' }}>
                  <label style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', border: '1px dashed var(--luxury-gold)', padding: '30px', cursor: 'pointer', background: 'rgba(212, 175, 55, 0.05)', transition: 'all 0.3s' }}>
                    <UploadCloud size={30} color="var(--luxury-gold)" style={{ marginBottom: '10px' }} />
                    <span style={{ color: 'var(--luxury-white)', fontSize: '0.9rem', marginBottom: '5px' }}>Upload Payment Screenshot</span>
                    <span style={{ color: 'var(--luxury-pearl)', fontSize: '0.7rem', opacity: 0.6 }}>PNG, JPG up to 5MB</span>
                    <input 
                      type="file" 
                      accept="image/*" 
                      style={{ display: 'none' }} 
                      onChange={(e) => {
                        if (e.target.files && e.target.files[0]) {
                          setPaymentScreenshot(e.target.files[0]);
                        }
                      }}
                    />
                  </label>
                  {paymentScreenshot && (
                    <div style={{ marginTop: '10px', color: 'var(--luxury-gold)', fontSize: '0.8rem', textAlign: 'center' }}>
                      Selected: {paymentScreenshot.name}
                    </div>
                  )}
                </div>

                <button 
                  onClick={handleSubmit} 
                  disabled={loading} 
                  className="gold-btn" 
                  style={{ width: '100%', padding: '20px', marginTop: '10px' }}
                >
                  {loading ? 'VERIFYING PAYMENT...' : 'CONFIRM PAYMENT'}
                </button>
              </div>
            </>
          )}

          {step === 3 && (
            <div style={{ textAlign: 'center', padding: '40px 20px' }}>
              <CheckCircle size={60} color="var(--luxury-gold)" style={{ margin: '0 auto 20px auto' }} />
              <h3 style={{ fontFamily: 'var(--font-heading)', color: 'var(--luxury-white)', fontSize: '1.8rem', marginBottom: '15px' }}>Payment <span className="gold-text">Submitted</span></h3>
              <p style={{ color: 'var(--luxury-pearl)', opacity: 0.8, fontSize: '1rem', lineHeight: '1.6', marginBottom: '30px' }}>
                Your payment screenshot has been uploaded successfully. <br/>
                Your booking is currently <span style={{ color: 'var(--luxury-gold)' }}>pending</span> and waiting for admin verification.
              </p>
              <button 
                onClick={() => {
                  onSuccess();
                }} 
                className="gold-btn" 
                style={{ padding: '15px 40px' }}
              >
                RETURN TO DASHBOARD
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
