import { projects } from '@/data/portfolioData';

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white/50 dark:bg-secondary-900/50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-1/3 w-64 h-64 bg-primary-400/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-accent-400/10 rounded-full blur-3xl animate-pulse-slow" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-secondary-900 dark:text-white mb-12 animate-on-scroll">
          Featured <span className="text-primary-500 dark:text-primary-400">Projects</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="group bg-white dark:bg-secondary-800 rounded-xl overflow-hidden shadow-lg transition-all duration-500 hover:scale-105 animate-on-scroll hover:shadow-xl hover:shadow-primary-500/10"
              style={{
                animationDelay: `${index * 200}ms`,
              }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-6 relative">
                {/* Animated border on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary-500 to-transparent animate-slide-right" />
                  <div className="absolute top-0 right-0 w-[2px] h-full bg-gradient-to-b from-transparent via-primary-500 to-transparent animate-slide-down" />
                  <div className="absolute bottom-0 right-0 w-full h-[2px] bg-gradient-to-l from-transparent via-primary-500 to-transparent animate-slide-left" />
                  <div className="absolute bottom-0 left-0 w-[2px] h-full bg-gradient-to-t from-transparent via-primary-500 to-transparent animate-slide-up" />
                </div>
                
                <h3 className="text-xl font-semibold text-secondary-900 dark:text-white mb-2 transition-colors duration-300 group-hover:text-primary-500 dark:group-hover:text-primary-400">
                  {project.title}
                </h3>
                <p className="text-secondary-600 dark:text-secondary-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-300 rounded-full text-sm transition-transform duration-300 hover:scale-110"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary-500 hover:text-primary-600 dark:text-primary-400 dark:hover:text-primary-300 font-medium transition-all duration-300 hover:translate-x-1"
                    >
                      Live Demo →
                    </a>
                  )}
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-secondary-500 hover:text-secondary-600 dark:text-secondary-400 dark:hover:text-secondary-300 font-medium transition-all duration-300 hover:translate-x-1"
                  >
                    GitHub →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}