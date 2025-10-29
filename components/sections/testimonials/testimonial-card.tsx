"use client";

import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from "lucide-react";
import { motion } from "framer-motion";

interface TestimonialCardProps {
  content: string;
  author: string;
  role: string;
  company: string;
  image: string;
  delay?: number;
}

export function TestimonialCard({
  content,
  author,
  role,
  company,
  image,
  delay = 0
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <Card className="p-6 h-full flex flex-col">
        <Quote className="h-8 w-8 text-primary mb-4 opacity-50" />
        <p className="text-muted-foreground mb-6 flex-grow">{content}</p>
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src={image} alt={author} />
            <AvatarFallback>{author[0]}</AvatarFallback>
          </Avatar>
          <div>
            <div className="font-semibold">{author}</div>
            <div className="text-sm text-muted-foreground">
              {role} at {company}
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}