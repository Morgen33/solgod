"use client";

import React, { useRef, useEffect, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface StarBackgroundProps {
  color?: string;
}

function StarBackground({ color }: StarBackgroundProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      className="pointer-events-none absolute block size-full"
    >
      <rect fill={color} width="100%" height="100%" rx="inherit" ry="inherit" />
      <mask
        id="star-button-mask"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="100%"
        height="100%"
      >
        <rect fill={color} width="100%" height="100%" rx="inherit" ry="inherit" />
      </mask>
    </svg>
  );
}

interface StarButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  lightWidth?: number;
  duration?: number;
  lightColor?: string;
  backgroundColor?: string;
  borderWidth?: number;
  className?: string;
  as?: "button" | "a";
  href?: string;
  target?: string;
  rel?: string;
}

export function StarButton({
  children,
  lightWidth = 110,
  duration = 3,
  lightColor = "#2053db",
  backgroundColor = "hsl(217, 64%, 6%)",
  borderWidth = 2,
  className,
  as = "button",
  href,
  target,
  rel,
  ...props
}: StarButtonProps) {
  const pathRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (pathRef.current) {
      const div = pathRef.current;
      div.style.setProperty(
        "--path",
        `path('M 0 0 H ${div.offsetWidth} V ${div.offsetHeight} H 0 V 0')`,
      );
    }
  }, []);

  const content = (
    <>
      <StarBackground color={backgroundColor} />

      <div
        ref={pathRef}
        style={
          {
            "--duration": duration,
            "--light-width": lightWidth,
            "--light-color": lightColor,
            "--border-width": `${borderWidth}px`,
          } as React.CSSProperties
        }
        className="absolute inset-0 size-full rounded-[inherit]"
      >
        <div
          className="animate-star-btn absolute size-[--light-width] rounded-full opacity-100"
          style={{
            width: `${lightWidth}px`,
            height: `${lightWidth}px`,
            background: `radial-gradient(circle, ${lightColor} 0%, transparent 70%)`,
            offsetPath: "var(--path)",
            transform: "translate(-50%, -50%)",
          }}
        />
      </div>

      <div
        className="absolute inset-[--border-width] rounded-[inherit]"
        style={{ background: backgroundColor }}
      />

      <span className="relative z-10 inline-flex items-center gap-2 text-foreground">
        {children}
      </span>
    </>
  );

  if (as === "a" && href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={cn(
          "relative cursor-pointer overflow-hidden rounded-lg px-8 py-4 font-semibold text-lg inline-flex items-center justify-center",
          className
        )}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      className={cn(
        "relative cursor-pointer overflow-hidden rounded-lg px-8 py-4 font-semibold text-lg inline-flex items-center justify-center",
        className
      )}
      {...props}
    >
      {content}
    </button>
  );
}
