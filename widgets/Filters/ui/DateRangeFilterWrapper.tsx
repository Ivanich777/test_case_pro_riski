'use client';

import React from 'react';
import { observer } from 'mobx-react-lite';
import { DateRangeFilter, DateRangePreset } from '@/shared/ui/DateRangeFilter';
import { useStore } from '@/shared/stores';

interface IDateRangeFilterWrapperProps {
    badgeValue?: number;
}

export const DateRangeFilterWrapper: React.FC<IDateRangeFilterWrapperProps> = observer(({ badgeValue }) => {
    const { tradesStore } = useStore();

    const handleDateRangeChange = (preset: DateRangePreset, dateFrom?: Date, dateTo?: Date) => {
        tradesStore.setSelectedDatePreset(preset);
        tradesStore.setFilters({
            dateFrom,
            dateTo
        });
    };

    return (
        <DateRangeFilter
            value={tradesStore.selectedDatePreset}
            onChange={handleDateRangeChange}
            badgeValue={badgeValue}
        />
    );
});

