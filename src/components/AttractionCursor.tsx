import { useEffect, useRef } from "react";

declare global {
  interface Window {
    AttractionCursor: any;
  }
}

const AttractionCursor = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const appRef = useRef<any>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const scriptLoadedRef = useRef<boolean>(false);

  useEffect(() => {
    if (!canvasRef.current) return;

    const initAttractionCursor = async () => {
      // Load AttractionCursor from CDN if not already loaded
      if (!window.AttractionCursor && !scriptLoadedRef.current) {
        scriptLoadedRef.current = true;
        const script = document.createElement("script");
        script.type = "module";
        script.textContent = `
          import AttractionCursor from "https://cdn.jsdelivr.net/npm/threejs-components@0.0.26/build/cursors/attraction1.min.js";
          window.AttractionCursor = AttractionCursor;
          window.dispatchEvent(new CustomEvent('attractionCursorReady'));
        `;
        document.head.appendChild(script);

        // Wait for the library to load
        await new Promise<void>((resolve) => {
          const handleReady = () => {
            window.removeEventListener("attractionCursorReady", handleReady);
            resolve();
          };
          window.addEventListener("attractionCursorReady", handleReady);
        });
      }

      // Initialize the cursor
      if (canvasRef.current && window.AttractionCursor) {
        appRef.current = window.AttractionCursor(canvasRef.current, {
          particles: {
            attractionIntensity: 0.75,
            size: 1.5,
          },
        });

        // Function to change colors
        const changeColors = () => {
          if (appRef.current?.particles?.light1 && appRef.current?.particles?.light2) {
            appRef.current.particles.light1.color.set(Math.random() * 0xffffff);
            appRef.current.particles.light2.color.set(Math.random() * 0xffffff);
          }
        };

        // Auto-change colors every 5 seconds (5000ms)
        intervalRef.current = setInterval(changeColors, 5000);
      }
    };

    initAttractionCursor();

    // Cleanup function
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="attraction-canvas"
      style={{
        position: "fixed",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
};

export default AttractionCursor;

