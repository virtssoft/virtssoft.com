
import React, { useEffect, useState } from 'react';
import { Icons } from '../constants.tsx';

interface LoadingScreenProps {
  onLoadingComplete?: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFadingOut(true);
      setTimeout(() => {
        setIsVisible(false);
        if (onLoadingComplete) onLoadingComplete();
      }, 800);
    }, 2000);

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-[#FFFFFD] transition-opacity duration-700 ease-in-out ${
        isFadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="relative flex flex-col items-center">
        <div className="animate-pulse duration-[2000ms]">
          <Icons.Logo 
            className="h-16 md:h-24 w-auto" 
            fill="#00518B" 
          />
        </div>
        <div className="mt-12 w-32 h-[1px] bg-black/5 overflow-hidden">
          <div className="h-full bg-[#00518B] animate-loadingBar origin-left"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
