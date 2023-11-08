"use client";

import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import SupabaseProvider from '@/providers/SupabaseProvider';
import ClientProviders from '@/components/navbar/ClientProviders';

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
            {children}
          </SupabaseProvider>
        </body>
      </html>
    </ClientProviders>
  );
};
