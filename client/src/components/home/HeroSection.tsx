'use client';

import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";
import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";

export default function HeroSection() {
  const { t } = useLanguage();
  
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-16 overflow-hidden cyber-grid">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Card className="w-full bg-black/[0.96] relative overflow-hidden shadow-[0_0_50px_rgba(0,255,245,0.15)] neon-border">
          <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            color="from-primary-cyan/30 via-primary-cyan/10 to-transparent"
          />
          
          <div className="flex flex-col md:flex-row h-[500px]">
            {/* Left content */}
            <motion.div 
              className="flex-1 p-8 relative z-10 flex flex-col justify-center"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold font-display bg-clip-text text-transparent bg-gradient-to-r from-primary-cyan via-accent-green to-primary-magenta">
                {t('hero.title')}
              </h1>
              <p className="mt-4 text-light/80 max-w-lg">
                {t('hero.description')}
              </p>
              <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <a 
                  href="#services" 
                  className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-primary-cyan to-primary-magenta rounded-md text-dark font-medium hover:shadow-[0_0_20px_rgba(0,255,245,0.5)] transition-all duration-300"
                >
                  {t('hero.servicesButton')}
                </a>
                <a 
                  href="#contact" 
                  className="inline-flex items-center justify-center px-6 py-3 bg-transparent border border-primary-cyan rounded-md text-primary-cyan font-medium hover:bg-primary-cyan/10 hover:shadow-[0_0_20px_rgba(0,255,245,0.3)] transition-all duration-300"
                >
                  {t('hero.contactButton')}
                </a>
              </div>
            </motion.div>

            {/* Right content - 3D Spline Scene */}
            <div className="flex-1 relative h-full">
              <SplineScene 
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
              />
            </div>
          </div>
        </Card>
      </div>
      
      {/* Floating geometric shapes */}
      <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-secondary-purple/20 blur-3xl animate-float"></div>
      <div className="absolute top-1/4 -right-20 w-80 h-80 rounded-full bg-primary-magenta/10 blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
    </section>
  );
}
