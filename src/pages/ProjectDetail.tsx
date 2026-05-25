import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Calendar, User, Tag } from 'lucide-react';
import { projects } from '@/lib/data';
import ProjectCard from '@/components/ProjectCard';

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <section className="max-w-3xl mx-auto px-6 lg:px-10 py-32 text-center">
        <h1 className="text-4xl font-semibold tracking-tight">Project not found</h1>
        <p className="mt-4 text-[var(--color-muted)]">The project you're looking for doesn't exist or was moved.</p>
        <Link to="/work" className="inline-flex items-center gap-2 mt-8 px-5 py-3 rounded-full bg-[var(--color-ink)] text-[var(--color-paper)]">
          <ArrowLeft size={16} /> Back to work
        </Link>
      </section>
    );
  }

  const related = projects.filter((p) => p.slug !== project.slug).slice(0, 2);

  return (
    <article>
      <section className="max-w-7xl mx-auto px-6 lg:px-10 pt-12 pb-10">
        <Link to="/work" className="inline-flex items-center gap-2 text-sm text-[var(--color-muted)] hover:text-[var(--color-ink)] mb-10">
          <ArrowLeft size={14} /> All projects
        </Link>

        <div className="text-sm text-[var(--color-accent)] font-semibold uppercase tracking-widest mb-4">
          {project.category}
        </div>
        <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[0.98] max-w-4xl">
          {project.title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-[var(--color-muted)]">{project.description}</p>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-black/10 pt-8">
          <div>
            <div className="text-xs text-[var(--color-muted)] mb-2 flex items-center gap-1.5">
              <User size={12} /> Client
            </div>
            <div className="font-medium">{project.client}</div>
          </div>
          <div>
            <div className="text-xs text-[var(--color-muted)] mb-2 flex items-center gap-1.5">
              <Calendar size={12} /> Year
            </div>
            <div className="font-medium">{project.year}</div>
          </div>
          <div>
            <div className="text-xs text-[var(--color-muted)] mb-2 flex items-center gap-1.5">
              <Tag size={12} /> Role
            </div>
            <div className="font-medium">{project.role}</div>
          </div>
          <div>
            <div className="text-xs text-[var(--color-muted)] mb-2">Tags</div>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((t) => (
                <span key={t} className="text-xs px-2 py-1 rounded-full border border-black/10">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-black/5">
          <img src={project.cover} alt={project.title} className="w-full h-full object-cover" />
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 lg:px-10 py-20 space-y-6 text-lg leading-relaxed text-[var(--color-ink)]/85">
        <h2 className="text-3xl font-semibold tracking-tight text-[var(--color-ink)]">The challenge</h2>
        <p>
          {project.client} approached the team with an ambitious goal: rethink the core experience without
          disrupting the millions of users who relied on the existing product every day. We needed to be bold,
          but never reckless.
        </p>
        <h2 className="text-3xl font-semibold tracking-tight text-[var(--color-ink)] pt-4">My role</h2>
        <p>
          As {project.role}, I worked closely with engineering, research and product leadership to define the
          strategy, shape the design system and ship the work in iterative releases. I led design reviews, ran
          user testing, and contributed front-end code where it helped close feedback loops.
        </p>
        <h2 className="text-3xl font-semibold tracking-tight text-[var(--color-ink)] pt-4">The outcome</h2>
        <p>
          The redesign launched on schedule and exceeded its primary success metrics in the first three months
          post-launch. More importantly, the new foundations made it dramatically easier to ship the next twelve
          months of roadmap.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16 border-t border-black/10">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Next projects</h2>
          <Link to="/work" className="inline-flex items-center gap-2 text-sm font-medium hover:text-[var(--color-accent)]">
            All work <ArrowUpRight size={16} />
          </Link>
        </div>
        <div className="grid md:grid-cols-2 gap-x-8 gap-y-16">
          {related.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>
      </section>
    </article>
  );
}
