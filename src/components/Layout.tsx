import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { StarsCanvas } from "./ui/stars-canvas";
import { FlowingBackground } from "./ui/flowing-background";
import { ShootingStars } from "./ui/shooting-stars";
import { ShootingStarsOverlay } from "./ui/shooting-stars-overlay";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

interface LayoutProps {
  children: ReactNode;
  className?: string;
  showStars?: boolean;
}

export function Layout({ children, className, showStars = false }: LayoutProps) {
  const isMobile = useIsMobile();

  return (
    <div className={cn("min-h-screen relative flex flex-col", className)}>
      {/* Mobile: Static stars + gradient. Desktop: Full animations */}
      {isMobile ? (
        <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
          {/* Static CSS stars for mobile */}
          <div className="absolute inset-0 overflow-hidden">
            {Array.from({ length: 80 }).map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-white/60"
                style={{
                  width: `${Math.random() * 2 + 1}px`,
                  height: `${Math.random() * 2 + 1}px`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  opacity: Math.random() * 0.5 + 0.3,
                }}
              />
            ))}
          </div>
        </div>
      ) : (
        <>
          {showStars ? (
            <StarsCanvas hue={270} brightness={8} maxStars={800} speedMultiplier={0.5} />
          ) : (
            <FlowingBackground />
          )}
          <ShootingStars />
          <ShootingStarsOverlay />
        </>
      )}
      <Header />
      <main className="relative z-10 pt-16 sm:pt-20 flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}
