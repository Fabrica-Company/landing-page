import React, { useEffect, useRef, useState } from 'react';
import { NavItem as NavItemType } from '../types';
import { NAV_ITEMS_MAIN, COMPANY_INFO } from '../constants';
import { MailIcon, MoonIcon, SunIcon } from './icons';

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
      className={`relative flex items-center justify-center p-2 rounded-full text-sm font-medium transition-colors ${
        isActive
          ? 'text-text-primary dark:text-dark-text-primary'
          : 'text-text-secondary dark:text-dark-text-secondary hover:text-text-primary dark:hover:text-dark-text-primary'
      }`}
      aria-label={item.name}
      aria-current={isActive ? 'page' : undefined}
      title={item.name}
    >
      <item.icon className="w-5 h-5" aria-hidden />
    </button>
  )
);

export const Header: React.FC<{
  currentPage: string;
  setCurrentPage: (pageId: string) => void;
  theme: string;
  toggleTheme: (event?: React.MouseEvent) => void;
}> = ({ currentPage, setCurrentPage, theme, toggleTheme }) => {
  const navContainerRef = useRef<HTMLElement>(null);
  const activePillRef = useRef<HTMLDivElement>(null);
  const navItemRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [hoveredItemId, setHoveredItemId] = useState<string | null>(null);

  useEffect(() => {
    navItemRefs.current = navItemRefs.current.slice(0, NAV_ITEMS_MAIN.length);
  }, []);

  useEffect(() => {
    const positionPill = () => {
      const pill = activePillRef.current;
      const container = navContainerRef.current;
      if (!pill || !container) return;

      const targetId = hoveredItemId || currentPage;
      const targetIndex = NAV_ITEMS_MAIN.findIndex((item) => item.id === targetId);
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
  }, [currentPage, hoveredItemId, theme]);

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 dark:bg-dark-background/80 backdrop-blur-md border-b border-border dark:border-dark-border">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-3">
          <div className="flex items-center gap-2 sm:gap-4 min-w-0">
            <button
              type="button"
              onClick={() => setCurrentPage('home')}
              className="text-base font-bold tracking-tight text-text-primary dark:text-dark-text-primary hover:opacity-70 transition-opacity truncate"
              aria-label={`${COMPANY_INFO.name} home`}
            >
              {COMPANY_INFO.name}
            </button>

            <nav ref={navContainerRef} className="relative flex items-center">
              {NAV_ITEMS_MAIN.map((item, index) => (
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
          </div>

          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <button
              type="button"
              onClick={(event) => toggleTheme(event)}
              aria-label={
                theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'
              }
              className="group p-2 rounded-full text-text-secondary dark:text-dark-text-secondary hover:text-text-primary dark:hover:text-dark-text-primary hover:bg-card-hover dark:hover:bg-dark-card-hover transition-colors"
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
              className="inline-flex items-center px-3 py-2 text-sm font-medium rounded-lg bg-button-primary-bg dark:bg-dark-button-primary-bg text-button-primary-text dark:text-dark-button-primary-text hover:bg-button-primary-hover dark:hover:bg-dark-button-primary-hover transition-colors"
            >
              <MailIcon className="w-4 h-4 sm:mr-1.5" aria-hidden />
              <span className="hidden sm:inline">Start a project</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
