import React from "react";
import { Skill } from "@/data/skills";

interface SkillCategoryProps {
  title: string;
  skills: Skill[];
  className?: string;
  style?: React.CSSProperties;
}

export const SkillCategory: React.FC<SkillCategoryProps> = ({
  title,
  skills,
  className,
  style,
}) => {
  if (skills.length === 0) return null;

  return (
    <section className={`mb-10 ${className || ""}`} style={style}>
      <h3 className="text-2xl font-semibold mb-4 text-secondary-900 dark:text-white">
        {title}
      </h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="flex flex-col items-center bg-white dark:bg-secondary-800 rounded-lg p-4 shadow hover:shadow-lg transition-shadow cursor-default"
          >
            <img
              src={skill.icon}
              alt={skill.name}
              className="w-12 h-12 mb-2"
              style={{ color: skill.color }}
            />
            <span className="text-sm font-medium text-secondary-800 dark:text-secondary-200">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillCategory;
