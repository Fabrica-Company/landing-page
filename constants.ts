import {
  CompanyInfo,
  DevTeamsPageContent,
  NavItem,
  ProcessStep,
} from "./types";
import {
  LayersIcon,
  MonitorIcon,
  RefreshIcon,
  SearchIcon,
  ServerIcon,
  TerminalIcon,
  XCircleIcon,
} from "./components/icons";
import codingSlide1 from "./assets/coding 1.jpg";
import codingSlide2 from "./assets/coding 2.jpg";
import codingSlide3 from "./assets/coding 3.jpg";
import codingSlide4 from "./assets/coding 4.jpg";
import { getTranslations, Locale, TranslationBundle } from "./translations";

/** Web3Forms key powering the contact form. Get one free at https://web3forms.com */
export const WEB3FORMS_ACCESS_KEY = "3e9256d4-7606-4f32-8855-615e3d892cd5";

export const LINKEDIN_URL =
  "https://www.linkedin.com/company/fabricalabs/?viewAsMember=true";

export const YOUTUBE_URL = "https://www.youtube.com/@FabricaLabs";

/** Non-translatable company facts shared across locales. */
export const COMPANY_BASE = {
  name: "FabricaLabs",
  email: "aurelien.fabricalabs@gmail.com",
  timezone: "Europe/Paris",
  timezoneLabel: "CET",
  officeHours: { start: 9, end: 19 },
  circularText: "FABRICA LABS • DESIGN • DEVELOPMENT • ",
  circularTextLetterSpacing: "0.55em",
  introWord1: "Fabrica",
  introWord2: "Labs",
} as const;

export const PROCESS_STEP_ICONS = [
  SearchIcon,
  LayersIcon,
  TerminalIcon,
  ServerIcon,
];

const DEV_LEAK_ICONS = {
  "leak-build": TerminalIcon,
  "leak-control": XCircleIcon,
  "leak-production": MonitorIcon,
} as const;

const DEV_STAGE_ICONS = {
  "stage-build": TerminalIcon,
  "stage-control": SearchIcon,
  "stage-ship": RefreshIcon,
  "stage-production": MonitorIcon,
} as const;

const PROFILE_IMAGES = {
  "profile-small-teams": codingSlide1,
  "profile-no-devops": codingSlide2,
  "profile-no-platform": codingSlide3,
  "profile-ai-assisted": codingSlide4,
} as const;

export interface LocalizedSiteContent {
  locale: Locale;
  t: TranslationBundle;
  company: CompanyInfo;
  navItems: NavItem[];
  processSteps: ProcessStep[];
  devTeamsPage: DevTeamsPageContent;
}

export function getLocalizedContent(locale: Locale): LocalizedSiteContent {
  const t = getTranslations(locale);

  const company: CompanyInfo = {
    name: COMPANY_BASE.name,
    tagline: t.company.tagline,
    heroHeadlinePrefix: t.company.heroHeadlinePrefix,
    heroRotatingWords: t.company.heroRotatingWords,
    heroHeadlineSuffix: t.company.heroHeadlineSuffix,
    heroDescription: t.company.heroDescription,
    email: COMPANY_BASE.email,
    location: t.company.location,
    timezone: COMPANY_BASE.timezone,
    timezoneLabel: COMPANY_BASE.timezoneLabel,
    officeHours: { ...COMPANY_BASE.officeHours },
    circularText: COMPANY_BASE.circularText,
    circularTextLetterSpacing: COMPANY_BASE.circularTextLetterSpacing,
    introWord1: COMPANY_BASE.introWord1,
    introWord2: COMPANY_BASE.introWord2,
    introTagline: t.company.introTagline,
    contactPageTitle: t.company.contactPageTitle,
    contactPageSubtitle: t.company.contactPageSubtitle,
  };

  const navItems: NavItem[] = [
    { id: "home", name: t.nav.home, href: "/" },
    { id: "about", name: t.nav.about, href: "/about" },
  ];

  const processSteps: ProcessStep[] = t.processSteps;

  const devTeamsPage: DevTeamsPageContent = {
    valueProposition: t.devTeams.valueProposition,
    valuePropositionSupport: t.devTeams.valuePropositionSupport,
    audienceLabel: t.devTeams.audienceLabel,
    audience: t.devTeams.audience,
    audienceProfiles: t.devTeams.audienceProfiles.map((profile) => ({
      ...profile,
      imageUrl: PROFILE_IMAGES[profile.id as keyof typeof PROFILE_IMAGES],
    })),
    problemLabel: t.devTeams.problemLabel,
    problem: t.devTeams.problem,
    leakPointsTitle: t.devTeams.leakPointsTitle,
    leakPoints: t.devTeams.leakPoints.map((point) => ({
      ...point,
      icon: DEV_LEAK_ICONS[point.id as keyof typeof DEV_LEAK_ICONS] ?? TerminalIcon,
    })),
    solution: t.devTeams.solution,
    stagesTitle: t.devTeams.stagesTitle,
    stagesSubtitle: t.devTeams.stagesSubtitle,
    stages: t.devTeams.stages.map((stage) => ({
      ...stage,
      icon: DEV_STAGE_ICONS[stage.id as keyof typeof DEV_STAGE_ICONS] ?? TerminalIcon,
    })),
  };

  return {
    locale,
    t,
    company,
    navItems,
    processSteps,
    devTeamsPage,
  };
}

/** English defaults kept for any static imports that still expect them. */
const defaults = getLocalizedContent("en");
export const COMPANY_INFO = defaults.company;
export const NAV_ITEMS_MAIN = defaults.navItems;
export const PROCESS_STEPS = defaults.processSteps;
export const DEV_TEAMS_PAGE = defaults.devTeamsPage;
