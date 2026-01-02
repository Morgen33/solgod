import React, { useState } from 'react';
import FractalMountains from "@/components/ui/mountainous-shader";
import { Layout } from "@/components/Layout";

export default function Mountains() {
  const [started, setStarted] = useState(false);

  const handleInteract = () => {
    setStarted(true);
  };

  return (
    <Layout>
      <div 
        className="relative w-full h-[calc(100vh-5rem)] cursor-pointer overflow-hidden"
        onClick={handleInteract}
        onMouseMove={handleInteract}
      >
        {!started && (
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-background/80 backdrop-blur-sm">
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-gold-gradient mb-4">
              Procedural Fractal Mountains
            </h1>
            <p className="text-muted-foreground text-lg">
              Move to evolve the scene
            </p>
          </div>
        )}

        <FractalMountains speed={1} octaves={5} scale={2} className="absolute inset-0" />

        {started && (
          <div className="absolute bottom-6 left-6 z-10 bg-background/60 backdrop-blur-sm px-4 py-2 rounded-lg border border-border/50">
            <span className="text-sm text-muted-foreground">
              Speed: 1 • Octaves: 5 • Scale: 2
            </span>
          </div>
        )}
      </div>
    </Layout>
  );
}
