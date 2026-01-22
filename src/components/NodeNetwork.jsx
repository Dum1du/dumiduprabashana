import React, { useState, useEffect, useRef } from 'react';

const BinaryBackground = () => {
  const [digits, setDigits] = useState([]);
  const containerRef = useRef(null);
  const mouseRef = useRef({ x: -100, y: -100 });
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile screen
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Generate digits
  useEffect(() => {
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
        currentOpacity: 0.1,
      });
    }
    setDigits(newDigits);
  }, [isMobile]);

  // Mouse tracking
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

  // Animation loop (only opacity/color/weight/glow)
  useEffect(() => {
    let animationFrameId;

    const updateDigits = () => {
      setDigits(prev =>
        prev.map(digit => {
          const { x, y } = mouseRef.current;
          const distance = Math.sqrt(Math.pow(digit.x - x, 2) + Math.pow(digit.y - y, 2));
          const isGlowing = distance < (isMobile ? 12 : 8);
          const targetOpacity = isGlowing ? Math.min(0.9, (0.08 + Math.random() * 0.07) * 15) : digit.opacity;
          const newOpacity = digit.currentOpacity + (targetOpacity - digit.currentOpacity) * 0.5;

          return {
            ...digit,
            isGlowing,
            currentOpacity: newOpacity,
          };
        })
      );

      animationFrameId = requestAnimationFrame(updateDigits);
    };

    animationFrameId = requestAnimationFrame(updateDigits);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isMobile]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden z-0 pointer-events-none binary-bg"
    >
      {/* Background Gradients */}
      <div className="absolute inset-0 opacity-30">
        <div className="radial-pulse pulse1" />
        <div className="radial-pulse pulse2" />
      </div>

      {/* Binary digits */}
      {digits.map(digit => {
        const opacity = digit.currentOpacity;
        const glowStyle = digit.isGlowing
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
            className={`absolute font-mono pointer-events-none ${!digit.isGlowing ? 'float' : ''}`}
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
              zIndex: digit.isGlowing ? 10 : 1,
              ...glowStyle,
            }}
          >
            {digit.char}
          </div>
        );
      })}

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-5 grid-overlay" />
    </div>
  );
};

export default BinaryBackground;
