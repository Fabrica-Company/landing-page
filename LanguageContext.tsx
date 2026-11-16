import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { getLocalizedContent, LocalizedSiteContent } from './constants';
import { Locale, LOCALE_LABELS } from './translations';

const STORAGE_KEY = 'locale';

interface LanguageContextValue extends LocalizedSiteContent {
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  otherLocale: Locale;
  otherLocaleLabel: (typeof LOCALE_LABELS)[Locale];
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

function readStoredLocale(): Locale {
  if (typeof window === 'undefined') return 'en';
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored === 'fr' || stored === 'en' ? stored : 'en';
}

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [locale, setLocaleState] = useState<Locale>(() => readStoredLocale());

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
  }, []);

  const toggleLocale = useCallback(() => {
    setLocaleState((current) => (current === 'en' ? 'fr' : 'en'));
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, locale);
    document.documentElement.lang = locale;
  }, [locale]);

  const content = useMemo(() => getLocalizedContent(locale), [locale]);
  const otherLocale: Locale = locale === 'en' ? 'fr' : 'en';

  const value = useMemo<LanguageContextValue>(
    () => ({
      ...content,
      setLocale,
      toggleLocale,
      otherLocale,
      otherLocaleLabel: LOCALE_LABELS[otherLocale],
    }),
    [content, setLocale, toggleLocale, otherLocale]
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
};

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return ctx;
}
