'use client';
import React, { useState } from 'react';
import { TransitionPanel } from '../TransitionPanel';

export function TabsTransitionPanel() {
    const [activeIndex, setActiveIndex] = useState(0);

    const ITEMS = [
        {
            title: 'Valores',
            subtitle: 'Nuestros Valores',
            content:
                'Confianza - Orientación al cliente - Normalización - Liderazgo - Adaptabilidad - Fiabilidad - Transparencia.',
        },
        {
            title: 'Política de Calidad',
            subtitle: 'Política de Calidad',
            content:
                'En Conlaft, nos dedicamos al desarrollo de software de alta calidad con un enfoque ético y de integridad. Nuestro compromiso no se limita a la excelencia técnica; nos esforzamos por mantener altos estándares éticos en cada proceso.',
        },
        {
            title: 'Principios',
            subtitle: 'Satisfacción del cliente',
            content:
                'Buscamos la satisfacción total de nuestros clientes ofreciendo software que se ajuste a sus necesidades.',
        },
        {
            title: 'Creatividad',
            subtitle: 'Creatividad e innovación',
            content:
                'Adoptamos una filosofía de creatividad, innovación y competitividad, mejorando constantemente para adaptarnos a un entorno tecnológico en evolución.',
        },
        {
            title: 'Cumplimiento',
            subtitle: 'Cumplimiento legal',
            content:
                'Nos comprometemos a cumplir con todas las obligaciones legales y reglamentarias, colaborando activamente en la prevención y detección de actividades ilícitas como el lavado de dinero, fraude y financiación al terrorismo. Desde la dirección, comunicamos esta política a todo nuestro equipo de Conlaft, asegurándonos de su disponibilidad para nuestros clientes y el público en general.',
        },
    ];

    return (
        <div className='w-full'>
            {/* Tabs Buttons */}
            <div className='mb-6 flex flex-wrap gap-2'>
                {ITEMS.map((item, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20 ${
                            activeIndex === index
                                ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/30 scale-105'
                                : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-gray-200'
                        }`}
                    >
                        {item.title}
                    </button>
                ))}
            </div>

            {/* Transition Panel */}
            <div className='overflow-hidden rounded-2xl bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700 p-8 shadow-lg'>
                <TransitionPanel
                    activeIndex={activeIndex}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    variants={{
                        enter: { opacity: 0, y: 20, filter: 'blur(4px)' },
                        center: { opacity: 1, y: 0, filter: 'blur(0px)' },
                        exit: { opacity: 0, y: -20, filter: 'blur(4px)' },
                    }}
                >
                    {ITEMS.map((item, index) => (
                        <div key={index} className='py-2'>
                            <h3 className='mb-4 text-2xl font-bold text-blue-600 dark:text-blue-400'>
                                {item.subtitle}
                            </h3>
                            <p className='text-gray-700 dark:text-gray-300 leading-relaxed text-lg'>
                                {item.content}
                            </p>
                        </div>
                    ))}
                </TransitionPanel>
            </div>
        </div>
    );
}
