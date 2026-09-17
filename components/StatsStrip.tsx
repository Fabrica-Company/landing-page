import React from 'react';
import { Stat } from '../types';

interface StatsStripProps {
  stats: Stat[];
  className?: string;
}

export const StatsStrip: React.FC<StatsStripProps> = ({ stats, className = '' }) => {
  if (stats.length === 0) return null;

  return (
    <dl
      className={`grid grid-cols-2 lg:grid-cols-4 gap-px overflow-hidden rounded-xl border border-border dark:border-dark-border bg-border dark:bg-dark-border ${className}`}
    >
      {stats.map((stat, index) => (
        <div
          key={stat.label}
          className="animated-item anim-fadeInUp flex flex-col bg-card dark:bg-dark-card px-5 py-6"
          style={{ animationDelay: `${index * 80 + 500}ms` }}
        >
          <dt className="order-2 mt-1 text-xs text-text-secondary dark:text-dark-text-secondary leading-snug">
            {stat.label}
          </dt>
          <dd className="order-1 text-2xl sm:text-3xl font-bold tracking-tight text-text-primary dark:text-dark-text-primary">
            {stat.value}
          </dd>
        </div>
      ))}
    </dl>
  );
};
