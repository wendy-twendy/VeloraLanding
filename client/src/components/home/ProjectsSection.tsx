'use client';

import { useState } from 'react';
import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import { X, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
}

export default function ProjectsSection() {
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  const projects: Project[] = [
    {
      id: 1,
      title: t('projects.project1.title'),
      description: t('projects.project1.description'),
      image: "https://images.unsplash.com/photo-1562813733-b31f71025d54?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: t('projects.project2.title'),
      description: t('projects.project2.description'),
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: t('projects.project3.title'),
      description: t('projects.project3.description'),
      image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      title: t('projects.project4.title'),
      description: t('projects.project4.description'),
      image: "https://images.unsplash.com/photo-1579567761406-4684ee0c75b6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 5,
      title: t('projects.project5.title'),
      description: t('projects.project5.description'),
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 6,
      title: t('projects.project6.title'),
      description: t('projects.project6.description'),
      image: "https://images.unsplash.com/photo-1624705025053-1ee391e11c1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];
  
  // Projects List View
  return (
    <>
      <section id="projects" className="py-24 relative overflow-hidden">
        {/* Geometric background patterns */}
        <div className="absolute top-0 right-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80')] bg-no-repeat bg-cover opacity-5"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold font-display mb-4 bg-gradient-to-r from-accent-yellow to-primary-cyan text-gradient">
              {t('projects.title')}
            </h2>
            <p className="text-xl text-light/70 max-w-3xl mx-auto">
              {t('projects.subtitle')}
            </p>
          </motion.div>
          
          {/* Projects Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
          >
            {projects.map((project) => (
              <motion.div 
                key={project.id}
                className="group relative overflow-hidden rounded-lg neon-border cursor-pointer"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5 }
                  }
                }}
                onClick={() => setSelectedProject(project)}
              >
                {/* Project Image */}
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-72 object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-display font-bold text-primary-cyan mb-2">{project.title}</h3>
                  <p className="text-light/80 mb-4">{project.description}</p>
                  <Button variant="default" className="mt-2 flex items-center gap-2 w-fit">
                    <span>{t('projects.viewDemo')}</span>
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Project Demo Modal */}
      <Dialog 
        open={selectedProject !== null} 
        onOpenChange={(open) => !open && setSelectedProject(null)}
      >
        <DialogContent className="max-w-[100vw] w-[100vw] h-[95vh] max-h-[95vh] p-0 rounded-none overflow-hidden border-t border-primary-cyan/30 bg-dark-800">
          <div className="flex flex-col h-full">
            <DialogHeader className="p-4 border-b border-primary-cyan/20">
              <DialogTitle className="text-2xl font-display text-primary-cyan">
                {selectedProject?.title}
              </DialogTitle>
            </DialogHeader>
            
            <div className="flex-grow h-full overflow-hidden">
              {selectedProject && (
                <iframe 
                  src="https://klara-dental-care.replit.app/"
                  className="w-full h-full border-0 overflow-x-hidden touch-pan-y" 
                  title={selectedProject.title}
                  scrolling="yes"
                  style={{ 
                    overflow: 'hidden', 
                    overflowX: 'hidden',
                    width: '100%',
                    maxWidth: '100%',
                    touchAction: 'pan-y'
                  }}
                ></iframe>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
