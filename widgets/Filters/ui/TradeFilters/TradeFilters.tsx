'use client';

import React from 'react';
import { Box } from '@mui/material';
import { useTranslations } from 'next-intl';
import { SelectButton } from '@/shared/ui/SelectButton';
import styles from './TradeFilters.module.scss';

interface ITradeFiltersProps {
    filters: {
        instrument?: string;
        direction?: string;
        dealType?: string;
        tradeType?: string;
        dealStatus?: string;
        strategy?: string;
    };
    onFiltersChange: (filters: {
        instrument?: string;
        direction?: string;
        dealType?: string;
        tradeType?: string;
        dealStatus?: string;
        strategy?: string;
    }) => void;
}

export const TradeFilters: React.FC<ITradeFiltersProps> = ({
    filters,
    onFiltersChange
}) => {
    const t = useTranslations('home.filters');

    const handleFilterChange = (key: string, value: string) => {
        onFiltersChange({
            ...filters,
            [key]: value
        });
    };

    const instrumentOptions = [
        { value: 'all', label: t('all') },
        { value: 'BTC', label: 'BTC' },
        { value: 'TON', label: 'TON' },
        { value: 'Griffan', label: 'Griffan' },
        { value: 'Doge', label: 'Doge' }
    ];

    const directionOptions = [
        { value: 'all', label: t('all') },
        { value: 'long', label: t('long') },
        { value: 'short', label: t('short') }
    ];

    const dealTypeOptions = [
        { value: 'all', label: t('all') },
        { value: 'spot', label: t('spot') },
        { value: 'futures', label: t('futures') }
    ];

    const tradeTypeOptions = [
        { value: 'all', label: t('all') },
        { value: 'manual', label: t('manual') },
        { value: 'auto', label: t('auto') }
    ];

    const dealStatusOptions = [
        { value: 'all', label: t('all') },
        { value: 'open', label: t('open') },
        { value: 'closed', label: t('closed') }
    ];

    const strategyOptions = [
        { value: 'all', label: t('all') },
        { value: 'rebound', label: t('rebound') },
        { value: 'breakout', label: t('breakout') },
        { value: 'moving', label: t('moving') }
    ];

    return (
        <Box className={styles['trade-filters']}>
            <SelectButton
                label={t('coins')}
                options={instrumentOptions}
                value={filters.instrument}
                onChange={(value) => handleFilterChange('instrument', value)}
            />
            <SelectButton
                label={t('directions')}
                options={directionOptions}
                value={filters.direction}
                onChange={(value) => handleFilterChange('direction', value)}
            />
            <SelectButton
                label={t('dealType')}
                options={dealTypeOptions}
                value={filters.dealType}
                onChange={(value) => handleFilterChange('dealType', value)}
            />
            <SelectButton
                label={t('tradeType')}
                options={tradeTypeOptions}
                value={filters.tradeType}
                onChange={(value) => handleFilterChange('tradeType', value)}
            />
            <SelectButton
                label={t('dealStatus')}
                options={dealStatusOptions}
                value={filters.dealStatus}
                onChange={(value) => handleFilterChange('dealStatus', value)}
            />
            <SelectButton
                label={t('strategy')}
                options={strategyOptions}
                value={filters.strategy}
                onChange={(value) => handleFilterChange('strategy', value)}
            />
        </Box>
    );
};

