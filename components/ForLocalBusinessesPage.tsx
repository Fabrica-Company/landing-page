import React from 'react';
import { ForLocalBusinessesPageProps } from '../types';
import { LOCAL_BUSINESSES_PAGE } from '../constants';
import { SectionTitle } from './SectionTitle';
import { CallToAction } from './CallToAction';
import { ArrowRightIcon, CheckCircleIcon, MailIcon } from './icons';

export const ForLocalBusinessesPage: React.FC<ForLocalBusinessesPageProps> = ({
  setCurrentPage,
}) => {
  const content = LOCAL_BUSINESSES_PAGE;

  return (
    <>
      <section id="local-businesses-hero" className="pt-6 pb-4 md:pt-10">
        <p className="animated-item anim-fadeInUp text-sm font-medium tracking-wide text-text-secondary dark:text-dark-text-secondary">
          {content.eyebrow}
        </p>
        <h1 className="animated-item anim-fadeInUp anim-delay-100 mt-3 max-w-3xl text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-text-primary dark:text-dark-text-primary">
          {content.valueProposition}
        </h1>
        <p className="animated-item anim-fadeInUp anim-delay-200 mt-4 max-w-2xl text-lg text-text-secondary dark:text-dark-text-secondary leading-relaxed">
          {content.valuePropositionSupport}
        </p>
        <div className="animated-item anim-fadeInUp anim-delay-300 mt-6 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => setCurrentPage('contact')}
            className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium rounded-lg bg-button-primary-bg dark:bg-dark-button-primary-bg text-button-primary-text dark:text-dark-button-primary-text hover:bg-button-primary-hover dark:hover:bg-dark-button-primary-hover transition-colors"
          >
            <MailIcon className="w-4 h-4 mr-2" aria-hidden />
            Start a project
          </button>
          <a
            href="#local-businesses-pillars"
            className="group inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium rounded-lg bg-button-secondary-bg dark:bg-dark-button-secondary-bg text-button-secondary-text dark:text-dark-button-secondary-text hover:bg-button-secondary-hover dark:hover:bg-dark-button-secondary-hover transition-colors"
          >
            See the two pillars
            <ArrowRightIcon
              className="w-4 h-4 ml-2 transition-transform duration-200 ease-in-out group-hover:translate-x-1"
              aria-hidden
            />
          </a>
        </div>
      </section>

      <section id="local-businesses-audience">
        <SectionTitle title={content.audienceLabel} />
        <p className="animated-item anim-fadeInUp max-w-3xl text-base sm:text-lg text-text-secondary dark:text-dark-text-secondary leading-relaxed">
          {content.audience}
        </p>
        <ul className="animated-item anim-fadeInUp anim-delay-100 mt-5 flex flex-wrap gap-2">
          {content.industries.map((industry) => (
            <li
              key={industry}
              className="px-3 py-1.5 text-sm text-text-secondary dark:text-dark-text-secondary bg-card dark:bg-dark-card border border-border dark:border-dark-border rounded-lg"
            >
              {industry}
            </li>
          ))}
        </ul>
      </section>

      <section id="local-businesses-problem">
        <SectionTitle title={content.problemLabel} subtitle={content.problem} />

        <p className="animated-item anim-fadeInUp mb-8 md:mb-10 max-w-3xl text-base text-text-secondary dark:text-dark-text-secondary leading-relaxed">
          {content.problemSummary}
        </p>

        <h3 className="animated-item anim-fadeInUp text-lg font-semibold text-text-primary dark:text-dark-text-primary mb-4">
          {content.leakPointsTitle}
        </h3>
        <ol className="grid gap-4 md:grid-cols-3">
          {content.leakPoints.map((point, index) => (
            <li
              key={point.id}
              className="animated-item anim-fadeInUp"
              style={{ animationDelay: `${index * 100 + 150}ms` }}
            >
              <article className="flex flex-col h-full p-5 bg-card dark:bg-dark-card border border-border dark:border-dark-border rounded-xl shadow-lg transition-transform duration-300 ease-in-out hover:scale-[1.02]">
                <span className="text-xs font-semibold tracking-[0.18em] text-accent-blue dark:text-dark-accent-blue mb-3">
                  {point.number}
                </span>
                <h4 className="text-base font-semibold text-text-primary dark:text-dark-text-primary mb-2">
                  {point.title}
                </h4>
                <p className="text-sm text-text-secondary dark:text-dark-text-secondary leading-relaxed">
                  {point.description}
                </p>
              </article>
            </li>
          ))}
        </ol>
      </section>

      <section id="local-businesses-solution">
        <div className="animated-item anim-fadeInUp p-5 sm:p-6 bg-accent-blue-bg dark:bg-dark-accent-blue-bg border border-border dark:border-dark-border rounded-xl shadow-lg">
          <p className="text-xs font-semibold tracking-[0.18em] uppercase text-accent-blue dark:text-dark-accent-blue mb-3">
            {content.solutionLabel}
          </p>
          <p className="text-base sm:text-lg text-text-primary dark:text-dark-text-primary leading-relaxed max-w-3xl">
            {content.solution}
          </p>
        </div>
      </section>

      <section id="local-businesses-pillars">
        <SectionTitle
          title={content.pillarsTitle}
          subtitle={content.pillarsSubtitle}
        />
        <div className="grid gap-4 md:grid-cols-2">
          {content.pillars.map((pillar, index) => (
            <article
              key={pillar.id}
              className="animated-item anim-fadeInUp flex flex-col p-5 sm:p-6 bg-card dark:bg-dark-card border border-border dark:border-dark-border rounded-xl shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-card-hover dark:hover:bg-dark-card-hover"
              style={{ animationDelay: `${index * 100 + 200}ms` }}
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-semibold tracking-[0.18em] text-accent-blue dark:text-dark-accent-blue">
                  {pillar.number}
                </span>
                <h3 className="text-lg font-semibold text-text-primary dark:text-dark-text-primary">
                  {pillar.title}
                </h3>
              </div>
              <p className="text-sm text-text-secondary dark:text-dark-text-secondary leading-relaxed">
                {pillar.objective}
              </p>
              <ul className="mt-4 pt-4 border-t border-border dark:border-dark-border grid gap-2">
                {pillar.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-text-secondary dark:text-dark-text-secondary"
                  >
                    <CheckCircleIcon
                      className="w-4 h-4 mt-0.5 shrink-0 text-accent-green"
                      aria-hidden
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <CallToAction setCurrentPage={setCurrentPage} />
    </>
  );
};
