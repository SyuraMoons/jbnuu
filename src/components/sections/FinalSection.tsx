"use client";

import { Grain } from "@/components/ui/Grain";
import { PhotoFrame } from "@/components/ui/PhotoFrame";
import { STUDENTS } from "@/data/students";
import { useInView } from "@/hooks/useInView";

export function FinalSection() {
  const [ref, inView] = useInView(0.25);
  const lines = ["We came as strangers.", "We leave as friends.", "Thank you, Korea.", "See you in Indonesia."];

  return (
    <section
      ref={ref}
      className="relative flex min-h-screen flex-col items-center justify-center bg-base px-[8%] py-20"
    >
      <Grain />
      <div className="absolute inset-0 z-[1]">
        <PhotoFrame
          src="/images/farewell/group-farewell.jpg"
          alt="Farewell group photograph"
          label="Farewell group photograph"
          className="h-full w-full"
        />
      </div>
      <div className="absolute inset-0 z-[2] bg-base/75" />
      <div className="absolute inset-0 z-[3] bg-[linear-gradient(to_bottom,rgba(11,11,11,0.5)_0%,transparent_30%,transparent_70%,rgba(11,11,11,0.85)_100%)]" />

      <div className="relative z-[4] text-center">
        {lines.map((line, i) => (
          <p
            key={line}
            className="m-0 font-display text-[clamp(28px,4vw,52px)] leading-[1.3]"
            style={{
              fontWeight: i < 2 ? 900 : 400,
              fontStyle: i >= 2 ? "italic" : "normal",
              color: i >= 2 ? "#C89B6D" : "#fff",
              textTransform: i < 2 ? "uppercase" : "none",
              letterSpacing: i < 2 ? "-0.02em" : "0",
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(30px)",
              transition: `opacity 1s cubic-bezier(0.16,1,0.3,1) ${0.3 + i * 0.55}s, transform 1s cubic-bezier(0.16,1,0.3,1) ${0.3 + i * 0.55}s`,
            }}
          >
            {line}
          </p>
        ))}
      </div>

      <div className="relative z-[4] mt-24 w-full max-w-[700px] border-t border-white/10 pt-12 text-center">
        <p className="mb-8 font-sans text-[9px] uppercase tracking-[0.36em] text-white/25">with love</p>
        <div className="flex flex-wrap justify-center gap-x-7 gap-y-1.5">
          {STUDENTS.map((student, i) => (
            <span
              key={student.id}
              className="font-body text-base italic text-white/45"
              style={{ opacity: inView ? 1 : 0, transition: `opacity 0.9s ease ${2.8 + i * 0.2}s` }}
            >
              {student.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
