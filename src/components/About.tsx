interface AboutProps {
  about: string;
}

export default function About({ about }: AboutProps) {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          About Me
        </h2>
        <div className="glass-card p-8 md:p-12 animate-fade-in-up">
          <p className="text-lg leading-relaxed text-muted-foreground">
            {about}
          </p>
        </div>
      </div>
    </section>
  );
}
