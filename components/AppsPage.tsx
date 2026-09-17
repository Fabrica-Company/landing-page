import React, { useMemo, useState } from 'react';
import { AppKind, AppsPageProps } from '../types';
import { SectionTitle } from './SectionTitle';
import { AppCard } from './AppCard';
import { CallToAction } from './CallToAction';

const APP_KINDS: AppKind[] = ['Web App', 'Mobile App'];

export const AppsPage: React.FC<AppsPageProps> = ({
  apps,
  intro,
  setCurrentPage,
}) => {
  const [activeFilter, setActiveFilter] = useState<AppKind | 'All'>('All');

  const availableKinds = useMemo(
    () => APP_KINDS.filter((kind) => apps.some((app) => app.kind === kind)),
    [apps]
  );

  const visibleApps = useMemo(
    () =>
      activeFilter === 'All'
        ? apps
        : apps.filter((app) => app.kind === activeFilter),
    [apps, activeFilter]
  );

  const filters: Array<AppKind | 'All'> = ['All', ...availableKinds];

  return (
    <div className="space-y-16 md:space-y-24">
      <section id="apps">
        <SectionTitle title="Apps" subtitle={intro} />

        {availableKinds.length > 1 && (
          <div
            className="animated-item anim-fadeInUp flex flex-wrap gap-2 mb-8"
            role="group"
            aria-label="Filter apps by type"
          >
            {filters.map((filter) => {
              const isActive = filter === activeFilter;

              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  aria-pressed={isActive}
                  className={`px-3 py-1.5 text-sm font-medium rounded-full border transition-colors ${
                    isActive
                      ? 'bg-button-primary-bg dark:bg-dark-button-primary-bg text-button-primary-text dark:text-dark-button-primary-text border-transparent'
                      : 'bg-card dark:bg-dark-card text-text-secondary dark:text-dark-text-secondary border-border dark:border-dark-border hover:text-text-primary dark:hover:text-dark-text-primary'
                  }`}
                >
                  {filter === 'All' ? 'All' : `${filter}s`}
                </button>
              );
            })}
          </div>
        )}

        <div className="grid gap-4 md:grid-cols-2">
          {visibleApps.map((app, index) => (
            <AppCard
              key={app.id}
              app={app}
              onSelect={(appId) => setCurrentPage('app-detail', appId)}
              className="animated-item anim-fadeInUp"
              style={{ animationDelay: `${index * 100 + 100}ms` }}
            />
          ))}
        </div>

        {visibleApps.length === 0 && (
          <p className="text-sm text-text-secondary dark:text-dark-text-secondary">
            No apps in this category yet.
          </p>
        )}
      </section>

      <CallToAction setCurrentPage={setCurrentPage} />
    </div>
  );
};
