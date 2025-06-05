export interface Category {
  id: string;
  name: string;
}

export interface Skill {
  id: string;
  name: string;
  icon: string;
  color: string;
  proficiency: number;
  categoryId: string;
}

export const categories: Category[] = [
  {
    id: "frontend",
    name: "Frontend Development",
  },
  {
    id: "backend",
    name: "Backend Development",
  },
  {
    id: "design",
    name: "Design Tools",
  },
  {
    id: "devops",
    name: "DevOps & Infrastructure",
  },
  {
    id: "other",
    name: "Other Tools",
  },
];

export const allSkills: Skill[] = [
  // Frontend Development
  {
    id: "react",
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    color: "#61DAFB",
    proficiency: 20,
    categoryId: "frontend",
  },
  {
    id: "typescript",
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    color: "#3178C6",
    proficiency: 10,
    categoryId: "frontend",
  },
  {
    id: "html",
    name: "HTML5",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    color: "#E34F26",
    proficiency: 20,
    categoryId: "frontend",
  },
  {
    id: "css",
    name: "CSS3",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    color: "#1572B6",
    proficiency: 20,
    categoryId: "frontend",
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    color: "#06B6D4",
    proficiency: 10,
    categoryId: "frontend",
  },
  
  // Backend Development
  
  {
    id: "python",
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    color: "#3776AB",
    proficiency: 85,
    categoryId: "backend",
  },
 
  
  // Design Tools
  {
    id: "figma",
    name: "Figma",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    color: "#F24E1E",
    proficiency: 50,
    categoryId: "design",
  },
  
  // DevOps & Infrastructure
  {
    id: "git",
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    color: "#F05032",
    proficiency: 40,
    categoryId: "devops",
  },
  {
    id: "github",
    name: "GitHub",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    color: "#181717",
    proficiency: 95,
    categoryId: "devops",
  },]