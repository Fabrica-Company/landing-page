import React from 'react';
import { ProcessSectionProps } from '../types';
import { SectionTitle } from './SectionTitle';
import { ArrowRightIcon } from './icons';
import { PROCESS_STEP_ICONS } from '../constants';

export const ProcessSection: React.FC<ProcessSectionProps> = ({
  steps,
  title = 'How we work',
  subtitle,
  onViewAllClick,
}) => (
  <section id="process">
    <SectionTitle title={title} subtitle={subtitle} />
    <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {steps.map((step, index) => {
        const StepIcon = PROCESS_STEP_ICONS[index];

        return (
          // The fade-in animation owns `transform` on this element, so the
          // hover scale has to live on a child to survive the cascade.
          <li
            key={step.id}
            className="animated-item anim-fadeInUp"
            style={{ animationDelay: `${index * 100 + 200}ms` }}
          >
            <div className="flex flex-col h-full p-5 bg-card dark:bg-dark-card border border-border dark:border-dark-border rounded-xl shadow-lg transition-transform duration-300 ease-in-out hover:scale-[1.03]">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold tracking-[0.18em] text-text-secondary dark:text-dark-text-secondary">
                  {String(index + 1).padStart(2, '0')}
                </span>
                {StepIcon && (
                  <StepIcon
                    className="w-5 h-5 text-accent-blue shrink-0"
                    aria-hidden
                  />
                )}
              </div>
              <h3 className="text-base font-semibold text-text-primary dark:text-dark-text-primary mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-text-secondary dark:text-dark-text-secondary leading-relaxed">
                {step.description}
              </p>
            </div>
          </li>
        );
      })}
    </ol>

    {onViewAllClick && (
      <div
        className="animated-item anim-fadeInUp mt-8 md:mt-12 text-center"
        style={{ animationDelay: `${steps.length * 100 + 300}ms` }}
      >
        <button
          type="button"
          onClick={onViewAllClick}
          className="group inline-flex items-center text-sm font-medium text-accent-blue hover:text-accent-blue/80 transition-colors"
        >
          View all client websites
          <ArrowRightIcon
            className="w-4 h-4 ml-1.5 transition-transform duration-200 ease-in-out group-hover:translate-x-1"
            aria-hidden
          />
        </button>
      </div>
    )}
  </section>
);
