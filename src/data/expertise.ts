// Expertise keys align with Translation.expertise.items indices.
// Actual strings live in i18n/en.ts and i18n/es.ts.

export const expertiseKeys = [
  'frontend-architecture',
  'mobile-engineering',
  'engineering-quality',
  'continuous-delivery',
  'ai-assisted-engineering',
] as const;

export type ExpertiseKey = (typeof expertiseKeys)[number];
