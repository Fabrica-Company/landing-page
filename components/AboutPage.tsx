import React from 'react';
import { Hero } from './Hero';
import { ServicesSection } from './ServicesSection';
import { ProcessSection } from './ProcessSection';
import { CallToAction } from './CallToAction';
import {
  COMPANY_INFO,
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
      setCurrentPage={setCurrentPage}
    />
    <ServicesSection
      services={SERVICES}
      title="What we do"
      subtitle="Two kinds of teams. Two sets of processes — built around how you already work."
      setCurrentPage={setCurrentPage}
    />
    <ProcessSection
      steps={PROCESS_STEPS}
      title="How we work"
      subtitle="A fixed scope up front, then processes and workflows you can keep running."
    />
    <CallToAction setCurrentPage={setCurrentPage} />
  </>
);
