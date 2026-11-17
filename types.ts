import React from "react";

export interface IconProps {
  className?: string;
}

export interface NavItem {
  id: string;
  name: string;
  href: string;
  /** Optional; header uses text labels. Kept for any icon-based surfaces. */
  icon?: React.ComponentType<IconProps>;
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
  contactPageTitle: string;
  contactPageSubtitle: string;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  icon: React.ComponentType<IconProps>;
  deliverables: string[];
  /** Optional page to open from the service card. */
  pageId?: string;
  cta?: string;
}

export interface ProcessStep {
  id: string;
  title: string;
  description: string;
}

export interface HeroProps {
  company: CompanyInfo;
  setCurrentPage: (pageId: string, itemId?: string) => void;
}

export interface CallToActionProps {
  setCurrentPage: (pageId: string, itemId?: string) => void;
}

export interface ServicesSectionProps {
  services: Service[];
  title?: string;
  subtitle?: string;
  setCurrentPage?: (pageId: string, itemId?: string) => void;
}

export interface ProcessSectionProps {
  steps: ProcessStep[];
  title?: string;
  subtitle?: string;
}

export interface ContactPageProps {
  setCurrentPage: (pageId: string) => void;
}

export interface DevTeamStage {
  id: string;
  number: string;
  title: string;
  items: string[];
  icon: React.ComponentType<IconProps>;
}

export interface DevTeamAudienceProfile {
  id: string;
  name: string;
  /** Optional photo. A placeholder is shown when omitted. */
  imageUrl?: string;
  imageAlt?: string;
}

export interface DevTeamLeakPoint {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: React.ComponentType<IconProps>;
}

export interface DevTeamsPageContent {
  valueProposition: string;
  valuePropositionSupport: string;
  audienceLabel: string;
  audience: string;
  audienceProfiles: DevTeamAudienceProfile[];
  problemLabel: string;
  problem: string;
  leakPointsTitle: string;
  leakPoints: DevTeamLeakPoint[];
  solution: string;
  stagesTitle: string;
  stagesSubtitle: string;
  stages: DevTeamStage[];
}

export interface ForDevTeamsPageProps {
  setCurrentPage: (pageId: string, itemId?: string) => void;
}

export interface LocalBusinessLeakPoint {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: React.ComponentType<IconProps>;
}

export interface LocalBusinessIndustry {
  id: string;
  name: string;
  /** Optional photo. A placeholder is shown when omitted. */
  imageUrl?: string;
  imageAlt?: string;
}

export interface LocalBusinessesPageContent {
  valueProposition: string;
  valuePropositionSupport: string;
  audienceLabel: string;
  audience: string;
  industries: LocalBusinessIndustry[];
  problemLabel: string;
  problem: string;
  leakPointsTitle: string;
  leakPoints: LocalBusinessLeakPoint[];
  solution: string;
}

export interface ForLocalBusinessesPageProps {
  setCurrentPage: (pageId: string, itemId?: string) => void;
}

export interface HomeAudiencePath {
  id: string;
  pageId: string;
  title: string;
  description: string;
  cta: string;
  imageUrl: string;
  imageAlt: string;
}

export interface HomePageContent {
  eyebrow: string;
  headline: string;
  description: string;
  pathsLabel: string;
  paths: HomeAudiencePath[];
}

export interface HomePageProps {
  setCurrentPage: (pageId: string, itemId?: string) => void;
}
