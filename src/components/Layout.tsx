import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { StarsCanvas } from "./ui/stars-canvas";
import { FlowingBackground } from "./ui/flowing-background";
import { ShootingStars } from "./ui/shooting-stars";
import { cn } from "@/lib/utils";

interface LayoutProps {
  children: ReactNode;
  className?: string;
  showStars?: boolean;
}

export function Layout({ children, className, showStars = false }: LayoutProps) {
  return (
    <div className={cn("min-h-screen relative flex flex-col", className)}>
      {showStars ? (
        <StarsCanvas hue={270} brightness={8} maxStars={800} speedMultiplier={0.5} />
      ) : (
        <FlowingBackground />
      )}
      <ShootingStars />
      <Header />
      <main className="relative z-10 pt-16 sm:pt-20 flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}
