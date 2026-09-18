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
  /** Text spinning around the hero logo. */
  circularText: string;
  circularTextLetterSpacing: string;
  /** Opening splash: the name in two staggered halves, plus a tagline. */
  introWord1: string;
  introWord2: string;
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

export type WebsiteWorkType = "New build" | "Modernization";

export interface WebsiteProject {
  id: string;
  name: string;
  industry: string;
  workType: WebsiteWorkType;
  year: string;
  /** One-line summary shown on the card. */
  description: string;
  /** What we delivered, e.g. "UX audit", "Design system". */
  services: string[];
  /** The live site. Cards link straight to it; without it they alert instead. */
  liveLink?: string;
  /** Card thumbnail. A placeholder is rendered when omitted. */
  cardImageUrl?: string;
  /** `contain` shows the whole image on a white pad. Default is `cover`. */
  cardImageFit?: "cover" | "contain";
  /** Client feedback, surfaced in the websites page feedback grid. */
  testimonial?: Testimonial;
}

export type AppPlatform = "iOS" | "Android" | "Web" | "Cross-platform";

export type AppKind = "Mobile App" | "Web App";

export interface AppProject {
  id: string;
  name: string;
  kind: AppKind;
  platforms: AppPlatform[];
  /** Optional status badge, e.g. "Live on the App Store". */
  tag?: string;
  description: string;
  tagline?: string;
  overview?: string;
  year: string;
  client?: string;
  technologies: string[];
  keyFeatures?: string[];
  link?: string;
  linkText?: string;
  /** Privacy policy. The detail page alerts instead while this is empty. */
  privacyPolicyUrl?: string;
  /** Card thumbnail. A placeholder is rendered when omitted. */
  cardImageUrl?: string;
  /** `contain` shows the whole image. Default is `cover`. */
  cardImageFit?: "cover" | "contain";
  /** CSS object-position, e.g. "70% 50%". */
  cardImagePosition?: string;
  /** Detail page gallery. Placeholders are rendered when empty. */
  images?: string[];
  storeStats?: {
    downloads: string;
    rating: string;
  };
  metrics?: ProjectMetric[];
  testimonial?: Testimonial;
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
  onViewAllClick?: () => void;
}

export interface WebsitesPageProps {
  websites: WebsiteProject[];
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
