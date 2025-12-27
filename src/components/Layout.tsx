import { ReactNode } from "react";
import { Header } from "./Header";
import { StarsCanvas } from "./ui/stars-canvas";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen relative">
      <StarsCanvas hue={270} brightness={8} maxStars={800} speedMultiplier={0.5} />
      <Header />
      <main className="relative z-10 pt-16 sm:pt-20">
        {children}
      </main>
    </div>
  );
}
