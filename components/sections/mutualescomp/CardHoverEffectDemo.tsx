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
            'El registro contiene datos completos de personas, empresas y entidades públicas, y los contratos de la mutual. Los datos están encriptados para garantizar su confidencialidad.',
        link: '#',
    },
    {
        title: 'Calificaciones',
        description:
            'El sistema permite parametrizar la proporción del ingreso que el cliente puede operar dentro de la mutual.',
        link: '#',
    },
    {
        title: 'Matriz de Riesgo',
        description:
            'Este módulo del sistema permite clasificar a los clientes en diferentes niveles de riesgo (alto, medio o bajo) mediante un análisis de sus características y comportamientos.',
        link: '#',
    },
    {
        title: 'Controles',
        description:
            'El sistema incluye una variedad de controles, tales como búsquedas del RePET, control de beneficiarios finales, control de operaciones, control de domicilios, entre otros, para asegurar el cumplimiento de las normativas vigentes.',
        link: '#',
    },
    {
        title: 'Operaciones Inusuales y Sospechosas',
        description:
            'Este módulo permite detectar y monitorear transacciones que no se ajustan al perfil habitual de los clientes, identificando patrones o comportamientos que podrían indicar actividades sospechosas y alertando al usuario.',
        link: '#',
    },
    {
        title: 'Importación / Exportación',
        description:
            'El sistema permite importar información de clientes, calificaciones, operaciones y otros datos específicos según los requisitos del cliente. Además, facilita la exportación de archivos solicitados por la UIF.',
        link: '#',
    },
];
