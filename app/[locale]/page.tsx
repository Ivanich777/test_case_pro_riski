import { MOCK_STATISTICS } from '@/shared/data/mockStatistics';
import { Statistics } from '@/widgets/Statistics';
import { Container, Box, Typography } from '@mui/material';
import { getTranslations } from 'next-intl/server';
import styles from './MainPage.module.scss';
import { DateRangeFilterWrapper } from '@/widgets/Filters/ui/DateRangeFilterWrapper';
import { TradeFiltersWrapper } from '@/widgets/Filters/ui/TradeFiltersWrapper';
import { TradesTableWrapper } from '@/widgets/TradesTableWrapper';

export default async function Main() {
  const t = await getTranslations('home');

  return (
    <Container
      disableGutters
      sx={{
        marginLeft: 0,
        marginRight: 0,
        paddingLeft: 0,
        paddingRight: 0,
        width: '100%',
        maxWidth: '100%'
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
        <TradesTableWrapper />
      </Box>
    </Container>
  );
}
