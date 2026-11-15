import React from 'react';
import { HomePageProps } from '../types';
import { COMPANY_INFO, HOME_PAGE } from '../constants';
import { OnlineStatus } from './OnlineStatus';
import { ArrowRightIcon } from './icons';

export const HomePage: React.FC<HomePageProps> = ({ setCurrentPage }) => {
  const content = HOME_PAGE;

  return (
    <>
      <section id="home-hero" className="pt-6 pb-4 md:pt-10">
        <p className="animated-item anim-fadeInUp flex items-center text-sm font-medium tracking-wide text-text-secondary dark:text-dark-text-secondary">
          <OnlineStatus />
          {content.eyebrow}
        </p>
        <h1 className="animated-item anim-fadeInUp anim-delay-100 mt-3 max-w-3xl text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-text-primary dark:text-dark-text-primary">
          {COMPANY_INFO.name}
        </h1>
        <p className="animated-item anim-fadeInUp anim-delay-200 mt-3 max-w-2xl text-xl sm:text-2xl font-semibold tracking-tight text-text-primary dark:text-dark-text-primary">
          {content.headline}
        </p>
        <p className="animated-item anim-fadeInUp anim-delay-300 mt-4 max-w-2xl text-base sm:text-lg text-text-secondary dark:text-dark-text-secondary leading-relaxed">
          {content.description}
        </p>
      </section>

      <section id="home-paths" aria-labelledby="home-paths-heading">
        <h2
          id="home-paths-heading"
          className="animated-item anim-fadeInUp text-sm font-semibold tracking-[0.14em] uppercase text-text-secondary dark:text-dark-text-secondary mb-4"
        >
          {content.pathsLabel}
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          {content.paths.map((path, index) => (
            <button
              key={path.id}
              type="button"
              onClick={() => setCurrentPage(path.pageId)}
              className="animated-item anim-fadeInUp group flex flex-col text-left p-5 sm:p-6 bg-card dark:bg-dark-card border border-border dark:border-dark-border rounded-xl shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-card-hover dark:hover:bg-dark-card-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue"
              style={{ animationDelay: `${index * 100 + 200}ms` }}
            >
              <span className="text-xs font-semibold tracking-[0.18em] uppercase text-accent-blue dark:text-dark-accent-blue mb-3">
                {path.eyebrow}
              </span>
              <h3 className="text-xl font-semibold text-text-primary dark:text-dark-text-primary mb-2">
                {path.title}
              </h3>
              <p className="text-sm sm:text-base text-text-secondary dark:text-dark-text-secondary leading-relaxed flex-grow">
                {path.description}
              </p>
              <span className="mt-6 inline-flex items-center text-sm font-medium text-accent-blue dark:text-dark-accent-blue">
                {path.cta}
                <ArrowRightIcon
                  className="w-4 h-4 ml-1.5 transition-transform duration-200 ease-in-out group-hover:translate-x-1"
                  aria-hidden
                />
              </span>
            </button>
          ))}
        </div>
      </section>
    </>
  );
};
