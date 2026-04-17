export default function Footer() {
  return (
    <footer className="py-8 px-6 md:px-12 border-t border-card-border bg-background">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-[11px] text-muted uppercase tracking-[1px]">
          © {new Date().getFullYear()} MIQDAAD. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <a href="#" className="text-[11px] text-muted uppercase tracking-[1px] hover:text-accent transition-colors">Privacy Policy</a>
          <a href="#" className="text-[11px] text-muted uppercase tracking-[1px] hover:text-accent transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
