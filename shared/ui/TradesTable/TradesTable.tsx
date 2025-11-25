'use client';

import React from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper
} from '@mui/material';
import { Trade } from '@/shared/types/trade';
import styles from './TradesTable.module.scss';
import { useTradesTable } from './hooks/useTradesTable';
import { TABLE_COLUMNS } from './config/tableConfig';
import { TradeTableRow } from './components/TradeTableRow/TradeTableRow';

interface ITradesTableProps {
    trades: Trade[];
}

export const TradesTable: React.FC<ITradesTableProps> = ({ trades }) => {
    const { t, processTrade, getTakesLabel } = useTradesTable();

    return (
        <TableContainer
            component={Paper}
            className={styles['trades-table']}
            sx={{
                width: '100%',
                maxWidth: '100%',
                overflowX: 'hidden',
                overflowY: 'hidden',
                margin: 0,
                padding: 0,
                '@media (max-width: 1800px)': {
                    overflowX: 'auto',
                },
                '& .MuiPaper-root': {
                    width: '100%',
                    maxWidth: '100%',
                    margin: 0,
                    padding: 0,
                    overflowX: 'hidden',
                    '@media (max-width: 1800px)': {
                        overflowX: 'auto',
                    },
                }
            }}
        >
            <Table
                sx={{
                    width: '100%',
                    tableLayout: 'auto',
                }}
            >
                <TableHead>
                    <TableRow>
                        {TABLE_COLUMNS.map((column) => (
                            <TableCell key={column.key} className={styles['trades-table__header']}>
                                {t(column.translationKey)}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {trades.length === 0 ? (
                        <TableRow>
                            <TableCell colSpan={14} align="center" className={styles['trades-table__empty']}>
                                {t('table.noData')}
                            </TableCell>
                        </TableRow>
                    ) : (
                        trades.map((trade) => {
                            const processed = processTrade(trade);
                            return (
                                <TradeTableRow
                                    key={trade.id}
                                    trade={trade}
                                    processed={processed}
                                    getTakesLabel={getTakesLabel}
                                />
                            );
                        })
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    );
};
