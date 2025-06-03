import { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 dark:bg-secondary-900/80 backdrop-blur-md shadow-md' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">
          Portfolio
        </div>
        
        <ul className="flex space-x-8">
          <li>
            <a href="#about" className="text-secondary-600 dark:text-secondary-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="text-secondary-600 dark:text-secondary-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="text-secondary-600 dark:text-secondary-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="text-secondary-600 dark:text-secondary-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}