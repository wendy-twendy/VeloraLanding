import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import { Link } from "wouter";
import { 
  ArrowLeft, ChevronRight, Monitor, Smartphone, BarChart3, Brain,
  Shield, Server, CreditCard, HeadphonesIcon, BarChart2, Building, 
  ShoppingBag, GraduationCap, Stethoscope, Landmark, Factory, Truck
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface ServiceDetailItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  features: string[];
  benefits: string[];
  technologies?: string[];
}

interface IndustryItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

export default function Services() {
  const { t } = useLanguage();
  
  const services: ServiceDetailItem[] = [
    {
      icon: <Monitor className="h-8 w-8 text-primary-cyan" />,
      title: t('services.web'),
      description: t('services.webDescription'),
      color: 'text-primary-cyan',
      features: [
        'Responsive web applications',
        'E-commerce platforms',
        'Content management systems',
        'Progressive web apps (PWAs)',
        'Custom admin panels & dashboards',
        'API integrations'
      ],
      benefits: [
        'Enhanced customer engagement',
        'Improved conversion rates',
        'Better brand visibility',
        'Streamlined business processes',
        'Cross-platform compatibility'
      ],
      technologies: [
        'React', 'Vue', 'Angular', 'Node.js', 'PHP', 'Laravel', 'WordPress'
      ]
    },
    {
      icon: <Smartphone className="h-8 w-8 text-primary-magenta" />,
      title: t('services.mobile'),
      description: t('services.mobileDescription'),
      color: 'text-primary-magenta',
      features: [
        'Native iOS & Android apps',
        'Cross-platform solutions',
        'App store optimization',
        'Push notifications',
        'Offline functionality',
        'Payment integration'
      ],
      benefits: [
        'Direct customer connection',
        'Enhanced brand loyalty',
        'New revenue streams',
        'Improved customer data collection',
        'Competitive advantage'
      ],
      technologies: [
        'React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase'
      ]
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-accent-green" />,
      title: t('services.data'),
      description: t('services.dataDescription'),
      color: 'text-accent-green',
      features: [
        'Custom analytics dashboards',
        'Data visualization tools',
        'Business intelligence solutions',
        'Data integration & ETL',
        'Predictive analytics',
        'Performance monitoring'
      ],
      benefits: [
        'Data-driven decision making',
        'Operational efficiency',
        'Customer insights',
        'Market trend identification',
        'Cost reduction'
      ],
      technologies: [
        'PowerBI', 'Tableau', 'Python', 'R', 'SQL', 'NoSQL', 'Hadoop'
      ]
    },
    {
      icon: <Brain className="h-8 w-8 text-secondary-purple" />,
      title: t('services.ai'),
      description: t('services.aiDescription'),
      color: 'text-secondary-purple',
      features: [
        'Machine learning models',
        'Natural language processing',
        'Computer vision solutions',
        'Chatbots & virtual assistants',
        'Recommendation engines',
        'Predictive maintenance'
      ],
      benefits: [
        'Process automation',
        'Enhanced customer experience',
        'Reduced operational costs',
        'Competitive advantage',
        'New business opportunities'
      ],
      technologies: [
        'TensorFlow', 'PyTorch', 'OpenAI', 'AWS AI Services', 'Google AI'
      ]
    },
    {
      icon: <Shield className="h-8 w-8 text-secondary-pink" />,
      title: t('services.security'),
      description: t('services.securityDescription'),
      color: 'text-secondary-pink',
      features: [
        'Security audits & assessments',
        'Penetration testing',
        'Compliance implementation',
        'Security monitoring',
        'Data encryption',
        'Access control systems'
      ],
      benefits: [
        'Reduced risk of breaches',
        'Regulatory compliance',
        'Customer trust',
        'Intellectual property protection',
        'Operational continuity'
      ],
      technologies: [
        'OAuth', 'JWT', 'SSL/TLS', 'Encryption Tools', 'SIEM Solutions'
      ]
    },
    {
      icon: <Server className="h-8 w-8 text-accent-yellow" />,
      title: t('services.cloud'),
      description: t('services.cloudDescription'),
      color: 'text-accent-yellow',
      features: [
        'Cloud migration',
        'Infrastructure as code',
        'Auto-scaling solutions',
        'Load balancing',
        'Database management',
        'Backup & recovery'
      ],
      benefits: [
        'Improved scalability',
        'Cost optimization',
        'Enhanced reliability',
        'Better performance',
        'Faster deployment'
      ],
      technologies: [
        'AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform'
      ]
    },
    {
      icon: <CreditCard className="h-8 w-8 text-primary-cyan" />,
      title: t('services.payment'),
      description: t('services.paymentDescription'),
      color: 'text-primary-cyan',
      features: [
        'Payment gateway integration',
        'Subscription billing',
        'Multi-currency support',
        'Fraud prevention',
        'Marketplace payment solutions',
        'PCI compliance'
      ],
      benefits: [
        'Increased conversion rates',
        'Expanded customer base',
        'Reduced transaction costs',
        'Simplified financial management',
        'Enhanced security'
      ],
      technologies: [
        'Stripe', 'PayPal', 'Square', 'Braintree', 'Authorize.net'
      ]
    },
    {
      icon: <HeadphonesIcon className="h-8 w-8 text-primary-magenta" />,
      title: t('services.support'),
      description: t('services.supportDescription'),
      color: 'text-primary-magenta',
      features: [
        '24/7 monitoring',
        'Proactive maintenance',
        'Performance optimization',
        'Security updates',
        'System troubleshooting',
        'Technical support'
      ],
      benefits: [
        'Minimized downtime',
        'Faster issue resolution',
        'Reduced IT burden',
        'Enhanced user experience',
        'Peace of mind'
      ]
    }
  ];
  
  const industries: IndustryItem[] = [
    {
      icon: <ShoppingBag className="h-6 w-6" />,
      title: t('about.industries.ecommerce'),
      description: 'Custom shopping platforms, inventory management systems, and customer relationship tools tailored for online and physical stores.',
      color: 'from-primary-cyan to-accent-green'
    },
    {
      icon: <Landmark className="h-6 w-6" />,
      title: t('about.industries.finance'),
      description: 'Secure transaction systems, financial analysis tools, and regulatory compliant platforms for financial institutions.',
      color: 'from-accent-yellow to-secondary-pink'
    },
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: t('about.industries.education'),
      description: 'Interactive learning platforms, student management systems, and assessment tools for educational institutions.',
      color: 'from-secondary-purple to-primary-magenta'
    },
    {
      icon: <Stethoscope className="h-6 w-6" />,
      title: t('about.industries.healthcare'),
      description: 'Patient management systems, telehealth platforms, and medical data analysis tools for healthcare providers.',
      color: 'from-primary-magenta to-secondary-pink'
    },
    {
      icon: <Building className="h-6 w-6" />,
      title: t('about.industries.realestate'),
      description: 'Property management systems, virtual tour platforms, and customer relationship tools for real estate businesses.',
      color: 'from-accent-green to-accent-yellow'
    },
    {
      icon: <Factory className="h-6 w-6" />,
      title: t('about.industries.manufacturing'),
      description: 'Supply chain management, inventory tracking, and production optimization systems for manufacturing businesses.',
      color: 'from-primary-cyan to-secondary-purple'
    }
  ];
  
  return (
    <section className="py-24 relative overflow-hidden bg-dark cyber-grid">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-primary-cyan/5 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-primary-magenta/5 to-transparent"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16">
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
        
        <Tabs defaultValue="services" className="w-full">
          <TabsList className="w-full max-w-md mx-auto mb-10 bg-dark-border grid grid-cols-2 text-base">
            <TabsTrigger value="services" className="data-[state=active]:bg-dark-card data-[state=active]:text-primary-cyan">
              Services
            </TabsTrigger>
            <TabsTrigger value="industries" className="data-[state=active]:bg-dark-card data-[state=active]:text-primary-magenta">
              Industries
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="services" className="mt-6">
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-2 gap-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, staggerChildren: 0.1 }}
            >
              {services.map((service, index) => (
                <Card key={index} className="bg-dark-card border-dark-border overflow-hidden p-0">
                  <div className="p-6 sm:p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`p-3 rounded-full bg-dark/80 ${service.color}`}>
                        {service.icon}
                      </div>
                      <h2 className={`text-2xl font-bold font-display ${service.color}`}>
                        {service.title}
                      </h2>
                    </div>
                    
                    <p className="text-light/70 mb-6">
                      {service.description}
                    </p>
                    
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="features" className="border-dark-border">
                        <AccordionTrigger className="text-lg font-semibold text-light">
                          {t('services.keyFeatures')}
                        </AccordionTrigger>
                        <AccordionContent>
                          <ul className="list-disc pl-5 text-light/80 space-y-2">
                            {service.features.map((feature, idx) => (
                              <li key={idx}>{feature}</li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                      
                      <AccordionItem value="benefits" className="border-dark-border">
                        <AccordionTrigger className="text-lg font-semibold text-light">
                          {t('services.businessBenefits')}
                        </AccordionTrigger>
                        <AccordionContent>
                          <ul className="list-disc pl-5 text-light/80 space-y-2">
                            {service.benefits.map((benefit, idx) => (
                              <li key={idx}>{benefit}</li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                      
                      {service.technologies && (
                        <AccordionItem value="technologies" className="border-dark-border">
                          <AccordionTrigger className="text-lg font-semibold text-light">
                            {t('services.technologies')}
                          </AccordionTrigger>
                          <AccordionContent>
                            <div className="flex flex-wrap gap-2">
                              {service.technologies.map((tech, idx) => (
                                <Badge key={idx} variant="outline" className="bg-dark/60 text-light/80">
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      )}
                    </Accordion>
                    
                    <div className="mt-6 pt-4 border-t border-dark-border">
                      <Button variant="link" className={`p-0 h-auto ${service.color} font-medium hover:opacity-80 transition-opacity flex items-center gap-1`}>
                        {t('services.cta')}
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </motion.div>
          </TabsContent>
          
          <TabsContent value="industries" className="mt-6">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, staggerChildren: 0.1 }}
            >
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  className="p-6 rounded-lg border border-dark-border bg-dark-card hover:border-primary-cyan/30 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`p-2 rounded-full bg-gradient-to-r ${industry.color}`}>
                      {industry.icon}
                    </div>
                    <h3 className="text-xl font-bold font-display text-light">
                      {industry.title}
                    </h3>
                  </div>
                  <p className="text-light/70 mb-4">
                    {industry.description}
                  </p>
                  <Button variant="link" className="p-0 h-auto text-primary-cyan font-medium hover:opacity-80 transition-opacity flex items-center gap-1">
                    {t('services.learnMoreAboutSolutions')}
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
        </Tabs>
        
        <div className="mt-16 text-center">
          <motion.div
            className="inline-block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link href="/contact">
              <Button 
                className="bg-primary-magenta hover:bg-primary-magenta/90 text-dark font-medium px-8 py-2"
              >
                {t('contact.form.send')}
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}