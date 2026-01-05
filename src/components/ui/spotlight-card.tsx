import React, { useEffect, useRef, ReactNode } from 'react';

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: 'purple' | 'gold' | 'silver';
  customSize?: boolean;
}

const glowColorMap = {
  purple: { base: 280, spread: 60, saturation: 70, lightness: 60 },
  gold: { base: 42, spread: 30, saturation: 65, lightness: 55 },
  silver: { base: 220, spread: 20, saturation: 10, lightness: 70 }
};

const SpotlightCard: React.FC<SpotlightCardProps> = ({ 
  children, 
  className = '', 
  glowColor = 'purple',
  customSize = true
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const syncPointer = (e: PointerEvent) => {
      const { clientX: x, clientY: y } = e;
      
      if (cardRef.current) {
        cardRef.current.style.setProperty('--x', x.toFixed(2));
        cardRef.current.style.setProperty('--xp', (x / window.innerWidth).toFixed(2));
        cardRef.current.style.setProperty('--y', y.toFixed(2));
        cardRef.current.style.setProperty('--yp', (y / window.innerHeight).toFixed(2));
      }
    };

    document.addEventListener('pointermove', syncPointer);
    return () => document.removeEventListener('pointermove', syncPointer);
  }, []);

  const { base, spread, saturation, lightness } = glowColorMap[glowColor];

  const getInlineStyles = () => {
    const baseStyles: React.CSSProperties = {
      '--base': base,
      '--spread': spread,
      '--saturation': saturation,
      '--lightness': lightness,
      '--radius': '12',
      '--border': '1.5',
      '--backdrop': 'hsl(var(--card) / 0.5)',
      '--backup-border': 'hsl(var(--border) / 0.5)',
      '--size': '250',
      '--outer': '1',
      '--border-size': 'calc(var(--border, 2) * 1px)',
      '--spotlight-size': 'calc(var(--size, 150) * 1px)',
      '--hue': 'calc(var(--base) + (var(--xp, 0) * var(--spread, 0)))',
      backgroundImage: `radial-gradient(
        var(--spotlight-size) var(--spotlight-size) at
        calc(var(--x, 0) * 1px)
        calc(var(--y, 0) * 1px),
        hsl(var(--hue, 210) calc(var(--saturation, 100) * 1%) calc(var(--lightness, 70) * 1%) / 0.15), transparent
      )`,
      backgroundColor: 'var(--backdrop, transparent)',
      backgroundSize: 'calc(100% + (2 * var(--border-size))) calc(100% + (2 * var(--border-size)))',
      backgroundPosition: '50% 50%',
      backgroundAttachment: 'fixed',
      border: 'var(--border-size) solid var(--backup-border)',
      position: 'relative' as const,
      touchAction: 'none' as const,
    } as React.CSSProperties;

    return baseStyles;
  };

  return (
    <div
      ref={cardRef}
      data-spotlight
      className={`rounded-xl overflow-hidden ${className}`}
      style={getInlineStyles()}
    >
      {children}
    </div>
  );
};

export { SpotlightCard };