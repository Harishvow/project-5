import { useState } from "react";
import { SkillIcon } from "./SkillIcon";
import { cn } from "@/lib/utils";

export interface Skill {
  id: string;
  name: string;
  icon: string;
  color: string;
  proficiency: number;
}

interface SkillCategoryProps {
  title: string;
  skills: Skill[];
  className?: string;
}

export function SkillCategory({ title, skills, className }: SkillCategoryProps) {
  const [expanded, setExpanded] = useState(true);

  const animationTypes = [
    "float",
    "pulse-glow",
    "orbit",
    "orbit-reverse",
    "orbit-slow",
  ];

  return (
    <div className={cn("mb-8", className)}>
      <button
        onClick={() => setExpanded(!expanded)}
        className="flex items-center space-x-2 mb-4 text-lg font-semibold text-secondary-800 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
      >
        <span>{title}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`transition-transform duration-300 ${expanded ? "rotate-180" : "rotate-0"}`}
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>
      
      <div
        className={cn(
          "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 transition-all duration-500 ease-in-out",
          expanded ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        )}
      >
        {skills.map((skill, index) => (
          <SkillIcon
            key={skill.id}
            name={skill.name}
            icon={skill.icon}
            color={skill.color}
            size={index % 3 === 0 ? "lg" : index % 3 === 1 ? "md" : "sm"}
            animationType={animationTypes[index % animationTypes.length] as any}
            animationDelay={`${(index * 0.2) % 3}s`}
            proficiency={skill.proficiency}
          />
        ))}
      </div>
    </div>
  );
}