import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Services() {
  const { t } = useLanguage();
  
  return (
    <section className="py-24 relative overflow-hidden bg-dark cyber-grid">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-primary-cyan/5 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-primary-magenta/5 to-transparent"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-10">
          <Link href="/">
            <Button variant="ghost" className="text-light hover:text-primary-cyan group mb-6 px-0">
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              {t('nav.back')}
            </Button>
          </Link>
          
          <motion.h1 
            className="text-4xl sm:text-5xl font-bold font-display mb-6 bg-gradient-to-r from-primary-magenta to-accent-green text-gradient"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {t('services.allServicesTitle')}
          </motion.h1>
          
          <motion.p 
            className="text-xl text-light/70 max-w-4xl"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {t('services.allServicesDescription')}
          </motion.p>
        </div>
        
        <div className="mt-16">
          <p className="text-2xl text-primary-cyan font-display font-bold text-center mb-10">
            {t('services.comingSoon')}
          </p>
        </div>
      </div>
    </section>
  );
}