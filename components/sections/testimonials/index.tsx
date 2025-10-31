'use client';

import { InfiniteMovingCardsDemo } from '../InfiniteMovingCardsDemo';
import { TestimonialCard } from './testimonial-card';
import { TestimonialCarousel } from './testimonial-carousel';
import { Sparkles, Users } from 'lucide-react';

const testimonials = [
    {
        id: 1,
        content:
            'Desde que implementamos el sistema de CONLAFT, logramos automatizar nuestros controles y reducir significativamente los tiempos de análisis. Ahora cumplimos con la normativa UIF de manera más eficiente y segura.',
        author: 'Horacio Di Paolo',
        role: 'Compliance Director',
        company: 'Di Paolo y Borsini Sociedad Civil',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150',
    },
    {
        id: 2,
        content:
            'The automated risk assessment features have saved our team countless hours while improving our compliance accuracy.',
        author: 'Michael Torres',
        role: 'Risk Manager',
        company: 'SecureBank',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150',
    },
    {
        id: 3,
        content:
            'Integration was seamless, and the support team has been exceptional. A game-changer for our compliance operations.',
        author: 'Emily Watson',
        role: 'CTO',
        company: 'TechFin Solutions',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150',
    },
];

const featuredTestimonials = [
    {
        content:
            'The AI-powered document verification has reduced our false positives by 90%. Incredible technology.',
        author: 'David Park',
        role: 'Head of Operations',
        company: 'FinTech Innovations',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150',
    },
    {
        content:
            'ComplianceOS has helped us expand to 15 new markets while maintaining full regulatory compliance.',
        author: 'Lisa Rodriguez',
        role: 'Global Expansion Lead',
        company: 'PayTech Global',
        image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=150&h=150',
    },
    {
        content:
            'The customizable workflows and real-time monitoring have revolutionized our compliance strategy.',
        author: 'James Wilson',
        role: 'Compliance Officer',
        company: 'Digital Banking Co',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150',
    },
];

export function Testimonials() {
    return (
        <section className='relative py-32 overflow-hidden'>
            <div className='container mx-auto px-4 relative z-10'>
                {/* Section Header */}
                <div className='text-center mb-16 fade-in'>
                    <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-gray-800 border border-blue-200 dark:border-blue-800 shadow-lg mb-6'>
                        <Users className='h-4 w-4 text-blue-600' />
                        <span className='text-sm font-medium text-blue-600 dark:text-blue-400'>
                            Testimonios de Clientes
                        </span>
                    </div>

                    <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold mb-6'>
                        <span className='text-gray-900 dark:text-white'>
                            Lo que dicen{' '}
                        </span>
                        <span className='bg-gradient-to-r from-blue-600 via-cyan-500 to-sky-500 bg-clip-text text-transparent'>
                            nuestros clientes
                        </span>
                    </h2>

                    <p className='text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed'>
                        Descubre cómo las principales empresas están
                        revolucionando sus procesos de cumplimiento con nuestra
                        plataforma.
                    </p>
                </div>

                {/* Featured Testimonials Carousel */}
                <div
                    className='mb-20 fade-in'
                    style={{ animationDelay: '0.1s' }}
                >
                    <TestimonialCarousel testimonials={testimonials} />
                </div>

                {/* Testimonial Cards Grid */}
                <div className='grid md:grid-cols-3 gap-8 mb-20'>
                    {featuredTestimonials.map((testimonial, index) => (
                        <TestimonialCard
                            key={index}
                            content={testimonial.content}
                            author={testimonial.author}
                            role={testimonial.role}
                            company={testimonial.company}
                            image={testimonial.image}
                            delay={0.2 + index * 0.1}
                        />
                    ))}
                </div>

                {/* CTA Section */}
                <div
                    className='mt-20 text-center fade-in'
                    style={{ animationDelay: '0.6s' }}
                >
                    <div className='bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-3xl border border-blue-200 dark:border-blue-800 p-12 max-w-4xl mx-auto'>
                        <div className='flex items-center justify-center gap-2 mb-4'>
                            <Sparkles className='h-6 w-6 text-blue-600' />
                            <h3 className='text-3xl font-bold text-gray-900 dark:text-white'>
                                ¿Listo para transformar tu compliance?
                            </h3>
                        </div>
                        <p className='text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto'>
                            Únete a cientos de empresas que ya confían en
                            Conlaft para sus procesos de cumplimiento normativo
                        </p>
                        <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                            <button className='bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-8 py-4 rounded-full font-semibold shadow-xl hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105'>
                                Comenzar Ahora
                            </button>
                            <button className='bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-8 py-4 rounded-full font-semibold border-2 border-gray-200 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300 hover:scale-105'>
                                Ver Demo
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
