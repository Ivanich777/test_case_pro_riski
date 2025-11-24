'use client';

import { usePathname, Link } from '@/i18n/routing';
import React from "react";
import styles from './NavigationLink.module.scss';

interface NavigationLinkProps {
    locale: string;
    children: React.ReactNode;
    isActive?: boolean;
    onClose?: () => void;
}

export const NavigationLink: React.FC<NavigationLinkProps> = (props) => {
    const { locale, children, isActive = false, onClose } = props;
    const pathname = usePathname();


    const handleClick = (e: React.MouseEvent) => {
        if (isActive) {
            e.preventDefault();
            return;
        }

        if (onClose) {
            setTimeout(() => {
                onClose();
            }, 100);
        }
    };

    return (
        <Link
            locale={locale}
            href={pathname}
            onClick={handleClick}
            className={styles['navigation-link']}
        >
            {children}
        </Link>
    );
}
