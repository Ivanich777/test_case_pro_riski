import { ProcessedTrade } from './hooks/useTradesTable';

export interface ITradesTableProps {
    trades: import('@/shared/types/trade').Trade[];
}

export type { ProcessedTrade };
