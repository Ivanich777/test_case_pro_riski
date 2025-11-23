'use client'

import { ThemeProvider, CssBaseline } from "@mui/material"
import { ReactNode } from "react"
import { theme } from '@/theme'

export default function Providers({ children }: { children: ReactNode }) {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    )
}
