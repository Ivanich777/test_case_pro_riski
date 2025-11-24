import { Pathnames } from '@/i18n/routing';

export const AppRoutes = {
    HOME: '/',
    MARKETS: '/markets',
    SIMULATOR: '/simulator',
} as const;

export type AppRoute = Pathnames;

export const ROUTES: readonly AppRoute[] = [
    AppRoutes.HOME,
    AppRoutes.MARKETS,
    AppRoutes.SIMULATOR,
] as const;

export const isValidRoute = (path: string): path is AppRoute => {
    return ROUTES.includes(path as AppRoute);
};

