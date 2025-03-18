'use client';

import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { useLanguage } from '@/hooks/useLanguage';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const { language, toggleLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { href: '#about', label: t('nav.about') },
    { href: '#services', label: t('nav.services') },
    { href: '#projects', label: t('nav.projects') },
    { href: '#testimonials', label: t('nav.testimonials') },
    { href: '#contact', label: t('nav.contact') }
  ];

  return (
    <nav className={cn(
      "fixed w-full z-50 backdrop-blur-md bg-dark/80 border-b transition-all duration-300",
      scrolled ? "border-primary-cyan/20" : "border-transparent"
    )}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-display font-bold bg-gradient-to-r from-primary-cyan to-primary-magenta text-gradient">VELORA</span>
              <span className="ml-1 text-xs font-mono tracking-widest text-accent-green">TECH</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.href}
                href={link.href} 
                className="text-light hover:text-primary-cyan transition-colors duration-300 font-medium"
              >
                {link.label}
              </a>
            ))}
            
            {/* Language Toggle */}
            <button 
              onClick={toggleLanguage}
              className="flex items-center space-x-1 text-sm text-light hover:text-primary-cyan transition-colors duration-300"
            >
              <span>{language === 'en' ? 'EN' : 'AL'}</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            type="button" 
            className="md:hidden text-light hover:text-primary-cyan"
            onClick={toggleMenu}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div className={cn("md:hidden bg-dark/95 border-b border-primary-cyan/20", isMenuOpen ? "block" : "hidden")}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <a 
              key={link.href}
              href={link.href} 
              className="block px-3 py-2 text-light hover:text-primary-cyan transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          
          {/* Language Toggle Mobile */}
          <button 
            className="flex items-center space-x-1 px-3 py-2 text-light hover:text-primary-cyan transition-colors duration-300"
            onClick={toggleLanguage}
          >
            <span>{language === 'en' ? 'EN' : 'AL'}</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
