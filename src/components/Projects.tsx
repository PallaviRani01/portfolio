interface Project {
  title: string;
  description: string;
  technologies: string[];
  theme: string;
}

interface ProjectsProps {
  projects: Project[];
}

function ProjectBanner({ theme }: { theme: string }) {
  const bannerStyles: Record<string, { bg: string; shapes: JSX.Element }> = {
    analytics: {
      bg: 'from-blue-500 to-cyan-600',
      shapes: (
        <>
          <rect x="10" y="40" width="30" height="50" fill="rgba(255,255,255,0.2)" rx="2"/>
          <rect x="45" y="25" width="30" height="65" fill="rgba(255,255,255,0.3)" rx="2"/>
          <rect x="80" y="35" width="30" height="55" fill="rgba(255,255,255,0.25)" rx="2"/>
          <polyline points="15,70 45,45 75,55 105,30" stroke="rgba(255,255,255,0.6)" strokeWidth="2" fill="none"/>
          <circle cx="15" cy="70" r="3" fill="white"/>
          <circle cx="45" cy="45" r="3" fill="white"/>
          <circle cx="75" cy="55" r="3" fill="white"/>
          <circle cx="105" cy="30" r="3" fill="white"/>
        </>
      ),
    },
    nlp: {
      bg: 'from-purple-500 to-pink-600',
      shapes: (
        <>
          <text x="10" y="30" fill="rgba(255,255,255,0.3)" fontSize="16" fontFamily="monospace">Natural</text>
          <text x="10" y="50" fill="rgba(255,255,255,0.4)" fontSize="16" fontFamily="monospace">Language</text>
          <text x="10" y="70" fill="rgba(255,255,255,0.5)" fontSize="16" fontFamily="monospace">Processing</text>
          <path d="M 100 20 Q 120 40 100 60 Q 80 40 100 20" fill="rgba(255,255,255,0.2)"/>
          <circle cx="110" cy="40" r="2" fill="white"/>
          <circle cx="90" cy="40" r="2" fill="white"/>
        </>
      ),
    },
    vision: {
      bg: 'from-green-500 to-teal-600',
      shapes: (
        <>
          <rect x="20" y="20" width="80" height="60" fill="rgba(255,255,255,0.1)" rx="4" stroke="rgba(255,255,255,0.4)" strokeWidth="2"/>
          <rect x="30" y="30" width="25" height="25" fill="rgba(255,255,255,0.3)" rx="2"/>
          <rect x="65" y="30" width="25" height="25" fill="rgba(255,255,255,0.3)" rx="2"/>
          <rect x="30" y="60" width="60" height="15" fill="rgba(255,255,255,0.2)" rx="2"/>
          <path d="M 110 30 L 120 35 L 110 40" fill="rgba(255,255,255,0.5)"/>
          <circle cx="42.5" cy="42.5" r="3" fill="white"/>
          <circle cx="77.5" cy="42.5" r="3" fill="white"/>
        </>
      ),
    },
    timeseries: {
      bg: 'from-orange-500 to-red-600',
      shapes: (
        <>
          <line x1="10" y1="80" x2="110" y2="80" stroke="rgba(255,255,255,0.3)" strokeWidth="1"/>
          <line x1="10" y1="20" x2="10" y2="80" stroke="rgba(255,255,255,0.3)" strokeWidth="1"/>
          <path d="M 10 70 Q 30 50 40 60 T 70 40 T 110 30" stroke="rgba(255,255,255,0.6)" strokeWidth="3" fill="none"/>
          <path d="M 10 75 Q 30 55 40 65 T 70 45 T 110 35 L 110 80 L 10 80" fill="rgba(255,255,255,0.1)"/>
          <circle cx="10" cy="70" r="3" fill="white"/>
          <circle cx="40" cy="60" r="3" fill="white"/>
          <circle cx="70" cy="40" r="3" fill="white"/>
          <circle cx="110" cy="30" r="3" fill="white"/>
        </>
      ),
    },
  };

  const style = bannerStyles[theme] || bannerStyles.analytics;

  return (
    <div className={`w-full h-32 bg-gradient-to-r ${style.bg} rounded-t-xl overflow-hidden`}>
      <svg viewBox="0 0 120 90" className="w-full h-full opacity-80">
        {style.shapes}
      </svg>
    </div>
  );
}

export default function Projects({ projects }: ProjectsProps) {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass-card overflow-hidden project-card"
            >
              <ProjectBanner theme={project.theme} />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-foreground">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
