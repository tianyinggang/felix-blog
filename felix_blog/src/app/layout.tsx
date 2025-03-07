import { Analytics } from '@vercel/analytics/react';
import { inter, robotoMono } from '@/lib/fonts';
import { ThemeProvider } from '@/components/theme-provider';
import '@/styles/globals.css';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Sat Naing - Full Stack Developer',
    template: '%s | Sat Naing',
  },
  description: 'Personal website and blog of Sat Naing, a full-stack developer.',
  keywords: ['Next.js', 'React', 'JavaScript', 'TypeScript', 'Web Development', 'Portfolio'],
  authors: [
    {
      name: 'Sat Naing',
      url: 'https://satnaing.dev',
    },
  ],
  creator: 'Sat Naing',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://satnaing.dev',
    title: 'Sat Naing - Full Stack Developer',
    description: 'Personal website and blog of Sat Naing, a full-stack developer.',
    siteName: 'Sat Naing',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sat Naing - Full Stack Developer',
    description: 'Personal website and blog of Sat Naing, a full-stack developer.',
    creator: '@satnaing',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${robotoMono.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}