import { useEffect } from 'react';
import { ThemeToggle } from './components/ui/ThemeToggle';
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
    <div className="min-h-screen bg-gradient-to-br from-white to-primary-50 dark:from-secondary-950 dark:to-secondary-900 transition-colors duration-300">
      <ThemeToggle />
      <Header />

      <main className="relative">
  
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-400/20 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-accent-400/20 rounded-full blur-3xl animate-float" />
        </div>

        <Hero />
        <About />

        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-50/30 to-transparent dark:via-primary-900/10" />
          <header className="relative pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 dark:text-white mb-4 tracking-tight">
              My <span className="text-primary-500 dark:text-primary-400">Skillset</span>
            </h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-300 max-w-2xl mx-auto">
              A visual representation of my technical expertise and proficiency in various tools and technologies.
            </p>
          </header>
        </section>
          <Projects />

        <Certifications />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
