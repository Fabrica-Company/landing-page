import React from 'react';
import { WebsiteProject } from '../types';
import { ArrowRightIcon } from './icons';
import { ImagePlaceholder } from './ImagePlaceholder';

interface WebsiteCardProps {
  website: WebsiteProject;
  onSelect: (websiteId: string) => void;
  className?: string;
  style?: React.CSSProperties;
}

export const WebsiteCard: React.FC<WebsiteCardProps> = ({
  website,
  onSelect,
  className = '',
  style,
}) => (
  <button
    type="button"
    onClick={() => onSelect(website.id)}
    className={`group block w-full text-left ${className}`}
    style={style}
    aria-label={`View the ${website.name} case study`}
  >
    <article className="flex flex-col h-full overflow-hidden bg-card dark:bg-dark-card border border-border dark:border-dark-border rounded-xl shadow-lg transition-all duration-300 ease-in-out group-hover:-translate-y-1 group-hover:bg-card-hover dark:group-hover:bg-dark-card-hover">
      {website.cardImageUrl ? (
        <img
          src={website.cardImageUrl}
          alt={`${website.name} website`}
          className="w-full aspect-video object-cover"
        />
      ) : (
        <ImagePlaceholder
          label={`${website.name} preview`}
          className="w-full aspect-video"
        />
      )}

      <div className="flex flex-col flex-grow p-5">
        <div className="flex items-center gap-2 mb-3">
          <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-accent-green/15 text-accent-green">
            {website.workType}
          </span>
          <span className="text-xs text-text-secondary dark:text-dark-text-secondary">
            {website.industry} &middot; {website.year}
          </span>
        </div>

        <h3 className="text-lg font-semibold text-text-primary dark:text-dark-text-primary">
          {website.name}
        </h3>
        <p className="mt-1 text-sm text-text-secondary dark:text-dark-text-secondary leading-relaxed">
          {website.description}
        </p>

        {website.services.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {website.services.map((service) => (
              <span
                key={service}
                className="px-2 py-0.5 text-xs rounded-full bg-button-secondary-bg dark:bg-dark-button-secondary-bg text-text-secondary dark:text-dark-text-secondary"
              >
                {service}
              </span>
            ))}
          </div>
        )}

        <span className="mt-5 pt-4 border-t border-border dark:border-dark-border inline-flex items-center text-sm font-medium text-text-primary dark:text-dark-text-primary">
          View case study
          <ArrowRightIcon
            className="w-4 h-4 ml-1.5 transition-transform duration-200 ease-in-out group-hover:translate-x-1"
            aria-hidden
          />
        </span>
      </div>
    </article>
  </button>
);
