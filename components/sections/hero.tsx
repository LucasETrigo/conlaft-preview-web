'use client';

import { Button } from '@/components/ui/button';
import { InfiniteSliderBasic } from './sliderhero';
import { ImageComparisonSpring } from './ImageComparisonBasic';
import Link from 'next/link';
import { ArrowRight, Shield, Zap, Globe, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';

export function Hero() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth) * 100,
                y: (e.clientY / window.innerHeight) * 100,
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <section className='relative min-h-screen pt-28 sm:pt-36 md:pt-44 pb-16 overflow-hidden'>
            {/* Animated gradient background - Blue theme */}
            <div className='absolute inset-0 bg-gradient-to-br from-blue-50 via-cyan-50 to-slate-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-gray-900'></div>

            {/* Subtle grid pattern overlay */}
            <div className='absolute inset-0 grid-background opacity-40'></div>
            <div className='absolute inset-0 dot-grid opacity-30'></div>

            {/* Animated gradient orbs - Blue theme */}
            <div
                className='absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/30 rounded-full blur-3xl animate-pulse'
                style={{
                    transform: `translate(${mousePosition.x * 0.02}px, ${
                        mousePosition.y * 0.02
                    }px)`,
                    transition: 'transform 0.3s ease-out',
                }}
            ></div>
            <div
                className='absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/30 rounded-full blur-3xl animate-pulse'
                style={{
                    transform: `translate(-${mousePosition.x * 0.02}px, -${
                        mousePosition.y * 0.02
                    }px)`,
                    transition: 'transform 0.3s ease-out',
                    animationDelay: '1s',
                }}
            ></div>
            <div
                className='absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-sky-500/20 rounded-full blur-3xl animate-pulse'
                style={{
                    transform: `translate(-50%, -50%) translate(${
                        mousePosition.x * 0.01
                    }px, ${mousePosition.y * 0.01}px)`,
                    transition: 'transform 0.3s ease-out',
                    animationDelay: '2s',
                }}
            ></div>

            <div className='container mx-auto px-4 relative z-10'>
                {/* Main Grid Layout */}
                <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-12 mb-20'>
                    {/* Left Text Section */}
                    <div className='space-y-8 fade-in'>
                        {/* Badge */}
                        <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-blue-200 dark:border-blue-800 shadow-lg'>
                            <Sparkles className='h-4 w-4 text-blue-600' />
                            <span className='text-sm font-medium text-blue-600 dark:text-blue-400'>
                                Plataforma Líder en PLA/FT
                            </span>
                        </div>

                        {/* Main Heading */}
                        <h1 className='text-4xl md:text-6xl lg:text-7xl font-bold leading-tight'>
                            <span className='block text-gray-900 dark:text-white'>
                                La Solución
                            </span>
                            <span className='block bg-gradient-to-r from-blue-600 via-cyan-500 to-sky-500 bg-clip-text text-transparent'>
                                Líder en PLA/FT
                            </span>
                        </h1>

                        {/* Description */}
                        <p className='text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-xl leading-relaxed'>
                            Impulsa tu cumplimiento normativo con{' '}
                            <span className='font-semibold text-blue-600 dark:text-blue-400'>
                                CONLAFT S.R.L.
                            </span>
                            , un software diseñado para gestionar datos,
                            monitorear riesgos y asegurar operaciones en un
                            entorno global cada vez más exigente.
                        </p>

                        {/* Feature Pills */}
                        <div className='flex flex-wrap gap-3'>
                            <div className='flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl border border-gray-200 dark:border-gray-700'>
                                <Shield className='h-4 w-4 text-blue-600' />
                                <span className='text-sm font-medium'>
                                    Seguridad Total
                                </span>
                            </div>
                            <div className='flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl border border-gray-200 dark:border-gray-700'>
                                <Zap className='h-4 w-4 text-blue-600' />
                                <span className='text-sm font-medium'>
                                    Rápido & Eficiente
                                </span>
                            </div>
                            <div className='flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl border border-gray-200 dark:border-gray-700'>
                                <Globe className='h-4 w-4 text-blue-600' />
                                <span className='text-sm font-medium'>
                                    Alcance Global
                                </span>
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className='flex flex-col sm:flex-row gap-4 pt-4'>
                            <Link href='/contacto'>
                                <Button
                                    size='lg'
                                    className='bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white shadow-xl hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 rounded-full px-8 group'
                                >
                                    Comenzar Ahora
                                    <ArrowRight className='ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform' />
                                </Button>
                            </Link>
                            <Button
                                size='lg'
                                variant='outline'
                                className='rounded-full px-8 border-2 hover:border-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950/30 backdrop-blur-xl bg-white/60 dark:bg-gray-800/60 transition-all duration-300'
                            >
                                Ver Demo
                            </Button>
                        </div>

                        {/* Stats */}
                        <div className='grid grid-cols-3 gap-6 pt-8 border-t border-gray-200 dark:border-gray-800'>
                            <div>
                                <div className='text-3xl font-bold text-blue-600'>
                                    500+
                                </div>
                                <div className='text-sm text-gray-600 dark:text-gray-400'>
                                    Clientes
                                </div>
                            </div>
                            <div>
                                <div className='text-3xl font-bold text-blue-600'>
                                    99.9%
                                </div>
                                <div className='text-sm text-gray-600 dark:text-gray-400'>
                                    Uptime
                                </div>
                            </div>
                            <div>
                                <div className='text-3xl font-bold text-blue-600'>
                                    24/7
                                </div>
                                <div className='text-sm text-gray-600 dark:text-gray-400'>
                                    Soporte
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Image Section */}
                    <div
                        className='relative fade-in'
                        style={{ animationDelay: '0.2s' }}
                    >
                        <div className='relative z-10'>
                            <ImageComparisonSpring />
                        </div>

                        {/* Decorative elements - Blue theme */}
                        <div className='absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full opacity-20 blur-3xl animate-pulse'></div>
                        <div
                            className='absolute -bottom-4 -left-4 w-72 h-72 bg-gradient-to-br from-cyan-400 to-sky-400 rounded-full opacity-20 blur-3xl animate-pulse'
                            style={{ animationDelay: '1s' }}
                        ></div>
                    </div>
                </div>

                {/* Trusted By Section */}
                <div
                    className='pt-20 fade-in'
                    style={{ animationDelay: '0.4s' }}
                >
                    <div className='text-center mb-12'>
                        <p className='text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2'>
                            Confianza de Empresas Líderes
                        </p>
                        <h2 className='text-2xl md:text-3xl font-bold text-gray-900 dark:text-white'>
                            Empresas que confían en{' '}
                            <span className='text-blue-600'>Conlaft</span>
                        </h2>
                    </div>
                    <InfiniteSliderBasic />
                </div>
            </div>
        </section>
    );
}
