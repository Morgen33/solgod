"use client";

import { memo, useCallback, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { animate } from "motion/react";

interface GlowingEffectProps {
  blur?: number;
  inactiveZone?: number;
  proximity?: number;
  spread?: number;
  variant?: "default" | "white";
  glow?: boolean;
  className?: string;
  disabled?: boolean;
  movementDuration?: number;
  borderWidth?: number;
}

const GlowingEffect = memo(
  ({
    blur = 0,
    inactiveZone = 0.7,
    proximity = 0,
    spread = 20,
    variant = "default",
    glow = false,
    className,
    movementDuration = 2,
    borderWidth = 1,
    disabled = true,
  }: GlowingEffectProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const lastPosition = useRef({ x: 0, y: 0 });
    const animationFrameRef = useRef<number>(0);

    const handleMove = useCallback(
      (e?: MouseEvent | { x: number; y: number }) => {
        if (!containerRef.current) return;

        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }

        animationFrameRef.current = requestAnimationFrame(() => {
          const element = containerRef.current;
          if (!element) return;

          const { left, top, width, height } = element.getBoundingClientRect();
          const mouseX = e?.x ?? lastPosition.current.x;
          const mouseY = e?.y ?? lastPosition.current.y;

          if (e) {
            lastPosition.current = { x: mouseX, y: mouseY };
          }

          const center = [left + width * 0.5, top + height * 0.5];
          const distanceFromCenter = Math.hypot(
            mouseX - center[0],
            mouseY - center[1]
          );
          const inactiveRadius = 0.5 * Math.min(width, height) * inactiveZone;

          if (distanceFromCenter < inactiveRadius) {
            element.style.setProperty("--active", "0");
            return;
          }

          const isActive =
            mouseX > left - proximity &&
            mouseX < left + width + proximity &&
            mouseY > top - proximity &&
            mouseY < top + height + proximity;

          element.style.setProperty("--active", isActive ? "1" : "0");

          if (!isActive) return;

          const currentAngle =
            parseFloat(element.style.getPropertyValue("--start")) || 0;
          let targetAngle =
            (180 * Math.atan2(mouseY - center[1], mouseX - center[0])) /
              Math.PI +
            90;

          const angleDiff = ((targetAngle - currentAngle + 180) % 360) - 180;
          const newAngle = currentAngle + angleDiff;

          animate(currentAngle, newAngle, {
            duration: movementDuration,
            ease: [0.16, 1, 0.3, 1],
            onUpdate: (value) => {
              element.style.setProperty("--start", String(value));
            },
          });
        });
      },
      [inactiveZone, proximity, movementDuration]
    );

    useEffect(() => {
      if (disabled) return;

      const handleScroll = () => handleMove();
      const handlePointerMove = (e: PointerEvent) => handleMove(e);

      window.addEventListener("scroll", handleScroll, { passive: true });
      document.body.addEventListener("pointermove", handlePointerMove, {
        passive: true,
      });

      return () => {
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }
        window.removeEventListener("scroll", handleScroll);
        document.body.removeEventListener("pointermove", handlePointerMove);
      };
    }, [handleMove, disabled]);

    return (
      <div
        className={cn(
          "pointer-events-none absolute -inset-px rounded-[inherit] opacity-0 transition-opacity duration-500",
          "opacity-[var(--active)]",
          glow && "opacity-100",
          blur > 0 && "blur-[var(--blur)]",
          className,
          disabled && "!hidden"
        )}
        ref={containerRef}
        style={
          {
            "--blur": `${blur}px`,
            "--spread": spread,
            "--start": "0",
            "--active": "0",
            "--glowingeffect-border-width": `${borderWidth}px`,
            "--repeating-conic-gradient-times": "5",
            "--gradient":
              variant === "white"
                ? `conic-gradient(
                    from calc(var(--start) * 1deg),
                    #fff,
                    transparent 10%,
                    transparent 90%,
                    #fff
                  )`
                : `conic-gradient(
                    from calc(var(--start) * 1deg),
                    #d0a7f0,
                    #a463dd,
                    #7a18d1,
                    transparent 25%,
                    transparent 75%,
                    #7a18d1,
                    #a463dd,
                    #d0a7f0
                  )`,
          } as React.CSSProperties
        }
      >
        <div
          className={cn(
            "glow",
            "rounded-[inherit]",
            'after:content-[""] after:rounded-[inherit] after:absolute after:inset-[calc(var(--glowingeffect-border-width)*-1)] after:border-[length:var(--glowingeffect-border-width)] after:border-transparent after:[background:padding-box_linear-gradient(transparent,transparent),border-box_var(--gradient)] after:[mask:padding-box_linear-gradient(#fff,#fff),border-box_linear-gradient(#fff,#fff)] after:[mask-composite:intersect] after:[background-origin:border-box] after:[background-clip:padding-box,border-box]',
            'before:content-[""] before:rounded-[inherit] before:absolute before:inset-[calc(var(--glowingeffect-border-width)*-1)] before:border-[length:var(--glowingeffect-border-width)] before:border-transparent before:[background:padding-box_linear-gradient(transparent,transparent),border-box_var(--gradient)] before:[mask:padding-box_linear-gradient(#fff,#fff),border-box_linear-gradient(#fff,#fff)] before:[mask-composite:intersect] before:[background-origin:border-box] before:[background-clip:padding-box,border-box]',
            "before:blur-[calc(var(--spread)*1px)] before:opacity-50"
          )}
        />
      </div>
    );
  }
);

GlowingEffect.displayName = "GlowingEffect";

export { GlowingEffect };
