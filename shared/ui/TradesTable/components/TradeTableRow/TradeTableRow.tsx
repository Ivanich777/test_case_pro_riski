import React from 'react';
import { TableRow, TableCell } from '@mui/material';
import { Trade } from '@/shared/types/trade';
import { ProcessedTrade } from '../../types';
import styles from '../../TradesTable.module.scss';
import { Icon } from '@/shared/ui/Icon';
import { TableCellWithDate } from '../TableCellWithDate/TableCellWithDate';
import { TableCellWithInstrument } from '../TableCellWithInstrument/TableCellWithInstrument';
import { TableCellWithResult } from '../TableCellWithResult/TableCellWithResult';
import { TableCellWithAmount } from '../TableCellWithAmount/TableCellWithAmount';
import { TableCellWithTake } from '../TableCellWithTake/TableCellWithTake';
import { TableCellWithDeposit } from '../TableCellWithDeposit/TableCellWithDeposit';
import { TableCellWithRating } from '../TableCellWithRating/TableCellWithRating';

interface ITradeTableRowProps {
    trade: Trade;
    processed: ProcessedTrade;
    getTakesLabel: (takes: number) => string;
}

export const TradeTableRow: React.FC<ITradeTableRowProps> = ({
    trade,
    processed,
    getTakesLabel
}) => {
    return (
        <TableRow
            key={trade.id}
            className={styles['trades-table__row']}
        >
            <TableCell className={styles['trades-table__id']}>
                {processed.formattedId}
            </TableCell>
            <TableCellWithDate
                date={processed.dateParts.date}
                time={processed.dateParts.time}
            />
            <TableCellWithInstrument
                instrument={trade.instrument}
                position={trade.position}
                positionLabel={processed.positionLabel}
            />
            <TableCellWithResult
                resultUSDT={processed.formattedResultUSDT}
                takes={processed.takes}
                takesLabel={getTakesLabel(processed.takes)}
                colorType={processed.resultColorType}
            />
            <TableCell className={styles['trades-table__peak']}>
                100 из 100%
            </TableCell>
            <TableCell>{processed.formattedEntryPrice}</TableCell>
            <TableCell>{processed.formattedStopLoss}</TableCell>
            <TableCell>{processed.formattedQuantity}</TableCell>
            <TableCellWithAmount amount={processed.formattedAmountUSDT} />
            <TableCellWithTake
                take={processed.formattedTake}
                ratio={processed.takeRatio}
            />
            <TableCell className={styles['trades-table__strategy']}>
                {processed.strategyLabel}
            </TableCell>
            <TableCellWithDeposit
                deposit={processed.formattedDeposit}
                riskPercent={processed.formattedRiskPercent}
            />
            <TableCell>
                <Icon
                    src="/assets/icons/defaultGraph.svg"
                    width={20}
                    height={20}
                    alt="Chart"
                />
            </TableCell>
            <TableCellWithRating
                rating={processed.formattedRating}
                ratingType={processed.ratingType}
            />
        </TableRow>
    );
};

