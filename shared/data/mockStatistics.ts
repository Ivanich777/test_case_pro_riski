import { Statistics, StatisticsCard } from '@/shared/types/statistics';
import { MOCK_TRADES } from './mockTrades';

const calculateStatistics = (): Statistics => {
    const allTrades = MOCK_TRADES;
    const totalTrades = allTrades.length;
    const profitUSDT = allTrades.reduce((sum, t) => sum + t.resultUSDT, 0);

    const profitableTrades = allTrades.filter(t => t.resultUSDT > 0);
    const profitableTakes = profitableTrades.length;


    /* TODO
    * Решил рассчитать среднюю прибыль, но не успеваю все грамотно сделать.
    * Нужно додумывать, если время останется
    * Додумывать нужно будет, как рассчитать среднюю прибыль, если сделки были с разными ценами
     */
    const averageProfit = totalTrades > 0 ? Math.round(profitUSDT / totalTrades) : 0;

    /* Процент прибыльных сделок */
    const inProfitPercent = totalTrades > 0 ? (profitableTakes / totalTrades) * 100 : 0;

    /* Среднее количество тейков */
    const averageTakes = totalTrades > 0 ? profitableTakes / totalTrades : 0;

    const cards: StatisticsCard[] = [
        {
            id: 'my-rating',
            title: 'statistics.myRating',
            titleIcon: '/assets/icons/ratingInfo.svg',
            value: 4.5,
            changeType: 'neutral',
            descriptionIcon: '/assets/icons/logo.svg'
        },
        {
            id: 'total-trades',
            title: 'statistics.totalTrades',
            value: 158,
            changeType: 'neutral',
        },
        {
            id: 'profit-usdt',
            title: 'statistics.profitUSDT',
            value: '+43',
            changeType: 'positive',
            additionalInfo: 'statistics.additionalTakes'
        },

        {
            id: 'in-profit-takes',
            title: 'statistics.inProfit',
            value: inProfitPercent,
            showAsPercentage: true,
            changeType: 'positive',
            isDoubleCard: true,
            additionalInfo: {
                title: 'statistics.takes',
                value: `~${averageTakes.toFixed(1)}`,
                changeType: 'negative',
                badgeColor: '#E2A742'
            }
        },
        {
            id: 'average-profit',
            title: 'statistics.averageProfit',
            value: `~${averageProfit}`,
            changeType: 'neutral',
            currency: 'USDT'
        },
        {
            id: 'rating',
            title: 'statistics.rating',
            value: 'statistics.ratingPlace',
            changeType: 'positive',
        }
    ];

    return {
        myRating: 4.5,
        totalTrades: 158,
        profitUSDT: 43,
        profitableTakes,
        averageProfit,
        rating: 884,
        cards
    };
};

export const MOCK_STATISTICS: Statistics = calculateStatistics();

export { calculateStatistics };

