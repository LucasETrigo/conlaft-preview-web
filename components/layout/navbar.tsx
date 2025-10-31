'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, ChevronDown, Sparkles } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
} from '@/components/ui/dropdown-menu';

const softwareOptions = [
    {
        label: 'Contadores',
        href: '/software/contadores',
        desc: 'Gestión integral para estudios contables.',
    },
    {
        label: 'Cooperativas',
        href: '/software/cooperativas',
        desc: 'Procesos, socios y compliance.',
    },
    {
        label: 'Fideicomisos',
        href: '/software/fideicomisos',
        desc: 'Trazabilidad y documentación.',
    },
    {
        label: 'Mutuales',
        href: '/software/mutuales',
        desc: 'Control operativo y regulatorio.',
    },
    {
        label: 'Juegos de Azar',
        href: '/software/juegosdeazar',
        desc: 'Prevención en entornos de riesgo.',
    },
    {
        label: 'SAC',
        href: '/software/sac',
        desc: 'Seguridad y auditoría continua.',
    },
];

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinkBase =
        'relative text-sm font-medium transition-colors flex items-center gap-1';
    const isActive = (href: string) =>
        href === '/' ? pathname === '/' : pathname?.startsWith(href);

    return (
        <nav
            className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
                scrolled
                    ? 'bg-white/90 dark:bg-slate-950/85 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-800 shadow-sm'
                    : 'bg-transparent backdrop-blur-sm border-transparent'
            }`}
        >
            <div className='container mx-auto px-4'>
                <div className='flex h-16 md:h-20 items-center justify-between gap-4'>
                    {/* Brand */}
                    <Link href='/' className='flex items-center gap-3 group'>
                        <div className='relative'>
                            <div className='absolute inset-0 bg-blue-500/25 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                            <Image
                                src='/negro.png'
                                alt='Conlaft'
                                width={42}
                                height={42}
                                className='rounded-full relative z-10 group-hover:scale-105 transition-transform'
                            />
                        </div>
                        <div className='flex flex-col leading-tight'>
                            <span className='text-lg font-bold text-slate-900 dark:text-white tracking-tight'>
                                Conlaft
                            </span>
                            <span className='text-[11px] uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500'>
                                PLA / FT PLATFORM
                            </span>
                        </div>
                    </Link>

                    {/* Desktop nav */}
                    <div className='hidden md:flex items-center gap-6'>
                        <Link
                            href='/'
                            className={`${navLinkBase} ${
                                isActive('/')
                                    ? 'text-blue-600 dark:text-blue-400'
                                    : 'text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400'
                            }`}
                        >
                            Inicio
                            {isActive('/') && (
                                <span className='absolute -bottom-1 left-0 h-0.5 w-full bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full' />
                            )}
                        </Link>

                        <Link
                            href='/nosotros'
                            className={`${navLinkBase} ${
                                isActive('/nosotros')
                                    ? 'text-blue-600 dark:text-blue-400'
                                    : 'text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400'
                            }`}
                        >
                            Nosotros
                            {isActive('/nosotros') && (
                                <span className='absolute -bottom-1 left-0 h-0.5 w-full bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full' />
                            )}
                        </Link>

                        {/* Software mega-ish */}
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <button
                                    className={`${navLinkBase} ${
                                        pathname?.startsWith('/contadores') ||
                                        pathname?.startsWith('/cooperativas') ||
                                        pathname?.startsWith('/fideicomisos') ||
                                        pathname?.startsWith('/mutuales') ||
                                        pathname?.startsWith('/juegosdeazar') ||
                                        pathname?.startsWith('/SAC')
                                            ? 'text-blue-600 dark:text-blue-400'
                                            : 'text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400'
                                    }`}
                                >
                                    Software
                                    <ChevronDown className='h-4 w-4 transition-transform group-data-[state=open]:rotate-180' />
                                    <span className='absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-blue-600 to-cyan-500 group-hover:w-full transition-all duration-300' />
                                </button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                                align='start'
                                className='mt-2 w-[460px] rounded-2xl bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl border border-slate-200 dark:border-slate-800 shadow-2xl p-3'
                            >
                                <div className='flex items-start justify-between mb-2 px-2'>
                                    <div>
                                        <p className='text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase'>
                                            Soluciones
                                        </p>
                                        <p className='text-sm text-slate-600 dark:text-slate-300'>
                                            Elegí el módulo según tu industria.
                                        </p>
                                    </div>
                                    <span className='rounded-full bg-blue-50 dark:bg-blue-500/10 text-[10px] px-3 py-1 text-blue-600 dark:text-blue-200 font-medium'>
                                        PLA/FT Ready
                                    </span>
                                </div>
                                <div className='grid grid-cols-2 gap-2'>
                                    {softwareOptions.map((opt) => (
                                        <Link
                                            key={opt.href}
                                            href={opt.href}
                                            className='flex gap-3 items-start rounded-xl px-3 py-3 hover:bg-blue-50 dark:hover:bg-blue-950/30 transition-colors'
                                        >
                                            <div className='space-y-1'>
                                                <p className='text-sm font-medium text-slate-800 dark:text-slate-100'>
                                                    {opt.label}
                                                </p>
                                                <p className='text-xs text-slate-500 dark:text-slate-400 leading-snug'>
                                                    {opt.desc}
                                                </p>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </DropdownMenuContent>
                        </DropdownMenu>

                        <Link
                            href='/preguntas'
                            className={`${navLinkBase} ${
                                isActive('/preguntas')
                                    ? 'text-blue-600 dark:text-blue-400'
                                    : 'text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400'
                            }`}
                        >
                            Preguntas
                            {isActive('/preguntas') && (
                                <span className='absolute -bottom-1 left-0 h-0.5 w-full bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full' />
                            )}
                        </Link>

                        <Button
                            asChild
                            className='rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg hover:shadow-blue-500/40 hover:from-blue-700 hover:to-cyan-600 transition-all'
                        >
                            <Link
                                href='/contacto'
                                className='flex items-center gap-2'
                            >
                                <Sparkles className='h-4 w-4' />
                                Contacto
                            </Link>
                        </Button>
                    </div>

                    {/* Mobile */}
                    <div className='md:hidden'>
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button
                                    variant='outline'
                                    size='icon'
                                    className='rounded-full border-2 border-slate-200 dark:border-slate-700 hover:border-blue-500 hover:bg-blue-50/40 dark:hover:bg-blue-900/20'
                                >
                                    <Menu className='h-5 w-5' />
                                    <span className='sr-only'>Menú</span>
                                </Button>
                            </SheetTrigger>
                            <SheetContent className='w-72 bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl border-l border-slate-200 dark:border-slate-800 pt-12'>
                                <div className='flex flex-col gap-5'>
                                    <Link
                                        href='/'
                                        className={`text-sm font-medium rounded-xl px-3 py-2 ${
                                            isActive('/')
                                                ? 'bg-blue-50 dark:bg-blue-950/30 text-blue-700 dark:text-blue-200'
                                                : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100/60 dark:hover:bg-slate-900/40'
                                        }`}
                                    >
                                        Inicio
                                    </Link>

                                    <Link
                                        href='/nosotros'
                                        className={`text-sm font-medium rounded-xl px-3 py-2 ${
                                            isActive('/nosotros')
                                                ? 'bg-blue-50 dark:bg-blue-950/30 text-blue-700 dark:text-blue-200'
                                                : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100/60 dark:hover:bg-slate-900/40'
                                        }`}
                                    >
                                        Nosotros
                                    </Link>

                                    <div>
                                        <p className='text-xs uppercase tracking-wide text-slate-400 dark:text-slate-500 mb-2 px-1'>
                                            Software
                                        </p>
                                        <div className='flex flex-col gap-2'>
                                            {softwareOptions.map((opt) => (
                                                <Link
                                                    key={opt.href}
                                                    href={opt.href}
                                                    className='flex items-center gap-3 rounded-xl px-3 py-2 hover:bg-blue-50 dark:hover:bg-blue-950/30 text-slate-700 dark:text-slate-100'
                                                >
                                                    <span className='text-sm font-medium'>
                                                        {opt.label}
                                                    </span>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>

                                    <Link
                                        href='/preguntas'
                                        className={`text-sm font-medium rounded-xl px-3 py-2 ${
                                            isActive('/preguntas')
                                                ? 'bg-blue-50 dark:bg-blue-950/30 text-blue-700 dark:text-blue-200'
                                                : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100/60 dark:hover:bg-slate-900/40'
                                        }`}
                                    >
                                        Preguntas
                                    </Link>

                                    <Button
                                        asChild
                                        className='rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md mt-3'
                                    >
                                        <Link
                                            href='/contacto'
                                            className='flex items-center gap-2'
                                        >
                                            <Sparkles className='h-4 w-4' />
                                            Contacto
                                        </Link>
                                    </Button>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </nav>
    );
}
