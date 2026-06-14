import type { Translation } from './types';

export const en = {
  a11y: {
    skipToContent: 'Skip to main content',
  },

  nav: {
    about: 'About',
    experience: 'Experience',
    expertise: 'Expertise',
    skills: 'Skills',
    contact: 'Contact',
  },

  hero: {
    title: 'Senior Frontend Engineer',
    locationTag: 'Madrid, Spain',
    availabilityTag: 'Open to Remote',
    headline:
      'Building scalable frontend systems for products that need to move fast and grow sustainably.',
    subtitle:
      'Senior Frontend Engineer specializing in React, React Native, Next.js and AI-assisted development.',
    specialization:
      'FRONTEND ARCHITECTURE • AI-ASSISTED DEVELOPMENT • CI/CD • DESIGN SYSTEMS',
    badges: [
      '8+ Years Experience',
      'Madrid Spain',
      'Open to Remote',
      'App Store & Google Play',
      'React Native & Next.js Expert',
    ],
    downloadResume: 'Download Resume',
    contactMe: 'Contact Me',
    viewExperience: 'View Experience',
  },

  impact: {
    metrics: [
      { value: '8+', label: 'Years Experience' },
      { value: '5+', label: 'Products Built From Scratch' },
      { value: 'Europe & LATAM', label: 'International' },
      { value: 'App Store & Google Play', label: 'Published' },
      { value: 'AI-Assisted Development', label: 'Agentic Workflows' },
    ],
  },

  about: {
    heading: 'About',
    body: [
      "Over the last 8+ years I've delivered production-grade React Native and React applications across Europe and Latin America.",
      'My experience spans frontend architecture, design systems, testing strategies, CI/CD automation and scalable engineering practices.',
      "I've built applications from scratch, established engineering standards adopted company-wide and shipped products to both the App Store and Google Play.",
      'I actively leverage modern AI coding agents such as Claude Code, Codex, OpenCode and Cursor as part of my daily engineering workflow, accelerating implementation, refactoring, testing, debugging and technical exploration while maintaining strong engineering standards and code quality.',
    ],
    education: {
      label: 'Education',
      degree: 'B.Sc. Computer Engineering',
      institution: 'Universidad Católica Andrés Bello',
      period: '2010–2016',
    },
  },

  experience: {
    heading: 'Experience',
    currentBadge: 'Current',
    earlierRolesLabel: 'Earlier Experience',
    roles: {
      nextlane: {
        title: 'Senior Frontend Engineer',
        bullets: [
          'Defined company-wide frontend standards adopted across all teams',
          'Shipped 3 production apps from scratch end-to-end',
          'Standardized Next.js + React Query + Zod + React Hook Form stack',
          'Built shared MUI component library used across products',
          'Owned GitHub Actions CI/CD pipelines from setup to maintenance',
          'Introduced Jest + React Testing Library coverage from zero',
          'Conducted technical interviews and grew the frontend team',
        ],
      },
      capitole: {
        title: 'React Native Engineer',
        bullets: [
          'Automated deploys via GitHub Actions, reducing deploy time by 70%',
          'Integrated Sentry error monitoring across the mobile app',
          'Integrated Braze for push notifications and engagement flows',
          'Implemented React Native WebView bridge for hybrid functionality',
        ],
      },
      makingSense: {
        title: 'React Native Engineer',
        bullets: [
          '18 months embedded in a cross-functional product team',
          'Built custom native components for platform-specific UX',
          'Adopted React Query for async state management',
          'Standardized React Hook Form across the app',
          'Achieved full Jest + React Testing Library test coverage',
        ],
      },
      novacomp: {
        title: 'React Native Engineer',
        bullets: [
          'Owned frontend architecture on a greenfield project end-to-end',
          'Implemented AWS Amplify + GraphQL backend integration',
          'Used GraphQL Code Generator to ensure type-safe API layer',
          'Set up App Center for OTA updates and distribution',
        ],
      },
      urijiJami: {
        title: 'React Native & Android Engineer',
        bullets: [
          'Shipped a React Native social network from zero to production',
          'Published to App Store and Google Play',
          'Maintained native Android app (Java, MVVM/MVP patterns)',
          'Implemented push notifications, OAuth, and REST integrations',
        ],
      },
    },
    earlierRoles: {
      fancision: {
        title: 'React Native Developer',
        bullets: [
          'Delivered features for a high-engagement consumer app (trivia, mini-games, surveys) where smooth performance drove retention',
          'Integrated OneSignal push notifications and Google/Facebook OAuth login to reduce sign-up friction',
          'Applied Redux Persist for cross-session state so users resumed exactly where they left off',
        ],
      },
      threehundredDev: {
        title: 'React Native Developer',
        bullets: [
          'Built a pharmacy e-commerce app from scratch, establishing the full project architecture and foundational decisions',
          'Integrated Firebase for real-time data and auth; implemented React Hook Form checkout flows for conversion-critical reliability',
        ],
      },
      teravision: {
        title: 'Mobile Developer SSR',
        bullets: [
          'Contributed across native Android (Java) and a Spring Boot backend within the same product',
          'Operated beyond the frontend layer when the product required it',
        ],
      },
    },
  },

  achievements: {
    heading: 'Selected Achievements',
    items: [
      {
        title: 'Established frontend standards',
        descriptor: 'Company-wide adoption',
      },
      {
        title: 'Built 5+ products',
        descriptor: 'From scratch to production',
      },
      {
        title: 'Reusable component systems',
        descriptor: 'Used across multiple products',
      },
      {
        title: 'Mobile App Publishing',
        descriptor: 'App Store & Google Play',
      },
      {
        title: 'CI/CD Pipelines',
        descriptor: 'Automated deployments',
      },
      {
        title: 'Technical Leadership',
        descriptor: 'Interviews and evaluations',
      },
    ],
  },

  expertise: {
    heading: 'Core Expertise',
    items: [
      {
        title: 'Frontend Architecture',
        description:
          'System design, state management, and scalable component hierarchies for large-scale web applications.',
      },
      {
        title: 'Mobile Engineering',
        description:
          'React Native expertise spanning greenfield builds, native modules, and App Store / Google Play publishing.',
      },
      {
        title: 'Engineering Quality',
        description:
          'Testing strategy, code review culture, and standards that make teams move fast without breaking things.',
      },
      {
        title: 'Continuous Delivery',
        description:
          'GitHub Actions pipelines, automated deployments, and release processes that ship confidently.',
      },
      {
        title: 'AI-Assisted Engineering',
        description:
          'Using Claude Code, Codex, OpenCode, and Cursor as workflow tools — not shortcuts — to stay at senior engineering standards.',
      },
    ],
  },

  skills: {
    heading: 'Technical Skills',
    groups: [
      {
        name: 'Frontend Architecture',
        skills: ['System Design', 'State Management', 'Component Libraries'],
      },
      {
        name: 'React Ecosystem',
        skills: ['React', 'Next.js', 'TypeScript'],
      },
      {
        name: 'Mobile Engineering',
        skills: ['React Native', 'Expo', 'Native Modules'],
      },
      {
        name: 'Testing & Quality',
        skills: ['Jest', 'RTL', 'Code Reviews'],
      },
      {
        name: 'CI/CD & Automation',
        skills: ['GitHub Actions', 'Automated Deployments'],
      },
      {
        name: 'AI Engineering Workflow',
        skills: [
          'Claude Code',
          'OpenAI Codex',
          'OpenCode',
          'Cursor',
          'Agentic Workflows',
          'LLM-Assisted Development',
        ],
      },
      {
        name: 'Developer Experience',
        skills: ['Tooling', 'Documentation', 'Engineering Standards'],
      },
    ],
  },

  contact: {
    heading: 'Contact',
    availability:
      'Open to opportunities where I can help teams build scalable products, establish engineering standards and deliver high-quality user experiences.',
    ctaLabel: "Let's Talk",
    emailLabel: 'Email me',
    linkedinLabel: 'LinkedIn',
    githubLabel: 'GitHub',
    opensInNewTab: 'opens in new tab',
    copyEmailLabel: 'Copy email',
    copiedLabel: 'Copied!',
    email: 'pedrovillarreal@gmail.com',
    linkedinUrl: 'https://linkedin.com/in/villapp',
    linkedinHandle: 'linkedin.com/in/villapp',
    githubUrl: 'https://github.com/pavp',
    githubHandle: 'github.com/pavp',
  },

  footer: {
    tagline: 'Senior Frontend Engineer',
    copyright: 'Pedro Villarreal. Built with precision and attention to detail.',
  },
} satisfies Translation;
