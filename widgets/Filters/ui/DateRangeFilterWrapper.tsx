'use client';

import { DateRangeFilter, DateRangePreset } from '@/shared/ui/DateRangeFilter';
import { useState } from 'react';
import { TradeFilters } from '@/shared/types/trade';

interface IDateRangeFilterWrapperProps {
    badgeValue?: number;
}

export const DateRangeFilterWrapper: React.FC<IDateRangeFilterWrapperProps> = ({ badgeValue }) => {
    const [filters, setFilters] = useState<TradeFilters>({});

    const handleDateRangeChange = (preset: DateRangePreset, dateFrom?: Date, dateTo?: Date) => {
        setFilters({
            ...filters,
            dateFrom,
            dateTo
        });
    };

    return (
        <DateRangeFilter
            value="allTime"
            onChange={handleDateRangeChange}
            badgeValue={badgeValue}
        />
    );
};

