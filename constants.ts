import {
  CompanyInfo,
  DevTeamsPageContent,
  HomePageContent,
  LocalBusinessesPageContent,
  NavItem,
  ProcessStep,
  Service,
  WebsiteProject,
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


/** Web3Forms key powering the contact form. Get one free at https://web3forms.com */
export const WEB3FORMS_ACCESS_KEY = "3e9256d4-7606-4f32-8855-615e3d892cd5"; 

export const COMPANY_INFO: CompanyInfo = {
  name: "FabricaLabs",
  tagline: "Design & development studio",
  heroHeadlinePrefix: "We help",
  heroRotatingWords: ["local businesses", "developer teams"],
  heroHeadlineSuffix: "get more done — safely.",
  heroDescription:
    "Processes and workflows that keep pace with the way you work today.",
  email: "support@fabricalabs.net",
  location: "We work remotely across the world — based in Paris, France.",
  timezone: "Europe/Paris",
  timezoneLabel: "CET",
  officeHours: { start: 9, end: 19 },
  circularText: "FABRICA LABS • DESIGN • DEVELOPMENT • ",
  circularTextLetterSpacing: "0.55em",
  introWord1: "Fabrica",
  introWord2: "Labs",
  introTagline: "IT Services and IT Consulting",
  websitesPageIntro:
    "Websites we designed, rebuilt and modernized for clients — with the results that came out of each one.",
  contactPageTitle: "Start a project",
  contactPageSubtitle:
    "We reply within one business day with next steps and a ballpark.",
};

/** Header / footer nav. Websites is intentionally omitted — reach it via About → See our work. */
export const NAV_ITEMS_MAIN: NavItem[] = [
  { id: "home", name: "Home", href: "/" },
  {
    id: "for-local-businesses",
    name: "For local businesses",
    href: "/for-local-businesses",
  },
  { id: "for-dev-teams", name: "For developer teams", href: "/for-dev-teams" },
  { id: "about", name: "About", href: "/about" },
];

export const SERVICES: Service[] = [
  {
    id: "service-local-businesses",
    name: "For local businesses",
    description:
      "Get found online, earn trust, and capture the enquiry — even outside opening hours.",
    icon: HomeIcon,
    deliverables: [
      "Websites and local SEO",
      "Clear booking and contact flows",
      "AI agents that answer when you can't",
    ],
    pageId: "for-local-businesses",
    cta: "Explore local businesses",
  },
  {
    id: "service-dev-teams",
    name: "For developer teams",
    description:
      "Help small engineering teams build faster with AI — while keeping control, shipping safely, and understanding production.",
    icon: CodeIcon,
    deliverables: [
      "AI-assisted coding workflows",
      "CI/CD, testing, and quality gates",
      "Monitoring and production visibility",
    ],
    pageId: "for-dev-teams",
    cta: "Explore developer teams",
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: "step-diagnose",
    title: "Diagnose",
    description:
      "We map where customers drop off, or where delivery, security, and production break down — then agree a fixed scope before anything is built.",
  },
  {
    id: "step-design",
    title: "Design",
    description:
      "We design the process around how you already work: the site, agents, or engineering workflow that closes the gap.",
  },
  {
    id: "step-implement",
    title: "Implement",
    description:
      "We build and wire it in — websites, AI agents, CI/CD, monitoring — with check-ins so the result matches what you asked for.",
  },
  {
    id: "step-handover",
    title: "Hand over",
    description:
      "You get something your team can run day to day, with clear ownership, documentation, and support after launch.",
  },
];

export const PROCESS_STEP_ICONS = [
  SearchIcon,
  LayersIcon,
  TerminalIcon,
  ServerIcon,
];

/**
 * Client website work. Cards link straight to `liveLink`; while that is empty
 * the card alerts instead.
 */
export const WEBSITE_PROJECTS: WebsiteProject[] = [
  {
    id: "skfrance",
    name: "SKFrance",
    industry: "Perfumes & Raw Materials",
    workType: "Modernization",
    year: "2026",
    description:
      "A 2018 website rebuilt into a responsive and interactive landing-page, offering a real user experience.",
    services: ["Brand-aligned design", "Complete rebuild", "Landing page"],
    liveLink: "https://skfrance.fr",
    cardImageUrl: skFranceBanner,
    cardImageFit: "contain",
  },
  {
    id: "skillteam",
    name: "SkillTeam",
    industry: "Corporate Communication Training",
    workType: "New build",
    year: "2026",
    description:
      "Landing page built from scratch according to visual brand design, optimized for conversions and clarity.",
    services: ["Brand-aligned design", "Landing page", "Complete rebuild"],
    liveLink: "https://skillteam.net",
    cardImageUrl: skillTeamBanner,
    cardImageFit: "contain",
    cardImageBackground: "#e5f3fe",
    cardImageInset: false,
  },
];

/** Concise homepage — routes to audience pages without repeating them. */
export const HOME_PAGE: HomePageContent = {
  eyebrow: "IT Services and IT Consulting",
  headline: "We are here to help.",
  description:
    "You want to see increased efficiency and revenue? Who doesn't? You might need to modernize your operations. Don't worry — we are here to help.",
  pathsLabel: "Who are you ?",
  paths: [
    {
      id: "path-local",
      pageId: "for-local-businesses",
      title: "For local and city businesses",
      description:
        "Get found online, then capture the enquiry — websites, local SEO, and AI agents that answer when you can't.",
      cta: "Explore local businesses",
      imageUrl: localBusinessesHomeImage,
      imageAlt: "Local shopkeeper welcoming a customer outside a modern storefront",
    },
    {
      id: "path-dev",
      pageId: "for-dev-teams",
      title: "For developer teams",
      description:
        "Help small engineering teams build faster with AI — while keeping control, shipping safely, and understanding production.",
      cta: "Explore developer teams",
      imageUrl: devTeamsHomeImage,
      imageAlt: "Engineering team collaborating over code in a bright office",
    },
  ],
};

/** Content for the For Local Businesses page. */
export const LOCAL_BUSINESSES_PAGE: LocalBusinessesPageContent = {
  valueProposition:
    "Get found online — and don't lose customers when they're ready to get in touch.",
  valuePropositionSupport:
    "Processes that help local businesses like you get found and capture more customers online.",
  audienceLabel: "Who this is for",
  audience:
    "Local businesses in cities — health, food, home maintenance & renovation, sports and more.",
  industries: [
    {
      id: "industry-health",
      name: "Health",
      imageUrl: clinicHealthImage,
      imageAlt: "Clinic and health practice",
    },
    {
      id: "industry-food",
      name: "Food",
      imageUrl: restaurantImage,
      imageAlt: "Restaurant dining room",
    },
    {
      id: "industry-home",
      name: "Home maintenance & renovation",
      imageUrl: homeMaintenanceImage,
      imageAlt: "Home maintenance and renovation work",
    },
    {
      id: "industry-sports",
      name: "Sports",
      imageUrl: gymImage,
      imageAlt: "Gym and fitness studio",
    },
  ],
  problemLabel: "A problem familiar to you ?",
  problem:
    "Are you difficult to find online, difficult to trust, or unavailable when potential customers want to contact you? Then you are losing customers in your online customer journey. You are losing money.",
  leakPointsTitle: "Three places a customer is lost",
  leakPoints: [
    {
      id: "leak-find",
      number: "01",
      title: "They don't find the business",
      description:
        "Poor local SEO, a weak website, or an incomplete online presence.",
      icon: SearchIcon,
    },
    {
      id: "leak-convert",
      number: "02",
      title: "They find it but don't convert",
      description:
        "An outdated website, unclear information, lack of trust signals, or a difficult booking and contact process.",
      icon: XCircleIcon,
    },
    {
      id: "leak-respond",
      number: "03",
      title: "They try to contact it but nobody responds",
      description:
        "Missed calls, messages outside working hours, or slow follow-up.",
      icon: PhoneOffIcon,
    },
  ],
  solution:
    "We will help you get found online and make sure you don't lose potential customers 24/7.",
};

/** Content for the For Dev Teams page. */
export const DEV_TEAMS_PAGE: DevTeamsPageContent = {
  valueProposition: "Help your developers build faster. Make sure your systems can keep up.",
  valuePropositionSupport:
    "Workflows that help small engineering teams like you increase delivery speed safely.",
  audienceLabel: "Who this is for",
  audience: "Companies with software developers and DevOps teams.",
  audienceProfiles: [
    {
      id: "profile-small-teams",
      name: "Teams of 3–15 developers",
      imageUrl: codingSlide1,
      imageAlt: "Developers collaborating on code at shared monitors",
    },
    {
      id: "profile-no-devops",
      name: "No dedicated DevOps",
      imageUrl: codingSlide2,
      imageAlt: "Engineering team reviewing work without a dedicated DevOps role",
    },
    {
      id: "profile-no-platform",
      name: "No platform engineering team",
      imageUrl: codingSlide3,
      imageAlt: "Product engineers shipping without a platform org",
    },
    {
      id: "profile-ai-assisted",
      name: "AI-assisted development",
      imageUrl: codingSlide4,
      imageAlt: "Developers working with AI-assisted coding tools",
    },
  ],
  problemLabel: "A problem familiar to you ?",
  problem:
    "The arrival of LLMs radically changed the way a developer works. Small engineering teams are generating software faster with AI, but their development, security and deployment processes haven't evolved at the same pace.",
  leakPointsTitle: "Three places where your workflow breaks down",
  leakPoints: [
    {
      id: "leak-build",
      number: "01",
      title: "You code faster than you ship",
      description:
        "AI generates more software, but CI/CD, testing, and deployment workflows haven't kept up.",
      icon: TerminalIcon,
    },
    {
      id: "leak-control",
      number: "02",
      title: "You ship but lose control",
      description:
        "Missing dependency updates, vulnerability scans, and automated checks as the codebase grows faster.",
      icon: XCircleIcon,
    },
    {
      id: "leak-production",
      number: "03",
      title: "You ship but don't understand production",
      description:
        "No monitoring, alerts, or clear ownership when something breaks after release.",
      icon: MonitorIcon,
    },
  ],
  solution:
    "We will help you increase delivery speed safely by improving the workflow around your AI-assisted development.",
  stagesTitle: "Four stages",
  stagesSubtitle: "Services fit into a clear path from coding faster to understanding production.",
  stages: [
    {
      id: "stage-build",
      number: "01",
      title: "Build faster",
      icon: TerminalIcon,
      items: [
        "Coding agent setup",
        "Best practices",
        "Shared AI context",
        "Team workflows",
      ],
    },
    {
      id: "stage-control",
      number: "02",
      title: "Keep control",
      icon: SearchIcon,
      items: [
        "Dependency management",
        "Vulnerability scanning",
        "Automated checks",
        "Code quality processes",
      ],
    },
    {
      id: "stage-ship",
      number: "03",
      title: "Ship faster",
      icon: RefreshIcon,
      items: [
        "CI/CD automation",
        "Testing automation",
        "Deployment workflows",
      ],
    },
    {
      id: "stage-production",
      number: "04",
      title: "Understand production",
      icon: MonitorIcon,
      items: [
        "Monitoring",
        "Error tracking",
        "Alerts",
        "Team onboarding",
      ],
    },
  ],
};