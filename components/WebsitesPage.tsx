import React, { useMemo, useState } from 'react';
import { WebsiteProject, WebsitesPageProps, WebsiteWorkType } from '../types';
import { SectionTitle } from './SectionTitle';
import { WebsiteCard } from './WebsiteCard';
import { TestimonialsSection } from './TestimonialsSection';
import { CallToAction } from './CallToAction';

const WORK_TYPES: WebsiteWorkType[] = ['New build', 'Redesign', 'Modernization'];

export const WebsitesPage: React.FC<WebsitesPageProps> = ({
  websites,
  testimonials,
  intro,
  setCurrentPage,
}) => {
  const [activeFilter, setActiveFilter] = useState<WebsiteWorkType | 'All'>('All');

  const availableFilters = useMemo(
    () =>
      WORK_TYPES.filter((workType) =>
        websites.some((website) => website.workType === workType)
      ),
    [websites]
  );

  const visibleWebsites: WebsiteProject[] = useMemo(
    () =>
      activeFilter === 'All'
        ? websites
        : websites.filter((website) => website.workType === activeFilter),
    [websites, activeFilter]
  );

  const filters: Array<WebsiteWorkType | 'All'> = ['All', ...availableFilters];

  return (
    <div className="space-y-16 md:space-y-24">
      <section id="websites">
        <SectionTitle title="Websites" subtitle={intro} />

        {availableFilters.length > 1 && (
          <div
            className="animated-item anim-fadeInUp flex flex-wrap gap-2 mb-8"
            role="group"
            aria-label="Filter websites by type of work"
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
                  {filter}
                </button>
              );
            })}
          </div>
        )}

        <div className="grid gap-4 md:grid-cols-2">
          {visibleWebsites.map((website, index) => (
            <WebsiteCard
              key={website.id}
              website={website}
              onSelect={(websiteId) => setCurrentPage('website-detail', websiteId)}
              className="animated-item anim-fadeInUp"
              style={{ animationDelay: `${index * 100 + 100}ms` }}
            />
          ))}
        </div>

        {visibleWebsites.length === 0 && (
          <p className="text-sm text-text-secondary dark:text-dark-text-secondary">
            No projects in this category yet.
          </p>
        )}
      </section>

      <TestimonialsSection
        testimonials={testimonials}
        title="Client feedback"
        subtitle="What the people who hired us said once the site was live."
      />

      <CallToAction setCurrentPage={setCurrentPage} />
    </div>
  );
};
