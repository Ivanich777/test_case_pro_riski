'use client';

import React from 'react';
import { Box } from '@mui/material';
import { StatisticsCard } from '@/shared/ui/StatisticsCard';
import { StatisticsCard as StatisticsCardType } from '@/shared/types/statistics';
import styles from './Statistics.module.scss';

interface IStatisticsProps {
    cards: StatisticsCardType[];
}

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

