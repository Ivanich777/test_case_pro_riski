import Providers from '../providers';
import { Header } from '@/widgets/Header';
import { Box } from '@mui/material';
import { getMessages } from "next-intl/server";
import styles from './Layout.module.scss';

export default async function LocaleLayout({
    children,
    params
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>
}) {
    const { locale } = await params;
    const messages = await getMessages({ locale });

    return (
        <Providers locale={locale} messages={messages}>
            <Box className={styles['layout']}>
                <Header />
                <Box component="main" className={styles['layout__main']}>
                    {children}
                </Box>
            </Box>
        </Providers>
    );
}