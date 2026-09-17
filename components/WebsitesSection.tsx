import React from 'react';
import { WebsitesSectionProps } from '../types';
import { SectionTitle } from './SectionTitle';
import { WebsiteCard } from './WebsiteCard';
import { ArrowRightIcon } from './icons';

export const WebsitesSection: React.FC<WebsitesSectionProps> = ({
  websites,
  setCurrentPage,
  title = 'Selected client work',
  subtitle,
  maxItems,
  onViewAllClick,
}) => {
  const visible = maxItems ? websites.slice(0, maxItems) : websites;

  if (visible.length === 0) return null;

  return (
    <section id="client-work">
      <SectionTitle title={title} subtitle={subtitle} />
      <div className="grid gap-4 md:grid-cols-2">
        {visible.map((website, index) => (
          <WebsiteCard
            key={website.id}
            website={website}
            onSelect={(websiteId) => setCurrentPage('website-detail', websiteId)}
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
            View all websites
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
