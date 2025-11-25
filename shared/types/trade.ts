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
    instrument: string; // BTC, TON, Griffan, Doge
    position: TradePosition; // long/short
    resultUSDT: number; // Итог USDT
    peakPercent: number; // Пик в %
    entryPrice: number; // Цена входа
    stopLoss: number; // Стоп лосс
    quantity: number; // Кол-во монет
    amountUSDT: number; // На сумму USDT
    take: number; // Тейк
    strategy: TradeStrategy; // Стратегия
    deposit: number; // Депозит
    riskPercent: number; // % риска
    chart?: string; // URL графика
    rating: number; // Рейтинг
}

export interface TradeFilters {
    dateFrom?: Date;
    dateTo?: Date;
    instrument?: string;
    position?: TradePosition | null;
    strategy?: TradeStrategy | null;
}

export interface PaginationParams {
    page: number;
    pageSize: number;
}

export interface SerializedTrade extends Omit<Trade, 'entryDate'> {
    entryDate: string;
}

export interface TradesResponse {
    trades: SerializedTrade[];
    total: number;
    page: number;
    pageSize: number;
    totalPages: number;
}

