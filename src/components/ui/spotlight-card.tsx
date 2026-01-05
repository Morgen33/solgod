import React, { useRef, useState } from 'react';

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: 'purple' | 'gold' | 'silver';
}

const glowColorMap = {
  purple: 'rgba(164, 99, 221, 0.6)',
  gold: 'rgba(201, 162, 77, 0.6)',
  silver: 'rgba(192, 192, 192, 0.6)'
};

const borderColorMap = {
  purple: 'rgba(164, 99, 221, 0.4)',
  gold: 'rgba(201, 162, 77, 0.4)',
  silver: 'rgba(192, 192, 192, 0.4)'
};

const SpotlightCard: React.FC<SpotlightCardProps> = ({ 
  children, 
  className = '', 
  glowColor = 'purple'
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const glowStyle = glowColorMap[glowColor];
  const borderStyle = borderColorMap[glowColor];

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className={`relative rounded-xl overflow-hidden ${className}`}
      style={{
        background: 'hsl(275 80% 12% / 0.5)',
        border: `1px solid ${isHovering ? borderStyle : 'hsl(275 60% 25% / 0.5)'}`,
        transition: 'border-color 0.3s ease'
      }}
    >
      {/* Spotlight gradient overlay */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: isHovering ? 1 : 0,
          background: `radial-gradient(300px circle at ${position.x}px ${position.y}px, ${glowStyle}, transparent 60%)`
        }}
      />
      {/* Border glow overlay */}
      <div
        className="pointer-events-none absolute inset-0 rounded-xl transition-opacity duration-300"
        style={{
          opacity: isHovering ? 1 : 0,
          boxShadow: `inset 0 0 20px ${glowStyle}, 0 0 30px ${glowStyle}`
        }}
      />
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export { SpotlightCard };