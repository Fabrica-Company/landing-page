import React, { useEffect, useState } from 'react';
import { ClockIcon } from './icons';

interface LiveTimeProps {
  /** IANA timezone, e.g. "Europe/Bucharest". */
  timezone: string;
  /** Short suffix shown after the time, e.g. "EET". */
  timezoneLabel: string;
}

export const LiveTime: React.FC<LiveTimeProps> = ({ timezone, timezoneLabel }) => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const formatter = new Intl.DateTimeFormat('en-GB', {
      timeZone: timezone,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hourCycle: 'h23',
    });

    const updateTime = () => setTime(formatter.format(new Date()));

    updateTime();
    const interval = window.setInterval(updateTime, 1000);

    return () => window.clearInterval(interval);
  }, [timezone]);

  if (!time) return null;

  return (
    <div className="flex items-center gap-2 text-xs text-text-secondary dark:text-dark-text-secondary">
      <ClockIcon className="w-4 h-4 text-accent-green" aria-hidden />
      <span>
        {time} {timezoneLabel}
      </span>
    </div>
  );
};
