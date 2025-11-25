'use client';

import { useState } from 'react';
import { IconButton, Drawer, Box, Divider } from '@mui/material';
import { Navbar } from '@/widgets/Navbar';
import { Icon } from '@/shared/ui/Icon';
import { useLocale } from 'next-intl';
import { LOCALES } from '@/shared/lib/localeUtils';
import { usePathname } from '@/i18n/routing';
import { useRouter } from 'next/navigation';
import styles from './MobileMenu.module.scss';

export const MobileMenu = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const currentLocale = useLocale();
    const pathname = usePathname();
    const router = useRouter();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleLanguageToggle = () => {
        const nextLocale = currentLocale === 'ru' ? 'en' : 'ru';
        router.push(`/${nextLocale}${pathname}`);
        setMobileOpen(false);
    };

    const nextLocale = LOCALES.find(locale => locale.code !== currentLocale);

    return (
        <>
            <IconButton
                className={styles['mobile-menu__button']}
                onClick={handleDrawerToggle}
                aria-label="menu"
            >
                <Icon
                    src="/assets/icons/menu.svg"
                    width={24}
                    height={24}
                    alt="Menu"
                />
            </IconButton>
            <Drawer
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true,
                }}
                sx={{
                    display: { xs: 'block', md: 'none' },
                    '& .MuiDrawer-paper': {
                        boxSizing: 'border-box',
                        width: 110,
                        padding: '1rem',
                        display: 'flex',
                        flexDirection: 'column',
                    },
                }}
            >
                <Box className={styles['mobile-menu__drawer-content']}>
                    <Navbar className={styles['mobile-menu__navbar']} />
                    <Divider className={styles['mobile-menu__divider']} />
                    <Box
                        className={styles['mobile-menu__language']}
                        onClick={handleLanguageToggle}
                    >
                        <Icon
                            src="/assets/icons/locale.svg"
                            width={20}
                            height={20}
                            alt="Language"
                            className={styles['mobile-menu__language-icon']}
                        />
                        <span className={styles['mobile-menu__language-label']}>
                            {nextLocale?.label}
                        </span>
                    </Box>
                </Box>
            </Drawer>
        </>
    );
};

