"use client";

import { ROOT_SCROLL_ID } from "@/lib/constants";

type ScrollIndicatorProps = {
  hiddenProgress: number;
};

export function ScrollIndicator({ hiddenProgress }: ScrollIndicatorProps) {
  return (
    <button
      onClick={() => document.getElementById(ROOT_SCROLL_ID)?.scrollBy({ top: 600, behavior: "smooth" })}
      className="absolute bottom-8 left-[8%] z-[5] flex items-center gap-3"
      style={{ opacity: Math.max(0, 1 - hiddenProgress * 3) }}
    >
      <div className="h-10 w-px bg-white/20 animate-line" />
      <p className="m-0 font-sans text-[10px] uppercase tracking-[0.2em] text-white/45">Scroll</p>
    </button>
  );
}
