import clsx from 'clsx';

type AvatarProps = {
  src: string;
  alt?: string;
  size?: number;
  ring?: boolean;
  className?: string;
};

export default function Avatar({
  src,
  alt = 'Avatar',
  size = 48,
  ring = false,
  className,
}: AvatarProps) {
  return (
    <span
      className={clsx(
        'relative inline-block rounded-full overflow-hidden bg-black/5 shrink-0',
        ring &&
          'ring-2 ring-[var(--color-paper)] outline outline-2 outline-[var(--color-ink)]/10',
        className
      )}
      style={{ width: size, height: size }}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="w-full h-full object-cover"
      />
    </span>
  );
}
