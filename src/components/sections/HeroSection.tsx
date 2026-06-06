"use client";

import { ScrollIndicator } from "@/components/layout/ScrollIndicator";
import { Grain } from "@/components/ui/Grain";
import { PhotoFrame } from "@/components/ui/PhotoFrame";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { ROOT_SCROLL_ID } from "@/lib/constants";

export function HeroSection() {
  const scroll = useScrollProgress(ROOT_SCROLL_ID, 600);

  return (
    <section className="relative h-screen min-h-[640px] overflow-hidden bg-base">
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background: "linear-gradient(135deg,#1a120a 0%,#0B0B0B 50%,#0a0f18 100%)",
          transform: `scale(${1 + scroll * 0.12})`,
          transformOrigin: "center",
          transition: "transform 0.05s linear",
        }}
      />
      <Grain />
      <div className="absolute inset-0 z-[2] bg-[linear-gradient(to_bottom,rgba(11,11,11,0.3)_0%,rgba(11,11,11,0.1)_40%,rgba(11,11,11,0.85)_100%)]" />

      <div className="absolute inset-0 z-[1] flex items-center justify-center">
        <PhotoFrame
          src="/images/jbnu.jpg"
          alt="JBNU group photograph"
          label="JBNU group photograph"
          className="h-[60%] w-[70%] rounded-sm"
          priority
        />
      </div>

      <div className="absolute inset-0 z-[4] flex flex-col justify-center px-[8%]">
        <div style={{ opacity: Math.max(0, 1 - scroll * 2), transform: `translateY(${scroll * -60}px)` }}>
          <p className="mb-6 font-sans text-[11px] uppercase tracking-[0.4em] text-brand">JBNU - February - July 2026</p>
          <h1 className="m-0 font-display text-[clamp(52px,9vw,110px)] font-black uppercase leading-[0.92] tracking-tight text-white">
            FROM
            <br />
            JEONJU
          </h1>
          <h1 className="mt-2 font-display text-[clamp(52px,9vw,110px)] italic leading-[0.95] tracking-tight text-brand">to Home</h1>
          <div className="mt-9 flex items-center gap-4">
            <div className="h-px w-10 bg-brand/60" />
            <p className="m-0 font-sans text-xs uppercase tracking-[0.2em] text-white/55">Indonesian Exchange Students</p>
          </div>
        </div>
      </div>

      <div className="absolute right-[5%] top-1/2 z-[5] flex -translate-y-1/2 flex-col items-center gap-4">
        {["01", "02", "03", "04", "05", "06", "07", "08"].map((n, i) => (
          <button
            key={n}
            onClick={() => document.getElementById(`ch${i}`)?.scrollIntoView({ behavior: "smooth" })}
            className="flex items-center gap-2 font-sans text-[10px] tracking-[0.08em] transition-colors hover:text-brand"
            style={{ color: i === 0 ? "#C89B6D" : "rgba(255,255,255,0.25)", fontWeight: i === 0 ? 600 : 400 }}
          >
            {i === 0 ? <div className="h-px w-5 bg-brand" /> : null}
            {n}
          </button>
        ))}
      </div>

      <ScrollIndicator hiddenProgress={scroll} />
    </section>
  );
}
