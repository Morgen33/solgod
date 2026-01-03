'use client';
import { useEffect, useRef } from 'react';

interface SparklingBackgroundProps {
  particleCount?: number;
  colors?: string[];
  sparkleSpeed?: number;
  minSize?: number;
  maxSize?: number;
  className?: string;
  transparent?: boolean;
}

interface Particle {
  x: number;
  y: number;
  size: number;
  color: string;
  alpha: number;
  alphaDirection: number;
  alphaSpeed: number;
}

export function SparklingBackground({
  particleCount = 100,
  colors = ['#ba38a0', '#9b59b6', '#8e44ad', '#c084fc', '#a855f7'],
  sparkleSpeed = 1,
  minSize = 1,
  maxSize = 3,
  className = '',
  transparent = false,
}: SparklingBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d')!;
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const particles: Particle[] = [];

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        size: Math.random() * (maxSize - minSize) + minSize,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random(),
        alphaDirection: Math.random() > 0.5 ? 1 : -1,
        alphaSpeed: (Math.random() * 0.02 + 0.005) * sparkleSpeed,
      });
    }

    const animate = () => {
      // Clear canvas
      if (transparent) {
        ctx.clearRect(0, 0, w, h);
      } else {
        ctx.fillStyle = 'hsl(270, 50%, 5%)';
        ctx.fillRect(0, 0, w, h);
      }

      // Draw and update particles
      for (const particle of particles) {
        // Update alpha for twinkling effect
        particle.alpha += particle.alphaDirection * particle.alphaSpeed;

        if (particle.alpha >= 1) {
          particle.alpha = 1;
          particle.alphaDirection = -1;
        } else if (particle.alpha <= 0) {
          particle.alpha = 0;
          particle.alphaDirection = 1;
          // Reposition when fully faded
          particle.x = Math.random() * w;
          particle.y = Math.random() * h;
        }

        // Draw particle with glow
        ctx.save();
        ctx.globalAlpha = particle.alpha;

        // Outer glow
        const gradient = ctx.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          particle.size * 3
        );
        gradient.addColorStop(0, particle.color);
        gradient.addColorStop(0.5, particle.color + '40');
        gradient.addColorStop(1, 'transparent');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 3, 0, Math.PI * 2);
        ctx.fill();

        // Inner bright core
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 0.5, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    const handleResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationRef.current!);
      window.removeEventListener('resize', handleResize);
    };
  }, [particleCount, colors, sparkleSpeed, minSize, maxSize, transparent]);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 w-full h-full pointer-events-none ${className}`}
    />
  );
}
