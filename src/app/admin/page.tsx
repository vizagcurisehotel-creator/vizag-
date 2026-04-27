import AdminDashboard from '../../components/AdminDashboard';
import Link from 'next/link';

export default function AdminPage() {
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
      </nav>
      <AdminDashboard />
    </>
  );
}
