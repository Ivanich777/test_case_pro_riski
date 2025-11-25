import React from 'react';
import { TableCell, Box } from '@mui/material';
import { TradePosition } from '@/shared/types/trade';
import styles from '../../TradesTable.module.scss';

interface ITableCellWithInstrumentProps {
    instrument: string;
    position: TradePosition;
    positionLabel: string;
}

export const TableCellWithInstrument: React.FC<ITableCellWithInstrumentProps> = ({
    instrument,
    position,
    positionLabel
}) => {
    return (
        <TableCell>
            <Box className={styles['trades-table__instrument']}>
                <span>{instrument}</span>
                <span
                    className={styles['trades-table__position']}
                    data-position={position}
                >
                    {positionLabel}
                </span>
            </Box>
        </TableCell>
    );
};

