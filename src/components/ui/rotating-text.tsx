import { useState, useEffect } from 'react';

const words = ['NOTHING', 'SOMETHING', 'EVERYTHING'];

const getGradient = (word: string) => {
  if (word === 'SOMETHING') {
    // Shiny gold gradient
    return "linear-gradient(90deg, #fff1c1, #e6c97a, #c9a24d, #e6c97a, #fff1c1)";
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

  return (
    <span 
      className={`inline-block ${isAnimating ? 'animate-flip-up' : 'animate-flip-in'}`}
      style={{ 
        backgroundImage: getGradient(currentWord),
        backgroundSize: currentWord === 'SOMETHING' ? '200% 100%' : 'auto',
        animation: currentWord === 'SOMETHING' ? 'gradient-flow 3s ease infinite' : undefined,
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        paddingRight: '0.1em',
        filter: currentWord === 'SOMETHING' ? 'drop-shadow(0 0 20px rgba(230, 201, 122, 0.6)) drop-shadow(0 0 40px rgba(201, 162, 77, 0.4))' : undefined,
      }}
    >
      {currentWord}
    </span>
  );
};
