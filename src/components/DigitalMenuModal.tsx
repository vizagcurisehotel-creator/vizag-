"use client";
import { useState, useRef, useEffect } from 'react';
import { X, Search, ChevronRight, Utensils, Sparkles, Coffee, IceCream, Pizza } from 'lucide-react';
import { menuData } from '../lib/menuData';

const DigitalMenuModal = ({ onClose }: { onClose: () => void }) => {
  const [activeCategory, setActiveCategory] = useState(menuData.categories[0].name);
  const [searchQuery, setSearchQuery] = useState('');
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const filteredCategories = menuData.categories.map(cat => ({
    ...cat,
    items: cat.items.filter(item => 
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(cat => cat.items.length > 0);

  const handleCategoryClick = (name: string) => {
    setActiveCategory(name);
    const element = document.getElementById(`category-${name}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const getCategoryIcon = (name: string) => {
    if (name.includes('Veg')) return <Sparkles size={14} />;
    if (name.includes('Non-Veg')) return <Utensils size={14} />;
    if (name.includes('Mocktails') || name.includes('Beverages')) return <Coffee size={14} />;
    if (name.includes('Ice Creams') || name.includes('Waffles')) return <IceCream size={14} />;
    if (name.includes('Noodles') || name.includes('Rice')) return <Pizza size={14} />;
    return <Utensils size={14} />;
  };

  return (
    <div 
      className="animate-fade-in"
      style={{ 
        position: 'fixed', 
        inset: 0, 
        zIndex: 10000, 
        background: 'rgba(5, 5, 5, 0.98)', 
        backdropFilter: 'blur(20px)',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <style jsx>{`
        .menu-grid {
          display: grid;
          grid-template-columns: 320px 1fr;
          height: 100%;
          overflow: hidden;
        }
        .category-sidebar {
          border-right: 1px solid var(--glass-border);
          padding: 40px 20px;
          overflow-y: auto;
          background: rgba(255,255,255,0.02);
        }
        .category-sidebar::-webkit-scrollbar { width: 4px; }
        .category-sidebar::-webkit-scrollbar-thumb { background: var(--glass-border); }
        
        .menu-content {
          padding: 60px 10%;
          overflow-y: auto;
          scroll-behavior: smooth;
        }
        .menu-content::-webkit-scrollbar { width: 6px; }
        .menu-content::-webkit-scrollbar-thumb { background: var(--luxury-gold-muted); }

        .category-btn {
          width: 100%;
          text-align: left;
          padding: 18px 25px;
          margin-bottom: 8px;
          background: transparent;
          border: 1px solid transparent;
          color: var(--luxury-pearl);
          font-size: 0.75rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          display: flex;
          align-items: center;
          gap: 15px;
          opacity: 0.5;
        }
        .category-btn:hover {
          opacity: 0.8;
          background: rgba(255,255,255,0.03);
          padding-left: 30px;
        }
        .category-btn.active {
          background: rgba(212, 175, 55, 0.08);
          color: var(--luxury-gold);
          opacity: 1;
          border-right: 2px solid var(--luxury-gold);
          padding-left: 30px;
        }
        .menu-item {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          padding: 25px 0;
          border-bottom: 1px solid rgba(255,255,255,0.03);
          transition: all 0.4s ease;
        }
        .menu-item:hover {
          padding-left: 15px;
          background: rgba(255,255,255,0.02);
        }
        @media (max-width: 1024px) {
          .menu-grid { grid-template-columns: 1fr; }
          .category-sidebar { display: none; }
          .menu-content { padding: 40px 5%; }
        }
      `}</style>

      {/* Header */}
      <div style={{ 
        padding: '25px 5%', 
        borderBottom: '1px solid var(--glass-border)', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        background: 'rgba(10,10,10,0.95)',
        zIndex: 100
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '30px', flexWrap: 'wrap' }}>
          <div>
            <div style={{ color: 'var(--luxury-gold)', fontSize: '0.6rem', letterSpacing: '0.4em', textTransform: 'uppercase', marginBottom: '5px' }}>The Admiral's Gastronomy</div>
            <h2 style={{ fontSize: '1.8rem', fontFamily: 'var(--font-heading)', color: '#fff', letterSpacing: '0.05em' }}>
              DIGITAL <span className="gold-text">MENU</span>
            </h2>
          </div>
          <div style={{ position: 'relative' }}>
            <Search size={16} style={{ position: 'absolute', left: '18px', top: '50%', transform: 'translateY(-50%)', color: 'var(--luxury-gold)', opacity: 0.7 }} />
            <input 
              type="text" 
              placeholder="Search for a signature dish..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{ 
                padding: '15px 25px 15px 55px', 
                background: 'rgba(0,0,0,0.3)', 
                border: '1px solid var(--glass-border)', 
                color: '#fff', 
                fontSize: '0.85rem',
                outline: 'none',
                width: '350px',
                borderRadius: '0',
                transition: 'border-color 0.3s ease'
              }}
              onFocus={(e) => e.target.style.borderColor = 'var(--luxury-gold)'}
              onBlur={(e) => e.target.style.borderColor = 'var(--glass-border)'}
            />
          </div>
        </div>
        <button 
          onClick={onClose}
          style={{ 
            background: 'rgba(212, 175, 55, 0.1)', 
            border: '1px solid var(--luxury-gold-muted)', 
            color: 'var(--luxury-gold)', 
            cursor: 'pointer',
            width: '50px',
            height: '50px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: '0.3s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.background = 'var(--luxury-gold)'}
          onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(212, 175, 55, 0.1)'}
        >
          <X size={24} />
        </button>
      </div>

      <div className="menu-grid">
        {/* Sidebar */}
        <div className="category-sidebar">
          {menuData.categories.map((cat) => (
            <button 
              key={cat.name}
              className={`category-btn ${activeCategory === cat.name ? 'active' : ''}`}
              onClick={() => handleCategoryClick(cat.name)}
            >
              {getCategoryIcon(cat.name)}
              {cat.name}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="menu-content" ref={scrollContainerRef}>
          {filteredCategories.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '100px 0' }}>
              <p style={{ color: 'var(--luxury-pearl)', opacity: 0.5 }}>No dishes found matching your search.</p>
            </div>
          ) : (
            filteredCategories.map((cat) => (
              <div key={cat.name} id={`category-${cat.name}`} style={{ marginBottom: '80px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '40px' }}>
                  <h3 style={{ fontSize: '1.8rem', fontFamily: 'var(--font-heading)', color: 'var(--luxury-gold)', whiteSpace: 'nowrap' }}>
                    {cat.name}
                  </h3>
                  <div style={{ flex: 1, height: '1px', background: 'linear-gradient(to right, var(--luxury-gold-muted), transparent)' }} />
                </div>
                
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))', gap: '0 60px' }}>
                  {cat.items.map((item) => (
                    <div key={item.id} className="menu-item">
                      <div style={{ flex: 1 }}>
                        <h4 style={{ fontSize: '1.1rem', color: 'var(--luxury-white)', marginBottom: '5px' }}>{item.name}</h4>
                        <div style={{ fontSize: '0.7rem', color: 'var(--luxury-gold)', opacity: 0.6, letterSpacing: '0.1em' }}>SIGNATURE DISH</div>
                      </div>
                      <div style={{ flex: 1, borderBottom: '1px dotted rgba(255,255,255,0.1)', margin: '0 15px', marginBottom: '8px' }} />
                      <div style={{ fontSize: '1rem', fontFamily: 'var(--font-heading)', color: 'var(--luxury-gold)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                        Bespoke
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Footer Decoration */}
      <div style={{ 
        padding: '20px 5%', 
        borderTop: '1px solid var(--glass-border)', 
        textAlign: 'center',
        background: 'rgba(5,5,5,0.8)'
      }}>
        <div style={{ color: 'var(--luxury-pearl)', opacity: 0.4, fontSize: '0.65rem', letterSpacing: '0.3em', textTransform: 'uppercase' }}>
          Menu curated daily • Final arrangements curated by your steward
        </div>
      </div>
    </div>
  );
};

export default DigitalMenuModal;
