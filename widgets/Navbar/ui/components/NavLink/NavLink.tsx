import { Link, usePathname } from '@/i18n/routing';
import { AppRoute } from '@/shared/lib/routes';
import cn from "classnames";
import styles from './NavLink.module.scss';
import buttonStyles from '@/shared/styles/components/navbar-button.module.scss';
import { ButtonContent } from "@/shared/ui/ButtonContent";
import React from "react";

interface INavLinkProps {
    href: AppRoute;
    label: string;
    icon: string;
}

export const NavLink: React.FC<INavLinkProps> = (props) => {
    const {
        href,
        label,
        icon
    } = props;

    const pathname = usePathname();
    const active = pathname === href;

    const className = cn(
        styles['nav-link'],
        buttonStyles['navbar-button'],
        {
            [buttonStyles['navbar-button--active']]: active,
            [buttonStyles['navbar-button--inactive']]: !active,
        }
    );

    if (active) {
        return (
            <span className={className}>
                <ButtonContent label={label} icon={icon} active={active} />
            </span>
        );
    }

    return (
        <Link
            href={href}
            className={className}
        >
            <ButtonContent label={label} icon={icon} active={active} />
        </Link>
    );
};
