import type { Metadata } from 'next';
import { Outfit, DM_Sans } from 'next/font/google';
import './globals.css';
import { SITE_TITLE, SITE_DESCRIPTION, OG_IMAGE } from '@/config';

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
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
    <html lang="en" className={`${outfit.variable} ${dmSans.variable}`}>
      <body className="font-body">{children}</body>
    </html>
  );
}

