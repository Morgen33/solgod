import { StarsCanvas } from "@/components/ui/stars-canvas";

const Index = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden flex items-center justify-center">
      <StarsCanvas />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-light tracking-wide text-gradient mb-6 animate-fade-in">
          Shooting Stars
        </h1>
        <p className="text-muted-foreground text-lg sm:text-xl max-w-md mx-auto font-light tracking-wide animate-fade-in" style={{ animationDelay: '0.3s' }}>
          Watch the cosmos come alive with celestial wonders
        </p>
      </div>
    </div>
  );
};

export default Index;
