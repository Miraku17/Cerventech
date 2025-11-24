'use client';

import React, { useRef, useEffect, useState } from 'react';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  fullWidth?: boolean;
}

const FadeIn: React.FC<FadeInProps> = ({
  children,
  delay = 0,
  className = '',
  direction = 'up',
  fullWidth = false
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (domRef.current) observer.unobserve(domRef.current);
        }
      });
    }, { threshold: 0.1 });

    if (domRef.current) observer.observe(domRef.current);

    return () => {
      if (domRef.current) observer.disconnect();
    };
  }, [isMounted]);

  const getDirectionClasses = () => {
    switch (direction) {
      case 'up': return isVisible ? 'translate-y-0' : 'translate-y-8';
      case 'down': return isVisible ? 'translate-y-0' : '-translate-y-8';
      case 'left': return isVisible ? 'translate-x-0' : 'translate-x-8';
      case 'right': return isVisible ? 'translate-x-0' : '-translate-x-8';
      case 'none': return '';
      default: return '';
    }
  };

  if (!isMounted) {
    return (
      <div ref={domRef} className={className}>
        {children}
      </div>
    );
  }

  return (
    <div
      ref={domRef}
      className={`transition-all duration-700 ease-out transform ${
        isVisible ? 'opacity-100' : 'opacity-0'
      } ${getDirectionClasses()} ${className} ${fullWidth ? 'w-full' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default FadeIn;