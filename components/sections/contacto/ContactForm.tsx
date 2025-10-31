'use client';

import React, { useState, ChangeEvent, FormEvent } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

export function ContactForm() {
    const [loading, setLoading] = useState(false);
    const [sent, setSent] = useState(false);
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        telefono: '',
        message: '',
    });

    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
        if (sent) setSent(false);
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!formData.firstname || !formData.email || !formData.message) {
            toast.error('Completá al menos nombre, email y mensaje 💬');
            return;
        }

        setLoading(true);
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await res.json().catch(() => ({}));

            if (!res.ok) {
                toast.error(
                    data?.message ||
                        'No pudimos enviar el formulario 😔. Probá de nuevo.'
                );
            } else {
                toast.success(
                    data?.message ||
                        'Mensaje enviado ✅. Gracias por escribirnos.'
                );
                setSent(true);
                setFormData({
                    firstname: '',
                    lastname: '',
                    email: '',
                    telefono: '',
                    message: '',
                });
            }
        } catch (error) {
            toast.error('Ocurrió un error inesperado.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='rounded-3xl bg-white/80 dark:bg-slate-900/70 backdrop-blur border border-slate-200/70 dark:border-slate-800/70 shadow-[0_18px_60px_rgba(15,23,42,0.04)] p-6 md:p-8'>
            {/* el contenedor va acá para que los toasts se vean solo en esta page */}
            <ToastContainer position='top-right' />
            <div className='mb-6 flex items-start justify-between gap-4'>
                <div>
                    <h2 className='text-xl font-semibold text-slate-900 dark:text-white'>
                        Enviar mensaje
                    </h2>
                    <p className='text-sm text-slate-500 dark:text-slate-400 mt-1'>
                        Contanos brevemente qué necesitás y te respondemos.
                    </p>
                </div>
                {sent ? (
                    <span className='inline-flex items-center gap-1 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-200 border border-emerald-200/60 dark:border-emerald-500/30 px-3 py-1 text-xs'>
                        <span className='h-2 w-2 rounded-full bg-emerald-400' />
                        Enviado
                    </span>
                ) : null}
            </div>
            <form className='space-y-5' onSubmit={handleSubmit}>
                <div className='flex flex-col md:flex-row gap-4'>
                    <LabelInputContainer>
                        <Label htmlFor='firstname'>Nombre *</Label>
                        <Input
                            id='firstname'
                            placeholder='Juan'
                            type='text'
                            value={formData.firstname}
                            onChange={handleChange}
                            required
                        />
                    </LabelInputContainer>
                    <LabelInputContainer>
                        <Label htmlFor='lastname'>Apellido</Label>
                        <Input
                            id='lastname'
                            placeholder='Pérez'
                            type='text'
                            value={formData.lastname}
                            onChange={handleChange}
                        />
                    </LabelInputContainer>
                </div>

                <LabelInputContainer>
                    <Label htmlFor='email'>Email *</Label>
                    <Input
                        id='email'
                        placeholder='email@empresa.com'
                        type='email'
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </LabelInputContainer>

                <LabelInputContainer>
                    <Label htmlFor='telefono'>Teléfono / WhatsApp</Label>
                    <Input
                        id='telefono'
                        placeholder='+54 9 ...'
                        type='tel'
                        value={formData.telefono}
                        onChange={handleChange}
                    />
                </LabelInputContainer>

                <LabelInputContainer>
                    <div className='flex items-center justify-between'>
                        <Label htmlFor='message'>Mensaje *</Label>
                        <span className='text-xs text-slate-400'>
                            máx. 500 caracteres
                        </span>
                    </div>
                    <textarea
                        id='message'
                        maxLength={500}
                        placeholder='Contanos qué tipo de implementación o demo necesitás...'
                        className='resize-none w-full h-32 p-2.5 text-slate-900 dark:text-slate-50 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-900/40 focus:outline-none focus:ring-2 focus:ring-blue-500/60'
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                </LabelInputContainer>

                <button
                    className={cn(
                        'inline-flex items-center justify-center gap-2 w-full h-11 rounded-xl text-sm font-medium transition-all',
                        'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg hover:shadow-blue-500/25 hover:from-blue-700 hover:to-cyan-600',
                        loading && 'opacity-70 cursor-not-allowed'
                    )}
                    type='submit'
                    disabled={loading}
                >
                    {loading ? 'Enviando...' : 'Enviar mensaje'}
                    {!loading && (
                        <svg
                            className='w-4 h-4'
                            fill='none'
                            stroke='currentColor'
                            strokeWidth='2'
                            viewBox='0 0 24 24'
                        >
                            <path d='M5 12h13'></path>
                            <path d='m13 5 7 7-7 7'></path>
                        </svg>
                    )}
                </button>

                <p className='text-xs text-slate-400'>
                    Al enviar aceptás ser contactado por el equipo de Conlaft.
                </p>
            </form>
        </div>
    );
}

const LabelInputContainer = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={cn('flex flex-col space-y-2 w-full', className)}>
            {children}
        </div>
    );
};
