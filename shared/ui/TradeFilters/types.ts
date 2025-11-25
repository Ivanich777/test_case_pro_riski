export interface ITradeFilters {
    instrument?: string;
    direction?: string;
    dealType?: string;
    tradeType?: string;
    dealStatus?: string;
    strategy?: string;
}

export interface ITradeFiltersProps {
    filters: ITradeFilters;
    onFiltersChange: (filters: ITradeFilters) => void;
}

