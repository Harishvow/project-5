import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import styles from "./Hero.module.css"; // Make sure path is correct

export default function Hero() {
  const texts = ["Hi, I'm Harish", "FullStack Developer"];
  const [displayedText, setDisplayedText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (!deleting && charIndex <= texts[textIndex].length) {
      timeout = setTimeout(() => {
        setDisplayedText(texts[textIndex].slice(0, charIndex));
        setCharIndex((prev) => prev + 1);
      }, 150);
    } else if (deleting && charIndex >= 0) {
      timeout = setTimeout(() => {
        setDisplayedText(texts[textIndex].slice(0, charIndex));
        setCharIndex((prev) => prev - 1);
      }, 100);
    } else if (charIndex === texts[textIndex].length + 1) {
      timeout = setTimeout(() => setDeleting(true), 1000);
    } else if (charIndex === -1) {
      setDeleting(false);
      setTextIndex((prev) => (prev + 1) % texts.length);
      setCharIndex(0);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, textIndex, texts]);

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
          <span
            className={`${styles.typing} text-primary-500 dark:text-primary-400`}
            style={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              fontFamily: "monospace",
              display: "inline-block",
            }}
          >
            {displayedText}
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-secondary-600 dark:text-secondary-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          A passionate Python Developer crafting robust backend solutions and
          innovative web applications
        </p>

        <div className="flex items-center justify-center gap-4 flex-wrap">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-blue-600 text-white font-medium px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-[0_0_12px_rgba(59,130,246,0.5)] hover:bg-blue-500 active:bg-blue-600 focus:outline-none"
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
    </section>
  );
}
