import React from 'react';
import { Inter } from 'next/font/google';
import Head from 'next/head'; // Import the Head component
import { cn } from '@/lib/utils';
import '../styles/globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

interface Metadata {
  title: string;
  description: string;
}

const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <div className={cn('font-sans', inter.className)}>
        <Navbar />
        <div className="min-h-screen flex flex-col">{children}</div>
        <Footer />
      </div>
    </>
  )
}