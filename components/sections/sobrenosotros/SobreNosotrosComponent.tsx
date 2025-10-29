'use client';

import React from 'react';
import { TabsTransitionPanel } from './TabsTransitionPanel';
import { Building2, Target, Eye, Award, Sparkles } from 'lucide-react';

const SobreNosotrosComponent = () => {
    const valores = [
        'Confianza',
        'Orientación al cliente',
        'Normalización',
        'Liderazgo',
        'Adaptabilidad',
        'Fiabilidad',
        'Transparencia',
    ];

    return (
        <div className='relative min-h-screen'>
            {/* Background with subtle grid */}
            <div className='absolute inset-0 bg-gradient-to-b from-blue-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900'></div>
            <div className='absolute inset-0 grid-background opacity-30'></div>
            <div className='absolute inset-0 dot-grid opacity-20'></div>

            {/* Decorative orbs */}
            <div className='absolute top-20 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl'></div>
            <div className='absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl'></div>

            <div className='container mx-auto px-6 pt-28 sm:pt-36 md:pt-44 space-y-16 pb-16 relative z-10'>
                {/* Header Section */}
                <div className='text-center fade-in'>
                    <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-gray-800 border border-blue-200 dark:border-blue-800 shadow-lg mb-6'>
                        <Sparkles className='h-4 w-4 text-blue-600' />
                        <span className='text-sm font-medium text-blue-600 dark:text-blue-400'>
                            Conoce Nuestro Equipo
                        </span>
                    </div>
                    <h1 className='text-5xl md:text-6xl font-bold mb-4'>
                        <span className='text-gray-900 dark:text-white'>
                            Sobre{' '}
                        </span>
                        <span className='bg-gradient-to-r from-blue-600 via-cyan-500 to-sky-500 bg-clip-text text-transparent'>
                            Nosotros
                        </span>
                    </h1>
                </div>

                {/* Quienes Somos Section */}
                <section className='fade-in' style={{ animationDelay: '0.1s' }}>
                    <div className='bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-3xl border border-gray-200 dark:border-gray-800 p-8 md:p-12 shadow-xl hover:shadow-2xl transition-shadow duration-300'>
                        <div className='flex items-center gap-4 mb-6'>
                            <div className='w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center'>
                                <Building2 className='h-7 w-7 text-white' />
                            </div>
                            <h2 className='text-3xl font-bold text-gray-900 dark:text-white'>
                                Quiénes Somos
                            </h2>
                        </div>
                        <p className='text-gray-600 dark:text-gray-300 leading-relaxed text-lg'>
                            Somos un equipo de profesionales en ciencias
                            económicas que combina la vasta experiencia de
                            contadores con más de 35 años en el rubro con la
                            innovación y el dinamismo de jóvenes talentos.
                            Contamos con una alta capacitación en políticas de
                            prevención de lavado de activos y financiación del
                            terrorismo, habiendo sido formados por especialistas
                            de renombre internacional. Nuestro equipo ha
                            participado en la creación de diversos software
                            contables, tributarios y laborales. Además, hemos
                            desarrollado soluciones innovadoras para la
                            prevención del lavado de dinero y la financiación
                            del terrorismo, adaptadas a las necesidades de
                            nuestros clientes y a los estándares más exigentes
                            del mercado.
                        </p>
                    </div>
                </section>

                {/* Misión y Visión Grid */}
                <div className='grid md:grid-cols-2 gap-8'>
                    {/* Misión */}
                    <section
                        className='fade-in'
                        style={{ animationDelay: '0.2s' }}
                    >
                        <div className='h-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-3xl border border-gray-200 dark:border-gray-800 p-8 md:p-10 shadow-xl hover:shadow-2xl hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300 group'>
                            <div className='flex items-center gap-4 mb-6'>
                                <div className='w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform'>
                                    <Target className='h-7 w-7 text-white' />
                                </div>
                                <h2 className='text-3xl font-bold text-gray-900 dark:text-white'>
                                    Misión
                                </h2>
                            </div>
                            <p className='text-gray-600 dark:text-gray-300 leading-relaxed text-lg'>
                                En Conlaft, nuestra misión es proporcionar
                                soluciones innovadoras y eficientes para la
                                prevención del lavado de dinero y la
                                financiación del terrorismo. Nos dedicamos a
                                apoyar a nuestros clientes en el cumplimiento de
                                las regulaciones y en la gestión de riesgos,
                                contribuyendo a un entorno financiero más seguro
                                y transparente.
                            </p>
                        </div>
                    </section>

                    {/* Visión */}
                    <section
                        className='fade-in'
                        style={{ animationDelay: '0.3s' }}
                    >
                        <div className='h-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-3xl border border-gray-200 dark:border-gray-800 p-8 md:p-10 shadow-xl hover:shadow-2xl hover:border-cyan-500 dark:hover:border-cyan-500 transition-all duration-300 group'>
                            <div className='flex items-center gap-4 mb-6'>
                                <div className='w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-sky-500 flex items-center justify-center group-hover:scale-110 transition-transform'>
                                    <Eye className='h-7 w-7 text-white' />
                                </div>
                                <h2 className='text-3xl font-bold text-gray-900 dark:text-white'>
                                    Visión
                                </h2>
                            </div>
                            <p className='text-gray-600 dark:text-gray-300 leading-relaxed text-lg'>
                                Aspiramos a ser líderes en la creación de
                                software especializado en la prevención de
                                delitos económicos y financieros a nivel global.
                                Nos comprometemos a seguir desarrollando
                                herramientas avanzadas que se adapten a las
                                necesidades cambiantes del mercado y que ayuden
                                a nuestros clientes a mantenerse un paso
                                adelante en la lucha contra el fraude, el lavado
                                de dinero y el terrorismo.
                            </p>
                        </div>
                    </section>
                </div>

                {/* Valores Section */}
                <section className='fade-in' style={{ animationDelay: '0.4s' }}>
                    <div className='bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-3xl border border-gray-200 dark:border-gray-800 p-8 md:p-12 shadow-xl'>
                        <div className='flex items-center gap-4 mb-10'>
                            <div className='w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center'>
                                <Award className='h-7 w-7 text-white' />
                            </div>
                            <h2 className='text-3xl font-bold text-gray-900 dark:text-white'>
                                Nuestros Valores
                            </h2>
                        </div>

                        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
                            {valores.map((valor, index) => (
                                <div
                                    key={index}
                                    className='group relative overflow-hidden bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-2xl p-6 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300 hover:shadow-xl hover:-translate-y-1'
                                    style={{
                                        animationDelay: `${index * 0.05}s`,
                                    }}
                                >
                                    {/* Background gradient on hover */}
                                    <div className='absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity'></div>

                                    <div className='relative flex flex-col items-center text-center space-y-4'>
                                        <div className='w-14 h-14 flex items-center justify-center bg-gradient-to-br from-blue-500 to-cyan-500 text-white rounded-2xl text-xl font-bold shadow-lg group-hover:scale-110 transition-transform'>
                                            {index + 1}
                                        </div>
                                        <h3 className='text-lg font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors'>
                                            {valor}
                                        </h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Política Calidad Section */}
                <section className='fade-in' style={{ animationDelay: '0.5s' }}>
                    <div className='bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-3xl border border-gray-200 dark:border-gray-800 p-8 md:p-12 shadow-xl'>
                        <h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-8'>
                            Política de Calidad
                        </h2>
                        <TabsTransitionPanel />
                    </div>
                </section>
            </div>
        </div>
    );
};

export default SobreNosotrosComponent;
