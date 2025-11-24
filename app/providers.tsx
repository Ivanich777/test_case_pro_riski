'use client'

import { ThemeProvider, CssBaseline } from "@mui/material"
import { ReactNode } from "react"
import { theme } from '@/theme'
import { NextIntlClientProvider } from "next-intl";

export default function Providers({ children, locale, messages }: { children: ReactNode, locale:string, messages:any }) {
    return (
        <ThemeProvider theme={theme}>
            <NextIntlClientProvider locale={locale} messages={messages}>
            <CssBaseline />
            {children}
            </NextIntlClientProvider>
        </ThemeProvider>
    )
}
