'use client';

import React from 'react';
import { Box, Pagination as MuiPagination, Typography, Stack } from '@mui/material';
import { useTranslations } from 'next-intl';
import styles from './Pagination.module.scss';
import { IPaginationProps } from './types';

export const Pagination: React.FC<IPaginationProps> = ({
    page,
    totalPages,
    total,
    pageSize,
    onPageChange
}) => {
    const t = useTranslations('home');

    const startItem = (page - 1) * pageSize + 1;
    const endItem = Math.min(page * pageSize, total);

    return (
        <Box className={styles['pagination']}>
            <Stack direction="row" spacing={2} alignItems="center" justifyContent="space-between" flexWrap="wrap">
                <Typography variant="body2" className={styles['pagination__info']}>
                    {t('pagination.showing', { start: startItem, end: endItem, total })}
                </Typography>
                <MuiPagination
                    count={totalPages}
                    page={page}
                    onChange={onPageChange}
                    color="primary"
                    size="medium"
                    showFirstButton
                    showLastButton
                />
            </Stack>
        </Box>
    );
};

