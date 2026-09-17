import React from 'react';
import { HeroProps } from '../types';
import { CircularText } from './CircularText';
import { RotatingWord } from './RotatingWord';
import { StatsStrip } from './StatsStrip';
import { LiveTime } from './LiveTime';
import { OnlineStatus } from './OnlineStatus';
import { ArrowRightIcon, MailIcon } from './icons';
import logo from '../assets/Logo.webp';

export const Hero: React.FC<HeroProps> = ({ company, stats, setCurrentPage }) => {
  return (
    <section id="hero" className="pt-6 pb-4 md:pt-10">
      <div className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-12">
        <div className="lg:w-2/3 space-y-5">
          <p className="animated-item anim-fadeInUp flex items-center text-sm font-medium tracking-wide text-text-secondary dark:text-dark-text-secondary">
            <OnlineStatus />
            {company.tagline}
          </p>

          <h1 className="animated-item anim-fadeInUp anim-delay-100 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-text-primary dark:text-dark-text-primary">
            {company.heroHeadlinePrefix}{' '}
            <RotatingWord words={company.heroRotatingWords} />
            <br className="hidden sm:block" />
            {company.heroHeadlineSuffix}
          </h1>

          <p className="animated-item anim-fadeInUp anim-delay-200 max-w-xl text-lg text-text-secondary dark:text-dark-text-secondary leading-relaxed">
            {company.heroDescription}
          </p>

          <div className="animated-item anim-fadeInUp anim-delay-300">
            <LiveTime
              timezone={company.timezone}
              timezoneLabel={company.timezoneLabel}
            />
          </div>

          <div className="animated-item anim-fadeInUp anim-delay-400 flex flex-wrap gap-3 pt-2">
            <button
              type="button"
              onClick={() => setCurrentPage('contact')}
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium rounded-lg bg-button-primary-bg dark:bg-dark-button-primary-bg text-button-primary-text dark:text-dark-button-primary-text hover:bg-button-primary-hover dark:hover:bg-dark-button-primary-hover transition-colors focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-700"
            >
              <MailIcon className="w-4 h-4 mr-2" aria-hidden />
              Start a project
            </button>
            <button
              type="button"
              onClick={() => setCurrentPage('websites')}
              className="group inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium rounded-lg bg-button-secondary-bg dark:bg-dark-button-secondary-bg text-button-secondary-text dark:text-dark-button-secondary-text hover:bg-button-secondary-hover dark:hover:bg-dark-button-secondary-hover transition-colors focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
            >
              See our work
              <ArrowRightIcon
                className="w-4 h-4 ml-2 transition-transform duration-200 ease-in-out group-hover:translate-x-1"
                aria-hidden
              />
            </button>
          </div>
        </div>

        <div className="animated-item anim-fadeInUp anim-delay-200 lg:w-1/3 flex justify-center lg:justify-end">
          <div className="relative w-[220px] h-[220px] md:w-[260px] md:h-[260px]">
            <CircularText
              text={company.circularText}
              letterSpacing={company.circularTextLetterSpacing}
              className="absolute inset-0 w-full h-full animate-spin-slow"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-36 h-36 md:w-44 md:h-44 rounded-full bg-card dark:bg-dark-card border border-border dark:border-dark-border shadow-lg overflow-hidden">
              <img
                src={logo}
                alt={`${company.name} logo`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <StatsStrip stats={stats} className="mt-12 md:mt-16" />
    </section>
  );
};
