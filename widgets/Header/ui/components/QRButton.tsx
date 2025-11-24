'use client'

import { IconButton } from "@mui/material";
import { Icon } from "@/shared/ui/Icon";

export const QRButton = () => {
    const handleClick = () => {
        window.open('https://proriski.com/', '_blank');
    };

    return (
        <IconButton
            size="small"
            onClick={handleClick}
            sx={{
                padding: '4px',
                width: 'auto',
                height: 'auto',
                border: '1px solid #e0e0e0',
                borderRadius: '4px',
                backgroundColor: 'transparent',
                '&:hover': {
                    backgroundColor: 'rgba(0, 0, 0, 0.04)'
                }
            }}
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