import React, { useEffect, useState } from 'react';
import { useLanguage } from '../LanguageContext';

/**
 * Green dot while the studio is inside its local office hours, grey outside.
 */
export const OnlineStatus: React.FC = () => {
  const { company, t } = useLanguage();
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const formatter = new Intl.DateTimeFormat('en-GB', {
      timeZone: company.timezone,
      hour: '2-digit',
      hourCycle: 'h23',
    });

    const checkStatus = () => {
      const hour = Number(formatter.format(new Date()));
      const { start, end } = company.officeHours;
      setIsOnline(hour >= start && hour < end);
    };

    checkStatus();
    const interval = window.setInterval(checkStatus, 60000);

    return () => window.clearInterval(interval);
  }, [company.officeHours, company.timezone]);

  return (
    <span
      className={`inline-block w-2 h-2 rounded-full mr-2 shrink-0 ${
        isOnline
          ? 'bg-accent-blue animate-pulse'
          : 'bg-text-placeholder dark:bg-dark-text-placeholder'
      }`}
      title={isOnline ? t.ui.onlineNow : t.ui.outsideHours}
    />
  );
};
