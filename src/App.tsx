
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import useActiveSection from './hooks/useActiveSection';


import { useTheme } from './hooks/useTheme';
import { ThemeToggle } from './components/ThemeToggle';



function App() {
  const activeSection = useActiveSection(); 
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
  <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
  <Header activeSection={activeSection} />
  <main>
    <Hero />
    <About />
    <Experience />
    <Projects />
    <Skills />
    <Certifications />
    <Education />
    <Contact />
  </main>
  <Footer />
</div>

  );
}

export default App;