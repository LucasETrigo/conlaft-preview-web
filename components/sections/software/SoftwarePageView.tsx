'use client';

import React from 'react';
import Link from 'next/link';
import {
    Sparkles,
    TrendingUp,
    Shield,
    CheckCircle,
    HandCoins,
    Landmark,
    Gamepad2,
    Lock,
    Users,
    FileText,
    BellRing,
    ArrowRight,
    LayoutDashboard,
} from 'lucide-react';
import type { SOFTWARE_CONFIG } from '@/lib/softwareConfig';

type SoftwareConfig = (typeof SOFTWARE_CONFIG)[keyof typeof SOFTWARE_CONFIG];

const ICONS: Record<string, React.ReactNode> = {
    shield: <Shield className='h-6 w-6 text-white' />,
    check: <CheckCircle className='h-6 w-6 text-white' />,
    trending: <TrendingUp className='h-6 w-6 text-white' />,
    hand: <HandCoins className='h-6 w-6 text-white' />,
    landmark: <Landmark className='h-6 w-6 text-white' />,
    game: <Gamepad2 className='h-6 w-6 text-white' />,
    lock: <Lock className='h-6 w-6 text-white' />,
    users: <Users className='h-6 w-6 text-white' />,
    file: <FileText className='h-6 w-6 text-white' />,
    bell: <BellRing className='h-6 w-6 text-white' />,
};

function getIcon(name?: string) {
    if (!name) return ICONS['shield'];
    return ICONS[name] ?? ICONS['shield'];
}

export default function SoftwarePageView({
    config,
}: {
    config: SoftwareConfig;
}) {
    const hero = config.hero;
    const hasFeatures = config.featureBlocks && config.featureBlocks.length > 0;
    const hasIncludes = config.includes && config.includes.length > 0;
    const hasUseCases = config.useCases && config.useCases.length > 0;
    const hasExtras = config.extraSections && config.extraSections.length > 0;

    // TOC dinámico
    const toc: Array<{ id: string; label: string }> = [];
    if (hasFeatures) toc.push({ id: 'features', label: 'Funcionalidades' });
    toc.push({ id: 'core', label: 'Core de cumplimiento' });
    if (hasIncludes) toc.push({ id: 'includes', label: 'Qué incluye' });
    if (hasUseCases) toc.push({ id: 'use-cases', label: 'Casos de uso' });
    if (hasExtras) toc.push({ id: 'extras', label: 'Extras' });

    return (
        <div className='relative min-h-screen pb-16'>
            {/* contenedor más ancho */}
            <div className='mx-auto w-full max-w-[1240px] px-4 sm:px-6 lg:px-6 pt-10 lg:pt-14 relative z-10'>
                {/* layout principal: contenido + toc */}
                <div className='relative flex gap-8 lg:gap-10'>
                    {/* CONTENIDO */}
                    <div className='flex-1 min-w-0 space-y-14 lg:space-y-16 pb-20'>
                        {/* HERO */}
                        <header className='grid lg:grid-cols-[1.12fr,0.75fr] gap-8 lg:gap-10 items-start'>
                            {/* left copy */}
                            <div className='space-y-6'>
                                {hero.eyebrow ? (
                                    <div className='inline-flex items-center gap-2 rounded-full border border-blue-200/50 dark:border-blue-800/40 bg-white/50 dark:bg-slate-950/30 px-4 py-1.5 backdrop-blur shadow-sm'>
                                        <Sparkles className='h-4 w-4 text-blue-500' />
                                        <span className='text-[0.68rem] md:text-xs font-semibold tracking-wide text-blue-600 dark:text-blue-100 uppercase'>
                                            {hero.eyebrow}
                                        </span>
                                    </div>
                                ) : null}

                                <div className='space-y-3'>
                                    <h1 className='text-4xl md:text-5xl xl:text-[3.1rem] font-bold tracking-tight text-slate-900 dark:text-white leading-tight'>
                                        {hero.title}
                                    </h1>
                                    {hero.description ? (
                                        <p className='text-base md:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl'>
                                            {hero.description}
                                        </p>
                                    ) : null}
                                </div>

                                <div className='flex flex-wrap items-center gap-3'>
                                    {hero.highlight ? (
                                        <span className='inline-flex items-center gap-2 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-200/40 dark:border-blue-400/30 px-4 py-1.5 text-sm text-blue-700 dark:text-blue-100'>
                                            <TrendingUp className='h-4 w-4' />
                                            {hero.highlight}
                                        </span>
                                    ) : null}
                                </div>

                                {/* stats opcionales */}
                                {(() => {
                                    // 👇 truquito para que TS deje de quejarse
                                    const stats = (
                                        config.hero as {
                                            stats?: Array<{
                                                label: string;
                                                value: string | number;
                                            }>;
                                        }
                                    ).stats;

                                    if (
                                        !Array.isArray(stats) ||
                                        stats.length === 0
                                    )
                                        return null;

                                    return (
                                        <div className='flex flex-wrap gap-4 pt-2'>
                                            {stats.map((stat) => (
                                                <div
                                                    key={stat.label}
                                                    className='rounded-2xl bg-white/70 dark:bg-slate-950/20 border border-slate-100/80 dark:border-slate-800/60 backdrop-blur-xl px-5 py-3 min-w-[150px] shadow-sm'
                                                >
                                                    <p className='text-[0.6rem] uppercase tracking-wide text-slate-400 dark:text-slate-500 mb-1'>
                                                        {stat.label}
                                                    </p>
                                                    <p className='text-base font-semibold text-slate-900 dark:text-white'>
                                                        {stat.value}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    );
                                })()}
                            </div>

                            {/* right panel */}
                            <div className='rounded-3xl bg-white/75 dark:bg-slate-950/35 backdrop-blur-xl border border-slate-200/60 dark:border-slate-800/60 shadow-[0_24px_60px_-30px_rgba(15,23,42,0.45)] p-6 space-y-5 relative overflow-hidden'>
                                {/* glow */}
                                <div className='absolute -top-16 -right-10 w-40 h-40 bg-blue-500/15 dark:bg-blue-500/5 blur-3xl rounded-full pointer-events-none' />
                                <div className='flex items-center gap-3'>
                                    <span className='w-11 h-11 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white'>
                                        <LayoutDashboard className='h-5 w-5' />
                                    </span>
                                    <div>
                                        <p className='text-xs uppercase tracking-wide text-slate-400 dark:text-slate-500'>
                                            {config.slug.toUpperCase()}
                                        </p>
                                        <p className='text-sm font-semibold text-slate-900 dark:text-white'>
                                            Módulo verticalizado
                                        </p>
                                    </div>
                                </div>
                                <p className='text-sm text-slate-600 dark:text-slate-300 leading-relaxed'>
                                    Esta versión ya viene preparada para la
                                    normativa y flujo operativo típico de este
                                    sector. Podés apagar bloques si no los usás.
                                </p>
                                <div className='flex gap-3 flex-wrap'>
                                    <span className='text-[0.65rem] px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-800/50 text-slate-600 dark:text-slate-200'>
                                        Screening integrado
                                    </span>
                                    <span className='text-[0.65rem] px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-800/50 text-slate-600 dark:text-slate-200'>
                                        Matriz de riesgo
                                    </span>
                                    <span className='text-[0.65rem] px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-800/50 text-slate-600 dark:text-slate-200'>
                                        Legajos
                                    </span>
                                </div>
                                <p className='text-xs text-slate-400 dark:text-slate-500 pt-1'>
                                    * Los formularios, labels y fields se
                                    definen desde backend / DB por tenant.
                                </p>
                            </div>
                        </header>

                        {/* FEATURES */}
                        {hasFeatures ? (
                            <section id='features' className='space-y-4'>
                                <div className='flex items-center justify-between gap-4'>
                                    <div>
                                        <p className='text-[0.6rem] uppercase tracking-wide text-slate-400 dark:text-slate-500 mb-1'>
                                            Funcionalidades principales
                                        </p>
                                        <h2 className='text-xl font-semibold text-slate-900 dark:text-white'>
                                            Lo que esta vertical necesita sí o
                                            sí
                                        </h2>
                                    </div>
                                    <p className='hidden md:block text-xs text-slate-400 dark:text-slate-500'>
                                        Todo esto viene de la config, no está
                                        hardcodeado.
                                    </p>
                                </div>

                                <div className='grid md:grid-cols-3 gap-5'>
                                    {config.featureBlocks!.map(
                                        (feature, index) => (
                                            <div
                                                key={index}
                                                className='group relative rounded-2xl bg-white/70 dark:bg-slate-950/25 backdrop-blur-xl border border-slate-200/60 dark:border-slate-800/60 overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:border-blue-400/70 dark:hover:border-blue-400/60'
                                            >
                                                {/* glow corner */}
                                                <div className='absolute -bottom-12 -right-12 w-32 h-32 bg-cyan-500/15 dark:bg-cyan-500/5 blur-3xl rounded-full' />
                                                <div className='p-5 space-y-3 relative z-10'>
                                                    <div className='flex items-start gap-3'>
                                                        <div className='w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white flex-shrink-0'>
                                                            {getIcon(
                                                                feature.icon
                                                            )}
                                                        </div>
                                                        <div className='space-y-1'>
                                                            {feature.title ? (
                                                                <h3 className='text-sm font-semibold text-slate-900 dark:text-white'>
                                                                    {
                                                                        feature.title
                                                                    }
                                                                </h3>
                                                            ) : null}
                                                            <p className='text-xs text-slate-500 dark:text-slate-300 leading-relaxed'>
                                                                {feature.text}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    )}
                                </div>
                            </section>
                        ) : null}

                        {/* CORE */}
                        <section
                            id='core'
                            className='rounded-3xl bg-gradient-to-br from-blue-50/70 via-white/60 to-cyan-50/70 dark:from-blue-950/25 dark:via-slate-950/15 dark:to-cyan-950/20 border border-blue-100/70 dark:border-blue-900/40 p-8 md:p-10 flex flex-col md:flex-row gap-7 items-start shadow-[0_24px_60px_-30px_rgba(15,23,42,0.35)]'
                        >
                            <div className='w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center flex-shrink-0'>
                                <TrendingUp className='h-7 w-7 text-white' />
                            </div>
                            <div className='space-y-3'>
                                <p className='text-[0.6rem] uppercase tracking-wide text-blue-500 dark:text-blue-100'>
                                    Motor común
                                </p>
                                <h2 className='text-xl md:text-2xl font-bold text-slate-900 dark:text-white'>
                                    Un solo modelo de cumplimiento para todos
                                    tus sujetos obligados
                                </h2>
                                <p className='text-sm md:text-[0.9rem] text-slate-700 dark:text-slate-200 leading-relaxed'>
                                    La idea es que no tengas 5 apps distintas:
                                    todo cae en el mismo flujo (screening →
                                    matriz → legajo → reporte). Solo cambian las
                                    vistas y los campos según el rubro.
                                </p>
                                <p className='text-[0.6rem] uppercase tracking-wide text-slate-400 dark:text-slate-500'>
                                    Integración con screening externo ·
                                    Versionado de matrices · Evidencia adjunta
                                </p>
                            </div>
                        </section>

                        {/* INCLUDES + CASES */}
                        <section className='grid xl:grid-cols-[1.05fr,0.7fr] gap-8 items-start'>
                            {hasIncludes ? (
                                <div id='includes' className='space-y-4'>
                                    <div>
                                        <p className='text-[0.6rem] uppercase tracking-wide text-slate-400 dark:text-slate-500 mb-1'>
                                            Módulos
                                        </p>
                                        <h2 className='text-xl font-semibold text-slate-900 dark:text-white'>
                                            ¿Qué viene activado?
                                        </h2>
                                        <p className='text-sm text-slate-500 dark:text-slate-300'>
                                            Podés prender/apagar según el
                                            cliente sin tocar el front.
                                        </p>
                                    </div>
                                    <div className='grid sm:grid-cols-2 gap-4'>
                                        {config.includes!.map((item, i) => (
                                            <div
                                                key={item.title}
                                                className={`rounded-2xl bg-white/85 dark:bg-slate-950/30 backdrop-blur-xl border border-slate-200/60 dark:border-slate-800/50 p-5 flex gap-4 transition-all hover:border-blue-400/70 dark:hover:border-blue-400/60 ${
                                                    i === 0
                                                        ? 'sm:col-span-2'
                                                        : ''
                                                }`}
                                            >
                                                <div className='w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-900/40 flex items-center justify-center shrink-0'>
                                                    {item.icon
                                                        ? getIcon(item.icon)
                                                        : getIcon('check')}
                                                </div>
                                                <div className='space-y-1'>
                                                    <h3 className='text-sm font-semibold text-slate-900 dark:text-white'>
                                                        {item.title}
                                                    </h3>
                                                    {item.desc ? (
                                                        <p className='text-xs text-slate-500 dark:text-slate-300 leading-relaxed'>
                                                            {item.desc}
                                                        </p>
                                                    ) : null}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ) : null}

                            {hasUseCases ? (
                                <div
                                    id='use-cases'
                                    className='rounded-3xl bg-white/80 dark:bg-slate-950/20 backdrop-blur-xl border border-slate-200/60 dark:border-slate-800/50 p-6 flex flex-col gap-5 shadow-sm'
                                >
                                    <div>
                                        <p className='text-[0.6rem] uppercase tracking-wide text-slate-400 dark:text-slate-500 mb-1'>
                                            Casos de uso
                                        </p>
                                        <h3 className='text-lg font-semibold text-slate-900 dark:text-white'>
                                            Lo que otras empresas hacen con este
                                            módulo
                                        </h3>
                                    </div>
                                    <ul className='space-y-3'>
                                        {config.useCases!.map((item) => (
                                            <li
                                                key={item}
                                                className='flex gap-3 items-start'
                                            >
                                                <span className='mt-1 h-5 w-5 rounded-full bg-blue-500/15 dark:bg-blue-500/25 flex items-center justify-center'>
                                                    <CheckCircle className='h-3.5 w-3.5 text-blue-500' />
                                                </span>
                                                <span className='text-sm text-slate-700 dark:text-slate-200 leading-relaxed'>
                                                    {item}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ) : null}
                        </section>

                        {/* EXTRAS */}
                        {hasExtras ? (
                            <section id='extras' className='space-y-4'>
                                <h2 className='text-xl font-semibold text-slate-900 dark:text-white'>
                                    Extras específicos de este rubro
                                </h2>
                                <div className='grid md:grid-cols-2 gap-5'>
                                    {config.extraSections!.map((section) => (
                                        <div
                                            key={section.title}
                                            className='rounded-3xl bg-white/70 dark:bg-slate-950/20 backdrop-blur-xl border border-slate-200/60 dark:border-slate-800/50 p-6'
                                        >
                                            <h3 className='text-sm font-semibold text-slate-900 dark:text-white mb-2'>
                                                {section.title}
                                            </h3>
                                            {section.body ? (
                                                <p className='text-sm text-slate-500 dark:text-slate-300 leading-relaxed'>
                                                    {section.body}
                                                </p>
                                            ) : null}
                                        </div>
                                    ))}
                                </div>
                            </section>
                        ) : null}

                        {/* CTA FINAL */}
                        <footer className='pt-2 text-center'>
                            <p className='text-xs text-slate-400 dark:text-slate-500 mb-3'>
                                ¿Tenés un flujo distinto al estándar?
                            </p>
                            <Link
                                href='/contacto'
                                className='inline-flex items-center gap-2 rounded-full border border-slate-200 dark:border-slate-700 bg-white/60 dark:bg-slate-950/30 px-5 py-2 text-sm text-slate-800 dark:text-slate-100 hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-100 transition-all'
                            >
                                Contactanos para hablarlo
                                <ArrowRight className='h-4 w-4' />
                            </Link>
                        </footer>
                    </div>

                    {/* TOC flotante (solo desktop) */}
                    {toc.length ? (
                        <aside className='hidden xl:block w-[198px] sticky top-28 h-fit'>
                            <div className='rounded-3xl bg-white/70 dark:bg-slate-950/25 backdrop-blur-xl border border-slate-200/60 dark:border-slate-800/60 p-4 space-y-3 shadow-sm'>
                                <p className='text-[0.6rem] uppercase tracking-wide text-slate-400 dark:text-slate-500'>
                                    Secciones
                                </p>
                                <div className='space-y-1.5'>
                                    {toc.map((item) => (
                                        <button
                                            key={item.id}
                                            onClick={() => {
                                                const el =
                                                    document.getElementById(
                                                        item.id
                                                    );
                                                if (el)
                                                    el.scrollIntoView({
                                                        behavior: 'smooth',
                                                        block: 'start',
                                                    });
                                            }}
                                            className='w-full text-left text-sm text-slate-600 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-200 rounded-lg px-2 py-1 transition-colors'
                                        >
                                            {item.label}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </aside>
                    ) : null}
                </div>
            </div>
        </div>
    );
}
