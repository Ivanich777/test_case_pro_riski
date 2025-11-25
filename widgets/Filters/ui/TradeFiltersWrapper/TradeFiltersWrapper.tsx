'use client';

import React, { useState } from 'react';
import { TradeFilters } from '../TradeFilters';

export const TradeFiltersWrapper: React.FC = () => {
    const [filters, setFilters] = useState({
        instrument: undefined,
        direction: undefined,
        dealType: undefined,
        tradeType: undefined,
        dealStatus: undefined,
        strategy: undefined
    });

    return (
        <TradeFilters
            filters={filters}
            onFiltersChange={setFilters}
        />
    );
};

