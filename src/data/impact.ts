// Impact metric keys align with Translation.impact.metrics indices.
// Actual strings (value + label) live in i18n/en.ts and i18n/es.ts.

export const impactKeys = [
  'years-experience',
  'products-built',
  'international',
  'published',
  'agentic-workflows',
] as const;

export type ImpactKey = (typeof impactKeys)[number];
