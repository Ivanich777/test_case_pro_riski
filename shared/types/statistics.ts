export interface AdditionalInfo {
    title: string;
    value: string;
    changeType?: 'positive' | 'negative' | 'neutral';
    badgeColor?: string;
}

export interface StatisticsCard {
    id: string;
    title: string;
    value: number | string;
    changeType?: 'positive' | 'negative' | 'neutral';
    badgeColor?: string;
    descriptionIcon?: string;
    titleIcon?: string;
    currency?: string;
    additionalInfo?: AdditionalInfo | string;
    showAsPercentage?: boolean;
    isDoubleCard?: boolean;
}

export interface Statistics {
    myRating: number;
    totalTrades: number;
    profitUSDT: number;
    profitableTakes: number;
    averageProfit: number;
    rating: number;
    cards: StatisticsCard[];
}

