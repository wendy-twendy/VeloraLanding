import { useState, useEffect } from "react";
import { Switch, Route } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import Projects from "@/pages/Projects";
import NotFound from "@/pages/not-found";
import { LanguageProvider } from "@/hooks/useLanguage";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ScrollToTop";

function App() {
  const [mounted, setMounted] = useState(false);

  // Ensure hydration completes
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <LanguageProvider>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/services" component={Services} />
            <Route path="/projects" component={Projects} />
            <Route path="/portfolio" component={Projects} />
            <Route component={NotFound} />
          </Switch>
        </main>
        <Footer />
        <ScrollToTop />
        <Toaster />
      </div>
    </LanguageProvider>
  );
}

export default App;
