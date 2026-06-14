// Achievement data keys align with Translation.achievements.items indices
// Actual strings live in i18n/en.ts and i18n/es.ts for type-safe locale parity.
// This file is reserved for future icon or metadata additions per achievement.

export const achievementKeys = [
  'established-frontend-standards',
  'built-5-plus-products',
  'reusable-component-systems',
  'mobile-app-publishing',
  'cicd-pipelines',
  'technical-leadership',
] as const;

export type AchievementKey = (typeof achievementKeys)[number];
