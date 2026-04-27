"use client";
import { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const moveCursor = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX - 10}px`;
      cursor.style.top = `${e.clientY - 10}px`;
    };

    const scaleUp = () => {
      cursor.style.transform = 'scale(1.5)';
    };

    const scaleDown = () => {
      cursor.style.transform = 'scale(1)';
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mousedown', scaleUp);
    window.addEventListener('mouseup', scaleDown);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousedown', scaleUp);
      window.removeEventListener('mouseup', scaleDown);
    };
  }, []);

  return (
    <div 
      ref={cursorRef}
      id="custom-cursor"
      style={{ 
        position: 'fixed', 
        width: '20px', 
        height: '20px', 
        border: '1px solid var(--luxury-gold)', 
        borderRadius: '50%', 
        pointerEvents: 'none', 
        zIndex: 9999, 
        mixBlendMode: 'difference',
        transition: 'transform 0.1s ease-out',
        top: -100, // Start off-screen
        left: -100
      }} 
    />
  );
};

export default CustomCursor;
