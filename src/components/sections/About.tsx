import { Code2, Server, Cpu } from 'lucide-react';
import { education } from '@/data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white/50 dark:bg-secondary-900/50 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-primary-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-accent-400/10 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white mb-6">
            About <span className="text-primary-500 dark:text-primary-400">Me</span>
          </h2>
          <p className="text-lg text-secondary-600 dark:text-secondary-300 mb-12 leading-relaxed">
            Python Developer with hands-on experience in projects, specializing in RESTful API development, backend logic, and
            database integration using Flask, FastAPI, and SQLite. Delivers clean, scalable code and collaborates well in team environments.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="p-6 bg-white dark:bg-secondary-800 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code2 className="w-6 h-6 text-primary-500 dark:text-primary-400" />
              </div>
              <h3 className="text-xl font-semibold text-primary-500 dark:text-primary-400 mb-2">Backend Development</h3>
              <p className="text-secondary-600 dark:text-secondary-300">Building robust and scalable server solutions</p>
            </div>
            
            <div className="p-6 bg-white dark:bg-secondary-800 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Server className="w-6 h-6 text-primary-500 dark:text-primary-400" />
              </div>
              <h3 className="text-xl font-semibold text-primary-500 dark:text-primary-400 mb-2">API Development</h3>
              <p className="text-secondary-600 dark:text-secondary-300">Creating efficient and secure REST APIs</p>
            </div>
            
            <div className="p-6 bg-white dark:bg-secondary-800 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cpu className="w-6 h-6 text-primary-500 dark:text-primary-400" />
              </div>
              <h3 className="text-xl font-semibold text-primary-500 dark:text-primary-400 mb-2">Database Design</h3>
              <p className="text-secondary-600 dark:text-secondary-300">Optimizing data storage and retrieval</p>
            </div>
          </div>
          
          <div className="bg-white dark:bg-secondary-800 rounded-xl p-6 shadow-lg">
            <h3 className="text-2xl font-bold text-secondary-900 dark:text-white mb-6">Education</h3>
            {education.map((edu) => (
              <div key={edu.id} className="mb-4 last:mb-0">
                <h4 className="text-lg font-semibold text-primary-500 dark:text-primary-400">{edu.degree}</h4>
                <p className="text-secondary-600 dark:text-secondary-300">{edu.institution}</p>
                <p className="text-sm text-secondary-500 dark:text-secondary-400">{edu.duration}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}