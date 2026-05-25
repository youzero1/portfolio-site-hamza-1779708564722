import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin, Mail, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-24 border-t border-black/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 grid md:grid-cols-3 gap-10">
        <div>
          <h3 className="text-3xl font-semibold tracking-tight">Let's build something memorable.</h3>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 mt-6 px-5 py-3 rounded-full bg-[var(--color-ink)] text-[var(--color-paper)] text-sm font-medium hover:bg-[var(--color-accent)] transition-colors"
          >
            Start a project <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className="text-sm">
          <div className="text-[var(--color-muted)] mb-3">Navigation</div>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-[var(--color-accent)]">Home</Link></li>
            <li><Link to="/work" className="hover:text-[var(--color-accent)]">Work</Link></li>
            <li><Link to="/about" className="hover:text-[var(--color-accent)]">About</Link></li>
            <li><Link to="/contact" className="hover:text-[var(--color-accent)]">Contact</Link></li>
          </ul>
        </div>

        <div className="text-sm">
          <div className="text-[var(--color-muted)] mb-3">Elsewhere</div>
          <div className="flex gap-3">
            <a href="#" className="w-10 h-10 grid place-items-center rounded-full border border-black/10 hover:bg-[var(--color-ink)] hover:text-[var(--color-paper)] transition" aria-label="GitHub"><Github size={16} /></a>
            <a href="#" className="w-10 h-10 grid place-items-center rounded-full border border-black/10 hover:bg-[var(--color-ink)] hover:text-[var(--color-paper)] transition" aria-label="Twitter"><Twitter size={16} /></a>
            <a href="#" className="w-10 h-10 grid place-items-center rounded-full border border-black/10 hover:bg-[var(--color-ink)] hover:text-[var(--color-paper)] transition" aria-label="LinkedIn"><Linkedin size={16} /></a>
            <a href="mailto:hi@alex.example" className="w-10 h-10 grid place-items-center rounded-full border border-black/10 hover:bg-[var(--color-ink)] hover:text-[var(--color-paper)] transition" aria-label="Email"><Mail size={16} /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-black/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-[var(--color-muted)]">
          <span>© {year} Alex Morgan. All rights reserved.</span>
          <span>Designed & built with care in London.</span>
        </div>
      </div>
    </footer>
  );
}
