import { FadeUp } from "@/components/ui/FadeUp";

type SectionHeaderProps = {
  chapter: string;
  line1: string;
  line2: string;
  className?: string;
};

export function SectionHeader({ chapter, line1, line2, className }: SectionHeaderProps) {
  return (
    <FadeUp className={className}>
      <p className="mb-4 font-sans text-[10px] uppercase tracking-[0.4em] text-brand">{chapter}</p>
      <h2 className="chapter-title-solid">{line1}</h2>
      <h2 className="chapter-title-italic">{line2}</h2>
    </FadeUp>
  );
}
