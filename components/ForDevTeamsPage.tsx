import React from 'react';
import { ForDevTeamsPageProps } from '../types';
import { DEV_TEAMS_PAGE } from '../constants';
import { SectionTitle } from './SectionTitle';
import { ImagePlaceholder } from './ImagePlaceholder';
import { CheckCircleIcon, MailIcon } from './icons';

export const ForDevTeamsPage: React.FC<ForDevTeamsPageProps> = ({
  setCurrentPage,
}) => {
  const content = DEV_TEAMS_PAGE;

  return (
    <>
      <section id="dev-teams-hero" className="pt-6 pb-4 md:pt-10">
        <h1 className="animated-item anim-fadeInUp max-w-3xl text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-text-primary dark:text-dark-text-primary">
          {content.valueProposition}
        </h1>
        <p className="animated-item anim-fadeInUp anim-delay-100 mt-4 max-w-2xl text-lg text-text-secondary dark:text-dark-text-secondary leading-relaxed">
          {content.valuePropositionSupport}
        </p>
        <div className="animated-item anim-fadeInUp anim-delay-200 mt-6 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => setCurrentPage('contact')}
            className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium rounded-lg bg-button-primary-bg dark:bg-dark-button-primary-bg text-button-primary-text dark:text-dark-button-primary-text hover:bg-button-primary-hover dark:hover:bg-dark-button-primary-hover transition-colors"
          >
            <MailIcon className="w-4 h-4 mr-2" aria-hidden />
            Start a project
          </button>
        </div>
      </section>

      <section id="dev-teams-audience">
        <SectionTitle title={content.audienceLabel} subtitle={content.audience} />
        <ul className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {content.audienceProfiles.map((profile, index) => (
            <li
              key={profile.id}
              className="animated-item anim-fadeInUp"
              style={{ animationDelay: `${index * 80 + 150}ms` }}
            >
              <article className="group relative overflow-hidden rounded-xl border border-border dark:border-dark-border bg-card dark:bg-dark-card shadow-lg aspect-[3/4] transition-transform duration-300 ease-in-out hover:scale-[1.02]">
                {profile.imageUrl ? (
                  <img
                    src={profile.imageUrl}
                    alt={profile.imageAlt || profile.name}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                  />
                ) : (
                  <ImagePlaceholder
                    label={profile.name}
                    className="absolute inset-0 h-full w-full rounded-none border-0"
                  />
                )}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"
                  aria-hidden
                />
                <p className="absolute inset-x-0 bottom-0 p-3 sm:p-4 text-sm sm:text-base font-semibold text-white leading-snug">
                  {profile.name}
                </p>
              </article>
            </li>
          ))}
        </ul>
      </section>

      <section id="dev-teams-problem">
        <SectionTitle title={content.problemLabel} subtitle={content.problem} />

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
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold tracking-[0.18em] text-accent-blue dark:text-dark-accent-blue">
                    {point.number}
                  </span>
                  <span className="flex items-center justify-center w-10 h-10 shrink-0 rounded-full bg-accent-blue/15 text-accent-blue dark:bg-dark-accent-blue/15 dark:text-dark-accent-blue">
                    <point.icon className="w-5 h-5" aria-hidden />
                  </span>
                </div>
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
              <article className="flex flex-col h-full p-5 sm:p-6 bg-card dark:bg-dark-card border border-border dark:border-dark-border rounded-xl shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-card-hover dark:hover:bg-dark-card-hover">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold tracking-[0.18em] text-accent-blue dark:text-dark-accent-blue">
                    {stage.number}
                  </span>
                  <span className="flex items-center justify-center w-10 h-10 shrink-0 rounded-full bg-accent-blue/15 text-accent-blue dark:bg-dark-accent-blue/15 dark:text-dark-accent-blue">
                    <stage.icon className="w-5 h-5" aria-hidden />
                  </span>
                </div>
                <h3 className="text-base font-semibold text-text-primary dark:text-dark-text-primary mb-4">
                  {stage.title}
                </h3>
                <ul className="mt-auto grid gap-2 border-t border-border dark:border-dark-border pt-4">
                  {stage.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-text-secondary dark:text-dark-text-secondary leading-relaxed"
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
            </li>
          ))}
        </ol>
      </section>

      <section
        id="dev-teams-solution"
        className="animated-item anim-fadeInUp anim-delay-400 py-12 md:py-16 text-center bg-card dark:bg-dark-card border border-border dark:border-dark-border rounded-xl shadow-xl"
      >
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-text-primary dark:text-dark-text-primary mb-4">
            {content.solution}
          </h2>
          <button
            type="button"
            onClick={() => setCurrentPage('contact')}
            className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-lg bg-button-primary-bg dark:bg-dark-button-primary-bg text-button-primary-text dark:text-dark-button-primary-text hover:bg-button-primary-hover dark:hover:bg-dark-button-primary-hover transition-colors focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-700"
          >
            <MailIcon className="w-5 h-5 mr-2" aria-hidden />
            Start a project
          </button>
        </div>
      </section>
    </>
  );
};
