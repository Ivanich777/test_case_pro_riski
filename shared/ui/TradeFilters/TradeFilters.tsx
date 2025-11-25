'use client';

import React from 'react';
import { Box } from '@mui/material';
import { useTranslations } from 'next-intl';
import { SelectButton } from '@/shared/ui/SelectButton';
import { useTradeFilters } from '@/shared/hooks/useTradeFilters';
import styles from './TradeFilters.module.scss';
import { ITradeFiltersProps, ITradeFilters } from './types';

export const TradeFilters: React.FC<ITradeFiltersProps> = ({ filters, onFiltersChange }) => {
    const t = useTranslations('home.filters');
    const { filterConfigs, handleFilterChange } = useTradeFilters({ filters, onFiltersChange });

    return (
        <Box className={styles['trade-filters']}>
            {filterConfigs.map((config) => {
                const filterKey = config.key as keyof ITradeFilters;
                return (
                    <SelectButton
                        key={config.key}
                        label={t(config.labelKey)}
                        options={config.options}
                        value={filters[filterKey]}
                        onChange={(value) => handleFilterChange(config.key, value)}
                        disabled={config.disabled}
                    />
                );
            })}
        </Box>
    );
};

