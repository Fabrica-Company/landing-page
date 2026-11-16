import React, { useEffect, useState } from 'react';

export interface CrossfadeSlide {
  id: string;
  imageUrl: string;
  imageAlt: string;
  label?: string;
}

interface ImageCrossfadeProps {
  slides: CrossfadeSlide[];
  /** Interval between slides in ms. Default 5000. */
  intervalMs?: number;
  className?: string;
  /** Called whenever the active slide index changes. */
  onIndexChange?: (index: number) => void;
}

export const ImageCrossfade: React.FC<ImageCrossfadeProps> = ({
  slides,
  intervalMs = 5000,
  className = '',
  onIndexChange,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;

    const id = window.setInterval(() => {
      setActiveIndex((current) => {
        const next = (current + 1) % slides.length;
        return next;
      });
    }, intervalMs);

    return () => window.clearInterval(id);
  }, [slides.length, intervalMs]);

  useEffect(() => {
    onIndexChange?.(activeIndex);
  }, [activeIndex, onIndexChange]);

  if (slides.length === 0) return null;

  return (
    <div
      className={`relative overflow-hidden rounded-xl border border-border dark:border-dark-border bg-card dark:bg-dark-card shadow-lg ${className}`}
      role="img"
      aria-label={slides[activeIndex]?.imageAlt}
    >
      {slides.map((slide, index) => (
        <img
          key={slide.id}
          src={slide.imageUrl}
          alt={slide.imageAlt}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-in-out ${
            index === activeIndex ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}

      <div
        className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none"
        aria-hidden
      />

      {slides[activeIndex]?.label && (
        <p className="absolute inset-x-0 bottom-0 p-3 sm:p-4 pr-16 sm:pr-20 text-xs sm:text-sm font-medium text-white/95 leading-snug">
          {slides[activeIndex].label}
        </p>
      )}

      <div
        className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 flex items-center gap-1.5"
        aria-hidden
      >
        {slides.map((slide, index) => (
          <span
            key={slide.id}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === activeIndex
                ? 'w-5 bg-white'
                : 'w-1.5 bg-white/45'
            }`}
          />
        ))}
      </div>
    </div>
  );
};
