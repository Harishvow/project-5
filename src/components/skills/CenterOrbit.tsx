import { cn } from "@/lib/utils";

interface CenterOrbitProps {
  className?: string;
  title?: string;
}

export function CenterOrbit({ className, title = "SKILLS" }: CenterOrbitProps) {
  return (
    <div className={cn("relative", className)}>
      {/* Outer ring */}
      <div className="absolute inset-0 rounded-full border-2 border-primary-300/50 dark:border-primary-700/50 animate-spin-slow" />
      
      {/* Middle ring with gradient */}
      <div className="absolute inset-2 rounded-full overflow-hidden backdrop-blur-sm animate-spin-slow" style={{ animationDirection: "reverse", animationDuration: "25s" }}>
        <div className="absolute inset-0 bg-gradient-to-r from-primary-400/20 to-accent-400/20 dark:from-primary-600/20 dark:to-accent-600/20" />
      </div>
      
      {/* Inner content */}
      <div className="absolute inset-4 rounded-full bg-white/80 dark:bg-secondary-800/80 backdrop-blur-md flex items-center justify-center shadow-lg animate-pulse-glow">
        <span className="text-lg md:text-xl font-bold text-secondary-900 dark:text-white tracking-wider">
          {title}
        </span>
      </div>
    </div>
  );
}