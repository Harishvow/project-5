import { CSSProperties } from "react";
import { cn } from "@/lib/utils";

interface SkillIconProps {
  name: string;
  icon: string;
  color: string;
  size?: "sm" | "md" | "lg";
  animationDelay?: string;
  animationType?: "float" | "pulse-glow" | "orbit" | "orbit-reverse" | "orbit-slow";
  className?: string;
  proficiency?: number;
}

export function SkillIcon({
  name,
  icon,
  color,
  size = "md",
  animationDelay = "0s",
  animationType = "float",
  className,
  proficiency = 100,
}: SkillIconProps) {
  const sizeClasses = {
    sm: "w-12 h-12 md:w-14 md:h-14",
    md: "w-16 h-16 md:w-20 md:h-20",
    lg: "w-20 h-20 md:w-24 md:h-24",
  };

  const style = {
    "--animation-delay": animationDelay,
    "--icon-color": color,
  } as CSSProperties;

  return (
    <div
      className={cn(
        "relative group",
        animationType === "float" && "animate-float",
        animationType === "pulse-glow" && "animate-pulse-glow",
        animationType === "orbit" && "animate-orbit",
        animationType === "orbit-reverse" && "animate-orbit-reverse",
        animationType === "orbit-slow" && "animate-orbit-slow",
        className
      )}
      style={{
        animationDelay,
      }}
    >
      <div
        className={cn(
          "relative flex items-center justify-center rounded-full bg-white dark:bg-secondary-800 shadow-md transition-transform duration-300 group-hover:scale-110 overflow-hidden",
          sizeClasses[size]
        )}
        style={style}
      >
        {/* Border glow effect */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            border: `2px solid ${color}`,
            boxShadow: `0 0 10px 0 ${color}40`,
            opacity: 0.8,
          }}
        ></div>

        {/* Skill icon */}
        <img
          src={icon}
          alt={name}
          className="w-1/2 h-1/2 object-contain z-10"
        />
        
        {/* Proficiency indicator */}
        <svg className="absolute inset-0 w-full h-full -rotate-90">
          <circle
            cx="50%"
            cy="50%"
            r="48%"
            fill="none"
            stroke={`${color}30`}
            strokeWidth="4%"
            className="opacity-40"
          />
          <circle
            cx="50%"
            cy="50%"
            r="48%"
            fill="none"
            stroke={color}
            strokeWidth="4%"
            strokeDasharray={`${proficiency * 3.02} 1000`}
            className="transition-all duration-1000 ease-in-out"
          />
        </svg>
      </div>
      
      {/* Tooltip */}
      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap bg-white dark:bg-secondary-800 text-secondary-800 dark:text-white px-2 py-1 rounded text-xs font-medium shadow-lg z-20">
        {name}
      </div>
    </div>
  );
}