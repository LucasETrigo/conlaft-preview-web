'use client';

import Link from 'next/link';
import Image from 'next/image';
import {
    Facebook,
    Twitter,
    Linkedin,
    Instagram,
    Mail,
    Phone,
    MapPin,
    ArrowUp,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';

export function Footer() {
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 400);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const footerSections = [
        {
            title: 'Empresa',
            links: [
                { label: 'Sobre Nosotros', href: '/nosotros' },
                { label: 'Empleos', href: '/empleos' },
                { label: 'Contacto', href: '/contacto' },
                { label: 'Blog', href: '/blog' },
            ],
        },
        {
            title: 'Software',
            links: [
                { label: 'Contadores', href: '/contadores' },
                { label: 'Cooperativas', href: '/cooperativas' },
                { label: 'Fideicomisos', href: '/fideicomisos' },
                { label: 'Mutuales', href: '/mutuales' },
                { label: 'Juegos de Azar', href: '/juegosdeazar' },
                { label: 'SAC', href: '/SAC' },
            ],
        },
        {
            title: 'Recursos',
            links: [
                { label: 'Documentación', href: '/docs' },
                { label: 'Guías', href: '/guias' },
                { label: 'Preguntas Frecuentes', href: '/preguntas' },
                { label: 'Soporte', href: '/soporte' },
            ],
        },
        {
            title: 'Legal',
            links: [
                { label: 'Privacidad', href: '/privacidad' },
                { label: 'Términos de Servicio', href: '/terminos' },
                { label: 'Seguridad', href: '/seguridad' },
                { label: 'Cookies', href: '/cookies' },
            ],
        },
    ];

    const socialLinks = [
        {
            icon: Facebook,
            href: '#',
            label: 'Facebook',
            color: 'hover:text-blue-600',
        },
        {
            icon: Twitter,
            href: '#',
            label: 'Twitter',
            color: 'hover:text-sky-500',
        },
        {
            icon: Linkedin,
            href: '#',
            label: 'LinkedIn',
            color: 'hover:text-blue-700',
        },
        {
            icon: Instagram,
            href: '#',
            label: 'Instagram',
            color: 'hover:text-blue-500',
        },
    ];

    const contactInfo = [
        {
            icon: Mail,
            text: 'contacto@conlaft.com',
            href: 'mailto:contacto@conlaft.com',
        },
        {
            icon: Phone,
            text: '+54 9 (341) 200 8100',
            href: 'tel:+5493412008100',
        },
        { icon: MapPin, text: 'Rosario, Santa Fe, Argentina', href: '#' },
    ];

    const currentYear = new Date().getFullYear();

    return (
        <footer className='relative bg-white dark:bg-gray-950 text-gray-600 dark:text-gray-300 overflow-hidden border-t border-gray-200 dark:border-gray-800'>
            {/* Subtle grid background */}
            <div className='absolute inset-0 grid-background opacity-30'></div>

            {/* Decorative gradient orbs - Blue theme */}
            <div className='absolute top-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl'></div>
            <div className='absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl'></div>

            <div className='container mx-auto px-4 relative z-10'>
                {/* Main Footer Content */}
                <div className='py-16'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12'>
                        {/* Brand Section - Takes 2 columns */}
                        <div className='lg:col-span-2 space-y-6'>
                            <Link
                                href='/'
                                className='flex items-center space-x-3 group'
                            >
                                <div className='relative'>
                                    <div className='absolute inset-0 bg-blue-500/20 rounded-full blur-xl group-hover:bg-blue-500/30 transition-all'></div>
                                    <Image
                                        src='/negro.png'
                                        alt='Conlaft Logo'
                                        width={50}
                                        height={50}
                                        className='rounded-full relative z-10'
                                    />
                                </div>
                                <span className='text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent'>
                                    Conlaft
                                </span>
                            </Link>

                            <p className='text-gray-500 dark:text-gray-400 leading-relaxed max-w-sm'>
                                Soluciones innovadoras en prevención de lavado
                                de activos y financiamiento del terrorismo para
                                empresas modernas.
                            </p>

                            {/* Contact Info */}
                            <div className='space-y-3'>
                                {contactInfo.map((item, index) => (
                                    <a
                                        key={index}
                                        href={item.href}
                                        className='flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group'
                                    >
                                        <div className='w-8 h-8 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 transition-colors'>
                                            <item.icon className='h-4 w-4' />
                                        </div>
                                        <span>{item.text}</span>
                                    </a>
                                ))}
                            </div>

                            {/* Social Links */}
                            <div className='flex gap-3 pt-4'>
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.href}
                                        aria-label={social.label}
                                        className={`w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 flex items-center justify-center transition-all duration-300 ${social.color} hover:scale-110`}
                                    >
                                        <social.icon className='h-5 w-5' />
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Footer Links - Each section takes 1 column */}
                        {footerSections.map((section) => (
                            <div key={section.title}>
                                <h3 className='font-bold text-gray-900 dark:text-white mb-6 text-lg'>
                                    {section.title}
                                </h3>
                                <ul className='space-y-3'>
                                    {section.links.map((link) => (
                                        <li key={link.label}>
                                            <Link
                                                href={link.href}
                                                className='text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm flex items-center group'
                                            >
                                                <span className='w-0 group-hover:w-2 h-0.5 bg-blue-600 mr-0 group-hover:mr-2 transition-all duration-300'></span>
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Newsletter Section */}
                    <div className='py-8 border-t border-gray-200 dark:border-gray-800'>
                        <div className='max-w-2xl mx-auto text-center space-y-4'>
                            <h3 className='text-2xl font-bold text-gray-900 dark:text-white'>
                                Mantente Actualizado
                            </h3>
                            <p className='text-gray-500 dark:text-gray-400'>
                                Suscríbete a nuestro newsletter para recibir las
                                últimas noticias y actualizaciones
                            </p>
                            <div className='flex flex-col sm:flex-row gap-3 max-w-md mx-auto'>
                                <input
                                    type='email'
                                    placeholder='tu@email.com'
                                    className='flex-1 px-6 py-3 rounded-full bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-gray-900 dark:text-white placeholder:text-gray-500 transition-all'
                                />
                                <Button className='bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white shadow-lg hover:shadow-xl hover:shadow-blue-500/50 rounded-full px-8 transition-all duration-300'>
                                    Suscribirse
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className='py-8 border-t border-gray-200 dark:border-gray-800'>
                    <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
                        <p className='text-sm text-gray-500 dark:text-gray-400'>
                            © {currentYear}{' '}
                            <span className='text-blue-600 dark:text-blue-400 font-semibold'>
                                Conlaft S.R.L.
                            </span>{' '}
                            Todos los derechos reservados.
                        </p>

                        <div className='flex items-center gap-6 text-sm text-gray-500 dark:text-gray-400'>
                            <Link
                                href='/privacidad'
                                className='hover:text-blue-600 dark:hover:text-blue-400 transition-colors'
                            >
                                Privacidad
                            </Link>
                            <span className='w-1 h-1 bg-gray-300 dark:bg-gray-600 rounded-full'></span>
                            <Link
                                href='/terminos'
                                className='hover:text-blue-600 dark:hover:text-blue-400 transition-colors'
                            >
                                Términos
                            </Link>
                            <span className='w-1 h-1 bg-gray-300 dark:bg-gray-600 rounded-full'></span>
                            <Link
                                href='/cookies'
                                className='hover:text-blue-600 dark:hover:text-blue-400 transition-colors'
                            >
                                Cookies
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll to Top Button */}
            <button
                onClick={scrollToTop}
                className={`fixed bottom-8 right-8 w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-2xl hover:shadow-blue-500/50 flex items-center justify-center transition-all duration-300 z-50 hover:scale-110 ${
                    showScrollTop
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-16 pointer-events-none'
                }`}
                aria-label='Scroll to top'
            >
                <ArrowUp className='h-5 w-5' />
            </button>
        </footer>
    );
}
