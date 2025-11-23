import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Inter } from 'next/font/google';
import Providers from './providers';
import { Header } from '@/widgets/Header';
import "./globals.css";

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
  weight: ['400'],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Pro Riski Test Case",
  description: "Панель управления и статистика сделок",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={
          `${geistSans.variable}
         ${inter.variable} antialiased`}>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
