import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { AnimatedBackground } from './components/AnimatedBackground';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50/30 to-purple-50/30 relative">
      <AnimatedBackground />
      <Header />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </div>
  );
}