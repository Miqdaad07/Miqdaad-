import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'Experience', href: '#experience' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'py-4' : 'py-8'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12">
        <div 
          className={`flex items-center justify-between transition-all duration-500 px-6 py-3 rounded-full border ${
            isScrolled 
              ? 'bg-background/60 backdrop-blur-xl border-card-border shadow-2xl shadow-black/50' 
              : 'bg-transparent border-transparent'
          }`}
        >
          {/* Logo */}
          <a href="#home" className="group flex items-center gap-2">
            <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center text-black font-bold text-sm transition-transform group-hover:rotate-12">
              M
            </div>
            <span className="text-[18px] font-mono font-bold text-foreground tracking-tighter">
              MIQDAAD<span className="text-accent">.</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            <ul className="flex items-center bg-card-alt/30 rounded-full px-2 py-1 border border-card-border/50">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="relative px-4 py-2 text-[11px] uppercase tracking-[1px] text-muted hover:text-foreground transition-colors group"
                  >
                    {link.name}
                    <span className="absolute bottom-1 left-4 right-4 h-[1px] bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a 
              href="#contact" 
              className="flex items-center gap-2 px-5 py-2.5 bg-accent text-black text-[11px] font-bold uppercase tracking-[1px] rounded-full hover:opacity-80 transition-all hover:scale-105 active:scale-95"
            >
              Let's Talk
              <ArrowUpRight size={14} />
            </a>
          </div>

          {/* Mobile Toggle */}
          <div className="flex items-center md:hidden">
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
            className="absolute top-full left-6 right-6 mt-4 bg-card border border-card-border rounded-3xl overflow-hidden md:hidden shadow-2xl z-40"
          >
            <div className="p-8 flex flex-col gap-6">
              <ul className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-[14px] uppercase tracking-[2px] text-muted hover:text-accent transition-colors flex items-center justify-between group"
                    >
                      {link.name}
                      <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
              <div className="pt-6 border-t border-card-border">
                <a 
                  href="#contact" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-4 bg-accent text-black text-[12px] font-bold uppercase tracking-[2px] rounded-2xl"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
