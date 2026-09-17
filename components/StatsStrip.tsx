import React from 'react';
import { Stat } from '../types';

interface StatsStripProps {
  stats: Stat[];
  className?: string;
}

/**
 * The hairlines between tiles are the container background showing through a
 * 1px gap, so any empty cell renders as a solid grey block. Columns therefore
 * have to divide the tile count exactly.
 */
const COLUMNS_BY_COUNT: Record<number, string> = {
  1: 'grid-cols-1',
  2: 'grid-cols-2',
  3: 'grid-cols-1 sm:grid-cols-3',
  4: 'grid-cols-2 lg:grid-cols-4',
};

export const StatsStrip: React.FC<StatsStripProps> = ({ stats, className = '' }) => {
  if (stats.length === 0) return null;

  const columns = COLUMNS_BY_COUNT[stats.length] ?? 'grid-cols-1 sm:grid-cols-2';

  return (
    <dl
      className={`grid ${columns} gap-px overflow-hidden rounded-xl border border-border dark:border-dark-border bg-border dark:bg-dark-border ${className}`}
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
