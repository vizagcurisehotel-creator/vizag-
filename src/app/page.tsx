"use client";
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import FeaturesSection from '../components/FeaturesSection';
import RoomsSection from '../components/RoomsSection';
import RestaurantSection from '../components/RestaurantSection';
import BanquetSection from '../components/BanquetSection';
import AttractionsSection from '../components/AttractionsSection';
import Footer from '../components/Footer';
import BookingModal from '../components/BookingModal';
import SearchResultsView from '../components/SearchResultsView';
import UserAuth from '../components/UserAuth';
import UserProfile from '../components/UserProfile';
import MoreInfoModal from '../components/MoreInfoModal';
import MapModal from '../components/MapModal';
import TableBookingModal from '../components/TableBookingModal';
import DigitalMenuModal from '../components/DigitalMenuModal';
import BanquetInquiryModal from '../components/BanquetInquiryModal';
import ConciergeBot from '../components/ConciergeBot';
import BookNowButton from '../components/BookNowButton';
import LegalModal from '../components/LegalModal';

import { Room } from '../lib/db';
import { Utensils, Calendar as CalendarIcon, Users, Sparkles } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function Home() {
  const [rooms, setRooms] = useState<Room[]>([]);
  const [view, setView] = useState<'home' | 'search' | 'profile'>('home');
  const [activeMoreInfo, setActiveMoreInfo] = useState<any>(null);
  const [showMap, setShowMap] = useState(false);
  const [bookingRoom, setBookingRoom] = useState<Room | null>(null);
  const [showTableBooking, setShowTableBooking] = useState(false);
  const [showDigitalMenu, setShowDigitalMenu] = useState(false);
  const [showBanquetInquiry, setShowBanquetInquiry] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [showAuth, setShowAuth] = useState(false);
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [globalDates, setGlobalDates] = useState({
    checkIn: new Date().toISOString().split('T')[0],
    checkOut: new Date(Date.now() + 86400000).toISOString().split('T')[0]
  });
  const [guests, setGuests] = useState({
    rooms: 1,
    adults: 2,
    children: 0
  });
  const [legalModal, setLegalModal] = useState<'about' | 'contact' | 'terms' | 'privacy' | 'refund' | null>(null);

  const moreInfoData = {
    dining: {
      title: "The Admiral's Dining",
      subtitle: "A Culinary Odyssey",
      description: "Step into a realm where gastronomy meets the horizon. Our chefs prepare bespoke menus using the rarest local ingredients and international techniques, served in an environment of absolute elegance.",
      image: '/luxury-restaurant.png',
      highlights: ['Chef\'s Table Experience', 'Private Cellar Access', 'Ocean-Front Seating', 'Bespoke Degustation'],
      details: [
        { icon: <Utensils size={18} />, label: 'Cuisine', value: 'Contemporary Coastal' },
        { icon: <Sparkles size={18} />, label: 'Experience', value: '7-Star Fine Dining' }
      ]
    },
    events: {
      title: "The Grand Ballroom",
      subtitle: "Unrivaled Grandeur",
      description: "From royal weddings to global summits, our venues provide the scale and sophistication required for life's most significant moments. Every detail is curated by our master planners.",
      image: '/luxury-ballroom.png',
      highlights: ['15,500 sq ft Ballroom', 'Smart Venue Tech', 'Michelin-level Catering', 'Private VIP Suites'],
      details: [
        { icon: <Users size={18} />, label: 'Capacity', value: '1,500 Guests' },
        { icon: <CalendarIcon size={18} />, label: 'Venue', value: 'Grand Ballroom' }
      ]
    }
  };

  useEffect(() => {
    // 1. Initial Session Check
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) {
        setCurrentUser({
          id: session.user.id,
          email: session.user.email,
          name: session.user.user_metadata.name || session.user.email?.split('@')[0],
        });
      }
    });

    // 2. Auth State Listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_IN' && session?.user) {
        setCurrentUser({
          id: session.user.id,
          email: session.user.email,
          name: session.user.user_metadata.name || session.user.email?.split('@')[0],
        });
      } else if (event === 'SIGNED_OUT') {
        setCurrentUser(null);
        setView('home');
      }
    });

    // 3. Fetch Rooms
    fetch('/api/rooms', { cache: 'no-store' })
      .then(res => {
        if (!res.ok) throw new Error('API failed');
        return res.json();
      })
      .then(data => {
        if (Array.isArray(data)) {
          console.log('Successfully loaded rooms from Supabase:', data.length);
          setRooms(data);
        } else {
          console.error('Invalid rooms data received:', data);
        }
      })
      .catch(err => {
        console.error('Failed to load rooms:', err);
      });

    // 4. Scroll Reveal & Parallax Logic
    const handleScroll = () => {
      const reveals = document.querySelectorAll('.reveal');
      const windowHeight = window.innerHeight;
      
      reveals.forEach(reveal => {
        const revealTop = reveal.getBoundingClientRect().top;
        if (revealTop < windowHeight - 100) {
          reveal.classList.add('active');
        }
      });

      // Parallax update
      const scrolled = window.pageYOffset;
      document.documentElement.style.setProperty('--scroll-offset', `${scrolled * 0.4}px`);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => {
      subscription.unsubscribe();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const handleLogin = (user: any) => {
    setCurrentUser(user);
    // UserAuth handles the actual sign-in via Supabase, this just updates local state
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setCurrentUser(null);
    setView('home');
  };


  const handleBookingSuccess = () => {
    setBookingRoom(null);
    setSuccessMsg('Your reservation has been secured. We await your arrival.');
    setTimeout(() => setSuccessMsg(''), 5000);
  };

  const handleUpdateUser = (updatedUser: any) => {
    setCurrentUser(updatedUser);
    sessionStorage.setItem('user', JSON.stringify(updatedUser));
    setSuccessMsg('Profile updated successfully.');
    setTimeout(() => setSuccessMsg(''), 3000);
  };

  if (view === 'profile' && currentUser) {
    return (
      <div style={{ background: 'var(--luxury-black)', minHeight: '100vh' }}>
        <Navbar currentUser={currentUser} onOpenAuth={() => setShowAuth(true)} onGoProfile={() => setView('profile')} onGoHome={() => setView('home')} onExplore={() => setView('search')} />
        <UserProfile 
          user={currentUser} 
          onLogout={handleLogout} 
          onBack={() => setView('home')} 
          onUpdateUser={handleUpdateUser}
        />
        {showAuth && <UserAuth onClose={() => setShowAuth(false)} onLogin={handleLogin} />}
      </div>
    );
  }

  return (
    <div style={{ background: 'var(--luxury-black)', minHeight: '100vh', color: 'var(--luxury-white)' }}>
      <Navbar currentUser={currentUser} onOpenAuth={() => setShowAuth(true)} onGoProfile={() => setView('profile')} onGoHome={() => setView('home')} onExplore={() => setView('search')} />
      
      {showAuth && <UserAuth onClose={() => setShowAuth(false)} onLogin={handleLogin} />}

      {activeMoreInfo && (
        <MoreInfoModal 
          title={activeMoreInfo.title} 
          content={activeMoreInfo} 
          onClose={() => setActiveMoreInfo(null)} 
        />
      )}

      {showMap && <MapModal onClose={() => setShowMap(false)} />}

      {/* Luxury Toast */}
      {successMsg && (
        <div 
          className="animate-fade-in glass" 
          style={{ 
            position: 'fixed', 
            top: '100px', 
            left: '50%', 
            transform: 'translateX(-50%)', 
            padding: '20px 40px', 
            zIndex: 9999, 
            color: 'var(--luxury-gold)',
            border: '1px solid var(--luxury-gold)',
            fontFamily: 'var(--font-heading)',
            letterSpacing: '0.1em'
          }}
        >
          {successMsg}
        </div>
      )}

      {view === 'home' ? (
        <main>
          <Hero 
            onSearch={() => setView('search')} 
            globalDates={globalDates} 
            setGlobalDates={setGlobalDates} 
            guests={guests}
            setGuests={setGuests}
          />
          <div style={{ position: 'relative', zIndex: 5 }}>
          <div className="reveal">
            <RoomsSection 
              rooms={rooms} 
              setBookingRoom={(room: Room) => {
                if (currentUser) setBookingRoom(room);
                else setShowAuth(true);
              }} 
            />
          </div>
          <div className="reveal">
            <FeaturesSection />
          </div>
          <div className="reveal">
            <RestaurantSection 
              onSeeMore={() => setShowDigitalMenu(true)} 
              onReserveTable={() => {
                if (currentUser) setShowTableBooking(true);
                else setShowAuth(true);
              }}
            />
          </div>
          <div className="reveal">
            <BanquetSection onSeeMore={() => {
              if (currentUser) setShowBanquetInquiry(true);
              else setShowAuth(true);
            }} />
          </div>
          <div className="reveal">
            <AttractionsSection onShowMap={() => setShowMap(true)} />
          </div>
          </div>
          <Footer onOpenInfo={(type) => setLegalModal(type)} />
        </main>



      ) : (
        <div style={{ paddingTop: '100px' }}>
          <SearchResultsView 
            rooms={rooms} 
            globalDates={globalDates} 
            setGlobalDates={setGlobalDates}
            guests={guests}
            setGuests={setGuests}
            onBook={(room: Room) => {
              if (currentUser) setBookingRoom(room);
              else setShowAuth(true);
            }}
            onBack={() => setView('home')}
          />
        </div>
      )}

      {bookingRoom && (
        <BookingModal 
          room={bookingRoom} 
          initialDates={globalDates}
          onClose={() => setBookingRoom(null)} 
          onSuccess={handleBookingSuccess} 
        />
      )}

      {showTableBooking && (
        <TableBookingModal 
          onClose={() => setShowTableBooking(false)}
          onSuccess={() => {
            setShowTableBooking(false);
            setSuccessMsg('Your table at The Admiral\'s Dining Room is reserved.');
            setTimeout(() => setSuccessMsg(''), 5000);
          }}
        />
      )}
      
      {showDigitalMenu && (
        <DigitalMenuModal onClose={() => setShowDigitalMenu(false)} />
      )}

      {showBanquetInquiry && (
        <BanquetInquiryModal onClose={() => setShowBanquetInquiry(false)} />
      )}

      <ConciergeBot 
        rooms={rooms} 
        onAction={(action: string) => {
          if (action === 'search') setView('search');
          if (action === 'table') {
            if (currentUser) setShowTableBooking(true);
            else setShowAuth(true);
          }
          if (action === 'event') {
            if (currentUser) setShowBanquetInquiry(true);
            else setShowAuth(true);
          }
          if (action === 'map') setShowMap(true);
        }} 
      />

      {legalModal && <LegalModal type={legalModal} onClose={() => setLegalModal(null)} />}

      <div className="lg-hidden" style={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 900, padding: '10px', background: 'var(--luxury-black)', borderTop: '1px solid rgba(212, 175, 55, 0.3)' }}>
        <BookNowButton style={{ width: '100%', padding: '15px', fontSize: '1rem' }} />
      </div>
    </div>

  );
}
