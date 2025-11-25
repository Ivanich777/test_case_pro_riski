import { Trade, TradePosition, TradeStrategy } from '@/shared/types/trade';

const getRandomDate = (daysAgo: number = 0): Date => {
    const date = new Date();
    date.setDate(date.getDate() - daysAgo);
    date.setHours(Math.floor(Math.random() * 24));
    date.setMinutes(Math.floor(Math.random() * 60));
    return date;
};

const INSTRUMENTS = ['BTC', 'TON', 'Griffan', 'Doge'];
const STRATEGIES = [TradeStrategy.REBOUND, TradeStrategy.BREAKOUT, TradeStrategy.MOVING];

const generateTrade = (id: number): Trade => {
    const position = Math.random() > 0.5 ? TradePosition.LONG : TradePosition.SHORT;
    const instrument = INSTRUMENTS[Math.floor(Math.random() * INSTRUMENTS.length)];
    const strategy = STRATEGIES[Math.floor(Math.random() * STRATEGIES.length)];

    const entryPrice = Math.random() * 100000 + 1000;
    const quantity = Math.random() * 10 + 0.1;
    const amountUSDT = entryPrice * quantity;
    const deposit = amountUSDT * (0.5 + Math.random() * 0.5);
    const riskPercent = Math.random() * 5 + 0.5;

    const resultUSDT = (Math.random() - 0.3) * 1000;
    const stopLoss = entryPrice * (0.9 + Math.random() * 0.1);
    const take = entryPrice * (1.05 + Math.random() * 0.15);
    const rating = Math.random() * 3 + 2;

    return {
        id: `TRADE-${String(id).padStart(6, '0')}`,
        entryDate: getRandomDate(Math.floor(Math.random() * 30)),
        instrument,
        position,
        resultUSDT: Math.round(resultUSDT * 100) / 100,
        peakPercent: 100, /* Пусть пока останется 100 из 100 */
        entryPrice: Math.round(entryPrice * 100) / 100,
        stopLoss: Math.round(stopLoss * 100) / 100,
        quantity: Math.round(quantity * 1000) / 1000,
        amountUSDT: Math.round(amountUSDT * 100) / 100,
        take: Math.round(take * 100) / 100,
        strategy,
        deposit: Math.round(deposit * 100) / 100,
        riskPercent: Math.round(riskPercent * 100) / 100,
        rating
    };
};

export const generateMockTrades = (count: number = 100): Trade[] => {
    return Array.from({ length: count }, (_, i) => generateTrade(i + 1));
};

export const MOCK_TRADES: Trade[] = generateMockTrades(150);

