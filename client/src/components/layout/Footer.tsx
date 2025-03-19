import { Link } from 'wouter';
import { useLanguage } from '@/hooks/useLanguage';
import { useTheme } from '@/hooks/useTheme';
import { cn } from '@/lib/utils';

export default function Footer() {
  const { language, toggleLanguage, t } = useLanguage();
  const { theme } = useTheme();
  
  return (
    <footer className="py-12 relative overflow-hidden bg-background border-t border-primary-cyan/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: About */}
          <div>
            <Link href="/" className="flex items-center mb-6">
              <span className="text-2xl font-display font-bold bg-gradient-to-r from-primary-cyan to-primary-magenta text-gradient">VELORA</span>
              <span className="ml-1 text-xs font-mono tracking-widest text-accent-green">TECH</span>
            </Link>
            <p className="text-foreground/70 mb-6">{t('footer.about')}</p>
            <div className="flex space-x-4">
              <a href="#" className="text-foreground/50 hover:text-primary-cyan transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="text-foreground/50 hover:text-primary-magenta transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" className="text-foreground/50 hover:text-accent-green transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xl font-display font-semibold text-foreground mb-6">{t('footer.quickLinks')}</h3>
            <ul className="space-y-3">
              <li><a href="#about" className="text-foreground/70 hover:text-primary-cyan transition-colors duration-300">{t('nav.about')}</a></li>
              <li><a href="#services" className="text-foreground/70 hover:text-primary-cyan transition-colors duration-300">{t('nav.services')}</a></li>
              <li><a href="#projects" className="text-foreground/70 hover:text-primary-cyan transition-colors duration-300">{t('nav.projects')}</a></li>
              <li><a href="#testimonials" className="text-foreground/70 hover:text-primary-cyan transition-colors duration-300">{t('nav.testimonials')}</a></li>
              <li><a href="#contact" className="text-foreground/70 hover:text-primary-cyan transition-colors duration-300">{t('nav.contact')}</a></li>
            </ul>
          </div>
          
          {/* Column 3: Services */}
          <div>
            <h3 className="text-xl font-display font-semibold text-foreground mb-6">{t('footer.services')}</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-foreground/70 hover:text-primary-magenta transition-colors duration-300">{t('services.web')}</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary-magenta transition-colors duration-300">{t('services.mobile')}</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary-magenta transition-colors duration-300">{t('services.data')}</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary-magenta transition-colors duration-300">{t('services.ai')}</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary-magenta transition-colors duration-300">{t('services.blockchain')}</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary-magenta transition-colors duration-300">{t('services.ar')}</a></li>
            </ul>
          </div>
          
          {/* Column 4: Newsletter */}
          <div>
            <h3 className="text-xl font-display font-semibold text-foreground mb-6">{t('footer.newsletter')}</h3>
            <p className="text-foreground/70 mb-4">{t('footer.subscribeText')}</p>
            <form className="flex mb-4" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder={t('footer.emailPlaceholder')} 
                className={cn(
                  "flex-1 px-4 py-2 border border-primary-cyan/30 rounded-l-md focus:outline-none focus:border-primary-cyan focus:ring-1 focus:ring-primary-cyan transition-colors duration-300",
                  theme === 'dark' ? "bg-background/50 text-foreground" : "bg-background/80 text-foreground"
                )}
              />
              <button 
                type="submit" 
                className="px-4 py-2 bg-primary-cyan text-dark font-medium rounded-r-md hover:bg-primary-cyan/80 transition-colors duration-300"
              >
                {t('footer.subscribe')}
              </button>
            </form>
            <p className="text-foreground/50 text-sm">{t('footer.privacyNote')}</p>
          </div>
        </div>
        
        {/* Bottom Footer */}
        <div className="mt-12 pt-8 border-t border-primary-cyan/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-foreground/50 text-sm mb-4 md:mb-0">&copy; 2023 Velora Tech. {t('footer.rights')}</p>
          
          {/* Language Selector */}
          <div className="flex items-center">
            <span className="text-foreground/50 mr-3">{t('footer.language')}:</span>
            <button 
              className={cn(
                "flex items-center space-x-1 px-3 py-1 rounded border border-primary-cyan/20 text-primary-cyan hover:bg-primary-cyan/10 transition-colors duration-300",
                theme === 'dark' ? "bg-background" : "bg-background/90"
              )}
              onClick={toggleLanguage}
            >
              <span>{language === 'en' ? 'English' : 'Albanian'}</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
