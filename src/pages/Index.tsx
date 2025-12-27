import { useEffect, useState } from "react";

const Index = () => {
  const [staticStars, setStaticStars] = useState<Array<{ top: string; left: string; delay: string }>>([]);

  useEffect(() => {
    // Generate random static stars
    const stars = Array.from({ length: 50 }, () => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 3}s`,
    }));
    setStaticStars(stars);
  }, []);

  return (
    <div className="night-sky min-h-screen w-full overflow-hidden relative flex items-center justify-center">
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

      {/* Shooting stars */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={i} className="shooting-star" />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-light tracking-wide text-gradient mb-6 animate-fade-in">
          Shooting Stars
        </h1>
        <p className="text-muted-foreground text-lg sm:text-xl max-w-md mx-auto font-light tracking-wide animate-fade-in" style={{ animationDelay: '0.3s' }}>
          Watch the cosmos come alive with celestial wonders
        </p>
      </div>

      {/* Subtle gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background/50 to-transparent pointer-events-none" />
    </div>
  );
};

export default Index;
