import { Container, Box, Typography } from '@mui/material';
import { getTranslations } from 'next-intl/server';

export const dynamic = 'force-static';

export default async function Simulator() {
    const t = await getTranslations('simulator');

    return (
        <Container maxWidth="xl">
            <Box sx={{ py: 4 }}>
                <Typography variant="h1">{t('title')}</Typography>
            </Box>
        </Container>
    );
}
