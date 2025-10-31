// app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Conlaft | Gestión y Prevención del lavado de activos',
    description: 'Advanced KYC, KYB, and AML solutions for modern businesses.',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en' className='scroll-smooth' suppressHydrationWarning>
            <body
                className={`${inter.className} bg-slate-50 dark:bg-slate-950 min-h-screen`}
            >
                {/* navbar fija arriba */}
                <Navbar />

                {/* fondo global */}
                <div className='fixed inset-0 -z-10 overflow-hidden pointer-events-none'>
                    {/* gradiente base */}
                    <div className='absolute inset-0 bg-gradient-to-b from-blue-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900/40 dark:to-slate-950' />
                    {/* grid y dots que ya usás */}
                    <div className='absolute inset-0 grid-background opacity-25' />
                    <div className='absolute inset-0 dot-grid opacity-15' />
                    {/* orbs */}
                    <div className='absolute -top-24 -left-24 w-72 h-72 bg-blue-500/15 dark:bg-blue-500/10 blur-3xl rounded-full' />
                    <div className='absolute -bottom-24 -right-24 w-72 h-72 bg-cyan-500/15 dark:bg-cyan-500/10 blur-3xl rounded-full' />
                </div>

                {/* contenido de las páginas */}
                <main className='pt-16 md:pt-20 min-h-[calc(100vh-220px)] relative z-10'>
                    {children}
                </main>

                {/* footer */}
                <Footer />
            </body>
        </html>
    );
}
