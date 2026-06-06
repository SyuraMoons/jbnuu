"use client";

import { useMemo, useState } from "react";
import { FadeUp } from "@/components/ui/FadeUp";
import { Grain } from "@/components/ui/Grain";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { STUDENTS } from "@/data/students";

export function DirectorySearchSection() {
  const [query, setQuery] = useState("");

  const matches = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) {
      return [];
    }

    return STUDENTS.filter((student) => {
      const nameMatch = student.name.toLowerCase().includes(normalized);
      const initialsMatch = student.initials.toLowerCase().includes(normalized);
      return nameMatch || initialsMatch;
    });
  }, [query]);

  return (
    <section className="section bg-neutral-950">
      <Grain />
      <div className="container-main">
        <SectionHeader chapter="SEARCH" line1="FIND A" line2="Name" className="mb-10" />

        <FadeUp>
          <div className="mx-auto flex max-w-[760px] flex-col items-center">
            <label htmlFor="student-search" className="mb-5 font-sans text-[10px] uppercase tracking-[0.28em] text-white/35">
              Search by name or initials
            </label>

            <div className="w-full rounded-full border border-white/10 bg-white/[0.03] px-5 py-4 shadow-[0_16px_50px_rgba(0,0,0,0.35)] backdrop-blur-sm">
              <input
                id="student-search"
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type a name..."
                className="w-full bg-transparent text-center font-display text-[clamp(18px,2vw,28px)] italic text-white outline-none placeholder:text-white/20"
              />
            </div>

            <p className="mt-4 text-center font-sans text-[11px] uppercase tracking-[0.18em] text-white/30">
              {query.trim() ? `${matches.length} match${matches.length === 1 ? "" : "es"} found` : "Start typing to reveal a profile"}
            </p>
          </div>
        </FadeUp>

        {query.trim() ? (
          <FadeUp delay={0.15}>
            <div className="mx-auto mt-10 max-w-[1100px] border border-white/10 bg-neutral-900/80 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.45)] backdrop-blur">
              {matches.length > 0 ? (
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {matches.map((student) => {
                    const detailLines = [student.uni, student.major, student.fact, student.food, student.moment, student.song, student.word, student.message].filter(Boolean);

                    return (
                      <article
                        key={student.id}
                        className="border border-white/8 bg-white/[0.02] p-5 transition-transform duration-300 hover:-translate-y-1"
                        style={{ boxShadow: `0 12px 40px rgba(0, 0, 0, 0.3)` }}
                      >
                        <div className="flex items-center gap-4 border-b border-white/10 pb-4">
                          <div
                            className="flex h-14 w-14 items-center justify-center rounded-full border"
                            style={{ background: `${student.hue}22`, borderColor: `${student.hue}55` }}
                          >
                            <span className="font-sans text-sm font-medium" style={{ color: student.hue }}>
                              {student.initials}
                            </span>
                          </div>
                          <div>
                            <p className="font-display text-lg text-white">{student.name}</p>
                            <p className="mt-1 font-sans text-[10px] uppercase tracking-[0.18em] text-white/30">Student profile</p>
                          </div>
                        </div>

                        <div className="mt-4 space-y-2.5">
                          {detailLines.length > 0 ? (
                            detailLines.slice(0, 4).map((line, index) => (
                              <p key={`${student.id}-${index}`} className="font-sans text-[13px] font-light leading-[1.65] text-white/70">
                                {line}
                              </p>
                            ))
                          ) : (
                            <p className="font-sans text-[13px] font-light leading-[1.65] text-white/45">
                              Name matched. Additional profile details can be filled later from the data file or CMS.
                            </p>
                          )}
                        </div>
                      </article>
                    );
                  })}
                </div>
              ) : (
                <div className="flex min-h-[220px] items-center justify-center text-center">
                  <div>
                    <p className="font-display text-2xl italic text-white/50">No matching name found.</p>
                    <p className="mt-3 font-sans text-[11px] uppercase tracking-[0.18em] text-white/25">Try another spelling or initials</p>
                  </div>
                </div>
              )}
            </div>
          </FadeUp>
        ) : null}
      </div>
    </section>
  );
}