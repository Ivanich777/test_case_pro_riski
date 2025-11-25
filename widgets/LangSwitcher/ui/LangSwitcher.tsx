'use client';

import React from 'react';
import { IconButton, Menu, MenuItem } from '@mui/material';
import { Icon } from '@/shared/ui/Icon';
import styles from './LangSwitcher.module.scss';
import { useLocale, useTranslations } from 'next-intl';
import { NavigationLink } from '@/widgets/LangSwitcher/ui/components/NavigationLink/NavigationLink';
import { LOCALES, isActiveLocale } from '@/shared/lib/localeUtils';
import { useMenu } from '@/shared/hooks/useMenu';
import cn from 'classnames';
import { ILangSwitcherProps } from './types';

export const LangSwitcher: React.FC<ILangSwitcherProps> = ({ icon }) => {
    const { anchorEl, open, handleOpen, handleClose } = useMenu();
    const t = useTranslations('common');
    const currentLocale = useLocale();

    return (
        <div className={styles['lang-switcher']}>
            <IconButton
                size="small"
                onClick={handleOpen}
                className={styles['lang-switcher__button']}
            >
                <Icon
                    src={icon}
                    width={20}
                    height={20}
                    alt={t('language')}
                    className={styles['lang-switcher__icon']}
                />
                <span className={styles['lang-switcher__label']}>
                    {t('language')}
                </span>
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                transformOrigin={{ vertical: 'top', horizontal: 'left' }}
            >
                {LOCALES.map((locale) => {
                    const isActive = isActiveLocale(locale.code, currentLocale);
                    return (
                        <MenuItem
                            key={locale.code}
                            disabled={isActive}
                            className={cn(styles['lang-switcher__menu-item'], {
                                [styles['lang-switcher__menu-item--active']]: isActive
                            })}
                        >
                            <NavigationLink
                                locale={locale.code}
                                onClose={handleClose}
                                isActive={isActive}
                            >
                                {locale.label}
                            </NavigationLink>
                        </MenuItem>
                    );
                })}
            </Menu>
        </div>
    );
};
