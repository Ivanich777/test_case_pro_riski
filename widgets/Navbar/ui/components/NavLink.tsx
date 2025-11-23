import Link from "next/link";
import cn from "classnames";
import styles from '@/shared/styles/components/Navbar.module.scss'
import { ButtonContent } from "@/widgets/ButtonContent";
import React from "react";

interface INavLinkProps {
    href: string;
    label: string;
    icon: string;
    active?: boolean;
}

export const NavLink: React.FC<INavLinkProps> = (props) => {
    const {
        href,
        label,
        icon,
        active = false
    } = props;

    return(
        <Link
            href={href}
            style={{ textDecoration: 'none' }}
            className={cn(styles.navButton, {
                [styles.active]: active,
                [styles.inactive]: !active,
            })}
        >
            <ButtonContent label={label} icon={icon} active={active} />
        </Link>
    );
}
