import React from 'react';
import { useParams } from 'react-router-dom';
import { WEBSITE_PROJECTS } from '../constants';
import { SectionTitle } from './SectionTitle';
import { WebsiteCard } from './WebsiteCard';
import { TestimonialCard } from './TestimonialCard';
import { CallToAction } from './CallToAction';
import { ImagePlaceholder } from './ImagePlaceholder';
import { StatsStrip } from './StatsStrip';
import { ArrowLeftIcon, ArrowRightIcon, ExternalLinkIcon } from './icons';

/** Shown when a project has no gallery yet, so the layout still reads right. */
const GALLERY_PLACEHOLDERS = ['Desktop homepage', 'Mobile view'];

export const WebsiteDetailsPage: React.FC<{
  setCurrentPage: (pageId: string, itemId?: string) => void;
}> = ({ setCurrentPage }) => {
  const { websiteId } = useParams<{ websiteId: string }>();

  const website = WEBSITE_PROJECTS.find((project) => project.id === websiteId);
  const otherWebsites = WEBSITE_PROJECTS.filter(
    (project) => project.id !== websiteId
  );

  if (!website) {
    return (
      <div className="animated-item anim-fadeInUp text-center py-10">
        <h1 className="text-2xl font-bold mb-4">Project not found</h1>
        <p className="text-text-secondary dark:text-dark-text-secondary mb-6">
          This case study doesn&rsquo;t exist or has been moved.
        </p>
        <button
          type="button"
          onClick={() => setCurrentPage('websites')}
          className="px-4 py-2 rounded-lg bg-button-primary-bg dark:bg-dark-button-primary-bg text-button-primary-text dark:text-dark-button-primary-text hover:bg-button-primary-hover dark:hover:bg-dark-button-primary-hover transition-colors"
        >
          View all websites
        </button>
      </div>
    );
  }

  const galleryItems = website.images?.length
    ? website.images
    : GALLERY_PLACEHOLDERS;
  const hasRealImages = Boolean(website.images?.length);

  return (
    <div className="space-y-16">
      <div className="animated-item anim-fadeInUp">
        <button
          type="button"
          onClick={() => setCurrentPage('websites')}
          className="group inline-flex items-center text-sm font-medium text-text-secondary dark:text-dark-text-secondary hover:text-text-primary dark:hover:text-dark-text-primary transition-colors"
        >
          <ArrowLeftIcon
            className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1"
            aria-hidden
          />
          Back to websites
        </button>
      </div>

      <header className="animated-item anim-fadeInUp anim-delay-100">
        <div className="flex items-center gap-4 mb-6">
          {website.logoImageUrl ? (
            <img
              src={website.logoImageUrl}
              alt={`${website.client} logo`}
              className="w-14 h-14 rounded-full object-cover border border-border dark:border-dark-border bg-white"
            />
          ) : (
            <ImagePlaceholder
              compact
              label={`${website.client} logo`}
              className="w-14 h-14 rounded-full shrink-0"
            />
          )}
          <div>
            <p className="text-sm text-text-secondary dark:text-dark-text-secondary">
              {website.client}
            </p>
            <p className="text-xs text-text-secondary dark:text-dark-text-secondary">
              {website.industry} &middot; {website.year}
            </p>
          </div>
        </div>

        <span className="inline-block px-2.5 py-0.5 mb-4 text-xs font-medium rounded-full bg-accent-green/15 text-accent-green">
          {website.workType}
        </span>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-text-primary dark:text-dark-text-primary">
          {website.name}
        </h1>

        {website.tagline && (
          <p className="mt-4 max-w-3xl text-lg text-text-secondary dark:text-dark-text-secondary leading-relaxed">
            {website.tagline}
          </p>
        )}

        {website.liveLink && (
          <a
            href={website.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-6 inline-flex items-center px-5 py-2.5 text-sm font-medium rounded-lg bg-button-primary-bg dark:bg-dark-button-primary-bg text-button-primary-text dark:text-dark-button-primary-text hover:bg-button-primary-hover dark:hover:bg-dark-button-primary-hover transition-colors"
          >
            Visit live site
            <ExternalLinkIcon
              className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden
            />
          </a>
        )}
      </header>

      {website.metrics && website.metrics.length > 0 && (
        <StatsStrip
          stats={website.metrics.map((metric) => ({
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
                  alt={`${website.name} screenshot ${index + 1}`}
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

      {website.overview && (
        <section className="animated-item anim-fadeInUp anim-delay-300 space-y-4">
          <h2 className="text-2xl font-bold text-text-primary dark:text-dark-text-primary">
            Overview
          </h2>
          <p className="max-w-3xl text-text-secondary dark:text-dark-text-secondary leading-relaxed">
            {website.overview}
          </p>
        </section>
      )}

      {(website.challenge || website.solution) && (
        <section className="animated-item anim-fadeInUp anim-delay-400 grid gap-4 md:grid-cols-2">
          {website.challenge && (
            <div className="p-5 sm:p-6 bg-card dark:bg-dark-card border border-border dark:border-dark-border rounded-xl shadow-lg">
              <h2 className="text-lg font-semibold text-text-primary dark:text-dark-text-primary mb-3">
                The challenge
              </h2>
              <p className="text-sm text-text-secondary dark:text-dark-text-secondary leading-relaxed">
                {website.challenge}
              </p>
            </div>
          )}
          {website.solution && (
            <div className="p-5 sm:p-6 bg-card dark:bg-dark-card border border-border dark:border-dark-border rounded-xl shadow-lg">
              <h2 className="text-lg font-semibold text-text-primary dark:text-dark-text-primary mb-3">
                What we did
              </h2>
              <p className="text-sm text-text-secondary dark:text-dark-text-secondary leading-relaxed">
                {website.solution}
              </p>
            </div>
          )}
        </section>
      )}

      <section className="animated-item anim-fadeInUp anim-delay-500 grid gap-8 sm:grid-cols-2">
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-text-secondary dark:text-dark-text-secondary mb-3">
            Scope
          </h2>
          <div className="flex flex-wrap gap-2">
            {website.services.map((service) => (
              <span
                key={service}
                className="px-3 py-1 text-sm rounded-full bg-card dark:bg-dark-card border border-border dark:border-dark-border text-text-secondary dark:text-dark-text-secondary"
              >
                {service}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-text-secondary dark:text-dark-text-secondary mb-3">
            Built with
          </h2>
          <div className="flex flex-wrap gap-2">
            {website.technologies.map((technology) => (
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

      {website.testimonial && (
        <section className="animated-item anim-fadeInUp anim-delay-600 space-y-4">
          <h2 className="text-2xl font-bold text-text-primary dark:text-dark-text-primary">
            What the client said
          </h2>
          <TestimonialCard testimonial={website.testimonial} />
        </section>
      )}

      {otherWebsites.length > 0 && (
        <section className="animated-item anim-fadeInUp anim-delay-700 space-y-4">
          <SectionTitle title="More client work" />
          <div className="grid gap-4 md:grid-cols-2">
            {otherWebsites.slice(0, 2).map((project) => (
              <WebsiteCard
                key={project.id}
                website={project}
                onSelect={(id) => setCurrentPage('website-detail', id)}
              />
            ))}
          </div>
          <div className="pt-2 text-center">
            <button
              type="button"
              onClick={() => setCurrentPage('websites')}
              className="group inline-flex items-center text-sm font-medium text-accent-green hover:text-accent-green/80 transition-colors"
            >
              View all websites
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
