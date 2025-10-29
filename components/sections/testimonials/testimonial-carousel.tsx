"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

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

export function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrent((current + newDirection + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 5000);
    return () => clearInterval(timer);
  }, [current]);

  return (
    <div className="relative h-[400px] w-full overflow-hidden">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={current}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          drag="x"
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
          className="absolute w-full h-full flex items-center justify-center px-4"
        >
          <div className="max-w-3xl mx-auto bg-card p-8 rounded-lg shadow-lg">
            <p className="text-xl mb-6">{testimonials[current].content}</p>
            <div className="flex items-center gap-4">
              <img
                src={testimonials[current].image}
                alt={testimonials[current].author}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <div className="font-semibold">{testimonials[current].author}</div>
                <div className="text-sm text-muted-foreground">
                  {testimonials[current].role} at {testimonials[current].company}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10"
        onClick={() => paginate(-1)}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10"
        onClick={() => paginate(1)}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
}