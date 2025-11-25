'use client';

import React from 'react';
import { Box, Pagination as MuiPagination, Typography, Stack } from '@mui/material';
import { useTranslations } from 'next-intl';
import styles from './Pagination.module.scss';

interface IPaginationProps {
    page: number;
    totalPages: number;
    totalItems: number;
    pageSize: number;
    onChange: (page: number) => void;
}

export const Pagination: React.FC<IPaginationProps> = ({
    page,
    totalPages,
    totalItems,
    pageSize,
    onChange
}) => {
    const t = useTranslations('home');

    const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
        onChange(value);
    };

    const startItem = (page - 1) * pageSize + 1;
    const endItem = Math.min(page * pageSize, totalItems);

    return (
        <Box className={styles['pagination']}>
            <Stack direction="row" spacing={2} alignItems="center" justifyContent="space-between" flexWrap="wrap">
                <Typography variant="body2" className={styles['pagination__info']}>
                    {t('pagination.showing', { start: startItem, end: endItem, total: totalItems })}
                </Typography>
                <MuiPagination
                    count={totalPages}
                    page={page}
                    onChange={handleChange}
                    color="primary"
                    size="medium"
                    showFirstButton
                    showLastButton
                />
            </Stack>
        </Box>
    );
};

