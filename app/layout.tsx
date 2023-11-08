"use client";

import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import SupabaseProvider from '@/providers/SupabaseProvider';
import ClientProviders from '@/components/navbar/ClientProviders';
import TopHeader from '@/components/navbar/TopHeader';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pertanian.MY',
  description: 'Analisa Jumlah Hasil Pertanian',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClientProviders>
      <html lang="en">
        <body className={inter.className}>
          <SupabaseProvider>

            {/* <TopHeader/> */}
            {children}
          </SupabaseProvider>
        </body>
      </html>
    </ClientProviders>
  );
};
