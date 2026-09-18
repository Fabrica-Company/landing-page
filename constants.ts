import {
  AppProject,
  CompanyInfo,
  NavItem,
  ProcessStep,
  Service,
  Stat,
  WebsiteProject,
} from "./types";
import {
  AppsIcon,
  CodeIcon,
  HomeIcon,
  LayersIcon,
  LayoutIcon,
  RefreshIcon,
  SearchIcon,
  ServerIcon,
  TerminalIcon,
} from "./components/icons";
import whatsTheWorkoutBanner from "./assets/App_previews/Whats_the_Workout/Whats_the_Workout_Banner.webp";
import whatsTheWorkoutSnapshot1 from "./assets/App_previews/Whats_the_Workout/Snapshot1.webp";
import whatsTheWorkoutSnapshot2 from "./assets/App_previews/Whats_the_Workout/Snapshot2.webp";
import whatsTheWorkoutSnapshot3 from "./assets/App_previews/Whats_the_Workout/Snapshot3.webp";
import skFranceBanner from "./assets/Website_previews/SKfrance_Banner.webp";


/** Web3Forms key powering the contact form. Get one free at https://web3forms.com */
export const WEB3FORMS_ACCESS_KEY = "3e9256d4-7606-4f32-8855-615e3d892cd5"; 

export const COMPANY_INFO: CompanyInfo = {
  name: "FabricaLabs",
  tagline: "Design & development studio",
  heroHeadlinePrefix: "We build",
  heroRotatingWords: ["websites", "web apps", "mobile apps"],
  heroHeadlineSuffix: "that work as hard as you do.",
  heroDescription:
    "FabricaLabs designs new websites, modernizes dated ones, and builds web and mobile apps. One team from the first wireframe — to the day it ships.",
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

export const NAV_ITEMS_MAIN: NavItem[] = [
  { id: "home", name: "Home", href: "/", icon: HomeIcon },
  { id: "websites", name: "Websites", href: "/websites", icon: CodeIcon },
  { id: "apps", name: "Apps", href: "/apps", icon: AppsIcon },
];

/** Headline numbers under the hero. TODO: replace with your real figures. */
export const COMPANY_STATS: Stat[] = [
  { value: "1", label: "Site designed & modernized" },
  { value: "1", label: "App shipped" },
  { value: "2", label: "Years building for the web" },
];

export const SERVICES: Service[] = [
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
];

/** Web and mobile apps. */
export const APP_PROJECTS: AppProject[] = [
  {
    id: "whats-the-workout",
    name: "What's The Workout?",
    kind: "Mobile App",
    platforms: ["iOS", "Android"],
    year: "2026",
    description:
      "A workout app with 100+ workouts to choose from across multiple sports. Local only, lives on your phone.",
    overview:
      "What's the Workout? is a fitness app that helps you discover and complete workouts tailored to your favorite activities, from swimming, running and gym sessions to yoga, cycling, and calisthenics. Choose your fitness level, find a workout that suits you, and get moving with simple, effective training sessions designed to keep you motivated and make exercise part of your routine.",
    technologies: ["React Native", "TypeScript", "Expo"],
    cardImageUrl: whatsTheWorkoutBanner,
    images: [
      whatsTheWorkoutSnapshot1,
      whatsTheWorkoutSnapshot2,
      whatsTheWorkoutSnapshot3,
    ],
    privacyPolicyUrl:
      "/privacy_policies/Privacy%20Policy%20Whats%20The%20Workout.pdf",
  },
];