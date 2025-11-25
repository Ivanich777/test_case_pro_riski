export enum TradePosition {
    LONG = 'long',
    SHORT = 'short'
}

export enum TradeStrategy {
    REBOUND = 'rebound',
    BREAKOUT = 'breakout',
    MOVING = 'moving'
}

export interface Trade {
    id: string;
    entryDate: Date;
    instrument: string;
    position: TradePosition;
    resultUSDT: number;
    peakPercent: number;
    entryPrice: number;
    stopLoss: number;
    quantity: number;
    amountUSDT: number;
    take: number;
    strategy: TradeStrategy;
    deposit: number;
    riskPercent: number;
    chart?: string;
    rating: number;
}

export interface TradeFilters {
    dateFrom?: Date;
    dateTo?: Date;
    instrument?: string;
    position?: TradePosition | null;
    strategy?: TradeStrategy | null;
}
