'use client'

import { Box } from '@mui/material';
import { NavLink } from './components/NavLink';

export const Navbar = () => {
    return (
        <Box sx={{ display: 'flex', gap: 2, ml: 3 }}>
            <NavLink
                href="/simulator"
                label="Симулятор"
                icon="/assets/icons/simulator.svg"
            />
            <NavLink
                href="/markets"
                label="Рынки"
                icon="/assets/icons/market.svg"
            />
            <NavLink
                href="/"
                label="Статистика"
                icon="/assets/icons/statistics.svg"
                active={true}
            />
        </Box>
    )
}
