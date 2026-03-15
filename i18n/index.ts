import { tr } from './locales/tr';
import { en } from './locales/en';
import { Locale } from './config';

const translations = {
  tr,
  en,
} as const;

export function getTranslations(locale: Locale) {
  return translations[locale];
}

export type Translations = typeof tr;
