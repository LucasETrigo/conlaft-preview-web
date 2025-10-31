'use client';

import React, { useEffect, useState } from 'react';
import { ContactForm } from '@/components/sections/contacto/ContactForm';

const ContactoPage = () => {
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
        // 👇 IMPORTANT: relative + bg
        <div className='relative min-h-screen '>
            {/* 👇 CONTENT ON TOP */}
            <section className='relative z-10 pt-10 lg:pt-16 pb-12'>
                <div className='container mx-auto px-4'>
                    <div className='flex flex-wrap items-center justify-between gap-4 mb-6'>
                        <div className='rounded-full bg-white/70 dark:bg-slate-900/50 border border-slate-200/60 dark:border-slate-800/60 px-4 py-2 text-sm text-slate-600 dark:text-slate-200 shadow-sm'>
                            Tiempo de respuesta:{' '}
                            <span className='font-semibold text-blue-600 dark:text-blue-300'>
                                24 hs hábiles
                            </span>
                        </div>
                    </div>

                    <div className='grid lg:grid-cols-[1.1fr,0.6fr] gap-10 items-start'>
                        {/* form */}
                        <ContactForm />

                        {/* panel lateral */}
                        <aside className='space-y-6'>
                            <div className='rounded-2xl bg-white/80 dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-800/70 p-6 shadow-sm'>
                                <h2 className='text-lg font-semibold text-slate-900 dark:text-white mb-3'>
                                    Datos de contacto
                                </h2>
                                <p className='text-sm text-slate-600 dark:text-slate-300 mb-4'>
                                    También podés escribirnos por estos canales.
                                </p>
                                <div className='space-y-3 text-sm'>
                                    <div>
                                        <p className='text-slate-500 dark:text-slate-400 text-xs uppercase mb-1'>
                                            Email
                                        </p>
                                        <a
                                            href='mailto:contacto@conlaft.com'
                                            className='text-slate-900 dark:text-white font-medium hover:text-blue-600 dark:hover:text-blue-400'
                                        >
                                            contacto@conlaft.com
                                        </a>
                                    </div>
                                    <div>
                                        <p className='text-slate-500 dark:text-slate-400 text-xs uppercase mb-1'>
                                            Teléfono
                                        </p>
                                        <p className='text-slate-900 dark:text-white font-medium'>
                                            +54 9 (341) 200 8100
                                        </p>
                                    </div>
                                    <div>
                                        <p className='text-slate-500 dark:text-slate-400 text-xs uppercase mb-1'>
                                            Horario
                                        </p>
                                        <p className='text-slate-900 dark:text-white font-medium'>
                                            Lun a Vie · 9:00 a 18:00 (ART)
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className='rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white p-6 shadow-lg'>
                                <h3 className='text-lg font-semibold mb-2'>
                                    ¿Sos una institución regulada?
                                </h3>
                                <p className='text-sm text-blue-50 mb-4'>
                                    Contanos el tamaño de tu equipo y el alcance
                                    de tu cumplimiento y te armamos una demo.
                                </p>
                                <p className='text-xs text-blue-100'>
                                    Tiempo estimado: 30 minutos
                                </p>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactoPage;
