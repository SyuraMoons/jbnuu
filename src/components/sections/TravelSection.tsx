"use client";

import { useState } from "react";
import { FadeUp } from "@/components/ui/FadeUp";
import { Grain } from "@/components/ui/Grain";
import { PhotoFrame } from "@/components/ui/PhotoFrame";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CITIES } from "@/data/cities";

export function TravelSection() {
  const [active, setActive] = useState<string | null>(null);
  const city = CITIES.find((c) => c.name === active);

  return (
    <section id="ch2" className="section bg-base">
      <Grain />
      <div className="container-main">
        <SectionHeader chapter="CHAPTER 03" line1="KOREA" line2="Through Our Eyes" className="mb-14" />

        <div className="grid items-start gap-14 lg:grid-cols-[340px_1fr]">
          <FadeUp delay={0.1}>
            <div className="relative w-full" style={{ paddingTop: "129.73%" }}>
              {/* Realistic map image - place your realistic map at `public/images/korea-real.png` */}
              <img
                 src="/images/korea-real.jpg"
                alt="South Korea map"
                className="absolute inset-0 h-full w-full object-cover rounded-md"
              />

              {/* Overlay clickable pins using original SVG coordinates (370x480) */}
              {CITIES.map((cityItem) => {
                const isActive = cityItem.name === active;
                const left = `${(cityItem.x / 370) * 100}%`;
                const top = `${(cityItem.y / 480) * 100}%`;
                return (
                  <button
                    key={cityItem.name}
                    onClick={() => setActive(isActive ? null : cityItem.name)}
                    className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                    style={{ left, top }}
                    aria-label={`Show ${cityItem.name}`}
                  >
                    {isActive ? (
                      <div className="flex items-center justify-center">
                        <div className="rounded-full bg-[rgba(200,155,109,0.08)]" style={{ width: 36, height: 36 }} />
                      </div>
                    ) : null}

                    <div
                      style={{ width: isActive ? 18 : 12, height: isActive ? 18 : 12 }}
                      className={`rounded-full ${isActive ? "bg-[#C89B6D]" : "bg-[rgba(200,155,109,0.6)]"} border ${isActive ? "border-[rgba(200,155,109,0.4)]" : "border-[rgba(200,155,109,0.2)]"}`}
                    />

                    <span
                      className="ml-3 hidden select-none whitespace-nowrap text-[11px] font-medium text-white/60 md:inline"
                      style={{ position: "absolute", left: "calc(100% + 8px)", top: "50%", transform: "translateY(-50%)" }}
                    >
                      {cityItem.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </FadeUp>

          <FadeUp delay={0.2}>
            {city ? (
              <div>
                <p className="mb-4 font-sans text-[10px] uppercase tracking-[0.3em] text-brand">{city.name} - South Korea</p>
                <p className="mb-8 font-body text-[clamp(18px,2vw,24px)] italic leading-[1.75] text-white/85">{city.desc}</p>
                <PhotoFrame src={`/images/travel/${city.name.toLowerCase()}.jpg`} alt={`${city.name} memory photo`} label={`Photos - ${city.name}`} className="mb-8 h-[200px] w-full" />
                <div className="border-t border-white/10 pt-6">
                  <p className="mb-4 font-sans text-[9px] uppercase tracking-[0.28em] text-white/35">Memories</p>
                  {city.memories.map((memory) => (
                    <div key={memory} className="mb-3 flex items-start gap-3">
                      <div className="mt-1 h-4 w-px shrink-0 bg-brand/55" />
                      <p className="m-0 font-sans text-[13px] font-light leading-[1.6] text-white/55">{memory}</p>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="pt-[60px]">
                <p className="font-display text-[clamp(22px,3vw,32px)] italic leading-[1.7] text-white/20">
                  Every pin
                  <br />
                  holds a story.
                </p>
              </div>
            )}
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
