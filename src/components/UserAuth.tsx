import { useState } from 'react';
import { X, Mail, Lock, User, ArrowRight, Shield, Loader2, Phone } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface UserAuthProps {
  onClose: () => void;
  onLogin: (user: any) => void;
}

const UserAuth = ({ onClose, onLogin }: UserAuthProps) => {
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({ name: '', email: '', password: '', phone: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      if (isLogin) {
        const { data, error } = await supabase.auth.signInWithPassword({
          email: formData.email,
          password: formData.password,
        });
        if (error) throw error;
        onLogin({
          id: data.user.id,
          email: data.user.email,
          name: data.user.user_metadata.name || data.user.email?.split('@')[0],
        });
      } else {
        const { data, error } = await supabase.auth.signUp({
          email: formData.email,
          password: formData.password,
          options: {
            data: {
              name: formData.name,
              phone: formData.phone,
            },
          },
        });
        if (error) throw error;
        if (data.user) {
          onLogin({
            id: data.user.id,
            email: data.user.email,
            name: formData.name,
            phone: formData.phone,
          });
        } else {
          setError('Verification email sent. Please check your inbox.');
          return;
        }
      }
      onClose();
    } catch (err: any) {
      setError(err.message || 'An error occurred during authentication.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(15px)', zIndex: 2000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
      <div className="glass reveal active" style={{ width: '100%', maxWidth: '450px', border: '1px solid var(--luxury-gold)', background: 'var(--luxury-black)', position: 'relative' }}>
        
        <button onClick={onClose} style={{ position: 'absolute', top: '20px', right: '20px', background: 'transparent', border: 'none', color: 'var(--luxury-gold)', cursor: 'pointer' }}>
          <X size={24} />
        </button>

        <div style={{ padding: '60px 50px' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <Shield size={32} color="var(--luxury-gold)" style={{ marginBottom: '20px' }} />
            <h2 style={{ fontSize: '1.8rem', color: 'var(--luxury-white)', fontFamily: 'var(--font-heading)', marginBottom: '10px' }}>
              {isLogin ? 'Welcome Back' : 'Join the Elite'}
            </h2>
            <p style={{ color: 'var(--luxury-pearl)', opacity: 0.6, fontSize: '0.85rem' }}>
              {isLogin ? 'Enter your credentials to access your sanctuary.' : 'Become a member of the Vizag Cruise rewards collection.'}
            </p>
          </div>

          {error && (
            <div style={{ padding: '15px', background: 'rgba(255, 77, 77, 0.1)', border: '1px solid #ff4d4d', color: '#ff4d4d', fontSize: '0.8rem', marginBottom: '25px', textAlign: 'center' }}>
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
            {!isLogin && (
              <>
                <div style={{ borderBottom: '1px solid rgba(212, 175, 55, 0.3)', paddingBottom: '8px' }}>
                  <label style={{ display: 'block', fontSize: '0.6rem', color: 'var(--luxury-gold)', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '8px' }}>Full Name</label>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                    <User size={18} color="var(--luxury-gold)" opacity={0.5} />
                    <input 
                      type="text" 
                      placeholder="E.g. Alexander Pierce" 
                      required 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      style={{ width: '100%', background: 'transparent', border: 'none', color: 'var(--luxury-white)', outline: 'none' }} 
                    />
                  </div>
                </div>

                <div style={{ borderBottom: '1px solid rgba(212, 175, 55, 0.3)', paddingBottom: '8px' }}>
                  <label style={{ display: 'block', fontSize: '0.6rem', color: 'var(--luxury-gold)', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '8px' }}>Phone Number</label>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                    <Phone size={18} color="var(--luxury-gold)" opacity={0.5} />
                    <input 
                      type="tel" 
                      placeholder="+91 00000 00000" 
                      required 
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      style={{ width: '100%', background: 'transparent', border: 'none', color: 'var(--luxury-white)', outline: 'none' }} 
                    />
                  </div>
                </div>
              </>
            )}
            
            <div style={{ borderBottom: '1px solid rgba(212, 175, 55, 0.3)', paddingBottom: '8px' }}>
              <label style={{ display: 'block', fontSize: '0.6rem', color: 'var(--luxury-gold)', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '8px' }}>Private Email</label>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <Mail size={18} color="var(--luxury-gold)" opacity={0.5} />
                <input 
                  type="email" 
                  placeholder="your@email.com" 
                  required 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  style={{ width: '100%', background: 'transparent', border: 'none', color: 'var(--luxury-white)', outline: 'none' }} 
                />
              </div>
            </div>

            <div style={{ borderBottom: '1px solid rgba(212, 175, 55, 0.3)', paddingBottom: '8px' }}>
              <label style={{ display: 'block', fontSize: '0.6rem', color: 'var(--luxury-gold)', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '8px' }}>Secure Password</label>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <Lock size={18} color="var(--luxury-gold)" opacity={0.5} />
                <input 
                  type="password" 
                  placeholder="••••••••" 
                  required 
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                  style={{ width: '100%', background: 'transparent', border: 'none', color: 'var(--luxury-white)', outline: 'none' }} 
                />
              </div>
            </div>

            <button type="submit" disabled={loading} className="gold-btn" style={{ width: '100%', padding: '18px', marginTop: '15px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
              {loading ? <Loader2 className="animate-spin" size={18} /> : (isLogin ? 'SIGN IN' : 'CREATE ACCOUNT')} 
              {!loading && <ArrowRight size={18} />}
            </button>
          </form>

          <div style={{ textAlign: 'center', marginTop: '35px', fontSize: '0.8rem', color: 'var(--luxury-pearl)', opacity: 0.6 }}>
            {isLogin ? "New to the collection?" : "Already a member?"} {' '}
            <button 
              onClick={() => setIsLogin(!isLogin)}
              style={{ background: 'none', border: 'none', color: 'var(--luxury-gold)', fontWeight: 700, cursor: 'pointer', textDecoration: 'underline', textUnderlineOffset: '4px' }}>
              {isLogin ? 'Join Now' : 'Sign In'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};


export default UserAuth;
