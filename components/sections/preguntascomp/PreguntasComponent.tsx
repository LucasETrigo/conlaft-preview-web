'use client';

import React, { useMemo, useState } from 'react';
import { preguntas } from './data';
import {
    HelpCircle,
    Search,
    ChevronDown,
    MessageCircle,
    BookmarkCheck,
    Sparkles,
} from 'lucide-react';
import Link from 'next/link';

// tu data NO tiene category, así que la hacemos opcional
type PreguntaItem = {
    id: number;
    title: string;
    desc: string;
    className?: string;
    thumbnail?: string;
    category?: string; // opcional
};

const PreguntasComponent = () => {
    // la casteamos para que TS sepa que PUEDE haber category pero no es obligatoria
    const items = preguntas as PreguntaItem[];

    const [searchQuery, setSearchQuery] = useState('');
    const [activeId, setActiveId] = useState<number | null>(
        items[0]?.id ?? null
    );

    // armamos categorías solo de las que sí traen
    const categorias = useMemo(() => {
        const set = new Set<string>();
        items.forEach((p) => {
            if (p.category) set.add(p.category);
        });
        return Array.from(set);
    }, [items]);

    const filtered = items.filter((p) => {
        const q = searchQuery.toLowerCase();
        return (
            p.title.toLowerCase().includes(q) ||
            p.desc.toLowerCase().includes(q) ||
            (p.category && p.category.toLowerCase().includes(q))
        );
    });

    const total = items.length;
    const mostradas = filtered.length;

    return (
        <section className='relative pt-10 lg:pt-16 pb-12 '>
            <div className='relative z-10 container mx-auto px-4'>
                <div className='grid gap-10 xl:grid-cols-[0.85fr,1.15fr] items-start'>
                    {/* Lado izq */}
                    <div className='space-y-7 lg:sticky lg:top-28'>
                        <span className='inline-flex items-center gap-2 rounded-full bg-white/70 dark:bg-slate-900/40 border border-blue-100/60 dark:border-blue-900/40 px-4 py-1.5 text-sm text-blue-700 dark:text-blue-200 shadow-sm'>
                            <Sparkles className='w-4 h-4' />
                            Centro de ayuda
                        </span>

                        <div>
                            <h1 className='text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 dark:text-white'>
                                Preguntas frecuentes
                            </h1>
                            <p className='mt-3 text-slate-600 dark:text-slate-300 max-w-lg leading-relaxed'>
                                Todo lo que necesitás saber sobre la plataforma,
                                onboarding, roles y facturación. Buscá, filtrá o
                                escribinos directo.
                            </p>
                        </div>

                        {/* Search grande */}
                        <div className='relative'>
                            <Search className='absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400' />
                            <input
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className='w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/15 outline-none transition-all'
                                placeholder='Buscar por palabra clave…'
                            />
                        </div>

                        {/* Métricas */}
                        <div className='flex flex-wrap gap-4 text-sm'>
                            <div className='flex items-center gap-3 rounded-2xl bg-white/70 dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-800/50 px-4 py-3'>
                                <div className='w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-950/30 flex items-center justify-center'>
                                    <BookmarkCheck className='w-4 h-4 text-blue-600 dark:text-blue-300' />
                                </div>
                                <div>
                                    <p className='text-[11px] uppercase tracking-wide text-slate-400 dark:text-slate-500'>
                                        Preguntas totales
                                    </p>
                                    <p className='font-semibold text-slate-900 dark:text-white'>
                                        {total}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Chips (solo si hay categorías) */}
                        {categorias.length > 0 && (
                            <div className='flex flex-wrap gap-2 pt-1'>
                                {categorias.map((cat) => (
                                    <button
                                        key={cat}
                                        onClick={() => setSearchQuery(cat)}
                                        className={`px-4 py-1.5 rounded-full border text-sm transition-all ${
                                            searchQuery.toLowerCase() ===
                                            cat.toLowerCase()
                                                ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                                                : 'bg-white/40 dark:bg-slate-900/30 border-slate-200/70 dark:border-slate-700/40 text-slate-700 dark:text-slate-200 hover:border-blue-400'
                                        }`}
                                    >
                                        {cat}
                                    </button>
                                ))}
                                <button
                                    onClick={() => setSearchQuery('')}
                                    className='px-3 py-1 text-xs rounded-full text-slate-400 hover:text-slate-700 dark:hover:text-slate-100'
                                >
                                    Limpiar
                                </button>
                            </div>
                        )}

                        {/* CTA soporte */}
                        <div className='rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white p-5 flex items-center gap-4 shadow-lg/40'>
                            <div className='w-11 h-11 rounded-2xl bg-white/15 flex items-center justify-center'>
                                <MessageCircle className='w-5 h-5' />
                            </div>
                            <div className='flex-1'>
                                <p className='text-sm font-semibold'>
                                    ¿Seguís con dudas?
                                </p>
                                <p className='text-xs/5 text-blue-50'>
                                    Escribinos y un analista de Conlaft te
                                    responde.
                                </p>
                            </div>
                            <Link
                                href='/contacto'
                                className='bg-white/15 hover:bg-white/25 text-sm px-4 py-1.5 rounded-full transition'
                            >
                                Contacto
                            </Link>
                        </div>
                    </div>

                    {/* Lado derecho */}
                    <div className='rounded-3xl bg-white/85 dark:bg-slate-950/60 border border-slate-200/70 dark:border-slate-800/80 backdrop-blur-xl shadow-[0_20px_50px_rgba(15,23,42,0.08)] max-h-[70vh] overflow-y-auto p-4 lg:p-5 space-y-3 faq-scroll'>
                        {filtered.length === 0 ? (
                            <div className='rounded-2xl border border-dashed border-slate-300 dark:border-slate-700 bg-slate-50/60 dark:bg-slate-900/10 p-8 text-center'>
                                <Search className='w-10 h-10 text-slate-300 dark:text-slate-600 mx-auto mb-3' />
                                <p className='text-slate-700 dark:text-slate-100 font-medium'>
                                    No encontramos nada con ese término.
                                </p>
                                <p className='text-sm text-slate-500 dark:text-slate-400 max-w-sm mx-auto'>
                                    Probá con “facturación”, “roles”, “usuarios”
                                    o “reportes”.
                                </p>
                            </div>
                        ) : (
                            filtered.map((item, index) => {
                                const isOpen = activeId === item.id;
                                return (
                                    <article
                                        key={item.id}
                                        className={`rounded-2xl border transition-all ${
                                            isOpen
                                                ? 'bg-slate-50/90 dark:bg-slate-900/50 border-blue-200/80 dark:border-blue-900/50 shadow-sm'
                                                : 'bg-white/0 dark:bg-transparent border-slate-100/60 dark:border-slate-800/60 hover:border-blue-100/70 dark:hover:border-blue-900/40'
                                        }`}
                                        style={{
                                            animationDelay: `${index * 40}ms`,
                                        }}
                                    >
                                        <button
                                            onClick={() =>
                                                setActiveId(
                                                    isOpen ? null : item.id
                                                )
                                            }
                                            className='w-full flex items-start gap-4 px-4 py-4 text-left'
                                        >
                                            <div className='mt-1'>
                                                <div className='w-8 h-8 rounded-xl bg-blue-50 dark:bg-blue-950/40 flex items-center justify-center'>
                                                    <HelpCircle className='w-4 h-4 text-blue-600 dark:text-blue-200' />
                                                </div>
                                            </div>
                                            <div className='flex-1'>
                                                <h3 className='font-semibold text-slate-900 dark:text-white leading-snug'>
                                                    {item.title}
                                                </h3>
                                                <p className='text-[11px] uppercase tracking-wide text-slate-400 dark:text-slate-500 mt-1'>
                                                    {item.category ?? 'General'}
                                                </p>
                                            </div>
                                            <div
                                                className={`mt-1 p-1 rounded-full border border-transparent transition-transform ${
                                                    isOpen
                                                        ? 'rotate-180 bg-blue-100/60 dark:bg-blue-900/20'
                                                        : 'bg-transparent'
                                                }`}
                                            >
                                                <ChevronDown className='w-5 h-5 text-slate-400' />
                                            </div>
                                        </button>
                                        {isOpen && (
                                            <div className='px-4 pb-4 text-sm text-slate-600 dark:text-slate-200 leading-relaxed'>
                                                {item.desc}
                                            </div>
                                        )}
                                    </article>
                                );
                            })
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PreguntasComponent;
