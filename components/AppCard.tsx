import React from 'react';
import { AppProject } from '../types';
import { ArrowRightIcon, AppsIcon, MonitorIcon } from './icons';
import { ImagePlaceholder } from './ImagePlaceholder';
import { PlayStoreMetrics } from './PlayStoreMetrics';

interface AppCardProps {
  app: AppProject;
  onSelect: (appId: string) => void;
  className?: string;
  style?: React.CSSProperties;
}

export const AppCard: React.FC<AppCardProps> = ({
  app,
  onSelect,
  className = '',
  style,
}) => {
  const KindIcon = app.kind === 'Mobile App' ? AppsIcon : MonitorIcon;

  return (
    <button
      type="button"
      onClick={() => onSelect(app.id)}
      className={`group block w-full text-left ${className}`}
      style={style}
      aria-label={`View details for ${app.name}`}
    >
      <article className="flex flex-col h-full overflow-hidden bg-card dark:bg-dark-card border border-border dark:border-dark-border rounded-xl shadow-lg transition-all duration-300 ease-in-out group-hover:-translate-y-1 group-hover:bg-card-hover dark:group-hover:bg-dark-card-hover">
        {app.cardImageUrl ? (
          <img
            src={app.cardImageUrl}
            alt={`${app.name} interface`}
            className="w-full aspect-video object-cover"
          />
        ) : (
          <ImagePlaceholder
            label={`${app.name} preview`}
            className="w-full aspect-video"
          />
        )}

        <div className="flex flex-col flex-grow p-5">
          <div className="flex items-center gap-2 mb-3">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 text-xs font-medium rounded-full bg-accent-green/15 text-accent-green">
              <KindIcon className="w-3.5 h-3.5 shrink-0" aria-hidden />
              {app.kind}
            </span>
            <span className="text-xs text-text-secondary dark:text-dark-text-secondary">
              {app.tag} &middot; {app.year}
            </span>
          </div>

          <h3 className="text-lg font-semibold text-text-primary dark:text-dark-text-primary">
            {app.name}
          </h3>
          <p className="mt-1 text-sm text-text-secondary dark:text-dark-text-secondary leading-relaxed">
            {app.description}
          </p>

          {app.storeStats && (
            <PlayStoreMetrics
              downloads={app.storeStats.downloads}
              rating={app.storeStats.rating}
              variant="compact"
              className="mt-4"
            />
          )}

          {app.platforms.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {app.platforms.map((platform) => (
                <span
                  key={platform}
                  className="px-2 py-0.5 text-xs rounded-full bg-button-secondary-bg dark:bg-dark-button-secondary-bg text-text-secondary dark:text-dark-text-secondary"
                >
                  {platform}
                </span>
              ))}
            </div>
          )}

          <span className="mt-5 pt-4 border-t border-border dark:border-dark-border inline-flex items-center text-sm font-medium text-text-primary dark:text-dark-text-primary">
            View details
            <ArrowRightIcon
              className="w-4 h-4 ml-1.5 transition-transform duration-200 ease-in-out group-hover:translate-x-1"
              aria-hidden
            />
          </span>
        </div>
      </article>
    </button>
  );
};
