'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface TestimonialCarouselProps {
    testimonials: {
        id: number;
        content: string;
        author: string;
        role: string;
        company: string;
        image: string;
    }[];
}

export function TestimonialCarousel({
    testimonials,
}: TestimonialCarouselProps) {
    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState(0);

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
            scale: 0.8,
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            scale: 1,
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0,
            scale: 0.8,
        }),
    };

    const swipeConfidenceThreshold = 10000;
    const swipePower = (offset: number, velocity: number) => {
        return Math.abs(offset) * velocity;
    };

    const paginate = (newDirection: number) => {
        setDirection(newDirection);
        setCurrent(
            (current + newDirection + testimonials.length) % testimonials.length
        );
    };

    useEffect(() => {
        const timer = setInterval(() => {
            paginate(1);
        }, 5000);
        return () => clearInterval(timer);
    }, [current]);

    return (
        <div className='relative min-h-[500px] w-full overflow-hidden'>
            {/* Background decorative elements */}
            <div className='absolute inset-0 grid-background opacity-20'></div>
            <div className='absolute top-0 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl'></div>
            <div className='absolute bottom-0 right-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl'></div>

            <AnimatePresence initial={false} custom={direction} mode='wait'>
                <motion.div
                    key={current}
                    custom={direction}
                    variants={slideVariants}
                    initial='enter'
                    animate='center'
                    exit='exit'
                    transition={{
                        x: { type: 'spring', stiffness: 300, damping: 30 },
                        opacity: { duration: 0.3 },
                        scale: { duration: 0.3 },
                    }}
                    drag='x'
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={1}
                    onDragEnd={(e, { offset, velocity }) => {
                        const swipe = swipePower(offset.x, velocity.x);
                        if (swipe < -swipeConfidenceThreshold) {
                            paginate(1);
                        } else if (swipe > swipeConfidenceThreshold) {
                            paginate(-1);
                        }
                    }}
                    className='absolute w-full h-full flex items-center justify-center px-4 md:px-12'
                >
                    <div className='max-w-4xl mx-auto bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl p-10 md:p-12 rounded-3xl border-2 border-gray-200 dark:border-gray-800 shadow-2xl relative overflow-hidden group'>
                        {/* Background gradient */}
                        <div className='absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity'></div>

                        {/* Quote icon */}
                        <div className='relative mb-8'>
                            <div className='w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center'>
                                <Quote className='h-8 w-8 text-white' />
                            </div>
                        </div>

                        {/* Star rating */}
                        <div className='flex gap-1 mb-6'>
                            {[...Array(5)].map((_, i) => (
                                <Star
                                    key={i}
                                    className='h-5 w-5 fill-yellow-400 text-yellow-400'
                                />
                            ))}
                        </div>

                        {/* Content */}
                        <p className='text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed relative z-10'>
                            {testimonials[current].content}
                        </p>

                        {/* Author */}
                        <div className='flex items-center gap-4 relative z-10'>
                            <img
                                src={testimonials[current].image}
                                alt={testimonials[current].author}
                                className='w-16 h-16 rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-lg'
                            />
                            <div>
                                <div className='font-bold text-lg text-gray-900 dark:text-white'>
                                    {testimonials[current].author}
                                </div>
                                <div className='text-sm text-gray-600 dark:text-gray-400'>
                                    {testimonials[current].role}
                                </div>
                                <div className='text-sm font-medium text-blue-600 dark:text-blue-400'>
                                    {testimonials[current].company}
                                </div>
                            </div>
                        </div>

                        {/* Decorative corner */}
                        <div className='absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-transparent rounded-bl-full'></div>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Navigation buttons */}
            <Button
                variant='outline'
                size='icon'
                className='absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border-2 border-gray-200 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-500 shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 transition-all hover:scale-110'
                onClick={() => paginate(-1)}
            >
                <ChevronLeft className='h-6 w-6 text-blue-600' />
            </Button>

            <Button
                variant='outline'
                size='icon'
                className='absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border-2 border-gray-200 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-500 shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 transition-all hover:scale-110'
                onClick={() => paginate(1)}
            >
                <ChevronRight className='h-6 w-6 text-blue-600' />
            </Button>

            {/* Pagination dots */}
            <div className='absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10'>
                {testimonials.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            setDirection(index > current ? 1 : -1);
                            setCurrent(index);
                        }}
                        className={`h-2 rounded-full transition-all duration-300 ${
                            index === current
                                ? 'w-8 bg-gradient-to-r from-blue-600 to-cyan-500'
                                : 'w-2 bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600'
                        }`}
                        aria-label={`Go to testimonial ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
