import { useState } from 'react';
import { Mail, MapPin, Send, Check } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';

type FormState = {
  name: string;
  email: string;
  budget: string;
  message: string;
};

const initial: FormState = { name: '', email: '', budget: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState<FormState>(initial);
  const [sent, setSent] = useState<boolean>(false);

  const onChange = (key: keyof FormState) => (e: any) => {
    setForm((f: FormState) => ({ ...f, [key]: e.target.value }));
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Save locally so the message survives a refresh (no backend connected).
    try {
      const prev = JSON.parse(localStorage.getItem('inquiries') || '[]');
      prev.push({ ...form, at: new Date().toISOString() });
      localStorage.setItem('inquiries', JSON.stringify(prev));
    } catch (e: any) {
      console.warn('Could not save inquiry locally:', e.message);
    }
    setSent(true);
    setForm(initial);
  };

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16 md:py-24">
      <SectionHeading
        eyebrow="Contact"
        title="Have a project in mind? Let's talk."
        description="I'm currently taking on a small number of new engagements. Tell me a little about your project and I'll reply within 48 hours."
      />

      <div className="mt-14 grid lg:grid-cols-5 gap-12">
        <div className="lg:col-span-2 space-y-8">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-[var(--color-ink)] text-[var(--color-paper)] grid place-items-center">
              <Mail size={16} />
            </div>
            <div>
              <div className="text-sm text-[var(--color-muted)]">Email</div>
              <a href="mailto:hi@alex.example" className="text-lg font-medium hover:text-[var(--color-accent)]">
                hi@alex.example
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-[var(--color-ink)] text-[var(--color-paper)] grid place-items-center">
              <MapPin size={16} />
            </div>
            <div>
              <div className="text-sm text-[var(--color-muted)]">Location</div>
              <div className="text-lg font-medium">London, UK · Remote worldwide</div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[var(--color-ink)] text-[var(--color-paper)]">
            <div className="text-xs uppercase tracking-widest text-[var(--color-accent)] font-semibold mb-2">
              Currently
            </div>
            <p className="text-lg">
              Booking design-led engagements for <span className="font-semibold">Q3 & Q4 2025</span>. Typical projects run 6 — 12 weeks.
            </p>
          </div>
        </div>

        <form onSubmit={onSubmit} className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium">Your name</label>
            <input
              required
              value={form.name}
              onChange={onChange('name')}
              className="px-4 py-3 rounded-lg border border-black/15 bg-white focus:border-[var(--color-ink)] focus:outline-none"
              placeholder="Jane Cooper"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium">Email</label>
            <input
              required
              type="email"
              value={form.email}
              onChange={onChange('email')}
              className="px-4 py-3 rounded-lg border border-black/15 bg-white focus:border-[var(--color-ink)] focus:outline-none"
              placeholder="jane@company.com"
            />
          </div>
          <div className="flex flex-col gap-2 md:col-span-2">
            <label className="text-sm font-medium">Estimated budget</label>
            <div className="flex flex-wrap gap-2">
              {['< $10k', '$10 — 25k', '$25 — 50k', '$50k+'].map((b) => (
                <button
                  key={b}
                  type="button"
                  onClick={() => setForm((f: FormState) => ({ ...f, budget: b }))}
                  className={`px-4 py-2 rounded-full text-sm border transition ${
                    form.budget === b
                      ? 'bg-[var(--color-ink)] text-[var(--color-paper)] border-[var(--color-ink)]'
                      : 'border-black/15 hover:border-[var(--color-ink)]'
                  }`}
                >
                  {b}
                </button>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-2 md:col-span-2">
            <label className="text-sm font-medium">Tell me about your project</label>
            <textarea
              required
              rows={6}
              value={form.message}
              onChange={onChange('message')}
              className="px-4 py-3 rounded-lg border border-black/15 bg-white focus:border-[var(--color-ink)] focus:outline-none resize-none"
              placeholder="Goals, timeline, links — anything that helps me understand."
            />
          </div>

          <div className="md:col-span-2 flex items-center justify-between gap-4 flex-wrap">
            <p className="text-xs text-[var(--color-muted)]">By submitting, you agree to be contacted about your inquiry.</p>
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--color-accent)] text-white font-medium hover:opacity-90 transition"
            >
              {sent ? (
                <>
                  <Check size={16} /> Message sent
                </>
              ) : (
                <>
                  Send message <Send size={16} />
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
