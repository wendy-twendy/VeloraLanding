'use client';

import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import { 
  Monitor, Smartphone, BarChart3, Brain,
  Shield, Server
} from "lucide-react";

interface ServiceCard {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  hoverColor: string;
  borderColor: string;
  hoverBorderColor: string;
  shadowColor: string;
  textColor: string;
}

export default function ServicesSection() {
  const { t } = useLanguage();
  
  const services: ServiceCard[] = [
    {
      icon: <Monitor className="h-8 w-8 text-primary-cyan" />,
      title: t('services.web'),
      description: t('services.webDescription'),
      color: 'bg-primary-cyan/10',
      hoverColor: 'bg-primary-cyan/20',
      borderColor: 'border-primary-cyan/20',
      hoverBorderColor: 'border-primary-cyan/60',
      shadowColor: 'shadow-[0_0_30px_rgba(0,255,245,0.2)]',
      textColor: 'text-primary-cyan',
      linkText: t('services.learnMore')
    },
    {
      icon: <Smartphone className="h-8 w-8 text-primary-magenta" />,
      title: t('services.mobile'),
      description: t('services.mobileDescription'),
      color: 'bg-primary-magenta/10',
      hoverColor: 'bg-primary-magenta/20',
      borderColor: 'border-primary-magenta/20',
      hoverBorderColor: 'border-primary-magenta/60',
      shadowColor: 'shadow-[0_0_30px_rgba(255,0,221,0.2)]',
      textColor: 'text-primary-magenta',
      linkText: t('services.learnMore')
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-accent-green" />,
      title: t('services.data'),
      description: t('services.dataDescription'),
      color: 'bg-accent-green/10',
      hoverColor: 'bg-accent-green/20',
      borderColor: 'border-accent-green/20',
      hoverBorderColor: 'border-accent-green/60',
      shadowColor: 'shadow-[0_0_30px_rgba(0,255,170,0.2)]',
      textColor: 'text-accent-green',
      linkText: t('services.learnMore')
    },
    {
      icon: <Brain className="h-8 w-8 text-secondary-purple" />,
      title: t('services.ai'),
      description: t('services.aiDescription'),
      color: 'bg-secondary-purple/10',
      hoverColor: 'bg-secondary-purple/20',
      borderColor: 'border-secondary-purple/20',
      hoverBorderColor: 'border-secondary-purple/60',
      shadowColor: 'shadow-[0_0_30px_rgba(121,40,202,0.2)]',
      textColor: 'text-secondary-purple',
      linkText: t('services.learnMore')
    },
    {
      icon: <Shield className="h-8 w-8 text-secondary-pink" />,
      title: t('services.security'),
      description: t('services.securityDescription'),
      color: 'bg-secondary-pink/10',
      hoverColor: 'bg-secondary-pink/20',
      borderColor: 'border-secondary-pink/20',
      hoverBorderColor: 'border-secondary-pink/60',
      shadowColor: 'shadow-[0_0_30px_rgba(255,0,128,0.2)]',
      textColor: 'text-secondary-pink',
      linkText: t('services.learnMore')
    },
    {
      icon: <Server className="h-8 w-8 text-accent-yellow" />,
      title: t('services.cloud'),
      description: t('services.cloudDescription'),
      color: 'bg-accent-yellow/10',
      hoverColor: 'bg-accent-yellow/20',
      borderColor: 'border-accent-yellow/20',
      hoverBorderColor: 'border-accent-yellow/60',
      shadowColor: 'shadow-[0_0_30px_rgba(255,204,0,0.2)]',
      textColor: 'text-accent-yellow',
      linkText: t('services.learnMore')
    }
  ];
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };
  
  return (
    <section id="services" className="py-16 sm:py-20 md:py-24 relative overflow-hidden bg-dark cyber-grid">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-primary-cyan/5 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-primary-magenta/5 to-transparent"></div>
      
      <div className="container mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-10 sm:mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-display mb-3 sm:mb-4 bg-gradient-to-r from-primary-magenta to-accent-green text-gradient">
            {t('services.title')}
          </h2>
          <p className="text-lg sm:text-xl text-light/70 max-w-3xl mx-auto px-2">
            {t('services.subtitle')}
          </p>
        </motion.div>
        
        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className={`group bg-dark/50 rounded-lg p-4 sm:p-6 backdrop-blur-sm border ${service.borderColor} hover:${service.hoverBorderColor} transition-all duration-300 hover:${service.shadowColor} relative overflow-hidden`}
              variants={itemVariants}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-cyan/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              {/* Icon */}
              <div className={`p-3 sm:p-4 rounded-full ${service.color} inline-flex items-center justify-center mb-4 sm:mb-6 group-hover:${service.hoverColor} transition-colors duration-300`}>
                {service.icon}
              </div>
              
              <h3 className={`text-xl sm:text-2xl font-display font-bold text-light mb-2 sm:mb-3 group-hover:${service.textColor} transition-colors duration-300`}>
                {service.title}
              </h3>
              <p className="text-sm sm:text-base text-light/70">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}