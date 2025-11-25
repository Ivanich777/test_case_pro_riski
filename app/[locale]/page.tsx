import { MOCK_STATISTICS } from '@/shared/data/mockStatistics';
import { MOCK_TRADES } from '@/shared/data/mockTrades';
import { Statistics } from '@/widgets/Statistics';
import { TradesTable } from '@/shared/ui/TradesTable';
import { Container, Box, Typography } from '@mui/material';
import { getTranslations } from 'next-intl/server';
import styles from './MainPage.module.scss';
import { DateRangeFilterWrapper } from '@/widgets/Filters/ui/DateRangeFilterWrapper';
import { TradeFiltersWrapper } from '@/widgets/Filters/ui/TradeFiltersWrapper';

export default async function Main() {
  const t = await getTranslations('home');

  return (
    <Container
      maxWidth="xl"
      disableGutters
      sx={{
        marginLeft: 0,
        paddingLeft: 0
      }}
      className={styles['main-page-container']}
    >
      <Box>
        <Typography sx={{ fontSize: '24px', fontWeight: 600 }} variant="h2">{t('title')}</Typography>
      </Box>
      <Box className={styles['main-page-section']}>
        <DateRangeFilterWrapper badgeValue={13} />
      </Box>
      <Box className={styles['main-page-section']}>
        <TradeFiltersWrapper />
      </Box>
      <Box>
        <Statistics cards={MOCK_STATISTICS.cards} />
      </Box>
      <Box className={styles['main-page-section']}>
        <TradesTable trades={MOCK_TRADES.slice(0, 10)} />
      </Box>
    </Container>
  );
}
