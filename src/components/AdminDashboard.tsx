"use client";
import { useState, useEffect } from 'react';
import { LayoutDashboard, Users, Calendar, DollarSign, Settings, Plus, Trash2, Hotel, Loader2, CheckCircle, Clock, X, Sparkles, TrendingUp, Edit2, Image as ImageIcon } from 'lucide-react';
import { Room, Booking, EventInquiry } from '../lib/db';

const GALLERY_IMAGES = [
  'https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=1000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?q=80&w=1000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1000&auto=format&fit=crop'
];

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'rooms' | 'bookings' | 'dining' | 'events'>('dashboard');
  const [rooms, setRooms] = useState<Room[]>([]);
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [tableBookings, setTableBookings] = useState<any[]>([]);
  const [eventInquiries, setEventInquiries] = useState<EventInquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  
  const [editingRoom, setEditingRoom] = useState<Room | null>(null);
  const [newRoom, setNewRoom] = useState({
    name: '',
    size: '',
    sqft: '',
    adults: 2,
    children: 2,
    bed: '1 King Bed',
    price: 0,
    originalPrice: 0,
    images: [] as string[],
    count: 1,
    amenities: [] as string[]
  });

  const fetchData = async () => {
    setLoading(true);
    try {
      console.log("Fetching latest data from Supabase...");
      const [roomsRes, bookingsRes, tableBookingsRes, eventInquiriesRes] = await Promise.all([
        fetch('/api/rooms', { cache: 'no-store' }),
        fetch('/api/bookings', { cache: 'no-store' }),
        fetch('/api/table-bookings', { cache: 'no-store' }),
        fetch('/api/event-inquiries', { cache: 'no-store' })
      ]);

      const roomsData = await roomsRes.json();
      const bookingsData = await bookingsRes.json();
      const tableBookingsData = await tableBookingsRes.json();
      const eventInquiriesData = await eventInquiriesRes.json();
      
      if (roomsRes.ok && Array.isArray(roomsData)) {
        console.log("Rooms loaded successfully:", roomsData.length);
        setRooms(roomsData);
      } else {
        console.error("Failed to load rooms:", roomsData);
      }

      if (bookingsRes.ok && Array.isArray(bookingsData)) setBookings(bookingsData);
      if (tableBookingsRes.ok && Array.isArray(tableBookingsData)) setTableBookings(tableBookingsData);
      if (eventInquiriesRes.ok && Array.isArray(eventInquiriesData)) setEventInquiries(eventInquiriesData);
    } catch (error) {
      console.error("CRITICAL: Failed to fetch admin data", error);
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    fetchData();
  }, []);

  const handleSaveRoom = async (e: React.FormEvent) => {
    e.preventDefault();
    const method = editingRoom ? 'PUT' : 'POST';
    
    // Create a clean payload with correct types
    const data = editingRoom ? { ...editingRoom } : { ...newRoom };
    const payload = {
      id: editingRoom?.id,
      name: data.name,
      size: data.size,
      sqft: data.sqft,
      adults: data.adults,
      children: data.children,
      bed: data.bed,
      price: data.price,
      originalPrice: (data as any).originalPrice || (data as any).original_price,
      images: data.images,
      count: data.count,
      amenities: data.amenities
    };

    try {
      const response = await fetch('/api/rooms', {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (response.ok) {
        fetchData();
        setEditingRoom(null);
        setNewRoom({ name: '', size: '', sqft: '', adults: 2, children: 2, bed: '1 King Bed', price: 0, originalPrice: 0, images: [], count: 1, amenities: [] });
      } else {
        const err = await response.json();
        console.error("Save failed:", err);
      }
    } catch (error) {
      console.error("Error saving room", error);
    }
  };

  const handleDeleteRoom = async (id: string) => {
    if (!confirm('Are you sure you want to delete this room?')) return;
    try {
      const response = await fetch(`/api/rooms?id=${id}`, { method: 'DELETE' });
      if (response.ok) fetchData();
    } catch (error) {
      console.error("Error deleting room", error);
    }
  };

  const handleDeleteTableBooking = async (id: string) => {
    if (!confirm('Are you sure you want to cancel this table reservation?')) return;
    try {
      const response = await fetch(`/api/table-bookings?id=${id}`, { method: 'DELETE' });
      if (response.ok) fetchData();
    } catch (error) {
      console.error("Error deleting table booking", error);
    }
  };

  const handleDeleteEventInquiry = async (id: string) => {
    if (!confirm('Are you sure you want to remove this inquiry?')) return;
    try {
      const response = await fetch(`/api/event-inquiries?id=${id}`, { method: 'DELETE' });
      if (response.ok) fetchData();
    } catch (error) {
      console.error("Error deleting event inquiry", error);
    }
  };

  const totalRevenue = bookings.reduce((sum, b) => sum + b.total_price, 0);
  const activeBookings = bookings.filter(b => b.status === 'Confirmed').length;
  
  const stats = [
    { title: 'Total Bookings', value: bookings.length.toString(), icon: <Calendar size={20} />, color: '#fff' },
    { title: 'Revenue', value: `₹${totalRevenue.toLocaleString()}`, icon: <TrendingUp size={20} />, color: 'var(--luxury-gold)' },
    { title: 'Active Bookings', value: activeBookings.toString(), icon: <CheckCircle size={20} />, color: '#4caf50' },
    { title: 'Total Rooms', value: rooms.length.toString(), icon: <Hotel size={20} />, color: '#2196f3' },
  ];

  return (
    <div id="admin" style={{ padding: '60px 5%', background: 'var(--luxury-black)', minHeight: '100vh', color: 'var(--luxury-white)' }}>
      <style jsx>{`
        @media (max-width: 1024px) {
          .admin-grid { grid-template-columns: 1fr !important; }
          .tabs-container { overflow-x: auto !important; padding-bottom: 5px !important; }
          .admin-table th:nth-child(2), .admin-table td:nth-child(2),
          .admin-table th:nth-child(3), .admin-table td:nth-child(3) { display: none !important; }
          .admin-header { flex-direction: column !important; align-items: flex-start !important; }
          .stat-card { padding: 25px !important; }
        }
      `}</style>
      
      {/* ── Header & Tabs ──────────────────────────── */}
      <div className="admin-header" style={{ marginBottom: '60px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '30px' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--luxury-gold)', fontSize: '0.7rem', letterSpacing: '0.4em', textTransform: 'uppercase', marginBottom: '15px' }}>
            <Sparkles size={14} /> Operations Elite
          </div>
          <h2 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-heading)', color: 'var(--luxury-white)' }}>The Command <span className="gold-text">Center</span></h2>
        </div>
        
        <div className="tabs-container" style={{ display: 'flex', gap: '10px', background: 'rgba(255,255,255,0.05)', padding: '6px', borderRadius: '2px', border: '1px solid var(--glass-border)' }}>
          {(['dashboard', 'rooms', 'bookings', 'dining', 'events'] as const).map((tab) => (
            <button 
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{ 
                padding: '12px 24px', 
                border: 'none', 
                background: activeTab === tab ? 'var(--luxury-gold)' : 'transparent', 
                color: activeTab === tab ? 'var(--luxury-black)' : 'var(--luxury-pearl)', 
                cursor: 'pointer', 
                fontWeight: 700, 
                fontSize: '0.7rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                transition: '0.4s cubic-bezier(0.4, 0, 0.2, 1)' 
              }}
            >{tab}</button>
          ))}
        </div>
      </div>

      {loading ? (
        <div style={{ display: 'flex', justifyContent: 'center', padding: '100px 0' }}>
          <Loader2 className="animate-spin" size={40} color="var(--luxury-gold)" />
        </div>
      ) : (
        <div className="reveal active">
          
          {activeTab === 'dashboard' && (
            <div style={{ animation: 'fadeIn 0.8s ease-out' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '25px', marginBottom: '50px' }}>
                {stats.map((stat, i) => (
                  <div key={i} className="glass stat-card" style={{ padding: '35px', position: 'relative', overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', top: '20px', right: '20px', color: stat.color, opacity: 0.3 }}>
                      {stat.icon}
                    </div>
                    <p style={{ color: 'var(--luxury-pearl)', opacity: 0.6, marginBottom: '15px', fontSize: '0.7rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '2px' }}>{stat.title}</p>
                    <h3 style={{ fontSize: '2.2rem', color: stat.title === 'Revenue' ? 'var(--luxury-gold)' : 'var(--luxury-white)', fontFamily: 'var(--font-heading)' }}>{stat.value}</h3>
                  </div>
                ))}
              </div>

              <div className="glass" style={{ padding: '40px' }}>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '30px', fontFamily: 'var(--font-heading)', color: 'var(--luxury-gold)', letterSpacing: '0.1em' }}>Recent Intelligence</h3>
                <div style={{ textAlign: 'center', padding: '60px 0' }}>
                  <Clock size={48} color="var(--luxury-gold)" style={{ marginBottom: '20px', opacity: 0.5 }} />
                  <p style={{ color: 'var(--luxury-pearl)', opacity: 0.6, letterSpacing: '0.05em' }}>Real-time updates are active. All systems reporting optimal performance.</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'rooms' && (
            <div className="admin-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 400px', gap: '40px', alignItems: 'start' }}>
              
              <div className="glass" style={{ padding: '40px' }}>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '30px', fontFamily: 'var(--font-heading)', color: 'var(--luxury-gold)' }}>Fleet Inventory</h3>
                <div style={{ overflowX: 'auto' }}>
                  <table className="admin-table" style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                    <thead>
                      <tr style={{ borderBottom: '1px solid var(--glass-border)', color: 'var(--luxury-pearl)', opacity: 0.5, textTransform: 'uppercase', fontSize: '0.65rem', letterSpacing: '2px' }}>
                        <th style={{ padding: '20px' }}>Designation</th>
                        <th style={{ padding: '20px' }}>Capacity</th>
                        <th style={{ padding: '20px' }}>Fleet Size</th>
                        <th style={{ padding: '20px' }}>Investment</th>
                        <th style={{ padding: '20px' }}>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {rooms.map((room) => (
                        <tr key={room.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                          <td style={{ padding: '20px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                              <img src={room.images?.[0] || GALLERY_IMAGES[0]} alt="" style={{ width: '60px', height: '45px', objectFit: 'cover', border: '1px solid var(--glass-border)' }} />
                              <div>
                                <div style={{ fontWeight: 600, color: 'var(--luxury-white)', fontSize: '1rem' }}>{room.name}</div>
                                <div style={{ fontSize: '0.75rem', color: 'var(--luxury-pearl)', opacity: 0.5 }}>{room.sqft} • {room.bed}</div>
                              </div>
                            </div>
                          </td>
                          <td style={{ padding: '20px', color: 'var(--luxury-pearl)', fontSize: '0.9rem' }}>{room.adults}A | {room.children}C</td>
                          <td style={{ padding: '20px', color: 'var(--luxury-gold)', fontWeight: 700 }}>{room.count || 1}</td>
                          <td style={{ padding: '20px', color: 'var(--luxury-white)', fontWeight: 600 }}>₹{room.price.toLocaleString()}</td>
                          <td style={{ padding: '20px', display: 'flex', gap: '10px' }}>
                            <button 
                              onClick={() => setEditingRoom(room)}
                              style={{ background: 'transparent', color: 'var(--luxury-gold)', border: '1px solid var(--luxury-gold)', padding: '10px', cursor: 'pointer', transition: '0.3s' }}
                            >
                              <Edit2 size={16} />
                            </button>
                            <button 
                              onClick={() => handleDeleteRoom(room.id)}
                              style={{ background: 'transparent', color: '#ff4d4d', border: '1px solid #ff4d4d', padding: '10px', cursor: 'pointer', transition: '0.3s' }}
                            >
                              <Trash2 size={16} />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="glass" style={{ padding: '35px' }}>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '30px', fontFamily: 'var(--font-heading)', color: 'var(--luxury-gold)', display: 'flex', alignItems: 'center', gap: '12px' }}>
                  {editingRoom ? <Edit2 size={20} /> : <Plus size={20} />} 
                  {editingRoom ? 'Refine Suite Intelligence' : 'Commission New Suite'}
                </h3>
                <form onSubmit={handleSaveRoom} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <input 
                    placeholder="Suite Designation" 
                    required
                    value={editingRoom ? editingRoom.name : newRoom.name}
                    onChange={e => editingRoom ? setEditingRoom({...editingRoom, name: e.target.value}) : setNewRoom({...newRoom, name: e.target.value})}
                    style={{ width: '100%', padding: '15px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--glass-border)', color: '#fff', outline: 'none' }} 
                  />
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                    <input placeholder="Sqft (e.g. 550)" required value={editingRoom ? (editingRoom.sqft || '') : (newRoom.sqft || '')} onChange={e => editingRoom ? setEditingRoom({...editingRoom, sqft: e.target.value}) : setNewRoom({...newRoom, sqft: e.target.value})} style={{ padding: '15px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--glass-border)', color: '#fff', outline: 'none' }} />
                    <input placeholder="Bed Type" required value={editingRoom ? (editingRoom.bed || '') : (newRoom.bed || '')} onChange={e => editingRoom ? setEditingRoom({...editingRoom, bed: e.target.value}) : setNewRoom({...newRoom, bed: e.target.value})} style={{ padding: '15px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--glass-border)', color: '#fff', outline: 'none' }} />
                  </div>
                  
                  {/* Pricing Section */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                    <div>
                      <label style={{ fontSize: '0.6rem', color: 'var(--luxury-pearl)', opacity: 0.5, textTransform: 'uppercase', marginBottom: '5px', display: 'block' }}>MRP (Original Price)</label>
                      <input type="number" placeholder="₹ MRP" value={editingRoom ? (editingRoom.original_price || '') : (newRoom.originalPrice || '')} onChange={e => editingRoom ? setEditingRoom({...editingRoom, original_price: parseInt(e.target.value)}) : setNewRoom({...newRoom, originalPrice: parseInt(e.target.value)})} style={{ width: '100%', padding: '15px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--glass-border)', color: '#fff', outline: 'none' }} />
                    </div>
                    <div>
                      <label style={{ fontSize: '0.6rem', color: 'var(--luxury-gold)', textTransform: 'uppercase', marginBottom: '5px', display: 'block' }}>Discounted Price</label>
                      <input type="number" placeholder="₹ Selling" required value={editingRoom ? (editingRoom.price || '') : (newRoom.price || '')} onChange={e => editingRoom ? setEditingRoom({...editingRoom, price: parseInt(e.target.value)}) : setNewRoom({...newRoom, price: parseInt(e.target.value)})} style={{ width: '100%', padding: '15px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--glass-border)', color: '#fff', outline: 'none' }} />
                    </div>
                  </div>

                  {/* Photo Management */}
                  <div style={{ padding: '20px', background: 'rgba(0,0,0,0.2)', border: '1px solid var(--glass-border)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                      <p style={{ fontSize: '0.7rem', color: 'var(--luxury-gold)', display: 'flex', alignItems: 'center', gap: '8px', margin: 0 }}><ImageIcon size={14} /> Suite Gallery</p>
                      <button 
                        type="button" 
                        onClick={() => editingRoom ? setEditingRoom({...editingRoom, images: []}) : setNewRoom({...newRoom, images: []})}
                        style={{ background: 'transparent', border: 'none', color: '#ff4d4d', fontSize: '0.6rem', cursor: 'pointer', textTransform: 'uppercase', letterSpacing: '1px' }}
                      >
                        Clear All
                      </button>
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '15px' }}>
                      {(editingRoom ? editingRoom.images : newRoom.images).map((img, idx) => (
                        <div key={idx} style={{ position: 'relative' }}>
                          <img src={img} alt="" style={{ width: '60px', height: '60px', objectFit: 'cover', border: '1px solid var(--luxury-gold-muted)' }} />
                          <button 
                            type="button"
                            onClick={() => {
                              if (editingRoom) {
                                setEditingRoom({...editingRoom, images: editingRoom.images.filter((_, i) => i !== idx)});
                              } else {
                                setNewRoom({...newRoom, images: newRoom.images.filter((_, i) => i !== idx)});
                              }
                            }}
                            style={{ position: 'absolute', top: '-5px', right: '-5px', background: '#ff4d4d', color: '#fff', border: 'none', borderRadius: '50%', width: '18px', height: '18px', fontSize: '10px', cursor: 'pointer' }}
                          >
                            <X size={10} />
                          </button>
                        </div>
                      ))}
                    </div>
                    <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                      <label 
                        className="outline-btn" 
                        style={{ flex: 1, padding: '10px', fontSize: '0.7rem', textAlign: 'center', cursor: uploading ? 'not-allowed' : 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', opacity: uploading ? 0.5 : 1 }}
                      >
                        {uploading ? <Loader2 size={14} className="animate-spin" /> : <Plus size={14} />} 
                        {uploading ? 'UPLOADING...' : 'Upload JPEG/PNG'}
                        <input 
                          type="file" 
                          accept="image/jpeg,image/png" 
                          disabled={uploading}
                          style={{ display: 'none' }} 
                          onChange={async (e) => {
                            const file = e.target.files?.[0];
                            if (!file) return;

                            // 1. Create an instant local preview
                            const localPreview = URL.createObjectURL(file);
                            
                            if (editingRoom) {
                              setEditingRoom(prev => prev ? ({ ...prev, images: [localPreview, ...(prev.images || [])] }) : null);
                            } else {
                              setNewRoom(prev => ({ ...prev, images: [localPreview, ...prev.images] }));
                            }

                            setUploading(true);
                            const formData = new FormData();
                            formData.append('file', file);

                            try {
                              const res = await fetch('/api/upload', {
                                method: 'POST',
                                body: formData
                              });
                              const data = await res.json();
                              
                              if (data.url) {
                                // 2. Replace the local preview with the real Supabase URL
                                if (editingRoom) {
                                  setEditingRoom(prev => {
                                    if (!prev) return null;
                                    const filtered = prev.images.filter(img => img !== localPreview);
                                    return { ...prev, images: [data.url, ...filtered] };
                                  });
                                } else {
                                  setNewRoom(prev => {
                                    const filtered = prev.images.filter(img => img !== localPreview);
                                    return { ...prev, images: [data.url, ...filtered] };
                                  });
                                }
                              }
                            } catch (err) {
                              console.error("Upload failed", err);
                              // Remove the broken local preview on failure
                              if (editingRoom) {
                                setEditingRoom(prev => prev ? ({ ...prev, images: prev.images.filter(img => img !== localPreview) }) : null);
                              } else {
                                setNewRoom(prev => ({ ...prev, images: prev.images.filter(img => img !== localPreview) }));
                              }
                              alert("Upload failed. Please check your Supabase Storage settings.");
                            } finally {
                              setUploading(false);
                              URL.revokeObjectURL(localPreview); // Clean up memory
                            }
                          }}
                        />
                      </label>
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                    <input type="number" placeholder="Adults" required value={editingRoom ? (editingRoom.adults || 0) : (newRoom.adults || 0)} onChange={e => editingRoom ? setEditingRoom({...editingRoom, adults: parseInt(e.target.value)}) : setNewRoom({...newRoom, adults: parseInt(e.target.value)})} style={{ padding: '15px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--glass-border)', color: '#fff', outline: 'none' }} />
                    <input type="number" placeholder="Children" required value={editingRoom ? (editingRoom.children || 0) : (newRoom.children || 0)} onChange={e => editingRoom ? setEditingRoom({...editingRoom, children: parseInt(e.target.value)}) : setNewRoom({...newRoom, children: parseInt(e.target.value)})} style={{ padding: '15px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--glass-border)', color: '#fff', outline: 'none' }} />
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                    <label style={{ fontSize: '0.8rem', color: 'var(--luxury-pearl)', opacity: 0.6 }}>Fleet Quantity:</label>
                    <input type="number" required value={editingRoom ? (editingRoom.count || 0) : (newRoom.count || 0)} onChange={e => editingRoom ? setEditingRoom({...editingRoom, count: parseInt(e.target.value)}) : setNewRoom({...newRoom, count: parseInt(e.target.value)})} style={{ width: '80px', padding: '15px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--glass-border)', color: '#fff', outline: 'none' }} />
                  </div>
                  
                  <div style={{ display: 'flex', gap: '10px' }}>
                    <button type="submit" className="gold-btn" style={{ flex: 2, padding: '18px' }}>
                      {editingRoom ? 'UPDATE SUITE DESIGN' : 'DEPLOY SUITE TYPE'}
                    </button>
                    {editingRoom && (
                      <button type="button" onClick={() => setEditingRoom(null)} className="outline-btn" style={{ flex: 1 }}>
                        CANCEL
                      </button>
                    )}
                  </div>
                </form>
              </div>

            </div>
          )}

          {activeTab === 'bookings' && (
            <div className="glass" style={{ padding: '40px' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '30px', fontFamily: 'var(--font-heading)', color: 'var(--luxury-gold)' }}>Voyage Manifest</h3>
              <div style={{ overflowX: 'auto' }}>
                <table className="admin-table" style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                  <thead>
                    <tr style={{ borderBottom: '1px solid var(--glass-border)', color: 'var(--luxury-pearl)', opacity: 0.5, textTransform: 'uppercase', fontSize: '0.65rem', letterSpacing: '2px' }}>
                      <th style={{ padding: '20px' }}>Guest Identity</th>
                      <th style={{ padding: '20px' }}>Sanctuary</th>
                      <th style={{ padding: '20px' }}>Voyage Window</th>
                      <th style={{ padding: '20px' }}>Gross Revenue</th>
                      <th style={{ padding: '20px' }}>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bookings.length === 0 ? (
                      <tr>
                        <td colSpan={5} style={{ padding: '60px', textAlign: 'center', color: 'var(--luxury-pearl)', opacity: 0.5 }}>No active voyages documented in current manifest.</td>
                      </tr>
                    ) : (
                      bookings.map((booking) => (
                        <tr key={booking.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                          <td style={{ padding: '20px' }}>
                            <div style={{ fontWeight: 600, color: 'var(--luxury-white)', fontSize: '1rem' }}>{booking.guest_name}</div>
                            <div style={{ fontSize: '0.75rem', color: 'var(--luxury-pearl)', opacity: 0.5 }}>{booking.guest_email}</div>
                          </td>
                          <td style={{ padding: '20px', color: 'var(--luxury-pearl)' }}>{booking.room_name}</td>
                          <td style={{ padding: '20px', color: 'var(--luxury-white)' }}>
                            <div style={{ fontSize: '0.9rem' }}>{new Date(booking.check_in).toLocaleDateString()} — {new Date(booking.check_out).toLocaleDateString()}</div>
                          </td>
                          <td style={{ padding: '20px', fontWeight: 600, color: 'var(--luxury-gold)' }}>₹{booking.total_price.toLocaleString()}</td>
                          <td style={{ padding: '20px' }}>
                            <span style={{ padding: '8px 16px', border: '1px solid var(--luxury-gold)', color: 'var(--luxury-gold)', fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>
                              {booking.status}
                            </span>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'dining' && (
            <div className="glass" style={{ padding: '40px' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '30px', fontFamily: 'var(--font-heading)', color: 'var(--luxury-gold)' }}>Dining Manifest</h3>
              <div style={{ overflowX: 'auto' }}>
                <table className="admin-table" style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                  <thead>
                    <tr style={{ borderBottom: '1px solid var(--glass-border)', color: 'var(--luxury-pearl)', opacity: 0.5, textTransform: 'uppercase', fontSize: '0.65rem', letterSpacing: '2px' }}>
                      <th style={{ padding: '20px' }}>Guest Identity</th>
                      <th style={{ padding: '20px' }}>Party Size</th>
                      <th style={{ padding: '20px' }}>Reservation Window</th>
                      <th style={{ padding: '20px' }}>Status</th>
                      <th style={{ padding: '20px' }}>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableBookings.length === 0 ? (
                      <tr>
                        <td colSpan={5} style={{ padding: '60px', textAlign: 'center', color: 'var(--luxury-pearl)', opacity: 0.5 }}>No dining reservations documented in current manifest.</td>
                      </tr>
                    ) : (
                      tableBookings.map((booking) => (
                        <tr key={booking.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                          <td style={{ padding: '20px' }}>
                            <div style={{ fontWeight: 600, color: 'var(--luxury-white)', fontSize: '1rem' }}>{booking.guest_name}</div>
                            <div style={{ fontSize: '0.75rem', color: 'var(--luxury-pearl)', opacity: 0.5 }}>{booking.guest_email}</div>
                          </td>
                          <td style={{ padding: '20px', color: 'var(--luxury-gold)', fontWeight: 700 }}>{booking.guests} Guests</td>
                          <td style={{ padding: '20px', color: 'var(--luxury-white)' }}>
                            <div style={{ fontSize: '0.9rem' }}>{new Date(booking.date).toLocaleDateString()} @ {booking.time}</div>
                          </td>
                          <td style={{ padding: '20px' }}>
                            <span style={{ padding: '8px 16px', border: '1px solid var(--luxury-gold)', color: 'var(--luxury-gold)', fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>
                              {booking.status}
                            </span>
                          </td>
                          <td style={{ padding: '20px' }}>
                            <button 
                              onClick={() => handleDeleteTableBooking(booking.id)}
                              style={{ background: 'transparent', color: '#ff4d4d', border: '1px solid #ff4d4d', padding: '10px', cursor: 'pointer', transition: '0.3s' }}
                            >
                              <Trash2 size={16} />
                            </button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'events' && (
            <div className="glass" style={{ padding: '40px' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '30px', fontFamily: 'var(--font-heading)', color: 'var(--luxury-gold)' }}>Event Intelligence</h3>
              <div style={{ overflowX: 'auto' }}>
                <table className="admin-table" style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                  <thead>
                    <tr style={{ borderBottom: '1px solid var(--glass-border)', color: 'var(--luxury-pearl)', opacity: 0.5, textTransform: 'uppercase', fontSize: '0.65rem', letterSpacing: '2px' }}>
                      <th style={{ padding: '20px' }}>Lead Identity</th>
                      <th style={{ padding: '20px' }}>Event Profile</th>
                      <th style={{ padding: '20px' }}>Guest Forecast</th>
                      <th style={{ padding: '20px' }}>Preferred Date</th>
                      <th style={{ padding: '20px' }}>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {eventInquiries.length === 0 ? (
                      <tr>
                        <td colSpan={5} style={{ padding: '60px', textAlign: 'center', color: 'var(--luxury-pearl)', opacity: 0.5 }}>No event inquiries documented in current manifest.</td>
                      </tr>
                    ) : (
                      eventInquiries.map((inquiry) => (
                        <tr key={inquiry.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                          <td style={{ padding: '20px' }}>
                            <div style={{ fontWeight: 600, color: 'var(--luxury-white)', fontSize: '1rem' }}>{inquiry.name}</div>
                            <div style={{ fontSize: '0.75rem', color: 'var(--luxury-pearl)', opacity: 0.5 }}>{inquiry.email}</div>
                          </td>
                          <td style={{ padding: '20px', color: 'var(--luxury-pearl)' }}>
                            <span style={{ padding: '4px 10px', background: 'rgba(212, 175, 55, 0.1)', border: '1px solid var(--luxury-gold-muted)', color: 'var(--luxury-gold)', fontSize: '0.7rem', textTransform: 'uppercase' }}>
                              {inquiry.event_type}
                            </span>
                          </td>
                          <td style={{ padding: '20px', color: 'var(--luxury-white)', fontWeight: 600 }}>{inquiry.guests} Guests</td>
                          <td style={{ padding: '20px', color: 'var(--luxury-pearl)' }}>
                            <div style={{ fontSize: '0.9rem' }}>{new Date(inquiry.date).toLocaleDateString()}</div>
                          </td>
                          <td style={{ padding: '20px' }}>
                            <button 
                              onClick={() => handleDeleteEventInquiry(inquiry.id)}
                              style={{ background: 'transparent', color: '#ff4d4d', border: '1px solid #ff4d4d', padding: '10px', cursor: 'pointer', transition: '0.3s' }}
                            >
                              <Trash2 size={16} />
                            </button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      )}

    </div>
  );
};

export default AdminDashboard;
