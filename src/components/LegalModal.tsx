"use client";
import { X, ShieldCheck, HelpCircle, FileText, Mail, Info } from 'lucide-react';

interface LegalModalProps {
  type: 'about' | 'contact' | 'terms' | 'privacy' | 'refund' | null;
  onClose: () => void;
}

const LegalModal = ({ type, onClose }: LegalModalProps) => {
  if (!type) return null;

  const content = {
    about: {
      title: "The Legacy of Vizag Cruise",
      icon: <Info size={30} color="var(--luxury-gold)" />,
      subtitle: "Where Luxury Meets the Horizon",
      text: [
        "Vizag Cruise is more than a hotel; it is a definitive destination for ultra-luxury hospitality. Nestled on the pristine shores of Rushikonda Beach, we offer a sanctuary of elegance and sophistication.",
        "Our mission is to provide an unparalleled experience where the legacy of the sea meets the pinnacle of modern architecture. Every stateroom, every meal, and every interaction is curated to exceed the expectations of the world's most discerning travelers.",
        "From our panoramic ocean views to our bespoke concierge services, Vizag Cruise stands as an icon of luxury in Andhra Pradesh, India."
      ]
    },
    contact: {
      title: "Connect with the Concierge",
      icon: <Mail size={30} color="var(--luxury-gold)" />,
      subtitle: "At Your Service, 24/7",
      text: [
        "For reservations, inquiries, or bespoke arrangements, our elite concierge team is ready to assist you.",
        "Direct Line: 96693 11999",
        "Private Email: vizagcurisehotel@gmail.com",
        "Location: Rushikonda Beach, Visakhapatnam, Andhra Pradesh, India",
        "We await the honor of welcoming you to the voyage."
      ]
    },
    terms: {
      title: "Terms of Engagement",
      icon: <FileText size={30} color="var(--luxury-gold)" />,
      subtitle: "The Standard of Excellence",
      text: [
        "By engaging with Vizag Cruise, you enter a realm of mutual respect and high standards. All guests are required to maintain the decorum of the staterooms and public spaces.",
        "Check-in time is 2:00 PM and check-out is 12:00 PM. Early arrival or late departure is subject to availability and bespoke arrangements.",
        "The management reserves the right to refuse service to ensure the safety and comfort of all elite members."
      ]
    },
    privacy: {
      title: "Privacy & Discretion",
      icon: <ShieldCheck size={30} color="var(--luxury-gold)" />,
      subtitle: "Your Sanctuary is Secure",
      text: [
        "At Vizag Cruise, your privacy is our most guarded asset. We employ state-of-the-art encryption and strictly confidential handling of all guest information.",
        "Your data is used solely to enhance your experience and secure your reservations. We never share your details with third parties without explicit authorization.",
        "Discretion is the hallmark of true luxury."
      ]
    },
    refund: {
      title: "Reservation Integrity",
      icon: <HelpCircle size={30} color="var(--luxury-gold)" />,
      subtitle: "Commitment to the Voyage",
      text: [
        "To maintain the exclusivity and availability of our staterooms, we adhere to a strict reservation policy.",
        "Refund Policy: No refund once booked.",
        "We recommend ensuring your travel plans are finalized before securing your sanctuary on the sea.",
        "In exceptional circumstances, reservations may be rescheduled at the discretion of the management, subject to availability."
      ]
    }
  };

  const current = content[type];

  return (
    <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.9)', zIndex: 4000, display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(20px)', padding: '20px' }}>
      <div className="glass reveal active" style={{ width: '100%', maxWidth: '700px', border: '1px solid var(--luxury-gold)', background: 'var(--luxury-black)', position: 'relative', padding: '60px' }}>
        
        <button onClick={onClose} style={{ position: 'absolute', top: '25px', right: '25px', background: 'transparent', border: 'none', cursor: 'pointer', color: 'var(--luxury-gold)' }}>
          <X size={24} />
        </button>

        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div style={{ marginBottom: '20px', display: 'inline-block' }}>{current.icon}</div>
          <h2 style={{ fontFamily: 'var(--font-heading)', color: 'var(--luxury-white)', fontSize: '2rem', marginBottom: '10px' }}>{current.title}</h2>
          <p style={{ color: 'var(--luxury-gold)', fontSize: '0.9rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>{current.subtitle}</p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {current.text.map((p, i) => (
            <p key={i} style={{ color: 'var(--luxury-pearl)', opacity: 0.8, lineHeight: '1.8', fontSize: '1rem' }}>{p}</p>
          ))}
        </div>

        <button onClick={onClose} className="gold-btn" style={{ width: '100%', marginTop: '50px', padding: '15px' }}>
          CLOSE
        </button>
      </div>
    </div>
  );
};

export default LegalModal;
