'use client';

import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Quote, Star } from 'lucide-react';
import { motion } from 'framer-motion';

interface TestimonialCardProps {
    content: string;
    author: string;
    role: string;
    company: string;
    image: string;
    delay?: number;
    rating?: number;
}

export function TestimonialCard({
    content,
    author,
    role,
    company,
    image,
    delay = 0,
    rating = 5,
}: TestimonialCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay }}
            viewport={{ once: true }}
            className='h-full'
        >
            <Card className='group relative overflow-hidden p-8 h-full flex flex-col bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-2 border-gray-200 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2'>
                {/* Background gradient on hover */}
                <div className='absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>

                {/* Quote icon with gradient background */}
                <div className='relative mb-6'>
                    <div className='w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
                        <Quote className='h-7 w-7 text-white' />
                    </div>
                </div>

                {/* Star rating */}
                <div className='flex gap-1 mb-4'>
                    {[...Array(rating)].map((_, i) => (
                        <Star
                            key={i}
                            className='h-4 w-4 fill-yellow-400 text-yellow-400'
                        />
                    ))}
                </div>

                {/* Content */}
                <p className='text-gray-700 dark:text-gray-300 leading-relaxed mb-6 flex-grow text-lg relative z-10'>
                    {content}
                </p>

                {/* Author info */}
                <div className='flex items-center gap-4 relative z-10'>
                    <div className='relative'>
                        {/* Avatar glow effect */}
                        <div className='absolute inset-0 bg-blue-500/30 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity'></div>
                        <Avatar className='h-14 w-14 border-2 border-gray-200 dark:border-gray-700 relative'>
                            <AvatarImage src={image} alt={author} />
                            <AvatarFallback className='bg-gradient-to-br from-blue-500 to-cyan-500 text-white font-semibold'>
                                {author[0]}
                            </AvatarFallback>
                        </Avatar>
                    </div>
                    <div>
                        <div className='font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors'>
                            {author}
                        </div>
                        <div className='text-sm text-gray-600 dark:text-gray-400'>
                            {role}
                        </div>
                        <div className='text-sm font-medium text-blue-600 dark:text-blue-400'>
                            {company}
                        </div>
                    </div>
                </div>

                {/* Decorative corner element */}
                <div className='absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity'></div>
            </Card>
        </motion.div>
    );
}
