import { useEffect, useRef } from 'react';

interface ShootingStar {
  x: number;
  y: number;
  length: number;
  speed: number;
  angle: number;
  opacity: number;
  isMeteor: boolean;
  trail: { x: number; y: number; opacity: number }[];
}

interface TwinkleStar {
  x: number;
  y: number;
  size: number;
  baseOpacity: number;
  twinkleSpeed: number;
  twinkleOffset: number;
  isCross: boolean;
}

interface ShootingStarsProps {
  className?: string;
}

export function ShootingStars({ className = '' }: ShootingStarsProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<ShootingStar[]>([]);
  const twinkleStarsRef = useRef<TwinkleStar[]>([]);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      // Regenerate twinkle stars on resize
      generateTwinkleStars();
    };

    const generateTwinkleStars = () => {
      const count = Math.floor((canvas.width * canvas.height) / 15000); // Density based on screen size
      twinkleStarsRef.current = [];
      for (let i = 0; i < count; i++) {
        twinkleStarsRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: 0.5 + Math.random() * 1.5,
          baseOpacity: 0.3 + Math.random() * 0.5,
          twinkleSpeed: 0.5 + Math.random() * 2,
          twinkleOffset: Math.random() * Math.PI * 2,
          isCross: Math.random() < 0.25, // 25% are cross-shaped
        });
      }
    };

    resize();
    window.addEventListener('resize', resize);

    const createStar = (forceMeteor = false): ShootingStar => {
      const isMeteor = forceMeteor || Math.random() < 0.12; // 12% chance of meteor
      
      const zone = Math.random();
      let x: number, y: number, angle: number;
      
      if (zone < 0.4) {
        x = Math.random() * canvas.width;
        y = -50;
        angle = Math.PI / 3 + (Math.random() - 0.5) * 0.5;
      } else if (zone < 0.7) {
        x = canvas.width + 50;
        y = Math.random() * canvas.height * 0.5;
        angle = Math.PI * 0.6 + (Math.random() - 0.5) * 0.4;
      } else if (zone < 0.85) {
        x = canvas.width * 0.7 + Math.random() * canvas.width * 0.3;
        y = -50;
        angle = Math.PI / 4 + (Math.random() - 0.5) * 0.3;
      } else {
        x = -50;
        y = Math.random() * canvas.height * 0.3;
        angle = -Math.PI / 5 + (Math.random() - 0.5) * 0.3;
      }
      
      return {
        x,
        y,
        length: isMeteor ? 120 + Math.random() * 80 : 80 + Math.random() * 60,
        speed: isMeteor ? 1.2 + Math.random() * 0.8 : 0.5 + Math.random() * 0.6,
        angle,
        opacity: isMeteor ? 0.9 + Math.random() * 0.1 : 0.6 + Math.random() * 0.4,
        isMeteor,
        trail: [],
      };
    };

    const timeoutsRef: number[] = [];
    let lastStarEndTime = 0;

    const spawnOne = () => {
      starsRef.current = [createStar()];
    };

    const checkAndSpawn = () => {
      const now = Date.now();
      // Only spawn if no star visible AND 3 seconds have passed since last star ended
      if (starsRef.current.length === 0 && now - lastStarEndTime >= 3000) {
        spawnOne();
      }
      const t = window.setTimeout(checkAndSpawn, 500); // Check every 500ms
      timeoutsRef.push(t);
    };

    // Track when stars disappear
    const originalFilter = starsRef.current.filter;
    
    // Start with one star after a brief delay
    const initialTimeout = window.setTimeout(() => {
      spawnOne();
    }, 1000);
    timeoutsRef.push(initialTimeout);
    
    checkAndSpawn();

    let startTime = performance.now();

    const drawCrossStar = (x: number, y: number, size: number, opacity: number) => {
      const armLength = size * 3;
      const coreSize = size * 0.8;
      
      // Vertical arm
      ctx.beginPath();
      ctx.moveTo(x, y - armLength);
      ctx.lineTo(x, y + armLength);
      ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.6})`;
      ctx.lineWidth = size * 0.3;
      ctx.stroke();
      
      // Horizontal arm
      ctx.beginPath();
      ctx.moveTo(x - armLength, y);
      ctx.lineTo(x + armLength, y);
      ctx.stroke();
      
      // Bright center
      ctx.beginPath();
      ctx.arc(x, y, coreSize, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
      ctx.fill();
      
      // Glow
      ctx.beginPath();
      ctx.arc(x, y, size * 2, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(200, 220, 255, ${opacity * 0.3})`;
      ctx.fill();
    };

    const animate = (currentTime: number) => {
      const elapsed = (currentTime - startTime) / 1000;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw twinkling background stars
      twinkleStarsRef.current.forEach(star => {
        const twinkle = Math.sin(elapsed * star.twinkleSpeed + star.twinkleOffset);
        const opacity = star.baseOpacity * (0.4 + 0.6 * (twinkle * 0.5 + 0.5));
        const size = star.size * (0.9 + 0.1 * twinkle);

        if (star.isCross) {
          drawCrossStar(star.x, star.y, size, opacity);
        } else {
          // Regular dot star
          ctx.beginPath();
          ctx.arc(star.x, star.y, size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
          ctx.fill();
          
          // Subtle glow
          ctx.beginPath();
          ctx.arc(star.x, star.y, size * 2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(200, 220, 255, ${opacity * 0.2})`;
          ctx.fill();
        }
      });

      // Draw shooting stars
      starsRef.current = starsRef.current.filter(star => {
        star.x += Math.cos(star.angle) * star.speed;
        star.y += Math.sin(star.angle) * star.speed;

        star.trail.unshift({ x: star.x, y: star.y, opacity: star.opacity });
        
        const maxTrailLength = star.isMeteor ? 120 : 90;
        if (star.trail.length > maxTrailLength) {
          star.trail.pop();
        }

        // Draw trail
        star.trail.forEach((point, index) => {
          const trailOpacity = point.opacity * (1 - index / star.trail.length) * 0.8;
          const baseWidth = star.isMeteor ? 4 : 2.5;
          const trailWidth = (1 - index / star.trail.length) * baseWidth;
          
          if (index < star.trail.length - 1) {
            const nextPoint = star.trail[index + 1];
            
            const gradient = ctx.createLinearGradient(point.x, point.y, nextPoint.x, nextPoint.y);
            if (star.isMeteor) {
              gradient.addColorStop(0, `rgba(255, 255, 255, ${trailOpacity})`);
              gradient.addColorStop(0.5, `rgba(255, 240, 200, ${trailOpacity * 0.8})`);
              gradient.addColorStop(1, `rgba(255, 180, 100, ${trailOpacity * 0.4})`);
            } else {
              gradient.addColorStop(0, `rgba(255, 255, 255, ${trailOpacity})`);
              gradient.addColorStop(1, `rgba(180, 220, 255, ${trailOpacity * 0.5})`);
            }
            
            ctx.beginPath();
            ctx.moveTo(point.x, point.y);
            ctx.lineTo(nextPoint.x, nextPoint.y);
            ctx.strokeStyle = gradient;
            ctx.lineWidth = trailWidth;
            ctx.lineCap = 'round';
            ctx.stroke();
          }
        });

        // Draw head
        const headSize = star.isMeteor ? 4 : 2;
        ctx.beginPath();
        ctx.arc(star.x, star.y, headSize, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();

        // Glow
        const glowSize = star.isMeteor ? 10 : 4;
        ctx.beginPath();
        ctx.arc(star.x, star.y, glowSize, 0, Math.PI * 2);
        ctx.fillStyle = star.isMeteor 
          ? `rgba(255, 200, 150, ${star.opacity * 0.5})`
          : `rgba(180, 220, 255, ${star.opacity * 0.4})`;
        ctx.fill();

        const isVisible = star.x > -150 && star.x < canvas.width + 150 && 
               star.y > -150 && star.y < canvas.height + 150;
        
        if (!isVisible) {
          lastStarEndTime = Date.now();
        }
        
        return isVisible;
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resize);
      timeoutsRef.forEach((t) => clearTimeout(t));
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