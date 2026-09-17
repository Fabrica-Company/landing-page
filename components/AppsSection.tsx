import React from 'react';
import { AppsSectionProps } from '../types';
import { SectionTitle } from './SectionTitle';
import { AppCard } from './AppCard';
import { ArrowRightIcon } from './icons';

export const AppsSection: React.FC<AppsSectionProps> = ({
  apps,
  setCurrentPage,
  title = 'Apps we built',
  subtitle,
  maxItems,
  onViewAllClick,
}) => {
  const visible = maxItems ? apps.slice(0, maxItems) : apps;

  if (visible.length === 0) return null;

  return (
    <section id="apps-preview">
      <SectionTitle title={title} subtitle={subtitle} />
      <div className="grid gap-4 md:grid-cols-2">
        {visible.map((app, index) => (
          <AppCard
            key={app.id}
            app={app}
            onSelect={(appId) => setCurrentPage('app-detail', appId)}
            className="animated-item anim-fadeInUp"
            style={{ animationDelay: `${index * 100 + 200}ms` }}
          />
        ))}
      </div>

      {onViewAllClick && (
        <div
          className="animated-item anim-fadeInUp mt-8 md:mt-12 text-center"
          style={{ animationDelay: `${visible.length * 100 + 300}ms` }}
        >
          <button
            type="button"
            onClick={onViewAllClick}
            className="group inline-flex items-center text-sm font-medium text-accent-green hover:text-accent-green/80 transition-colors"
          >
            View all apps
            <ArrowRightIcon
              className="w-4 h-4 ml-1.5 transition-transform duration-200 ease-in-out group-hover:translate-x-1"
              aria-hidden
            />
          </button>
        </div>
      )}
    </section>
  );
};
