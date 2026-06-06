import Image from "next/image";

interface PhotoFrameProps {
  src?: string;
  alt?: string;
  caption?: string;
  label?: string;
  className?: string;
  priority?: boolean;
}

export function PhotoFrame({
  src,
  alt = "",
  caption,
  label,
  className = "",
  priority = false,
}: PhotoFrameProps) {
  return (
    <figure
      className={`
        group
        overflow-hidden
        rounded-2xl
        border border-white/10
        bg-white/5
        backdrop-blur-sm
        shadow-2xl
        transition-all
        duration-500
        hover:scale-[1.02]
        hover:border-white/20
        ${className}
      `}
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden">
        {src ? (
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-zinc-800 to-zinc-900 text-sm text-zinc-500">
            Photo Placeholder
          </div>
        )}
      </div>

      {caption && (
        <figcaption className="border-t border-white/10 px-4 py-3 text-sm text-white/70">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}