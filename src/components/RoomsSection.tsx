"use client";
import { useState } from 'react';
import { ArrowRight, Loader2, Sparkles } from 'lucide-react';
import { Room } from '../lib/db';

import BookNowButton from './BookNowButton';

const RoomCard = ({ room, setBookingRoom }: { room: Room, setBookingRoom: any }) => {
  return (
    <div 
      className="reveal active"
      style={{ 
        position: 'relative', 
        height: '600px', 
        overflow: 'hidden', 
        cursor: 'pointer',
        transition: 'transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)'
      }}
      onMouseEnter={(e) => {
        const img = e.currentTarget.querySelector('img');
        if (img) img.style.transform = 'scale(1.1)';
      }}
      onMouseLeave={(e) => {
        const img = e.currentTarget.querySelector('img');
        if (img) img.style.transform = 'scale(1)';
      }}
    >
      <style jsx>{`
        @media (max-width: 768px) {
          .room-info { bottom: 25px !important; left: 20px !important; right: 20px !important; }
          .room-name { font-size: 1.5rem !important; }
          .room-price-container { flex-direction: column !important; align-items: flex-start !important; }
          .room-price { text-align: left !important; margin-top: 15px !important; }
        }
      `}</style>
      <img 
        src={room.images?.[0] || '/luxury-suite.png'} 
        alt={room.name} 
        style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 1.2s cubic-bezier(0.2, 0.8, 0.2, 1)' }} 
      />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,10,10,0.9) 0%, rgba(10,10,10,0) 50%)', zIndex: 2 }} />
      
      <div className="room-info" style={{ position: 'absolute', bottom: '40px', left: '40px', right: '40px', zIndex: 10 }}>
        <div style={{ color: 'var(--luxury-gold)', fontSize: '0.7rem', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Sparkles size={12} /> The Stateroom Experience
        </div>
        <h3 className="room-name" style={{ fontSize: '2rem', fontFamily: 'var(--font-heading)', color: 'var(--luxury-white)', marginBottom: '15px' }}>{room.name}</h3>
        <div className="room-price-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div style={{ flex: 1 }}>
            <div style={{ color: 'var(--luxury-pearl)', opacity: 0.8, fontSize: '0.9rem', marginBottom: '15px' }}>
              {room.sqft} of Pure Opulence • {room.bed}
            </div>
            {room.amenities && (
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '10px' }}>
                {room.amenities.slice(0, 4).map((amenity, idx) => (
                  <span key={idx} style={{ fontSize: '0.65rem', padding: '4px 10px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--glass-border)', color: 'var(--luxury-pearl)', borderRadius: '2px' }}>
                    {amenity}
                  </span>
                ))}
                {room.amenities.length > 4 && <span style={{ fontSize: '0.65rem', color: 'var(--luxury-gold)' }}>+ {room.amenities.length - 4} More</span>}
              </div>
            )}
          </div>
          <div className="room-price" style={{ textAlign: 'right', minWidth: '120px' }}>
            <div style={{ color: 'var(--luxury-gold)', fontSize: '1rem', fontFamily: 'var(--font-heading)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Inquiry Only</div>
            <div style={{ fontSize: '0.6rem', color: 'var(--luxury-pearl)', opacity: 0.6, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Bespoke Experience</div>
          </div>
        </div>
        <div style={{ marginTop: '30px', width: '100%' }}>
          <BookNowButton roomType={room.name} style={{ width: '100%', padding: '15px' }}>
            Reserve This Suite
          </BookNowButton>
        </div>
      </div>
    </div>
  );
};

const RoomsSection = ({ rooms, setBookingRoom }: { rooms: any[], setBookingRoom: any }) => {
  return (
    <section id="rooms" style={{ background: 'var(--luxury-black)', padding: '120px 5%' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <h4 style={{ color: 'var(--luxury-gold)', letterSpacing: '0.4em', textTransform: 'uppercase', fontSize: '0.8rem', marginBottom: '20px' }}>Accommodation</h4>
          <h2 style={{ fontSize: 'clamp(2rem, 8vw, 3.5rem)', color: 'var(--luxury-white)', marginBottom: '30px' }}>The <span className="gold-text">Staterooms</span></h2>
          <p style={{ maxWidth: '700px', margin: '0 auto', color: 'var(--luxury-pearl)', opacity: 0.7 }}>
            Our suites are designed as private sanctuaries on the sea. Each room offers panoramic views of the Bay of Bengal, curated art, and bespoke furniture.
          </p>
        </div>

        {rooms.length === 0 ? (
          <div style={{ display: 'flex', justifyContent: 'center', padding: '100px 0' }}>
            <Loader2 className="animate-spin" size={40} color="var(--luxury-gold)" />
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            {rooms.map((room) => (
              <RoomCard key={room.id} room={room} setBookingRoom={setBookingRoom} />
            ))}
          </div>
        )}
        

      </div>
    </section>
  );
};

export default RoomsSection;
