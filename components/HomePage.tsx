import React from 'react';
import { HomePageProps } from '../types';
import { useLanguage } from '../LanguageContext';
import { OnlineStatus } from './OnlineStatus';
import { ArrowRightIcon } from './icons';

export const HomePage: React.FC<HomePageProps> = ({ setCurrentPage }) => {
  const { company, homePage: content } = useLanguage();

  return (
    <div className="space-y-8 md:space-y-10">
      <section
        id="home-hero"
        className="pt-4 md:pt-8 pb-0 text-center flex flex-col items-center"
      >
        <p className="animated-item anim-fadeInUp inline-flex items-center justify-center text-sm font-medium tracking-wide text-text-secondary dark:text-dark-text-secondary">
          <OnlineStatus />
          {content.eyebrow}
        </p>
        <h1 className="animated-item anim-fadeInUp anim-delay-100 mt-3 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-text-primary dark:text-dark-text-primary">
          {company.name}
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
          className="animated-item anim-fadeInUp text-center text-sm font-semibold tracking-[0.14em] uppercase text-text-secondary dark:text-dark-text-secondary mb-5"
        >
          {content.pathsLabel}
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          {content.paths.map((path, index) => (
            <button
              key={path.id}
              type="button"
              onClick={() => setCurrentPage(path.pageId)}
              className="animated-item anim-fadeInUp group flex flex-col text-left overflow-hidden bg-card dark:bg-dark-card border border-border dark:border-dark-border rounded-xl shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue"
              style={{ animationDelay: `${index * 100 + 200}ms` }}
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-card-hover dark:bg-dark-card-hover">
                <img
                  src={path.imageUrl}
                  alt={path.imageAlt}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-80"
                  aria-hidden
                />
              </div>

              <div className="flex flex-col flex-grow p-5 sm:p-6">
                <h3 className="text-xl font-semibold text-text-primary dark:text-dark-text-primary mb-2">
                  {path.title}
                </h3>
                <p className="text-sm sm:text-base text-text-secondary dark:text-dark-text-secondary leading-relaxed flex-grow">
                  {path.description}
                </p>
                <span className="mt-5 inline-flex items-center text-sm font-medium text-accent-blue dark:text-dark-accent-blue">
                  {path.cta}
                  <ArrowRightIcon
                    className="w-4 h-4 ml-1.5 transition-transform duration-200 ease-in-out group-hover:translate-x-1"
                    aria-hidden
                  />
                </span>
              </div>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
};
