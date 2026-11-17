export type Locale = 'en' | 'fr';

export const LOCALES: Locale[] = ['en', 'fr'];

export const LOCALE_LABELS: Record<Locale, { name: string; flag: string; short: string }> = {
  en: { name: 'English', flag: '🇬🇧', short: 'EN' },
  fr: { name: 'Français', flag: '🇫🇷', short: 'FR' },
};

/** Stable project-type ids used by the contact form. */
export const PROJECT_TYPE_IDS = ['local', 'dev', 'other'] as const;
export type ProjectTypeId = (typeof PROJECT_TYPE_IDS)[number];

export interface TranslationBundle {
  meta: {
    title: string;
    description: string;
  };
  ui: {
    startProject: string;
    explore: string;
    getInTouch: string;
    allRightsReserved: string;
    footerBlurb: string;
    switchToDark: string;
    switchToLight: string;
    homeAria: string;
    primaryNavAria: string;
    footerNavAria: string;
    switchLanguageAria: string;
    onlineNow: string;
    outsideHours: string;
    backToHome: string;
    contactEyebrow: string;
    takingProjects: string;
    pageNotFoundTitle: string;
    pageNotFoundBody: string;
    goHome: string;
    followUsOnLinkedIn: string;
  };
  nav: {
    home: string;
    forLocalBusinesses: string;
    forDevTeams: string;
    about: string;
  };
  company: {
    tagline: string;
    heroHeadlinePrefix: string;
    heroRotatingWords: string[];
    heroHeadlineSuffix: string;
    heroDescription: string;
    location: string;
    introTagline: string;
    contactPageTitle: string;
    contactPageSubtitle: string;
  };
  about: {
    servicesTitle: string;
    servicesSubtitle: string;
    processTitle: string;
    processSubtitle: string;
  };
  services: {
    id: string;
    name: string;
    description: string;
    deliverables: string[];
    pageId: string;
    cta: string;
  }[];
  processSteps: {
    id: string;
    title: string;
    description: string;
  }[];
  cta: {
    title: string;
    body: string;
  };
  home: {
    eyebrow: string;
    headline: string;
    description: string;
    pathsLabel: string;
    paths: {
      id: string;
      pageId: string;
      title: string;
      description: string;
      cta: string;
      imageAlt: string;
    }[];
  };
  localBusinesses: {
    valueProposition: string;
    valuePropositionSupport: string;
    audienceLabel: string;
    audience: string;
    industries: {
      id: string;
      name: string;
      imageAlt: string;
    }[];
    problemLabel: string;
    problem: string;
    leakPointsTitle: string;
    leakPoints: {
      id: string;
      number: string;
      title: string;
      description: string;
    }[];
    solution: string;
  };
  devTeams: {
    valueProposition: string;
    valuePropositionSupport: string;
    audienceLabel: string;
    audience: string;
    audienceProfiles: {
      id: string;
      name: string;
      imageAlt: string;
    }[];
    problemLabel: string;
    problem: string;
    leakPointsTitle: string;
    leakPoints: {
      id: string;
      number: string;
      title: string;
      description: string;
    }[];
    solution: string;
    stagesTitle: string;
    stagesSubtitle: string;
    stages: {
      id: string;
      number: string;
      title: string;
      items: string[];
    }[];
  };
  contact: {
    projectTypes: Record<ProjectTypeId, string>;
    placeholders: {
      name: string;
      email: string;
      company: string;
      message: string;
    };
    labels: {
      name: string;
      email: string;
      company: string;
      projectType: string;
      message: string;
    };
    errors: {
      nameRequired: string;
      emailRequired: string;
      emailInvalid: string;
      messageRequired: string;
      formGeneric: string;
      network: string;
      fixFields: string;
      missingKey: string;
    };
    sending: string;
    send: string;
    success: string;
    subjectPrefix: string;
  };
}

const en: TranslationBundle = {
  meta: {
    title: 'FabricaLabs — Websites & web apps',
    description:
      'FabricaLabs is a design and development studio. We design new websites, modernize dated ones, and build web apps.',
  },
  ui: {
    startProject: 'Start a project',
    explore: 'Explore',
    getInTouch: 'Get in touch',
    allRightsReserved: 'All rights reserved.',
    footerBlurb: 'Websites and web apps, designed and built to last.',
    switchToDark: 'Switch to dark mode',
    switchToLight: 'Switch to light mode',
    homeAria: 'Home',
    primaryNavAria: 'Primary',
    footerNavAria: 'Footer',
    switchLanguageAria: 'Switch language',
    onlineNow: 'Online now',
    outsideHours: 'Outside office hours',
    backToHome: 'Back to home',
    contactEyebrow: 'Contact',
    takingProjects: 'Taking on new projects',
    pageNotFoundTitle: 'Page not found',
    pageNotFoundBody: 'The page you are looking for does not exist.',
    goHome: 'Go home',
    followUsOnLinkedIn: 'Follow us on LinkedIn',
  },
  nav: {
    home: 'Home',
    forLocalBusinesses: 'For local businesses',
    forDevTeams: 'For developer teams',
    about: 'About',
  },
  company: {
    tagline: 'Design & development studio',
    heroHeadlinePrefix: 'We help',
    heroRotatingWords: ['local businesses', 'developer teams'],
    heroHeadlineSuffix: 'get more done — safely.',
    heroDescription:
      'Processes and workflows that keep pace with the way you work today.',
    location: 'We work remotely across the world — based in Paris, France.',
    introTagline: 'IT Services and IT Consulting',
    contactPageTitle: 'Start a project',
    contactPageSubtitle:
      'We reply within one business day with next steps and a ballpark.',
  },
  about: {
    servicesTitle: 'What we do',
    servicesSubtitle:
      'Two kinds of teams. Two sets of processes — built around how you already work.',
    processTitle: 'How we work',
    processSubtitle:
      'A fixed scope up front, then processes and workflows you can keep running.',
  },
  services: [
    {
      id: 'service-local-businesses',
      name: 'For local businesses',
      description:
        'Get found online, earn trust, and capture the enquiry — even outside opening hours.',
      deliverables: [
        'Websites and local SEO',
        'Clear booking and contact flows',
        'AI agents that answer when you can\'t',
      ],
      pageId: 'for-local-businesses',
      cta: 'Explore local businesses',
    },
    {
      id: 'service-dev-teams',
      name: 'For developer teams',
      description:
        'Help small engineering teams build faster with AI — while keeping control, shipping safely, and understanding production.',
      deliverables: [
        'AI-assisted coding workflows',
        'CI/CD, testing, and quality gates',
        'Monitoring and production visibility',
      ],
      pageId: 'for-dev-teams',
      cta: 'Explore developer teams',
    },
  ],
  processSteps: [
    {
      id: 'step-diagnose',
      title: 'Diagnose',
      description:
        'We map where customers drop off, or where delivery, security, and production break down — then agree a fixed scope before anything is built.',
    },
    {
      id: 'step-design',
      title: 'Design',
      description:
        'We design the process around how you already work: the site, agents, or engineering workflow that closes the gap.',
    },
    {
      id: 'step-implement',
      title: 'Implement',
      description:
        'We build and wire it in — websites, AI agents, CI/CD, monitoring — with check-ins so the result matches what you asked for.',
    },
    {
      id: 'step-handover',
      title: 'Hand over',
      description:
        'You get something your team can run day to day, with clear ownership, documentation, and support after launch.',
    },
  ],
  cta: {
    title: 'Ready to get more done — safely?',
    body: 'Whether you need to capture more local customers or help developers ship faster — tell us where things break down and we\'ll outline the process.',
  },
  home: {
    eyebrow: 'IT Services and IT Consulting',
    headline: 'We are here to help.',
    description:
      'You want to see increased efficiency and revenue? Who doesn\'t? You might need to modernize your operations. Don\'t worry — we are here to help.',
    pathsLabel: 'Who are you ?',
    paths: [
      {
        id: 'path-local',
        pageId: 'for-local-businesses',
        title: 'For local and city businesses',
        description:
          'Get found online, then capture the enquiry — websites, local SEO, and AI agents that answer when you can\'t.',
        cta: 'Explore local businesses',
        imageAlt:
          'Local shopkeeper welcoming a customer outside a modern storefront',
      },
      {
        id: 'path-dev',
        pageId: 'for-dev-teams',
        title: 'For developer teams',
        description:
          'Help small engineering teams build faster with AI — while keeping control, shipping safely, and understanding production.',
        cta: 'Explore developer teams',
        imageAlt: 'Engineering team collaborating over code in a bright office',
      },
    ],
  },
  localBusinesses: {
    valueProposition:
      'Get found online — and don\'t lose customers when they\'re ready to get in touch.',
    valuePropositionSupport:
      'Processes that help local businesses like you get found and capture more customers online.',
    audienceLabel: 'Who this is for',
    audience:
      'Local businesses in cities — health, food, home maintenance & renovation, sports and more.',
    industries: [
      {
        id: 'industry-health',
        name: 'Health',
        imageAlt: 'Clinic and health practice',
      },
      {
        id: 'industry-food',
        name: 'Food',
        imageAlt: 'Restaurant dining room',
      },
      {
        id: 'industry-home',
        name: 'Home maintenance & renovation',
        imageAlt: 'Home maintenance and renovation work',
      },
      {
        id: 'industry-sports',
        name: 'Sports',
        imageAlt: 'Gym and fitness studio',
      },
    ],
    problemLabel: 'A problem familiar to you ?',
    problem:
      'Are you difficult to find online, difficult to trust, or unavailable when potential customers want to contact you? Then you are losing customers in your online customer journey. You are losing money.',
    leakPointsTitle: 'Three places a customer is lost',
    leakPoints: [
      {
        id: 'leak-find',
        number: '01',
        title: 'They don\'t find the business',
        description:
          'Poor local SEO, a weak website, or an incomplete online presence.',
      },
      {
        id: 'leak-convert',
        number: '02',
        title: 'They find it but don\'t convert',
        description:
          'An outdated website, unclear information, lack of trust signals, or a difficult booking and contact process.',
      },
      {
        id: 'leak-respond',
        number: '03',
        title: 'They try to contact it but nobody responds',
        description:
          'Missed calls, messages outside working hours, or slow follow-up.',
      },
    ],
    solution:
      'We will help you get found online and make sure you don\'t lose potential customers 24/7.',
  },
  devTeams: {
    valueProposition:
      'Help your developers build faster. Make sure your systems can keep up.',
    valuePropositionSupport:
      'Workflows that help small engineering teams like you increase delivery speed safely.',
    audienceLabel: 'Who this is for',
    audience: 'Companies with software developers and DevOps teams.',
    audienceProfiles: [
      {
        id: 'profile-small-teams',
        name: 'Teams of 3–15 developers',
        imageAlt: 'Developers collaborating on code at shared monitors',
      },
      {
        id: 'profile-no-devops',
        name: 'No dedicated DevOps',
        imageAlt:
          'Engineering team reviewing work without a dedicated DevOps role',
      },
      {
        id: 'profile-no-platform',
        name: 'No platform engineering team',
        imageAlt: 'Product engineers shipping without a platform org',
      },
      {
        id: 'profile-ai-assisted',
        name: 'AI-assisted development',
        imageAlt: 'Developers working with AI-assisted coding tools',
      },
    ],
    problemLabel: 'A problem familiar to you ?',
    problem:
      'The arrival of LLMs radically changed the way a developer works. Small engineering teams are generating software faster with AI, but their development, security and deployment processes haven\'t evolved at the same pace.',
    leakPointsTitle: 'Three places where your workflow breaks down',
    leakPoints: [
      {
        id: 'leak-build',
        number: '01',
        title: 'You code faster than you ship',
        description:
          'AI generates more software, but CI/CD, testing, and deployment workflows haven\'t kept up.',
      },
      {
        id: 'leak-control',
        number: '02',
        title: 'You ship but lose control',
        description:
          'Missing dependency updates, vulnerability scans, and automated checks as the codebase grows faster.',
      },
      {
        id: 'leak-production',
        number: '03',
        title: 'You ship but don\'t understand production',
        description:
          'No monitoring, alerts, or clear ownership when something breaks after release.',
      },
    ],
    solution:
      'We will help you increase delivery speed safely by improving the workflow around your AI-assisted development.',
    stagesTitle: 'Four stages',
    stagesSubtitle:
      'Services fit into a clear path from coding faster to understanding production.',
    stages: [
      {
        id: 'stage-build',
        number: '01',
        title: 'Build faster',
        items: [
          'Coding agent setup',
          'Best practices',
          'Shared AI context',
          'Team workflows',
        ],
      },
      {
        id: 'stage-control',
        number: '02',
        title: 'Keep control',
        items: [
          'Dependency management',
          'Vulnerability scanning',
          'Automated checks',
          'Code quality processes',
        ],
      },
      {
        id: 'stage-ship',
        number: '03',
        title: 'Ship faster',
        items: [
          'CI/CD automation',
          'Testing automation',
          'Deployment workflows',
        ],
      },
      {
        id: 'stage-production',
        number: '04',
        title: 'Understand production',
        items: [
          'Monitoring',
          'Error tracking',
          'Alerts',
          'Team onboarding',
        ],
      },
    ],
  },
  contact: {
    projectTypes: {
      local: 'Local Business',
      dev: 'Developer Team',
      other: 'Other',
    },
    placeholders: {
      name: 'Your name',
      email: 'Email address',
      company: 'Company (optional)',
      message: 'What does success look like ?',
    },
    labels: {
      name: 'Your name',
      email: 'Email address',
      company: 'Company (optional)',
      projectType: 'What do you need?',
      message: 'Project details',
    },
    errors: {
      nameRequired: 'Your name is required.',
      emailRequired: 'An email address is required.',
      emailInvalid: 'That email address looks incomplete.',
      messageRequired: 'Tell us a little about the project.',
      formGeneric: 'Something went wrong. Please try again.',
      network: 'Network error. Check your connection and try again.',
      fixFields: 'Please fix the highlighted fields.',
      missingKey:
        'The contact form is not connected yet. Add your Web3Forms access key in constants.ts.',
    },
    sending: 'Sending…',
    send: 'Send enquiry',
    success:
      'Thanks — your enquiry is in. We\'ll reply within one business day.',
    subjectPrefix: 'New project enquiry from',
  },
};

const fr: TranslationBundle = {
  meta: {
    title: 'FabricaLabs — Sites web & applications',
    description:
      'FabricaLabs est un studio de design et de développement. Nous concevons de nouveaux sites, modernisons les sites datés et construisons des applications web.',
  },
  ui: {
    startProject: 'Démarrer un projet',
    explore: 'Explorer',
    getInTouch: 'Nous contacter',
    allRightsReserved: 'Tous droits réservés.',
    footerBlurb: 'Sites web et applications, conçus pour durer.',
    switchToDark: 'Passer en mode sombre',
    switchToLight: 'Passer en mode clair',
    homeAria: 'Accueil',
    primaryNavAria: 'Navigation principale',
    footerNavAria: 'Pied de page',
    switchLanguageAria: 'Changer de langue',
    onlineNow: 'En ligne',
    outsideHours: 'Hors horaires',
    backToHome: 'Retour à l\'accueil',
    contactEyebrow: 'Contact',
    takingProjects: 'Ouverts aux nouveaux projets',
    pageNotFoundTitle: 'Page introuvable',
    pageNotFoundBody: 'La page que vous recherchez n\'existe pas.',
    goHome: 'Retour à l\'accueil',
    followUsOnLinkedIn: 'Suivez-nous sur LinkedIn',
  },
  nav: {
    home: 'Accueil',
    forLocalBusinesses: 'Pour les commerces locaux',
    forDevTeams: 'Pour les équipes tech',
    about: 'À propos',
  },
  company: {
    tagline: 'Studio de design & développement',
    heroHeadlinePrefix: 'Nous aidons',
    heroRotatingWords: ['les commerces locaux', 'les équipes tech'],
    heroHeadlineSuffix: 'à en faire plus — en sécurité.',
    heroDescription:
      'Des processus et des workflows qui suivent la façon dont vous travaillez aujourd\'hui.',
    location:
      'Nous travaillons à distance partout dans le monde — basés à Paris, France.',
    introTagline: 'Services informatiques et conseil IT',
    contactPageTitle: 'Démarrer un projet',
    contactPageSubtitle:
      'Nous répondons sous un jour ouvré avec les prochaines étapes et une estimation.',
  },
  about: {
    servicesTitle: 'Ce que nous faisons',
    servicesSubtitle:
      'Deux types d\'équipes. Deux ensembles de processus — construits autour de votre façon de travailler.',
    processTitle: 'Notre façon de travailler',
    processSubtitle:
      'Un périmètre fixe dès le départ, puis des processus et workflows que vous pouvez faire vivre.',
  },
  services: [
    {
      id: 'service-local-businesses',
      name: 'Pour les commerces locaux',
      description:
        'Être trouvé en ligne, inspirer confiance et capturer la demande — même hors horaires d\'ouverture.',
      deliverables: [
        'Sites web et SEO local',
        'Parcours de contact et de réservation clairs',
        'Agents IA qui répondent quand vous ne pouvez pas',
      ],
      pageId: 'for-local-businesses',
      cta: 'Découvrir commerces locaux',
    },
    {
      id: 'service-dev-teams',
      name: 'Pour les équipes tech',
      description:
        'Aider les petites équipes d\'ingénierie à construire plus vite avec l\'IA — tout en gardant le contrôle, en livrant en sécurité et en comprenant la production.',
      deliverables: [
        'Workflows de coding assisté par IA',
        'CI/CD, tests et portes qualité',
        'Monitoring et visibilité en production',
      ],
      pageId: 'for-dev-teams',
      cta: 'Découvrir équipes tech',
    },
  ],
  processSteps: [
    {
      id: 'step-diagnose',
      title: 'Diagnostiquer',
      description:
        'Nous cartographions où les clients décrochent, ou où la livraison, la sécurité et la production cassent — puis nous fixons un périmètre avant de construire.',
    },
    {
      id: 'step-design',
      title: 'Concevoir',
      description:
        'Nous concevons le processus autour de votre façon de travailler : le site, les agents ou le workflow d\'ingénierie qui comble l\'écart.',
    },
    {
      id: 'step-implement',
      title: 'Mettre en œuvre',
      description:
        'Nous construisons et branchons le tout — sites, agents IA, CI/CD, monitoring — avec des points de contrôle pour coller à votre demande.',
    },
    {
      id: 'step-handover',
      title: 'Transmettre',
      description:
        'Vous repartez avec quelque chose que votre équipe peut faire vivre au quotidien, avec une propriété claire, de la documentation et du support après le lancement.',
    },
  ],
  cta: {
    title: 'Prêt à en faire plus — en sécurité ?',
    body: 'Que vous ayez besoin de capturer plus de clients locaux ou d\'aider vos développeurs à livrer plus vite — dites-nous où ça coince et nous tracerons le processus.',
  },
  home: {
    eyebrow: 'Services informatiques et conseil IT',
    headline: 'Nous sommes là pour vous aider.',
    description:
      'Vous voulez plus d\'efficacité et de chiffre d\'affaires ? Qui n\'en voudrait pas ? Il est peut-être temps de moderniser vos opérations. Pas d\'inquiétude — nous sommes là pour vous aider.',
    pathsLabel: 'Qui êtes-vous ?',
    paths: [
      {
        id: 'path-local',
        pageId: 'for-local-businesses',
        title: 'Pour les commerces locaux et de ville',
        description:
          'Être trouvé en ligne, puis capturer la demande — sites, SEO local et agents IA qui répondent quand vous ne pouvez pas.',
        cta: 'Découvrir commerces locaux',
        imageAlt:
          'Commerçant accueillant un client devant une boutique moderne',
      },
      {
        id: 'path-dev',
        pageId: 'for-dev-teams',
        title: 'Pour les équipes tech',
        description:
          'Aider les petites équipes d\'ingénierie à construire plus vite avec l\'IA — tout en gardant le contrôle, en livrant en sécurité et en comprenant la production.',
        cta: 'Découvrir équipes tech',
        imageAlt:
          'Équipe d\'ingénierie collaborant sur du code dans un bureau lumineux',
      },
    ],
  },
  localBusinesses: {
    valueProposition:
      'Être trouvé en ligne — et ne pas perdre de clients quand ils sont prêts à vous contacter.',
    valuePropositionSupport:
      'Des processus qui aident les commerces locaux comme le vôtre à être trouvés et à capturer plus de clients en ligne.',
    audienceLabel: 'Pour qui',
    audience:
      'Commerces locaux en ville — santé, restauration, entretien & rénovation, sport et plus encore.',
    industries: [
      {
        id: 'industry-health',
        name: 'Santé',
        imageAlt: 'Cabinet et pratique de santé',
      },
      {
        id: 'industry-food',
        name: 'Restauration',
        imageAlt: 'Salle de restaurant',
      },
      {
        id: 'industry-home',
        name: 'Entretien & rénovation',
        imageAlt: 'Travaux d\'entretien et de rénovation',
      },
      {
        id: 'industry-sports',
        name: 'Sport',
        imageAlt: 'Salle de sport et studio fitness',
      },
    ],
    problemLabel: 'Un problème qui vous parle ?',
    problem:
      'Êtes-vous difficile à trouver en ligne, difficile à faire confiance, ou indisponible quand des clients potentiels veulent vous contacter ? Alors vous perdez des clients dans votre parcours digital. Vous perdez de l\'argent.',
    leakPointsTitle: 'Trois endroits où un client est perdu',
    leakPoints: [
      {
        id: 'leak-find',
        number: '01',
        title: 'Ils ne trouvent pas le commerce',
        description:
          'SEO local faible, site peu convaincant, ou présence en ligne incomplète.',
      },
      {
        id: 'leak-convert',
        number: '02',
        title: 'Ils trouvent mais ne convertissent pas',
        description:
          'Site daté, informations floues, manque de signaux de confiance, ou parcours de contact et de réservation difficile.',
      },
      {
        id: 'leak-respond',
        number: '03',
        title: 'Ils essaient de contacter mais personne ne répond',
        description:
          'Appels manqués, messages hors horaires, ou suivi trop lent.',
      },
    ],
    solution:
      'Nous vous aidons à être trouvé en ligne et à ne pas perdre de clients potentiels 24h/24.',
  },
  devTeams: {
    valueProposition:
      'Aidez vos développeurs à construire plus vite. Assurez-vous que vos systèmes suivent.',
    valuePropositionSupport:
      'Des workflows qui aident les petites équipes d\'ingénierie comme la vôtre à accélérer la livraison en sécurité.',
    audienceLabel: 'Pour qui',
    audience:
      'Entreprises avec des développeurs logiciels et des équipes DevOps.',
    audienceProfiles: [
      {
        id: 'profile-small-teams',
        name: 'Équipes de 3 à 15 développeurs',
        imageAlt: 'Développeurs collaborant sur du code devant des écrans',
      },
      {
        id: 'profile-no-devops',
        name: 'Pas de DevOps dédié',
        imageAlt:
          'Équipe d\'ingénierie qui revoit le travail sans rôle DevOps dédié',
      },
      {
        id: 'profile-no-platform',
        name: 'Pas d\'équipe platform engineering',
        imageAlt:
          'Ingénieurs produit qui livrent sans organisation platform',
      },
      {
        id: 'profile-ai-assisted',
        name: 'Développement assisté par IA',
        imageAlt: 'Développeurs qui travaillent avec des outils de coding IA',
      },
    ],
    problemLabel: 'Un problème qui vous parle ?',
    problem:
      'L\'arrivée des LLM a radicalement changé le travail d\'un développeur. Les petites équipes d\'ingénierie produisent plus de logiciel avec l\'IA, mais leurs processus de développement, de sécurité et de déploiement n\'ont pas évolué au même rythme.',
    leakPointsTitle: 'Trois endroits où votre workflow casse',
    leakPoints: [
      {
        id: 'leak-build',
        number: '01',
        title: 'Vous codez plus vite que vous ne livrez',
        description:
          'L\'IA génère plus de logiciel, mais la CI/CD, les tests et les workflows de déploiement n\'ont pas suivi.',
      },
      {
        id: 'leak-control',
        number: '02',
        title: 'Vous livrez mais perdez le contrôle',
        description:
          'Mises à jour de dépendances, scans de vulnérabilités et contrôles automatisés manquants alors que le code base grossit plus vite.',
      },
      {
        id: 'leak-production',
        number: '03',
        title: 'Vous livrez mais ne comprenez pas la production',
        description:
          'Pas de monitoring, d\'alertes, ni de propriété claire quand quelque chose casse après la mise en production.',
      },
    ],
    solution:
      'Nous vous aidons à accélérer la livraison en sécurité en améliorant le workflow autour de votre développement assisté par IA.',
    stagesTitle: 'Quatre étapes',
    stagesSubtitle:
      'Les services s\'inscrivent dans un parcours clair : coder plus vite jusqu\'à comprendre la production.',
    stages: [
      {
        id: 'stage-build',
        number: '01',
        title: 'Construire plus vite',
        items: [
          'Setup d\'agents de coding',
          'Bonnes pratiques',
          'Contexte IA partagé',
          'Workflows d\'équipe',
        ],
      },
      {
        id: 'stage-control',
        number: '02',
        title: 'Garder le contrôle',
        items: [
          'Gestion des dépendances',
          'Scan de vulnérabilités',
          'Contrôles automatisés',
          'Processus de qualité du code',
        ],
      },
      {
        id: 'stage-ship',
        number: '03',
        title: 'Livrer plus vite',
        items: [
          'Automatisation CI/CD',
          'Automatisation des tests',
          'Workflows de déploiement',
        ],
      },
      {
        id: 'stage-production',
        number: '04',
        title: 'Comprendre la production',
        items: [
          'Monitoring',
          'Suivi des erreurs',
          'Alertes',
          'Onboarding d\'équipe',
        ],
      },
    ],
  },
  contact: {
    projectTypes: {
      local: 'Commerce local',
      dev: 'Équipe tech',
      other: 'Autre',
    },
    placeholders: {
      name: 'Votre nom',
      email: 'Adresse e-mail',
      company: 'Entreprise (optionnel)',
      message: 'À quoi ressemble le succès ?',
    },
    labels: {
      name: 'Votre nom',
      email: 'Adresse e-mail',
      company: 'Entreprise (optionnel)',
      projectType: 'De quoi avez-vous besoin ?',
      message: 'Détails du projet',
    },
    errors: {
      nameRequired: 'Votre nom est requis.',
      emailRequired: 'Une adresse e-mail est requise.',
      emailInvalid: 'Cette adresse e-mail semble incomplète.',
      messageRequired: 'Parlez-nous un peu du projet.',
      formGeneric: 'Une erreur est survenue. Veuillez réessayer.',
      network: 'Erreur réseau. Vérifiez votre connexion et réessayez.',
      fixFields: 'Veuillez corriger les champs surlignés.',
      missingKey:
        'Le formulaire de contact n\'est pas encore connecté. Ajoutez votre clé Web3Forms dans constants.ts.',
    },
    sending: 'Envoi…',
    send: 'Envoyer la demande',
    success:
      'Merci — votre demande est bien reçue. Nous répondrons sous un jour ouvré.',
    subjectPrefix: 'Nouvelle demande de projet de',
  },
};

export const TRANSLATIONS: Record<Locale, TranslationBundle> = {
  en,
  fr,
};

export function getTranslations(locale: Locale): TranslationBundle {
  return TRANSLATIONS[locale] ?? TRANSLATIONS.en;
}
