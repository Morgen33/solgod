import { useEffect, useRef } from 'react';

interface ShootingStar {
  x: number;
  y: number;
  length: number;
  speed: number;
  angle: number;
  opacity: number;
  trail: { x: number; y: number; opacity: number }[];
}

interface ShootingStarsProps {
  className?: string;
}

export function ShootingStars({ className = '' }: ShootingStarsProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<ShootingStar[]>([]);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const createStar = (): ShootingStar => {
      // Random spawn zone: top edge, right edge, or top-right corner
      const zone = Math.random();
      let x: number, y: number, angle: number;
      
      if (zone < 0.4) {
        // Top edge - anywhere along the top
        x = Math.random() * canvas.width;
        y = -50;
        angle = Math.PI / 3 + (Math.random() - 0.5) * 0.5; // Steeper, ~60 degrees
      } else if (zone < 0.7) {
        // Right edge - upper half
        x = canvas.width + 50;
        y = Math.random() * canvas.height * 0.5;
        angle = Math.PI * 0.6 + (Math.random() - 0.5) * 0.4; // More horizontal
      } else if (zone < 0.85) {
        // Top-right corner
        x = canvas.width * 0.7 + Math.random() * canvas.width * 0.3;
        y = -50;
        angle = Math.PI / 4 + (Math.random() - 0.5) * 0.3; // Classic 45 degrees
      } else {
        // Left side going right (rare, for variety)
        x = -50;
        y = Math.random() * canvas.height * 0.3;
        angle = -Math.PI / 5 + (Math.random() - 0.5) * 0.3; // Going right-downward
      }
      
      return {
        x,
        y,
        length: 80 + Math.random() * 60,
        speed: 1.2 + Math.random() * 1.3,
        angle,
        opacity: 0.6 + Math.random() * 0.4,
        trail: [],
      };
    };

    const spawnBurst = () => {
      const burstType = Math.random();
      
      if (burstType < 0.5) {
        // Single star
        starsRef.current.push(createStar());
      } else if (burstType < 0.75) {
        // Two stars together
        starsRef.current.push(createStar());
        setTimeout(() => starsRef.current.push(createStar()), 100 + Math.random() * 300);
      } else if (burstType < 0.9) {
        // Three stars in quick succession
        starsRef.current.push(createStar());
        setTimeout(() => starsRef.current.push(createStar()), 150 + Math.random() * 200);
        setTimeout(() => starsRef.current.push(createStar()), 350 + Math.random() * 300);
      } else {
        // Rapid succession of 2-3
        const count = 2 + Math.floor(Math.random() * 2);
        for (let i = 0; i < count; i++) {
          setTimeout(() => starsRef.current.push(createStar()), i * (80 + Math.random() * 120));
        }
      }
    };

    // Variable interval spawning
    const scheduleNext = () => {
      const baseInterval = 3000 + Math.random() * 4000; // 3-7 seconds
      setTimeout(() => {
        if (starsRef.current.length < 5) {
          spawnBurst();
        }
        scheduleNext();
      }, baseInterval);
    };

    // Initial spawn
    setTimeout(() => spawnBurst(), 800);
    scheduleNext();

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      starsRef.current = starsRef.current.filter(star => {
        // Update position
        star.x += Math.cos(star.angle) * star.speed;
        star.y += Math.sin(star.angle) * star.speed;

        // Add current position to trail
        star.trail.unshift({ x: star.x, y: star.y, opacity: star.opacity });
        
        // Limit trail length
        const maxTrailLength = 45;
        if (star.trail.length > maxTrailLength) {
          star.trail.pop();
        }

        // Draw the trail
        star.trail.forEach((point, index) => {
          const trailOpacity = point.opacity * (1 - index / star.trail.length) * 0.8;
          const trailWidth = (1 - index / star.trail.length) * 2.5;
          
          if (index < star.trail.length - 1) {
            const nextPoint = star.trail[index + 1];
            
            const gradient = ctx.createLinearGradient(point.x, point.y, nextPoint.x, nextPoint.y);
            gradient.addColorStop(0, `rgba(255, 255, 255, ${trailOpacity})`);
            gradient.addColorStop(1, `rgba(180, 220, 255, ${trailOpacity * 0.5})`);
            
            ctx.beginPath();
            ctx.moveTo(point.x, point.y);
            ctx.lineTo(nextPoint.x, nextPoint.y);
            ctx.strokeStyle = gradient;
            ctx.lineWidth = trailWidth;
            ctx.lineCap = 'round';
            ctx.stroke();
          }
        });

        // Draw the head
        ctx.beginPath();
        ctx.arc(star.x, star.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();

        // Glow effect
        ctx.beginPath();
        ctx.arc(star.x, star.y, 4, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(180, 220, 255, ${star.opacity * 0.4})`;
        ctx.fill();

        // Remove if off screen
        return star.x > -150 && star.x < canvas.width + 150 && 
               star.y > -150 && star.y < canvas.height + 150;
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none z-0 ${className}`}
    />
  );
}