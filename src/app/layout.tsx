import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Therapinc | AI-Powered Mental Healthcare Solutions',
  description:
    'Therapinc provides intelligent AI solutions and automated clinical workflow tools for mental healthcare professionals and practices.',
  keywords: [
    'Therapy AI',
    'Mental Healthcare',
    'Clinical Documentation',
    'HIPAA Compliant AI',
    'Therapinc',
  ],
  openGraph: {
    title: 'Therapinc | AI-Powered Mental Healthcare Solutions',
    description:
      'Empowering therapists with intelligent, HIPAA-compliant session documentation and client management tools.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} flex min-h-screen flex-col justify-between antialiased`}>
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
