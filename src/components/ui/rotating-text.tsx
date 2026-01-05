import { useState, useEffect } from 'react';

const words = ['NOTHING', 'SOMETHING', 'EVERYTHING'];

const getGradient = (word: string) => {
  if (word === 'SOMETHING') {
    // Shiny gold gradient
    return "linear-gradient(90deg, #fff1c1, #e6c97a, #c9a24d, #e6c97a, #fff1c1)";
  }
  if (word === 'NOTHING') {
    // Shiny grey silver gradient
    return "linear-gradient(90deg, #c0c0c0, #a0a0a0, #808080, #a0a0a0, #c0c0c0)";
  }
  if (word === 'EVERYTHING') {
    // Icy blue-white gradient
    return "linear-gradient(90deg, #ffffff, #e0f4ff, #a8d8ff, #70c4ff, #a8d8ff, #e0f4ff, #ffffff)";
  }
  // Purple branding gradient
  return "linear-gradient(90deg, #d0a7f0, #a463dd, #7a18d1, #4f0c9b)";
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
      return 'drop-shadow(0 0 20px rgba(230, 201, 122, 0.6)) drop-shadow(0 0 40px rgba(201, 162, 77, 0.4))';
    }
    if (word === 'NOTHING') {
      return 'drop-shadow(0 0 20px rgba(160, 160, 160, 0.5)) drop-shadow(0 0 40px rgba(128, 128, 128, 0.3))';
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
