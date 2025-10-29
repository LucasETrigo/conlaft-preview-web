'use client';
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

export function ContactForm() {
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
        setFormData({ ...formData, [id]: value });
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Form submitted', formData);

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                const result = await res.json();
                toast.success(result.message);
                setFormData({
                    firstname: '',
                    lastname: '',
                    email: '',
                    telefono: '',
                    message: '',
                });
            } else {
                toast.error('Form submission failed');
            }
        } catch (error) {
            toast.error('An error occurred');
        }
    };

    return (
        <div className='max-w-6xl w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input  bg-transparent  z-50'>
            <ToastContainer /> {/* Add ToastContainer here */}
            <h2 className='font-bold text-xl text-black'>Contacto</h2>
            <p className=' text-sm mt-2 text-gray-700'>
                Si tienes alguna pregunta o comentario, no dudes en ponerte en
                contacto usando el formulario a continuación.
            </p>
            <form className='my-8' onSubmit={handleSubmit}>
                <div className='flex  flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4'>
                    <LabelInputContainer>
                        <Label htmlFor='firstname'>Nombre</Label>
                        <Input
                            id='firstname'
                            placeholder='Nombre'
                            type='text'
                            value={formData.firstname}
                            onChange={handleChange}
                        />
                    </LabelInputContainer>
                    <LabelInputContainer>
                        <Label htmlFor='lastname'>Apellido</Label>
                        <Input
                            id='lastname'
                            placeholder='Apellido'
                            type='text'
                            value={formData.lastname}
                            onChange={handleChange}
                        />
                    </LabelInputContainer>
                </div>
                <LabelInputContainer className='mb-4'>
                    <Label htmlFor='email'>Email</Label>
                    <Input
                        id='email'
                        placeholder='email@gmail.com'
                        type='email'
                        value={formData.email}
                        onChange={handleChange}
                    />
                </LabelInputContainer>

                <LabelInputContainer className='mb-4'>
                    <Label htmlFor='telefono'>Teléfono</Label>
                    <Input
                        id='telefono'
                        placeholder='Teléfono'
                        type='tel'
                        value={formData.telefono}
                        onChange={handleChange}
                    />
                </LabelInputContainer>

                <LabelInputContainer className='mb-4'>
                    <Label htmlFor='message'>Mensaje</Label>
                    <textarea
                        id='message'
                        placeholder='Escribe tu mensaje aquí...'
                        className='resize-none w-full h-32 p-2 text-gray-800 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-neutral-600'
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                    />
                </LabelInputContainer>

                <button
                    className='bg-gradient-to-br relative group/btn from-zinc-900 to-zinc-900  block bg-zinc-800 w-full text-white rounded-md h-10 font-medium  shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]'
                    type='submit'
                >
                    Enviar &rarr;
                    <BottomGradient />
                </button>

                <div className='bg-gradient-to-r from-transparent via-neutral-700 to-transparent my-8 h-[1px] w-full' />
            </form>
        </div>
    );
}

const BottomGradient = () => {
    return (
        <>
            <span className='group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent' />
            <span className='group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent' />
        </>
    );
};

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
