import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    // 1. If user has a saved preference -> use it
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved === 'dark' || saved === 'light') return saved;
    }
    // 2. Default fallback -> Light mode
    return 'light';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <button
      id="theme-toggle"
      onClick={toggleTheme}
      className="relative p-2.5 rounded-full border border-card-border bg-card-alt/30 hover:bg-card-alt hover:border-accent/40 text-muted hover:text-foreground hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent/30 cursor-pointer flex items-center justify-center overflow-hidden w-9.5 h-9.5 shadow-md"
      aria-label="Toggle illumination theme"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={theme}
          initial={{ y: -15, scale: 0.5, rotate: -90, opacity: 0 }}
          animate={{ y: 0, scale: 1, rotate: 0, opacity: 1 }}
          exit={{ y: 15, scale: 0.5, rotate: 90, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-center absolute"
        >
          {theme === 'dark' ? (
            <Moon size={15} className="text-accent" strokeWidth={2.5} />
          ) : (
            <Sun size={15} className="text-accent" strokeWidth={2.5} />
          )}
        </motion.div>
      </AnimatePresence>
    </button>
  );
}
