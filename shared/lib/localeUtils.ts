export const LOCALES = [
    { code: 'en', label: 'EN' },
    { code: 'ru', label: 'RU' }
] as const;

export type LocaleCode = typeof LOCALES[number]['code'];

export const isActiveLocale = (locale: string, currentLocale: string): boolean => {
    return locale === currentLocale;
};