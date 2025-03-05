
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface TopLoadingBarProps {
  color?: string;
  height?: number;
}

const TopLoadingBar: React.FC<TopLoadingBarProps> = ({ 
  color = '#B90204', 
  height = 4
}) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Start loading animation when route changes
    setIsVisible(true);
    setProgress(30);
    
    const timer1 = setTimeout(() => setProgress(60), 300);
    const timer2 = setTimeout(() => setProgress(80), 400);
    const timer3 = setTimeout(() => {
      setProgress(100);
      const timer4 = setTimeout(() => {
        setIsVisible(false);
        setProgress(0);
      }, 600);
      return () => clearTimeout(timer4);
    }, 600);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [location]);

  return (
    <div 
      style={{ 
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: isVisible ? `${height}px` : 0,
        backgroundColor: color,
        zIndex: 9999,
        transform: `translateX(${progress - 100}%)`,
        transition: 'transform 0.2s ease-out, height 0.3s ease-out',
        opacity: isVisible ? 1 : 0,
      }}
    />
  );
};

export default TopLoadingBar;
