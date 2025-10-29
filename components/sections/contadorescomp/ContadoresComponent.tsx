'use client';

import React from 'react';
import { CardHoverEffectDemo } from './CardHoverEffectDemo';
import { Shield, CheckCircle, TrendingUp, Sparkles } from 'lucide-react';

const ContadoresComponent = () => {
    const features = [
        {
            icon: Shield,
            text: 'Cumplimiento con Resolución 42/2024 de la UIF',
        },
        {
            icon: CheckCircle,
            text: 'Identificación precisa de factores de riesgo',
        },
        {
            icon: TrendingUp,
            text: 'Matriz de riesgo automatizada',
        },
    ];

    return (
        <div className='relative min-h-screen'>
            {/* Background */}
            <div className='absolute inset-0 bg-gradient-to-b from-blue-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900'></div>
            <div className='absolute inset-0 grid-background opacity-30'></div>
            <div className='absolute inset-0 dot-grid opacity-20'></div>

            {/* Decorative orbs */}
            <div className='absolute top-20 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse'></div>
            <div
                className='absolute top-1/2 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse'
                style={{ animationDelay: '1s' }}
            ></div>

            <div className='container mx-auto px-6 pt-28 sm:pt-36 md:pt-44 space-y-12 pb-16 relative z-10'>
                {/* Header Section */}
                <div className='text-center fade-in max-w-5xl mx-auto'>
                    {/* Badge */}
                    <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-gray-800 border border-blue-200 dark:border-blue-800 shadow-lg mb-6'>
                        <Sparkles className='h-4 w-4 text-blue-600' />
                        <span className='text-sm font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wider'>
                            Software Para Contadores
                        </span>
                    </div>

                    {/* Title */}
                    <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6'>
                        <span className='text-gray-900 dark:text-white'>
                            El mejor software para prevenir el{' '}
                        </span>
                        <span className='block mt-2 bg-gradient-to-r from-blue-600 via-cyan-500 to-sky-500 bg-clip-text text-transparent'>
                            LAVADO DE DINERO
                        </span>
                        <span className='text-gray-900 dark:text-white'>
                            {' '}
                            y{' '}
                        </span>
                        <span className='bg-gradient-to-r from-blue-600 via-cyan-500 to-sky-500 bg-clip-text text-transparent'>
                            FINANCIACIÓN AL TERRORISMO
                        </span>
                    </h1>

                    {/* Description */}
                    <p className='text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-4xl mx-auto'>
                        El software sistematiza la política de conocimiento del
                        cliente, permitiendo a los contadores una gestión
                        eficiente y segura de la información, en cumplimiento
                        con la Resolución 42/2024 de la UIF. Utilizando
                        algoritmos avanzados, identifica de manera precisa los
                        factores de riesgo a los que está expuesto cada cliente.
                    </p>
                </div>

                {/* Features Grid */}
                <div
                    className='grid md:grid-cols-3 gap-6 max-w-5xl mx-auto fade-in'
                    style={{ animationDelay: '0.2s' }}
                >
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className='group bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl border-2 border-gray-200 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-500 p-6 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20 hover:-translate-y-1'
                        >
                            <div className='flex items-start gap-4'>
                                <div className='flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
                                    <feature.icon className='h-6 w-6 text-white' />
                                </div>
                                <p className='text-gray-700 dark:text-gray-300 font-medium leading-relaxed group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors'>
                                    {feature.text}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Additional Info Box */}
                <div
                    className='max-w-5xl mx-auto fade-in'
                    style={{ animationDelay: '0.3s' }}
                >
                    <div className='bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-3xl border border-blue-200 dark:border-blue-800 p-8 md:p-10 shadow-xl'>
                        <div className='flex items-start gap-4'>
                            <div className='flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center'>
                                <TrendingUp className='h-7 w-7 text-white' />
                            </div>
                            <div>
                                <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-3'>
                                    Matriz de Riesgo Inteligente
                                </h3>
                                <p className='text-gray-700 dark:text-gray-300 leading-relaxed'>
                                    Genera una matriz de riesgo ponderada que
                                    clasifica a los sujetos en categorías de
                                    <span className='font-semibold text-red-600 dark:text-red-400'>
                                        {' '}
                                        alto
                                    </span>
                                    ,
                                    <span className='font-semibold text-yellow-600 dark:text-yellow-400'>
                                        {' '}
                                        medio{' '}
                                    </span>
                                    y{' '}
                                    <span className='font-semibold text-green-600 dark:text-green-400'>
                                        bajo riesgo
                                    </span>
                                    . Esto facilita la toma de decisiones
                                    informadas y contribuye de manera efectiva a
                                    la prevención del lavado de dinero y la
                                    financiación del terrorismo.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Cards Demo Section */}
                <div className='fade-in' style={{ animationDelay: '0.4s' }}>
                    <CardHoverEffectDemo />
                </div>
            </div>
        </div>
    );
};

export default ContadoresComponent;
