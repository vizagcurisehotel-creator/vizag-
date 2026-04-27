"use client";
import { useState, useEffect, useRef } from 'react';
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight } from 'lucide-react';

interface CustomDatePickerProps {
  value: string;
  onChange: (date: string) => void;
  label?: string;
  direction?: 'up' | 'down';
}

const CustomDatePicker = ({ value, onChange, label, direction = 'down' }: CustomDatePickerProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date(value || Date.now()));
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const daysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = (year: number, month: number) => new Date(year, month, 1).getDay();

  const handlePrevMonth = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

  const handleNextMonth = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  const handleDateSelect = (day: number) => {
    const y = currentMonth.getFullYear();
    const m = String(currentMonth.getMonth() + 1).padStart(2, '0');
    const d = String(day).padStart(2, '0');
    onChange(`${y}-${m}-${d}`);
    setIsOpen(false);
  };

  const renderCalendar = () => {
    const days = [];
    const totalDays = daysInMonth(currentMonth.getFullYear(), currentMonth.getMonth());
    const startDay = firstDayOfMonth(currentMonth.getFullYear(), currentMonth.getMonth());

    // Empty slots for previous month
    for (let i = 0; i < startDay; i++) {
      days.push(<div key={`empty-${i}`} style={{ padding: '10px' }} />);
    }

    // Actual days
    for (let d = 1; d <= totalDays; d++) {
      const isSelected = value === new Date(currentMonth.getFullYear(), currentMonth.getMonth(), d).toISOString().split('T')[0];
      const isToday = new Date().toDateString() === new Date(currentMonth.getFullYear(), currentMonth.getMonth(), d).toDateString();
      
      days.push(
        <div 
          key={d} 
          onClick={() => handleDateSelect(d)}
          style={{ 
            padding: '10px', 
            textAlign: 'center', 
            cursor: 'pointer',
            color: isSelected ? 'var(--luxury-black)' : 'var(--luxury-white)',
            background: isSelected ? 'var(--luxury-gold)' : 'transparent',
            boxShadow: isSelected ? '0 0 15px rgba(212, 175, 55, 0.4)' : 'none',
            fontWeight: isSelected ? 700 : 400,
            border: isToday ? '1px solid var(--luxury-gold)' : 'none',
            fontSize: '0.8rem',
            transition: 'all 0.2s'
          }}
          className="calendar-day"
        >
          {d}
        </div>
      );
    }
    return days;
  };

  const monthNames = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];

  return (
    <div ref={containerRef} style={{ position: 'relative', width: '100%' }}>
      <style jsx>{`
        .calendar-day:hover {
          background: rgba(212, 175, 55, 0.2) !important;
          color: var(--luxury-gold) !important;
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
      <div 
        onClick={() => setIsOpen(!isOpen)}
        style={{ 
          cursor: 'pointer',
          padding: '10px 0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: '1px solid rgba(212, 175, 55, 0.3)'
        }}
      >
        <span style={{ color: 'var(--luxury-white)', fontSize: '0.9rem' }}>
          {value ? new Date(value).toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' }) : 'Select Date'}
        </span>
        <CalendarIcon size={16} color="var(--luxury-gold)" />
      </div>

      {isOpen && (
        <div style={{ 
          position: 'absolute', 
          ...(direction === 'up' ? { bottom: '100%', marginBottom: '20px' } : { top: '100%', marginTop: '20px' }),
          left: 0, 
          zIndex: 100, 
          background: 'var(--luxury-black)', 
          border: '1px solid var(--luxury-gold)', 
          padding: '20px',
          width: '300px',
          boxShadow: direction === 'up' 
            ? '0 -25px 50px rgba(0,0,0,0.7), 0 0 20px rgba(212, 175, 55, 0.1)' 
            : '0 25px 50px rgba(0,0,0,0.7), 0 0 20px rgba(212, 175, 55, 0.1)',
          animation: direction === 'up' ? 'fadeInUp 0.3s ease' : 'fadeIn 0.3s ease'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '25px' }}>
            <button onClick={handlePrevMonth} style={{ background: 'transparent', border: 'none', color: 'var(--luxury-gold)', cursor: 'pointer', transition: '0.3s' }} onMouseEnter={e => e.currentTarget.style.opacity = '0.5'} onMouseLeave={e => e.currentTarget.style.opacity = '1'}><ChevronLeft size={22} /></button>
            <div style={{ color: 'var(--luxury-white)', fontSize: '0.8rem', letterSpacing: '0.3em', fontWeight: 700, fontFamily: 'var(--font-heading)' }}>
              {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
            </div>
            <button onClick={handleNextMonth} style={{ background: 'transparent', border: 'none', color: 'var(--luxury-gold)', cursor: 'pointer', transition: '0.3s' }} onMouseEnter={e => e.currentTarget.style.opacity = '0.5'} onMouseLeave={e => e.currentTarget.style.opacity = '1'}><ChevronRight size={22} /></button>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '4px' }}>
            {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d, i) => (
              <div key={`${d}-${i}`} style={{ color: 'var(--luxury-gold)', fontSize: '0.7rem', textAlign: 'center', paddingBottom: '12px', opacity: 0.4, fontWeight: 700 }}>{d}</div>
            ))}
            {renderCalendar()}
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomDatePicker;
