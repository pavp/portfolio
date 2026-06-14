export interface ImpactMetric {
  value: string;
  label: string;
}

export interface NavLinks {
  about: string;
  experience: string;
  expertise: string;
  skills: string;
  contact: string;
}

export interface HeroStrings {
  title: string;
  locationTag: string;
  availabilityTag: string;
  headline: string;
  subtitle: string;
  specialization: string;
  badges: [string, string, string, string, string];
  downloadResume: string;
  contactMe: string;
  viewExperience: string;
}

export interface ImpactStrings {
  metrics: [ImpactMetric, ImpactMetric, ImpactMetric, ImpactMetric, ImpactMetric];
}

export interface EducationStrings {
  label: string;
  degree: string;
  institution: string;
  period: string;
}

export interface AboutStrings {
  heading: string;
  body: string[];
  education: EducationStrings;
}

export interface RoleBullets {
  [key: string]: string[];
}

export interface ExperienceStrings {
  heading: string;
  currentBadge: string;
  earlierRolesLabel: string;
  roles: {
    nextlane: { title: string; bullets: string[] };
    capitole: { title: string; bullets: string[] };
    makingSense: { title: string; bullets: string[] };
    novacomp: { title: string; bullets: string[] };
    urijiJami: { title: string; bullets: string[] };
  };
  earlierRoles: {
    fancision: { title: string; bullets: string[] };
    threehundredDev: { title: string; bullets: string[] };
    teravision: { title: string; bullets: string[] };
  };
}

export interface AchievementItem {
  title: string;
  descriptor: string;
}

export interface AchievementsStrings {
  heading: string;
  items: [
    AchievementItem,
    AchievementItem,
    AchievementItem,
    AchievementItem,
    AchievementItem,
    AchievementItem,
  ];
}

export interface ExpertiseItem {
  title: string;
  description: string;
}

export interface ExpertiseStrings {
  heading: string;
  items: [
    ExpertiseItem,
    ExpertiseItem,
    ExpertiseItem,
    ExpertiseItem,
    ExpertiseItem,
  ];
}

export interface SkillGroup {
  name: string;
  skills: string[];
}

export interface SkillsStrings {
  heading: string;
  groups: [
    SkillGroup,
    SkillGroup,
    SkillGroup,
    SkillGroup,
    SkillGroup,
    SkillGroup,
    SkillGroup,
  ];
}


export interface ContactStrings {
  heading: string;
  availability: string;
  ctaLabel: string;
  emailLabel: string;
  linkedinLabel: string;
  githubLabel: string;
  opensInNewTab: string;
  copyEmailLabel: string;
  copiedLabel: string;
  email: string;
  linkedinUrl: string;
  linkedinHandle: string;
  githubUrl: string;
  githubHandle: string;
}

export interface A11yStrings {
  skipToContent: string;
}

export interface FooterStrings {
  tagline: string;
  copyright: string;
}

export interface Translation {
  a11y: A11yStrings;
  nav: NavLinks;
  hero: HeroStrings;
  impact: ImpactStrings;
  about: AboutStrings;
  experience: ExperienceStrings;
  achievements: AchievementsStrings;
  expertise: ExpertiseStrings;
  skills: SkillsStrings;
  contact: ContactStrings;
  footer: FooterStrings;
}
