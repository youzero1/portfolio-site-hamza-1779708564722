import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <section className="max-w-3xl mx-auto px-6 lg:px-10 py-32 text-center">
      <div className="text-[10rem] leading-none font-semibold tracking-tighter text-[var(--color-accent)]">404</div>
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mt-4">This page got lost.</h1>
      <p className="mt-3 text-[var(--color-muted)]">It happens. Let's get you back somewhere useful.</p>
      <Link
        to="/"
        className="inline-flex items-center gap-2 mt-8 px-5 py-3 rounded-full bg-[var(--color-ink)] text-[var(--color-paper)] hover:bg-[var(--color-accent)] transition"
      >
        <ArrowLeft size={16} /> Back home
      </Link>
    </section>
  );
}
