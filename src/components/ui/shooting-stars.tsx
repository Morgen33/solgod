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
  interval?: number; // milliseconds between stars
  className?: string;
}

export function ShootingStars({ interval = 5000, className = '' }: ShootingStarsProps) {
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
      // Start from top or right edge, moving diagonally down-left
      const startFromTop = Math.random() > 0.3;
      const x = startFromTop 
        ? Math.random() * canvas.width * 0.8 + canvas.width * 0.2 
        : canvas.width + 50;
      const y = startFromTop 
        ? -50 
        : Math.random() * canvas.height * 0.4;
      
      return {
        x,
        y,
        length: 80 + Math.random() * 60,
        speed: 1.5 + Math.random() * 1, // Slow speed
        angle: Math.PI / 4 + (Math.random() - 0.5) * 0.3, // ~45 degrees with variance
        opacity: 0.7 + Math.random() * 0.3,
        trail: [],
      };
    };

    // Spawn stars at interval
    const spawnInterval = setInterval(() => {
      if (starsRef.current.length < 3) { // Max 3 stars at once
        starsRef.current.push(createStar());
      }
    }, interval + Math.random() * 2000); // Add some randomness

    // Spawn first star after a short delay
    setTimeout(() => {
      starsRef.current.push(createStar());
    }, 1000);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      starsRef.current = starsRef.current.filter(star => {
        // Update position
        star.x += Math.cos(star.angle) * star.speed;
        star.y += Math.sin(star.angle) * star.speed;

        // Add current position to trail
        star.trail.unshift({ x: star.x, y: star.y, opacity: star.opacity });
        
        // Limit trail length
        const maxTrailLength = 40;
        if (star.trail.length > maxTrailLength) {
          star.trail.pop();
        }

        // Draw the trail
        star.trail.forEach((point, index) => {
          const trailOpacity = point.opacity * (1 - index / star.trail.length) * 0.8;
          const trailWidth = (1 - index / star.trail.length) * 2.5;
          
          if (index < star.trail.length - 1) {
            const nextPoint = star.trail[index + 1];
            
            // Create gradient for each segment
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

        // Draw the head (brighter)
        ctx.beginPath();
        ctx.arc(star.x, star.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();

        // Glow effect on head
        ctx.beginPath();
        ctx.arc(star.x, star.y, 4, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(180, 220, 255, ${star.opacity * 0.4})`;
        ctx.fill();

        // Remove if off screen
        return star.x > -100 && star.x < canvas.width + 100 && 
               star.y > -100 && star.y < canvas.height + 100;
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resize);
      clearInterval(spawnInterval);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [interval]);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none z-0 ${className}`}
    />
  );
}