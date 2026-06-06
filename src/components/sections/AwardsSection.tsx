import { FadeUp } from "@/components/ui/FadeUp";
import { AwardCard } from "@/components/ui/AwardCard";
import { Grain } from "@/components/ui/Grain";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AWARDS } from "@/data/awards";

export function AwardsSection() {
  return (
    <section id="ch6" className="section bg-base">
      <Grain />
      <div className="container-main">
        <SectionHeader chapter="CHAPTER 07" line1="THE" line2="Awards" className="mb-14" />

        <div className="grid gap-px sm:grid-cols-[repeat(auto-fit,minmax(300px,1fr))]">
          {AWARDS.map((award, index) => (
            <FadeUp key={award.title} delay={index * 0.06}>
              <AwardCard award={award} />
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
