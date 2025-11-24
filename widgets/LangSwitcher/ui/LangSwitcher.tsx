'use client'

import { IconButton, Menu, MenuItem } from "@mui/material";
import { Icon } from "@/shared/ui/Icon";
import styles from './LangSwitcher.module.scss';
import { useLocale, useTranslations } from "next-intl";
import React from "react";
import { NavigationLink } from "@/widgets/LangSwitcher/ui/components/NavigationLink/NavigationLink";
import { LOCALES, isActiveLocale } from "@/shared/lib/localeUtils";
import { useMenu } from "@/shared/hooks/useMenu";

interface ILangSwitcherProps {
    icon: string
}

const getMenuItemStyles = (isActive: boolean) => ({
    fontWeight: isActive ? 'bold' : 'normal',
    backgroundColor: isActive ? 'action.selected' : 'transparent',
    '&.Mui-disabled': { opacity: 1 }
});

export const LangSwitcher: React.FC<ILangSwitcherProps> = (props) => {
    const { icon } = props;
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
                            sx={getMenuItemStyles(isActive)}
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
