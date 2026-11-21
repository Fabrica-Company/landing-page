export type Locale = 'en' | 'fr';

export const LOCALES: Locale[] = ['en', 'fr'];

export const LOCALE_LABELS: Record<Locale, { name: string; flag: string; short: string }> = {
  en: { name: 'English', flag: '🇬🇧', short: 'EN' },
  fr: { name: 'Français', flag: '🇫🇷', short: 'FR' },
};

/** Stable project-type ids used by the contact form. */
export const PROJECT_TYPE_IDS = [
  'developer',
  'engineer',
  'devops',
  'other',
] as const;
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
    followUsOnYouTube: string;
  };
  nav: {
    home: string;
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
    processTitle: string;
    processSubtitle: string;
  };
  processSteps: {
    id: string;
    title: string;
    description: string;
  }[];
  cta: {
    title: string;
    body: string;
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
    title: 'FabricaLabs — Developer team workflows',
    description:
      'FabricaLabs helps small engineering teams build faster with AI — while keeping control, shipping safely, and understanding production.',
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
    followUsOnYouTube: 'Follow us on YouTube',
  },
  nav: {
    home: 'Home',
    about: 'About',
  },
  company: {
    tagline: 'Design & development studio',
    heroHeadlinePrefix: 'We help',
    heroRotatingWords: ['developer teams', 'engineering teams', 'DevOps teams'],
    heroHeadlineSuffix: 'get more done — safely.',
    heroDescription:
      'Processes and workflows that keep pace with the way you work today.',
    location: 'We work remotely across the world — based in Paris, France.',
    introTagline: 'Work the best way, today.',
    contactPageTitle: 'Start a project',
    contactPageSubtitle:
      'We reply within one business day with next steps and a ballpark.',
  },
  about: {
    processTitle: 'How we work',
    processSubtitle:
      'A fixed scope up front, then processes and workflows you can keep running.',
  },
  processSteps: [
    {
      id: 'step-diagnose',
      title: 'Diagnose',
      description:
        'We map where delivery, security, and production break down — then agree a fixed scope before anything is built.',
    },
    {
      id: 'step-design',
      title: 'Design',
      description:
        'We design the process around how you already work: the engineering workflow that closes the gap.',
    },
    {
      id: 'step-implement',
      title: 'Implement',
      description:
        'We build and wire it in — CI/CD, monitoring, AI-assisted workflows — with check-ins so the result matches what you asked for.',
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
    body: 'Tell us where delivery breaks down and we\'ll outline the process to help your developers ship faster.',
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
      'Our services fit into a clear path from coding faster to understanding production.',
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
      developer: 'Developer',
      engineer: 'Engineer',
      devops: 'DevOps',
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
    title: 'FabricaLabs — Workflows pour équipes tech',
    description:
      'FabricaLabs aide les petites équipes d\'ingénierie à construire plus vite avec l\'IA — tout en gardant le contrôle, en livrant en sécurité et en comprenant la production.',
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
    followUsOnYouTube: 'Suivez-nous sur YouTube',
  },
  nav: {
    home: 'Accueil',
    about: 'À propos',
  },
  company: {
    tagline: 'Studio de design & développement',
    heroHeadlinePrefix: 'Nous aidons',
    heroRotatingWords: ['les équipes tech', 'les équipes d\'ingénierie', 'les équipes DevOps'],
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
    processTitle: 'Notre façon de travailler',
    processSubtitle:
      'Un périmètre fixe dès le départ, puis des processus et workflows que vous pouvez faire vivre.',
  },
  processSteps: [
    {
      id: 'step-diagnose',
      title: 'Diagnostiquer',
      description:
        'Nous cartographions où la livraison, la sécurité et la production cassent — puis nous fixons un périmètre avant de construire.',
    },
    {
      id: 'step-design',
      title: 'Concevoir',
      description:
        'Nous concevons le processus autour de votre façon de travailler : le workflow d\'ingénierie qui comble l\'écart.',
    },
    {
      id: 'step-implement',
      title: 'Mettre en œuvre',
      description:
        'Nous construisons et branchons le tout — CI/CD, monitoring, workflows assistés par IA — avec des points de contrôle pour coller à votre demande.',
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
    body: 'Dites-nous où la livraison coince et nous tracerons le processus pour aider vos développeurs à livrer plus vite.',
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
      'Nos services s\'inscrivent dans un parcours clair : coder plus vite jusqu\'à comprendre la production.',
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
      developer: 'Développeur',
      engineer: 'Ingénieur',
      devops: 'DevOps',
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
