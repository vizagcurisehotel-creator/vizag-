"use client";
import { Anchor } from 'lucide-react';

const LoadingScreen = () => {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'var(--luxury-black)', zIndex: 9999, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      
      <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ color: 'var(--luxury-gold)', marginBottom: '30px' }}>
          <Anchor size={60} strokeWidth={1} className="animate-pulse" />
        </div>
        
        <h2 style={{ 
          color: 'var(--luxury-white)', 
          fontSize: '1.5rem', 
          fontFamily: 'var(--font-heading)', 
          letterSpacing: '0.4em', 
          marginBottom: '15px', 
          textTransform: 'uppercase' 
        }}>
          Vizag Cruise
        </h2>
        
        <div style={{ width: '200px', height: '1px', background: 'rgba(212, 175, 55, 0.2)', position: 'relative' }}>
          <div className="luxury-load-bar" style={{ 
            position: 'absolute', 
            top: 0, 
            left: 0, 
            height: '100%', 
            background: 'var(--luxury-gold)', 
            width: '0%' 
          }}></div>
        </div>
        
        <p style={{ 
          color: 'var(--luxury-gold)', 
          fontSize: '0.6rem', 
          marginTop: '20px', 
          letterSpacing: '0.5em', 
          textTransform: 'uppercase',
          opacity: 0.8
        }}>
          Preparing Your Voyage
        </p>
      </div>

      <style jsx>{`
        .luxury-load-bar {
          animation: luxury-load 3s forwards cubic-bezier(0.65, 0, 0.35, 1);
        }
        
        @keyframes luxury-load {
          0% { width: 0%; }
          100% { width: 100%; }
        }

        .animate-pulse {
          animation: pulse 2s infinite ease-in-out;
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.05); }
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;
