import React from 'react';
import { ProcessSectionProps } from '../types';
import { SectionTitle } from './SectionTitle';
import { PROCESS_STEP_ICONS } from '../constants';

export const ProcessSection: React.FC<ProcessSectionProps> = ({
  steps,
  title = 'How we work',
  subtitle,
}) => (
  <section id="process">
    <SectionTitle title={title} subtitle={subtitle} />
    <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {steps.map((step, index) => {
        const StepIcon = PROCESS_STEP_ICONS[index];

        return (
          <li
            key={step.id}
            className="animated-item anim-fadeInUp flex flex-col p-5 bg-card dark:bg-dark-card border border-border dark:border-dark-border rounded-xl shadow-lg"
            style={{ animationDelay: `${index * 100 + 200}ms` }}
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-semibold tracking-[0.18em] text-text-secondary dark:text-dark-text-secondary">
                {String(index + 1).padStart(2, '0')}
              </span>
              {StepIcon && (
                <StepIcon
                  className="w-5 h-5 text-accent-green shrink-0"
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
          </li>
        );
      })}
    </ol>
  </section>
);
