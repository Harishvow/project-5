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
    proficiency: 95,
    categoryId: "frontend",
  },
  {
    id: "typescript",
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    color: "#3178C6",
    proficiency: 90,
    categoryId: "frontend",
  },
  {
    id: "javascript",
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    color: "#F7DF1E",
    proficiency: 95,
    categoryId: "frontend",
  },
  {
    id: "html",
    name: "HTML5",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    color: "#E34F26",
    proficiency: 98,
    categoryId: "frontend",
  },
  {
    id: "css",
    name: "CSS3",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    color: "#1572B6",
    proficiency: 95,
    categoryId: "frontend",
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
    color: "#06B6D4",
    proficiency: 92,
    categoryId: "frontend",
  },
  {
    id: "nextjs",
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    color: "#000000",
    proficiency: 88,
    categoryId: "frontend",
  },
  {
    id: "vue",
    name: "Vue.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
    color: "#4FC08D",
    proficiency: 75,
    categoryId: "frontend",
  },
  
  // Backend Development
  {
    id: "nodejs",
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    color: "#339933",
    proficiency: 90,
    categoryId: "backend",
  },
  {
    id: "express",
    name: "Express.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    color: "#000000",
    proficiency: 85,
    categoryId: "backend",
  },
  {
    id: "python",
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    color: "#3776AB",
    proficiency: 80,
    categoryId: "backend",
  },
  {
    id: "mongodb",
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    color: "#47A248",
    proficiency: 85,
    categoryId: "backend",
  },
  {
    id: "postgresql",
    name: "PostgreSQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    color: "#4169E1",
    proficiency: 80,
    categoryId: "backend",
  },
  {
    id: "graphql",
    name: "GraphQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
    color: "#E10098",
    proficiency: 75,
    categoryId: "backend",
  },
  
  // Design Tools
  {
    id: "figma",
    name: "Figma",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    color: "#F24E1E",
    proficiency: 90,
    categoryId: "design",
  },
  {
    id: "photoshop",
    name: "Photoshop",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg",
    color: "#31A8FF",
    proficiency: 80,
    categoryId: "design",
  },
  {
    id: "illustrator",
    name: "Illustrator",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg",
    color: "#FF9A00",
    proficiency: 75,
    categoryId: "design",
  },
  {
    id: "xd",
    name: "Adobe XD",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg",
    color: "#FF61F6",
    proficiency: 85,
    categoryId: "design",
  },
  {
    id: "sketch",
    name: "Sketch",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sketch/sketch-original.svg",
    color: "#F7B500",
    proficiency: 70,
    categoryId: "design",
  },
  
  // DevOps & Infrastructure
  {
    id: "git",
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    color: "#F05032",
    proficiency: 90,
    categoryId: "devops",
  },
  {
    id: "docker",
    name: "Docker",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    color: "#2496ED",
    proficiency: 80,
    categoryId: "devops",
  },
  {
    id: "aws",
    name: "AWS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
    color: "#FF9900",
    proficiency: 75,
    categoryId: "devops",
  },
  {
    id: "github",
    name: "GitHub",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    color: "#181717",
    proficiency: 95,
    categoryId: "devops",
  },
  {
    id: "vercel",
    name: "Vercel",
    icon: "https://www.svgrepo.com/show/354512/vercel.svg",
    color: "#000000",
    proficiency: 85,
    categoryId: "devops",
  },
  
  // Other Tools
  {
    id: "vscode",
    name: "VS Code",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    color: "#007ACC",
    proficiency: 95,
    categoryId: "other",
  },
  {
    id: "unity",
    name: "Unity",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg",
    color: "#000000",
    proficiency: 65,
    categoryId: "other",
  },
  {
    id: "jira",
    name: "Jira",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg",
    color: "#0052CC",
    proficiency: 80,
    categoryId: "other",
  },
  {
    id: "npm",
    name: "npm",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
    color: "#CB3837",
    proficiency: 90,
    categoryId: "other",
  },
  {
    id: "webpack",
    name: "Webpack",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg",
    color: "#8DD6F9",
    proficiency: 80,
    categoryId: "other",
  },
];