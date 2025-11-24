import { IconButton, Menu, MenuItem as MuiMenuItem } from "@mui/material";
import { ButtonContent } from "@/shared/ui/ButtonContent";
import buttonStyles from '@/shared/styles/components/navbar-button.module.scss';
import React from "react";
import cn from 'classnames';
import { IMenuButtonProps } from './types';

export const MenuButton: React.FC<IMenuButtonProps> = (props) => {
    const {
        label,
        icon,
        menuItems
    } = props;

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <IconButton
                onClick={handleClick}
                className={cn(buttonStyles['navbar-button'])}
            >
                <ButtonContent label={label} icon={icon} />
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                {menuItems.map((item, index) => (
                    <MuiMenuItem key={index} onClick={() => { item.onClick(); handleClose(); }}>
                        {item.label}
                    </MuiMenuItem>
                ))}
            </Menu>
        </div>
    );
};
