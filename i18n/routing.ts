import { createNavigation } from 'next-intl/navigation';
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
    locales: ["en", "ru"],
    defaultLocale: "ru",
    pathnames: {
        '/': '/',
        '/markets': '/markets',
        '/simulator': '/simulator',
    },
});

export type Pathnames = keyof typeof routing.pathnames;
export type Locale = (typeof routing.locales)[number];

export const { Link, permanentRedirect, redirect, usePathname, useRouter, getPathname } =
    createNavigation(routing);
