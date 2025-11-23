import { Icon } from '@/shared/ui/Icon'
import styles from '@/shared/styles/components/Navbar.module.scss'
import cn from "classnames";
import React from "react";


interface IContentButtonProps {
    label: string;
    icon: string;
    active?: boolean;
}


export const ButtonContent: React.FC<IContentButtonProps> = (props) => {
    const { active, icon, label } = props;

    return (
        <>
            <Icon
                src={icon}
                width={20}
                height={20}
                alt={label}
                className={cn(styles.icon, { [styles.active]: active })}
            />
            <span className={styles.label}>{label}</span>
        </>
    )
};

