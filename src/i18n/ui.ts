import type { Translation } from './types';
import { en } from './en';
import { es } from './es';

export const locales = ['en', 'es'] as const;
export type Locale = (typeof locales)[number];

const translations: Record<Locale, Translation> = {
  en,
  es,
};

export function getTranslations(locale: Locale): Translation {
  return translations[locale];
}
