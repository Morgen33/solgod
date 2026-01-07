import React, { useEffect, useRef, useState } from 'react';

interface StarTextProps {
  text: string;
  className?: string;
  fontSize?: number;
  starColor?: string;
  glowColor?: string;
}

interface Star {
  x: number;
  y: number;
  size: number;
  baseOpacity: number;
  twinkleSpeed: number;
  twinkleOffset: number;
}

export const StarText: React.FC<StarTextProps> = ({
  text,
  className = '',
  fontSize = 48,
  starColor = '#66d9ff',
  glowColor = 'rgba(102, 180, 255, 0.8)'
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [stars, setStars] = useState<Star[]>([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const animationRef = useRef<number>();

  // Generate stars from text
  useEffect(() => {
    const offscreen = document.createElement('canvas');
    const ctx = offscreen.getContext('2d');
    if (!ctx) return;

    // Set up offscreen canvas for text measurement
    const scale = 2;
    ctx.font = `bold ${fontSize * scale}px "Arial Black", Arial, sans-serif`;
    const metrics = ctx.measureText(text);
    const textWidth = metrics.width;
    const textHeight = fontSize * scale * 1.2;

    offscreen.width = textWidth + 20;
    offscreen.height = textHeight + 20;

    // Draw text to get pixel data
    ctx.font = `bold ${fontSize * scale}px "Arial Black", Arial, sans-serif`;
    ctx.fillStyle = 'white';
    ctx.textBaseline = 'top';
    ctx.fillText(text, 10, 10);

    const imageData = ctx.getImageData(0, 0, offscreen.width, offscreen.height);
    const pixels = imageData.data;

    // Sample pixels to create stars
    const newStars: Star[] = [];
    const sampleRate = 3; // Sample every N pixels

    for (let y = 0; y < offscreen.height; y += sampleRate) {
      for (let x = 0; x < offscreen.width; x += sampleRate) {
        const i = (y * offscreen.width + x) * 4;
        if (pixels[i + 3] > 128) { // If pixel is visible
          newStars.push({
            x: x / scale,
            y: y / scale,
            size: 0.8 + Math.random() * 1.2,
            baseOpacity: 0.4 + Math.random() * 0.6,
            twinkleSpeed: 1 + Math.random() * 3,
            twinkleOffset: Math.random() * Math.PI * 2
          });
        }
      }
    }

    setStars(newStars);
    setDimensions({
      width: offscreen.width / scale,
      height: offscreen.height / scale
    });
  }, [text, fontSize]);

  // Animation loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || stars.length === 0) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = (currentTime - startTime) / 1000;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw stars
      stars.forEach(star => {
        const twinkle = Math.sin(elapsed * star.twinkleSpeed + star.twinkleOffset);
        const opacity = star.baseOpacity * (0.5 + 0.5 * twinkle);
        const size = star.size * (0.8 + 0.2 * twinkle);

        // Glow effect
        ctx.beginPath();
        ctx.arc(star.x, star.y, size * 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(102, 180, 255, ${opacity * 0.3})`;
        ctx.fill();

        // Core star
        ctx.beginPath();
        ctx.arc(star.x, star.y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(102, 217, 255, ${opacity})`;
        ctx.fill();

        // Bright center
        ctx.beginPath();
        ctx.arc(star.x, star.y, size * 0.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity * 0.8})`;
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [stars]);

  if (dimensions.width === 0) return null;

  return (
    <div className={`relative ${className}`}>
      <canvas
        ref={canvasRef}
        width={dimensions.width}
        height={dimensions.height}
        style={{
          width: dimensions.width,
          height: dimensions.height,
          filter: `drop-shadow(0 0 10px ${glowColor}) drop-shadow(0 0 20px ${glowColor})`
        }}
      />
    </div>
  );
};
