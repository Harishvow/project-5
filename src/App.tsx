import { useEffect } from 'react';
import { ThemeToggle } from './components/ui/ThemeToggle';
import {SkillsGrid} from "@/components/skills/SkillsGrid";
import { allSkills } from "@/data/skills";
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Certifications from './components/sections/Certifications'; 
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';

function App() {
  useEffect(() => {
    const animateElements = document.querySelectorAll('.animate-on-scroll');

    const checkIfInView = () => {
      animateElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top < windowHeight * 0.85) {
          element.classList.add('is-visible');
        }
      });
    };

    checkIfInView();
    window.addEventListener('scroll', checkIfInView);

    return () => {
      window.removeEventListener('scroll', checkIfInView);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-primary-50 dark:from-secondary-950 dark:to-secondary-900 transition-colors duration-300 overflow-x-hidden flex flex-col items-center justify-center">
      <ThemeToggle />
      <Header />

      <main className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Background Blobs */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-400/20 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-accent-400/20 rounded-full blur-3xl animate-float" />
        </div>

        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <div className="w-full">
          <About />
        </div>

        {/* Skills Section */}        
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-50/30 to-transparent dark:via-primary-900/10" />
          <div className="relative text-center">
            <SkillsGrid skills={allSkills} />
          </div>
        </section>

        {/* Projects Section */}
        <div className="w-full">
          <Projects />
        </div>

        {/* Certifications Section */}
        <div className="w-full">
          <Certifications />
        </div>

        {/* Contact Section */}
        <div className="w-full">
          <Contact />
        </div>
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default App;