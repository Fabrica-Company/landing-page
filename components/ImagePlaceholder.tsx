import React from 'react';
import { ImageIcon } from './icons';

interface ImagePlaceholderProps {
  /** Describes what belongs here, e.g. "Homepage screenshot". */
  label?: string;
  /** Icon only, for slots too small to fit a caption (logo circles etc). */
  compact?: boolean;
  className?: string;
}

/**
 * Stand-in for artwork that hasn't been added yet. Cards and galleries render
 * this whenever an image URL is missing, so a half-filled dataset still looks
 * deliberate instead of broken.
 */
export const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({
  label = 'Image',
  compact = false,
  className = '',
}) => (
  <div
    role="img"
    aria-label={`${label} — placeholder`}
    className={`flex flex-col items-center justify-center gap-1.5 overflow-hidden bg-input-bg dark:bg-dark-input-bg border border-dashed border-border dark:border-dark-border text-text-secondary dark:text-dark-text-secondary ${className}`}
  >
    <ImageIcon
      className={`${compact ? 'w-3.5 h-3.5' : 'w-4 h-4'} opacity-70 shrink-0`}
      aria-hidden
    />
    {!compact && (
      <span className="px-2 text-center text-[10px] font-medium uppercase tracking-[0.16em] leading-tight">
        {label}
      </span>
    )}
  </div>
);
