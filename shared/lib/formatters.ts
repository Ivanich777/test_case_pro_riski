export const formatNumber = (value: number, decimals: number = 2, locale: string = 'ru-RU'): string => {
    return new Intl.NumberFormat(locale, {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals
    }).format(value);
};

export const formatCurrency = (value: number, locale: string = 'ru-RU'): string => {
    return formatNumber(value, 0, locale);
};

export const formatDate = (date: Date, locale: string = 'ru-RU'): string => {
    const d = new Date(date);
    const month = new Intl.DateTimeFormat(locale, { month: 'long' }).format(d);
    const day = d.getDate();
    const hours = d.getHours();
    const minutes = d.getMinutes();
    
    const hoursText = locale === 'ru-RU' 
        ? `${hours} ч`
        : `${hours} h`;
    const minutesText = locale === 'ru-RU'
        ? `${minutes} м`
        : `${minutes} m`;
    
    return `${day} ${month}\n${hoursText} ${minutesText}`;
};

export const formatID = (id: string): string => {
    return id.replace('TRADE-', '').replace(/^0+/, '');
};

