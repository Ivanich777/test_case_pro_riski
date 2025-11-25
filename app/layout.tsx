import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
  weight: ['400'],
});


export const metadata: Metadata = {
  title: {
    default: "Pro Riski Test Case",
    template: "%s | Pro Riski"
  },
  description: "Панель управления и статистика сделок",
  keywords: ["трейдинг", "криптовалюты", "статистика сделок", "аналитика"],
  authors: [{ name: "Pro Riski" }],
  openGraph: {
    type: "website",
    locale: "ru_RU",
    alternateLocale: "en_US",
    siteName: "Pro Riski",
    title: "Pro Riski Test Case",
    description: "Панель управления и статистика сделок",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pro Riski Test Case",
    description: "Панель управления и статистика сделок",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang='ru' suppressHydrationWarning>
      <body
        className={
          `${inter.variable} antialiased`
        }
        suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
