type SoftwareHero = {
    eyebrow?: string;
    title: string;
    description?: string;
    highlight?: string;
    stats?: Array<{ label: string; value: string | number }>;
};

export type SoftwareEntry = {
    slug: string;
    hero: SoftwareHero;
    cta?: {
        primaryLabel?: string;
        secondaryLabel?: string;
    };
    featureBlocks?: Array<{
        icon?: string;
        title?: string;
        text: string;
    }>;
    includes?: Array<{
        icon?: string;
        title: string;
        desc?: string;
    }>;
    useCases?: string[];
    extraSections?: Array<{
        title: string;
        body?: string;
    }>;
};

export const SOFTWARE_CONFIG = {
    contadores: {
        slug: 'contadores',
        hero: {
            eyebrow: 'Software para Contadores',
            title: 'El mejor software para prevenir el lavado de dinero y la financiación del terrorismo',
            description:
                'El software sistematiza la política de conocimiento del cliente, permitiendo a los contadores una gestión eficiente y segura de la información, en cumplimiento con la Resolución 42/2024 de la UIF. Utilizando algoritmos avanzados, identifica de manera precisa los factores de riesgo a los que está expuesto cada cliente.',
            highlight: 'Cumple Resolución UIF 42/2024',
            stats: [
                { label: 'Normativa', value: 'UIF 42/24' },
                { label: 'Tipo de usuario', value: 'Estudios y contadores' },
                { label: 'Screening', value: 'Integrado' },
            ],
        },
        cta: {
            primaryLabel: 'Hablar con un analista',
            secondaryLabel: 'Ver campos disponibles',
        },
        featureBlocks: [
            {
                icon: 'shield',
                title: 'Cumplimiento normativo',
                text: 'Enfocado en la UIF 42/2024. Cubre identificación, clasificación y documentación.',
            },
            {
                icon: 'trending',
                title: 'Matriz de riesgo automatizada',
                text: 'Clasificación en alto / medio / bajo según factores del cliente.',
            },
            {
                icon: 'file',
                title: 'Legajos y estructuras jurídicas',
                text: 'Registra actos y transacciones relacionadas con estructuras jurídicas.',
            },
        ],
        includes: [
            {
                icon: 'users',
                title: 'Clientes',
                desc: 'Datos completos de personas, empresas y entidades públicas, más contratos. Datos encriptados.',
            },
            {
                icon: 'shield',
                title: 'Auditorías / controles PLA-FT',
                desc: 'Controles diseñados para detectar operaciones relacionadas al lavado y FT.',
            },
            {
                icon: 'landmark',
                title: 'Inmuebles',
                desc: 'Documenta compra/venta de inmuebles y ayuda a detectar operaciones sospechosas.',
            },
            {
                icon: 'hand',
                title: 'Aportes',
                desc: 'Supervisión de aportes de socios con controles para detectar riesgos.',
            },
            {
                icon: 'lock',
                title: 'Administración de bienes',
                desc: 'Controles sobre administración de bienes, cuentas y valores.',
            },
        ],
        useCases: [
            'Estudio contable que necesita dejar evidencia de screening',
            'Profesional que debe justificar clasificación de riesgo ante auditoría',
            'Registro de inmuebles y operaciones sensibles',
            'Documentación de estructuras jurídicas',
        ],
        extraSections: [
            {
                title: 'Matriz de riesgo inteligente',
                body: 'Genera la matriz ponderada y clasifica en alto, medio o bajo riesgo para facilitar decisiones y reportes.',
            },
            {
                title: 'Datos encriptados',
                body: 'Toda la información sensible está encriptada para garantizar la confidencialidad.',
            },
        ],
    },

    cooperativas: {
        slug: 'cooperativas',
        hero: {
            eyebrow: 'Software Cooperativas',
            title: 'La solución integral para cumplir la Resolución 99/2023 de la UIF',
            description:
                'Diseñado para que las cooperativas implementen política de conocimiento del cliente de forma ágil y segura. Detecta factores de riesgo y genera una matriz que clasifica en alto, medio o bajo riesgo.',
            highlight: 'UIF 99/2023',
            stats: [
                { label: 'Aplicación', value: 'Cooperativas' },
                { label: 'Clasificación', value: 'Automática' },
            ],
        },
        cta: {
            primaryLabel: 'Solicitar demo para cooperativa',
            secondaryLabel: 'Ver controles incluidos',
        },
        featureBlocks: [
            {
                icon: 'users',
                title: 'Registro de clientes',
                text: 'Personas, empresas, entidades públicas y contratos de la cooperativa.',
            },
            {
                icon: 'shield',
                title: 'Matriz de riesgo',
                text: 'Análisis de características y comportamiento para asignar riesgo.',
            },
            {
                icon: 'bell',
                title: 'Operaciones inusuales',
                text: 'Detección y monitoreo de transacciones fuera de perfil.',
            },
        ],
        includes: [
            {
                icon: 'file',
                title: 'Clientes',
                desc: 'Datos completos y encriptados. Soporta distintos tipos de sujetos.',
            },
            {
                icon: 'shield',
                title: 'Matriz de riesgo',
                desc: 'Clasifica en alto / medio / bajo con criterios normativos.',
            },
            {
                icon: 'bell',
                title: 'Operaciones Inusuales y Sospechosas',
                desc: 'Monitorea y alerta transacciones fuera de lo habitual.',
            },
            {
                icon: 'users',
                title: 'Control de beneficiarios finales',
                desc: 'Identifica y verifica beneficiarios. También gestiona renuncia de planes.',
            },
            {
                icon: 'lock',
                title: 'Control de domicilios',
                desc: 'Detecta repetición de domicilios entre clientes u operaciones.',
            },
            {
                icon: 'shield',
                title: 'Búsqueda RePET',
                desc: 'Consulta automática del RePET sin intervención del usuario.',
            },
        ],
        useCases: [
            'Cooperativa que debe demostrar cumplimiento en auditoría',
            'Oficial de cumplimiento que necesita matriz lista',
            'Control de repetición de domicilios y beneficiarios',
            'Alertas por operaciones sospechosas',
        ],
        extraSections: [
            {
                title: 'Política de KYC integrada',
                body: 'Todo el flujo de alta de cliente ya viene pensado para cooperativas.',
            },
        ],
    },

    fideicomisos: {
        slug: 'fideicomisos',
        hero: {
            eyebrow: 'Software Fideicomisos',
            title: 'Cumplimiento completo para la Resolución 140/2012 de la UIF',
            description:
                'Asiste a los fideicomisos en todo el ciclo de conocimiento del cliente. Detecta factores de riesgo y genera matriz para decisiones fundamentadas.',
            highlight: 'UIF 140/2012',
            stats: [
                { label: 'Partes', value: 'Contratos + sujetos' },
                { label: 'Screening', value: 'Automático' },
            ],
        },
        cta: {
            primaryLabel: 'Quiero verlo para mi fideicomiso',
            secondaryLabel: 'Ver módulos',
        },
        featureBlocks: [
            {
                icon: 'file',
                title: 'Partes del contrato',
                text: 'Registra personas, empresas y entidades públicas vinculadas al fideicomiso.',
            },
            {
                icon: 'trending',
                title: 'Calificaciones',
                text: 'Podés parametrizar la proporción del ingreso que cada parte puede operar.',
            },
            {
                icon: 'shield',
                title: 'Matriz de riesgo',
                text: 'Clasifica a las partes en alto, medio o bajo riesgo.',
            },
        ],
        includes: [
            {
                icon: 'file',
                title: 'Contratos y partes',
                desc: 'Datos completos y encriptados de los contratos.',
            },
            {
                icon: 'shield',
                title: 'Controles',
                desc: 'RePET, beneficiarios finales, operaciones, domicilios, etc.',
            },
            {
                icon: 'bell',
                title: 'Operaciones Inusuales',
                desc: 'Detecta y alerta operaciones fuera de perfil.',
            },
            {
                icon: 'lock',
                title: 'Importación / Exportación',
                desc: 'Importa partes, operaciones y exporta archivos solicitados por la UIF.',
            },
        ],
        useCases: [
            'Administrador de fideicomisos que debe centralizar información',
            'Reportes UIF periódicos',
            'Control de beneficiarios finales',
        ],
        extraSections: [
            {
                title: 'Base encriptada',
                body: 'Los datos sensibles de las partes se guardan encriptados.',
            },
        ],
    },

    juegosdeazar: {
        slug: 'juegosdeazar',
        hero: {
            eyebrow: 'Software Juegos de Azar',
            title: 'Cumplimiento operativo para la Resolución 194/2023 de la UIF',
            description:
                'Pensado para empresas de juegos de azar que necesitan identificar riesgos por cliente, aplicar KYC y contar con una matriz de riesgo consistente.',
            highlight: 'UIF 194/2023',
            stats: [
                { label: 'Segmento', value: 'Juegos de azar' },
                { label: 'Matrices', value: 'Automáticas' },
            ],
        },
        cta: {
            primaryLabel: 'Pedir demo para juegos de azar',
            secondaryLabel: 'Ver controles',
        },
        featureBlocks: [
            {
                icon: 'users',
                title: 'Gestión de clientes',
                text: 'Registro completo de datos y contratos vinculados.',
            },
            {
                icon: 'trending',
                title: 'Calificaciones',
                text: 'Parametrizá la proporción del ingreso que puede operar.',
            },
            {
                icon: 'shield',
                title: 'Matriz de riesgo',
                text: 'Clasificación por comportamiento y características.',
            },
        ],
        includes: [
            {
                icon: 'shield',
                title: 'Controles',
                desc: 'RePET, beneficiarios finales, operaciones, domicilios, etc.',
            },
            {
                icon: 'bell',
                title: 'Operaciones inusuales y sospechosas',
                desc: 'Monitoreo y alertas automáticas.',
            },
            {
                icon: 'lock',
                title: 'Importación / Exportación',
                desc: 'Importa clientes y operaciones, exporta lo requerido por UIF.',
            },
        ],
        useCases: [
            'Casinos que necesitan trazabilidad',
            'Plataformas de apuestas que deben justificar riesgos',
            'Áreas de cumplimiento que requieren alertas',
        ],
        extraSections: [
            {
                title: 'Flujo KYC preconfigurado',
                body: 'Pensado para el modelo de juegos de azar, sin tunear todo el front.',
            },
        ],
    },

    mutuales: {
        slug: 'mutuales',
        hero: {
            eyebrow: 'Software Mutuales',
            title: 'Cumplí la Resolución 99/2023 con un solo sistema',
            description:
                'Sistema pensado para mutuales: KYC, gestión segura de la información, identificación de factores de riesgo y matriz de riesgo automática.',
            highlight: 'UIF 99/2023',
        },
        cta: {
            primaryLabel: 'Solicitar demo para mutual',
            secondaryLabel: 'Ver módulos incluidos',
        },
        featureBlocks: [
            {
                icon: 'users',
                title: 'Clientes y contratos',
                text: 'Registro completo de clientes y contratos de la mutual.',
            },
            {
                icon: 'trending',
                title: 'Calificaciones',
                text: 'Define cuánto puede operar cada cliente.',
            },
            {
                icon: 'shield',
                title: 'Matriz de riesgo',
                text: 'Clasificación en alto / medio / bajo.',
            },
        ],
        includes: [
            {
                icon: 'shield',
                title: 'Controles',
                desc: 'RePET, beneficiarios finales, operaciones, domicilios, etc.',
            },
            {
                icon: 'bell',
                title: 'Operaciones inusuales',
                desc: 'Monitoreo de comportamiento fuera de lo esperado.',
            },
            {
                icon: 'lock',
                title: 'Importación / Exportación',
                desc: 'Importa clientes y operaciones, exporta para la UIF.',
            },
        ],
        useCases: [
            'Mutual que debe demostrar cumplimiento',
            'Oficial de cumplimiento que necesita matriz lista',
        ],
        extraSections: [
            {
                title: 'Gestión ágil y segura',
                body: 'Información encriptada y lista para auditoría.',
            },
        ],
    },

    sac: {
        slug: 'sac',
        hero: {
            eyebrow: 'Software Sociedades de Ahorro y Capitalización',
            title: 'Cumplimiento para la Resolución 169/2023 de la UIF',
            description:
                'Desarrollado específicamente para SAC: política de conocimiento del cliente, gestión eficiente y segura de datos, e identificación precisa de factores de riesgo.',
            highlight: 'UIF 169/2023',
        },
        cta: {
            primaryLabel: 'Agendar demo SAC',
            secondaryLabel: 'Ver estructura de datos',
        },
        featureBlocks: [
            {
                icon: 'users',
                title: 'Clientes y contratos SAC',
                text: 'Datos completos y encriptados.',
            },
            {
                icon: 'trending',
                title: 'Calificaciones',
                text: 'Parametrizá el ingreso que cada cliente puede operar.',
            },
            {
                icon: 'shield',
                title: 'Matriz de riesgo',
                text: 'Clasificación automática para prevenir LA/FT.',
            },
        ],
        includes: [
            {
                icon: 'shield',
                title: 'Controles',
                desc: 'RePET, beneficiarios finales, control de operaciones, domicilios.',
            },
            {
                icon: 'bell',
                title: 'Operaciones inusuales y sospechosas',
                desc: 'Detección y monitoreo de transacciones fuera de perfil.',
            },
            {
                icon: 'lock',
                title: 'Importación / Exportación',
                desc: 'Importa info y exporta los archivos solicitados por UIF.',
            },
        ],
        useCases: [
            'SAC que necesita evidencias de controles',
            'Reportes periódicos a UIF',
            'Trazabilidad de operaciones',
        ],
        extraSections: [
            {
                title: 'Matrices listas',
                body: 'Viene con base normativa según la 169/2023.',
            },
        ],
    },
} as const;
