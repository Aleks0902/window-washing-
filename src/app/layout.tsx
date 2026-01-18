import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../styles/globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { siteConfig } from '@/config/site';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: siteConfig.business.name,
    template: `%s | ${siteConfig.business.name}`,
  },
  description: `Professional window washing services in ${siteConfig.business.serviceArea}. Residential and commercial window cleaning.`,
  keywords: ['window washing', 'window cleaning', 'pressure washing', siteConfig.business.serviceArea],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: siteConfig.business.name,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main id="main-content" className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
