"use client";

import type React from "react";
import { cn } from "@/lib/utils";
interface ShinyButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  as?: "button" | "a";
  href?: string;
  target?: string;
  rel?: string;
}
export function ShinyButton({
  children,
  onClick,
  className = "",
  as = "button",
  href,
  target,
  rel
}: ShinyButtonProps) {
  const buttonClasses = cn("shiny-cta", className);
  if (as === "a" && href) {
    return;
  }
  return <button className={buttonClasses} onClick={onClick}>
      <span>{children}</span>
    </button>;
}