'use client';

import React from 'react';
import { observer } from 'mobx-react-lite';
import { TradeFilters } from '../TradeFilters';
import { useStore } from '@/shared/stores';
import { TradePosition, TradeStrategy } from '@/shared/types/trade';

export const TradeFiltersWrapper: React.FC = observer(() => {
    const { tradesStore } = useStore();

    const handleFiltersChange = (filters: {
        instrument?: string;
        direction?: string;
        dealType?: string;
        tradeType?: string;
        dealStatus?: string;
        strategy?: string;
    }) => {
        tradesStore.setFilters({
            instrument: filters.instrument && filters.instrument !== 'all' ? filters.instrument : undefined,
            position: filters.direction && filters.direction !== 'all' 
                ? (filters.direction as TradePosition) 
                : undefined,
            strategy: filters.strategy && filters.strategy !== 'all' 
                ? (filters.strategy as TradeStrategy) 
                : undefined
        });
    };

    return (
        <TradeFilters
            filters={{
                instrument: tradesStore.filters.instrument,
                direction: tradesStore.filters.position,
                strategy: tradesStore.filters.strategy
            }}
            onFiltersChange={handleFiltersChange}
        />
    );
});

