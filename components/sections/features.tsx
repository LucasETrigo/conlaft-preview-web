'use client';

import { Card } from '@/components/ui/card';
import {
    Shield,
    Users,
    BarChart3,
    Sparkles,
    TrendingUp,
    Lock,
    Clock,
    Globe,
} from 'lucide-react';
import { AnimatedTestimonialsDemo } from './featuresCards';
import { Button } from '../ui/button';
import { IconCheck } from '@tabler/icons-react';
import Link from 'next/link';
import { useState } from 'react';

export function Features() {
    const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

    const benefits = [
        {
            text: 'Disminuye costos asociados al cumplimiento normativo',
            icon: TrendingUp,
        },
        {
            text: 'Mantente actualizado con las últimas regulaciones',
            icon: Globe,
        },
        { text: 'Anticipa los Riesgos y Toma Decisiones', icon: BarChart3 },
        { text: 'Informadas con CONLAFT', icon: Sparkles },
        { text: 'Simplifica tus procesos internos', icon: Clock },
        { text: 'Define tus propios umbrales de riesgo', icon: Lock },
    ];

    const features = [
        {
            icon: Shield,
            title: 'Seguridad Avanzada',
            description:
                'Protección de datos de nivel empresarial con encriptación end-to-end',
            color: 'from-blue-500 to-blue-600',
        },
        {
            icon: BarChart3,
            title: 'Análisis en Tiempo Real',
            description:
                'Monitoreo continuo y alertas instantáneas de transacciones sospechosas',
            color: 'from-cyan-500 to-cyan-600',
        },
        {
            icon: Users,
            title: 'Gestión de Clientes',
            description:
                'KYC/KYB automatizado con verificación de identidad instantánea',
            color: 'from-sky-500 to-sky-600',
        },
    ];

    return (
        <section className='relative py-32 overflow-hidden'>
            {/* Background with gradient and subtle grid */}
            <div className='absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900'></div>
            <div className='absolute inset-0 grid-background opacity-30'></div>

            {/* Decorative elements - Blue theme */}
            <div className='absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl'></div>
            <div className='absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl'></div>

            {/* Main Content */}
            <div className='container mx-auto px-4 relative z-10'>
                {/* Section Header */}
                <div className='text-center mb-20 fade-in'>
                    <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-gray-800 border border-blue-200 dark:border-blue-800 shadow-lg mb-6'>
                        <Sparkles className='h-4 w-4 text-blue-600' />
                        <span className='text-sm font-medium text-blue-600 dark:text-blue-400'>
                            Características Poderosas
                        </span>
                    </div>
                    <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold mb-6'>
                        <span className='text-gray-900 dark:text-white'>
                            ¿Qué es{' '}
                        </span>
                        <span className='bg-gradient-to-r from-blue-600 via-cyan-500 to-sky-500 bg-clip-text text-transparent'>
                            CONLAFT S.R.L.?
                        </span>
                    </h2>
                    <p className='text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto'>
                        Una plataforma integral diseñada para revolucionar tu
                        cumplimiento normativo
                    </p>
                </div>

                {/* Feature Cards Grid */}
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-20'>
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className='group relative fade-in'
                            style={{ animationDelay: `${index * 0.1}s` }}
                            onMouseEnter={() => setHoveredFeature(index)}
                            onMouseLeave={() => setHoveredFeature(null)}
                        >
                            <Card className='relative overflow-hidden border-2 border-gray-200 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl p-8 h-full group-hover:shadow-2xl group-hover:shadow-blue-500/20 group-hover:-translate-y-2'>
                                {/* Gradient overlay on hover */}
                                <div
                                    className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                                ></div>

                                {/* Icon */}
                                <div
                                    className={`relative w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br ${feature.color} p-0.5`}
                                >
                                    <div className='w-full h-full bg-white dark:bg-gray-900 rounded-2xl flex items-center justify-center'>
                                        <feature.icon className='h-8 w-8 text-blue-600' />
                                    </div>
                                </div>

                                {/* Content */}
                                <h3 className='text-2xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors'>
                                    {feature.title}
                                </h3>
                                <p className='text-gray-600 dark:text-gray-400 leading-relaxed'>
                                    {feature.description}
                                </p>

                                {/* Arrow indicator */}
                                <div className='absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity'>
                                    <div className='w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center'>
                                        <svg
                                            className='w-4 h-4 text-white'
                                            fill='none'
                                            stroke='currentColor'
                                            viewBox='0 0 24 24'
                                        >
                                            <path
                                                strokeLinecap='round'
                                                strokeLinejoin='round'
                                                strokeWidth={2}
                                                d='M9 5l7 7-7 7'
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    ))}
                </div>

                {/* Main Content Grid */}
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20'>
                    {/* Left: Description and Benefits */}
                    <div className='space-y-8 fade-in'>
                        <div>
                            <h3 className='text-3xl font-bold mb-6 text-gray-900 dark:text-white'>
                                Plataforma Especializada en PLA/FT
                            </h3>
                            <div className='space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed'>
                                <p>
                                    <span className='font-semibold text-blue-600 dark:text-blue-400'>
                                        CONLAFT S.R.L.
                                    </span>{' '}
                                    es una plataforma especializada en la
                                    prevención del lavado de activos y el
                                    financiamiento del terrorismo (PLA/FT).
                                    Nuestra solución reúne herramientas
                                    avanzadas para la gestión de datos, análisis
                                    de riesgos y cumplimiento normativo,
                                    diseñadas para empresas que necesitan
                                    garantizar la transparencia y proteger sus
                                    operaciones.
                                </p>
                                <p>
                                    Desde la supervisión de transacciones hasta
                                    la clasificación de riesgos, CONLAFT S.R.L.
                                    optimiza procesos críticos, simplificando el
                                    cumplimiento de las normativas más exigentes
                                    y fortaleciendo la seguridad en cada etapa
                                    del ciclo de vida del cliente.
                                </p>
                            </div>
                        </div>

                        {/* Benefits List */}
                        <div className='space-y-4'>
                            {benefits.map((benefit, index) => (
                                <div
                                    key={index}
                                    className='flex items-start gap-4 group p-4 rounded-2xl hover:bg-blue-50 dark:hover:bg-blue-950/30 transition-all duration-300'
                                >
                                    <div className='flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
                                        <IconCheck className='h-5 w-5 text-white' />
                                    </div>
                                    <div className='flex-1'>
                                        <p className='font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors'>
                                            {benefit.text}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <div className='pt-6'>
                            <Link href='/contacto'>
                                <Button
                                    size='lg'
                                    className='bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white shadow-xl hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 rounded-full px-8 group'
                                >
                                    Comenzar Ahora
                                    <svg
                                        className='ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform'
                                        fill='none'
                                        stroke='currentColor'
                                        viewBox='0 0 24 24'
                                    >
                                        <path
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            strokeWidth={2}
                                            d='M13 7l5 5m0 0l-5 5m5-5H6'
                                        />
                                    </svg>
                                </Button>
                            </Link>
                        </div>
                    </div>

                    {/* Right: Video */}
                    <div
                        className='relative fade-in'
                        style={{ animationDelay: '0.2s' }}
                    >
                        <div className='relative group'>
                            {/* Glow effect - Blue */}
                            <div className='absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl opacity-20 blur-2xl group-hover:opacity-30 transition-opacity'></div>

                            {/* Video container */}
                            <div className='relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800 group-hover:border-blue-500 dark:group-hover:border-blue-500 transition-colors duration-300'>
                                <video
                                    className='w-full aspect-video object-cover'
                                    controls
                                    poster='/path-to-video-thumbnail.jpg'
                                    src='/path-to-your-video.mp4'
                                >
                                    Your browser does not support the video tag.
                                </video>

                                {/* Play overlay */}
                                <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none'>
                                    <div className='w-20 h-20 rounded-full bg-white/30 backdrop-blur-xl flex items-center justify-center'>
                                        <svg
                                            className='w-10 h-10 text-white ml-1'
                                            fill='currentColor'
                                            viewBox='0 0 24 24'
                                        >
                                            <path d='M8 5v14l11-7z' />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floating stats - Blue theme */}
                        <div className='absolute -bottom-6 -left-6 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-6 border border-gray-200 dark:border-gray-800 backdrop-blur-xl'>
                            <div className='text-3xl font-bold text-blue-600 mb-1'>
                                100%
                            </div>
                            <div className='text-sm text-gray-600 dark:text-gray-400'>
                                Cumplimiento
                            </div>
                        </div>

                        <div className='absolute -top-6 -right-6 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-6 border border-gray-200 dark:border-gray-800 backdrop-blur-xl'>
                            <div className='text-3xl font-bold text-cyan-600 mb-1'>
                                24/7
                            </div>
                            <div className='text-sm text-gray-600 dark:text-gray-400'>
                                Monitoreo
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
