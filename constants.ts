import {
  AppProject,
  CompanyInfo,
  DevTeamsPageContent,
  HomePageContent,
  LocalBusinessesPageContent,
  NavItem,
  ProcessStep,
  Service,
  Stat,
  WebsiteProject,
} from "./types";
import {
  AppsIcon,
  LayersIcon,
  LayoutIcon,
  RefreshIcon,
  SearchIcon,
  ServerIcon,
  TerminalIcon,
} from "./components/icons";
import whatsTheWorkoutBanner from "./assets/App_previews/Whats_the_Workout/Banner Preview.webp";
import whatsTheWorkoutSnapshot1 from "./assets/App_previews/Whats_the_Workout/Snapshot1.webp";
import whatsTheWorkoutSnapshot2 from "./assets/App_previews/Whats_the_Workout/Snapshot2.webp";
import whatsTheWorkoutSnapshot3 from "./assets/App_previews/Whats_the_Workout/Snapshot3.webp";
import skFranceBanner from "./assets/Website_previews/SKfrance_Banner.webp";
import skillTeamBanner from "./assets/Website_previews/SkillTeam_Banner.webp";


/** Web3Forms key powering the contact form. Get one free at https://web3forms.com */
export const WEB3FORMS_ACCESS_KEY = "3e9256d4-7606-4f32-8855-615e3d892cd5"; 

export const HIDE_APPS = true;

export const COMPANY_INFO: CompanyInfo = {
  name: "FabricaLabs",
  tagline: "Design & development studio",
  heroHeadlinePrefix: "We build",
  heroRotatingWords: HIDE_APPS
    ? ["websites", "web apps"]
    : ["websites", "web apps", "mobile apps"],
  heroHeadlineSuffix: "that work as hard as you do.",
  heroDescription: HIDE_APPS
    ? "FabricaLabs designs new websites, modernizes dated ones, and builds web apps. One team from the first wireframe — to the day it ships."
    : "FabricaLabs designs new websites, modernizes dated ones, and builds web and mobile apps. One team from the first wireframe — to the day it ships.",
  email: "support@fabricalabs.net",
  location: "We work remotely across the world — based in Paris, France.",
  timezone: "Europe/Paris",
  timezoneLabel: "CET",
  officeHours: { start: 9, end: 19 },
  circularText: "FABRICA LABS • DESIGN • DEVELOPMENT • ",
  circularTextLetterSpacing: "0.55em",
  introWord1: "Fabrica",
  introWord2: "Labs",
  introTagline: "Design • Development • Modernization",
  websitesPageIntro:
    "Websites we designed, rebuilt and modernized for clients — with the results that came out of each one.",
  appsPageIntro:
    "Web and mobile apps we design and build end to end, from the first screen through to store release or hosting.",
  contactPageTitle: "Start a project",
  contactPageSubtitle:
    "Tell us what you're building or what needs modernizing. We reply within one business day with next steps and a ballpark.",
};

/** Header / footer nav. Websites is intentionally omitted — reach it via About → See our work. */
export const NAV_ITEMS_MAIN: NavItem[] = [
  { id: "home", name: "Home", href: "/" },
  {
    id: "for-local-businesses",
    name: "For local businesses",
    href: "/for-local-businesses",
  },
  { id: "for-dev-teams", name: "For dev teams", href: "/for-dev-teams" },
  { id: "about", name: "About", href: "/about" },
];

/** Headline numbers under the hero. TODO: replace with your real figures. */
const COMPANY_STATS_ALL: Stat[] = [
  { value: "2", label: "Sites designed & modernized" },
  { value: "1", label: "App shipped" },
  { value: "2", label: "Years building for the web" },
];

export const COMPANY_STATS: Stat[] = HIDE_APPS
  ? COMPANY_STATS_ALL.filter((stat) => stat.label !== "App shipped")
  : COMPANY_STATS_ALL;

const SERVICES_ALL: Service[] = [
  {
    id: "service-websites",
    name: "Building & modernizing websites",
    description:
      "New sites designed around what your business actually needs to say, and dated ones rebuilt on a modern stack without losing the SEO you've earned.",
    icon: LayoutIcon,
    deliverables: [
      "Brand-aligned visual design",
      "Responsive layouts",
      "Rebuilt on a modern stack",
    ],
  },
  {
    id: "service-web-apps",
    name: "Web app development",
    description:
      "Dashboards, portals and internal tools. Real product work with authentication, data and the boring reliability details handled.",
    icon: LayersIcon,
    deliverables: [
      "Responsive layouts",
      "Front and back end build",
      "Integrations, APIs and Machine Learning",
      "Deployment and monitoring",
    ],
  },
  {
    id: "service-mobile-apps",
    name: "Mobile app development",
    description:
      "iOS and Android apps from a single React Native codebase. To have an impact on our users.",
    icon: AppsIcon,
    deliverables: ["Native-feeling UI", "iOS and Android builds"],
  },
];

export const SERVICES: Service[] = HIDE_APPS
  ? SERVICES_ALL.filter((service) => service.id !== "service-mobile-apps")
  : SERVICES_ALL;

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: "step-discover",
    title: "Discover",
    description:
      "We dig into your business, your existing website if you have one. You get a price before anything is built.",
  },
  {
    id: "step-build",
    title: "Build",
    description:
      "We build your website in record time. If the delivery time is more than 48h we will factor in an increment meeting to check everything just like you desired.",
  },
  {
    id: "step-revision",
    title: "Revision",
    description:
      "We offer one revision for all our missions. Take the time to review everything made, and give us a set of instructions to polish your website as you want before delivery.",
  },
  {
    id: "step-hosting",
    title: "Hosting",
    description:
      "Time for delivery! You can decide to host the website built yourself, or we can host it for you, that way you ensure it's online as fast as possible.",
  },
];

export const PROCESS_STEP_ICONS = [
  SearchIcon,
  TerminalIcon,
  RefreshIcon,
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
  eyebrow: "Design & development studio",
  headline: "Choose who you're building for.",
  description:
    "FabricaLabs helps local businesses get found and capture customers — and helps engineering teams ship AI-assisted work safely.",
  pathsLabel: "Where to go next",
  paths: [
    {
      id: "path-local",
      pageId: "for-local-businesses",
      eyebrow: "Cities · health · food · home · sports",
      title: "For local businesses",
      description:
        "Get found online, then capture the enquiry — websites, local SEO, and AI agents that answer when you can't.",
      cta: "Explore local businesses",
    },
    {
      id: "path-dev",
      pageId: "for-dev-teams",
      eyebrow: "Teams of 3–15 developers",
      title: "For dev teams",
      description:
        "Help small engineering teams build faster with AI — while keeping control, shipping safely, and understanding production.",
      cta: "Explore dev teams",
    },
  ],
};

/** Content for the For Local Businesses page. */
export const LOCAL_BUSINESSES_PAGE: LocalBusinessesPageContent = {
  eyebrow: "For local businesses",
  valueProposition:
    "Get found online — and don't lose customers when they're ready to get in touch.",
  valuePropositionSupport:
    "A system that helps local businesses get found and capture more customers online.",
  audienceLabel: "Who this is for",
  audience:
    "Local businesses in cities — health, food, home maintenance & renovation, and sports.",
  industries: [
    "Health",
    "Food",
    "Home maintenance & renovation",
    "Sports",
  ],
  problemLabel: "The problem",
  problem:
    "Local businesses lose potential customers online because they are difficult to find, difficult to trust, or unavailable when customers are ready to contact them.",
  problemSummary:
    "Local businesses are losing customers throughout their online customer journey: they aren't always visible when people search, don't always convert visitors into enquiries, and can't always respond when potential customers are ready to contact them.",
  leakPointsTitle: "Three places a customer is lost",
  leakPoints: [
    {
      id: "leak-find",
      number: "01",
      title: "They don't find the business",
      description:
        "Poor local SEO, a weak website, or an incomplete online presence.",
    },
    {
      id: "leak-convert",
      number: "02",
      title: "They find it but don't convert",
      description:
        "An outdated website, unclear information, lack of trust signals, or a difficult booking and contact process.",
    },
    {
      id: "leak-respond",
      number: "03",
      title: "They try to contact it but nobody responds",
      description:
        "Missed calls, messages outside working hours, or slow follow-up.",
    },
  ],
  solutionLabel: "The solution",
  solution:
    "We help local businesses get found online and make sure they don't lose potential customers when they're ready to get in touch.",
  pillarsTitle: "Two pillars",
  pillarsSubtitle:
    "Everything we do for local businesses fits into getting found, then capturing the enquiry.",
  pillars: [
    {
      id: "pillar-get-found",
      number: "01",
      title: "Get found",
      objective:
        "The objective isn't a prettier website. It's making sure potential customers can find and understand your business when they search for your services.",
      items: [
        "Modern website creation or renovation",
        "Local SEO",
        "AI search optimization",
      ],
    },
    {
      id: "pillar-capture",
      number: "02",
      title: "Capture customers",
      objective:
        "When someone is interested, the business shouldn't lose them because nobody is available to respond.",
      items: [
        "AI voice agent",
        "AI text agent",
        "Booking and enquiry automation",
      ],
    },
  ],
};

/** Content for the For Dev Teams page. */
export const DEV_TEAMS_PAGE: DevTeamsPageContent = {
  eyebrow: "For engineering teams",
  valueProposition: "Help your developers build faster. Make sure your systems can keep up.",
  valuePropositionSupport:
    "We help small engineering teams increase delivery speed safely by improving the workflow around AI-assisted development.",
  audienceLabel: "Who this is for",
  audience:
    "Companies with roughly 3–15 software developers, without a large dedicated DevOps or platform engineering team.",
  problemLabel: "The problem",
  problem:
    "The arrival of LLMs radically changed the way a developer works. Small engineering teams are generating software faster with AI, but their development, security and deployment processes haven't evolved at the same pace.",
  solutionLabel: "The solution",
  solution:
    "We help engineering teams increase delivery speed safely by improving the workflow around AI-assisted development.",
  deliverablesTitle: "What we put in place",
  deliverablesSubtitle:
    "Practical upgrades to how your team codes, ships, and stays secure — without adding a full platform org.",
  deliverables: [
    "Automatic dependencies vulnerability scans and updates",
    "Shared enterprise knowledge context through all dev agents on IDE (hook)",
    "Automation of part or the entire deployment process",
    "Monitoring setup and explanation through a presentation/Q&A with the dev team",
    "Coding agents setup and best practices through a presentation/Q&A with the dev team",
  ],
  stagesTitle: "Four stages",
  stagesSubtitle: "Your services fit into a clear path from coding faster to understanding production.",
  stages: [
    {
      id: "stage-build",
      number: "01",
      title: "Build faster",
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
      items: [
        "Monitoring",
        "Error tracking",
        "Alerts",
        "Team onboarding",
      ],
    },
  ],
};

/** Web and mobile apps. */
export const APP_PROJECTS: AppProject[] = [
  {
    id: "whats-the-workout",
    name: "What's The Workout?",
    kind: "Mobile App",
    platforms: ["Android"],
    year: "2026",
    description:
      "A workout app with 100+ workouts to choose from across multiple sports. Local only, lives on your phone.",
    overview:
      "What's the Workout? is a fitness app that helps you discover and complete workouts tailored to your favorite activities, from swimming, running and gym sessions to yoga, cycling, and calisthenics. Choose your fitness level, find a workout that suits you, and get moving with simple, effective training sessions designed to keep you motivated and make exercise part of your routine.",
    technologies: ["React Native", "TypeScript", "Expo"],
    cardImageUrl: whatsTheWorkoutBanner,
    cardImageFit: "cover",
    cardImagePosition: "30% 50%",
    images: [
      whatsTheWorkoutSnapshot1,
      whatsTheWorkoutSnapshot2,
      whatsTheWorkoutSnapshot3,
    ],
    privacyPolicyUrl:
      "/privacy_policies/Privacy%20Policy%20Whats%20The%20Workout.pdf",
  },
];