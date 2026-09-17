import React, { useEffect, useState } from 'react';

interface RotatingWordProps {
  words: string[];
  /** Time each word stays on screen before it swaps. */
  intervalMs?: number;
  className?: string;
}

/**
 * Cycles through words in place. Every word is also rendered invisibly in the
 * same grid cell so the container is always as wide as the longest one and the
 * surrounding headline never reflows mid-animation.
 */
export const RotatingWord: React.FC<RotatingWordProps> = ({
  words,
  intervalMs = 2400,
  className = '',
}) => {
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<'in' | 'out'>('in');

  useEffect(() => {
    if (words.length <= 1) return;

    const leaveTimer = window.setTimeout(() => setPhase('out'), intervalMs);
    const enterTimer = window.setTimeout(() => {
      setIndex((current) => (current + 1) % words.length);
      setPhase('in');
    }, intervalMs + 260);

    return () => {
      window.clearTimeout(leaveTimer);
      window.clearTimeout(enterTimer);
    };
  }, [index, intervalMs, words.length]);

  if (words.length === 0) return null;

  return (
    // `items-baseline` makes the grid take its baseline from the words rather
    // than synthesizing one from the box edge, so it sits on the headline's
    // baseline instead of slightly below it.
    <span className={`inline-grid items-baseline ${className}`}>
      {words.map((word) => (
        <span
          key={word}
          aria-hidden="true"
          className="col-start-1 row-start-1 invisible whitespace-nowrap"
        >
          {word}
        </span>
      ))}
      <span
        className={`col-start-1 row-start-1 whitespace-nowrap text-accent-green dark:text-dark-accent-green transition-all duration-200 ease-out motion-reduce:transition-none ${
          phase === 'in'
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 -translate-y-2'
        }`}
      >
        {words[index]}
      </span>
    </span>
  );
};
