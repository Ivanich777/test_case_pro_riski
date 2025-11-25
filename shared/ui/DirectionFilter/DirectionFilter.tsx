import React from 'react';
import { ToggleButton, ToggleButtonGroup, Box } from '@mui/material';
import { TradePosition } from '@/shared/types/trade';
import styles from './DirectionFilter.module.scss';

interface IDirectionFilterProps {
    value: TradePosition | null;
    onChange: (value: TradePosition | null) => void;
    labelAll: string;
    labelBuy: string;
    labelSell: string;
}

export const DirectionFilter: React.FC<IDirectionFilterProps> = ({
    value,
    onChange,
    labelAll,
    labelBuy,
    labelSell
}) => {
    const handleChange = (
        _event: React.MouseEvent<HTMLElement>,
        newValue: TradePosition | null
    ) => {
        if (newValue !== null) {
            onChange(newValue);
        }
    };

    return (
        <Box className={styles['direction-filter']}>
            <ToggleButtonGroup
                value={value}
                exclusive
                onChange={handleChange}
                aria-label="direction filter"
                size="small"
                className={styles['direction-filter__group']}
            >
                <ToggleButton value="" aria-label="all">
                    {labelAll}
                </ToggleButton>
                <ToggleButton value={TradePosition.LONG} aria-label="buy">
                    {labelBuy}
                </ToggleButton>
                <ToggleButton value={TradePosition.SHORT} aria-label="sell">
                    {labelSell}
                </ToggleButton>
            </ToggleButtonGroup>
        </Box>
    );
};

