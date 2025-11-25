import { makeAutoObservable } from 'mobx';
import { Trade, TradeFilters } from '@/shared/types/trade';
import { DateRangePreset } from '@/shared/ui/DateRangeFilter';
import { MOCK_TRADES } from '@/shared/data/mockTrades';

export class TradesStore {
    trades: Trade[] = [];
    filters: TradeFilters = {
        dateFrom: undefined,
        dateTo: undefined,
        instrument: undefined,
        position: undefined,
        strategy: undefined
    };
    selectedDatePreset: DateRangePreset = 'allTime';
    loading: boolean = false;
    error: string | null = null;
    page: number = 1;
    pageSize: number = 10;
    total: number = 0;
    totalPages: number = 0;

    constructor() {
        makeAutoObservable(this);
    }

    setTrades(trades: Trade[]) {
        this.trades = trades;
    }

    setFilters(filters: Partial<TradeFilters>) {
        this.filters = {
            ...this.filters,
            ...filters
        };
    }

    setSelectedDatePreset(preset: DateRangePreset) {
        this.selectedDatePreset = preset;
    }

    resetFilters() {
        this.filters = {
            dateFrom: undefined,
            dateTo: undefined,
            instrument: undefined,
            position: undefined,
            strategy: undefined
        };
        this.selectedDatePreset = 'allTime';
    }

    setLoading(loading: boolean) {
        this.loading = loading;
    }

    setError(error: string | null) {
        this.error = error;
    }

    setPage(page: number) {
        this.page = page;
    }

    setPageSize(pageSize: number) {
        this.pageSize = pageSize;
        this.page = 1;
    }

    async fetchTrades() {
        this.setLoading(true);
        this.setError(null);

        try {
            await new Promise(resolve => setTimeout(resolve, 300));

            let filteredTrades = [...MOCK_TRADES];

            if (this.filters.instrument) {
                filteredTrades = filteredTrades.filter(
                    trade => trade.instrument === this.filters.instrument
                );
            }

            if (this.filters.position) {
                filteredTrades = filteredTrades.filter(
                    trade => trade.position === this.filters.position
                );
            }

            if (this.filters.strategy) {
                filteredTrades = filteredTrades.filter(
                    trade => trade.strategy === this.filters.strategy
                );
            }

            if (this.filters.dateFrom) {
                const dateFrom = this.filters.dateFrom;
                filteredTrades = filteredTrades.filter(
                    trade => trade.entryDate >= dateFrom
                );
            }

            if (this.filters.dateTo) {
                const dateTo = this.filters.dateTo;
                filteredTrades = filteredTrades.filter(
                    trade => trade.entryDate <= dateTo
                );
    }

            filteredTrades.sort((a, b) => b.entryDate.getTime() - a.entryDate.getTime());

            this.total = filteredTrades.length;
            this.totalPages = Math.ceil(this.total / this.pageSize);

            const startIndex = (this.page - 1) * this.pageSize;
            const endIndex = startIndex + this.pageSize;
            const paginatedTrades = filteredTrades.slice(startIndex, endIndex);

            this.setTrades(paginatedTrades);
        } catch (error) {
            this.setError(error instanceof Error ? error.message : 'Ошибка загрузки данных');
            this.setTrades([]);
        } finally {
            this.setLoading(false);
        }
    }
}

