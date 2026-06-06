"use client";

import { useMemo, useState } from "react";
import { FadeUp } from "@/components/ui/FadeUp";
import { Grain } from "@/components/ui/Grain";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { STUDENTS } from "@/data/students";

export function PeopleSection() {
  const [active, setActive] = useState<number | null>(null);
  const student = STUDENTS.find((s) => s.id === active);
  const hasDetailContent = Boolean(student && [student.uni, student.major, student.fact, student.food, student.moment, student.song, student.word, student.message].some(Boolean));

  const rows = useMemo(() => {
    const first = [...STUDENTS, ...STUDENTS];
    const second = [...STUDENTS.slice().reverse(), ...STUDENTS.slice().reverse()];
    return { first, second };
  }, []);

  return (
    <section id="ch1" className="section bg-neutral-950">
      <Grain />
      <div className="container-main mb-30">
        <SectionHeader chapter="CHAPTER 02" line1="STRANGERS" line2="Become Friends" />
        </div>

        <div className="space-y-6 overflow-hidden mask-fade-x py-2 mt-8">
          {/* Desktop / wide screens: animated marquees */}
          <div className="hidden md:block">
            <div className="flex w-max animate-marquee-left gap-5 px-[8%]">
              {rows.first.map((studentItem, index) => (
                <button
                  key={`${studentItem.id}-top-${index}`}
                  onClick={() => setActive(active === studentItem.id ? null : studentItem.id)}
                  className="flex h-[170px] w-[190px] shrink-0 flex-col justify-between border border-white/10 bg-neutral-900 px-5 py-4 text-left transition-transform duration-300 hover:-translate-y-1"
                  style={{ boxShadow: `0 10px 32px rgba(0, 0, 0, 0.45)` }}
                >
                  <div className="flex flex-1 items-center justify-center border border-white/10 bg-white/[0.02]">
                    <div
                      className="flex h-14 w-14 items-center justify-center rounded-full border"
                      style={{ background: `${studentItem.hue}22`, borderColor: `${studentItem.hue}55` }}
                    >
                      <span className="font-sans text-[15px] font-medium" style={{ color: studentItem.hue }}>
                        {studentItem.initials}
                      </span>
                    </div>
                  </div>
                  <p className="pt-2 font-display text-sm text-white">{studentItem.name}</p>
                </button>
              ))}
            </div>

            <div className="flex w-max animate-marquee-right gap-5 px-[8%]">
              {rows.second.map((studentItem, index) => (
                <button
                  key={`${studentItem.id}-bottom-${index}`}
                  onClick={() => setActive(active === studentItem.id ? null : studentItem.id)}
                  className="flex h-[170px] w-[190px] shrink-0 flex-col justify-between border border-white/10 bg-neutral-900 px-5 py-4 text-left transition-transform duration-300 hover:-translate-y-1"
                  style={{ boxShadow: `0 10px 32px rgba(0, 0, 0, 0.45)` }}
                >
                  <div className="flex flex-1 items-center justify-center border border-white/10 bg-white/[0.02]">
                    <div
                      className="flex h-14 w-14 items-center justify-center rounded-full border"
                      style={{ background: `${studentItem.hue}22`, borderColor: `${studentItem.hue}55` }}
                    >
                      <span className="font-sans text-[15px] font-medium" style={{ color: studentItem.hue }}>
                        {studentItem.initials}
                      </span>
                    </div>
                  </div>
                  <p className="pt-2 font-display text-sm text-white">{studentItem.name}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Mobile / small screens: show grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 px-[4%] md:hidden">
            {STUDENTS.map((studentItem) => (
              <button
                key={studentItem.id}
                onClick={() => setActive(active === studentItem.id ? null : studentItem.id)}
                className="flex flex-col items-center justify-between border border-white/10 bg-neutral-900 p-4 text-center"
                style={{ boxShadow: `0 10px 32px rgba(0, 0, 0, 0.45)` }}
              >
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-full border"
                  style={{ background: `${studentItem.hue}22`, borderColor: `${studentItem.hue}55` }}
                >
                  <span className="font-sans text-sm font-medium" style={{ color: studentItem.hue }}>
                    {studentItem.initials}
                  </span>
                </div>
                <p className="mt-3 font-display text-sm text-white">{studentItem.name}</p>
              </button>
            ))}
          </div>
        </div>

      {student && hasDetailContent ? (
        <div className="mx-auto mt-8 md:mt-12 max-w-[680px] px-[6%] md:px-[8%]">
          <FadeUp>
            <div className="border border-white/10 bg-neutral-900 px-9 py-8">
              <div className="mb-7 flex items-center gap-5 border-b border-white/10 pb-6">
                <div
                  className="flex h-14 w-14 items-center justify-center rounded-full"
                  style={{ background: `${student.hue}22`, border: `1px solid ${student.hue}44` }}
                >
                  <span className="font-sans text-base font-medium" style={{ color: student.hue }}>
                    {student.initials}
                  </span>
                </div>
                <div>
                  <p className="m-0 font-display text-xl text-white">{student.name}</p>
                  {student.uni || student.major ? (
                    <p className="mt-1 font-sans text-[11px] tracking-[0.06em] text-white/40">
                      {student.uni} - {student.major}
                    </p>
                  ) : null}
                </div>
              </div>

              {[
                ["Fun fact", student.fact],
                ["Favorite Korean food", student.food],
                ["Most memorable moment", student.moment],
                ["Current favorite song", student.song],
                ["One word for Korea", student.word],
              ]
                .filter(([, value]) => Boolean(value))
                .map(([k, v]) => (
                <div key={k} className="border-b border-white/10 py-3.5">
                  <p className="mb-1.5 font-sans text-[9px] uppercase tracking-[0.24em] text-brand">{k}</p>
                  <p className="m-0 font-sans text-[13px] font-light leading-[1.65] text-white/75">{v}</p>
                </div>
              ))}

              {student.message ? (
                <div className="pt-5">
                  <p className="mb-2.5 font-sans text-[9px] uppercase tracking-[0.24em] text-brand">Message to friends</p>
                  <p className="m-0 font-body text-base italic leading-[1.8] text-white/85">"{student.message}"</p>
                </div>
              ) : null}
            </div>
          </FadeUp>
        </div>
      ) : null}
    </section>
  );
}
