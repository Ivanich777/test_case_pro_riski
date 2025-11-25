import React from 'react';
import { Button, Menu, MenuItem } from '@mui/material';
import { useMenu } from '@/shared/hooks/useMenu';
import styles from './SelectButton.module.scss';
import cn from 'classnames';

interface ISelectButtonProps {
    label: string;
    options: Array<{ value: string; label: string }>;
    value?: string;
    onChange?: (value: string) => void;
    disabled?: boolean;
}

export const SelectButton: React.FC<ISelectButtonProps> = ({
    label,
    options,
    value,
    onChange,
    disabled = false
}) => {
    const { anchorEl, open, handleOpen, handleClose } = useMenu();

    const handleSelect = (selectedValue: string) => {
        onChange?.(selectedValue);
        handleClose();
    };

    const selectedOption = options.find(opt => opt.value === value);
    const displayLabel = selectedOption ? selectedOption.label : label;
    const isSelected = value !== undefined && value !== 'all';

    return (
        <>
            <Button
                className={cn(
                    styles['select-button'],
                    { [styles['select-button--active']]: isSelected }
                )}
                onClick={handleOpen}
                disabled={disabled}
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
                {options.map((option) => {
                    const isSelected = option.value === value;
                    return (
                        <MenuItem
                            key={option.value}
                            onClick={() => handleSelect(option.value)}
                            selected={isSelected}
                            disabled={isSelected}
                        >
                            {option.label}
                        </MenuItem>
                    );
                })}
            </Menu>
        </>
    );
};

