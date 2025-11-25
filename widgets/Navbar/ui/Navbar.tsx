'use client'

import { Box } from '@mui/material';
import { NavLink } from './components/NavLink/NavLink';
import { useTranslations } from "next-intl";
import { AppRoutes } from '@/shared/lib/routes';
import styles from './Navbar.module.scss';
import cn from 'classnames';

interface INavbarProps {
    className?: string;
}

export const Navbar = ({ className }: INavbarProps) => {
    const t = useTranslations('common');

    return (
        <Box className={cn(styles['navbar'], className)}>
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
