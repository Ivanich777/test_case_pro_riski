import React from 'react';
import { TableCell, Box } from '@mui/material';
import styles from '../../TradesTable.module.scss';

interface ITableCellWithResultProps {
    resultUSDT: string;
    takes: number;
    takesLabel: string;
    colorType: 'positive' | 'negative';
}

export const TableCellWithResult: React.FC<ITableCellWithResultProps> = ({
    resultUSDT,
    takes,
    takesLabel,
    colorType
}) => {
    return (
        <TableCell>
            <Box className={styles['trades-table__result']}>
                <span
                    className={styles['trades-table__result-value']}
                    data-color={colorType}
                >
                    {resultUSDT}
                </span>
                <span
                    className={styles['trades-table__takes']}
                    data-color={colorType}
                >
                    {takes > 0 ? '+' : ''}{takes} {takesLabel}
                </span>
            </Box>
        </TableCell>
    );
};

