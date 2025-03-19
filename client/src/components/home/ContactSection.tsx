'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/hooks/useLanguage';
import { useMutation } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { 
  Mail, MapPin, 
} from 'lucide-react';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  subject: z.string().min(1, { message: 'Please select a subject.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactSection() {
  const { t } = useLanguage();
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });
  
  const contactMutation = useMutation({
    mutationFn: (data: FormValues) => {
      return apiRequest('POST', '/api/contact', data);
    },
    onSuccess: () => {
      toast({
        title: t('contact.success.title'),
        description: t('contact.success.message'),
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        variant: "destructive",
        title: t('contact.error.title'),
        description: error.message || t('contact.error.message'),
      });
    },
  });
  
  const onSubmit = (data: FormValues) => {
    contactMutation.mutate(data);
  };
  
  const subjectOptions = [
    { value: 'web', label: t('services.web') },
    { value: 'mobile', label: t('services.mobile') },
    { value: 'data', label: t('services.data') },
    { value: 'ai', label: t('services.ai') },
    { value: 'security', label: t('services.security') },
    { value: 'cloud', label: t('services.cloud') },
    { value: 'other', label: t('contact.form.otherSubject') }
  ];
  
  const fadeInUp = {
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
  
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Geometric background patterns */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1510906594845-bc082582c8cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80')] bg-no-repeat bg-cover opacity-5"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
          }}
        >
          <h2 className="text-4xl font-bold font-display mb-4 bg-gradient-to-r from-primary-magenta to-primary-cyan text-gradient">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-light/70 max-w-3xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact Form */}
          <motion.div 
            className="bg-dark/50 backdrop-blur-sm p-8 rounded-lg border border-primary-cyan/20 neon-border"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeInUp}
            custom={0}
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-light/80">{t('contact.form.name')}</FormLabel>
                      <FormControl>
                        <Input 
                          {...field} 
                          placeholder={t('contact.form.namePlaceholder')} 
                          className="bg-dark/50 border-primary-cyan/30 text-light focus:border-primary-cyan"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-light/80">{t('contact.form.email')}</FormLabel>
                      <FormControl>
                        <Input 
                          {...field} 
                          type="email" 
                          placeholder={t('contact.form.emailPlaceholder')} 
                          className="bg-dark/50 border-primary-cyan/30 text-light focus:border-primary-cyan"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-light/80">{t('contact.form.subject')}</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-dark/50 border-primary-cyan/30 text-light focus:border-primary-cyan">
                            <SelectValue placeholder={t('contact.form.subjectPlaceholder')} />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-dark border-primary-cyan/30">
                          {subjectOptions.map(option => (
                            <SelectItem key={option.value} value={option.value}>
                              {option.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-light/80">{t('contact.form.message')}</FormLabel>
                      <FormControl>
                        <Textarea 
                          {...field} 
                          placeholder={t('contact.form.messagePlaceholder')} 
                          className="bg-dark/50 border-primary-cyan/30 text-light focus:border-primary-cyan min-h-[120px]"
                          rows={5}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary-cyan to-primary-magenta text-dark font-medium hover:shadow-[0_0_20px_rgba(0,255,245,0.5)] transition-all duration-300"
                  disabled={contactMutation.isPending}
                >
                  {contactMutation.isPending ? t('contact.form.sending') : t('contact.form.send')}
                </Button>
              </form>
            </Form>
          </motion.div>
          
          {/* Contact Information */}
          <div className="space-y-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeInUp}
              custom={1}
            >
              <h3 className="text-2xl font-display font-bold text-primary-cyan mb-4">{t('contact.info.title')}</h3>
              <p className="text-light/70 mb-6">{t('contact.info.subtitle')}</p>
              
              <div className="space-y-4">
                {/* Email */}
                <div className="flex items-start">
                  <div className="p-3 rounded-full bg-primary-cyan/10 text-primary-cyan mr-4">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-light font-semibold">{t('contact.info.email')}</h4>
                    <a href="mailto:info@veloratech.com" className="text-primary-cyan hover:text-accent-green transition-colors duration-300">info@veloratech.com</a>
                  </div>
                </div>
                
                {/* Location */}
                <div className="flex items-start">
                  <div className="p-3 rounded-full bg-accent-green/10 text-accent-green mr-4">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-light font-semibold">{t('contact.info.location')}</h4>
                    <p className="text-light/70">
                      {t('contact.info.address1')}<br />
                      {t('contact.info.address2')}<br />
                      {t('contact.info.address3')}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Social Media Links */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeInUp}
              custom={2}
            >
              <h3 className="text-2xl font-display font-bold text-primary-cyan mb-4">{t('contact.social.title')}</h3>
              <div className="flex space-x-4">
                <a href="#" className="p-3 rounded-full bg-dark border border-primary-cyan/30 text-primary-cyan hover:bg-primary-cyan/10 hover:border-primary-cyan/60 transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="p-3 rounded-full bg-dark border border-primary-magenta/30 text-primary-magenta hover:bg-primary-magenta/10 hover:border-primary-magenta/60 transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="#" className="p-3 rounded-full bg-dark border border-accent-green/30 text-accent-green hover:bg-accent-green/10 hover:border-accent-green/60 transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                  </svg>
                </a>
                <a href="#" className="p-3 rounded-full bg-dark border border-accent-yellow/30 text-accent-yellow hover:bg-accent-yellow/10 hover:border-accent-yellow/60 transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
