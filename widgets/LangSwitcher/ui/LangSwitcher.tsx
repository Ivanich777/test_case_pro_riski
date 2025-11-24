'use client'

import { IconButton, Menu, MenuItem } from "@mui/material";
import { Icon } from "@/shared/ui/Icon";
import styles from './LangSwitcher.module.scss';
import { useLocale, useTranslations } from "next-intl";
import React from "react";
import { NavigationLink } from "@/widgets/LangSwitcher/ui/components/NavigationLink/NavigationLink";
import { LOCALES } from "@/shared/lib/localeUtils";

interface ILangSwitcherProps {
    icon: string
}

export const LangSwitcher: React.FC<ILangSwitcherProps> = (props) => {
    const { icon } = props;
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const t = useTranslations('common');
    const currentLocale = useLocale();

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };


    return (
        <div className={styles['lang-switcher']}>
            <IconButton
                size="small"
                onClick={handleClick}
                className={styles['lang-switcher__button']}
                sx={{
                    border: '1px solidrgb(224, 224, 224)',
                    borderRadius: '4px',
                    backgroundColor: 'transparent',
                    flexDirection: 'column',
                    minWidth: 'auto',
                    width: 'auto',
                    height: 'auto',
                    padding: '4px 8px',
                    gap: '2px'
                }}
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
                {LOCALES.map((locale) => (
                    <MenuItem
                        key={locale.code}
                        disabled={locale.code === currentLocale}
                        sx={{
                            fontWeight: locale.code === currentLocale ? 'bold' : 'normal',
                            backgroundColor: locale.code === currentLocale ? 'action.selected' : 'transparent',
                            '&.Mui-disabled': { opacity: 1 }
                        }}
                    >
                        <NavigationLink
                            locale={locale.code}
                            onClose={handleClose}
                            isActive={locale.code === currentLocale}
                        >
                            {locale.label}
                        </NavigationLink>
                    </MenuItem>
                ))}
            </Menu>
        </div>
    );
};
