export type DateRangePreset = 'today' | 'yesterday' | 'week' | 'currentMonth' | 'allTime' | 'customRange';

export interface IDateRangeFilterProps {
    value?: DateRangePreset;
    onChange: (preset: DateRangePreset, dateFrom?: Date, dateTo?: Date) => void;
    badgeValue?: number;
}

