import React from 'react';
import { CallToActionProps } from '../types';
import { MailIcon } from './icons';

export const CallToAction: React.FC<CallToActionProps> = ({ setCurrentPage }) => (
  <section className="animated-item anim-fadeInUp anim-delay-400 py-12 md:py-16 text-center bg-card dark:bg-dark-card border border-border dark:border-dark-border rounded-xl shadow-xl">
    <div className="max-w-2xl mx-auto px-4">
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-text-primary dark:text-dark-text-primary mb-4">
        Got something to build?
      </h2>
      <p className="text-lg text-text-secondary dark:text-dark-text-secondary mb-8">
        Whether it&rsquo;s a new site, a rebuild of a tired one, or an app you
        need shipped &mdash; tell us about it and we&rsquo;ll tell you what it
        takes.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <button
          type="button"
          onClick={() => setCurrentPage('contact')}
          className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-lg bg-button-primary-bg dark:bg-dark-button-primary-bg text-button-primary-text dark:text-dark-button-primary-text hover:bg-button-primary-hover dark:hover:bg-dark-button-primary-hover transition-colors focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-700"
        >
          <MailIcon className="w-5 h-5 mr-2" aria-hidden />
          Start a project
        </button>
      </div>
    </div>
  </section>
);
