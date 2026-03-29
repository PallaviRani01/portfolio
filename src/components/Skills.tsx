import { useEffect, useRef, useState } from 'react';

interface Skill {
  name: string;
  category: string;
  level: string;
}

interface SkillsProps {
  skills: Skill[];
}

export default function Skills({ skills }: SkillsProps) {
  const [visibleSkills, setVisibleSkills] = useState<Set<number>>(new Set());
  const skillRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute('data-index'));
          if (entry.isIntersecting) {
            setVisibleSkills((prev) => new Set(prev).add(index));
          }
        });
      },
      { threshold: 0.1 }
    );

    skillRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const getCategoryClass = (category: string) => {
    const categoryMap: Record<string, string> = {
      languages: 'skill-languages',
      tools: 'skill-tools',
      databases: 'skill-databases',
      frameworks: 'skill-frameworks',
      soft: 'skill-soft',
    };
    return categoryMap[category] || 'skill-languages';
  };

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          Skills & Expertise
        </h2>
        <div className="flex flex-wrap gap-4 justify-center">
          {skills.map((skill, index) => (
            <div
              key={index}
              ref={(el) => (skillRefs.current[index] = el)}
              data-index={index}
              className={`skill-badge ${getCategoryClass(skill.category)} ${
                visibleSkills.has(index) ? 'animate-bounce-in' : 'opacity-0'
              }`}
              style={{
                animationDelay: `${(index % 10) * 0.1}s`,
              }}
            >
              {skill.name}
              <span className="level-tag">{skill.level}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
