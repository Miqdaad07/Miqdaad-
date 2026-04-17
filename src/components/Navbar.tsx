import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import myDp from './My dp.jpeg';

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
    { name: 'About', href: 'about' },
    { name: 'Projects', href: 'projects' },
    { name: 'Services', href: 'services' },
    { name: 'Experience', href: 'experience' },
  ];

  const handleNavClick = (id: string) => {
    setIsMobileMenuOpen(false);
    
    if (location.pathname === '/') {
      const element = document.getElementById(id);
      if (element) {
        // Use a small timeout for mobile to ensure menu closing transition doesn't interfere
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
      // If not on home page, we navigate home and set a flag to scroll to the project or section
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
        isScrolled ? 'py-4' : 'py-8'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12">
        <div 
          className={`flex items-center justify-between transition-all duration-500 px-6 py-3 rounded-full border pointer-events-auto ${
            isScrolled 
              ? 'bg-background/60 backdrop-blur-xl border-card-border shadow-2xl shadow-black/50' 
              : 'bg-transparent border-transparent'
          }`}
        >
          {/* Logo */}
          <Link to="/" className="group flex items-center gap-2">
            <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center text-black font-bold text-sm transition-transform group-hover:rotate-12">
              M
            </div>
            <span className="text-[18px] font-mono font-bold text-foreground tracking-tighter">
              MIQDAAD<span className="text-accent">.</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            <ul className="flex items-center bg-card-alt/30 rounded-full px-2 py-1 border border-card-border/50">
              {navLinks.map((link) => (
                <li key={link.name}>
                  {location.pathname === '/' ? (
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className="relative px-4 py-2 text-[11px] uppercase tracking-[1px] text-muted hover:text-foreground transition-colors group"
                    >
                      {link.name}
                      <span className="absolute bottom-1 left-4 right-4 h-[1px] bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                    </button>
                  ) : (
                    <Link
                      to={`/#${link.href}`}
                      className="relative px-4 py-2 text-[11px] uppercase tracking-[1px] text-muted hover:text-foreground transition-colors group"
                    >
                      {link.name}
                      <span className="absolute bottom-1 left-4 right-4 h-[1px] bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            {location.pathname === '/' ? (
              <button 
                onClick={() => handleNavClick('contact')}
                className="flex items-center gap-2 px-5 py-2.5 bg-accent text-black text-[11px] font-bold uppercase tracking-[1px] rounded-full hover:opacity-80 transition-all hover:scale-105 active:scale-95"
              >
                Let's Talk
                <ArrowUpRight size={14} />
              </button>
            ) : (
              <Link
                to="/#contact"
                className="flex items-center gap-2 px-5 py-2.5 bg-accent text-black text-[11px] font-bold uppercase tracking-[1px] rounded-full hover:opacity-80 transition-all hover:scale-105 active:scale-95"
              >
                Let's Talk
                <ArrowUpRight size={14} />
              </Link>
            )}
          </div>

          {/* Mobile Toggle */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-foreground hover:text-accent transition-colors"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-6 right-6 mt-4 bg-card border border-card-border rounded-3xl overflow-hidden lg:hidden shadow-2xl z-40 pointer-events-auto"
          >
            <div className="p-8 flex flex-col gap-6">
              {/* Profile image in menu */}
              <div className="flex items-center gap-4 p-4 bg-card-alt rounded-2xl border border-card-border">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-accent">
                  <img src={myDp} alt="Miqdaad" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <p className="font-bold text-foreground">Miqdaad</p>
                  <p className="text-[10px] uppercase tracking-wider text-accent font-mono">Available for Work</p>
                </div>
              </div>

              <ul className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className="w-full text-left text-[14px] uppercase tracking-[2px] text-muted hover:text-accent transition-colors flex items-center justify-between group"
                    >
                      {link.name}
                      <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                  </li>
                ))}
              </ul>
              <div className="pt-6 border-t border-card-border">
                <button 
                  onClick={() => handleNavClick('contact')}
                  className="w-full flex items-center justify-center gap-2 py-4 bg-accent text-black text-[12px] font-bold uppercase tracking-[2px] rounded-2xl"
                >
                  Contact Me
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
