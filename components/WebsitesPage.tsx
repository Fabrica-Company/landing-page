import React from 'react';
import { WebsitesPageProps } from '../types';
import { SectionTitle } from './SectionTitle';
import { WebsiteCard } from './WebsiteCard';
import { CallToAction } from './CallToAction';

export const WebsitesPage: React.FC<WebsitesPageProps> = ({
  websites,
  intro,
  setCurrentPage,
}) => {
  return (
    <div className="space-y-16 md:space-y-24">
      <section id="websites">
        <SectionTitle title="Websites" subtitle={intro} />

        <div className="grid gap-4 md:grid-cols-2">
          {websites.map((website, index) => (
            <WebsiteCard
              key={website.id}
              website={website}
              className="animated-item anim-fadeInUp"
              style={{ animationDelay: `${index * 100 + 100}ms` }}
            />
          ))}
        </div>
      </section>

      <CallToAction setCurrentPage={setCurrentPage} />
    </div>
  );
};
