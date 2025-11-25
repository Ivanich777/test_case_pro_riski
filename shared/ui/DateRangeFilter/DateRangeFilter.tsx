'use client';

import React from 'react';
import { Box } from '@mui/material';
import { useTranslations, useLocale } from 'next-intl';
import styles from './DateRangeFilter.module.scss';
import cn from 'classnames';

export type DateRangePreset = 'today' | 'yesterday' | 'week' | 'currentMonth' | 'allTime' | 'customRange';

interface IDateRangeFilterProps {
    value?: DateRangePreset;
    onChange: (preset: DateRangePreset, dateFrom?: Date, dateTo?: Date) => void;
    badgeValue?: number;
}

const getDateRange = (preset: DateRangePreset): { from: Date; to: Date } | null => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    switch (preset) {
        case 'today': {
            const to = new Date(today);
            to.setHours(23, 59, 59, 999);
            return { from: today, to };
        }
        case 'yesterday': {
            const from = new Date(today);
            from.setDate(from.getDate() - 1);
            const to = new Date(from);
            to.setHours(23, 59, 59, 999);
            return { from, to };
        }
        case 'week': {
            const from = new Date(today);
            from.setDate(from.getDate() - 7);
            const to = new Date(today);
            to.setHours(23, 59, 59, 999);
            return { from, to };
        }
        case 'currentMonth': {
            const from = new Date(today.getFullYear(), today.getMonth(), 1);
            const to = new Date(today.getFullYear(), today.getMonth() + 1, 0);
            to.setHours(23, 59, 59, 999);
            return { from, to };
        }
        case 'allTime':
            return null;
        case 'customRange':
            return null;
        default:
            return null;
    }
};

const getCurrentMonthName = (locale: string): string => {
    const date = new Date();
    return new Intl.DateTimeFormat(locale, { month: 'long' }).format(date);
};

export const DateRangeFilter: React.FC<IDateRangeFilterProps> = ({
    value = 'allTime',
    onChange,
    badgeValue
}) => {
    const t = useTranslations('home');
    const locale = useLocale();

    const presets: DateRangePreset[] = ['today', 'yesterday', 'week', 'currentMonth', 'allTime'];

    const handlePresetClick = (preset: DateRangePreset) => {
        const range = getDateRange(preset);
        if (range) {
            onChange(preset, range.from, range.to);
        } else if (preset === 'allTime') {
            onChange(preset);
        }
    };

    const getPresetLabel = (preset: DateRangePreset): string => {
        if (preset === 'currentMonth') {
            return getCurrentMonthName(locale === 'ru' ? 'ru-RU' : 'en-US');
        }
        return t(`dateFilter.${preset}`);
    };

    const badgeColor = badgeValue !== undefined
        ? (badgeValue >= 0 ? '#329A85' : '#E25E42')
        : undefined;

    const badgeText = badgeValue !== undefined
        ? (badgeValue >= 0 ? `+${badgeValue}` : `${badgeValue}`)
        : undefined;

    return (
        <Box className={styles['date-range-filter']}>
            {presets.map((preset) => {
                const isActive = value === preset;
                return (
                    <Box
                        key={preset}
                        className={cn(
                            styles['date-range-filter__item'],
                            { [styles['date-range-filter__item--active']]: isActive }
                        )}
                        onClick={() => handlePresetClick(preset)}
                    >
                        <span className={styles['date-range-filter__label']}>
                            {getPresetLabel(preset)}
                        </span>
                        {isActive && badgeText && (
                            <span
                                className={styles['date-range-filter__badge']}
                                data-color={badgeValue !== undefined && badgeValue >= 0 ? 'positive' : 'negative'}
                            >
                                {badgeText}
                            </span>
                        )}
                    </Box>
                );
            })}
        </Box>
    );
};

