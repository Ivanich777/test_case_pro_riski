import React from 'react';
import { Button, Menu, MenuItem } from '@mui/material';
import { useMenu } from '@/shared/hooks/useMenu';
import styles from './SelectButton.module.scss';

interface ISelectButtonProps {
    label: string;
    options: Array<{ value: string; label: string }>;
    value?: string;
    onChange?: (value: string) => void;
}

export const SelectButton: React.FC<ISelectButtonProps> = ({
    label,
    options,
    value,
    onChange
}) => {
    const { anchorEl, open, handleOpen, handleClose } = useMenu();

    const handleSelect = (selectedValue: string) => {
        onChange?.(selectedValue);
        handleClose();
    };

    const selectedOption = options.find(opt => opt.value === value);
    const displayLabel = selectedOption ? selectedOption.label : label;

    return (
        <>
            <Button
                className={styles['select-button']}
                onClick={handleOpen}
                endIcon={
                    <svg
                        width="10"
                        height="5"
                        viewBox="0 0 10 5"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={styles['select-button__icon']}
                    >
                        <path
                            d="M8.6001 0.600006L4.6001 3.93334L0.600098 0.600006"
                            stroke="#A2A6A5"
                            strokeWidth="1.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                }
            >
                {displayLabel}
            </Button>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                {options.map((option) => (
                    <MenuItem
                        key={option.value}
                        onClick={() => handleSelect(option.value)}
                        selected={option.value === value}
                    >
                        {option.label}
                    </MenuItem>
                ))}
            </Menu>
        </>
    );
};

