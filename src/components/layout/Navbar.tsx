"use client";

import { CHAPTER_ANCHORS, CHAPTER_LABELS } from "@/lib/constants";

export function Navbar() {
  return (
    <div className="sticky top-0 z-[100] border-b border-white/10 bg-neutral-950/95 px-[8%] backdrop-blur-xl">
      <div className="flex h-[52px] items-center justify-between">
        <span className="font-display text-[15px] italic tracking-[0.04em] text-brand">Jeonju -&gt; Home</span>
        <div className="flex gap-1 overflow-x-auto">
          {CHAPTER_LABELS.map((label, index) => (
            <button
              key={label}
              onClick={() => document.getElementById(CHAPTER_ANCHORS[index])?.scrollIntoView({ behavior: "smooth" })}
              className="whitespace-nowrap bg-transparent px-3.5 py-1 font-sans text-[10px] uppercase tracking-[0.14em] text-white/40 transition-colors hover:text-brand"
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
