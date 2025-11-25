'use client';

import React, { useMemo } from 'react';
import { Box } from '@mui/material';
import { useDateRange } from '@/shared/hooks/useDateRange';
import styles from './DateRangeFilter.module.scss';
import cn from 'classnames';
import { IDateRangeFilterProps, DateRangePreset } from './types';

const PRESETS: DateRangePreset[] = ['today', 'yesterday', 'week', 'currentMonth', 'allTime'];

export const DateRangeFilter: React.FC<IDateRangeFilterProps> = ({ value = 'allTime', onChange, badgeValue }) => {
    const { getDateRange, getPresetLabel, formatBadgeValue } = useDateRange();

    const handlePresetClick = (preset: DateRangePreset) => {
        const range = getDateRange(preset);
        if (range) {
            onChange(preset, range.from, range.to);
        } else if (preset === 'allTime') {
            onChange(preset);
        }
    };

    const badgeText = useMemo(() => formatBadgeValue(badgeValue), [formatBadgeValue, badgeValue]);

    return (
        <Box className={styles['date-range-filter']}>
            {PRESETS.map((preset) => {
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
