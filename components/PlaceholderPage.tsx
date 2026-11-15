import React from 'react';

interface PlaceholderPageProps {
  title: string;
  description?: string;
}

export const PlaceholderPage: React.FC<PlaceholderPageProps> = ({
  title,
  description = 'Content coming soon.',
}) => (
  <section className="py-16 md:py-24 text-center">
    <h1 className="animated-item anim-fadeInUp text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-text-primary dark:text-dark-text-primary">
      {title}
    </h1>
    <p className="animated-item anim-fadeInUp anim-delay-100 mt-4 max-w-lg mx-auto text-base sm:text-lg text-text-secondary dark:text-dark-text-secondary leading-relaxed">
      {description}
    </p>
  </section>
);
