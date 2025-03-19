'use client';

import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { useLanguage } from '@/hooks/useLanguage';
import { useTheme } from '@/hooks/useTheme';
import { cn } from '@/lib/utils';
import { Sun, Moon } from 'lucide-react';

export default function Navbar() {
  const { language, toggleLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
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
      "fixed w-full z-50 backdrop-blur-md bg-background/80 border-b transition-all duration-300",
      scrolled ? "border-primary-cyan/20" : "border-transparent"
    )}>
      <div className="container mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-xl sm:text-2xl font-display font-bold bg-gradient-to-r from-primary-cyan to-primary-magenta text-gradient">VELORA</span>
              <span className="ml-1 text-xs font-mono tracking-widest text-accent-green">TECH</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.href}
                href={link.href} 
                className="text-sm lg:text-base text-foreground hover:text-primary-cyan transition-colors duration-300 font-medium"
              >
                {link.label}
              </a>
            ))}
            
            {/* Theme Toggle */}
            <button 
              onClick={toggleTheme}
              className="flex items-center justify-center text-foreground hover:text-primary-cyan transition-colors duration-300 p-1.5 rounded-full"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            
            {/* Language Toggle */}
            <button 
              onClick={toggleLanguage}
              className="flex items-center space-x-1 text-sm text-foreground hover:text-primary-cyan transition-colors duration-300"
            >
              <span>{language === 'en' ? 'EN' : 'AL'}</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Theme Toggle Mobile */}
            <button 
              onClick={toggleTheme}
              className="flex items-center justify-center text-foreground hover:text-primary-cyan transition-colors duration-300 p-1.5"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            
            {/* Menu Toggle */}
            <button 
              type="button" 
              className="flex items-center justify-center text-foreground hover:text-primary-cyan p-1.5"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div className={cn(
        "md:hidden bg-background/95 border-b border-primary-cyan/20 transition-all duration-300 overflow-hidden",
        isMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
      )}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navLinks.map((link) => (
            <a 
              key={link.href}
              href={link.href} 
              className="block px-3 py-2.5 text-foreground hover:text-primary-cyan transition-colors duration-300 border-l-2 border-transparent hover:border-primary-cyan/30 rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          
          {/* Language Toggle Mobile */}
          <div className="border-t border-primary-cyan/10 mt-2 pt-2">
            <button 
              className="flex items-center justify-between w-full px-3 py-2.5 text-foreground hover:text-primary-cyan transition-colors duration-300"
              onClick={() => {
                toggleLanguage();
                setIsMenuOpen(false);
              }}
            >
              <span className="font-medium">{t('nav.language')}</span>
              <div className="flex items-center">
                <span className="mr-2">{language === 'en' ? 'EN' : 'AL'}</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
