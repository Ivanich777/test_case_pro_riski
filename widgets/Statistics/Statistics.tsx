'use client';

import React from 'react';
import { Box } from '@mui/material';
import { StatisticsCard } from '@/shared/ui/StatisticsCard';
import styles from './Statistics.module.scss';
import { IStatisticsProps } from './types';

export const Statistics: React.FC<IStatisticsProps> = ({ cards }) => {
    return (
        <Box className={styles['statistics']}>
            {cards.map((card) => (
                <Box
                    key={card.id}
                    className={styles['statistics__item']}
                >
                    <StatisticsCard card={card} />
                </Box>
            ))}
        </Box>
    );
};

