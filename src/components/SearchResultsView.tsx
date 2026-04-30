"use client";
import { useState } from 'react';
import { Users, Bed, Maximize, ChevronRight, ArrowLeft, Star, ShieldCheck } from 'lucide-react';
import { Room } from '../lib/db';
import BookNowButton from './BookNowButton';

interface SearchResultsViewProps {
  rooms: Room[];
  globalDates: { checkIn: string; checkOut: string };
  setGlobalDates: any;
  guests: { rooms: number, adults: number, children: number };
  setGuests: any;
  onBook: (room: Room) => void;
  onBack: () => void;
}

const SearchResultsView = ({ rooms, globalDates, setGlobalDates, guests, setGuests, onBook, onBack }: SearchResultsViewProps) => {
  const [isGuestsOpen, setIsGuestsOpen] = useState(false);

  return (
    <div style={{ background: 'var(--luxury-black)', minHeight: '100vh', paddingBottom: '120px' }}>
      
      {/* ── Bespoke Search Header ────────────────── */}
      <div className="glass" style={{ position: 'sticky', top: '70px', zIndex: 100, padding: '20px 5%', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '30px' }}>
          
          <button onClick={onBack} style={{ background: 'transparent', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--luxury-gold)', fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            <ArrowLeft size={16} /> The Voyage
          </button>

          <div style={{ display: 'flex', alignItems: 'center', gap: '40px', flexWrap: 'wrap' }}>
             <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '0.6rem', color: 'var(--luxury-gold)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '5px' }}>Arrival & Departure</span>
                <div style={{ display: 'flex', gap: '10px', color: 'var(--luxury-white)', fontWeight: 600 }}>
                  <span>{globalDates.checkIn}</span>
                  <span style={{ opacity: 0.3 }}>—</span>
                  <span>{globalDates.checkOut}</span>
                </div>
             </div>
             
             <div style={{ width: '1px', height: '30px', background: 'rgba(212, 175, 55, 0.2)' }} />

             <div 
              onClick={() => setIsGuestsOpen(!isGuestsOpen)}
              style={{ display: 'flex', flexDirection: 'column', position: 'relative', cursor: 'pointer' }}>
                <span style={{ fontSize: '0.6rem', color: 'var(--luxury-gold)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '5px' }}>Occupancy</span>
                <span style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--luxury-white)' }}>{guests.adults + guests.children} Guests in {guests.rooms} Stateroom</span>

                {/* Popover */}
                {isGuestsOpen && (
                  <div 
                    onClick={(e) => e.stopPropagation()}
                    className="glass"
                    style={{ position: 'absolute', top: '100%', right: 0, width: '300px', padding: '30px', zIndex: 110, marginTop: '20px', border: '1px solid var(--luxury-gold)' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontSize: '0.8rem', color: 'var(--luxury-white)', letterSpacing: '0.1em' }}>ADULTS</span>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                          <button onClick={() => {
                            const newAdults = Math.max(1, guests.adults - 1);
                            setGuests({...guests, adults: newAdults, rooms: Math.ceil(newAdults / 2)});
                          }} style={{ width: '30px', height: '30px', background: 'transparent', border: '1px solid var(--luxury-gold)', color: 'var(--luxury-gold)', cursor: 'pointer' }}>-</button>
                          <span style={{ color: 'var(--luxury-white)' }}>{guests.adults}</span>
                          <button onClick={() => {
                            const newAdults = guests.adults + 1;
                            setGuests({...guests, adults: newAdults, rooms: Math.ceil(newAdults / 2)});
                          }} style={{ width: '30px', height: '30px', background: 'transparent', border: '1px solid var(--luxury-gold)', color: 'var(--luxury-gold)', cursor: 'pointer' }}>+</button>
                        </div>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', opacity: 0.6 }}>
                        <span style={{ fontSize: '0.8rem', color: 'var(--luxury-white)', letterSpacing: '0.1em' }}>STATEROOMS</span>
                        <span style={{ color: 'var(--luxury-white)', fontWeight: 600 }}>{guests.rooms}</span>
                      </div>
                      <button onClick={() => setIsGuestsOpen(false)} className="gold-btn" style={{ width: '100%', marginTop: '10px' }}>Update Voyage</button>
                    </div>
                  </div>
                )}
             </div>

             <button onClick={onBack} className="outline-btn" style={{ fontSize: '0.7rem', padding: '10px 25px' }}>Modify</button>
          </div>
        </div>
      </div>

      {/* ── Results List ────────────────────────── */}
      <div className="container" style={{ marginTop: '80px' }}>
        <h2 style={{ fontSize: '2.5rem', color: 'var(--luxury-white)', marginBottom: '50px', fontFamily: 'var(--font-heading)' }}>Available <span className="gold-text">Sanctuaries</span></h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
          {rooms.map((room) => (
            <div key={room.id} style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', 
              background: 'rgba(255,255,255,0.03)', 
              border: '1px solid rgba(255,255,255,0.08)', 
              overflow: 'hidden',
              boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
            }}>
              
              {/* Image Area - Cinematic & Immersive */}
              <div style={{ position: 'relative', height: '100%', minHeight: '450px' }}>
                <img src={(room.images && room.images[0]) || '/luxury-suite.png'} alt={room.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, transparent, rgba(10,10,10,0.5))' }} />
                <div style={{ position: 'absolute', top: '30px', left: '30px', background: 'var(--luxury-gold)', color: 'var(--luxury-black)', padding: '5px 15px', fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.1em' }}>
                  ULTRA EXCLUSIVE
                </div>
              </div>

              {/* Details Area - Refined & Balanced */}
              <div style={{ 
                padding: '40px 50px', 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'space-between',
                background: 'rgba(10,10,10,0.6)',
                backdropFilter: 'blur(15px)',
                borderLeft: '1px solid rgba(212, 175, 55, 0.1)',
                minHeight: '450px'
              }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--luxury-gold)', marginBottom: '15px' }}>
                    <Star size={14} /> <span style={{ fontSize: '0.7rem', letterSpacing: '0.2em' }}>7-STAR EXPERIENCE</span>
                  </div>
                  <h3 style={{ fontSize: '2.2rem', color: 'var(--luxury-white)', fontFamily: 'var(--font-heading)', marginBottom: '25px', lineHeight: 1.2, textTransform: 'uppercase' }}>{room.name}</h3>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '35px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--luxury-pearl)', opacity: 0.7, fontSize: '0.85rem' }}>
                      <Users size={16} /> <span>{room.adults} Guests</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--luxury-pearl)', opacity: 0.7, fontSize: '0.85rem' }}>
                      <Bed size={16} /> <span>{room.bed}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--luxury-pearl)', opacity: 0.7, fontSize: '0.85rem' }}>
                      <Maximize size={16} /> <span>{room.sqft}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--luxury-gold)', fontSize: '0.85rem' }}>
                      <ShieldCheck size={16} /> <span>7-Star Service</span>
                    </div>
                  </div>

                  <div style={{ minHeight: '120px' }}>
                    <p style={{ fontSize: '0.65rem', color: 'var(--luxury-gold)', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '15px' }}>Bespoke Amenities</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                      {room.amenities && room.amenities.map((amenity, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.75rem', color: 'var(--luxury-pearl)', opacity: 0.7, background: 'rgba(255,255,255,0.03)', padding: '5px 12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                          <span style={{ width: '4px', height: '4px', background: 'var(--luxury-gold)', borderRadius: '50%' }} />
                          {amenity}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '35px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                    <div>
                      {room.original_price ? (room.original_price > room.price && (
                        <div style={{ color: 'var(--luxury-pearl)', opacity: 0.3, fontSize: '1rem', textDecoration: 'line-through', marginBottom: '5px' }}>
                          ₹{room.original_price.toLocaleString()}
                        </div>
                      )) : null}
                      <div style={{ color: 'var(--luxury-gold)', fontSize: '2.4rem', fontFamily: 'var(--font-heading)', lineHeight: 1 }}>₹{room.price.toLocaleString()}</div>
                      <div style={{ fontSize: '0.6rem', color: 'var(--luxury-pearl)', opacity: 0.5, textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '6px' }}>Per Enchanted Night</div>
                    </div>
                    <BookNowButton 
                      roomType={room.name}
                      style={{ padding: '18px 50px', fontSize: '0.75rem' }}
                    >
                      Reserve Now
                    </BookNowButton>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default SearchResultsView;
