import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { useSwipeable } from 'react-swipeable';
import { useLenis } from 'lenis/react';
import { Header } from './components/Header';
import { AboutPage } from './components/AboutPage';
import { ForDevTeamsPage } from './components/ForDevTeamsPage';
import { ForLocalBusinessesPage } from './components/ForLocalBusinessesPage';
import { HomePage } from './components/HomePage';
import { Footer } from './components/Footer';
import { WebsitesPage } from './components/WebsitesPage';
import { AppsPage } from './components/AppsPage';
import { AppDetailsPage } from './components/AppDetailsPage';
import { ContactPage } from './components/ContactPage';
import { IntroAnimation } from './components/IntroAnimation';
import {
  SmoothScrollProvider,
  SmoothScrollToTop,
} from './components/SmoothScrollProvider';
import {
  APP_PROJECTS,
  COMPANY_INFO,
  HIDE_APPS,
  NAV_ITEMS_MAIN,
  WEBSITE_PROJECTS,
} from './constants';
import clickSound from './assets/click_sound.wav';

/** Left-to-right order used by mobile swipe navigation (header tabs only). */
const MENU_TABS = NAV_ITEMS_MAIN.map((item) => item.id);

const AppContent: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const lenis = useLenis();
  const [showIntro, setShowIntro] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('theme') as 'light' | 'dark') || 'light';
    }
    return 'light';
  });

  const handleAnimationComplete = useCallback(() => setShowIntro(false), []);

  useEffect(() => {
    document.title = HIDE_APPS
      ? 'FabricaLabs — Websites & web apps'
      : 'FabricaLabs — Websites, web apps & mobile apps';

    const description = document.querySelector('meta[name="description"]');
    if (description) {
      description.setAttribute(
        'content',
        HIDE_APPS
          ? 'FabricaLabs is a design and development studio. We design new websites, modernize dated ones, and build web apps.'
          : 'FabricaLabs is a design and development studio. We design new websites, modernize dated ones, and build web and mobile apps.'
      );
    }
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', theme);
    }
  }, [theme]);

  useEffect(() => {
    // Global UI click sound for buttons and menus.
    const audio = new Audio(clickSound);
    audio.preload = 'auto';
    audio.volume = 0.35;

    const onDocumentClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target) return;

      // Skip form typing interactions.
      if (target.closest('input, textarea, select, label')) return;

      const interactive = target.closest(
        'button, a, [role="button"], [data-click-sound="true"]'
      );
      if (!interactive) return;
      if ((interactive as HTMLButtonElement).disabled) return;
      if (interactive.getAttribute('aria-disabled') === 'true') return;

      try {
        audio.currentTime = 0;
        void audio.play();
      } catch {
        // Ignore autoplay / platform restrictions.
      }
    };

    document.addEventListener('click', onDocumentClick, true);
    return () => {
      document.removeEventListener('click', onDocumentClick, true);
      audio.pause();
    };
  }, []);

  const toggleTheme = useCallback(() => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    const doc = document as unknown as {
      startViewTransition?: (callback: () => void) => {
        ready: Promise<void>;
        finished: Promise<void>;
      };
    };

    document.documentElement.setAttribute('data-theme-transition', nextTheme);

    if (doc.startViewTransition) {
      const transition = doc.startViewTransition(() => setTheme(nextTheme));
      void transition.finished.finally(() => {
        document.documentElement.removeAttribute('data-theme-transition');
      });
      return;
    }

    setTheme(nextTheme);
    window.setTimeout(() => {
      document.documentElement.removeAttribute('data-theme-transition');
    }, 500);
  }, [theme]);

  const handleSetPage = useCallback(
    (page: string, itemId?: string) => {
      setIsTransitioning(true);
      window.setTimeout(() => {
        if (page === 'home' || (HIDE_APPS && (page === 'apps' || page === 'app-detail'))) {
          navigate('/');
        } else if (page === 'app-detail' && itemId) {
          navigate(`/apps/${itemId}`);
        } else {
          navigate(`/${page}`);
        }

        setIsTransitioning(false);
        if (lenis) {
          lenis.scrollTo(0, { immediate: true });
        } else {
          window.scrollTo(0, 0);
        }
      }, 150);
    },
    [navigate, lenis]
  );

  const path = location.pathname;

  // App detail pages keep the Apps nav pill lit when apps appear in nav.
  const currentPage = (() => {
    if (path === '/') return 'home';
    if (path.startsWith('/apps')) return 'apps';
    return path.slice(1);
  })();

  const isDetailPage = /^\/apps\/.+/.test(path);
  /** Websites is not a header tab — skip swipe tab switching there. */
  const isOffNavPage = path === '/websites' || path === '/contact' || isDetailPage;

  const isMobile =
    typeof window !== 'undefined' && window.innerWidth <= 768;
  const currentTabIdx = MENU_TABS.indexOf(currentPage);
  const swipeStartAllowedRef = useRef(true);

  const goToTab = (index: number) => {
    if (index >= 0 && index < MENU_TABS.length) {
      handleSetPage(MENU_TABS[index]);
    }
  };

  const canSwipe = isMobile && currentTabIdx !== -1 && !isOffNavPage;

  const swipeHandlers = useSwipeable({
    onSwipeStart: (event) => {
      // Only deliberate horizontal swipes from the middle of the screen count,
      // so slight drags while scrolling don't change tabs.
      const startRatio = event.initial[0] / (window.innerWidth || 1);
      const withinMiddle = startRatio >= 0.22 && startRatio <= 0.78;

      const target = event.event.target as HTMLElement | null;
      const isTyping = !!target?.closest('input, textarea, select, label');
      const isInteractive = !!target?.closest('button, a, [role="button"]');

      swipeStartAllowedRef.current = withinMiddle && !isTyping && !isInteractive;
    },
    onSwipedLeft: () => {
      if (!swipeStartAllowedRef.current || !canSwipe) return;
      goToTab(currentTabIdx + 1);
    },
    onSwipedRight: () => {
      if (!swipeStartAllowedRef.current || !canSwipe) return;
      goToTab(currentTabIdx - 1);
    },
    trackTouch: true,
    trackMouse: false,
    delta: 60,
    preventScrollOnSwipe: false,
  });

  if (showIntro) {
    return <IntroAnimation onAnimationComplete={handleAnimationComplete} />;
  }

  return (
    <div className="min-h-screen flex flex-col" {...swipeHandlers}>
      <SmoothScrollToTop pathname={location.pathname} />
      <Header
        currentPage={currentPage}
        setCurrentPage={handleSetPage}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      <main
        key={location.pathname} // Re-run entry animations on route change.
        className={`w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16 md:space-y-24 flex-grow page-transition ${
          isTransitioning ? 'page-fade-exit-active' : 'page-fade-enter-active'
        }`}
      >
        <Routes>
          <Route
            path="/"
            element={<HomePage setCurrentPage={handleSetPage} />}
          />

          <Route
            path="/about"
            element={<AboutPage setCurrentPage={handleSetPage} />}
          />

          <Route
            path="/for-local-businesses"
            element={
              <ForLocalBusinessesPage setCurrentPage={handleSetPage} />
            }
          />

          <Route
            path="/for-dev-teams"
            element={<ForDevTeamsPage setCurrentPage={handleSetPage} />}
          />

          <Route
            path="/websites"
            element={
              <WebsitesPage
                websites={WEBSITE_PROJECTS}
                intro={COMPANY_INFO.websitesPageIntro}
                setCurrentPage={handleSetPage}
              />
            }
          />

          <Route
            path="/apps"
            element={
              HIDE_APPS ? (
                <Navigate to="/" replace />
              ) : (
                <AppsPage
                  apps={APP_PROJECTS}
                  intro={COMPANY_INFO.appsPageIntro}
                  setCurrentPage={handleSetPage}
                />
              )
            }
          />

          <Route
            path="/apps/:appId"
            element={
              HIDE_APPS ? (
                <Navigate to="/" replace />
              ) : (
                <AppDetailsPage setCurrentPage={handleSetPage} />
              )
            }
          />

          <Route
            path="/contact"
            element={
              <ContactPage
                company={COMPANY_INFO}
                setCurrentPage={handleSetPage}
              />
            }
          />

          <Route
            path="*"
            element={
              <div className="text-center py-10">
                <h1 className="text-2xl font-bold mb-4">Page not found</h1>
                <p className="text-text-secondary dark:text-dark-text-secondary mb-6">
                  The page you are looking for does not exist.
                </p>
                <button
                  type="button"
                  onClick={() => handleSetPage('home')}
                  className="px-4 py-2 rounded-lg bg-button-primary-bg dark:bg-dark-button-primary-bg text-button-primary-text dark:text-dark-button-primary-text hover:bg-button-primary-hover dark:hover:bg-dark-button-primary-hover transition-colors"
                >
                  Go home
                </button>
              </div>
            }
          />
        </Routes>
      </main>

      <Footer
        company={COMPANY_INFO}
        navItems={NAV_ITEMS_MAIN}
        setCurrentPage={handleSetPage}
      />
    </div>
  );
};

const App: React.FC = () => (
  <SmoothScrollProvider>
    <Router>
      <AppContent />
    </Router>
  </SmoothScrollProvider>
);

export default App;
