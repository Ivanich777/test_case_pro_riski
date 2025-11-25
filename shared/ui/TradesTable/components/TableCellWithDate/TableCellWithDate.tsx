import React from 'react';
import { TableCell, Box } from '@mui/material';
import styles from '../../TradesTable.module.scss';

interface ITableCellWithDateProps {
    date: string;
    time: string;
}

export const TableCellWithDate: React.FC<ITableCellWithDateProps> = ({ date, time }) => {
    return (
        <TableCell>
            <Box className={styles['trades-table__date']}>
                <span>{date}</span>
                <span className={styles['trades-table__date-time']}>
                    {time}
                </span>
            </Box>
        </TableCell>
    );
};

