'use client';

import React, { useState } from 'react';
import { TransitionPanel } from '../TransitionPanel';

export function TabsTransitionPanel() {
    const [activeIndex, setActiveIndex] = useState(0);

    const ITEMS = [
        {
            title: 'Calidad',
            subtitle: 'Política de calidad',
            content:
                'Todos los desarrollos se realizan con enfoque en seguridad, auditoría y mantenibilidad. Cada release pasa por controles internos.',
        },
        {
            title: 'Clientes',
            subtitle: 'Satisfacción del cliente',
            content:
                'Escuchamos los dolores reales de compliance y los llevamos a producto. El roadmap se alimenta de clientes.',
        },
        {
            title: 'Cumplimiento',
            subtitle: 'Cumplimiento legal y ético',
            content:
                'Alineados con normativas nacionales e internacionales para la prevención del lavado de activos y financiamiento del terrorismo.',
        },
        {
            title: 'Innovación',
            subtitle: 'Innovación responsable',
            content:
                'Adoptamos nuevas tecnologías cuando aportan valor claro: más trazabilidad, más rapidez o más control.',
        },
    ];

    return (
        <div className='w-full'>
            <div className='mb-5 flex flex-wrap gap-2'>
                {ITEMS.map((item, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                            activeIndex === index
                                ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow'
                                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                        }`}
                    >
                        {item.title}
                    </button>
                ))}
            </div>

            <div className='overflow-hidden rounded-2xl bg-slate-50/80 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800/40 p-6'>
                <TransitionPanel
                    activeIndex={activeIndex}
                    transition={{ duration: 0.28, ease: 'easeInOut' }}
                    variants={{
                        enter: { opacity: 0, y: 12, filter: 'blur(2px)' },
                        center: { opacity: 1, y: 0, filter: 'blur(0px)' },
                        exit: { opacity: 0, y: -12, filter: 'blur(2px)' },
                    }}
                >
                    {ITEMS.map((item, index) => (
                        <div key={index} className='space-y-2'>
                            <h3 className='text-lg font-semibold text-slate-900 dark:text-white'>
                                {item.subtitle}
                            </h3>
                            <p className='text-slate-600 dark:text-slate-200 leading-relaxed'>
                                {item.content}
                            </p>
                        </div>
                    ))}
                </TransitionPanel>
            </div>
        </div>
    );
}
