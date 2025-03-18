'use client';

import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";

export default function AboutSection() {
  const { t } = useLanguage();
  
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      }
    })
  };
  
  const timeline = [
    { year: '2018', text: t('about.timeline.2018') },
    { year: '2020', text: t('about.timeline.2020') },
    { year: '2023', text: t('about.timeline.2023') }
  ];
  
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 0.5 } }
          }}
        >
          <h2 className="text-4xl font-bold font-display mb-4 bg-gradient-to-r from-primary-cyan to-secondary-pink text-gradient">
            {t('about.title')}
          </h2>
          <p className="text-xl text-light/70 max-w-3xl mx-auto">
            {t('about.subtitle')}
          </p>
        </motion.div>
        
        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <motion.div 
            className="relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeIn}
            custom={0}
          >
            <div className="rounded-lg overflow-hidden neon-border">
              <img 
                src="https://images.unsplash.com/photo-1535223289827-42f1e9919769?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Tech company workplace" 
                className="w-full h-auto rounded-lg"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent-green/20 rounded-lg blur-xl animate-pulse-glow"></div>
            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-primary-cyan/30 rounded-full blur-xl animate-pulse-glow" style={{ animationDelay: "1s" }}></div>
          </motion.div>
          
          {/* Right Column - Text Content */}
          <div className="space-y-8">
            <motion.div 
              className="space-y-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeIn}
              custom={1}
            >
              <h3 className="text-2xl font-display font-bold text-primary-cyan">{t('about.vision.title')}</h3>
              <p className="text-light/80">{t('about.vision.description')}</p>
            </motion.div>
            
            <motion.div 
              className="space-y-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeIn}
              custom={2}
            >
              <h3 className="text-2xl font-display font-bold text-primary-magenta">{t('about.approach.title')}</h3>
              <p className="text-light/80">{t('about.approach.description')}</p>
            </motion.div>
            
            {/* Timeline-style milestones */}
            <div className="relative pl-8 border-l border-primary-cyan/30 space-y-8">
              {timeline.map((item, index) => (
                <motion.div 
                  key={item.year}
                  className="relative"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                  variants={fadeIn}
                  custom={index + 3}
                >
                  <div className={`absolute -left-10 top-0 w-5 h-5 rounded-full ${
                    index === 0 ? 'bg-primary-cyan' : 
                    index === 1 ? 'bg-secondary-pink' : 
                    'bg-accent-green'
                  } animate-pulse-glow`}></div>
                  <div>
                    <h4 className="text-xl font-mono text-accent-yellow">{item.year}</h4>
                    <p className="text-light/80">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
