import { useState, useEffect } from 'react';

const words = ['EVERYTHING', 'SOMETHING', 'NOTHING'];

const getGradient = (word: string) => {
  if (word === 'SOMETHING') {
    return "linear-gradient(90deg, #93c5fd, #3b82f6, #1d4ed8, #3b82f6, #93c5fd)";
  }
  if (word === 'NOTHING') {
    return "linear-gradient(90deg, #c0c0c0, #a0a0a0, #808080, #a0a0a0, #c0c0c0)";
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
    return 'drop-shadow(0 0 20px rgba(160, 160, 160, 0.5)) drop-shadow(0 0 40px rgba(128, 128, 128, 0.3))';
  }
  if (word === 'EVERYTHING') {
    return 'drop-shadow(0 0 20px rgba(168, 216, 255, 0.7)) drop-shadow(0 0 40px rgba(112, 196, 255, 0.5))';
  }
  return undefined;
};

export const RotatingText = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsExiting(true);
      
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % words.length);
        setIsExiting(false);
      }, 600);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  const currentWord = words[currentIndex];

  return (
    <span 
      className="inline-block overflow-hidden"
      style={{ perspective: '1000px' }}
    >
      <span 
        className="inline-block transition-all duration-500 ease-in-out"
        style={{ 
          backgroundImage: getGradient(currentWord),
          backgroundSize: '200% 100%',
          animation: 'gradient-flow 3s ease infinite',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          paddingRight: '0.1em',
          filter: getGlow(currentWord),
          transform: isExiting 
            ? 'rotateX(-90deg) translateY(-50%)' 
            : 'rotateX(0deg) translateY(0)',
          opacity: isExiting ? 0 : 1,
          transformOrigin: 'center bottom',
        }}
      >
        {currentWord}
      </span>
    </span>
  );
};
