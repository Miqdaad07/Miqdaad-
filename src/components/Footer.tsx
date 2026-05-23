export default function Footer() {
  return (
    <footer className="py-10 px-4 md:px-8 border-t border-card-border/65 bg-[#020503]">
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-[11px] text-muted uppercase tracking-[1.5px] font-mono">
          © {new Date().getFullYear()} <span className="text-white font-bold font-display">MIQDAAD <span className="text-accent">LABS</span></span>. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <a href="#" className="text-[10px] text-muted uppercase tracking-[1px] font-mono hover:text-accent transition-colors">Privacy Policy</a>
          <a href="#" className="text-[10px] text-muted uppercase tracking-[1px] font-mono hover:text-accent transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
