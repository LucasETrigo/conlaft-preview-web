'use client';

import React, { useState } from 'react';
import { preguntas } from './data';
import { Button } from '@/components/ui/MovingBorders';
import { Sparkles, HelpCircle } from 'lucide-react';

const PreguntasComponent = () => {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    return (
        <div className='relative min-h-screen'>
            {/* Background */}
            <div className='absolute inset-0 bg-gradient-to-b from-blue-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900'></div>
            <div className='absolute inset-0 grid-background opacity-30'></div>
            <div className='absolute inset-0 dot-grid opacity-20'></div>

            {/* Decorative orbs */}
            <div className='absolute top-20 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse'></div>
            <div
                className='absolute bottom-20 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse'
                style={{ animationDelay: '1s' }}
            ></div>

            <div className='py-20 w-full relative z-10 container mx-auto px-4'>
                {/* Header */}
                <div className='text-center mb-16 fade-in'>
                    <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-gray-800 border border-blue-200 dark:border-blue-800 shadow-lg mb-6'>
                        <HelpCircle className='h-4 w-4 text-blue-600' />
                        <span className='text-sm font-medium text-blue-600 dark:text-blue-400'>
                            Centro de Ayuda
                        </span>
                    </div>

                    <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4'>
                        <span className='text-gray-900 dark:text-white'>
                            Preguntas{' '}
                        </span>
                        <span className='bg-gradient-to-r from-blue-600 via-cyan-500 to-sky-500 bg-clip-text text-transparent'>
                            Frecuentes
                        </span>
                    </h1>

                    <p className='text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto'>
                        Encuentra respuestas rápidas a las preguntas más comunes
                        sobre nuestros servicios
                    </p>
                </div>

                {/* FAQ Grid */}
                <div className='w-full grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6'>
                    {preguntas.map((card, index) => (
                        <div
                            key={card.id}
                            className='fade-in'
                            style={{ animationDelay: `${index * 0.05}s` }}
                            onMouseEnter={() => setHoveredCard(card.id)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            <Button
                                duration={
                                    Math.floor(Math.random() * 10000) + 10000
                                }
                                borderRadius='1.5rem'
                                style={{
                                    backgroundColor: 'white',
                                    borderRadius: '1.5rem',
                                }}
                                className='flex-1 border-2 border-gray-200 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl'
                            >
                                <div className='flex flex-col p-6 gap-4 h-full'>
                                    {/* Icon */}
                                    <div className='flex justify-center'>
                                        <div className='relative w-20 h-20'>
                                            {/* Glow effect */}
                                            <div
                                                className={`absolute inset-0 bg-blue-500/20 rounded-2xl blur-xl transition-opacity ${
                                                    hoveredCard === card.id
                                                        ? 'opacity-100'
                                                        : 'opacity-0'
                                                }`}
                                            ></div>

                                            <img
                                                src={card.thumbnail}
                                                alt={card.title}
                                                className='relative w-full h-full object-contain transition-transform duration-300 hover:scale-110'
                                            />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className='flex-1'>
                                        <h2 className='text-start text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-3 leading-snug group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors'>
                                            {card.title}
                                        </h2>
                                        <p className='text-start text-gray-600 dark:text-gray-300 font-medium leading-relaxed'>
                                            {card.desc}
                                        </p>
                                    </div>

                                    {/* Read more indicator */}
                                    <div
                                        className={`flex items-center gap-2 text-blue-600 dark:text-blue-400 text-sm font-semibold transition-all ${
                                            hoveredCard === card.id
                                                ? 'opacity-100 translate-x-0'
                                                : 'opacity-0 -translate-x-2'
                                        }`}
                                    >
                                        <span>Leer más</span>
                                        <svg
                                            className='w-4 h-4'
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
                            </Button>
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <div
                    className='mt-20 text-center fade-in'
                    style={{ animationDelay: '0.6s' }}
                >
                    <div className='bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-3xl border border-blue-200 dark:border-blue-800 p-10 max-w-3xl mx-auto'>
                        <div className='flex items-center justify-center gap-2 mb-4'>
                            <Sparkles className='h-6 w-6 text-blue-600' />
                            <h3 className='text-2xl font-bold text-gray-900 dark:text-white'>
                                ¿Aún tienes preguntas?
                            </h3>
                        </div>
                        <p className='text-gray-600 dark:text-gray-300 mb-6 max-w-xl mx-auto'>
                            Nuestro equipo está aquí para ayudarte. Contáctanos
                            y resolveremos todas tus dudas.
                        </p>
                        <button className='bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105'>
                            Contactar Soporte
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PreguntasComponent;
