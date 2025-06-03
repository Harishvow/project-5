import { useState, useEffect } from "react";
import { SkillCategory, Skill } from "./SkillCategory";
import { categories, allSkills } from "@/data/skills";
import { cn } from "@/lib/utils";

interface SkillsShowcaseProps {
  className?: string;
}

export function SkillsShowcase({ className }: SkillsShowcaseProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [filteredSkills, setFilteredSkills] = useState<Record<string, Skill[]>>(
    categories.reduce((acc, category) => {
      acc[category.id] = allSkills.filter(
        (skill) => skill.categoryId === category.id
      );
      return acc;
    }, {} as Record<string, Skill[]>)
  );
  
  const [searchTerm, setSearchTerm] = useState("");
  
  useEffect(() => {
    if (selectedCategory === "all" && searchTerm === "") {
      // Show all skills grouped by category
      setFilteredSkills(
        categories.reduce((acc, category) => {
          acc[category.id] = allSkills.filter(
            (skill) => skill.categoryId === category.id
          );
          return acc;
        }, {} as Record<string, Skill[]>)
      );
    } else {
      // Filter by category and/or search term
      const filtered = allSkills.filter((skill) => {
        const matchesCategory = selectedCategory === "all" || skill.categoryId === selectedCategory;
        const matchesSearch = searchTerm === "" || skill.name.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
      });
      
      // Group filtered skills by category
      if (selectedCategory === "all") {
        setFilteredSkills(
          categories.reduce((acc, category) => {
            acc[category.id] = filtered.filter(
              (skill) => skill.categoryId === category.id
            );
            return acc;
          }, {} as Record<string, Skill[]>)
        );
      } else {
        setFilteredSkills({ [selectedCategory]: filtered });
      }
    }
  }, [selectedCategory, searchTerm]);

  return (
    <div className={cn("relative py-12 px-4 sm:px-6 lg:px-8", className)}>
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-64 h-64 bg-primary-400/20 dark:bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-accent-400/20 dark:bg-accent-500/10 rounded-full blur-3xl" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white mb-4 tracking-tight">
            My <span className="text-primary-500 dark:text-primary-400">Skills</span>
          </h2>
          <p className="text-secondary-600 dark:text-secondary-300 max-w-2xl mx-auto">
            A collection of technologies, tools and skills I've worked with throughout my journey.
          </p>
        </div>
        
        {/* Filters */}
        <div className="mb-10 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-wrap gap-2 justify-center md:justify-start">
            <button
              onClick={() => setSelectedCategory("all")}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all",
                selectedCategory === "all"
                  ? "bg-primary-500 text-white shadow-lg shadow-primary-500/25"
                  : "bg-white dark:bg-secondary-800 text-secondary-600 dark:text-secondary-300 hover:bg-primary-50 dark:hover:bg-secondary-700"
              )}
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all",
                  selectedCategory === category.id
                    ? "bg-primary-500 text-white shadow-lg shadow-primary-500/25"
                    : "bg-white dark:bg-secondary-800 text-secondary-600 dark:text-secondary-300 hover:bg-primary-50 dark:hover:bg-secondary-700"
                )}
              >
                {category.name}
              </button>
            ))}
          </div>
          
          <div className="relative w-full md:w-64">
            <input
              type="text"
              placeholder="Search skills..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 rounded-full bg-white dark:bg-secondary-800 text-secondary-800 dark:text-white border border-secondary-200 dark:border-secondary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-secondary-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
        
        {/* Skills grid */}
        <div className="bg-white/80 dark:bg-secondary-900/80 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-xl">
          {Object.entries(filteredSkills).map(([categoryId, skills]) => {
            if (skills.length === 0) return null;
            
            const category = categories.find((c) => c.id === categoryId);
            return (
              <SkillCategory
                key={categoryId}
                title={category?.name || ""}
                skills={skills}
                className="animate-fade-in"
                // Add staggered animation delay
                style={{ animationDelay: `${categories.findIndex((c) => c.id === categoryId) * 0.1}s` }}
              />
            );
          })}
          
          {Object.values(filteredSkills).every((skills) => skills.length === 0) && (
            <div className="text-center py-12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 mx-auto text-secondary-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h3 className="mt-4 text-xl font-medium text-secondary-700 dark:text-secondary-300">
                No skills found
              </h3>
              <p className="mt-2 text-secondary-500 dark:text-secondary-400">
                Try adjusting your search or filters
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}