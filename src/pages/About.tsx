import SectionHeading from '@/components/SectionHeading';
import Avatar from '@/components/Avatar';
import { experiences } from '@/lib/data';

const PORTRAIT_SRC =
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=900&q=80&auto=format&fit=crop';

export default function About() {
  return (
    <div>
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16 md:py-24 grid lg:grid-cols-5 gap-12">
        <div className="lg:col-span-3">
          <div className="flex items-center gap-4 mb-8">
            <Avatar src={PORTRAIT_SRC} alt="Alex Morgan" size={64} ring />
            <div>
              <div className="font-semibold tracking-tight">Alex Morgan</div>
              <div className="text-sm text-[var(--color-muted)]">
                Product Designer & Engineer
              </div>
            </div>
          </div>

          <SectionHeading
            eyebrow="About"
            title="I make software that feels obvious in hindsight."
          />
          <div className="mt-8 space-y-6 text-lg text-[var(--color-ink)]/80 leading-relaxed">
            <p>
              I'm Alex Morgan, a product designer and front-end engineer based in London. Over the last decade I've
              worked with teams of all sizes — from two-person startups in stealth to public companies serving
              millions of customers.
            </p>
            <p>
              I care deeply about craft: the right typography, the smallest details of an interaction, the way a
              product feels in your hand. But I care more about outcomes — shipping things that meaningfully
              improve people's lives and businesses.
            </p>
            <p>
              Outside of work I make generative art, run too slowly, and try (and fail) to keep houseplants alive.
            </p>
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-black/5">
            <img
              src={PORTRAIT_SRC}
              alt="Portrait"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16 md:py-24 border-t border-black/5">
        <SectionHeading eyebrow="Experience" title="Where I've been." />
        <div className="mt-12 divide-y divide-black/10">
          {experiences.map((e) => (
            <div key={e.company} className="py-8 grid md:grid-cols-12 gap-6 items-start group">
              <div className="md:col-span-3 text-sm text-[var(--color-muted)]">{e.period}</div>
              <div className="md:col-span-4">
                <div className="text-xl font-semibold tracking-tight group-hover:text-[var(--color-accent)] transition">
                  {e.company}
                </div>
                <div className="text-sm text-[var(--color-muted)] mt-1">{e.role}</div>
              </div>
              <div className="md:col-span-5 text-[var(--color-ink)]/80">{e.description}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Beliefs */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16 md:py-24 border-t border-black/5">
        <SectionHeading eyebrow="How I work" title="Three things I believe." />
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {[
            {
              n: '01',
              t: 'Ship to learn',
              d: 'The fastest way to know if something is right is to put it in front of real people. I optimise for short feedback loops.',
            },
            {
              n: '02',
              t: 'Craft compounds',
              d: 'Tiny details — a transition, a microcopy choice — are not decoration. They accumulate into trust over thousands of touchpoints.',
            },
            {
              n: '03',
              t: 'Constraints help',
              d: 'Tight budgets, awkward tech, picky stakeholders — they all sharpen design. The best work I\'ve done came from real constraints.',
            },
          ].map((b) => (
            <div key={b.n} className="p-8 rounded-2xl border border-black/10 hover:border-[var(--color-ink)] transition">
              <div className="text-sm text-[var(--color-accent)] font-semibold mb-4">{b.n}</div>
              <h3 className="text-2xl font-semibold tracking-tight">{b.t}</h3>
              <p className="mt-3 text-[var(--color-muted)]">{b.d}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
