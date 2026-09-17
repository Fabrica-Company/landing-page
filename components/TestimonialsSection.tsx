import React from 'react';
import { TestimonialsSectionProps } from '../types';
import { SectionTitle } from './SectionTitle';
import { TestimonialCard } from './TestimonialCard';

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  testimonials,
  title = 'What clients say',
  subtitle,
}) => {
  if (testimonials.length === 0) return null;

  return (
    <section id="testimonials">
      <SectionTitle title={title} subtitle={subtitle} />
      <div className="grid gap-4 md:grid-cols-2">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={testimonial.id}
            testimonial={testimonial}
            className="animated-item anim-fadeInUp"
            style={{ animationDelay: `${index * 100 + 200}ms` }}
          />
        ))}
      </div>
    </section>
  );
};
