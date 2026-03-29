interface TimelineItem {
  year: string;
  title: string;
  company: string;
  description: string;
}

interface TimelineProps {
  timeline: TimelineItem[];
}

export default function Timeline({ timeline }: TimelineProps) {
  return (
    <section id="timeline" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          Journey & Experience
        </h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-500 to-purple-600 hidden md:block" />

          {timeline.map((item, index) => (
            <div
              key={index}
              className={`mb-8 flex flex-col md:flex-row items-center animate-fade-in-up ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="w-full md:w-5/12" />
              <div className="relative flex items-center justify-center w-full md:w-2/12">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full border-4 border-background z-10" />
              </div>
              <div className="w-full md:w-5/12 mt-4 md:mt-0">
                <div className="glass-card p-6">
                  <div className="text-sm text-primary font-semibold mb-2">
                    {item.year}
                  </div>
                  <h3 className="text-xl font-bold mb-1 text-foreground">
                    {item.title}
                  </h3>
                  <div className="text-muted-foreground font-medium mb-2">
                    {item.company}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
