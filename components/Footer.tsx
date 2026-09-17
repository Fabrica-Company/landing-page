import React from 'react';
import { CompanyInfo, NavItem } from '../types';
import { MailIcon, MapPinIcon } from './icons';

interface FooterProps {
  company: CompanyInfo;
  navItems: NavItem[];
  setCurrentPage: (pageId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  company,
  navItems,
  setCurrentPage,
}) => (
  <footer className="w-full mt-auto bg-card dark:bg-dark-card border-t border-border dark:border-dark-border">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <p className="text-lg font-bold tracking-tight text-text-primary dark:text-dark-text-primary">
            {company.name}
          </p>
          <p className="mt-2 max-w-sm text-sm text-text-secondary dark:text-dark-text-secondary leading-relaxed">
            {company.tagline}. Websites, web apps and mobile apps, designed and
            built to last.
          </p>
        </div>

        <nav aria-label="Footer">
          <h2 className="text-sm font-semibold text-text-primary dark:text-dark-text-primary mb-3">
            Explore
          </h2>
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => setCurrentPage(item.id)}
                  className="text-sm text-text-secondary dark:text-dark-text-secondary hover:text-text-primary dark:hover:text-dark-text-primary transition-colors"
                >
                  {item.name}
                </button>
              </li>
            ))}
            <li>
              <button
                type="button"
                onClick={() => setCurrentPage('contact')}
                className="text-sm text-text-secondary dark:text-dark-text-secondary hover:text-text-primary dark:hover:text-dark-text-primary transition-colors"
              >
                Start a project
              </button>
            </li>
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-semibold text-text-primary dark:text-dark-text-primary mb-3">
            Get in touch
          </h2>
          <ul className="space-y-2 text-sm text-text-secondary dark:text-dark-text-secondary">
            <li>
              <a
                href={`mailto:${company.email}`}
                className="inline-flex items-center gap-2 hover:text-text-primary dark:hover:text-dark-text-primary transition-colors"
              >
                <MailIcon className="w-4 h-4 shrink-0" aria-hidden />
                {company.email}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPinIcon className="w-4 h-4 mt-0.5 shrink-0" aria-hidden />
              {company.location}
            </li>
          </ul>
        </div>
      </div>

      <p className="mt-10 pt-6 border-t border-border dark:border-dark-border text-xs text-text-secondary dark:text-dark-text-secondary">
        &copy; {new Date().getFullYear()} {company.name}. All rights reserved.
      </p>
    </div>
  </footer>
);
