interface Achievement {
  title: string;
  description: string;
  year: string;
}

interface Certification {
  title: string;
  issuer: string;
  year: string;
}

interface AchievementsProps {
  achievements: Achievement[];
  certifications: Certification[];
}

export default function Achievements({ achievements, certifications }: AchievementsProps) {
  return (
    <section id="achievements" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          Achievements & Certifications
        </h2>

        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center text-foreground">
            Achievements
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="flip-card h-64">
                <div className="flip-card-inner">
                  <div className="flip-card-front glass-card golden-shimmer p-6 flex flex-col items-center justify-center text-center">
                    <svg
                      className="w-16 h-16 mb-4 text-yellow-500"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                    </svg>
                    <h4 className="text-xl font-bold text-foreground mb-2">
                      {achievement.title}
                    </h4>
                    <div className="text-sm text-yellow-500 font-semibold">
                      {achievement.year}
                    </div>
                  </div>
                  <div className="flip-card-back glass-card p-6 flex items-center justify-center">
                    <p className="text-muted-foreground text-center">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-8 text-center text-foreground">
            Certifications
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="glass-card p-6 relative overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute top-0 right-0 w-16 h-16">
                  <div className="absolute transform rotate-45 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white text-xs font-bold py-1 right-[-35px] top-[10px] w-[120px] text-center shadow-md">
                    {cert.year}
                  </div>
                </div>
                <div className="flex items-start mb-4">
                  <svg
                    className="w-12 h-12 text-yellow-500 mr-4 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                  <div>
                    <h4 className="text-lg font-bold text-foreground mb-2">
                      {cert.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {cert.issuer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
