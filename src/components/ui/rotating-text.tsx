import { useState, useEffect } from 'react';

const words = ['NOTHING', 'SOMETHING', 'EVERYTHING'];

const getGradient = (word: string) => {
  if (word === 'SOMETHING') {
    // Shiny gold gradient
    return "linear-gradient(90deg, #fff1c1, #e6c97a, #c9a24d, #e6c97a, #fff1c1)";
  }
  if (word === 'NOTHING') {
    // Shiny silver gradient
    return "linear-gradient(90deg, #ffffff, #e0e0e0, #b8b8b8, #e0e0e0, #ffffff)";
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

  const isSpecialWord = currentWord === 'SOMETHING' || currentWord === 'NOTHING';

  const getGlow = (word: string) => {
    if (word === 'SOMETHING') {
      return 'drop-shadow(0 0 20px rgba(230, 201, 122, 0.6)) drop-shadow(0 0 40px rgba(201, 162, 77, 0.4))';
    }
    if (word === 'NOTHING') {
      return 'drop-shadow(0 0 20px rgba(255, 255, 255, 0.5)) drop-shadow(0 0 40px rgba(200, 200, 200, 0.3))';
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
