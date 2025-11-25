import { TradePosition, TradeStrategy } from '@/shared/types/trade';

export interface FilterOption {
    value: string;
    labelKey: string;
    disabled?: boolean;
}

export interface FilterConfig {
    key: string;
    labelKey: string;
    options: FilterOption[];
    disabled?: boolean;
}

export const TRADE_FILTERS_CONFIG: FilterConfig[] = [
    {
        key: 'instrument',
        labelKey: 'coins',
        options: [
            { value: 'all', labelKey: 'all' },
            { value: 'BTC', labelKey: 'BTC' },
            { value: 'TON', labelKey: 'TON' },
            { value: 'Griffan', labelKey: 'Griffan' },
            { value: 'Doge', labelKey: 'Doge' },
        ],
    },
    {
        key: 'direction',
        labelKey: 'directions',
        options: [
            { value: 'all', labelKey: 'all' },
            { value: TradePosition.LONG, labelKey: 'long' },
            { value: TradePosition.SHORT, labelKey: 'short' },
        ],
    },
    {
        key: 'dealType',
        labelKey: 'dealType',
        disabled: true,
        options: [
            { value: 'all', labelKey: 'all' },
            { value: 'spot', labelKey: 'spot' },
            { value: 'futures', labelKey: 'futures' },
        ],
    },
    {
        key: 'tradeType',
        labelKey: 'tradeType',
        disabled: true,
        options: [
            { value: 'all', labelKey: 'all' },
            { value: 'manual', labelKey: 'manual' },
            { value: 'auto', labelKey: 'auto' },
        ],
    },
    {
        key: 'dealStatus',
        labelKey: 'dealStatus',
        disabled: true,
        options: [
            { value: 'all', labelKey: 'all' },
            { value: 'open', labelKey: 'open' },
            { value: 'closed', labelKey: 'closed' },
        ],
    },
    {
        key: 'strategy',
        labelKey: 'strategy',
        options: [
            { value: 'all', labelKey: 'all' },
            { value: TradeStrategy.REBOUND, labelKey: 'rebound' },
            { value: TradeStrategy.BREAKOUT, labelKey: 'breakout' },
            { value: TradeStrategy.MOVING, labelKey: 'moving' },
        ],
    },
];

