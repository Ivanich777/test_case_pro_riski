'use client';

import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { TradesTable } from '@/shared/ui/TradesTable';
import { Pagination } from '@/shared/ui/Pagination';
import { Box } from '@mui/material';
import { useStore } from '@/shared/stores';

export const TradesTableWrapper: React.FC = observer(() => {
    const { tradesStore } = useStore();

    const dateFromTime = tradesStore.filters.dateFrom?.getTime();
    const dateToTime = tradesStore.filters.dateTo?.getTime();

    useEffect(() => {
        tradesStore.fetchTrades();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        tradesStore.page,
        tradesStore.filters.instrument,
        tradesStore.filters.position,
        tradesStore.filters.strategy,
        dateFromTime,
        dateToTime
    ]);

    const handlePageChange = (_event: React.ChangeEvent<unknown>, page: number) => {
        tradesStore.setPage(page);
    };

    if (tradesStore.loading) {
        return <Box>Loading...</Box>;
    }

    if (tradesStore.error) {
        return <Box>Error: {tradesStore.error}</Box>;
    }

    return (
        <Box sx={{ width: '100%', padding: 0, margin: 0 }}>
            <TradesTable trades={tradesStore.trades} />
            {tradesStore.totalPages > 1 && (
                <Pagination
                    page={tradesStore.page}
                    totalPages={tradesStore.totalPages}
                    total={tradesStore.total}
                    pageSize={tradesStore.pageSize}
                    onPageChange={handlePageChange}
                />
            )}
        </Box>
    );
});

