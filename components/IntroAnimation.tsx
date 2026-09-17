import React, { useEffect, useState } from 'react';
import { COMPANY_INFO } from '../constants';

interface IntroAnimationProps {
  onAnimationComplete: () => void;
}

export const IntroAnimation: React.FC<IntroAnimationProps> = ({
  onAnimationComplete,
}) => {
  const [animationState, setAnimationState] = useState<
    'entering' | 'static' | 'exiting'
  >('entering');
  const { introLetter1, introLetter2, introTagline } = COMPANY_INFO;

  useEffect(() => {
    // Letters and underline finish drawing.
    const enterTimer = window.setTimeout(() => setAnimationState('static'), 1500);
    // Whole overlay starts fading.
    const staticTimer = window.setTimeout(() => setAnimationState('exiting'), 2000);
    // Unmount once the fade is done.
    const exitTimer = window.setTimeout(() => onAnimationComplete(), 2800);

    return () => {
      window.clearTimeout(enterTimer);
      window.clearTimeout(staticTimer);
      window.clearTimeout(exitTimer);
    };
  }, [onAnimationComplete]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-background dark:bg-dark-background transition-opacity duration-700 ease-in-out ${
        animationState === 'exiting' ? 'opacity-0' : 'opacity-100'
      }`}
      aria-hidden="true"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="intro-bg-grid absolute inset-0" />
        <div className="intro-blob intro-blob--left absolute -left-12 -top-12 w-[260px] h-[260px] sm:-left-24 sm:-top-24 sm:w-[420px] sm:h-[420px]" />
        <div className="intro-blob intro-blob--right absolute -right-14 -bottom-14 w-[300px] h-[300px] sm:-right-28 sm:-bottom-28 sm:w-[520px] sm:h-[520px]" />
        <div className="intro-diagonal-text absolute inset-0" />
      </div>

      <div className="relative flex items-center justify-center text-6xl md:text-8xl font-bold tracking-tight text-text-primary dark:text-dark-text-primary">
        <span className="intro-letter block" style={{ animationDelay: '0.1s' }}>
          {introLetter1}
        </span>
        <span className="intro-letter block" style={{ animationDelay: '0.2s' }}>
          {introLetter2}
        </span>
        <div className="intro-line absolute bottom-0 w-full h-0.5 bg-accent-green dark:bg-dark-accent-green" />
      </div>

      <div className="intro-tagline absolute bottom-8 sm:bottom-10 md:bottom-12 left-1/2 -translate-x-1/2 px-4 text-center text-[10px] sm:text-xs md:text-sm uppercase tracking-[0.18em] sm:tracking-[0.25em] text-text-secondary dark:text-dark-text-secondary whitespace-nowrap">
        {introTagline}
      </div>
    </div>
  );
};
