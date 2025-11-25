import React from 'react';
import { TableCell } from '@mui/material';
import styles from '../../TradesTable.module.scss';

interface ITableCellWithRatingProps {
    rating: string;
    ratingType: 'high' | 'low';
}

export const TableCellWithRating: React.FC<ITableCellWithRatingProps> = ({
    rating,
    ratingType
}) => {
    return (
        <TableCell>
            <span
                className={styles['trades-table__rating-value']}
                data-rating={ratingType}
            >
                {rating}
            </span>
        </TableCell>
    );
};

