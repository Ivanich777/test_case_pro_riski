import { Container, Box, Typography } from '@mui/material';
import { useTranslations } from 'next-intl';

export default function Simulator() {
    const t = useTranslations('simulator');

    return (
        <Container maxWidth="xl">
            <Box sx={{ py: 4 }}>
                <Typography variant="h1">{t('title')}</Typography>
            </Box>

            <Box sx={{ mb: 4 }}>
            </Box>

            <Box sx={{ mb: 4 }}>
            </Box>

        </Container>
    );
}
