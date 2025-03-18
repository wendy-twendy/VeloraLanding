'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";

interface Testimonial {
  id: number;
  content: string;
  author: string;
  position: string;
  image: string;
  color: string;
  iconColor: string;
}

export default function TestimonialsSection() {
  const { t } = useLanguage();
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  const testimonials: Testimonial[] = [
    {
      id: 1,
      content: t('testimonials.1.content'),
      author: t('testimonials.1.author'),
      position: t('testimonials.1.position'),
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80",
      color: 'border-primary-cyan/20',
      iconColor: 'bg-primary-cyan/20 text-primary-cyan'
    },
    {
      id: 2,
      content: t('testimonials.2.content'),
      author: t('testimonials.2.author'),
      position: t('testimonials.2.position'),
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80",
      color: 'border-primary-magenta/20',
      iconColor: 'bg-primary-magenta/20 text-primary-magenta'
    },
    {
      id: 3,
      content: t('testimonials.3.content'),
      author: t('testimonials.3.author'),
      position: t('testimonials.3.position'),
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80",
      color: 'border-accent-green/20',
      iconColor: 'bg-accent-green/20 text-accent-green'
    }
  ];
  
  // Auto-rotate testimonials
  useEffect(() => {
    const resetTimeout = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
    
    resetTimeout();
    
    timeoutRef.current = setTimeout(() => {
      setDirection(1);
      setCurrent((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    
    return () => resetTimeout();
  }, [current, testimonials.length]);
  
  const goToSlide = (index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };
  
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0
    })
  };
  
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-dark cyber-grid">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold font-display mb-4 bg-gradient-to-r from-accent-green to-secondary-purple text-gradient">
            {t('testimonials.title')}
          </h2>
          <p className="text-xl text-light/70 max-w-3xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </motion.div>
        
        {/* Testimonials Carousel */}
        <motion.div 
          className="relative overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex flex-col md:flex-row gap-8 md:gap-6 relative min-h-[300px]">
            <AnimatePresence custom={direction} initial={false}>
              <motion.div 
                key={current}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5 }}
                className="absolute inset-0 grid grid-cols-1 md:grid-cols-3 gap-8"
              >
                {/* Display current testimonial in mobile, all three in desktop */}
                {/* Mobile: only show current testimonial */}
                <div className={`md:hidden bg-dark/50 backdrop-blur-sm p-8 rounded-lg ${testimonials[current].color} flex-1 relative`}>
                  <div className={`absolute -top-4 -left-4 w-10 h-10 flex items-center justify-center rounded-full ${testimonials[current].iconColor}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 11l5-5m0 0l5 5m-5-5v12" />
                    </svg>
                  </div>
                  
                  <div className="text-light/90 italic mb-6">
                    "{testimonials[current].content}"
                  </div>
                  
                  <div className="flex items-center">
                    <div className={`w-12 h-12 rounded-full overflow-hidden mr-4 border ${testimonials[current].color.replace('border-', 'border-')}`}>
                      <img 
                        src={testimonials[current].image} 
                        alt={testimonials[current].author} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-light font-semibold">{testimonials[current].author}</h4>
                      <p className="text-light/60 text-sm">{testimonials[current].position}</p>
                    </div>
                  </div>
                </div>
                
                {/* Desktop: show all testimonials */}
                {testimonials.map((testimonial, idx) => (
                  <div 
                    key={`desktop-${testimonial.id}`} 
                    className={`hidden md:block bg-dark/50 backdrop-blur-sm p-8 rounded-lg ${testimonial.color} flex-1 relative`}
                  >
                    <div className={`absolute -top-4 -left-4 w-10 h-10 flex items-center justify-center rounded-full ${testimonial.iconColor}`}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 11l5-5m0 0l5 5m-5-5v12" />
                      </svg>
                    </div>
                    
                    <div className="text-light/90 italic mb-6">
                      "{testimonial.content}"
                    </div>
                    
                    <div className="flex items-center">
                      <div className={`w-12 h-12 rounded-full overflow-hidden mr-4 border ${testimonial.color.replace('border-', 'border-')}`}>
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.author} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="text-light font-semibold">{testimonial.author}</h4>
                        <p className="text-light/60 text-sm">{testimonial.position}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Carousel Controls */}
          <div className="flex justify-center mt-10 space-x-2">
            {testimonials.map((_, index) => (
              <button 
                key={index} 
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  current === index ? 'bg-primary-cyan' : 'bg-light/20 hover:bg-primary-cyan/50'
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
