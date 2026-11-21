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
import { HomePage } from './components/HomePage';
import { Footer } from './components/Footer';
import { ContactPage } from './components/ContactPage';
import { IntroAnimation } from './components/IntroAnimation';
import {
  SmoothScrollProvider,
  SmoothScrollToTop,
} from './components/SmoothScrollProvider';
import { LanguageProvider, useLanguage } from './LanguageContext';

/** Left-to-right order used by mobile swipe navigation (header tabs only). */
const MENU_TABS = ['home', 'about'];

const AppContent: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const lenis = useLenis();
  const { t } = useLanguage();
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
    document.title = t.meta.title;

    const description = document.querySelector('meta[name="description"]');
    if (description) {
      description.setAttribute('content', t.meta.description);
    }
  }, [t.meta.description, t.meta.title]);

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
    (page: string) => {
      setIsTransitioning(true);
      window.setTimeout(() => {
        if (page === 'home') {
          navigate('/');
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

  const currentPage = path === '/' ? 'home' : path.slice(1);

  const isOffNavPage = path === '/contact';

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
        key={location.pathname}
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
            path="/contact"
            element={<ContactPage setCurrentPage={handleSetPage} />}
          />

          <Route path="/for-dev-teams" element={<Navigate to="/" replace />} />
          <Route
            path="/for-local-businesses"
            element={<Navigate to="/" replace />}
          />

          <Route
            path="*"
            element={
              <div className="text-center py-10">
                <h1 className="text-2xl font-bold mb-4">
                  {t.ui.pageNotFoundTitle}
                </h1>
                <p className="text-text-secondary dark:text-dark-text-secondary mb-6">
                  {t.ui.pageNotFoundBody}
                </p>
                <button
                  type="button"
                  onClick={() => handleSetPage('home')}
                  className="px-4 py-2 rounded-lg bg-button-primary-bg dark:bg-dark-button-primary-bg text-button-primary-text dark:text-dark-button-primary-text hover:bg-button-primary-hover dark:hover:bg-dark-button-primary-hover transition-colors"
                >
                  {t.ui.goHome}
                </button>
              </div>
            }
          />
        </Routes>
      </main>

      <Footer setCurrentPage={handleSetPage} />
    </div>
  );
};

const App: React.FC = () => (
  <LanguageProvider>
    <SmoothScrollProvider>
      <Router>
        <AppContent />
      </Router>
    </SmoothScrollProvider>
  </LanguageProvider>
);

export default App;
