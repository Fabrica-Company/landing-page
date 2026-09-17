import React from 'react';
import { UsersIcon } from './icons';

interface VisitorStatsProps {
  count: number | null;
  loading: boolean;
  error: string | null;
}

export const VisitorStats: React.FC<VisitorStatsProps> = ({
  count,
  loading,
  error,
}) => {
  if (error) return null;

  if (loading) {
    return (
      <div className="flex items-center gap-2 text-xs text-text-secondary dark:text-dark-text-secondary">
        <UsersIcon className="w-4 h-4 text-accent-green" aria-hidden />
        <span>Loading visitors&hellip;</span>
      </div>
    );
  }

  if (!count) return null;

  return (
    <div className="flex items-center gap-2 text-xs text-text-secondary dark:text-dark-text-secondary">
      <UsersIcon className="w-4 h-4 text-accent-green" aria-hidden />
      <span>
        <span className="font-semibold text-text-primary dark:text-dark-text-primary">
          {count.toLocaleString('en-US')}
        </span>{' '}
        visitors
      </span>
    </div>
  );
};
