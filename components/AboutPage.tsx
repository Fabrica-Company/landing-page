import React from 'react';
import { Hero } from './Hero';
import { ProcessSection } from './ProcessSection';
import { CallToAction } from './CallToAction';
import { useLanguage } from '../LanguageContext';

interface AboutPageProps {
  setCurrentPage: (pageId: string, itemId?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ setCurrentPage }) => {
  const { company, processSteps, t } = useLanguage();

  return (
    <>
      <Hero company={company} setCurrentPage={setCurrentPage} />
      <ProcessSection
        steps={processSteps}
        title={t.about.processTitle}
        subtitle={t.about.processSubtitle}
      />
      <CallToAction setCurrentPage={setCurrentPage} />
    </>
  );
};
