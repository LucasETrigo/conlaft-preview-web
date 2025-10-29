'use client';
import { WorldMap } from '../ui/world-map';
import { motion } from 'motion/react';
import { Stats } from './stats';

export function WorldMapDemo() {
    return (
        <div className='px-4 sm:px-8 md:px-16 lg:px-36 py-40 dark:bg-black bg-white w-full'>
            <div className='max-w-7xl mx-auto text-center'>
                <Stats />
            </div>
            <div className='mt-10'>
                <WorldMap
                    dots={[
                        {
                            start: {
                                lat: -47.94682,
                                lng: -58.63932,
                            }, // Alaska (Fairbanks)
                            end: {
                                lat: -53.0,
                                lng: -53.0,
                            }, // Los Angeles
                        },
                    ]}
                />
            </div>
        </div>
    );
}
