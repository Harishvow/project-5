import { SkillIcon } from "./SkillIcon";
import { OrbitLayout } from "./OrbitLayout";
import { allSkills } from "@/data/skills";

export function SkillsOrbit() {
  // Select a subset of skills for the orbit
  const orbitSkills = allSkills.slice(0, 12);
  
  // Define orbital positions
  const orbitalPositions = [
    { top: '15%', left: '50%', transform: 'translateX(-50%)' },
    { top: '25%', left: '20%' },
    { top: '30%', right: '20%' },
    { top: '50%', left: '10%', transform: 'translateY(-50%)' },
    { top: '50%', right: '10%', transform: 'translateY(-50%)' },
    { bottom: '30%', left: '20%' },
    { bottom: '30%', right: '20%' },
    { bottom: '15%', left: '50%', transform: 'translateX(-50%)' },
    { top: '35%', left: '30%' },
    { top: '35%', right: '30%' },
    { bottom: '35%', left: '30%' },
    { bottom: '35%', right: '30%' },
  ];

  // Animation types to cycle through
  const animations = [
    'animate-float',
    'animate-pulse-glow',
    'animate-orbit',
    'animate-orbit-reverse',
    'animate-orbit-slow',
  ];

  return (
    <div className="w-full max-w-5xl mx-auto relative h-[600px] my-12">
      <OrbitLayout centerTitle="SKILLS">
        {orbitSkills.map((skill, index) => (
          <OrbitLayout.Item
            key={skill.id}
            position={orbitalPositions[index % orbitalPositions.length]}
            delay={`${index * 0.2}s`}
            animation={animations[index % animations.length]}
          >
            <SkillIcon
              name={skill.name}
              icon={skill.icon}
              color={skill.color}
              size={index % 3 === 0 ? "lg" : index % 3 === 1 ? "md" : "sm"}
              proficiency={skill.proficiency}
            />
          </OrbitLayout.Item>
        ))}
      </OrbitLayout>
    </div>
  );
}