import React from 'react';
import { CardHoverEffectDemo } from './CardHoverEffectDemo';

const MutualesComponent = () => {
    return (
        <div className='container mx-auto px-6 pt-28 sm:pt-36 md:pt-44 space-y-12 pb-16 text-center'>
            {/* Small Text Above Title */}
            <p className='text-sm uppercase tracking-widest text-blue-600'>
                Software Mutuales
            </p>

            {/* Title */}
            <h1 className='text-4xl font-extrabold text-gray-900 leading-tight'>
                El mejor software para prevenir el <br />
                <span className='text-blue-600'>LAVADO DE DINERO</span> y{' '}
                <span className='text-blue-600'>
                    FINANCIACIÓN AL TERRORISMO
                </span>
            </h1>

            {/* Description */}
            <p className='mt-6 text-gray-600 leading-relaxed text-lg max-w-7xl mx-auto'>
                El software está especialmente diseñado para ayudar a las
                mutuales a cumplir con la Resolución 99/2023 de la UIF,
                optimizando la implementación de la política de conocimiento del
                cliente y asegurando una gestión ágil y segura de la
                información. Gracias a algoritmos avanzados, identifica con
                precisión los factores de riesgo asociados a cada cliente.
                Además, genera una matriz de riesgo que clasifica a los clientes
                en categorías de alto, medio o bajo riesgo, facilitando
                decisiones fundamentadas y fortaleciendo la prevención del
                lavado de activos y la financiación del terrorismo.
            </p>

            <CardHoverEffectDemo />
        </div>
    );
};

export default MutualesComponent;
