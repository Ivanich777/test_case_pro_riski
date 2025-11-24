import { Container, Box, Typography, Button } from '@mui/material';
import { Link } from '@/i18n/routing';
import { getTranslations } from 'next-intl/server';
import { AppRoutes } from '@/shared/lib/routes';

const NotFoundPage = async () => {
    const t = await getTranslations('notFound');

    return (
        <Container maxWidth="xl">
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: 'calc(100vh - 200px)',
                    py: 8,
                    textAlign: 'center'
                }}
            >
                <Typography
                    variant="h1"
                    sx={{
                        fontSize: { xs: '4rem', sm: '6rem', md: '8rem' },
                        fontWeight: 700,
                        color: 'text.secondary',
                        lineHeight: 1,
                        mb: 2
                    }}
                >
                    404
                </Typography>

                <Typography
                    variant="h2"
                    sx={{
                        mb: 2,
                        fontWeight: 600
                    }}
                >
                    {t('title')}
                </Typography>

                <Typography
                    variant="body1"
                    sx={{
                        color: 'text.secondary',
                        mb: 4,
                        maxWidth: '500px'
                    }}
                >
                    {t('description')}
                </Typography>

                <Link href={AppRoutes.HOME} style={{ textDecoration: 'none' }}>
                    <Button
                        variant="contained"
                        size="large"
                        sx={{
                            px: 4,
                            py: 1.5,
                            borderRadius: 2
                        }}
                    >
                        {t('back-to-home')}
                    </Button>
                </Link>
            </Box>
        </Container>
    );
}

export default NotFoundPage;