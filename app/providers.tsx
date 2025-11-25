'use client'

import { ThemeProvider, CssBaseline } from "@mui/material"
import { ReactNode, useMemo } from "react"
import { theme } from '@/theme'
import { NextIntlClientProvider } from "next-intl";
import { StoreProvider, RootStore } from '@/shared/stores';
import { AbstractIntlMessages } from 'next-intl';

export default function Providers({ children, locale, messages }: { children: ReactNode, locale: string, messages: AbstractIntlMessages }) {
    const store = useMemo(() => new RootStore(), []);

    return (
        <StoreProvider store={store}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <NextIntlClientProvider locale={locale} messages={messages}>
                    {children}
                </NextIntlClientProvider>
            </ThemeProvider>
        </StoreProvider>
    )
}
