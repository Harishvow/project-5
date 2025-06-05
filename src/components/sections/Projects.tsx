import { useEffect, useRef, useState } from 'react';
import { projects } from '@/data/portfolioData';

export default function Projects() {
  const [visibleProjects, setVisibleProjects] = useState<{ [key: number]: boolean }>({});
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    refs.current = refs.current.slice(0, projects.length);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const indexStr = entry.target.getAttribute('data-index');
        if (entry.isIntersecting && indexStr !== null) {
          const index = parseInt(indexStr, 10);
          setVisibleProjects((prev) => ({ ...prev, [index]: true }));
        }
      });
    }, { threshold: 0.1 });

    refs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      refs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <>
      <style>{`
        @keyframes fadeSlideUp {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @keyframes zoomIn {
          0% { opacity: 0; transform: scale(0.8); }
          100% { opacity: 1; transform: scale(1); }
        }

        @keyframes flipInX {
          0% { opacity: 0; transform: rotateX(90deg); }
          100% { opacity: 1; transform: rotateX(0); }
        }

        @keyframes rotateInLeft {
          0% { opacity: 0; transform: rotate(-10deg) translateX(-100px); }
          100% { opacity: 1; transform: rotate(0) translateX(0); }
        }

        @keyframes bounceIn {
          0%, 20%, 40%, 60%, 80%, 100% {
            animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
          }
          0% { opacity: 0; transform: scale3d(0.3, 0.3, 0.3); }
          20% { transform: scale3d(1.1, 1.1, 1.1); }
          40% { transform: scale3d(0.9, 0.9, 0.9); }
          60% { opacity: 1; transform: scale3d(1.03, 1.03, 1.03); }
          80% { transform: scale3d(0.97, 0.97, 0.97); }
          100% { transform: scale3d(1, 1, 1); }
        }

        @keyframes slideInBottom {
          0% { opacity: 0; transform: translateY(100px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        .animated-card {
          opacity: 0;
        }

        .fadeSlideUp.visible { 
          animation: fadeSlideUp 1.2s forwards; 
          opacity: 1;
        }
        .zoomIn.visible { 
          animation: zoomIn 1.2s forwards; 
          opacity: 1;
        }
        .flipInX.visible { 
          animation: flipInX 1.2s forwards; 
          opacity: 1;
        }
        .rotateInLeft.visible { 
          animation: rotateInLeft 1.2s forwards; 
          opacity: 1;
        }
        .bounceIn.visible { 
          animation: bounceIn 1.5s forwards; 
          opacity: 1;
        }
        .slideInBottom.visible { 
          animation: slideInBottom 1.2s forwards; 
          opacity: 1;
        }
      `}</style>

      <section id="projects" className="py-20 bg-white/50 dark:bg-secondary-900/50 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-secondary-900 dark:text-white mb-12">
            Featured <span className="text-primary-500 dark:text-primary-400">Projects</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => {
              const animationClasses = [
                'fadeSlideUp',
                'zoomIn',
                'flipInX',
                'rotateInLeft',
                'bounceIn',
                'slideInBottom'
              ];
              const animationClass = animationClasses[index % animationClasses.length];

              return (
                <div
                  key={project.id}
                  data-index={index}
                  ref={(el) => (refs.current[index] = el)}
                  className={`animated-card ${animationClass} ${visibleProjects[index] ? 'visible' : ''} 
                    group bg-white dark:bg-secondary-800 rounded-xl overflow-hidden shadow-lg hover:scale-105 hover:shadow-xl hover:shadow-primary-500/10
                    transition-transform duration-700`}
                  style={{ transitionDelay: `${index * 100}ms` }}
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
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

