import type { Translation } from './types';

export const en = {
  a11y: {
    skipToContent: 'Skip to main content',
  },

  nav: {
    about: 'About',
    experience: 'Experience',
    skills: 'Skills',
    resume: 'Resume',
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
    body: 'Senior Frontend Engineer with 8+ years of production experience building React Native and React applications across Europe and LATAM. My work spans the full breadth of frontend: architecture, design systems, testing, and CI/CD. I have built products from scratch, established company-wide engineering standards, and shipped to the App Store and Google Play. I use Claude Code, Codex, OpenCode, and Cursor as daily workflow tools — not as a shortcut, but as a force multiplier that keeps me focused on engineering quality and architectural decisions.',
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
          'Developed features for a sports fan engagement mobile platform',
          'Maintained CI/CD pipeline and release process',
        ],
      },
      threehundredDev: {
        title: 'React Native Developer',
        bullets: [
          'Built React Native features in a fast-paced agency environment',
          'Collaborated with cross-functional teams on mobile product delivery',
        ],
      },
      teravision: {
        title: 'Mobile Developer SSR',
        bullets: [
          'Developed and maintained mobile applications for enterprise clients',
          'Contributed to code reviews and quality standards',
        ],
      },
    },
  },

  achievements: {
    heading: 'Selected Achievements',
    items: [
      {
        title: 'Established Frontend Standards',
        descriptor:
          'Defined and rolled out company-wide frontend architecture standards adopted across all product teams at Nextlane.',
      },
      {
        title: 'Built 5+ Products',
        descriptor:
          'Taken more than five products from zero to production across web and mobile platforms, each shipped end-to-end.',
      },
      {
        title: 'Reusable Component Systems',
        descriptor:
          'Designed and built shared component libraries using MUI and custom primitives, reducing duplication across teams.',
      },
      {
        title: 'Mobile App Publishing',
        descriptor:
          'Published apps to the App Store and Google Play, managing the full release pipeline from build to store submission.',
      },
      {
        title: 'CI/CD Pipelines',
        descriptor:
          'Owned GitHub Actions pipelines that cut deploy times by up to 70% and gave teams a reliable automated delivery track.',
      },
      {
        title: 'Technical Leadership',
        descriptor:
          'Conducted technical interviews, mentored engineers, and raised engineering quality through standards and code review culture.',
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

  resume: {
    heading: 'Resume',
    downloadLabel: 'Download Resume',
    lastUpdatedLabel: 'Last updated',
    lastUpdatedDate: 'June 14, 2026',
    previewLabel: 'Pedro Villarreal — Senior Frontend Engineer',
  },

  contact: {
    heading: 'Contact',
    emailLabel: 'Email me',
    linkedinLabel: 'LinkedIn',
    opensInNewTab: 'opens in new tab',
    copyEmailLabel: 'Copy email',
    copiedLabel: 'Copied!',
    email: 'pedrovillarreal@gmail.com',
    linkedinUrl: 'https://linkedin.com/in/villapp',
    linkedinHandle: 'linkedin.com/in/villapp',
  },

  footer: {
    tagline: 'Senior Frontend Engineer · Madrid',
    copyright: 'Pedro Villarreal',
  },
} satisfies Translation;
