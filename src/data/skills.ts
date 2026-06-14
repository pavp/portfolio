// Skill group keys align with Translation.skills.groups indices.
// Actual strings live in i18n/en.ts and i18n/es.ts.

export const skillGroupKeys = [
  'frontend-architecture',
  'react-ecosystem',
  'mobile-engineering',
  'testing-quality',
  'cicd-automation',
  'ai-engineering-workflow',
  'developer-experience',
] as const;

export type SkillGroupKey = (typeof skillGroupKeys)[number];
