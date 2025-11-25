import { useCallback } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { DateRangePreset } from '@/shared/ui/DateRangeFilter/types';

export type DateRange = { from: Date; to: Date } | null;

export interface IUseDateRangeReturn {
    getDateRange: (preset: DateRangePreset) => DateRange;
    getPresetLabel: (preset: DateRangePreset) => string;
    formatBadgeValue: (value?: number) => string | undefined;
    getBadgeColor: (value?: number) => string | undefined;
}

const DATE_RANGE_MAP: Record<
    Exclude<DateRangePreset, 'allTime' | 'customRange'>,
    (today: Date) => DateRange
> = {
    today: (today) => {
        const to = new Date(today);
        to.setHours(23, 59, 59, 999);
        return { from: today, to };
    },
    yesterday: (today) => {
        const from = new Date(today);
        from.setDate(from.getDate() - 1);
        const to = new Date(from);
        to.setHours(23, 59, 59, 999);
        return { from, to };
    },
    week: (today) => {
        const from = new Date(today);
        from.setDate(from.getDate() - 7);
        const to = new Date(today);
        to.setHours(23, 59, 59, 999);
        return { from, to };
    },
    currentMonth: (today) => {
        const from = new Date(today.getFullYear(), today.getMonth(), 1);
        const to = new Date(today.getFullYear(), today.getMonth() + 1, 0);
        to.setHours(23, 59, 59, 999);
        return { from, to };
    },
};

export const useDateRange = (): IUseDateRangeReturn => {
    const t = useTranslations('home');
    const locale = useLocale();

    const getDateRange = useCallback((preset: DateRangePreset): DateRange => {
        if (preset === 'allTime' || preset === 'customRange') {
            return null;
        }

        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const rangeFn = DATE_RANGE_MAP[preset];
        return rangeFn ? rangeFn(today) : null;
    }, []);

    const getPresetLabel = useCallback((preset: DateRangePreset): string => {
        if (preset === 'currentMonth') {
            const date = new Date();
            const localeCode = locale === 'ru' ? 'ru-RU' : 'en-US';
            return new Intl.DateTimeFormat(localeCode, { month: 'long' }).format(date);
        }
        return t(`dateFilter.${preset}`);
    }, [t, locale]);

    const formatBadgeValue = useCallback((value?: number): string | undefined => {
        if (value === undefined) return undefined;
        return value >= 0 ? `+${value}` : `${value}`;
    }, []);

    const getBadgeColor = useCallback((value?: number): string | undefined => {
        if (value === undefined) return undefined;
        return value >= 0 ? '#329A85' : '#E25E42';
    }, []);

    return {
        getDateRange,
        getPresetLabel,
        formatBadgeValue,
        getBadgeColor,
    };
};

