import React from 'react';
import { ForDevTeamsPageProps } from '../types';
import { DEV_TEAMS_PAGE } from '../constants';
import { SectionTitle } from './SectionTitle';
import { CallToAction } from './CallToAction';
import { ArrowRightIcon, CheckCircleIcon, MailIcon } from './icons';

export const ForDevTeamsPage: React.FC<ForDevTeamsPageProps> = ({
  setCurrentPage,
}) => {
  const content = DEV_TEAMS_PAGE;

  return (
    <>
      {/* Hero — value proposition first, matching site hero hierarchy */}
      <section id="dev-teams-hero" className="pt-6 pb-4 md:pt-10">
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
            href="#dev-teams-stages"
            className="group inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium rounded-lg bg-button-secondary-bg dark:bg-dark-button-secondary-bg text-button-secondary-text dark:text-dark-button-secondary-text hover:bg-button-secondary-hover dark:hover:bg-dark-button-secondary-hover transition-colors"
          >
            See the four stages
            <ArrowRightIcon
              className="w-4 h-4 ml-2 transition-transform duration-200 ease-in-out group-hover:translate-x-1"
              aria-hidden
            />
          </a>
        </div>
      </section>

      {/* Audience */}
      <section id="dev-teams-audience">
        <SectionTitle title={content.audienceLabel} />
        <p className="animated-item anim-fadeInUp max-w-3xl text-base sm:text-lg text-text-secondary dark:text-dark-text-secondary leading-relaxed">
          {content.audience}
        </p>
      </section>

      {/* Problem / Solution — Beside-style labels, two-column on desktop */}
      <section id="dev-teams-problem-solution" className="grid gap-4 md:grid-cols-2">
        <article
          className="animated-item anim-fadeInUp flex flex-col p-5 sm:p-6 bg-card dark:bg-dark-card border border-border dark:border-dark-border rounded-xl shadow-lg"
          style={{ animationDelay: '100ms' }}
        >
          <p className="text-xs font-semibold tracking-[0.18em] uppercase text-text-secondary dark:text-dark-text-secondary mb-3">
            {content.problemLabel}
          </p>
          <p className="text-base text-text-primary dark:text-dark-text-primary leading-relaxed">
            {content.problem}
          </p>
        </article>
        <article
          className="animated-item anim-fadeInUp flex flex-col p-5 sm:p-6 bg-accent-blue-bg dark:bg-dark-accent-blue-bg border border-border dark:border-dark-border rounded-xl shadow-lg"
          style={{ animationDelay: '200ms' }}
        >
          <p className="text-xs font-semibold tracking-[0.18em] uppercase text-accent-blue dark:text-dark-accent-blue mb-3">
            {content.solutionLabel}
          </p>
          <p className="text-base text-text-primary dark:text-dark-text-primary leading-relaxed">
            {content.solution}
          </p>
        </article>
      </section>

      {/* Deliverables */}
      <section id="dev-teams-deliverables">
        <SectionTitle
          title={content.deliverablesTitle}
          subtitle={content.deliverablesSubtitle}
        />
        <ul className="grid gap-3 sm:grid-cols-2">
          {content.deliverables.map((item, index) => (
            <li
              key={item}
              className="animated-item anim-fadeInUp flex items-start gap-3 p-4 bg-card dark:bg-dark-card border border-border dark:border-dark-border rounded-xl"
              style={{ animationDelay: `${index * 80 + 150}ms` }}
            >
              <CheckCircleIcon
                className="w-5 h-5 mt-0.5 shrink-0 text-accent-green"
                aria-hidden
              />
              <span className="text-sm sm:text-base text-text-secondary dark:text-dark-text-secondary leading-relaxed">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* Four stages — Grammarly/Trawelt numbered columns, site card language */}
      <section id="dev-teams-stages">
        <SectionTitle
          title={content.stagesTitle}
          subtitle={content.stagesSubtitle}
        />
        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {content.stages.map((stage, index) => (
            <li
              key={stage.id}
              className="animated-item anim-fadeInUp"
              style={{ animationDelay: `${index * 100 + 200}ms` }}
            >
              <div className="flex flex-col h-full p-5 bg-card dark:bg-dark-card border border-border dark:border-dark-border rounded-xl shadow-lg transition-transform duration-300 ease-in-out hover:scale-[1.03]">
                <span className="text-xs font-semibold tracking-[0.18em] text-accent-blue dark:text-dark-accent-blue mb-3">
                  {stage.number}
                </span>
                <h3 className="text-base font-semibold text-text-primary dark:text-dark-text-primary mb-4">
                  {stage.title}
                </h3>
                <ul className="mt-auto space-y-2 border-t border-border dark:border-dark-border pt-4">
                  {stage.items.map((item) => (
                    <li
                      key={item}
                      className="text-sm text-text-secondary dark:text-dark-text-secondary leading-relaxed"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <CallToAction setCurrentPage={setCurrentPage} />
    </>
  );
};
