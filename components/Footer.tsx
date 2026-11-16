import React from 'react';
import { useLanguage } from '../LanguageContext';
import { LINKEDIN_URL } from '../constants';
import { LinkedInIcon, MailIcon, MapPinIcon } from './icons';

interface FooterProps {
  setCurrentPage: (pageId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setCurrentPage }) => {
  const { company, navItems, t } = useLanguage();

  return (
    <footer className="w-full mt-auto bg-card dark:bg-dark-card border-t border-border dark:border-dark-border">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <p className="text-lg font-bold tracking-tight text-text-primary dark:text-dark-text-primary">
                {company.name}
              </p>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="FabricaLabs on LinkedIn"
                className="inline-flex text-text-secondary dark:text-dark-text-secondary hover:text-[#0A66C2] transition-all duration-200 ease-in-out hover:scale-110"
              >
                <LinkedInIcon className="w-5 h-5" aria-hidden />
              </a>
            </div>
          </div>

          <nav aria-label={t.ui.footerNavAria}>
            <h2 className="text-sm font-semibold text-text-primary dark:text-dark-text-primary mb-3">
              {t.ui.explore}
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
                  {t.ui.startProject}
                </button>
              </li>
            </ul>
          </nav>

          <div>
            <h2 className="text-sm font-semibold text-text-primary dark:text-dark-text-primary mb-3">
              {t.ui.getInTouch}
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
          &copy; {new Date().getFullYear()} {company.name}. {t.ui.allRightsReserved}
        </p>
      </div>
    </footer>
  );
};
