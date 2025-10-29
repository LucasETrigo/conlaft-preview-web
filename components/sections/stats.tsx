'use client';
import { useEffect, useState } from 'react';
import { AnimatedNumberBasic } from './animatednumbersbasic';
import { MapPin, Users, Percent, Database } from 'lucide-react';

const stats = [
    { value: 10, label: 'Ciudades', icon: MapPin },
    { value: 20, label: 'Clientes', icon: Users },
    { value: 99.8, label: 'Porcentaje de Acierto', icon: Percent },
    { value: 1000000, label: 'Datos Analizados', icon: Database },
];

export function Stats() {
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                } else {
                    setIsInView(false);
                }
            },
            { threshold: 0.5 }
        );

        const section = document.getElementById('stats-section');
        if (section) {
            observer.observe(section);
        }

        return () => {
            if (section) {
                observer.unobserve(section);
            }
        };
    }, []);

    return (
        <section id='stats-section' className='py-4'>
            <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
                <h2 className='text-3xl font-bold text-center mb-12'>
                    Datos de nuestro Software
                </h2>
                <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-8'>
                    {stats.map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                            <div key={index} className='text-center'>
                                <div className='flex items-center justify-center mb-2'>
                                    <Icon className='h-6 w-6 text-primary' />
                                </div>
                                {isInView && (
                                    <AnimatedNumberBasic
                                        targetValue={stat.value}
                                    />
                                )}
                                <div className='text-sm text-muted-foreground'>
                                    {stat.label}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
