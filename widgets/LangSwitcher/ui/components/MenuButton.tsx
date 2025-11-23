import { IconButton, Menu, MenuItem, Typography } from "@mui/material";
import { ButtonContent } from "@/widgets/ButtonContent";
import styles from '@/shared/styles/components/Navbar.module.scss'
import React from "react";

export const MenuButton = ({
    label,
    icon,
    menuItems
}: {
    label: string;
    icon: string;
    menuItems: { label: string; onClick: () => void }[];
}) => {
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
            <IconButton onClick={handleClick} className={styles.navButton}>
                <ButtonContent label={label} icon={icon} />
            </IconButton>
            <Typography variant="caption">{label}</Typography>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                {menuItems.map((item, index) => (
                    <MenuItem key={index} onClick={() => { item.onClick(); handleClose(); }}>
                        {item.label}
                    </MenuItem>
                ))}
            </Menu>
        </div>
    );
};
