import { Link } from 'react-router-dom';
import { ArrowUpRight, Sparkles, Star } from 'lucide-react';
import ProjectCard from '@/components/ProjectCard';
import Marquee from '@/components/Marquee';
import SectionHeading from '@/components/SectionHeading';
import Avatar from '@/components/Avatar';
import { projects, skills } from '@/lib/data';

const AVATAR_SRC =
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=900&q=80&auto=format&fit=crop';

export default function Home() {
  const featured = projects.slice(0, 4);

  return (
    <div>
      {/* Hero */}
      <section className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-24 md:pt-24 md:pb-32">
        <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-[var(--color-accent)]/10 blur-3xl pointer-events-none" />
        <div className="flex items-center gap-2 text-sm text-[var(--color-muted)] mb-6">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          Available for new projects · Q3 2025
        </div>

        <div className="flex items-center gap-4 mb-8">
          <Avatar src={AVATAR_SRC} alt="Alex Morgan" size={56} ring />
          <span className="text-sm font-medium text-[var(--color-ink)]/70">
            Hey, I'm Alex 👋
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-[0.95] max-w-5xl">
          Designer & engineer crafting <span className="italic text-[var(--color-accent)]">thoughtful</span> digital products.
        </h1>

        <p className="mt-8 max-w-2xl text-lg md:text-xl text-[var(--color-muted)] leading-relaxed">
          I'm Alex — a senior product designer based in London. For the past decade I've helped
          ambitious teams ship software people genuinely enjoy using.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            to="/work"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--color-ink)] text-[var(--color-paper)] font-medium hover:bg-[var(--color-accent)] transition-colors"
          >
            View selected work <ArrowUpRight size={18} />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-black/15 hover:border-[var(--color-ink)] font-medium transition"
          >
            Get in touch
          </Link>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-black/5 pt-10">
          {[
            { v: '10+', l: 'Years of experience' },
            { v: '80+', l: 'Projects shipped' },
            { v: '24', l: 'Awards & features' },
            { v: '12', l: 'Countries worked in' },
          ].map((s) => (
            <div key={s.l}>
              <div className="text-4xl md:text-5xl font-semibold tracking-tight">{s.v}</div>
              <div className="text-sm text-[var(--color-muted)] mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Marquee */}
      <Marquee items={['Product Design', 'Design Systems', 'React & TypeScript', 'Brand Identity', 'Motion', 'Prototyping']} />

      {/* Selected work */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-24 md:py-32">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
          <SectionHeading
            eyebrow="Selected work"
            title="A handful of recent projects."
            description="From early-stage startups to public companies — a glimpse of what I've been up to."
          />
          <Link
            to="/work"
            className="inline-flex items-center gap-2 text-sm font-medium hover:text-[var(--color-accent)] transition"
          >
            View all <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-x-8 gap-y-16">
          {featured.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>
      </section>

      {/* Services / Skills */}
      <section className="bg-[var(--color-ink)] text-[var(--color-paper)] py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[var(--color-accent)] font-semibold mb-4">
              <Sparkles size={14} /> What I do
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.05]">
              I help teams turn complex problems into simple, beautiful products.
            </h2>
            <p className="mt-6 text-white/70 text-lg leading-relaxed">
              From discovery and strategy through to pixel-perfect execution and front-end engineering — I work
              end-to-end, embedded with your team or as a hands-on lead.
            </p>
          </div>

          <div className="space-y-5">
            {skills.map((s) => (
              <div key={s.name}>
                <div className="flex items-baseline justify-between mb-2">
                  <span className="font-medium">{s.name}</span>
                  <span className="text-sm text-white/50">{s.level}%</span>
                </div>
                <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[var(--color-accent)] rounded-full"
                    style={{ width: `${s.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-24 md:py-32">
        <div className="flex gap-1 mb-6">
          {[0,1,2,3,4].map((i) => (
            <Star key={i} size={18} className="fill-[var(--color-accent)] text-[var(--color-accent)]" />
          ))}
        </div>
        <blockquote className="text-3xl md:text-5xl font-semibold tracking-tight leading-tight max-w-5xl">
          “Alex is the rare designer who thinks like an engineer and ships like a founder. Our launch wouldn't
          have happened without him.”
        </blockquote>
        <div className="mt-8 flex items-center gap-4">
          <Avatar
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80&auto=format&fit=crop"
            alt="Sarah Chen"
            size={48}
          />
          <div>
            <div className="font-medium">Sarah Chen</div>
            <div className="text-sm text-[var(--color-muted)]">Co-founder & CEO, Lumen Finance</div>
          </div>
        </div>
      </section>
    </div>
  );
}
