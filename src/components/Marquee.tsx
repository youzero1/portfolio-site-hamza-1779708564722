type MarqueeProps = {
  items: string[];
};

export default function Marquee({ items }: MarqueeProps) {
  const doubled = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-black/10 bg-[var(--color-ink)] text-[var(--color-paper)] py-6">
      <div className="flex whitespace-nowrap marquee-track">
        {doubled.map((item, i) => (
          <span key={i} className="mx-8 flex items-center gap-8 text-2xl md:text-3xl font-semibold tracking-tight">
            {item}
            <span className="w-2 h-2 rounded-full bg-[var(--color-accent)]" />
          </span>
        ))}
      </div>
    </div>
  );
}
