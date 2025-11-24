import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
  weight: ['400'],
});


export const metadata: Metadata = {
  title: "Pro Riski Test Case",
  description: "Панель управления и статистика сделок",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang='ru'>
      <body
        className={
          `${inter.variable} antialiased`
        }>
        {children}
      </body>
    </html>
  );
}
