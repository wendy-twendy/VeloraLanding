'use client';

import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ChevronRight, Award, Timer, Users, Globe } from "lucide-react";

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
  
  const commitments = [
    {
      icon: <Award className="h-6 w-6 text-primary-cyan" />,
      title: t('about.goals.innovation'),
      color: 'from-primary-cyan/20 to-primary-cyan/5'
    },
    {
      icon: <Timer className="h-6 w-6 text-primary-magenta" />,
      title: t('about.goals.expansion'),
      color: 'from-primary-magenta/20 to-primary-magenta/5'
    },
    {
      icon: <Users className="h-6 w-6 text-accent-green" />,
      title: t('about.goals.sustainability'),
      color: 'from-accent-green/20 to-accent-green/5'
    }
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
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
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Modern tech workspace" 
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
          </div>
        </div>
        
        {/* Our Commitments Section */}
        <motion.div
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
          }}
        >
          <h3 className="text-3xl font-bold font-display mb-8 text-center text-light">
            {t('about.goals.title')}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {commitments.map((commitment, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-lg border border-dark-border bg-gradient-to-br hover:border-primary-cyan/30 transition-all duration-300"
                style={{ backgroundImage: `radial-gradient(circle at top left, ${commitment.color})` }}
                variants={fadeIn}
                custom={index}
              >
                <div className="flex items-start space-x-4 mb-4">
                  <div className="p-2 rounded-full bg-dark/60 backdrop-blur-sm">
                    {commitment.icon}
                  </div>
                </div>
                <p className="text-light/90">{commitment.title}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Industries We Serve */}
        <motion.div
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeIn}
          custom={0}
        >
          <div className="p-8 rounded-lg border border-dark-border bg-gradient-to-br from-primary-cyan/10 via-secondary-purple/10 to-primary-magenta/10">
            <h3 className="text-2xl font-bold font-display mb-4 text-light">
              {t('about.industries.title')}
            </h3>
            <p className="text-light/70 mb-6 max-w-3xl mx-auto">
              {t('about.industries.description')}
            </p>
            <Link href="/services">
              <Button 
                variant="outline" 
                className="group border-primary-cyan bg-transparent hover:bg-primary-cyan text-light hover:text-dark border gap-2 px-6 py-2"
              >
                {t('about.industries.button')}
                <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}