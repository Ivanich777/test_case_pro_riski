import React from 'react';
import { Box } from '@mui/material';
import styles from './CardContent.module.scss';
import { ICardContentProps } from './types';

export const CardContent: React.FC<ICardContentProps> = ({ main, additional }) => {
    return (
        <Box className={styles['card-content']}>
            <Box className={styles['card-content__main']}>
                {main}
            </Box>
            {additional && (
                <Box className={styles['card-content__additional']}>
                    {additional}
                </Box>
            )}
        </Box>
    );
};

