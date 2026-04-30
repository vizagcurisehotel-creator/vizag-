"use client";
import { useState } from 'react';
import { Calendar } from 'lucide-react';

interface BookNowButtonProps {
  roomType?: string;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  icon?: boolean;
}

const BookNowButton = ({ roomType, className = '', style = {}, children, icon = false }: BookNowButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Generate the URL based on whether a specific room type is provided
  const baseUrl = "https://live.ipms247.com/booking/book-rooms-thevizagcruise";
  // The booking engine might expect specific query params, e.g. ?room=executive
  const url = roomType 
    ? `${baseUrl}?room=${encodeURIComponent(roomType.toLowerCase().replace(/\s+/g, '-'))}`
    : baseUrl;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate a brief loading state before opening the new tab
    setTimeout(() => {
      window.open(url, '_blank', 'noopener,noreferrer');
      setIsLoading(false);
    }, 400);
  };

  const defaultStyle: React.CSSProperties = {
    background: isHovered 
      ? 'linear-gradient(135deg, var(--luxury-gold) 0%, #b8860b 100%)' 
      : 'var(--luxury-gold)',
    color: 'var(--luxury-black)',
    border: 'none',
    padding: '12px 25px',
    fontSize: '0.8rem',
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: '0.15em',
    cursor: isLoading ? 'wait' : 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    textDecoration: 'none',
    transition: 'all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)',
    boxShadow: isHovered 
      ? '0 0 20px rgba(212, 175, 55, 0.6), inset 0 0 10px rgba(255, 255, 255, 0.2)' 
      : '0 0 10px rgba(212, 175, 55, 0.2)',
    transform: isHovered && !isLoading ? 'translateY(-2px)' : 'translateY(0)',
    borderRadius: '4px',
    ...style
  };

  return (
    <a 
      href={url}
      className={`${className} ${isLoading ? 'loading' : ''}`}
      style={defaultStyle}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children || 'Reserve Now'}
      {icon && <Calendar size={14} />}
    </a>
  );
};

export default BookNowButton;
