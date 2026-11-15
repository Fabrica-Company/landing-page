import React from 'react';
import { Hero } from './Hero';
import { ServicesSection } from './ServicesSection';
import { ProcessSection } from './ProcessSection';
import { CallToAction } from './CallToAction';
import {
  COMPANY_INFO,
  COMPANY_STATS,
  HIDE_APPS,
  PROCESS_STEPS,
  SERVICES,
} from '../constants';

interface AboutPageProps {
  setCurrentPage: (pageId: string, itemId?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ setCurrentPage }) => (
  <>
    <Hero
      company={COMPANY_INFO}
      stats={COMPANY_STATS}
      setCurrentPage={setCurrentPage}
    />
    <ServicesSection
      services={SERVICES}
      title="What we do"
      subtitle={
        HIDE_APPS
          ? 'New sites, modernizing dated ones, and web apps.'
          : 'Four things, done properly: new sites, modernizing dated ones, and web and mobile apps.'
      }
    />
    <ProcessSection
      steps={PROCESS_STEPS}
      title="How we work"
      subtitle="A fixed scope up front, record delivery, and support after launch."
      onViewAllClick={() => setCurrentPage('websites')}
    />
    <CallToAction setCurrentPage={setCurrentPage} />
  </>
);
