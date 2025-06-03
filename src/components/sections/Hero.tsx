import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-4 relative overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-400/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-accent-400/20 rounded-full blur-3xl animate-float" />
      </div>

      {/* Main Content */}
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold text-secondary-900 dark:text-white mb-6 tracking-tight">
          <span className="typing-demo text-primary-500 dark:text-primary-400">
            Hi, I'm Harish
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-secondary-600 dark:text-secondary-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          A passionate Python Developer crafting robust backend solutions and innovative web applications
        </p>

        <div className="flex items-center justify-center gap-4 flex-wrap">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white font-medium px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-primary-500/25"
          >
            Get in Touch
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 bg-white dark:bg-secondary-800 text-secondary-900 dark:text-white font-medium px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-secondary-500/25"
          >
            View Projects
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Inline Scoped CSS for Typing Animation */}
      <style jsx>{`
        .typing-demo {
          width: 22ch;
          animation: typing 2s steps(22), blink 0.5s step-end infinite alternate;
          white-space: nowrap;
          overflow: hidden;
          border-right: 3px solid;
          font-family: monospace;
          display: inline-block;
        }

        @keyframes typing {
          from {
            width: 0;
          }
        }

        @keyframes blink {
          50% {
            border-color: transparent;
          }
        }
      `}</style>
    </section>
  );
}
