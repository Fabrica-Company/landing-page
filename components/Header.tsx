import React, { useEffect, useRef, useState } from 'react';
import { NavItem as NavItemType } from '../types';
import { useLanguage } from '../LanguageContext';
import { Locale, LOCALES, LOCALE_LABELS } from '../translations';
import {
  ChevronDownIcon,
  HomeIcon,
  MailIcon,
  MoonIcon,
  SunIcon,
} from './icons';

interface NavItemProps {
  item: NavItemType;
  isActive: boolean;
  onClick: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const NavItem = React.forwardRef<HTMLButtonElement, NavItemProps>(
  ({ item, isActive, onClick, onMouseEnter, onMouseLeave }, ref) => (
    <button
      ref={ref}
      type="button"
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`relative flex items-center justify-center px-2 sm:px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-colors ${
        isActive
          ? 'text-text-primary dark:text-dark-text-primary'
          : 'text-text-secondary dark:text-dark-text-secondary hover:text-text-primary dark:hover:text-dark-text-primary'
      }`}
      aria-current={isActive ? 'page' : undefined}
    >
      {item.name}
    </button>
  )
);

NavItem.displayName = 'NavItem';

export const Header: React.FC<{
  currentPage: string;
  setCurrentPage: (pageId: string) => void;
  theme: string;
  toggleTheme: (event?: React.MouseEvent) => void;
}> = ({ currentPage, setCurrentPage, theme, toggleTheme }) => {
  const { company, navItems, t, locale, setLocale } = useLanguage();
  const textNavItems = navItems.filter((item) => item.id !== 'home');
  const navContainerRef = useRef<HTMLElement>(null);
  const activePillRef = useRef<HTMLDivElement>(null);
  const navItemRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const languageMenuRef = useRef<HTMLDivElement>(null);
  const [hoveredItemId, setHoveredItemId] = useState<string | null>(null);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const currentLocaleLabel = LOCALE_LABELS[locale];

  useEffect(() => {
    if (!isLanguageOpen) return;

    const onPointerDown = (event: MouseEvent) => {
      if (
        languageMenuRef.current &&
        !languageMenuRef.current.contains(event.target as Node)
      ) {
        setIsLanguageOpen(false);
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsLanguageOpen(false);
    };

    document.addEventListener('mousedown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('mousedown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [isLanguageOpen]);

  const selectLocale = (next: Locale) => {
    setLocale(next);
    setIsLanguageOpen(false);
  };

  useEffect(() => {
    navItemRefs.current = navItemRefs.current.slice(0, textNavItems.length);
  }, [textNavItems.length]);

  useEffect(() => {
    const positionPill = () => {
      const pill = activePillRef.current;
      const container = navContainerRef.current;
      if (!pill || !container) return;

      const targetId = hoveredItemId || currentPage;
      const targetIndex = textNavItems.findIndex((item) => item.id === targetId);
      const targetEl = navItemRefs.current[targetIndex];

      if (!targetEl) {
        pill.style.opacity = '0';
        return;
      }

      const containerRect = container.getBoundingClientRect();
      const targetRect = targetEl.getBoundingClientRect();

      pill.style.left = `${targetRect.left - containerRect.left}px`;
      pill.style.top = `${targetRect.top - containerRect.top}px`;
      pill.style.width = `${targetRect.width}px`;
      pill.style.height = `${targetRect.height}px`;
      pill.style.opacity = '1';
    };

    positionPill();
    window.addEventListener('resize', positionPill);

    return () => window.removeEventListener('resize', positionPill);
  }, [currentPage, hoveredItemId, theme, textNavItems]);

  const isHomeActive = currentPage === 'home';

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 dark:bg-dark-background/80 backdrop-blur-md border-b border-border dark:border-dark-border">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-3">
          <div className="flex items-center gap-1 sm:gap-2 shrink-0">
            <button
              type="button"
              onClick={() => setCurrentPage('home')}
              className="text-base font-bold tracking-tight text-text-primary dark:text-dark-text-primary hover:opacity-70 transition-opacity"
              aria-label={`${company.name} ${t.ui.homeAria}`}
            >
              {company.name}
            </button>

            <button
              type="button"
              onClick={() => setCurrentPage('home')}
              aria-label={t.ui.homeAria}
              aria-current={isHomeActive ? 'page' : undefined}
              className={`p-2 rounded-full transition-colors ${
                isHomeActive
                  ? 'text-text-primary dark:text-dark-text-primary bg-card-hover dark:bg-dark-card-hover'
                  : 'text-text-secondary dark:text-dark-text-secondary hover:text-text-primary dark:hover:text-dark-text-primary hover:bg-card-hover dark:hover:bg-dark-card-hover'
              }`}
            >
              <HomeIcon className="w-5 h-5" aria-hidden />
            </button>
          </div>

          <div className="flex items-center gap-1 sm:gap-2 min-w-0">
            <nav
              ref={navContainerRef}
              className="relative flex items-center gap-0.5 min-w-0 overflow-x-auto"
              aria-label={t.ui.primaryNavAria}
            >
              {textNavItems.map((item, index) => (
                <NavItem
                  key={item.id}
                  ref={(el) => {
                    navItemRefs.current[index] = el;
                  }}
                  item={item}
                  isActive={currentPage === item.id}
                  onClick={() => setCurrentPage(item.id)}
                  onMouseEnter={() => setHoveredItemId(item.id)}
                  onMouseLeave={() => setHoveredItemId(null)}
                />
              ))}
              <div ref={activePillRef} className="nav-active-pill" />
            </nav>

            <div ref={languageMenuRef} className="relative shrink-0">
              <button
                type="button"
                onClick={() => setIsLanguageOpen((open) => !open)}
                aria-label={t.ui.switchLanguageAria}
                aria-haspopup="listbox"
                aria-expanded={isLanguageOpen}
                className="inline-flex items-center gap-1.5 px-2 sm:px-2.5 py-1.5 rounded-full text-xs sm:text-sm font-medium text-text-secondary dark:text-dark-text-secondary hover:text-text-primary dark:hover:text-dark-text-primary hover:bg-card-hover dark:hover:bg-dark-card-hover transition-colors"
              >
                <span aria-hidden className="text-base leading-none">
                  {currentLocaleLabel.flag}
                </span>
                <span className="hidden sm:inline">{currentLocaleLabel.name}</span>
                <span className="sm:hidden">{currentLocaleLabel.short}</span>
                <ChevronDownIcon
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    isLanguageOpen ? 'rotate-180' : ''
                  }`}
                  aria-hidden
                />
              </button>

              {isLanguageOpen && (
                <ul
                  role="listbox"
                  aria-label={t.ui.switchLanguageAria}
                  className="absolute right-0 top-full mt-2 min-w-[10.5rem] overflow-hidden rounded-xl border border-border dark:border-dark-border bg-card dark:bg-dark-card shadow-lg z-50 py-1"
                >
                  {LOCALES.map((option) => {
                    const label = LOCALE_LABELS[option];
                    const isActive = option === locale;

                    return (
                      <li key={option} role="option" aria-selected={isActive}>
                        <button
                          type="button"
                          onClick={() => selectLocale(option)}
                          className={`flex w-full items-center gap-2.5 px-3 py-2 text-sm text-left transition-colors ${
                            isActive
                              ? 'bg-card-hover dark:bg-dark-card-hover text-text-primary dark:text-dark-text-primary font-medium'
                              : 'text-text-secondary dark:text-dark-text-secondary hover:bg-card-hover dark:hover:bg-dark-card-hover hover:text-text-primary dark:hover:text-dark-text-primary'
                          }`}
                        >
                          <span aria-hidden className="text-base leading-none">
                            {label.flag}
                          </span>
                          {label.name}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>

            <button
              type="button"
              onClick={(event) => toggleTheme(event)}
              aria-label={
                theme === 'light' ? t.ui.switchToDark : t.ui.switchToLight
              }
              className="group p-2 rounded-full text-text-secondary dark:text-dark-text-secondary hover:text-text-primary dark:hover:text-dark-text-primary hover:bg-card-hover dark:hover:bg-dark-card-hover transition-colors shrink-0"
            >
              {theme === 'light' ? (
                <MoonIcon className="w-5 h-5" aria-hidden />
              ) : (
                <SunIcon
                  className="w-5 h-5 transition-transform duration-300 ease-in-out group-hover:rotate-180"
                  aria-hidden
                />
              )}
            </button>

            <button
              type="button"
              onClick={() => setCurrentPage('contact')}
              className="inline-flex items-center px-3 py-2 text-sm font-medium rounded-lg bg-button-primary-bg dark:bg-dark-button-primary-bg text-button-primary-text dark:text-dark-button-primary-text hover:bg-button-primary-hover dark:hover:bg-dark-button-primary-hover transition-colors shrink-0"
            >
              <MailIcon className="w-4 h-4 sm:mr-1.5" aria-hidden />
              <span className="hidden sm:inline">{t.ui.startProject}</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
