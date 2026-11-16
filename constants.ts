import {
  CompanyInfo,
  DevTeamsPageContent,
  HomePageContent,
  LocalBusinessesPageContent,
  NavItem,
  ProcessStep,
  Service,
  WebsiteProject,
  WebsiteWorkType,
} from "./types";
import {
  CodeIcon,
  HomeIcon,
  LayersIcon,
  MonitorIcon,
  PhoneOffIcon,
  RefreshIcon,
  SearchIcon,
  ServerIcon,
  TerminalIcon,
  XCircleIcon,
} from "./components/icons";
import skFranceBanner from "./assets/Website_previews/SKfrance_Banner.webp";
import skillTeamBanner from "./assets/Website_previews/SkillTeam_Banner.webp";
import localBusinessesHomeImage from "./assets/Friendly Shopkeeper Outside a Modern Store.png";
import devTeamsHomeImage from "./assets/Collaborative Coding in a Bright Office.png";
import codingSlide1 from "./assets/coding 1.jpg";
import codingSlide2 from "./assets/coding 2.jpg";
import codingSlide3 from "./assets/coding 3.jpg";
import codingSlide4 from "./assets/coding 4.jpg";
import clinicHealthImage from "./assets/clinic health.jpg";
import restaurantImage from "./assets/restaurant.jpg";
import homeMaintenanceImage from "./assets/home maintenance & renovation.jpg";
import gymImage from "./assets/gym.jpg";
import { getTranslations, Locale, TranslationBundle } from "./translations";

/** Web3Forms key powering the contact form. Get one free at https://web3forms.com */
export const WEB3FORMS_ACCESS_KEY = "3e9256d4-7606-4f32-8855-615e3d892cd5";

export const LINKEDIN_URL =
  "https://www.linkedin.com/company/fabricalabs/?viewAsMember=true";

/** Non-translatable company facts shared across locales. */
export const COMPANY_BASE = {
  name: "FabricaLabs",
  email: "support@fabricalabs.net",
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

const SERVICE_ICONS = {
  "service-local-businesses": HomeIcon,
  "service-dev-teams": CodeIcon,
} as const;

const LOCAL_LEAK_ICONS = {
  "leak-find": SearchIcon,
  "leak-convert": XCircleIcon,
  "leak-respond": PhoneOffIcon,
} as const;

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

const INDUSTRY_IMAGES = {
  "industry-health": clinicHealthImage,
  "industry-food": restaurantImage,
  "industry-home": homeMaintenanceImage,
  "industry-sports": gymImage,
} as const;

const PROFILE_IMAGES = {
  "profile-small-teams": codingSlide1,
  "profile-no-devops": codingSlide2,
  "profile-no-platform": codingSlide3,
  "profile-ai-assisted": codingSlide4,
} as const;

const PATH_IMAGES = {
  "path-local": localBusinessesHomeImage,
  "path-dev": devTeamsHomeImage,
} as const;

export interface LocalizedSiteContent {
  locale: Locale;
  t: TranslationBundle;
  company: CompanyInfo;
  navItems: NavItem[];
  services: Service[];
  processSteps: ProcessStep[];
  homePage: HomePageContent;
  localBusinessesPage: LocalBusinessesPageContent;
  devTeamsPage: DevTeamsPageContent;
  websiteProjects: WebsiteProject[];
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
    websitesPageIntro: t.company.websitesPageIntro,
    contactPageTitle: t.company.contactPageTitle,
    contactPageSubtitle: t.company.contactPageSubtitle,
  };

  const navItems: NavItem[] = [
    { id: "home", name: t.nav.home, href: "/" },
    {
      id: "for-local-businesses",
      name: t.nav.forLocalBusinesses,
      href: "/for-local-businesses",
    },
    {
      id: "for-dev-teams",
      name: t.nav.forDevTeams,
      href: "/for-dev-teams",
    },
    { id: "about", name: t.nav.about, href: "/about" },
  ];

  const services: Service[] = t.services.map((service) => ({
    ...service,
    icon: SERVICE_ICONS[service.id as keyof typeof SERVICE_ICONS] ?? HomeIcon,
  }));

  const processSteps: ProcessStep[] = t.processSteps;

  const homePage: HomePageContent = {
    eyebrow: t.home.eyebrow,
    headline: t.home.headline,
    description: t.home.description,
    pathsLabel: t.home.pathsLabel,
    paths: t.home.paths.map((path) => ({
      ...path,
      imageUrl: PATH_IMAGES[path.id as keyof typeof PATH_IMAGES],
    })),
  };

  const localBusinessesPage: LocalBusinessesPageContent = {
    valueProposition: t.localBusinesses.valueProposition,
    valuePropositionSupport: t.localBusinesses.valuePropositionSupport,
    audienceLabel: t.localBusinesses.audienceLabel,
    audience: t.localBusinesses.audience,
    industries: t.localBusinesses.industries.map((industry) => ({
      ...industry,
      imageUrl: INDUSTRY_IMAGES[industry.id as keyof typeof INDUSTRY_IMAGES],
    })),
    problemLabel: t.localBusinesses.problemLabel,
    problem: t.localBusinesses.problem,
    leakPointsTitle: t.localBusinesses.leakPointsTitle,
    leakPoints: t.localBusinesses.leakPoints.map((point) => ({
      ...point,
      icon: LOCAL_LEAK_ICONS[point.id as keyof typeof LOCAL_LEAK_ICONS] ?? SearchIcon,
    })),
    solution: t.localBusinesses.solution,
  };

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

  const websiteProjects: WebsiteProject[] = [
    {
      id: "skfrance",
      name: "SKFrance",
      industry: t.websites.skfrance.industry,
      workType: t.websites.skfrance.workType as WebsiteWorkType,
      year: "2026",
      description: t.websites.skfrance.description,
      services: t.websites.skfrance.services,
      liveLink: "https://skfrance.fr",
      cardImageUrl: skFranceBanner,
      cardImageFit: "contain",
    },
    {
      id: "skillteam",
      name: "SkillTeam",
      industry: t.websites.skillteam.industry,
      workType: t.websites.skillteam.workType as WebsiteWorkType,
      year: "2026",
      description: t.websites.skillteam.description,
      services: t.websites.skillteam.services,
      liveLink: "https://skillteam.net",
      cardImageUrl: skillTeamBanner,
      cardImageFit: "contain",
      cardImageBackground: "#e5f3fe",
      cardImageInset: false,
    },
  ];

  return {
    locale,
    t,
    company,
    navItems,
    services,
    processSteps,
    homePage,
    localBusinessesPage,
    devTeamsPage,
    websiteProjects,
  };
}

/** English defaults kept for any static imports that still expect them. */
const defaults = getLocalizedContent("en");
export const COMPANY_INFO = defaults.company;
export const NAV_ITEMS_MAIN = defaults.navItems;
export const SERVICES = defaults.services;
export const PROCESS_STEPS = defaults.processSteps;
export const HOME_PAGE = defaults.homePage;
export const LOCAL_BUSINESSES_PAGE = defaults.localBusinessesPage;
export const DEV_TEAMS_PAGE = defaults.devTeamsPage;
export const WEBSITE_PROJECTS = defaults.websiteProjects;
