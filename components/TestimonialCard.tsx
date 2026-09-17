import React from 'react';
import { Testimonial } from '../types';
import { ImagePlaceholder } from './ImagePlaceholder';

interface TestimonialCardProps {
  testimonial: Testimonial;
  className?: string;
  style?: React.CSSProperties;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  testimonial,
  className = '',
  style,
}) => (
  <figure
    className={`flex flex-col h-full p-5 sm:p-6 bg-card dark:bg-dark-card border border-border dark:border-dark-border rounded-xl shadow-lg ${className}`}
    style={style}
  >
    <div className="flex items-center gap-3 mb-4">
      {testimonial.logoImageUrl ? (
        <img
          src={testimonial.logoImageUrl}
          alt={`${testimonial.company} logo`}
          className="w-9 h-9 rounded-full object-cover border border-border dark:border-dark-border bg-white"
        />
      ) : (
        <ImagePlaceholder
          compact
          label={`${testimonial.company} logo`}
          className="w-9 h-9 rounded-full shrink-0"
        />
      )}
      <span className="text-sm font-semibold text-text-primary dark:text-dark-text-primary">
        {testimonial.company}
      </span>
    </div>

    <blockquote className="flex-grow text-sm text-text-secondary dark:text-dark-text-secondary leading-relaxed">
      &ldquo;{testimonial.quote}&rdquo;
    </blockquote>

    <figcaption className="mt-5 pt-4 border-t border-border dark:border-dark-border">
      <p className="text-sm font-medium text-text-primary dark:text-dark-text-primary">
        {testimonial.authorName}
      </p>
      <p className="text-xs text-text-secondary dark:text-dark-text-secondary">
        {testimonial.authorRole}, {testimonial.company}
      </p>
    </figcaption>
  </figure>
);
