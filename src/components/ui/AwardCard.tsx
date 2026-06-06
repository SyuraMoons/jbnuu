import type { Award } from "@/types/award";

type AwardCardProps = {
  award: Award;
};

export function AwardCard({ award }: AwardCardProps) {
  return (
    <div className="border border-white/5 bg-neutral-950 px-7 py-7 transition-colors hover:border-brand/35">
      <div className="flex items-start gap-4">
        <span className="shrink-0 text-[28px] leading-none">{award.emoji}</span>
        <div>
          <p className="mb-1.5 font-display text-base font-medium text-white">{award.title}</p>
          <p className="mb-2 font-sans text-[11px] tracking-[0.06em] text-brand">{award.winner}</p>
          <p className="font-sans text-xs font-light leading-relaxed text-white/40">{award.reason}</p>
        </div>
      </div>
    </div>
  );
}
