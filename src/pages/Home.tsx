import { useEffect } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Services from '../components/Services';
import Experience from '../components/Experience';
import Contact from '../components/Contact';

export default function Home() {
  useEffect(() => {
    // Check if we should scroll to projects
    const shouldScroll = window.sessionStorage.getItem('scroll-to-projects');
    if (shouldScroll === 'true') {
      window.sessionStorage.removeItem('scroll-to-projects');
      const timer = setTimeout(() => {
        const element = document.getElementById('projects');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Services />
      <Experience />
      <Contact />
    </>
  );
}
