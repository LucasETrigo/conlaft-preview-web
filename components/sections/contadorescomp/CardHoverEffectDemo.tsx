'use client';
import { HoverEffect } from '@/components/ui/card-hover-effect';

export function CardHoverEffectDemo() {
    return (
        <div className='max-w-7xl mx-auto px-8'>
            <HoverEffect items={projects} />
        </div>
    );
}
export const projects = [
    {
        title: 'Clientes',
        description:
            'El registro contiene datos completos de personas, empresas y entidades públicas, y los contratos del profesional. Los datos están encriptados para garantizar su confidencialidad.',
        link: '#',
    },
    {
        title: 'Auditorias',
        description:
            'El sistema está diseñado para ayudar al profesional a realizar controles que previenen el lavado de activos y la financiación del terrorismo, centrándose en auditorías especializadas para estas áreas. Ofrece una gama completa de herramientas de control para respaldar al profesional en la detección efectiva de operaciones relacionadas con estas actividades ilícitas.',
        link: '#',
    },
    {
        title: 'Inmuebles',
        description:
            'El sistema está diseñado para documentar el proceso de compra y/o venta de inmuebles mediante una variedad de instrumentos legales. Además, proporciona herramientas que asisten al profesional en la detección de posibles operaciones ilícitas.',
        link: '#',
    },
    {
        title: 'Estructuras Juridicas',
        description:
            'El sistema registra actos jurídicos y transacciones relacionadas con estructuras jurídicas para detectar indicios de lavado de activos o financiación del terrorismo.',
        link: '#',
    },
    {
        title: 'Aportes',
        description:
            'El sistema supervisa los aportes realizados por los socios y cuenta con controles que permiten al contador identificar posibles riesgos asociados al lavado de activos.',
        link: '#',
    },
    {
        title: 'Administración de Bienes',
        description:
            'El sistema implementa controles para la administración de bienes y otros activos, así como para la gestión de cuentas bancarias, de ahorros y de valores, con el fin de mitigar los riesgos asociados a estas actividades.',
        link: '#',
    },
];
