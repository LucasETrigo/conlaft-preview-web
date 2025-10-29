'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, ChevronDown, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
} from '@/components/ui/dropdown-menu';

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const softwareOptions = [
        { label: 'Contadores', href: '/contadores', icon: '📊' },
        { label: 'Cooperativas', href: '/cooperativas', icon: '🤝' },
        { label: 'Fideicomisos', href: '/fideicomisos', icon: '🏛️' },
        { label: 'Mutuales', href: '/mutuales', icon: '💼' },
        { label: 'Juegos de Azar', href: '/juegosdeazar', icon: '🎲' },
        { label: 'SAC', href: '/SAC', icon: '🔒' },
    ];

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-500 ${
                scrolled
                    ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-2xl shadow-xl border-b border-gray-200/50 dark:border-gray-800/50'
                    : 'bg-transparent'
            }`}
        >
            <div className='container mx-auto px-4'>
                <div className='flex items-center justify-between h-20'>
                    {/* Logo */}
                    <Link
                        href='/'
                        className='flex items-center space-x-3 group'
                    >
                        <div className='relative'>
                            <div className='absolute inset-0 bg-blue-500/20 rounded-full blur-xl group-hover:bg-blue-500/30 transition-all duration-300'></div>
                            <Image
                                src='/negro.png'
                                alt='Conlaft Logo'
                                width={45}
                                height={45}
                                className='rounded-full relative z-10 group-hover:scale-110 transition-transform duration-300'
                            />
                        </div>
                        <span className='text-2xl font-bold bg-gradient-to-r from-black to-cyan-90000 bg-clip-text text-transparent'>
                            Conlaft
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className='hidden md:flex items-center space-x-8'>
                        <Link
                            href='/nosotros'
                            className='relative text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group'
                        >
                            Nosotros
                            <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 group-hover:w-full transition-all duration-300'></span>
                        </Link>

                        {/* Software Dropdown */}
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <button
                                    className='relative text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center group'
                                    aria-haspopup='menu'
                                >
                                    Software
                                    <ChevronDown className='ml-1 h-4 w-4 group-hover:rotate-180 transition-transform duration-300' />
                                    <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 group-hover:w-full transition-all duration-300'></span>
                                </button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                                className='bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border border-gray-200 dark:border-gray-800 shadow-2xl rounded-2xl p-2 min-w-[240px]'
                                sideOffset={12}
                            >
                                {softwareOptions.map((option, index) => (
                                    <DropdownMenuItem
                                        key={option.href}
                                        asChild
                                        className='rounded-xl hover:bg-blue-50 dark:hover:bg-blue-950/30 transition-colors cursor-pointer'
                                        style={{
                                            animationDelay: `${index * 50}ms`,
                                        }}
                                    >
                                        <Link
                                            href={option.href}
                                            className='flex items-center gap-3 px-4 py-3'
                                        >
                                            <span className='text-xl'>
                                                {option.icon}
                                            </span>
                                            <span className='font-medium'>
                                                {option.label}
                                            </span>
                                        </Link>
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>

                        <Link
                            href='/preguntas'
                            className='relative text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group'
                        >
                            Preguntas
                            <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 group-hover:w-full transition-all duration-300'></span>
                        </Link>

                        <Button
                            asChild
                            className='bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white shadow-lg hover:shadow-xl hover:shadow-blue-500/50 transition-all duration-300 rounded-full px-6'
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

                    {/* Mobile Menu */}
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button
                                variant='outline'
                                size='icon'
                                className='md:hidden rounded-full border-2 hover:border-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950/30 transition-all duration-300'
                            >
                                <Menu className='h-6 w-6' />
                                <span className='sr-only'>Toggle menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent
                            side='right'
                            className='bg-white/95 dark:bg-gray-900/95 backdrop-blur-2xl border-l border-gray-200 dark:border-gray-800'
                        >
                            <div className='flex flex-col space-y-6 mt-8'>
                                <Link
                                    href='/nosotros'
                                    className='text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors px-4 py-2 hover:bg-blue-50 dark:hover:bg-blue-950/30 rounded-xl'
                                >
                                    Nosotros
                                </Link>

                                <div className='space-y-2'>
                                    <p className='text-sm font-semibold text-gray-500 dark:text-gray-400 px-4'>
                                        Software
                                    </p>
                                    {softwareOptions.map((option) => (
                                        <Link
                                            key={option.href}
                                            href={option.href}
                                            className='flex items-center gap-3 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors px-4 py-2 hover:bg-blue-50 dark:hover:bg-blue-950/30 rounded-xl'
                                        >
                                            <span className='text-xl'>
                                                {option.icon}
                                            </span>
                                            {option.label}
                                        </Link>
                                    ))}
                                </div>

                                <Link
                                    href='/preguntas'
                                    className='text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors px-4 py-2 hover:bg-blue-50 dark:hover:bg-blue-950/30 rounded-xl'
                                >
                                    Preguntas
                                </Link>

                                <Button
                                    asChild
                                    className='bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white shadow-lg rounded-full mt-4'
                                >
                                    <Link
                                        href='/contacto'
                                        className='flex items-center justify-center gap-2'
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
        </nav>
    );
}
