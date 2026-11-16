import React from 'react';
import { ServicesSectionProps } from '../types';
import { SectionTitle } from './SectionTitle';
import { ArrowRightIcon, CheckCircleIcon } from './icons';

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  services,
  title = 'What we do',
  subtitle,
  setCurrentPage,
}) => (
  <section id="services">
    <SectionTitle title={title} subtitle={subtitle} />
    <div className="grid gap-4 md:grid-cols-2">
      {services.map((service, index) => (
        <article
          key={service.id}
          className="animated-item anim-fadeInUp flex flex-col p-5 sm:p-6 bg-card dark:bg-dark-card border border-border dark:border-dark-border rounded-xl shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-card-hover dark:hover:bg-dark-card-hover"
          style={{ animationDelay: `${index * 100 + 200}ms` }}
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="flex items-center justify-center w-10 h-10 shrink-0 rounded-full bg-accent-blue/15 text-accent-blue dark:bg-dark-accent-blue/15 dark:text-dark-accent-blue">
              <service.icon className="w-5 h-5" aria-hidden />
            </span>
            <h3 className="text-lg font-semibold text-text-primary dark:text-dark-text-primary">
              {service.name}
            </h3>
          </div>

          <p className="text-sm text-text-secondary dark:text-dark-text-secondary leading-relaxed">
            {service.description}
          </p>

          <ul className="mt-4 pt-4 border-t border-border dark:border-dark-border grid gap-2">
            {service.deliverables.map((deliverable) => (
              <li
                key={deliverable}
                className="flex items-start gap-2 text-sm text-text-secondary dark:text-dark-text-secondary"
              >
                <CheckCircleIcon
                  className="w-4 h-4 mt-0.5 shrink-0 text-accent-green"
                  aria-hidden
                />
                {deliverable}
              </li>
            ))}
          </ul>

          {service.pageId && service.cta && setCurrentPage && (
            <button
              type="button"
              onClick={() => setCurrentPage(service.pageId as string)}
              className="group mt-5 inline-flex items-center self-start text-sm font-medium text-accent-blue hover:text-accent-blue/80 transition-colors"
            >
              {service.cta}
              <ArrowRightIcon
                className="w-4 h-4 ml-1.5 transition-transform duration-200 ease-in-out group-hover:translate-x-1"
                aria-hidden
              />
            </button>
          )}
        </article>
      ))}
    </div>
  </section>
);
