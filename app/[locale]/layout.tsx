import Providers from '../providers';
import { Header } from '@/widgets/Header';
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
            <div className={styles['layout']}>
                <Header />
                <main className={styles['layout__main']}>
                    {children}
                </main>
            </div>
        </Providers>
    );
}