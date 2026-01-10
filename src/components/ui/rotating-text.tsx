import { useState, useEffect } from 'react';

const words = ['NOTHING', 'SOMETHING', 'EVERYTHING'];

const getGradient = (word: string) => {
  if (word === 'SOMETHING') {
    // Shiny blue gradient (different tone from EVERYTHING)
    return "linear-gradient(90deg, #93c5fd, #3b82f6, #1d4ed8, #3b82f6, #93c5fd)";
  }
  if (word === 'NOTHING') {
    // Light pale yellow gradient - soft and twinkling
    return "linear-gradient(90deg, #fffef5, #fff9e6, #fff5cc, #fff9e6, #fffef5)";
  }
  if (word === 'EVERYTHING') {
    // Icy blue-white gradient
    return "linear-gradient(90deg, #ffffff, #e0f4ff, #a8d8ff, #70c4ff, #a8d8ff, #e0f4ff, #ffffff)";
  }
  // Blue branding gradient
  return "linear-gradient(90deg, #93c5fd, #3b82f6, #1d4ed8, #1e3a8a)";
};

export const RotatingText = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % words.length);
        setIsAnimating(false);
      }, 500);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  const currentWord = words[currentIndex];

  const isSpecialWord = currentWord === 'SOMETHING' || currentWord === 'NOTHING' || currentWord === 'EVERYTHING';

  const getGlow = (word: string) => {
    if (word === 'SOMETHING') {
      return 'drop-shadow(0 0 20px rgba(59, 130, 246, 0.6)) drop-shadow(0 0 40px rgba(29, 78, 216, 0.4))';
    }
    if (word === 'NOTHING') {
      return 'drop-shadow(0 0 20px rgba(255, 250, 220, 0.7)) drop-shadow(0 0 40px rgba(255, 245, 200, 0.5))';
    }
    if (word === 'EVERYTHING') {
      return 'drop-shadow(0 0 20px rgba(168, 216, 255, 0.7)) drop-shadow(0 0 40px rgba(112, 196, 255, 0.5))';
    }
    return undefined;
  };

  return (
    <span 
      className={`inline-block ${isAnimating ? 'animate-flip-up' : 'animate-flip-in'}`}
      style={{ 
        backgroundImage: getGradient(currentWord),
        backgroundSize: isSpecialWord ? '200% 100%' : 'auto',
        animation: isSpecialWord ? 'gradient-flow 3s ease infinite' : undefined,
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        paddingRight: '0.1em',
        filter: getGlow(currentWord),
      }}
    >
      {currentWord}
    </span>
  );
};
