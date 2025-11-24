import { Container, Box, Typography } from '@mui/material';
import { useTranslations } from 'next-intl';

export default function Markets() {
    const t = useTranslations('markets');

    return (
        <Container maxWidth="xl">
            <Box sx={{ py: 4 }}>
                <Typography variant="h1">{t('title')}</Typography>
            </Box>

            <Box sx={{ mb: 4 }}>
        
            </Box>
        </Container>
    );
}
