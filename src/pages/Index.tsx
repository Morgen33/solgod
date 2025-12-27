import { useEffect, useState, useCallback } from "react";

interface ShootingStar {
  id: number;
  top: number;
  left: number;
  isNew: boolean;
}

interface BurstParticle {
  id: number;
  top: number;
  left: number;
  angle: number;
  delay: number;
}

const Index = () => {
  const [staticStars, setStaticStars] = useState<Array<{ top: string; left: string; delay: string }>>([]);
  const [shootingStars, setShootingStars] = useState<ShootingStar[]>([]);
  const [burstParticles, setBurstParticles] = useState<BurstParticle[]>([]);
  const [nextId, setNextId] = useState(100);

  useEffect(() => {
    // Generate random static stars
    const stars = Array.from({ length: 50 }, () => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 3}s`,
    }));
    setStaticStars(stars);

    // Initialize default shooting stars
    const defaultStars: ShootingStar[] = Array.from({ length: 10 }, (_, i) => ({
      id: i,
      top: 0,
      left: 0,
      isNew: false,
    }));
    setShootingStars(defaultStars);
  }, []);

  const handleSkyClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Create burst particles
    const particles: BurstParticle[] = Array.from({ length: 8 }, (_, i) => ({
      id: nextId + i,
      top: y,
      left: x,
      angle: (i * 45) * (Math.PI / 180),
      delay: i * 30,
    }));
    setBurstParticles(prev => [...prev, ...particles]);

    // Create new shooting star
    const newStar: ShootingStar = {
      id: nextId + 10,
      top: y,
      left: x,
      isNew: true,
    };
    setShootingStars(prev => [...prev, newStar]);
    setNextId(prev => prev + 11);

    // Clean up burst particles after animation
    setTimeout(() => {
      setBurstParticles(prev => prev.filter(p => !particles.find(np => np.id === p.id)));
    }, 1000);

    // Clean up shooting star after animation
    setTimeout(() => {
      setShootingStars(prev => prev.filter(s => s.id !== newStar.id));
    }, 3000);
  }, [nextId]);

  return (
    <div 
      className="night-sky min-h-screen w-full overflow-hidden relative flex items-center justify-center cursor-crosshair"
      onClick={handleSkyClick}
    >
      {/* Static twinkling stars */}
      {staticStars.map((star, i) => (
        <div
          key={i}
          className="static-star"
          style={{
            top: star.top,
            left: star.left,
            animationDelay: star.delay,
          }}
        />
      ))}

      {/* Burst particles */}
      {burstParticles.map((particle) => (
        <div
          key={particle.id}
          className="burst-particle"
          style={{
            top: particle.top,
            left: particle.left,
            '--angle': particle.angle,
            animationDelay: `${particle.delay}ms`,
          } as React.CSSProperties}
        />
      ))}

      {/* Default shooting stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {shootingStars.filter(s => !s.isNew).map((_, i) => (
          <div key={i} className="shooting-star" />
        ))}
      </div>

      {/* User-created shooting stars */}
      {shootingStars.filter(s => s.isNew).map((star) => (
        <div
          key={star.id}
          className="shooting-star-new"
          style={{
            top: star.top,
            left: star.left,
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 text-center px-4 pointer-events-none">
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-light tracking-wide text-gradient mb-6 animate-fade-in">
          Shooting Stars
        </h1>
        <p className="text-muted-foreground text-lg sm:text-xl max-w-md mx-auto font-light tracking-wide animate-fade-in" style={{ animationDelay: '0.3s' }}>
          Click anywhere to create your own shooting star
        </p>
      </div>

      {/* Subtle gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background/50 to-transparent pointer-events-none" />
    </div>
  );
};

export default Index;
