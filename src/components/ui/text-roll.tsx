"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

const STAGGER = 0.035;

interface TextRollProps {
  children: string;
  className?: string;
  center?: boolean;
}

const TextRoll: React.FC<TextRollProps> = ({ children, className, center = false }) => {
  return (
    <motion.span
      initial="initial"
      whileHover="hovered"
      className={cn("relative block overflow-hidden whitespace-nowrap", className)}
    >
      {/* Top Text (Slides up on hover) */}
      <span className="block">
        {children.split("").map((l, i) => {
          const delay = center
            ? STAGGER * Math.abs(i - (children.length - 1) / 2)
            : STAGGER * i;

          return (
            <motion.span
              key={`top-${i}`}
              className="inline-block"
              variants={{
                initial: { y: 0 },
                hovered: { y: "-100%" },
              }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
                delay,
              }}
            >
              {l === " " ? "\u00A0" : l}
            </motion.span>
          );
        })}
      </span>

      {/* Bottom Text (Slides in from bottom on hover) */}
      <span className="absolute inset-0 block">
        {children.split("").map((l, i) => {
          const delay = center
            ? STAGGER * Math.abs(i - (children.length - 1) / 2)
            : STAGGER * i;

          return (
            <motion.span
              key={`bottom-${i}`}
              className="inline-block"
              variants={{
                initial: { y: "100%" },
                hovered: { y: 0 },
              }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
                delay,
              }}
            >
              {l === " " ? "\u00A0" : l}
            </motion.span>
          );
        })}
      </span>
    </motion.span>
  );
};

// Auto-rotating version for the hero
const words = ['NOTHING', 'SOMETHING', 'EVERYTHING'];

const getGradient = (word: string) => {
  if (word === 'SOMETHING') {
    return "linear-gradient(90deg, #93c5fd, #3b82f6, #1d4ed8, #3b82f6, #93c5fd)";
  }
  if (word === 'NOTHING') {
    return "linear-gradient(90deg, #d0d0d0, #b0b0b0, #c0c0c0, #b0b0b0, #d0d0d0)";
  }
  if (word === 'EVERYTHING') {
    return "linear-gradient(90deg, #ffffff, #e0f4ff, #a8d8ff, #70c4ff, #a8d8ff, #e0f4ff, #ffffff)";
  }
  return "linear-gradient(90deg, #93c5fd, #3b82f6, #1d4ed8, #1e3a8a)";
};

const getGlow = (word: string) => {
  if (word === 'SOMETHING') {
    return 'drop-shadow(0 0 20px rgba(59, 130, 246, 0.6)) drop-shadow(0 0 40px rgba(29, 78, 216, 0.4))';
  }
  if (word === 'NOTHING') {
    return 'drop-shadow(0 0 15px rgba(180, 180, 180, 0.5)) drop-shadow(0 0 30px rgba(160, 160, 160, 0.3))';
  }
  if (word === 'EVERYTHING') {
    return 'drop-shadow(0 0 20px rgba(168, 216, 255, 0.7)) drop-shadow(0 0 40px rgba(112, 196, 255, 0.5))';
  }
  return undefined;
};

const RotatingTextRoll: React.FC<{ className?: string }> = ({ className }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  const currentWord = words[currentIndex];

  return (
    <div className={cn("relative inline-block", className)}>
      <AnimatePresence mode="wait">
        <motion.span
          key={currentWord}
          initial="initial"
          animate="visible"
          exit="exit"
          className="inline-block"
          style={{
            backgroundImage: getGradient(currentWord),
            backgroundSize: "200% 100%",
            animation: "gradient-flow 3s ease infinite",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            filter: getGlow(currentWord),
          }}
        >
          {currentWord.split("").map((letter, i) => (
            <motion.span
              key={`${currentWord}-${i}`}
              className="inline-block"
              variants={{
                initial: { y: "100%", opacity: 0 },
                visible: { y: 0, opacity: 1 },
                exit: { y: "-100%", opacity: 0 },
              }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
                delay: STAGGER * i,
              }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

export { TextRoll, RotatingTextRoll };
