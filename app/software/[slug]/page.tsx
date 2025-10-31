import { notFound } from 'next/navigation';
import { SOFTWARE_CONFIG } from '@/lib/softwareConfig';
import SoftwarePageView from '@/components/sections/software/SoftwarePageView';

interface PageProps {
    params: { slug: string };
}

export async function generateStaticParams() {
    // para SSG
    return Object.keys(SOFTWARE_CONFIG).map((slug) => ({ slug }));
}

export default function SoftwarePage({ params }: PageProps) {
    const key = params.slug as keyof typeof SOFTWARE_CONFIG;
    const config = SOFTWARE_CONFIG[key];

    if (!config) {
        return notFound();
    }

    return <SoftwarePageView config={config} />;
}
