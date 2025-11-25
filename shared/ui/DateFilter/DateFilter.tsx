import React from 'react';
import { TextField, Box } from '@mui/material';
import styles from './DateFilter.module.scss';

interface IDateFilterProps {
    labelFrom: string;
    labelTo: string;
    valueFrom?: Date | null;
    valueTo?: Date | null;
    onChangeFrom: (date: Date | null) => void;
    onChangeTo: (date: Date | null) => void;
    minDate?: Date;
    maxDate?: Date;
}

export const DateFilter: React.FC<IDateFilterProps> = ({
    labelFrom,
    labelTo,
    valueFrom,
    valueTo,
    onChangeFrom,
    onChangeTo,
    minDate,
    maxDate
}) => {
    const formatDateForInput = (date: Date | null | undefined): string => {
        if (!date) return '';
        const d = new Date(date);
        const year = d.getFullYear();
        const month = String(d.getMonth() + 1).padStart(2, '0');
        const day = String(d.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    const handleFromChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (value) {
            onChangeFrom(new Date(value));
        } else {
            onChangeFrom(null);
        }
    };

    const handleToChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (value) {
            onChangeTo(new Date(value));
        } else {
            onChangeTo(null);
        }
    };

    return (
        <Box className={styles['date-filter']}>
            <TextField
                label={labelFrom}
                type="date"
                value={formatDateForInput(valueFrom)}
                onChange={handleFromChange}
                InputLabelProps={{
                    shrink: true,
                }}
                inputProps={{
                    min: minDate ? formatDateForInput(minDate) : undefined,
                    max: maxDate ? formatDateForInput(maxDate) : undefined,
                }}
                className={styles['date-filter__input']}
                size="small"
            />
            <TextField
                label={labelTo}
                type="date"
                value={formatDateForInput(valueTo)}
                onChange={handleToChange}
                InputLabelProps={{
                    shrink: true,
                }}
                inputProps={{
                    min: valueFrom ? formatDateForInput(valueFrom) : minDate ? formatDateForInput(minDate) : undefined,
                    max: maxDate ? formatDateForInput(maxDate) : undefined,
                }}
                className={styles['date-filter__input']}
                size="small"
            />
        </Box>
    );
};

