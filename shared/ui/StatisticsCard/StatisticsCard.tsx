import React from 'react';
import { Card, CardContent as MuiCardContent, Box } from '@mui/material';
import { StatisticsCard as StatisticsCardType, AdditionalInfo as AdditionalInfoType } from '@/shared/types/statistics';
import styles from './StatisticsCard.module.scss';
import cn from 'classnames';
import { useTranslations } from 'next-intl';
import { Icon } from '@/shared/ui/Icon';
import { AdditionalInfo } from '@/shared/ui/AdditionalInfo';
import { CardContent } from '@/shared/ui/CardContent';
import { CardText } from './components/CardText';

interface IStatisticsCardProps {
    card: StatisticsCardType;
}

const getValueColor = (changeType: 'positive' | 'negative' | 'neutral' = 'neutral'): string => {
    switch (changeType) {
        case 'positive':
            return '#329A85';
        case 'negative':
            return '#E2A742';
        case 'neutral':
            return '#1F2423';
        default:
            return '#1F2423';
    }
};

export const StatisticsCard: React.FC<IStatisticsCardProps> = ({ card }) => {
    const {
        title,
        value,
        changeType = 'neutral',
        badgeColor,
        descriptionIcon,
        titleIcon,
        currency = '',
        additionalInfo,
        showAsPercentage,
        isDoubleCard = false
    } = card;
    const t = useTranslations('home');

    const formatValue = (val: number | string): string => {
        if (typeof val === 'string') {
            if (val.startsWith('statistics.')) {
                return t(val as any);
            }
            return val;
        }

        if (showAsPercentage) {
            return `${val.toFixed(1)}%`;
        }

        if (currency) {
            if (currency === 'USDT') {
                const sign = val >= 0 ? '+' : '';
                return `${sign}${new Intl.NumberFormat('ru-RU', {
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0
                }).format(val)} USDT`;
            }
            return new Intl.NumberFormat('ru-RU', {
                style: 'currency',
                currency: currency,
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            }).format(val);
        }

        if (val % 1 === 0) {
            return new Intl.NumberFormat('ru-RU', {
                minimumFractionDigits: 0,
                maximumFractionDigits: 0
            }).format(val);
        }

        return new Intl.NumberFormat('ru-RU', {
            minimumFractionDigits: 1,
            maximumFractionDigits: 1
        }).format(val);
    };

    const valueColor = getValueColor(changeType);
    const hasBadge = !!badgeColor;
    const badgeInAdditional = typeof additionalInfo === 'object' && additionalInfo?.badgeColor;

    const renderMainContent = () => (
        <>
            <Box className={styles['statistics-card__header']}>
                <CardText variant="title">
                    {t(title)}
                </CardText>
                {titleIcon && (
                    <Icon
                        src={titleIcon}
                        width={14}
                        height={14}
                        alt={title}
                        className={styles['statistics-card__title-icon']}
                    />
                )}
            </Box>

            <Box className={styles['statistics-card__value-wrapper']}>
                {descriptionIcon && (
                    <Icon
                        src={descriptionIcon}
                        width={20}
                        height={20}
                        alt=""
                        className={styles['statistics-card__description-icon']}
                    />
                )}
                <CardText variant="value" color={valueColor}>
                    {formatValue(value)}
                </CardText>
                {!isDoubleCard && additionalInfo && typeof additionalInfo === 'string' && (
                    <AdditionalInfo>
                        {additionalInfo.startsWith('statistics.') ? t(additionalInfo as any) : additionalInfo}
                    </AdditionalInfo>
                )}
            </Box>
        </>
    );

    const renderAdditionalContent = () => {
        if (!isDoubleCard || typeof additionalInfo !== 'object') {
            return null;
        }

        const info = additionalInfo as AdditionalInfoType;
        const additionalValueColor = getValueColor(info.changeType);

        return (
            <>
                <Box className={styles['statistics-card__header']}>
                    <CardText variant="title">
                        {t(info.title)}
                    </CardText>
                </Box>
                <Box className={styles['statistics-card__value-wrapper']}>
                    <CardText variant="value" color={additionalValueColor}>
                        {info.value}
                    </CardText>
                </Box>
            </>
        );
    };

    return (
        <Card
            className={cn(
                styles['statistics-card'],
                { [styles['statistics-card--double']]: isDoubleCard }
            )}
            sx={{ backgroundColor: '#F0F5F4', boxShadow: 'none' }}
        >
            {hasBadge && !badgeInAdditional && (
                <Box
                    className={styles['statistics-card__badge']}
                    sx={{ backgroundColor: badgeColor }}
                />
            )}

            {badgeInAdditional && (
                <Box
                    className={styles['statistics-card__badge--right']}
                    sx={{ backgroundColor: (additionalInfo as AdditionalInfoType).badgeColor }}
                />
            )}

            <MuiCardContent className={styles['statistics-card__content']}>
                <CardContent
                    main={renderMainContent()}
                    additional={isDoubleCard ? renderAdditionalContent() : undefined}
                />
            </MuiCardContent>
        </Card>
    );
};
