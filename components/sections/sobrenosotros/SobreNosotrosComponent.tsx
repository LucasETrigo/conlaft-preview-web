'use client';

import React from 'react';
import { TabsTransitionPanel } from './TabsTransitionPanel';
import {
    Sparkles,
    ShieldCheck,
    Users,
    Target,
    Eye,
    Building2,
    CheckCircle2,
} from 'lucide-react';

const SobreNosotrosComponent = () => {
    const diferenciales = [
        {
            title: 'Regulatorio + Tech',
            desc: 'No solo desarrollamos, también interpretamos UIF, BCRA y estándares internacionales.',
            icon: <ShieldCheck className='h-5 w-5 text-blue-500' />,
        },
        {
            title: 'Producto vivo',
            desc: 'La plataforma evoluciona con los cambios normativos y con tu operación.',
            icon: <Sparkles className='h-5 w-5 text-cyan-500' />,
        },
        {
            title: 'Acompañamiento real',
            desc: 'Te ayudamos a implementar matrices, screening y clasificación, no te dejamos solo.',
            icon: <Users className='h-5 w-5 text-slate-900 dark:text-white' />,
        },
    ];

    const valores = [
        'Transparencia',
        'Rigurosidad',
        'Agilidad',
        'Orientación al cliente',
        'Innovación útil',
        'Confidencialidad',
    ];

    return (
        <div className='relative min-h-screen bg-slate-50 dark:bg-slate-950 overflow-hidden '>
            {/* background suave como el home */}
            <div className='absolute inset-0 bg-gradient-to-b from-blue-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900/40 dark:to-slate-950' />
            <div className='absolute inset-0 grid-background opacity-25 pointer-events-none' />
            <div className='absolute inset-0 dot-grid opacity-15 pointer-events-none' />
            <div className='absolute -top-24 -left-24 w-72 h-72 bg-blue-500/15 dark:bg-blue-500/10 blur-3xl rounded-full pointer-events-none' />
            <div className='absolute -bottom-24 -right-24 w-72 h-72 bg-cyan-500/15 dark:bg-cyan-500/10 blur-3xl rounded-full pointer-events-none' />

            {/* contenido */}
            <div className='relative z-10 container mx-auto px-4 lg:px-6 pt-28 pb-20 space-y-16'>
                {/* HERO */}
                <header className='grid lg:grid-cols-[1.1fr,0.9fr] gap-10 items-center'>
                    {/* texto */}
                    <div className='space-y-6'>
                        <div className='inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 dark:bg-slate-900/70 border border-blue-200/60 dark:border-blue-800/40 shadow-sm'>
                            <Sparkles className='h-4 w-4 text-blue-500' />
                            <span className='text-xs font-medium uppercase tracking-wide text-blue-600 dark:text-blue-200'>
                                Sobre Conlaft
                            </span>
                        </div>
                        <h1 className='text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white'>
                            Equipo experto en
                            <span className='block bg-gradient-to-r from-blue-600 via-cyan-500 to-sky-500 bg-clip-text text-transparent'>
                                cumplimiento y prevención PLA/FT
                            </span>
                        </h1>
                        <p className='text-slate-600 dark:text-slate-300 text-lg leading-relaxed max-w-2xl'>
                            Nacimos de un estudio contable y tributario con más
                            de tres décadas de experiencia y lo transformamos en
                            una plataforma tecnológica moderna. Combinamos
                            conocimiento normativo con diseño de producto.
                        </p>
                        <div className='flex flex-wrap gap-4'>
                            <div className='flex items-center gap-3'>
                                <span className='h-11 w-11 rounded-2xl bg-blue-500/10 dark:bg-blue-500/15 flex items-center justify-center'>
                                    <Building2 className='h-5 w-5 text-blue-600 dark:text-blue-200' />
                                </span>
                                <div>
                                    <p className='text-sm text-slate-500 dark:text-slate-400'>
                                        Más de
                                    </p>
                                    <p className='text-base font-semibold text-slate-900 dark:text-white'>
                                        30 años de base contable
                                    </p>
                                </div>
                            </div>
                            <div className='flex items-center gap-3'>
                                <span className='h-11 w-11 rounded-2xl bg-cyan-500/10 dark:bg-cyan-500/15 flex items-center justify-center'>
                                    <ShieldCheck className='h-5 w-5 text-cyan-600 dark:text-cyan-200' />
                                </span>
                                <div>
                                    <p className='text-sm text-slate-500 dark:text-slate-400'>
                                        Enfoque
                                    </p>
                                    <p className='text-base font-semibold text-slate-900 dark:text-white'>
                                        100% cumplimiento
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* panel info */}
                    <div className='bg-white/80 dark:bg-slate-900/60 backdrop-blur-xl rounded-3xl border border-slate-200/70 dark:border-slate-800/60 p-6 md:p-7 shadow-lg space-y-5'>
                        <h2 className='text-lg font-semibold text-slate-900 dark:text-white flex items-center gap-2'>
                            Por qué existimos
                        </h2>
                        <p className='text-sm text-slate-600 dark:text-slate-300 leading-relaxed'>
                            Detectamos que muchas organizaciones cumplían “a
                            mano”: planillas, mails, procesos sueltos. Eso pone
                            en riesgo la trazabilidad y el control.
                        </p>
                        <p className='text-sm text-slate-600 dark:text-slate-300 leading-relaxed'>
                            CONLAFT surge para **unificar** screening, matrices
                            de riesgo, legajos y reportes en un solo lugar.
                        </p>
                        <div className='grid grid-cols-2 gap-3 pt-2'>
                            <div className='rounded-2xl bg-slate-100/60 dark:bg-slate-800/30 p-3'>
                                <p className='text-xs text-slate-500 dark:text-slate-400'>
                                    Clientes activos
                                </p>
                                <p className='text-2xl font-bold text-slate-900 dark:text-white'>
                                    150+
                                </p>
                            </div>
                            <div className='rounded-2xl bg-slate-100/60 dark:bg-slate-800/30 p-3'>
                                <p className='text-xs text-slate-500 dark:text-slate-400'>
                                    Sectores
                                </p>
                                <p className='text-2xl font-bold text-slate-900 dark:text-white'>
                                    Fin / Leg / ONG
                                </p>
                            </div>
                        </div>
                    </div>
                </header>

                {/* DIFERENCIALES */}
                <section className='grid md:grid-cols-3 gap-6'>
                    {diferenciales.map((item) => (
                        <div
                            key={item.title}
                            className='group rounded-3xl bg-white/70 dark:bg-slate-900/40 backdrop-blur-xl border border-slate-200/70 dark:border-slate-800/50 p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-200'
                        >
                            <div className='flex items-center gap-3 mb-4'>
                                <div className='w-10 h-10 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center'>
                                    {item.icon}
                                </div>
                                <h3 className='text-base font-semibold text-slate-900 dark:text-white'>
                                    {item.title}
                                </h3>
                            </div>
                            <p className='text-sm text-slate-600 dark:text-slate-300 leading-relaxed'>
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </section>

                {/* Misión / Visión */}
                <section className='grid md:grid-cols-2 gap-8'>
                    <div className='h-full bg-white/85 dark:bg-slate-900/65 backdrop-blur-xl rounded-3xl border border-slate-200 dark:border-slate-800 p-7 shadow-md hover:border-blue-400/70 dark:hover:border-blue-400/50 transition-colors'>
                        <div className='flex items-center gap-3 mb-4'>
                            <span className='w-12 h-12 rounded-2xl bg-blue-500 flex items-center justify-center'>
                                <Target className='h-6 w-6 text-white' />
                            </span>
                            <h2 className='text-xl font-bold text-slate-900 dark:text-white'>
                                Misión
                            </h2>
                        </div>
                        <p className='text-slate-600 dark:text-slate-300 leading-relaxed'>
                            Ayudar a empresas, estudios y organismos a cumplir
                            con las exigencias de PLA/FT de forma ordenada,
                            auditable y moderna, sin depender de procesos
                            manuales.
                        </p>
                    </div>

                    <div className='h-full bg-white/85 dark:bg-slate-900/65 backdrop-blur-xl rounded-3xl border border-slate-200 dark:border-slate-800 p-7 shadow-md hover:border-cyan-400/70 dark:hover:border-cyan-400/50 transition-colors'>
                        <div className='flex items-center gap-3 mb-4'>
                            <span className='w-12 h-12 rounded-2xl bg-cyan-500 flex items-center justify-center'>
                                <Eye className='h-6 w-6 text-white' />
                            </span>
                            <h2 className='text-xl font-bold text-slate-900 dark:text-white'>
                                Visión
                            </h2>
                        </div>
                        <p className='text-slate-600 dark:text-slate-300 leading-relaxed'>
                            Convertirnos en la plataforma de referencia de
                            Latinoamérica para monitoreo, screening y gestión de
                            riesgo de clientes, adaptable a cambios
                            regulatorios.
                        </p>
                    </div>
                </section>

                {/* Valores */}
                <section className='bg-white/80 dark:bg-slate-900/40 backdrop-blur-xl rounded-3xl border border-slate-200 dark:border-slate-800 p-7 shadow-sm'>
                    <div className='flex items-center gap-3 mb-5'>
                        <span className='w-10 h-10 rounded-2xl bg-blue-500/10 dark:bg-blue-500/15 flex items-center justify-center'>
                            <CheckCircle2 className='h-5 w-5 text-blue-500' />
                        </span>
                        <div>
                            <h2 className='text-lg font-semibold text-slate-900 dark:text-white'>
                                Nuestros valores
                            </h2>
                            <p className='text-sm text-slate-500 dark:text-slate-300'>
                                Lo que guía nuestras decisiones de producto y
                                soporte.
                            </p>
                        </div>
                    </div>
                    <div className='flex flex-wrap gap-3'>
                        {valores.map((valor) => (
                            <span
                                key={valor}
                                className='px-4 py-2 rounded-full bg-slate-100/70 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-700/40 text-sm text-slate-700 dark:text-slate-100 hover:border-blue-400 hover:text-blue-700 dark:hover:text-blue-200 transition-all cursor-default'
                            >
                                {valor}
                            </span>
                        ))}
                    </div>
                </section>

                {/* Tabs (tu parte original, pero ahora envuelta) */}
                <section className='bg-white/85 dark:bg-slate-900/60 backdrop-blur-xl rounded-3xl border border-slate-200 dark:border-slate-800 p-7 md:p-9 shadow-md'>
                    <div className='mb-6 space-y-1'>
                        <h2 className='text-2xl font-bold text-slate-900 dark:text-white'>
                            Cultura, calidad y documentación
                        </h2>
                        <p className='text-slate-500 dark:text-slate-300 max-w-3xl'>
                            Documentamos nuestros principios para que los
                            clientes sepan cómo trabajamos y qué pueden esperar
                            de nosotros.
                        </p>
                    </div>
                    <TabsTransitionPanel />
                </section>
            </div>
        </div>
    );
};

export default SobreNosotrosComponent;
