'use client'

import { Box } from '@mui/material';
import { NavLink } from './components/NavLink';
import { useTranslations } from "next-intl";
import { AppRoutes } from '@/shared/lib/routes';

export const Navbar = () => {
    const t = useTranslations('common');

    return (
        <Box sx={{ display: 'flex', gap: 2, ml: 3 }}>
            <NavLink
                href={AppRoutes.SIMULATOR}
                label={t('simulator')}
                icon="/assets/icons/simulator.svg"
            />
            <NavLink
                href={AppRoutes.MARKETS}
                label={t('markets')}
                icon="/assets/icons/market.svg"
            />
            <NavLink
                href={AppRoutes.HOME}
                label={t('statistics')}
                icon="/assets/icons/statistics.svg"
            />
        </Box>
    )
}
