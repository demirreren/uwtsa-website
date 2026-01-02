import type { Metadata } from 'next';
import { Space_Mono, Syne, Bebas_Neue } from 'next/font/google';
import './globals.css';
import { SITE_TITLE, SITE_DESCRIPTION, OG_IMAGE } from '@/config';

// Bold, expressive display font
const syne = Syne({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
  weight: ['400', '500', '600', '700', '800'],
});

// Iconic condensed font for big statements
const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
  weight: '400',
});

// Retro mono font for Y2K vibes
const spaceMono = Space_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  keywords: ['TSA', 'Turkish Students Association', 'University of Waterloo', 'UW', 'student club', 'Turkish culture', 'Waterloo'],
  authors: [{ name: 'TSA UW' }],
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: 'https://tsauw.ca',
    siteName: 'TSA UW',
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'TSA - Turkish Students Association at University of Waterloo',
      },
    ],
    locale: 'en_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${bebasNeue.variable} ${spaceMono.variable}`}>
      <body className="font-body bg-tsa-dark">{children}</body>
    </html>
  );
}
