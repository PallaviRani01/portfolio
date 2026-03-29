import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';
import portfolioData from './data/portfolio.json';

function App() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      setIsDark(false);
      document.documentElement.classList.add('light');
    } else {
      setIsDark(true);
      document.documentElement.classList.remove('light');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);

    if (newTheme) {
      document.documentElement.classList.remove('light');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.add('light');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <div className="relative min-h-screen">
      <ParticleBackground />
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      <Hero name={portfolioData.name} title={portfolioData.title} />
      <About about={portfolioData.about} />
      <Skills skills={portfolioData.skills} />
      <Projects projects={portfolioData.projects} />
      <Timeline timeline={portfolioData.timeline} />
      <Achievements
        achievements={portfolioData.achievements}
        certifications={portfolioData.certifications}
      />
      <Contact
        email={portfolioData.email}
        phone={portfolioData.phone}
        linkedin={portfolioData.linkedin}
        github={portfolioData.github}
      />
      <Footer name={portfolioData.name} />
    </div>
  );
}

export default App;
