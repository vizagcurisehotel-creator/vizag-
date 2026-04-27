"use client";
import { useState, useEffect } from 'react';
import AdminDashboard from '../../components/AdminDashboard';
import UserAuth from '../../components/UserAuth';
import Link from 'next/link';
import { supabase } from '../../lib/supabase';
import { Loader2, Lock } from 'lucide-react';

export default function AdminPage() {
  const [session, setSession] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [showAuth, setShowAuth] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (loading) {
    return (
      <div style={{ height: '100vh', background: 'var(--luxury-black)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Loader2 className="animate-spin" color="var(--luxury-gold)" size={40} />
      </div>
    );
  }

  if (!session || session.user.email !== 'vizagcurisehotel@gmail.com') {
    return (
      <div style={{ height: '100vh', background: 'var(--luxury-black)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'var(--luxury-white)', textAlign: 'center', padding: '20px' }}>
        <Lock size={48} color="var(--luxury-gold)" style={{ marginBottom: '30px', opacity: 0.5 }} />
        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', marginBottom: '15px' }}>Restricted <span className="gold-text">Access</span></h2>
        <p style={{ color: 'var(--luxury-pearl)', opacity: 0.6, maxWidth: '400px', marginBottom: '40px' }}>
          {session 
            ? `Identity '${session.user.email}' is not authorized for the Command Center.`
            : 'The Command Center is reserved for authorized personnel. Please authenticate to proceed.'}
        </p>
        {!session && (
          <button onClick={() => setShowAuth(true)} className="gold-btn" style={{ padding: '18px 60px' }}>
            AUTHENTICATE
          </button>
        )}
        {session && (
          <button onClick={() => supabase.auth.signOut()} className="outline-btn" style={{ padding: '15px 40px' }}>
            SWITCH ACCOUNT
          </button>
        )}
        <Link href="/" style={{ marginTop: '30px', color: 'var(--luxury-gold)', textDecoration: 'none', fontSize: '0.8rem', letterSpacing: '0.1em' }}>
          RETURN TO VOYAGE
        </Link>
        {showAuth && <UserAuth onClose={() => setShowAuth(false)} onLogin={() => {}} />}
      </div>
    );
  }

  return (
    <>
      <nav style={{ background: 'var(--luxury-black)', padding: '20px 5%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--glass-border)' }}>
        <Link href="/admin" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <img src="/logo.png" alt="" style={{ height: '35px', marginRight: '15px', filter: 'drop-shadow(0 0 5px rgba(212, 175, 55, 0.3))' }} />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', letterSpacing: '0.2em', color: 'var(--luxury-gold)', lineHeight: 1 }}>VIZAG CRUISE</span>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.5rem', letterSpacing: '0.4em', color: 'var(--luxury-pearl)', marginTop: '4px', textTransform: 'uppercase' }}>Admin Control</span>
          </div>
        </Link>
        <button 
          onClick={() => supabase.auth.signOut()}
          style={{ background: 'transparent', border: '1px solid var(--luxury-gold)', color: 'var(--luxury-gold)', padding: '8px 20px', fontSize: '0.7rem', cursor: 'pointer', fontFamily: 'var(--font-heading)' }}
        >
          SECURE LOGOUT
        </button>
      </nav>
      <AdminDashboard />
    </>
  );
}
