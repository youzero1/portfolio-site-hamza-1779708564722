import { useMemo, useState } from 'react';
import ProjectCard from '@/components/ProjectCard';
import SectionHeading from '@/components/SectionHeading';
import { projects } from '@/lib/data';
import clsx from 'clsx';

export default function Work() {
  const categories = useMemo<string[]>(() => {
    const set = new Set<string>(projects.map((p) => p.category));
    return ['All', ...Array.from(set)];
  }, []);

  const [active, setActive] = useState<string>('All');

  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active);

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16 md:py-24">
      <SectionHeading
        eyebrow="Portfolio"
        title="Selected work, 2022 — 2024."
        description="A non-exhaustive list of projects I'm proud of. Get in touch for case studies and process details."
      />

      <div className="mt-10 flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={clsx(
              'px-4 py-2 rounded-full text-sm font-medium border transition',
              active === c
                ? 'bg-[var(--color-ink)] text-[var(--color-paper)] border-[var(--color-ink)]'
                : 'border-black/15 hover:border-[var(--color-ink)]'
            )}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="mt-14 grid md:grid-cols-2 gap-x-8 gap-y-16">
        {filtered.map((p, i) => (
          <ProjectCard key={p.slug} project={p} index={i} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-16 text-center text-[var(--color-muted)]">No projects in this category yet.</p>
      )}
    </section>
  );
}
