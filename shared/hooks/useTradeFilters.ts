import { useMemo, useCallback } from 'react';
import { useTranslations } from 'next-intl';
import { TRADE_FILTERS_CONFIG, FilterConfig } from '@/shared/config/tradeFiltersConfig';

interface TradeFilters {
    instrument?: string;
    direction?: string;
    dealType?: string;
    tradeType?: string;
    dealStatus?: string;
    strategy?: string;
}

interface IUseTradeFiltersProps {
    filters: TradeFilters;
    onFiltersChange: (filters: TradeFilters) => void;
}

interface FilterOptionWithLabel {
    value: string;
    label: string;
}

interface FilterConfigWithLabels extends Omit<FilterConfig, 'options'> {
    options: FilterOptionWithLabel[];
}

export interface IUseTradeFiltersReturn {
    filterConfigs: FilterConfigWithLabels[];
    handleFilterChange: (key: string, value: string) => void;
}

export const useTradeFilters = (props: IUseTradeFiltersProps): IUseTradeFiltersReturn => {
    const { filters, onFiltersChange } = props;
    const t = useTranslations('home.filters');

    const filterConfigs = useMemo<FilterConfigWithLabels[]>(() => {
        return TRADE_FILTERS_CONFIG.map((config) => ({
            ...config,
            options: config.options.map((option): FilterOptionWithLabel => ({
                value: option.value,
                label: option.value === 'all' 
                    ? t(option.labelKey)
                    : option.labelKey === 'BTC' || option.labelKey === 'TON' || option.labelKey === 'Griffan' || option.labelKey === 'Doge'
                        ? option.labelKey
                        : t(option.labelKey),
            })),
        }));
    }, [t]);

    const handleFilterChange = useCallback((key: string, value: string) => {
        onFiltersChange({
            ...filters,
            [key]: value,
        });
    }, [filters, onFiltersChange]);

    return {
        filterConfigs,
        handleFilterChange,
    };
};

