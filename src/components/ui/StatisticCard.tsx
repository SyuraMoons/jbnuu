import type { Stat } from "@/types/stat";

type StatisticCardProps = {
  stat: Stat;
  display: string;
};

export function StatisticCard({ stat, display }: StatisticCardProps) {
  return (
    <div className="relative overflow-hidden border border-white/5 px-8 py-12">
      <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-brand/30 to-transparent" />
      <p className="mb-4 font-display text-[clamp(52px,6vw,80px)] font-black leading-none tracking-tight text-white">
        {display}
        {stat.suffix}
      </p>
      <p className="font-sans text-[10px] uppercase tracking-[0.28em] text-white/35">{stat.label}</p>
    </div>
  );
}
