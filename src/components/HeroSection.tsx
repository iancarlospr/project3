import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Waves, Anchor } from 'lucide-react';

interface Ping {
  id: number;
  x: number;
  y: number;
  timestamp: number;
}

const HeroSection: React.FC = () => {
  const [pings, setPings] = useState<Ping[]>([]);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isInHero, setIsInHero] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const pingIdRef = useRef(0);
  const pingIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const lastPingTimeRef = useRef(0);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const createPing = useCallback((x: number, y: number) => {
    const now = Date.now();
    
    // Prevent too frequent pings (minimum 800ms between pings)
    if (now - lastPingTimeRef.current < 800) {
      return;
    }
    
    lastPingTimeRef.current = now;

    const newPing: Ping = {
      id: pingIdRef.current++,
      x,
      y,
      timestamp: now
    };

    setPings(prev => [...prev, newPing]);

    // Remove ping after animation completes
    setTimeout(() => {
      setPings(prev => prev.filter(ping => ping.id !== newPing.id));
    }, 2200);
  }, []);

  const updateCursorPosition = useCallback((e: React.MouseEvent<HTMLElement>) => {
    if (!sectionRef.current) return;

    const rect = sectionRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Only update if position actually changed significantly
    if (Math.abs(x - cursorPosition.x) > 5 || Math.abs(y - cursorPosition.y) > 5) {
      setCursorPosition({ x, y });
    }
  }, [cursorPosition.x, cursorPosition.y]);

  const startPinging = useCallback(() => {
    if (pingIntervalRef.current) {
      clearInterval(pingIntervalRef.current);
    }

    // Create initial ping immediately
    createPing(cursorPosition.x, cursorPosition.y);

    // Then ping every 1.2 seconds
    pingIntervalRef.current = setInterval(() => {
      createPing(cursorPosition.x, cursorPosition.y);
    }, 1200);
  }, [cursorPosition.x, cursorPosition.y, createPing]);

  const stopPinging = useCallback(() => {
    if (pingIntervalRef.current) {
      clearInterval(pingIntervalRef.current);
      pingIntervalRef.current = null;
    }
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsInHero(true);
    startPinging();
  }, [startPinging]);

  const handleMouseLeave = useCallback(() => {
    setIsInHero(false);
    stopPinging();
  }, [stopPinging]);

  // Update ping interval when cursor position changes significantly
  useEffect(() => {
    if (isInHero) {
      // Debounce the restart to avoid too frequent restarts
      const timeoutId = setTimeout(() => {
        startPinging();
      }, 100);

      return () => clearTimeout(timeoutId);
    }
  }, [cursorPosition, isInHero, startPinging]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      stopPinging();
    };
  }, [stopPinging]);

  // Clean up old pings periodically
  useEffect(() => {
    const cleanupInterval = setInterval(() => {
      const now = Date.now();
      setPings(prev => prev.filter(ping => now - ping.timestamp < 3000));
    }, 1000);

    return () => clearInterval(cleanupInterval);
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      onMouseMove={updateCursorPosition}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Radar Ping Effects */}
      {pings.map((ping) => (
        <div
          key={ping.id}
          className="absolute pointer-events-none z-40"
          style={{
            left: ping.x,
            top: ping.y,
            transform: 'translate(-50%, -50%)'
          }}
        >
          <div className="radar-ping"></div>
        </div>
      ))}

      {/* Animated Sea Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
        {/* Multiple wave layers for depth */}
        <div className="absolute inset-0 opacity-30">
          <div className="wave-layer-1"></div>
        </div>
        <div className="absolute inset-0 opacity-20">
          <div className="wave-layer-2"></div>
        </div>
        <div className="absolute inset-0 opacity-15">
          <div className="wave-layer-3"></div>
        </div>
        
        {/* Sea foam effect */}
        <div className="absolute inset-0 opacity-10">
          <div className="sea-foam"></div>
        </div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 text-amber-500/20 animate-float pointer-events-none">
        <Anchor className="h-16 w-16" />
      </div>
      <div className="absolute bottom-20 right-10 text-amber-500/20 animate-float-delayed pointer-events-none">
        <Waves className="h-12 w-12" />
      </div>
      <div className="absolute top-1/3 right-20 text-amber-500/10 animate-spin-slow pointer-events-none">
        <svg className="w-20 h-20" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M50,10 L55,25 L50,20 L45,25 Z" fill="currentColor" />
          <path d="M90,50 L75,45 L80,50 L75,55 Z" fill="currentColor" />
          <path d="M50,90 L45,75 L50,80 L55,75 Z" fill="currentColor" />
          <path d="M10,50 L25,55 L20,50 L25,45 Z" fill="currentColor" />
        </svg>
      </div>

      {/* Centered Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pointer-events-none">
        <h1 className="text-6xl md:text-8xl font-pirata text-amber-500 mb-8 drop-shadow-2xl animate-fade-in-up">
          Chart Your Course
        </h1>
        <p className="text-xl md:text-2xl text-amber-100 font-crimson mb-12 leading-relaxed max-w-3xl mx-auto animate-fade-in-up animation-delay-300">
          Embark on extraordinary adventures across the Caribbean seas and 
          America's eastern shores. Discover hidden treasures, pristine waters, 
          and unforgettable experiences with your seasoned guide.
        </p>
        <button 
          onClick={scrollToContact}
          className="bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-slate-900 font-bold py-6 px-12 rounded-full text-xl transition-all duration-300 transform hover:scale-110 shadow-2xl animate-fade-in-up animation-delay-600 hover:shadow-amber-500/25 pointer-events-auto cursor-pointer"
        >
          Begin Your Adventure
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce pointer-events-none">
        <div className="w-6 h-10 border-2 border-amber-500/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-amber-500/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;