'use client'

import { IconButton, Menu, MenuItem } from "@mui/material";
import { ButtonContent } from "@/widgets/ButtonContent";
import styles from '@/shared/styles/components/Navbar.module.scss'
import React from "react";

interface ILangSwitcherProps {
    label: string;
    icon: string
}

export const LangSwitcher:React.FC<ILangSwitcherProps> = (props) => {
    const {label, icon} = props;

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className={styles.navButton}>
            <IconButton size={"small"} onClick={handleClick} className={styles.navButton}>
                <ButtonContent label={label} icon={icon} />
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>En</MenuItem>
                <MenuItem onClick={handleClose}>Ru</MenuItem>
            </Menu>
        </div>
    );
};
