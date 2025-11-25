import React from 'react';
import { TableCell, Box } from '@mui/material';
import styles from '../../TradesTable.module.scss';

interface ITableCellWithAmountProps {
    amount: string;
    multiplier?: string;
}

export const TableCellWithAmount: React.FC<ITableCellWithAmountProps> = ({
    amount,
    multiplier = 'x2'
}) => {
    return (
        <TableCell>
            <Box className={styles['trades-table__amount']}>
                <span>{amount}</span>
                <span className={styles['trades-table__multiplier']}>{multiplier}</span>
            </Box>
        </TableCell>
    );
};

