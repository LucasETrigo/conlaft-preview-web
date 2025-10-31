import { Hero } from '@/components/sections/hero';
import { Features } from '@/components/sections/features';
import { Stats } from '@/components/sections/stats';
import { Testimonials } from '@/components/sections/testimonials';
import { CTA } from '@/components/sections/cta';
import { WorldMapDemo } from '@/components/sections/worldMapDemo';

export default function Home() {
    return (
        <div>
            <Hero />
            <Features />
            <Testimonials />
        </div>
    );
}
