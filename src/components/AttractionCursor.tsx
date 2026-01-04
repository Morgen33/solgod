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

  useEffect(() => {
    if (!canvasRef.current) return;

    const initCursor = () => {
      if (canvasRef.current && window.AttractionCursor) {
        try {
          appRef.current = window.AttractionCursor(canvasRef.current, {
            particles: {
              attractionIntensity: 0.75,
              size: 1.5,
            },
          });

          const changeColors = () => {
            if (appRef.current?.particles?.light1 && appRef.current?.particles?.light2) {
              appRef.current.particles.light1.color.set(Math.random() * 0xffffff);
              appRef.current.particles.light2.color.set(Math.random() * 0xffffff);
            }
          };

          intervalRef.current = setInterval(changeColors, 5000);
        } catch (err) {
          console.error("Failed to initialize AttractionCursor:", err);
        }
      }
    };

    // Check if already loaded
    if (window.AttractionCursor) {
      initCursor();
    } else {
      // Load via script tag using the importmap from index.html
      const script = document.createElement("script");
      script.type = "module";
      script.textContent = `
        import AttractionCursor from "attraction-cursor";
        window.AttractionCursor = AttractionCursor;
        window.dispatchEvent(new CustomEvent('attractionCursorReady'));
      `;
      document.head.appendChild(script);

      const handleReady = () => {
        initCursor();
        window.removeEventListener("attractionCursorReady", handleReady);
      };

      window.addEventListener("attractionCursorReady", handleReady);
    }

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

