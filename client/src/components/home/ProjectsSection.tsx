'use client';

import { useState } from 'react';
import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string[];
  tagColors: {[key: string]: string};
}

export default function ProjectsSection() {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<string>('all');
  
  const projects: Project[] = [
    {
      id: 1,
      title: t('projects.project1.title'),
      description: t('projects.project1.description'),
      image: "https://images.unsplash.com/photo-1562813733-b31f71025d54?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: ['web', 'ai'],
      tagColors: {
        web: 'bg-primary-cyan/20 text-primary-cyan',
        ai: 'bg-accent-green/20 text-accent-green'
      }
    },
    {
      id: 2,
      title: t('projects.project2.title'),
      description: t('projects.project2.description'),
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: ['mobile', 'ar'],
      tagColors: {
        mobile: 'bg-primary-magenta/20 text-primary-magenta',
        ar: 'bg-accent-yellow/20 text-accent-yellow'
      }
    },
    {
      id: 3,
      title: t('projects.project3.title'),
      description: t('projects.project3.description'),
      image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: ['blockchain', 'web'],
      tagColors: {
        blockchain: 'bg-secondary-pink/20 text-secondary-pink',
        web: 'bg-primary-cyan/20 text-primary-cyan'
      }
    },
    {
      id: 4,
      title: t('projects.project4.title'),
      description: t('projects.project4.description'),
      image: "https://images.unsplash.com/photo-1579567761406-4684ee0c75b6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: ['ai', 'web'],
      tagColors: {
        ai: 'bg-accent-green/20 text-accent-green',
        web: 'bg-primary-cyan/20 text-primary-cyan'
      }
    },
    {
      id: 5,
      title: t('projects.project5.title'),
      description: t('projects.project5.description'),
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: ['mobile', 'blockchain'],
      tagColors: {
        mobile: 'bg-primary-magenta/20 text-primary-magenta',
        blockchain: 'bg-secondary-pink/20 text-secondary-pink'
      }
    },
    {
      id: 6,
      title: t('projects.project6.title'),
      description: t('projects.project6.description'),
      image: "https://images.unsplash.com/photo-1624705025053-1ee391e11c1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: ['ar', 'ai'],
      tagColors: {
        ar: 'bg-accent-yellow/20 text-accent-yellow',
        ai: 'bg-accent-green/20 text-accent-green'
      }
    }
  ];
  
  const filterCategories = [
    { id: 'all', label: t('projects.filters.all'), color: 'bg-primary-cyan text-dark' },
    { id: 'web', label: t('projects.filters.web'), color: 'border-primary-cyan/30 text-primary-cyan' },
    { id: 'mobile', label: t('projects.filters.mobile'), color: 'border-primary-magenta/30 text-primary-magenta' },
    { id: 'ai', label: t('projects.filters.ai'), color: 'border-accent-green/30 text-accent-green' },
    { id: 'blockchain', label: t('projects.filters.blockchain'), color: 'border-secondary-pink/30 text-secondary-pink' },
    { id: 'ar', label: t('projects.filters.ar'), color: 'border-accent-yellow/30 text-accent-yellow' }
  ];
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category.includes(activeFilter));
  
  return (
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
        
        {/* Project Filter Controls */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {filterCategories.map(category => (
            <button
              key={category.id}
              className={`px-5 py-2 rounded-full ${
                activeFilter === category.id 
                  ? 'bg-primary-cyan text-dark font-medium' 
                  : `bg-dark border ${category.color} font-medium hover:border-${category.id}-cyan/60 hover:bg-${category.id}-cyan/10 transition-all duration-300`
              }`}
              onClick={() => setActiveFilter(category.id)}
            >
              {category.label}
            </button>
          ))}
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
          {filteredProjects.map((project) => (
            <motion.div 
              key={project.id}
              className="group relative overflow-hidden rounded-lg neon-border"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5 }
                }
              }}
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
                <div className="flex gap-2">
                  {project.category.map(cat => (
                    <span key={cat} className={`text-xs px-3 py-1 rounded-full ${project.tagColors[cat]}`}>
                      {t(`projects.filters.${cat}`)}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
