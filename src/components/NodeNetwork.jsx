import React, { useState, useEffect, useRef } from 'react';

const BinaryBackground = () => {
  const [digits, setDigits] = useState([]);
  const containerRef = useRef(null);
  // Use a Ref for mouse position to handle real-time updates without state lag
  const mouseRef = useRef({ x: -100, y: -100 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const generateDigits = () => {
      const count = isMobile ? 60 : 120;
      const newDigits = [];
      
      for (let i = 0; i < count; i++) {
        const isOne = Math.random() > 0.5;
        newDigits.push({
          id: i,
          char: isOne ? '1' : '0',
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: 12 + Math.random() * 16,
          opacity: 0.08 + Math.random() * 0.07,
          delay: Math.random() * 2,
          hue: Math.random() * 60 + 200,
          currentOpacity: 0.1, // Initial state
        });
      }
      setDigits(newDigits);
    };

    generateDigits();

    const handleResize = () => generateDigits();
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('resize', checkMobile);
    };
  }, [isMobile]);

  // Real-time mouse tracking (zero-lag)
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      mouseRef.current = {
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
      };
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Optimized Animation Loop
  useEffect(() => {
    let animationFrameId;
    
    const updateDigits = () => {
      setDigits(prev => prev.map(digit => {
        const { x, y } = mouseRef.current;
        const distance = Math.sqrt(Math.pow(digit.x - x, 2) + Math.pow(digit.y - y, 2));
        
        const isGlowing = distance < (isMobile ? 12 : 8);
        const targetOpacity = isGlowing 
          ? Math.min(0.9, (0.08 + Math.random() * 0.07) * 15)
          : digit.opacity;
        
        // Increased smoothing factor (0.3) for snappier response
        const newOpacity = digit.currentOpacity + (targetOpacity - digit.currentOpacity) * 0.5;
        
        return {
          ...digit,
          isGlowing,
          currentOpacity: newOpacity,
        };
      }));
      
      animationFrameId = requestAnimationFrame(updateDigits);
    };
    
    animationFrameId = requestAnimationFrame(updateDigits);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isMobile]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden z-0 pointer-events-none"
      style={{
        background: 'linear-gradient(to bottom right, #0f172a 0%, #1e293b 30%, #0f172a 100%)',
      }}
    >
      <div className="absolute inset-0 opacity-30">
        <div 
          className="absolute top-0 left-0 w-full h-full"
          style={{
            background: 'radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)',
            animation: 'pulse 20s ease-in-out infinite alternate',
          }}
        />
        <div 
          className="absolute bottom-0 right-0 w-full h-full"
          style={{
            background: 'radial-gradient(circle at 80% 70%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)',
            animation: 'pulse 15s ease-in-out infinite alternate-reverse',
          }}
        />
      </div>

      {digits.map((digit) => {
        const opacity = digit.currentOpacity;
        const glowEffect = digit.isGlowing
          ? {
              filter: `blur(${Math.max(0, 8 - opacity * 8)}px)`,
              textShadow: `
                0 0 ${10 + opacity * 20}px hsla(${digit.hue}, 100%, 70%, ${opacity}),
                0 0 ${20 + opacity * 30}px hsla(${digit.hue}, 100%, 60%, ${opacity * 0.7})
              `,
            }
          : {};

        return (
          <div
            key={digit.id}
            className="absolute font-mono pointer-events-none"
            style={{
              left: `${digit.x}%`,
              top: `${digit.y}%`,
              transform: 'translate(-50%, -50%)',
              fontSize: `${digit.size}px`,
              opacity: opacity,
              color: digit.isGlowing 
                ? `hsl(${digit.hue}, 100%, ${70 + opacity * 25}%)`
                : `hsla(${digit.hue}, 100%, 70%, 0.3)`,
              fontWeight: digit.isGlowing ? '600' : '300',
              // We remove transitions when glowing to ensure the JS animation is "Realtime"
              transition: digit.isGlowing ? 'none' : 'all 1.2s cubic-bezier(0.4, 0, 0.2, 1)',
              animation: !digit.isGlowing 
                ? `float ${6 + digit.delay}s ease-in-out infinite alternate`
                : 'none',
              animationDelay: `${digit.delay}s`,
              zIndex: digit.isGlowing ? 10 : 1,
              ...glowEffect,
            }}
          >
            {digit.char}
          </div>
        );
      })}

      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(90deg, #3b82f6 1px, transparent 1px),
            linear-gradient(0deg, #3b82f6 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          maskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)',
        }}
      />

      <style jsx>{`
        @keyframes pulse {
          0% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.05); }
          100% { opacity: 0.3; transform: scale(1); }
        }
        @keyframes float {
          0% { transform: translate(-50%, -50%) translateY(0px); }
          100% { transform: translate(-50%, -50%) translateY(-20px); }
        }
      `}</style>
    </div>
  );
};

export default BinaryBackground;