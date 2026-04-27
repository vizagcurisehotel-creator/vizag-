"use client";
import { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, Sparkles, User, Anchor, Calendar, Utensils, Info } from 'lucide-react';

interface Message {
  role: 'bot' | 'user';
  content: string;
  type?: 'text' | 'options' | 'rooms';
  options?: string[];
}

const ConciergeBot = ({ rooms, onAction }: { rooms: any[], onAction: (type: string) => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { 
      role: 'bot', 
      content: "Welcome to Vizag Cruise, the apex of luxury on the Bay of Bengal. I am your AI Concierge. How may I assist your voyage today?",
      type: 'options',
      options: ['Explore Staterooms', 'Reserve a Table', 'Event Inquiries', 'Local Travel']
    }
  ]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async (text: string, isOption = false) => {
    if (!text.trim() || isProcessing) return;

    const userMsg: Message = { role: 'user', content: text };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);
    setIsProcessing(true);

    // Simulate AI Thinking
    setTimeout(() => {
      const getRandom = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)];
      const lowerText = text.toLowerCase();
      
      let responseContent = "";
      let responseOptions: string[] | undefined = undefined;

      // Logic for Option Clicks
      if (isOption) {
        if (lowerText.includes('menu')) {
          responseContent = getRandom([
            "A fine choice. I am presenting tonight's digital menu from The Admiral's Dining Room. Bon appétit.",
            "Our chefs have prepared something truly special. Here is our current digital menu.",
            "Certainly. Allow me to present our latest culinary selections."
          ]);
        } else if (lowerText.includes('table') || lowerText.includes('reserve a table') || lowerText.includes('secure')) {
          responseContent = getRandom([
            "Certainly. I am opening the reservation manifest to secure your table at The Admiral's Dining Room.",
            "A table is being prepared for you. I am opening the reservation portal now.",
            "Excellent choice. I'll assist you in securing a prime spot at the Admiral's Dining."
          ]);
        } else if (lowerText.includes('reserve') || lowerText.includes('stateroom') || lowerText.includes('explore staterooms')) {
          responseContent = getRandom([
            "Excellent decision. I am escorting you to our available staterooms to finalize your reservation.",
            "I've updated the view to show our available sanctuaries. Which one shall we secure for you?",
            "A voyage of a lifetime begins here. I've opened our room selection for you."
          ]);
        } else if (lowerText.includes('event')) {
          responseContent = "The Grand Ballroom awaits. I am summoning our event concierge to assist with your inquiry.";
        } else if (lowerText.includes('travel') || lowerText.includes('local')) {
          responseContent = "Beyond the horizon lies the beauty of Vizag. We provide private chauffeurs for tours of Kailasagiri and RK Beach. I have opened the map for you.";
        }
      } 
      
      // If no response yet, try text-based logic
      if (!responseContent) {
        const isDining = lowerText.includes('din') || lowerText.includes('eat') || lowerText.includes('food') || lowerText.includes('rest') || lowerText.includes('table');
        const isRoom = lowerText.includes('room') || lowerText.includes('stay') || lowerText.includes('pric') || lowerText.includes('cost') || lowerText.includes('stateroom') || lowerText.includes('sanctuary');
        const isEvent = lowerText.includes('event') || lowerText.includes('wedd') || lowerText.includes('party') || lowerText.includes('ballroom') || lowerText.includes('hall') || lowerText.includes('inquir');
        const isTravel = lowerText.includes('travel') || lowerText.includes('tour') || lowerText.includes('vizag') || lowerText.includes('map') || lowerText.includes('beach');
        const isAffirmative = lowerText === 'yes' || lowerText === 'yeah' || lowerText === 'sure' || lowerText === 'ok' || lowerText === 'okay';

        if (isAffirmative) {
          responseContent = "Wonderful. How shall we proceed? I can assist with a room reservation, a dining table, or an event inquiry.";
          responseOptions = ['Book a Room', 'Reserve a Table', 'Event Inquiry'];
        } else if (isRoom) {
          const roomList = rooms.map(r => `${r.name} (from ₹${r.price})`).join(', ');
          responseContent = getRandom([
            `Our fleet of staterooms is curated for absolute tranquility: ${roomList}. Shall I prepare your reservation?`,
            `We have several private sanctuaries available: ${roomList}. Would you like to see more details?`,
            `From our Cozy Rooms to the Executive Suites: ${roomList}. Which one piques your interest today?`
          ]);
          responseOptions = ['Reserve Now', 'Compare Staterooms'];
        } else if (isDining) {
          responseContent = getRandom([
            "The Admiral's Dining Room offers a bespoke 7-star culinary odyssey. I can secure your table or show you tonight's digital menu.",
            "Experience the finest flavors on the Bay of Bengal. Shall I reserve a table or would you prefer to see the menu first?",
            "Our chefs are standing by. Would you like to see our digital menu or secure a reservation?"
          ]);
          responseOptions = ['Secure Table', 'View Digital Menu'];
        } else if (isEvent) {
          responseContent = "The Grand Ballroom provides a canvas for life's most significant celebrations. Would you like to consult with our event master?";
          responseOptions = ['Event Inquiry', 'Venue Details'];
        } else if (isTravel) {
          responseContent = "Beyond the horizon lies the beauty of Vizag. We provide private chauffeurs for tours of Kailasagiri and RK Beach. Shall I arrange a voyage?";
          responseOptions = ['Book Chauffeur', 'See Map'];
        } else {
          responseContent = getRandom([
            "I am at your service. Would you like to explore our private sanctuaries, the Admiral's Dining, or perhaps an event in the Grand Ballroom?",
            "How may I further assist your voyage today? I can help with room reservations, dining, or local travel.",
            "Your comfort is my priority. Shall we look at our staterooms, or perhaps a table at our world-class restaurant?"
          ]);
        }
      }

      const botResponse: Message = { 
        role: 'bot', 
        content: responseContent,
        type: responseOptions ? 'options' : 'text',
        options: responseOptions
      };

      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
      setIsProcessing(false);
    }, 1000);
  };



  const handleOptionClick = (option: string) => {
    const lowerOpt = option.toLowerCase();
    // These options trigger direct UI actions
    if (lowerOpt.includes('table') || lowerOpt.includes('secure table')) onAction('table');
    if (lowerOpt.includes('reserve now') || lowerOpt.includes('book a room') || lowerOpt.includes('stateroom')) onAction('search');
    if (lowerOpt.includes('event')) onAction('event');
    if (lowerOpt.includes('map') || lowerOpt.includes('travel') || lowerOpt.includes('local')) onAction('map');
    if (lowerOpt.includes('menu')) onAction('menu');
    
    // Send with isOption = true to prevent looping same message
    handleSend(option, true);
  };




  return (
    <div style={{ position: 'fixed', bottom: '30px', right: '30px', zIndex: 5000 }}>
      {/* ── Trigger Button ────────────────────────── */}
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className="gold-btn"
          style={{ 
            width: '65px', 
            height: '65px', 
            borderRadius: '50%', 
            padding: 0, 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            boxShadow: '0 10px 40px rgba(0,0,0,0.5)',
            border: '1px solid rgba(212, 175, 55, 0.5)'
          }}
        >
          <Sparkles size={28} />
        </button>
      )}

      {/* ── Chat Window ────────────────────────────── */}
      {isOpen && (
        <div 
          className="glass reveal active" 
          style={{ 
            width: 'clamp(320px, 90vw, 400px)', 
            height: '600px', 
            display: 'flex', 
            flexDirection: 'column',
            border: '1px solid var(--luxury-gold)',
            boxShadow: '0 20px 80px rgba(0,0,0,0.8)',
            overflow: 'hidden'
          }}
        >
          {/* Header */}
          <div style={{ background: 'var(--luxury-gold)', color: 'var(--luxury-black)', padding: '25px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <div style={{ background: 'var(--luxury-black)', padding: '8px', borderRadius: '50%', color: 'var(--luxury-gold)' }}>
                <Anchor size={20} />
              </div>
              <div>
                <div style={{ fontWeight: 800, fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Admiral's Concierge</div>
                <div style={{ fontSize: '0.6rem', opacity: 0.8 }}>Online • Ready to Assist</div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} style={{ background: 'transparent', border: 'none', color: 'var(--luxury-black)', cursor: 'pointer' }}>
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div 
            ref={scrollRef}
            style={{ flex: 1, padding: '25px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '20px', background: 'rgba(0,0,0,0.3)' }}
          >
            {messages.map((msg, i) => (
              <div key={i} style={{ alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start', maxWidth: '85%' }}>
                <div 
                  style={{ 
                    padding: '15px 20px', 
                    borderRadius: '2px', 
                    background: msg.role === 'user' ? 'var(--luxury-gold)' : 'rgba(255,255,255,0.05)', 
                    color: msg.role === 'user' ? 'var(--luxury-black)' : 'var(--luxury-pearl)',
                    fontSize: '0.85rem',
                    lineHeight: 1.6,
                    border: msg.role === 'bot' ? '1px solid rgba(212, 175, 55, 0.2)' : 'none'
                  }}
                >
                  {msg.content}
                </div>
                
                {msg.type === 'options' && msg.options && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '12px' }}>
                    {msg.options.map((opt, j) => (
                      <button 
                        key={j}
                        onClick={() => handleOptionClick(opt)}
                        style={{ background: 'transparent', border: '1px solid var(--luxury-gold)', color: 'var(--luxury-gold)', padding: '6px 12px', fontSize: '0.7rem', cursor: 'pointer', transition: '0.3s' }}
                        onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--luxury-gold)'; e.currentTarget.style.color = 'var(--luxury-black)'; }}
                        onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--luxury-gold)'; }}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            {isTyping && (
              <div style={{ alignSelf: 'flex-start', background: 'rgba(255,255,255,0.05)', padding: '10px 20px', fontSize: '0.7rem', color: 'var(--luxury-gold)', letterSpacing: '0.1em' }}>
                CONSULTING THE MANIFEST...
              </div>
            )}
          </div>

          {/* Input */}
          <div style={{ padding: '20px', borderTop: '1px solid rgba(212, 175, 55, 0.2)', display: 'flex', gap: '10px' }}>
            <input 
              type="text" 
              placeholder="Ask about your voyage..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend(input)}
              style={{ flex: 1, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(212, 175, 55, 0.2)', color: '#fff', padding: '12px 20px', outline: 'none', fontSize: '0.85rem' }}
            />
            <button 
              onClick={() => handleSend(input)}
              style={{ background: 'var(--luxury-gold)', border: 'none', width: '45px', height: '45px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--luxury-black)', cursor: 'pointer' }}
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ConciergeBot;
