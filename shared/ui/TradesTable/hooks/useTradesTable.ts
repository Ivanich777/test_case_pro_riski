import { useTranslations, useLocale } from 'next-intl';
import { Trade, TradePosition, TradeStrategy } from '@/shared/types/trade';
import { formatDate, formatID, formatNumber, formatCurrency } from '@/shared/lib/formatters';

export const useTradesTable = () => {
    const t = useTranslations('home');
    const locale = useLocale();
    const localeString = locale === 'ru' ? 'ru-RU' : 'en-US';

    const calculateTakes = (resultUSDT: number): number => {
        return resultUSDT > 0 ? 1 : -1;
    };

    const calculateTakeRatio = (entryPrice: number, take: number, stopLoss: number): string => {
        const profit = take - entryPrice;
        const loss = entryPrice - stopLoss;
        if (loss === 0) return '0 к 1';
        const ratio = Math.round(profit / loss);
        return `${ratio} к 1`;
    };

    const getPositionLabel = (position: TradePosition): string => {
        return t(`position.${position}`);
    };

    const getStrategyLabel = (strategy: TradeStrategy): string => {
        return t(`strategy.${strategy}`);
    };

    const getResultColorType = (result: number): 'positive' | 'negative' => {
        return result >= 0 ? 'positive' : 'negative';
    };

    const getRatingType = (rating: number): 'high' | 'low' => {
        return rating >= 4 ? 'high' : 'low';
    };

    const formatTradeDate = (date: Date): { date: string; time: string } => {
        const dateString = formatDate(date, localeString);
        const parts = dateString.split('\n');
        return {
            date: parts[0],
            time: parts[1]
        };
    };

    const formatTradeNumber = (value: number, decimals: number = 2): string => {
        return formatNumber(value, decimals, localeString);
    };

    const formatTradeCurrency = (value: number): string => {
        return formatCurrency(value, localeString);
    };

    const processTrade = (trade: Trade) => {
        const takes = calculateTakes(trade.resultUSDT);
        const takeRatio = calculateTakeRatio(trade.entryPrice, trade.take, trade.stopLoss);
        const resultColorType = getResultColorType(trade.resultUSDT);
        const ratingType = getRatingType(trade.rating);
        const { date, time } = formatTradeDate(trade.entryDate);

        return {
            ...trade,
            formattedId: formatID(trade.id),
            dateParts: { date, time },
            takes,
            takeRatio,
            resultColorType,
            ratingType,
            positionLabel: getPositionLabel(trade.position),
            strategyLabel: getStrategyLabel(trade.strategy),
            formattedEntryPrice: formatTradeNumber(trade.entryPrice, 3),
            formattedStopLoss: formatTradeNumber(trade.stopLoss, 3),
            formattedQuantity: formatTradeNumber(trade.quantity, 2),
            formattedAmountUSDT: formatTradeCurrency(trade.amountUSDT),
            formattedTake: formatTradeNumber(trade.take, 4),
            formattedDeposit: formatTradeCurrency(trade.deposit),
            formattedRiskPercent: formatTradeNumber(trade.riskPercent, 1),
            formattedRating: formatTradeNumber(trade.rating, 1),
            formattedResultUSDT: formatTradeCurrency(trade.resultUSDT),
        };
    };

    return {
        t,
        localeString,
        processTrade,
        getTakesLabel: (takes: number) => {
            return takes === 1 ? t('table.takes') : t('table.takesPlural');
        }
    };
};

