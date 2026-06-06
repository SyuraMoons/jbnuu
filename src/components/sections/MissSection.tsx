"use client";

import { useMemo, useState } from "react";
import { FadeUp } from "@/components/ui/FadeUp";
import { Grain } from "@/components/ui/Grain";
import { PhotoFrame } from "@/components/ui/PhotoFrame";
import { SectionHeader } from "@/components/ui/SectionHeader";

type Category = "food" | "places" | "people";

export function MissSection() {
  const [category, setCategory] = useState<Category>("food");

  const content = useMemo(
    () => ({
      food: {
        items: [
          "Convenience store ramyeon at midnight",
          "Tteokbokki from the cart near the gate",
          "GS25 egg salad sandwich",
          "Hot silken tofu in January",
          "Banana milk after long days",
        ],
        caption: "We learned that food tastes better when you're sharing it with people who are also homesick.",
      },
      places: {
        items: [
          "JBNU campus in spring",
          "The lake at golden hour",
          "Dormitory corridor at midnight",
          "The cafe where we studied and didn't study",
          "Jeonju Hanok Village at dawn",
        ],
        caption: "We'll miss the places less than we'll miss who we were in them.",
      },
      people: {
        items: [
          "The ones who showed up at 3am",
          "The professor who learned our names",
          "The convenience store ahjumma who recognized us",
          "Each other - most of all, each other",
        ],
        caption: "We came as strangers. We leave as the kind of friends you keep forever.",
      },
    }),
    []
  );

  return (
    <section id="ch3" className="section bg-neutral-950">
      <Grain />
      <div className="container-main">
        <SectionHeader chapter="CHAPTER 04" line1="THINGS" line2="We'll Miss" className="mb-12" />

        <FadeUp delay={0.1}>
          <div className="mb-12 flex gap-0.5">
            {(["food", "places", "people"] as Category[]).map((key) => (
              <button
                key={key}
                onClick={() => setCategory(key)}
                className="border px-7 py-3 font-sans text-[10px] uppercase tracking-[0.2em] transition-all"
                style={{
                  borderColor: category === key ? "#C89B6D" : "rgba(255,255,255,0.08)",
                  background: category === key ? "#C89B6D" : "transparent",
                  color: category === key ? "#0B0B0B" : "rgba(255,255,255,0.4)",
                  fontWeight: category === key ? 600 : 400,
                }}
              >
                {key}
              </button>
            ))}
          </div>
        </FadeUp>

        <div className="grid gap-14 lg:grid-cols-2">
          <FadeUp delay={0.15}>
            {content[category].items.map((item, index) => (
              <div key={item} className="flex gap-5 border-b border-white/10 py-5">
                <span className="min-w-7 font-display text-2xl italic leading-none text-brand/15">0{index + 1}</span>
                <p className="m-0 pt-1 font-sans text-sm font-light leading-[1.7] text-white/70">{item}</p>
              </div>
            ))}
          </FadeUp>

          <FadeUp delay={0.25}>
            <PhotoFrame src={`/images/farewell/${category}.jpg`} alt={`${category} memory collage`} label={`photos - ${category}`} className="mb-7 h-[260px] w-full" />
            <p className="border-l border-brand pl-5 font-body text-lg italic leading-[1.85] text-white/55">
              {content[category].caption}
            </p>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
