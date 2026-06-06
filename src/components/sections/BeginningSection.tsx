import { FadeUp } from "@/components/ui/FadeUp";
import { Grain } from "@/components/ui/Grain";
import { PhotoFrame } from "@/components/ui/PhotoFrame";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function BeginningSection() {
  return (
    <section id="ch0" className="section bg-base">
      <Grain />
      <div className="container-main">
        <SectionHeader chapter="CHAPTER 01" line1="THE" line2="Beginning" />

        <div className="mt-12 grid gap-16 lg:grid-cols-2 lg:items-start">
          <FadeUp delay={0.1}>
            <p className="mb-6 font-sans text-[11px] uppercase tracking-[0.28em] text-white/40">February 2026</p>
            <p className="mb-6 font-body text-[clamp(20px,2.5vw,28px)] font-light leading-[1.7] text-white/90">
              We arrived carrying luggage,
              <br />
              <em className="text-brand">expectations,</em>
              <br />
              and a little uncertainty.
            </p>
            <p className="font-sans text-sm font-light leading-[1.9] text-white/45">
              None of us knew that five months later, saying goodbye would be this difficult.
            </p>
            <div className="mt-10 border-t border-white/10 pt-8">
              <p className="border-l-2 border-brand pl-5 font-body text-base italic leading-[1.9] text-white/45">
                "The first week, I ate alone because I didn't know anyone's name yet. By the second week, dinner was the loudest part of my day."
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={0.2}>
            <div className="relative">
              <PhotoFrame src="/images/travel/arrival.jpg" alt="Arrival - Incheon Airport" label="Arrival - Incheon Airport" className="h-[320px] w-full rounded-sm" />
              <div className="absolute -bottom-6 -left-6 w-40 rotate-[-2deg] border border-white/10 bg-neutral-950 px-3 pb-9 pt-3 shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
                <PhotoFrame src="/images/travel/dorm-day-1.jpg" alt="Dorm day 1" label="Dorm day 1" className="h-[100px]" />
                <p className="mt-2 text-center font-body text-[11px] italic text-white/40">Feb 2026</p>
              </div>
              <div className="absolute -right-4 -top-5 w-[130px] rotate-[2deg] border border-white/10 bg-neutral-950 px-2.5 pb-8 pt-2.5 shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
                <PhotoFrame src="/images/travel/orientation.jpg" alt="Orientation" label="Orientation" className="h-20" />
                <p className="mt-2 text-center font-body text-[11px] italic text-white/40">JBNU</p>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
