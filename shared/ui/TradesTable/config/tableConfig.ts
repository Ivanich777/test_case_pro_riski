export type TableColumnKey =
    | 'id'
    | 'entryDate'
    | 'instrument'
    | 'resultUSDT'
    | 'peakPercent'
    | 'entryPrice'
    | 'stopLoss'
    | 'quantity'
    | 'amountUSDT'
    | 'take'
    | 'strategy'
    | 'deposit'
    | 'chart'
    | 'rating';

export interface TableColumn {
    key: TableColumnKey;
    translationKey: string;
}

export const TABLE_COLUMNS: TableColumn[] = [
    { key: 'id', translationKey: 'table.id' },
    { key: 'entryDate', translationKey: 'table.entryDate' },
    { key: 'instrument', translationKey: 'table.instrument' },
    { key: 'resultUSDT', translationKey: 'table.resultUSDT' },
    { key: 'peakPercent', translationKey: 'table.peakPercent' },
    { key: 'entryPrice', translationKey: 'table.entryPrice' },
    { key: 'stopLoss', translationKey: 'table.stopLoss' },
    { key: 'quantity', translationKey: 'table.quantity' },
    { key: 'amountUSDT', translationKey: 'table.amountUSDT' },
    { key: 'take', translationKey: 'table.take' },
    { key: 'strategy', translationKey: 'table.strategy' },
    { key: 'deposit', translationKey: 'table.deposit' },
    { key: 'chart', translationKey: 'table.chart' },
    { key: 'rating', translationKey: 'table.rating' },
];
