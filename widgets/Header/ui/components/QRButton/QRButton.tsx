'use client'

import { IconButton } from "@mui/material";
import { Icon } from "@/shared/ui/Icon";
import styles from './QRButton.module.scss';

export const QRButton = () => {
    const handleClick = () => {
        window.open('https://proriski.com/', '_blank');
    };

    return (
        <IconButton
            size="small"
            onClick={handleClick}
            className={styles['qr-button']}
        >
            <Icon
                src="/assets/icons/qr.svg"
                width={40}
                height={40}
                alt="QR Code"
            />
        </IconButton>
    );
};