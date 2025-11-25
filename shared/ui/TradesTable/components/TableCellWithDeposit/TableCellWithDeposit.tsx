import React from 'react';
import { TableCell, Box } from '@mui/material';
import styles from '../../TradesTable.module.scss';

interface ITableCellWithDepositProps {
    deposit: string;
    riskPercent: string;
}

export const TableCellWithDeposit: React.FC<ITableCellWithDepositProps> = ({
    deposit,
    riskPercent
}) => {
    return (
        <TableCell>
            <Box className={styles['trades-table__deposit']}>
                <span>{deposit}</span>
                <span className={styles['trades-table__separator']}>|</span>
                <span>{riskPercent}</span>
            </Box>
        </TableCell>
    );
};

