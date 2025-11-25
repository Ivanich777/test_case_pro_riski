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

export const { Link,  usePathname } =
    createNavigation(routing);
