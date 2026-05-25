type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export default function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      {eyebrow && (
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[var(--color-accent)] font-semibold mb-4">
          <span className="w-6 h-px bg-[var(--color-accent)]" />
          {eyebrow}
        </div>
      )}
      <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.05]">{title}</h2>
      {description && <p className="mt-4 text-lg text-[var(--color-muted)]">{description}</p>}
    </div>
  );
}
