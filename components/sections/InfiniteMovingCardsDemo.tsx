'use client';

import React, { useEffect, useState } from 'react';
import { InfiniteMovingCards } from '../ui/infinite-moving-cards';

export function InfiniteMovingCardsDemo() {
    return (
        <div className='h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden'>
            <InfiniteMovingCards
                items={testimonials}
                direction='right'
                speed='slow'
            />
        </div>
    );
}

const testimonials = [
    {
        quote: 'Desde que implementamos el sistema de CONLAFT, logramos automatizar nuestros controles y reducir significativamente los tiempos de análisis. Ahora cumplimos con la normativa UIF de manera más eficiente y segura.',
        name: 'Horacio Di Paolo',
        title: 'Di Paolo y Borsini Sociedad Civil',
    },
    {
        quote: 'Con CONLAFT nos sentimos respaldados. Antes nos preocupaba cumplir con las normativas, pero ahora sabemos que todo está bajo control. Es como tener un aliado experto en nuestro equipo.',
        name: 'Oscar Adoratti',
        title: 'Mtelaúrgica VICA S.A.',
    },
];
