import React from "react";

export interface IUseMenuReturn {
    anchorEl: null | HTMLElement;
    open: boolean;
    handleOpen: (event: React.MouseEvent<HTMLElement>) => void;
    handleClose: () => void;
}

export const useMenu = (): IUseMenuReturn => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return { anchorEl, open, handleOpen, handleClose };
};