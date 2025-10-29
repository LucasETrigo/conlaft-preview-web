'use client';
import { HoverEffect } from '@/components/ui/card-hover-effect';

const CardHoverCooperativas = () => {
    return (
        <div className='max-w-7xl mx-auto px-8'>
            <HoverEffect items={projects} />
        </div>
    );
};

export const projects = [
    {
        title: 'Clientes',
        description:
            'El registro contiene datos completos de personas, empresas y entidades públicas, y los contratos de la cooperativa. Los datos están encriptados para garantizar su confidencialidad.',
        link: '#',
    },
    {
        title: 'Matriz de Riesgo',
        description:
            'Este módulo del sistema permite clasificar a los clientes en diferentes niveles de riesgo (alto, medio o bajo) mediante un análisis de sus características y comportamientos.',
        link: '#',
    },
    {
        title: 'Busqueda del RePET',
        description:
            'Este módulo de Búsquedas del RePET permite a los usuarios consultar de manera rápida y eficiente el Registro Público de Personas y Entidades vinculadas a actos de Terrorismo y su Financiamiento (RePET), el sistema realiza dicha búsqueda automáticamente sin requerir al usuario instrumentarlo.',
        link: '#',
    },
    {
        title: 'Operaciones Inusuales y Sospechosas',
        description:
            'Este módulo permite detectar y monitorear transacciones que no se ajustan al perfil habitual de los clientes, identificando patrones o comportamientos que podrían indicar actividades sospechosas y alertando al usuario.',
        link: '#',
    },
    {
        title: 'Control sobre Beneficiarios Finales y Renuncia de Planes',
        description:
            'Este módulo permite identificar y verificar a los beneficiarios finales de las operaciones, asegurando la transparencia en las relaciones comerciales. Además, facilita el seguimiento de las renuncias a planes de inversiones o productos.',
        link: '#',
    },
    {
        title: 'Control de Domicilios',
        description:
            'Este módulo está diseñado para identificar la repetición de un mismo domicilio en diversas operaciones o entre diferentes clientes, lo que podría indicar actividades inusuales o riesgos potenciales.',
        link: '#',
    },
];

export default CardHoverCooperativas;
