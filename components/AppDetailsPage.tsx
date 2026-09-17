import React from 'react';
import { useParams } from 'react-router-dom';
import { APP_PROJECTS } from '../constants';
import { SectionTitle } from './SectionTitle';
import { AppCard } from './AppCard';
import { TestimonialCard } from './TestimonialCard';
import { CallToAction } from './CallToAction';
import { ImagePlaceholder } from './ImagePlaceholder';
import { StatsStrip } from './StatsStrip';
import { PlayStoreMetrics } from './PlayStoreMetrics';
import {
  AppsIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  ExternalLinkIcon,
  MonitorIcon,
} from './icons';

/** Shown when an app has no gallery yet, so the layout still reads right. */
const GALLERY_PLACEHOLDERS = ['Main screen', 'Secondary screen'];

export const AppDetailsPage: React.FC<{
  setCurrentPage: (pageId: string, itemId?: string) => void;
}> = ({ setCurrentPage }) => {
  const { appId } = useParams<{ appId: string }>();

  const app = APP_PROJECTS.find((project) => project.id === appId);
  const otherApps = APP_PROJECTS.filter((project) => project.id !== appId);

  if (!app) {
    return (
      <div className="animated-item anim-fadeInUp text-center py-10">
        <h1 className="text-2xl font-bold mb-4">App not found</h1>
        <p className="text-text-secondary dark:text-dark-text-secondary mb-6">
          This app doesn&rsquo;t exist or has been moved.
        </p>
        <button
          type="button"
          onClick={() => setCurrentPage('apps')}
          className="px-4 py-2 rounded-lg bg-button-primary-bg dark:bg-dark-button-primary-bg text-button-primary-text dark:text-dark-button-primary-text hover:bg-button-primary-hover dark:hover:bg-dark-button-primary-hover transition-colors"
        >
          View all apps
        </button>
      </div>
    );
  }

  const KindIcon = app.kind === 'Mobile App' ? AppsIcon : MonitorIcon;
  const galleryItems = app.images?.length ? app.images : GALLERY_PLACEHOLDERS;
  const hasRealImages = Boolean(app.images?.length);

  return (
    <div className="space-y-16">
      <div className="animated-item anim-fadeInUp">
        <button
          type="button"
          onClick={() => setCurrentPage('apps')}
          className="group inline-flex items-center text-sm font-medium text-text-secondary dark:text-dark-text-secondary hover:text-text-primary dark:hover:text-dark-text-primary transition-colors"
        >
          <ArrowLeftIcon
            className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1"
            aria-hidden
          />
          Back to apps
        </button>
      </div>

      <header className="animated-item anim-fadeInUp anim-delay-100">
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 text-xs font-medium rounded-full bg-accent-green/15 text-accent-green">
            <KindIcon className="w-3.5 h-3.5 shrink-0" aria-hidden />
            {app.kind}
          </span>
          <span className="px-2.5 py-0.5 text-xs rounded-full bg-card dark:bg-dark-card border border-border dark:border-dark-border text-text-secondary dark:text-dark-text-secondary">
            {app.tag}
          </span>
          <span className="px-2.5 py-0.5 text-xs rounded-full bg-card dark:bg-dark-card border border-border dark:border-dark-border text-text-secondary dark:text-dark-text-secondary">
            {app.year}
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-text-primary dark:text-dark-text-primary">
          {app.name}
        </h1>

        {app.client && (
          <p className="mt-3 text-sm text-text-secondary dark:text-dark-text-secondary">
            Built for {app.client}
          </p>
        )}

        {app.tagline && (
          <p className="mt-4 max-w-3xl text-lg text-text-secondary dark:text-dark-text-secondary leading-relaxed">
            {app.tagline}
          </p>
        )}

        {app.storeStats && (
          <PlayStoreMetrics
            downloads={app.storeStats.downloads}
            rating={app.storeStats.rating}
            variant="featured"
            className="mt-8 !justify-start"
          />
        )}

        {app.link && (
          <a
            href={app.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-6 inline-flex items-center px-5 py-2.5 text-sm font-medium rounded-lg bg-button-primary-bg dark:bg-dark-button-primary-bg text-button-primary-text dark:text-dark-button-primary-text hover:bg-button-primary-hover dark:hover:bg-dark-button-primary-hover transition-colors"
          >
            {app.linkText || 'Open app'}
            <ExternalLinkIcon
              className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden
            />
          </a>
        )}
      </header>

      {app.metrics && app.metrics.length > 0 && (
        <StatsStrip
          stats={app.metrics.map((metric) => ({
            value: metric.value,
            label: metric.label,
          }))}
        />
      )}

      <section className="animated-item anim-fadeInUp anim-delay-200 space-y-4">
        <h2 className="text-2xl font-bold text-text-primary dark:text-dark-text-primary">
          Screens
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {galleryItems.map((item, index) =>
            hasRealImages ? (
              <div
                key={item}
                className="overflow-hidden rounded-xl border border-border dark:border-dark-border shadow-lg"
              >
                <img
                  src={item}
                  alt={`${app.name} screenshot ${index + 1}`}
                  className="w-full h-auto"
                />
              </div>
            ) : (
              <ImagePlaceholder
                key={item}
                label={item}
                className="w-full aspect-video rounded-xl"
              />
            )
          )}
        </div>
      </section>

      {app.overview && (
        <section className="animated-item anim-fadeInUp anim-delay-300 space-y-4">
          <h2 className="text-2xl font-bold text-text-primary dark:text-dark-text-primary">
            Overview
          </h2>
          <p className="max-w-3xl text-text-secondary dark:text-dark-text-secondary leading-relaxed">
            {app.overview}
          </p>
        </section>
      )}

      {app.keyFeatures && app.keyFeatures.length > 0 && (
        <section className="animated-item anim-fadeInUp anim-delay-400 space-y-4">
          <h2 className="text-2xl font-bold text-text-primary dark:text-dark-text-primary">
            Key features
          </h2>
          <ul className="grid gap-3 sm:grid-cols-2">
            {app.keyFeatures.map((feature) => (
              <li
                key={feature}
                className="p-4 bg-card dark:bg-dark-card border border-border dark:border-dark-border rounded-xl text-sm text-text-secondary dark:text-dark-text-secondary"
              >
                {feature}
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="animated-item anim-fadeInUp anim-delay-500 grid gap-8 sm:grid-cols-2">
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-text-secondary dark:text-dark-text-secondary mb-3">
            Platforms
          </h2>
          <div className="flex flex-wrap gap-2">
            {app.platforms.map((platform) => (
              <span
                key={platform}
                className="px-3 py-1 text-sm rounded-full bg-card dark:bg-dark-card border border-border dark:border-dark-border text-text-secondary dark:text-dark-text-secondary"
              >
                {platform}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-text-secondary dark:text-dark-text-secondary mb-3">
            Built with
          </h2>
          <div className="flex flex-wrap gap-2">
            {app.technologies.map((technology) => (
              <span
                key={technology}
                className="px-3 py-1 text-sm rounded-full bg-card dark:bg-dark-card border border-border dark:border-dark-border text-text-secondary dark:text-dark-text-secondary"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      </section>

      {app.testimonial && (
        <section className="animated-item anim-fadeInUp anim-delay-600 space-y-4">
          <h2 className="text-2xl font-bold text-text-primary dark:text-dark-text-primary">
            What the client said
          </h2>
          <TestimonialCard testimonial={app.testimonial} />
        </section>
      )}

      {otherApps.length > 0 && (
        <section className="animated-item anim-fadeInUp anim-delay-700 space-y-4">
          <SectionTitle title="More apps" />
          <div className="grid gap-4 md:grid-cols-2">
            {otherApps.slice(0, 2).map((project) => (
              <AppCard
                key={project.id}
                app={project}
                onSelect={(id) => setCurrentPage('app-detail', id)}
              />
            ))}
          </div>
          <div className="pt-2 text-center">
            <button
              type="button"
              onClick={() => setCurrentPage('apps')}
              className="group inline-flex items-center text-sm font-medium text-accent-green hover:text-accent-green/80 transition-colors"
            >
              View all apps
              <ArrowRightIcon
                className="w-4 h-4 ml-1.5 transition-transform duration-200 ease-in-out group-hover:translate-x-1"
                aria-hidden
              />
            </button>
          </div>
        </section>
      )}

      <CallToAction setCurrentPage={setCurrentPage} />
    </div>
  );
};
