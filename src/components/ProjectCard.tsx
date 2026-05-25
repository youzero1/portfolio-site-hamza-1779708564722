import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import type { Project } from '@/types';

type ProjectCardProps = {
  project: Project;
  index?: number;
};

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <Link
      to={`/work/${project.slug}`}
      className="group block relative"
    >
      <div className="relative overflow-hidden rounded-2xl bg-black/5 aspect-[4/3]">
        <img
          src={project.cover}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="absolute top-4 left-4 text-xs px-3 py-1 rounded-full bg-white/90 backdrop-blur text-[var(--color-ink)] font-medium">
          {String(index + 1).padStart(2, '0')} · {project.category}
        </div>
        <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-[var(--color-paper)] grid place-items-center translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition">
          <ArrowUpRight size={16} />
        </div>
      </div>
      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <h3 className="font-semibold text-lg tracking-tight group-hover:text-[var(--color-accent)] transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-[var(--color-muted)] mt-1">
            {project.client} · {project.year}
          </p>
        </div>
        <div className="flex flex-wrap gap-1.5 justify-end">
          {project.tags.slice(0, 2).map((t) => (
            <span key={t} className="text-xs px-2 py-1 rounded-full border border-black/10 text-[var(--color-muted)]">
              {t}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
