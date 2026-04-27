"use client";
import { useState, useEffect } from 'react';
import { Calendar, Hotel, Clock, ChevronRight, User as UserIcon, LogOut, ArrowLeft, Star, Crown, Utensils, X, Users } from 'lucide-react';
import { Booking } from '../lib/db';

interface UserProfileProps {
  user: any;
  onLogout: () => void;
  onBack: () => void;
  onUpdateUser: (updatedUser: any) => void;
}

const UserProfile = ({ user, onLogout, onBack, onUpdateUser }: UserProfileProps) => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [tableBookings, setTableBookings] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState({ name: user.name, email: user.email });
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);

  const handleSave = () => {
    onUpdateUser({ ...user, ...editForm });
    setIsEditing(false);
  };

  useEffect(() => {
    Promise.all([
      fetch('/api/bookings').then(res => res.json()),
      fetch('/api/table-bookings').then(res => res.json())
    ]).then(([bookingsData, tableData]) => {
      if (Array.isArray(bookingsData)) {
        setBookings(bookingsData.filter(b => b.guest_email === user.email));
      }
      if (Array.isArray(tableData)) {
        setTableBookings(tableData.filter(b => b.guest_email === user.email));
      }
      setLoading(false);
    });
  }, [user.email]);

  return (
    <div style={{ background: 'var(--luxury-black)', minHeight: '100vh', padding: '120px 5% 60px' }}>
      <style jsx>{`
        @media (max-width: 768px) {
          .profile-header { padding: 30px !important; flex-direction: column !important; align-items: flex-start !important; }
          .header-actions { width: 100% !important; justify-content: space-between !important; margin-top: 20px !important; }
          .booking-card { padding: 25px !important; flex-direction: column !important; align-items: flex-start !important; }
          .booking-ref { text-align: left !important; margin-top: 15px !important; }
          .profile-image-container { width: 70px !important; height: 70px !important; }
          .profile-name { font-size: 1.8rem !important; }
        }
      `}</style>
      <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
        
        {/* Profile Header */}
        <div className="glass profile-header" style={{ padding: '50px', border: '1px solid var(--luxury-gold)', marginBottom: '60px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '40px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '30px', flex: 1 }}>
            <div className="profile-image-container" style={{ width: '100px', height: '100px', border: '1px solid var(--luxury-gold)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--luxury-gold)', background: 'rgba(212, 175, 55, 0.05)', flexShrink: 0 }}>
              <UserIcon size={50} strokeWidth={1} />
            </div>
            
            {isEditing ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', flex: 1 }}>
                <input 
                  type="text" 
                  value={editForm.name} 
                  onChange={(e) => setEditForm({...editForm, name: e.target.value})}
                  style={{ background: 'transparent', border: 'none', borderBottom: '1px solid var(--luxury-gold)', color: 'var(--luxury-white)', fontSize: '1.8rem', fontFamily: 'var(--font-heading)', width: '100%', outline: 'none' }}
                />
                <input 
                  type="email" 
                  value={editForm.email} 
                  onChange={(e) => setEditForm({...editForm, email: e.target.value})}
                  style={{ background: 'transparent', border: 'none', borderBottom: '1px solid var(--luxury-gold)', color: 'var(--luxury-pearl)', opacity: 0.6, width: '100%', outline: 'none' }}
                />
              </div>
            ) : (
              <div>
                <h1 className="profile-name" style={{ fontSize: '2.5rem', color: 'var(--luxury-white)', fontFamily: 'var(--font-heading)', marginBottom: '10px' }}>{user.name}</h1>
                <p style={{ color: 'var(--luxury-pearl)', opacity: 0.6, fontSize: '1rem', letterSpacing: '0.05em' }}>{user.email}</p>
                <div style={{ display: 'flex', gap: '15px', marginTop: '20px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.65rem', background: 'rgba(212, 175, 55, 0.1)', color: 'var(--luxury-gold)', padding: '6px 15px', border: '1px solid rgba(212, 175, 55, 0.2)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                    <Crown size={12} /> Royal Member
                  </div>
                </div>
              </div>
            )}
          </div>
          
          <div className="header-actions" style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
            {isEditing ? (
              <>
                <button onClick={() => setIsEditing(false)} className="outline-btn" style={{ padding: '12px 30px' }}>Cancel</button>
                <button onClick={handleSave} className="gold-btn" style={{ padding: '12px 30px' }}>Save Changes</button>
              </>
            ) : (
              <>
                <button onClick={() => setIsEditing(true)} className="outline-btn" style={{ padding: '12px 30px' }}>Edit</button>
                <button onClick={onBack} className="outline-btn" style={{ padding: '12px 30px' }}>
                   <ArrowLeft size={16} style={{ marginRight: '10px' }} /> Return
                </button>
                <button onClick={onLogout} className="gold-btn" style={{ padding: '12px 30px' }}>
                  <LogOut size={16} style={{ marginRight: '10px' }} /> Depart
                </button>
              </>
            )}
          </div>
        </div>

        {/* Bookings Section */}
        <div style={{ marginBottom: '40px', display: 'flex', alignItems: 'center', gap: '15px' }}>
          <Star size={20} color="var(--luxury-gold)" />
          <h2 style={{ fontSize: '1.8rem', color: 'var(--luxury-white)', fontFamily: 'var(--font-heading)' }}>Your <span className="gold-text">Sanctuaries</span></h2>
        </div>
        
        {loading ? (
          <div style={{ padding: '100px', textAlign: 'center', color: 'var(--luxury-gold)', letterSpacing: '0.2em' }}>COMMuning WITH THE HORIZON...</div>
        ) : bookings.length === 0 ? (
          <div className="glass" style={{ padding: '100px', textAlign: 'center', border: '1px dashed rgba(212, 175, 55, 0.3)' }}>
            <Hotel size={60} color="var(--luxury-gold)" style={{ marginBottom: '30px', opacity: 0.3 }} />
            <h3 style={{ fontSize: '1.5rem', color: 'var(--luxury-white)', fontFamily: 'var(--font-heading)', marginBottom: '15px' }}>The sea awaits</h3>
            <p style={{ color: 'var(--luxury-pearl)', opacity: 0.6, marginBottom: '40px', maxWidth: '400px', margin: '0 auto 40px' }}>Your voyage history is currently a blank horizon. Begin your next chapter with us.</p>
            <button onClick={onBack} className="gold-btn" style={{ padding: '15px 40px' }}>EXPLORE STATEROOMS</button>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            {bookings.map((booking) => (
              <div key={booking.id} className="glass booking-card" style={{ border: '1px solid rgba(255,255,255,0.05)', padding: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '30px', transition: 'all 0.3s ease' }}>
                <div>
                  <div style={{ fontSize: '0.6rem', color: 'var(--luxury-gold)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '10px', letterSpacing: '0.2em' }}>Confirmed Voyage</div>
                  <h3 style={{ fontSize: '1.5rem', color: 'var(--luxury-white)', fontFamily: 'var(--font-heading)', marginBottom: '15px' }}>{booking.room_name}</h3>
                  <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.85rem', color: 'var(--luxury-pearl)', opacity: 0.7 }}>
                      <Calendar size={16} /> <span>{new Date(booking.check_in).toLocaleDateString('en-GB', { day: '2-digit', month: 'short' })} — {new Date(booking.check_out).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.85rem', color: 'var(--luxury-gold)' }}>
                      <Crown size={16} /> <span> Butler Service Active</span>
                    </div>
                  </div>
                </div>
                <div className="booking-ref" style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '0.6rem', color: 'var(--luxury-pearl)', opacity: 0.4, marginBottom: '10px', letterSpacing: '0.1em' }}>BOOKING REF: #{booking.id.substr(0, 8).toUpperCase()}</div>
                  <button 
                    onClick={() => setSelectedBooking(booking)}
                    style={{ color: 'var(--luxury-gold)', background: 'transparent', border: 'none', fontWeight: 600, fontSize: '0.8rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                    DETAILS <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Dining Section */}
        <div style={{ marginTop: '80px', marginBottom: '40px', display: 'flex', alignItems: 'center', gap: '15px' }}>
          <Utensils size={20} color="var(--luxury-gold)" />
          <h2 style={{ fontSize: '1.8rem', color: 'var(--luxury-white)', fontFamily: 'var(--font-heading)' }}>Dining <span className="gold-text">Reservations</span></h2>
        </div>

        {loading ? (
          <div style={{ padding: '40px', textAlign: 'center', color: 'var(--luxury-gold)', opacity: 0.5 }}>Syncing manifests...</div>
        ) : tableBookings.length === 0 ? (
          <div className="glass" style={{ padding: '60px', textAlign: 'center', border: '1px dashed rgba(212, 175, 55, 0.2)' }}>
            <p style={{ color: 'var(--luxury-pearl)', opacity: 0.5 }}>No bespoke dining reservations documented.</p>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            {tableBookings.map((tb) => (
              <div key={tb.id} className="glass" style={{ border: '1px solid rgba(255,255,255,0.05)', padding: '30px', position: 'relative' }}>
                <div style={{ fontSize: '0.6rem', color: 'var(--luxury-gold)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '15px', letterSpacing: '0.2em' }}>Table Confirmed</div>
                <h3 style={{ fontSize: '1.2rem', color: 'var(--luxury-white)', fontFamily: 'var(--font-heading)', marginBottom: '15px' }}>Admiral's Dining Room</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.85rem', color: 'var(--luxury-pearl)', opacity: 0.8 }}>
                    <Calendar size={14} /> <span>{new Date(tb.date).toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' })}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.85rem', color: 'var(--luxury-pearl)', opacity: 0.8 }}>
                    <Clock size={14} /> <span>{tb.time}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.85rem', color: 'var(--luxury-white)' }}>
                    <Users size={14} /> <span>{tb.guests} Guests</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Booking Details Modal */}
        {selectedBooking && (
          <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.9)', backdropFilter: 'blur(10px)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 3000, padding: '20px' }}>
            <div className="glass reveal active" style={{ border: '1px solid var(--luxury-gold)', maxWidth: '500px', width: '100%', padding: '60px', position: 'relative' }}>
              <button 
                onClick={() => setSelectedBooking(null)}
                style={{ position: 'absolute', top: '25px', right: '25px', background: 'transparent', border: 'none', color: 'var(--luxury-gold)', cursor: 'pointer' }}
              >
                <X size={24} />
              </button>
              
              <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                <Crown size={32} color="var(--luxury-gold)" style={{ marginBottom: '20px' }} />
                <h2 style={{ fontSize: '2rem', color: 'var(--luxury-white)', fontFamily: 'var(--font-heading)' }}>Sanctuary Secured</h2>
                <p style={{ color: 'var(--luxury-pearl)', opacity: 0.5, fontSize: '0.8rem' }}>REF: #{selectedBooking.id.substr(0, 12).toUpperCase()}</p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '25px', borderTop: '1px solid rgba(212, 175, 55, 0.2)', paddingTop: '30px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.7rem', color: 'var(--luxury-gold)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Stateroom</span>
                  <span style={{ color: 'var(--luxury-white)', fontFamily: 'var(--font-heading)' }}>{selectedBooking.room_name}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.7rem', color: 'var(--luxury-gold)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Guest</span>
                  <span style={{ color: 'var(--luxury-white)' }}>{selectedBooking.guest_name}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.7rem', color: 'var(--luxury-gold)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Arrival</span>
                  <span style={{ color: 'var(--luxury-white)' }}>{new Date(selectedBooking.check_in).toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' })}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.7rem', color: 'var(--luxury-gold)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Departure</span>
                  <span style={{ color: 'var(--luxury-white)' }}>{new Date(selectedBooking.check_out).toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' })}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid rgba(212, 175, 55, 0.2)', paddingTop: '25px', marginTop: '10px' }}>
                  <span style={{ fontSize: '1.1rem', fontFamily: 'var(--font-heading)', color: 'var(--luxury-white)' }}>Total Investment</span>
                  <span style={{ fontSize: '1.4rem', color: 'var(--luxury-gold)', fontWeight: 700 }}>₹{selectedBooking.total_price.toLocaleString()}</span>
                </div>
              </div>

              <button 
                onClick={() => setSelectedBooking(null)}
                className="gold-btn"
                style={{ width: '100%', marginTop: '40px', padding: '18px' }}
              >
                RETURN TO PROFILE
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default UserProfile;
