import { ArrowDownToLine, Code2, Server, Cpu } from 'lucide-react';
import { education } from '@/data/portfolioData';
import "@fontsource/press-start-2p";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-white/50 dark:bg-secondary-900/50 relative overflow-hidden"
    >
      {/* Background Blur Circles */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-primary-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-accent-400/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Flex Container for About + Skills */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:gap-12 mb-12">
          {/* About Me Section */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white mb-6 font-['Press_Start_2P']">
              About <span className="text-primary-500 dark:text-primary-400">Me</span>
            </h2>

            <p className="text-lg text-secondary-600 dark:text-secondary-300 leading-relaxed">
              Python Developer with hands-on experience in projects, specializing in RESTful API development, backend logic, and
              database integration using Flask, FastAPI, and SQLite. Delivers clean, scalable code and collaborates well in team environments.
            </p>

            {/* Resume Download Button */}
            <a
              href="/Harish Resume.pdf"
              download
              className="group mt-6 inline-flex items-center gap-2 px-6 py-2 text-sm font-semibold text-white bg-primary-500 hover:bg-primary-600 dark:bg-primary-400 dark:hover:bg-primary-300 rounded-lg transition-all duration-300"
            >
              <ArrowDownToLine className="w-5 h-5 group-hover:animate-bounce" />
              Download Resume
            </a>
          </div>

          {/* Skills Section */}
          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 lg:mt-0">
            {/* Backend */}
            <div className="p-6 bg-white dark:bg-secondary-800 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/50 rounded-full flex items-center justify-center mb-4">
                <Code2 className="w-6 h-6 text-primary-500 dark:text-primary-400" />
              </div>
              <h3 className="text-xl font-semibold text-primary-500 dark:text-primary-400 mb-2">Backend Development</h3>
              <p className="text-secondary-600 dark:text-secondary-300">Building robust and scalable server solutions</p>
            </div>

            {/* API */}
            <div className="p-6 bg-white dark:bg-secondary-800 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/50 rounded-full flex items-center justify-center mb-4">
                <Server className="w-6 h-6 text-primary-500 dark:text-primary-400" />
              </div>
              <h3 className="text-xl font-semibold text-primary-500 dark:text-primary-400 mb-2">API Development</h3>
              <p className="text-secondary-600 dark:text-secondary-300">Creating efficient and secure REST APIs</p>
            </div>

            {/* Database */}
            <div className="p-6 bg-white dark:bg-secondary-800 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 sm:col-span-2">
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/50 rounded-full flex items-center justify-center mb-4">
                <Cpu className="w-6 h-6 text-primary-500 dark:text-primary-400" />
              </div>
              <h3 className="text-xl font-semibold text-primary-500 dark:text-primary-400 mb-2">Database Design</h3>
              <p className="text-secondary-600 dark:text-secondary-300">Optimizing data storage and retrieval</p>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="bg-white dark:bg-secondary-800 rounded-xl p-6 shadow-lg max-w-3xl mx-auto">
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
    </section>
  );
}
