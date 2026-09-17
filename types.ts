import React from "react";

export interface IconProps {
  className?: string;
}

export interface NavItem {
  id: string;
  name: string;
  href: string;
  icon: React.ComponentType<IconProps>;
}

export interface CompanyInfo {
  name: string;
  /** Short label shown above the hero headline. */
  tagline: string;
  /** Static first half of the hero headline, e.g. "We design". */
  heroHeadlinePrefix: string;
  /** Words cycled after the prefix, e.g. "websites", "web apps". */
  heroRotatingWords: string[];
  /** Static text closing the hero headline. */
  heroHeadlineSuffix: string;
  heroDescription: string;
  email: string;
  location: string;
  /** IANA timezone used by the live clock and availability dot. */
  timezone: string;
  /** Suffix appended to the live clock, e.g. "CET". */
  timezoneLabel: string;
  /** Local hours (inclusive start, exclusive end) the studio shows as online. */
  officeHours: { start: number; end: number };
  /** Text spinning around the hero monogram. */
  circularText: string;
  circularTextLetterSpacing: string;
  /** Opening splash: two letters plus a tagline. */
  introLetter1: string;
  introLetter2: string;
  introTagline: string;
  websitesPageIntro: string;
  appsPageIntro: string;
  contactPageTitle: string;
  contactPageSubtitle: string;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  icon: React.ComponentType<IconProps>;
  deliverables: string[];
}

export interface Stat {
  label: string;
  value: string;
}

export interface ProcessStep {
  id: string;
  title: string;
  description: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  authorName: string;
  authorRole: string;
  company: string;
  /** Client logo. A placeholder is rendered when omitted. */
  logoImageUrl?: string;
}

export interface ProjectMetric {
  label: string;
  value: string;
}

export type WebsiteWorkType = "New build" | "Redesign" | "Modernization";

export interface WebsiteProject {
  id: string;
  name: string;
  client: string;
  industry: string;
  workType: WebsiteWorkType;
  year: string;
  /** One-line summary used on cards. */
  description: string;
  /** Headline sentence on the detail page. */
  tagline?: string;
  overview?: string;
  /** What we delivered, e.g. "UX audit", "Design system". */
  services: string[];
  technologies: string[];
  liveLink?: string;
  /** Card thumbnail. A placeholder is rendered when omitted. */
  cardImageUrl?: string;
  /** Client logo. A placeholder is rendered when omitted. */
  logoImageUrl?: string;
  /** Detail page gallery. Placeholders are rendered when empty. */
  images?: string[];
  /** Before/after numbers shown on the detail page. */
  metrics?: ProjectMetric[];
  challenge?: string;
  solution?: string;
  /** Client feedback shown on the detail page and the websites index. */
  testimonial?: Testimonial;
}

export type AppPlatform = "iOS" | "Android" | "Web" | "Cross-platform";

export type AppKind = "Mobile App" | "Web App";

export interface AppProject {
  id: string;
  name: string;
  kind: AppKind;
  platforms: AppPlatform[];
  /** Status badge, e.g. "Live on the App Store". */
  tag: string;
  description: string;
  tagline?: string;
  overview?: string;
  year: string;
  client?: string;
  technologies: string[];
  keyFeatures?: string[];
  link?: string;
  linkText?: string;
  /** Card thumbnail. A placeholder is rendered when omitted. */
  cardImageUrl?: string;
  /** Detail page gallery. Placeholders are rendered when empty. */
  images?: string[];
  storeStats?: {
    downloads: string;
    rating: string;
  };
  metrics?: ProjectMetric[];
  testimonial?: Testimonial;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: React.ComponentType<IconProps>;
}

export interface HeroProps {
  company: CompanyInfo;
  stats: Stat[];
  setCurrentPage: (pageId: string, itemId?: string) => void;
}

export interface CallToActionProps {
  setCurrentPage: (pageId: string, itemId?: string) => void;
}

export interface ServicesSectionProps {
  services: Service[];
  title?: string;
  subtitle?: string;
}

export interface ProcessSectionProps {
  steps: ProcessStep[];
  title?: string;
  subtitle?: string;
}

export interface TestimonialsSectionProps {
  testimonials: Testimonial[];
  title?: string;
  subtitle?: string;
}

export interface WebsitesSectionProps {
  websites: WebsiteProject[];
  setCurrentPage: (pageId: string, itemId?: string) => void;
  title?: string;
  subtitle?: string;
  maxItems?: number;
  onViewAllClick?: () => void;
}

export interface AppsSectionProps {
  apps: AppProject[];
  setCurrentPage: (pageId: string, itemId?: string) => void;
  title?: string;
  subtitle?: string;
  maxItems?: number;
  onViewAllClick?: () => void;
}

export interface WebsitesPageProps {
  websites: WebsiteProject[];
  testimonials: Testimonial[];
  intro: string;
  setCurrentPage: (pageId: string, itemId?: string) => void;
}

export interface AppsPageProps {
  apps: AppProject[];
  intro: string;
  setCurrentPage: (pageId: string, itemId?: string) => void;
}

export interface ContactPageProps {
  company: CompanyInfo;
  setCurrentPage: (pageId: string) => void;
}
