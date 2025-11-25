import { Trade } from '@/shared/types/trade';
import { ProcessedTrade } from '../../types';

export interface ITradeTableRowProps {
    trade: Trade;
    processed: ProcessedTrade;
    getTakesLabel: (takes: number) => string;
}

