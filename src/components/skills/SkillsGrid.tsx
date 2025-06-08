import React from "react";
import { Skill } from "@/data/skills";

interface SkillsGridProps {
  skills: Skill[];
}

export const SkillsGrid: React.FC<SkillsGridProps> = ({ skills }) => {
  if (skills.length === 0) return null;

  return (
    <section className="py-24 relative overflow-hidden" id="skills">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-50/30 to-transparent dark:via-primary-900/10" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 dark:text-white mb-4 tracking-tight">
          My <span className="text-primary-500 dark:text-primary-400">Skillset</span>
        </h2>
        <p className="text-lg text-secondary-600 dark:text-secondary-300 max-w-2xl mx-auto mb-12">
          A showcase of my technical expertise and proficiency in various tools and technologies.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="flex flex-col items-center bg-white dark:bg-secondary-800 rounded-lg p-6 shadow hover:shadow-lg transition-shadow cursor-default"
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-16 h-16 mb-4"
                style={{ color: skill.color }}
              />
              <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-2">
                {skill.name}
              </h3>
              <div className="w-full bg-secondary-200 dark:bg-secondary-700 rounded-full h-2">
                <div
                  className="bg-primary-500 dark:bg-primary-400 h-2 rounded-full"
                  style={{ width: `${skill.proficiency}%` }}
                ></div>
              </div>
              <span className="text-sm text-secondary-600 dark:text-secondary-300 mt-2">
                Proficiency: {skill.proficiency}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsGrid;