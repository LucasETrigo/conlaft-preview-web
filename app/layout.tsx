import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme/theme-provider';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Conlaft | Gestión y Prevención del lavado de activos',
    description:
        'Advanced KYC, KYB, and AML solutions for modern businesses. Streamline your compliance process with our AI-powered platform.',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en' className='scroll-smooth' suppressHydrationWarning>
            <body className={inter.className}>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
