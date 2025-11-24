import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';
import { LocaleCode } from '@/shared/lib/localeUtils';


export default getRequestConfig(async ({ requestLocale }) => {
    const resolvedLocale = await requestLocale;
    const locale = routing.locales.includes(resolvedLocale as LocaleCode)
        ? (resolvedLocale as string)
        : routing.defaultLocale;

    /** TODO: 
     *  Здесь сначала думал оптимизировать загрузку только требуемых локалей, но решил пока не трогать.
     *  В дальнейшем можно будет добавить lazy loading для отдельных модулей, 
     *  если бандл разрастаться будет.
     *  Пока максимум 5 локалей весят 1кб.
     */

    const [commonMessages, homeMessages, marketsMessages, simulatorMessages, notFoundMessages] = await Promise.all([
        import(`../messages/${locale}/common.json`).then(m => m.default),
        import(`../messages/${locale}/home.json`).then(m => m.default),
        import(`../messages/${locale}/markets.json`).then(m => m.default),
        import(`../messages/${locale}/simulator.json`).then(m => m.default),
        import(`../messages/${locale}/not-found.json`).then(m => m.default),
    ]);

    const messages = {
        common: commonMessages,
        home: homeMessages,
        markets: marketsMessages,
        simulator: simulatorMessages,
        notFound: notFoundMessages,
    };

    return { locale, messages };
});