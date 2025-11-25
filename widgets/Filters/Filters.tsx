'use client';

import React from 'react';
import { Box, Button, Stack } from '@mui/material';
import { DateFilter } from '@/shared/ui/DateFilter';
import { DirectionFilter } from '@/shared/ui/DirectionFilter';
import { TradePosition } from '@/shared/types/trade';
import { TradeFilters } from '@/shared/types/trade';
import styles from './Filters.module.scss';
import { useTranslations } from 'next-intl';

interface IFiltersProps {
    filters: TradeFilters;
    onFiltersChange: (filters: TradeFilters) => void;
    onReset: () => void;
}

export const Filters: React.FC<IFiltersProps> = ({
    filters,
    onFiltersChange,
    onReset
}) => {
    const t = useTranslations('home');

    const handleDateFromChange = (date: Date | null) => {
        onFiltersChange({
            ...filters,
            dateFrom: date || undefined
        });
    };

    const handleDateToChange = (date: Date | null) => {
        onFiltersChange({
            ...filters,
            dateTo: date || undefined
        });
    };

    const handleDirectionChange = (position: TradePosition | null) => {
        onFiltersChange({
            ...filters,
            position: position || undefined
        });
    };

    const hasActiveFilters = filters.dateFrom || filters.dateTo || filters.position;

    return (
        <Box className={styles['filters']}>
            <Stack direction="row" spacing={2} flexWrap="wrap" alignItems="flex-end">
                <DateFilter
                    labelFrom={t('dateFrom')}
                    labelTo={t('dateTo')}
                    valueFrom={filters.dateFrom}
                    valueTo={filters.dateTo}
                    onChangeFrom={handleDateFromChange}
                    onChangeTo={handleDateToChange}
                />
                <DirectionFilter
                    value={filters.position || null}
                    onChange={handleDirectionChange}
                    labelAll={t('all')}
                    labelBuy={t('buy')}
                    labelSell={t('sell')}
                />
                {hasActiveFilters && (
                    <Button
                        variant="outlined"
                        onClick={onReset}
                        size="small"
                        className={styles['filters__reset']}
                    >
                        {t('reset')}
                    </Button>
                )}
            </Stack>
        </Box>
    );
};

