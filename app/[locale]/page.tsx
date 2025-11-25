import { Statistics } from '@/widgets/Statistics';
import { Container, Box } from '@mui/material';
import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';
import styles from './MainPage.module.scss';
import { DateRangeFilterWrapper } from '@/widgets/Filters/ui/DateRangeFilterWrapper';
import { TradeFiltersWrapper } from '@/widgets/Filters/ui/TradeFiltersWrapper';
import { TradesTableWrapper } from '@/widgets/TradesTableWrapper';
import { PageTitle } from '@/shared/ui/PageTitle';
import { calculateStatistics } from '@/shared/data/mockStatistics';
import { unstable_cache } from 'next/cache';

const getCachedStatistics = unstable_cache(
  async () => calculateStatistics(),
  ['statistics'],
  {
    /* Пускай будет раз в 15 минут */
    revalidate: 900,
    tags: ['statistics']
  }
);

export const revalidate = 900;

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'home' });

  const description = t('description');

  return {
    title: t('title'),
    description,
    openGraph: {
      title: t('title'),
      description,
      locale: locale === 'ru' ? 'ru_RU' : 'en_US',
      alternateLocale: locale === 'ru' ? 'en_US' : 'ru_RU',
    },
  };
}

export default async function Main({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'home' });
  const statistics = await getCachedStatistics();

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
        <PageTitle>
          {t('title')}
        </PageTitle>
      </Box>
      <Box className={styles['main-page-section']}>
        <DateRangeFilterWrapper badgeValue={13} />
      </Box>
      <Box className={styles['main-page-section']}>
        <TradeFiltersWrapper />
      </Box>
      <Box>
        <Statistics cards={statistics.cards} />
      </Box>
      <Box className={styles['main-page-section']}>
        <TradesTableWrapper />
      </Box>
    </Container>
  );
}
