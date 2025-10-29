import { InfiniteMovingCardsDemo } from '../InfiniteMovingCardsDemo';
import { TestimonialCard } from './testimonial-card';
import { TestimonialCarousel } from './testimonial-carousel';

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
        <section className='py-20 bg-background'>
            <div className='container mx-auto px-4'>
                <h2 className='text-3xl font-bold text-center mb-4'>
                    Testimonios acerca de Conlaft
                </h2>
                <p className='text-muted-foreground text-center mb-12 max-w-2xl mx-auto'>
                    Descubre cómo las principales empresas están revolucionando
                    sus procesos de cumplimiento con nuestra plataforma.
                </p>

                <div className='mb-20'>
                    <InfiniteMovingCardsDemo />
                </div>
            </div>
        </section>
    );
}
