import { useTranslations } from 'next-intl';
import { useCallback } from 'react';
import { Trade } from '@/shared/types/trade';

export interface ProcessedTrade {
    formattedId: string;
    dateParts: {
        date: string;
        time: string;
    };
    positionLabel: string;
    formattedResultUSDT: string;
    takes: number;
    resultColorType: 'positive' | 'negative';
    formattedEntryPrice: string;
    formattedStopLoss: string;
    formattedQuantity: string;
    formattedAmountUSDT: string;
    formattedTake: string;
    takeRatio: string;
    strategyLabel: string;
    formattedDeposit: string;
    formattedRiskPercent: string;
    formattedRating: string;
    ratingType: 'high' | 'low';
}

const formatNumber = (value: number, decimals: number = 2): string => {
    return new Intl.NumberFormat('ru-RU', {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals
    }).format(value);
};

const formatDate = (date: Date): { date: string; time: string } => {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');

    return {
        date: `${day}.${month}.${year}`,
        time: `${hours}:${minutes}`
    };
};

const calculateTakes = (resultUSDT: number, take: number, entryPrice: number): number => {
    if (resultUSDT <= 0) {
        return 0;
    }

    const priceDiff = take - entryPrice;
    if (priceDiff <= 0) return 0;

    const takes = Math.floor(resultUSDT / (priceDiff * 0.1));
    return takes > 0 ? takes : 0;
};

export interface IUseTradesTableReturn {
    t: ReturnType<typeof useTranslations<'home'>>;
    processTrade: (trade: Trade) => ProcessedTrade;
    getTakesLabel: (takes: number) => string;
}

export const useTradesTable = (): IUseTradesTableReturn => {
    const t = useTranslations('home');

    const processTrade = useCallback((trade: Trade): ProcessedTrade => {
        const dateParts = formatDate(trade.entryDate);

        const positionLabel = t(`position.${trade.position}`);
        const strategyLabel = t(`strategy.${trade.strategy}`);

        const formattedResultUSDT = `${trade.resultUSDT >= 0 ? '+' : ''}${formatNumber(trade.resultUSDT, 2)} USDT`;
        const resultColorType = trade.resultUSDT >= 0 ? 'positive' : 'negative';

        const takes = calculateTakes(trade.resultUSDT, trade.take, trade.entryPrice);

        const formattedEntryPrice = formatNumber(trade.entryPrice, 2);
        const formattedStopLoss = formatNumber(trade.stopLoss, 2);
        const formattedQuantity = formatNumber(trade.quantity, 3);
        const formattedAmountUSDT = `${formatNumber(trade.amountUSDT, 2)} USDT`;
        const formattedTake = formatNumber(trade.take, 2);

        const takeRatio = trade.entryPrice > 0
            ? `${formatNumber((trade.take / trade.entryPrice - 1) * 100, 1)}%`
            : '0%';

        const formattedDeposit = `${formatNumber(trade.deposit, 2)} USDT`;
        const formattedRiskPercent = `${formatNumber(trade.riskPercent, 2)}%`;
        const formattedRating = formatNumber(trade.rating, 1);
        const ratingType = trade.rating >= 4 ? 'high' : 'low';

        return {
            formattedId: trade.id,
            dateParts,
            positionLabel,
            formattedResultUSDT,
            takes,
            resultColorType,
            formattedEntryPrice,
            formattedStopLoss,
            formattedQuantity,
            formattedAmountUSDT,
            formattedTake,
            takeRatio,
            strategyLabel,
            formattedDeposit,
            formattedRiskPercent,
            formattedRating,
            ratingType
        };
    }, [t]);

    const getTakesLabel = useCallback((takes: number): string => {
        const absTakes = Math.abs(takes);
        const lastDigit = absTakes % 10;
        const lastTwoDigits = absTakes % 100;

        if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
            return t('table.takesPlural');
        }

        if (lastDigit === 1) {
            return t('table.takes');
        }

        if (lastDigit >= 2 && lastDigit <= 4) {
            return t('table.takesPlural');
        }

        return t('table.takesPlural');
    }, [t]);

    return {
        t,
        processTrade,
        getTakesLabel
    };
};

export interface IUseTradesTableReturn {
    t: ReturnType<typeof useTranslations<'home'>>;
    processTrade: (trade: Trade) => ProcessedTrade;
    getTakesLabel: (takes: number) => string;
}
