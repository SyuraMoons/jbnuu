import { FadeUp } from "@/components/ui/FadeUp";
import { Grain } from "@/components/ui/Grain";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function DocumentarySection() {
  return (
    <section id="ch7" className="section bg-neutral-950">
      <Grain />
      <div className="container-main">
        <SectionHeader chapter="CHAPTER 08" line1="VIDEO" line2="Documentary" className="mb-14" />

        <FadeUp delay={0.1}>
          <div className="relative">
            <div className="relative border border-white/10 bg-neutral-900 pt-[52%]">
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-5">
                <button className="flex h-[72px] w-[72px] items-center justify-center rounded-full border-[1.5px] border-brand/50 transition-all hover:border-brand hover:bg-brand/10">
                  <div className="ml-1.5 h-0 w-0 border-b-[13px] border-l-[22px] border-t-[13px] border-b-transparent border-l-brand border-t-transparent" />
                </button>
                <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-white/30">Watch the Documentary</p>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand/30 to-transparent" />
          </div>
        </FadeUp>

        <FadeUp delay={0.2}>
          <div className="mt-20 grid items-center gap-10 lg:grid-cols-2">
            <p className="font-display text-[clamp(32px,4vw,52px)] font-black uppercase leading-[1.1] tracking-tight text-white">
              FIVE
              <br />
              MONTHS.
            </p>
            <div>
              <p className="font-body text-[clamp(16px,2vw,22px)] italic leading-[1.85] text-white/60">
                Three hundred memories.
                <br />
                <span className="text-brand">One unforgettable chapter.</span>
              </p>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
