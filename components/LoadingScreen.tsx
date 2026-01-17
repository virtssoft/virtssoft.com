
import React, { useEffect, useState } from 'react';
import { Icons } from '../constants';

interface LoadingScreenProps {
  onLoadingComplete?: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Simulate initial asset loading
    const timer = setTimeout(() => {
      setIsFadingOut(true);
      // Wait for fade animation to finish before unmounting
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
        {/* Animated Logo */}
        <div className="animate-pulse duration-[2000ms]">
          <Icons.Logo 
            className="h-16 md:h-24 w-auto" 
            fill="#00518B" 
          />
        </div>
        
        {/* Subtle loading bar or indicator */}
        <div className="mt-12 w-32 h-[1px] bg-black/5 overflow-hidden">
          <div className="h-full bg-[#00518B] animate-loadingBar origin-left"></div>
        </div>
      </div>

      <style>{`
        @keyframes loadingBar {
          0% { transform: scaleX(0); }
          50% { transform: scaleX(0.5); }
          100% { transform: scaleX(1); }
        }
        .animate-loadingBar {
          animation: loadingBar 2s ease-in-out forwards;
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;
