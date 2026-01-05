import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { StarsCanvas } from "./ui/stars-canvas";
import { cn } from "@/lib/utils";

interface LayoutProps {
  children: ReactNode;
  className?: string;
}

export function Layout({ children, className }: LayoutProps) {
  return (
    <div className={cn("min-h-screen relative flex flex-col", className)}>
      <StarsCanvas hue={270} brightness={8} maxStars={800} speedMultiplier={0.5} />
      <Header />
      <main className="relative z-10 pt-16 sm:pt-20 flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}
