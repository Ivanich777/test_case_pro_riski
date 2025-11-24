import { Icon } from '@/shared/ui/Icon'
import buttonStyles from '@/shared/styles/components/navbar-button.module.scss';
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
                className={cn(
                    buttonStyles['navbar-button__icon'],
                    { [buttonStyles['navbar-button__icon--active']]: active }
                )}
            />
            <span className={buttonStyles['navbar-button__label']}>{label}</span>
        </>
    )
};

