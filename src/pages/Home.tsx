import { useEffect } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Services from '../components/Services';
import Experience from '../components/Experience';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import Contact from '../components/Contact';

export default function Home() {
  useEffect(() => {
    document.title = 'Miqdaad Labs — Modern Web Development Agency';
    
    // Check if we should scroll to a specific section
    const shouldScrollProjects = window.sessionStorage.getItem('scroll-to-projects');
    const targetSection = window.sessionStorage.getItem('scroll-to-section');
    
    const targetId = shouldScrollProjects === 'true' ? 'projects' : targetSection;
    
    if (targetId) {
      window.sessionStorage.removeItem('scroll-to-projects');
      window.sessionStorage.removeItem('scroll-to-section');
      
      const timer = setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          const navHeight = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - navHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
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
      <Testimonials />
      <CTA />
      <Contact />
    </>
  );
}
