import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import clsx from 'clsx';

const nav = [
  { to: '/', label: 'Home' },
  { to: '/work', label: 'Work' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export default function Header() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[var(--color-paper)]/80 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="w-8 h-8 rounded-full bg-[var(--color-ink)] grid place-items-center text-[var(--color-paper)] font-bold text-sm group-hover:bg-[var(--color-accent)] transition-colors">
            A
          </span>
          <span className="font-semibold tracking-tight">Alex Morgan</span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {nav.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              end={n.to === '/'}
              className={({ isActive }) =>
                clsx(
                  'px-4 py-2 rounded-full text-sm font-medium transition-colors',
                  isActive
                    ? 'bg-[var(--color-ink)] text-[var(--color-paper)]'
                    : 'text-[var(--color-ink)]/70 hover:text-[var(--color-ink)]'
                )
              }
            >
              {n.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="ml-3 px-4 py-2 rounded-full bg-[var(--color-accent)] text-white text-sm font-medium hover:opacity-90 transition"
          >
            Let's talk
          </Link>
        </nav>

        <button
          className="md:hidden p-2 rounded-md hover:bg-black/5"
          onClick={() => setOpen((v: boolean) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-black/5 bg-[var(--color-paper)]">
          <div className="px-6 py-4 flex flex-col gap-1">
            {nav.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                end={n.to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  clsx(
                    'px-4 py-3 rounded-lg text-sm font-medium',
                    isActive ? 'bg-[var(--color-ink)] text-[var(--color-paper)]' : 'hover:bg-black/5'
                  )
                }
              >
                {n.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
