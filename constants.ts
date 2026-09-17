import {
  AppProject,
  CompanyInfo,
  NavItem,
  ProcessStep,
  Service,
  SocialLink,
  Stat,
  Testimonial,
  WebsiteProject,
} from "./types";
import {
  AppsIcon,
  CodeIcon,
  GithubIcon,
  HomeIcon,
  InstagramIcon,
  LayersIcon,
  LayoutIcon,
  LinkedinIcon,
  PenToolIcon,
  RefreshIcon,
  SearchIcon,
  SendIcon,
  TerminalIcon,
} from "./components/icons";

/*
 * ---------------------------------------------------------------------------
 * SAMPLE CONTENT
 *
 * Client work, apps and testimonials below are placeholders so the layout can
 * be reviewed. Replace every entry marked "TODO" with real work before this
 * goes live. Images are intentionally omitted — the UI renders a labelled
 * placeholder wherever an image is missing.
 * ---------------------------------------------------------------------------
 */

/** Web3Forms key powering the contact form. Get one free at https://web3forms.com */
export const WEB3FORMS_ACCESS_KEY = ""; // TODO: add your Web3Forms access key

export const COMPANY_INFO: CompanyInfo = {
  name: "FabricaLabs",
  tagline: "Design & development studio",
  heroHeadlinePrefix: "We build",
  heroRotatingWords: ["websites", "web apps", "mobile apps"],
  heroHeadlineSuffix: "that work as hard as you do.",
  heroDescription:
    "FabricaLabs designs new websites, modernizes dated ones, and builds web and mobile apps. One team from the first wireframe to the day it ships — and every release after that.",
  email: "hello@fabricalabs.com", // TODO: replace with your real address
  location: "Remote — working across Europe", // TODO: replace with your location
  timezone: "Europe/Bucharest", // TODO: set your IANA timezone
  timezoneLabel: "EET",
  officeHours: { start: 9, end: 19 },
  circularText: "FABRICA LABS • DESIGN • DEVELOPMENT • ",
  circularTextLetterSpacing: "0.55em",
  introLetter1: "F",
  introLetter2: "L",
  introTagline: "Design • Development • Modernization",
  websitesPageIntro:
    "Websites we designed, rebuilt and modernized for clients — with the results and the feedback that came out of each one.",
  appsPageIntro:
    "Web and mobile apps we designed and shipped, from internal tools to products live in the app stores.",
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
  { value: "40+", label: "Sites designed & modernized" },
  { value: "12", label: "Apps shipped" },
  { value: "98", label: "Avg. PageSpeed after launch" },
  { value: "6 yrs", label: "Building for the web" },
];

export const SERVICES: Service[] = [
  {
    id: "service-web-design",
    name: "Website design",
    description:
      "New sites designed around what your business actually needs to say. Research, copy structure, visual design and a build that holds up.",
    icon: LayoutIcon,
    deliverables: [
      "Brand-aligned visual design",
      "Responsive layouts",
      "Copy and content structure",
      "Reusable design system",
    ],
  },
  {
    id: "service-modernization",
    name: "Modernization & redesign",
    description:
      "Your site works but feels a decade old and loads like it. We rebuild it on a modern stack without losing the SEO you've earned.",
    icon: RefreshIcon,
    deliverables: [
      "UX and performance audit",
      "Rebuild on a modern stack",
      "SEO and redirect mapping",
      "Accessibility pass",
    ],
  },
  {
    id: "service-web-apps",
    name: "Web app development",
    description:
      "Dashboards, portals and internal tools. Real product work with authentication, data and the boring reliability details handled.",
    icon: LayersIcon,
    deliverables: [
      "Product and UX design",
      "Front and back end build",
      "Integrations and APIs",
      "Deployment and monitoring",
    ],
  },
  {
    id: "service-mobile-apps",
    name: "Mobile app development",
    description:
      "iOS and Android apps from a single codebase, taken all the way through store review and out to your users.",
    icon: AppsIcon,
    deliverables: [
      "Native-feeling UI",
      "iOS and Android builds",
      "App Store and Play submission",
      "Release and update pipeline",
    ],
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: "step-discover",
    title: "Discover",
    description:
      "We dig into your business, your customers and whatever you have today. You get a written scope with a fixed price before anything is built.",
  },
  {
    id: "step-design",
    title: "Design",
    description:
      "Layouts and flows in the browser, not static mockups you have to imagine. You review real screens and we iterate until it's right.",
  },
  {
    id: "step-build",
    title: "Build",
    description:
      "Built in weekly increments on a staging URL you can open any time. No black box, no waiting until the end to see progress.",
  },
  {
    id: "step-launch",
    title: "Launch & iterate",
    description:
      "We handle the migration, redirects and monitoring. Then we stay on to measure what's working and keep improving it.",
  },
];

export const PROCESS_STEP_ICONS = [
  SearchIcon,
  PenToolIcon,
  TerminalIcon,
  SendIcon,
];

/**
 * Client website work.
 * TODO: replace all sample entries with real projects, and add images to
 * `cardImageUrl`, `logoImageUrl` and `images`.
 */
export const WEBSITE_PROJECTS: WebsiteProject[] = [
  {
    id: "northwind-dental",
    name: "Northwind Dental",
    client: "Northwind Dental",
    industry: "Healthcare",
    workType: "Modernization",
    year: "2025",
    description:
      "A 2014-era practice site rebuilt into a fast, bookable site that ranks.",
    tagline:
      "Twelve years of accumulated plugins replaced with a site that loads in under a second.",
    overview:
      "Northwind had a site that technically worked but took nine seconds to load on mobile and had no way to book an appointment. We rebuilt it from scratch, kept every ranking URL intact, and wired online booking straight into the practice management system.",
    services: [
      "UX audit",
      "Visual redesign",
      "Performance rebuild",
      "SEO migration",
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    liveLink: "",
    metrics: [
      { label: "Load time", value: "9.1s → 0.8s" },
      { label: "Mobile bookings", value: "+240%" },
      { label: "PageSpeed", value: "34 → 99" },
    ],
    challenge:
      "The old site was built on a theme that had been patched for a decade. Every page loaded the same three megabytes of scripts, and patients had to phone during opening hours to book.",
    solution:
      "A clean rebuild with booking as the primary action on every page. We mapped all 180 existing URLs to their new homes so the practice kept its first-page rankings through the switch.",
    testimonial: {
      id: "testimonial-northwind",
      quote:
        "Our old site was embarrassing and we knew it. The new one loads instantly and patients book themselves in overnight, which has quietly removed a job from our front desk.",
      authorName: "Dr. Elena Marcu",
      authorRole: "Practice Owner",
      company: "Northwind Dental",
    },
  },
  {
    id: "atlas-strength",
    name: "Atlas Strength",
    client: "Atlas Strength",
    industry: "Fitness",
    workType: "New build",
    year: "2025",
    description:
      "A membership site with class schedules and a members-only portal.",
    tagline: "A gym site that sells memberships while the front desk sleeps.",
    overview:
      "Atlas was opening a second location and running everything through direct messages. We built a site with live class schedules, trainer profiles and self-serve membership signup.",
    services: [
      "Brand-aligned design",
      "Design system",
      "Site build",
      "Payments integration",
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Stripe"],
    liveLink: "",
    metrics: [
      { label: "Signups in month one", value: "180" },
      { label: "Admin time saved", value: "6 hrs/week" },
    ],
    challenge:
      "Two locations, twelve trainers and a schedule that changed weekly, all managed by hand in a spreadsheet and posted to social media.",
    solution:
      "A schedule the staff edit themselves, trainer pages that double as landing pages, and membership checkout that works on a phone in the car park.",
    testimonial: {
      id: "testimonial-atlas",
      quote:
        "They asked better questions than the two agencies we spoke to before. The schedule alone saves us most of a day every week.",
      authorName: "Tom Ridley",
      authorRole: "Co-founder",
      company: "Atlas Strength",
    },
  },
  {
    id: "verdant-interiors",
    name: "Verdant Interiors",
    client: "Verdant Interiors",
    industry: "Design & architecture",
    workType: "Redesign",
    year: "2024",
    description:
      "A portfolio redesign that turned browsing into enquiries.",
    tagline: "Beautiful work that was being let down by the site showing it.",
    overview:
      "Verdant's project photography was excellent and their old site made it look small. We rebuilt the portfolio around full-width imagery with a clear enquiry path on every project page.",
    services: ["Visual redesign", "Content strategy", "Site build"],
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    liveLink: "",
    metrics: [
      { label: "Enquiry rate", value: "+85%" },
      { label: "Time on page", value: "1:10 → 3:40" },
    ],
    challenge:
      "Thumbnail-sized images in a rigid grid, and a contact form buried three clicks deep.",
    solution:
      "Photography at the scale it deserves, project stories written as case studies, and an enquiry form attached to every project.",
    testimonial: {
      id: "testimonial-verdant",
      quote:
        "We finally have a site that looks like the work we do. Clients now arrive at the first call already knowing what we're capable of.",
      authorName: "Sofia Lindqvist",
      authorRole: "Principal Designer",
      company: "Verdant Interiors",
    },
  },
  {
    id: "harbor-logistics",
    name: "Harbor Logistics",
    client: "Harbor Logistics",
    industry: "Logistics",
    workType: "Modernization",
    year: "2024",
    description:
      "A corporate site plus a customer tracking portal on one codebase.",
    tagline: "One rebuild that replaced a brochure site and three spreadsheets.",
    overview:
      "Harbor needed a credible public site and a place for customers to check shipment status without emailing an account manager. We shipped both together on one stack.",
    services: [
      "Information architecture",
      "Visual redesign",
      "Portal build",
      "Accessibility pass",
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js"],
    liveLink: "",
    metrics: [
      { label: "Status emails", value: "-70%" },
      { label: "WCAG level", value: "AA" },
    ],
    challenge:
      "Customers phoned or emailed for every shipment update, and the public site hadn't been touched since 2016.",
    solution:
      "A modern marketing site with a logged-in tracking portal behind it, so account managers stopped being a lookup service.",
    testimonial: {
      id: "testimonial-harbor",
      quote:
        "The portal paid for the whole project inside a quarter. Our account managers got their mornings back.",
      authorName: "Marcus Vogel",
      authorRole: "Operations Director",
      company: "Harbor Logistics",
    },
  },
];

/**
 * Web and mobile apps.
 * TODO: replace all sample entries with real work, and add images to
 * `cardImageUrl` and `images`.
 */
export const APP_PROJECTS: AppProject[] = [
  {
    id: "sitepulse",
    name: "SitePulse",
    kind: "Web App",
    platforms: ["Web"],
    tag: "Live",
    year: "2025",
    client: "FabricaLabs",
    description:
      "An uptime and performance dashboard we run for every site we ship.",
    tagline: "We got tired of finding out about outages from our clients.",
    overview:
      "SitePulse watches every site we maintain, tracks Core Web Vitals over time and alerts us before a client notices. It started as an internal tool and is now part of every maintenance plan.",
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    keyFeatures: [
      "Per-site uptime and response monitoring",
      "Core Web Vitals tracked over time",
      "Alerts to email and Slack",
      "Monthly client-ready reports",
    ],
    link: "",
    linkText: "View app",
    metrics: [
      { label: "Sites monitored", value: "40+" },
      { label: "Check interval", value: "60s" },
    ],
  },
  {
    id: "atlas-member-app",
    name: "Atlas Member App",
    kind: "Mobile App",
    platforms: ["iOS", "Android", "Cross-platform"],
    tag: "Live in both stores",
    year: "2025",
    client: "Atlas Strength",
    description:
      "Class booking, check-in and membership management in members' pockets.",
    tagline: "The gym counter, rebuilt as an app members actually open.",
    overview:
      "Built on the same backend as the Atlas Strength website, the app lets members book classes, check in with a QR code and manage their membership without talking to anyone.",
    technologies: ["React Native", "TypeScript", "Expo", "Stripe"],
    keyFeatures: [
      "Class booking with waitlists",
      "QR check-in at the door",
      "Membership and payment management",
      "Push reminders before class",
    ],
    link: "",
    linkText: "View app",
    storeStats: {
      downloads: "5K+",
      rating: "4.7",
    },
    testimonial: {
      id: "testimonial-atlas-app",
      quote:
        "Members booked more classes in the first month on the app than in the previous three combined.",
      authorName: "Tom Ridley",
      authorRole: "Co-founder",
      company: "Atlas Strength",
    },
  },
  {
    id: "harbor-track",
    name: "Harbor Track",
    kind: "Web App",
    platforms: ["Web"],
    tag: "Live",
    year: "2024",
    client: "Harbor Logistics",
    description:
      "A customer portal for live shipment status and document history.",
    tagline: "Shipment status without sending a single email.",
    overview:
      "Harbor's customers log in to see where their freight is, download paperwork and review history. It replaced a shared inbox and a stack of spreadsheets.",
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    keyFeatures: [
      "Live shipment tracking",
      "Document and invoice history",
      "Role-based access per customer",
      "CSV export for finance teams",
    ],
    link: "",
    linkText: "View app",
    metrics: [
      { label: "Status emails", value: "-70%" },
      { label: "Active accounts", value: "300+" },
    ],
  },
  {
    id: "northwind-booking",
    name: "Northwind Booking",
    kind: "Mobile App",
    platforms: ["iOS", "Android", "Cross-platform"],
    tag: "In development",
    year: "2026",
    client: "Northwind Dental",
    description:
      "Appointment booking and reminders for a multi-site dental practice.",
    tagline: "Fewer no-shows, fewer phone calls.",
    overview:
      "A companion app to the Northwind website that handles booking, rescheduling and treatment reminders, syncing with the practice management system the staff already use.",
    technologies: ["React Native", "TypeScript", "Expo"],
    keyFeatures: [
      "Book and reschedule appointments",
      "Treatment and check-up reminders",
      "Practice management sync",
      "Family profiles on one account",
    ],
    link: "",
    linkText: "Coming soon",
  },
];

/** Feedback shown on the websites page. Pulled from client projects. */
export const TESTIMONIALS: Testimonial[] = WEBSITE_PROJECTS.map(
  (project) => project.testimonial
).filter((testimonial): testimonial is Testimonial => Boolean(testimonial));

export const SOCIAL_LINKS: SocialLink[] = [
  // TODO: point these at your real profiles
  {
    name: "LinkedIn",
    url: "https://linkedin.com/",
    icon: LinkedinIcon,
  },
  {
    name: "GitHub",
    url: "https://github.com/",
    icon: GithubIcon,
  },
  {
    name: "Instagram",
    url: "https://instagram.com/",
    icon: InstagramIcon,
  },
];

/**
 * Visitor count shown on the home hero.
 *
 * Default: static number, no Firebase needed.
 * Live count: set enableLiveCount to true and add your Firebase keys to .env
 * (see VISITOR_COUNTER_SETUP.md).
 */
export const VISITOR_STATS = {
  staticCount: 12400, // TODO: replace or switch on live counting
  enableLiveCount: false,
};
