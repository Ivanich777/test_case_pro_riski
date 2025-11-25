import React from 'react';
import { TableCell, Box } from '@mui/material';
import styles from '../../TradesTable.module.scss';

interface ITableCellWithTakeProps {
    take: string;
    ratio: string;
}

export const TableCellWithTake: React.FC<ITableCellWithTakeProps> = ({ take, ratio }) => {
    return (
        <TableCell>
            <Box className={styles['trades-table__take']}>
                <span>{take}</span>
                <span className={styles['trades-table__ratio']}>
                    {ratio}
                </span>
            </Box>
        </TableCell>
    );
};

