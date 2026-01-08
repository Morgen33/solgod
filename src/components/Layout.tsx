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
      {/* Mobile: Static gradient only. Desktop: Full animations */}
      {isMobile ? (
        <div className="fixed inset-0 z-0 pointer-events-none bg-gradient-to-br from-background via-background to-primary/5" />
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
