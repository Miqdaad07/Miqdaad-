import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: 'home' },
    { name: 'Services', href: 'services' },
    { name: 'About', href: 'about' },
    { name: 'Portfolio', href: 'projects' },
    { name: 'Process', href: 'process' },
  ];

  const handleNavClick = (id: string) => {
    setIsMobileMenuOpen(false);
    
    if (location.pathname === '/') {
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          const navHeight = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - navHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }, 100);
      }
    } else {
      if (id === 'projects') {
        window.sessionStorage.setItem('scroll-to-projects', 'true');
      } else {
        window.sessionStorage.setItem('scroll-to-section', id);
      }
      navigate('/');
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 pointer-events-none ${
        isScrolled ? 'py-3' : 'py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div 
          className={`flex items-center justify-between transition-all duration-500 px-6 py-2.5 rounded-full border pointer-events-auto ${
            isScrolled 
              ? 'bg-background/80 backdrop-blur-xl border-accent/20 shadow-[0_8px_32px_rgba(5,219,105,0.08)]' 
              : 'bg-card/40 backdrop-blur-md border-card-border/40'
          }`}
        >
          {/* Logo */}
          <Link to="/" className="group flex items-center gap-3">
            <div className="relative w-10 h-10 flex items-center justify-center transition-all duration-500 group-hover:scale-105">
              {/* Neon background blur glow */}
              <div className="absolute inset-0 bg-accent/10 rounded-xl blur-lg opacity-40 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Custom architectural brandmark enclosure */}
              <div className="relative w-10 h-10 bg-card rounded-xl border border-accent/20 flex items-center justify-center overflow-hidden shadow-[inset_0_1px_3px_rgba(255,255,255,0.05),0_4px_12px_rgba(5,219,105,0.1)] group-hover:border-accent/80 group-hover:shadow-[0_0_20px_rgba(5,219,105,0.25)] transition-all duration-500">
                {/* Embedded dynamic grid nodes matching blueprint aesthetic */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(5,219,105,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(5,219,105,0.03)_1px,transparent_1px)] bg-[size:5px_5px]" />
                
                {/* Tech scanline sweep effect */}
                <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-accent/40 opacity-30 group-hover:opacity-100 transition-all duration-500 animate-[bounce_3.5s_infinite]" />

                {/* Custom glowing combination mark: Code Brackets & Monogram M */}
                <svg
                  viewBox="0 0 100 100"
                  className="w-5.5 h-5.5 text-accent relative z-10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22,72 V28 L50,52 L78,28 V52" className="stroke-accent transition-all duration-300" />
                  <path d="M50,52 L78,75" />
                  <circle cx="78" cy="72" r="4.5" className="fill-accent stroke-none" />
                </svg>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-[17px] font-display font-extrabold text-foreground tracking-[0.02em] leading-none transition-all duration-300 group-hover:text-accent">
                MIQDAAD
              </span>
              <span className="text-[9px] font-mono uppercase tracking-[0.25em] text-accent font-medium leading-none mt-1.5 transition-colors duration-300 group-hover:text-muted">
                SOFTWARE ENGINEER
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            <ul className="flex items-center bg-card-alt/40 rounded-full px-2 py-1 border border-card-border/50">
              {navLinks.map((link) => (
                <li key={link.name}>
                  {location.pathname === '/' ? (
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className="relative px-4 py-2 text-[12px] font-medium tracking-[0.5px] text-muted hover:text-foreground transition-all group"
                    >
                      {link.name}
                      <span className="absolute bottom-1.5 left-4 right-4 h-[1.5px] bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
                    </button>
                  ) : (
                    <Link
                      to={`/#${link.href}`}
                      className="relative px-4 py-2 text-[12px] font-medium tracking-[0.5px] text-muted hover:text-foreground transition-all group"
                    >
                      {link.name}
                      <span className="absolute bottom-1.5 left-4 right-4 h-[1.5px] bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <ThemeToggle />
            {location.pathname === '/' ? (
              <button 
                onClick={() => handleNavClick('contact')}
                className="flex items-center gap-2 px-6 py-2.5 bg-accent text-white text-[12px] font-bold uppercase tracking-[1px] rounded-full hover:opacity-90 transition-all hover:scale-105 active:scale-95 shadow-[0_4px_16px_rgba(5,219,105,0.25)] hover:shadow-[0_4px_24px_rgba(5,219,105,0.45)] cursor-pointer"
              >
                Get in Touch
                <ArrowUpRight size={14} strokeWidth={2.5} />
              </button>
            ) : (
              <Link
                to="/#contact"
                className="flex items-center gap-2 px-6 py-2.5 bg-accent text-white text-[12px] font-bold uppercase tracking-[1px] rounded-full hover:opacity-90 transition-all hover:scale-105 active:scale-95 shadow-[0_4px_16px_rgba(5,219,105,0.25)] hover:shadow-[0_4px_24px_rgba(5,219,105,0.45)]"
              >
                Get in Touch
                <ArrowUpRight size={14} strokeWidth={2.5} />
              </Link>
            )}
          </div>

          {/* Mobile Toggle */}
          <div className="flex items-center lg:hidden gap-3">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-foreground hover:text-accent transition-colors cursor-pointer"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X size={22} className="text-accent" /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="absolute top-full left-4 right-4 mt-3 bg-card/95 backdrop-blur-2xl border border-accent/20 rounded-3xl overflow-hidden lg:hidden shadow-[0_20px_50px_rgba(3,6,4,0.9)] z-40 pointer-events-auto"
          >
            <div className="p-6 flex flex-col gap-5">
              {/* Profile image / Brand Status in menu */}
              <div className="flex items-center gap-4 p-3 bg-card-alt/60 rounded-2xl border border-card-border">
                <div className="relative w-12 h-12 flex items-center justify-center">
                  <div className="absolute inset-0 bg-accent/5 rounded-xl blur-md" />
                  <div className="relative w-12 h-12 bg-card rounded-xl border border-accent/25 flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(5,219,105,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(5,219,105,0.03)_1px,transparent_1px)] bg-[size:5px_5px]" />
                    <svg
                      viewBox="0 0 100 100"
                      className="w-6.5 h-6.5 text-accent relative z-10 animate-pulse"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22,72 V28 L50,52 L78,28 V52" />
                      <path d="M50,52 L78,75" />
                      <circle cx="78" cy="72" r="4.5" className="fill-accent stroke-none" />
                    </svg>
                  </div>
                </div>
                <div>
                  <p className="font-display font-bold text-[14px] text-foreground">Dawodu Miqdaad</p>
                  <p className="text-[9px] uppercase tracking-wider text-accent font-mono flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse inline-block"></span>Available for Hire</p>
                </div>
              </div>

              <ul className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className="w-full text-left py-2 text-[14px] font-medium tracking-[0.5px] text-muted hover:text-accent transition-colors flex items-center justify-between group"
                    >
                      {link.name}
                      <ArrowUpRight size={15} className="opacity-0 group-hover:opacity-100 transition-opacity text-accent" />
                    </button>
                  </li>
                ))}
              </ul>
              
              <div className="pt-4 border-t border-card-border">
                <button 
                  onClick={() => handleNavClick('contact')}
                  className="w-full flex items-center justify-center gap-2 py-3 bg-accent text-white text-[12px] font-bold uppercase tracking-[1px] rounded-2xl cursor-pointer shadow-[0_4px_16px_rgba(5,219,105,0.2)]"
                >
                  Get in Touch
                  <ArrowUpRight size={14} strokeWidth={2.5} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
