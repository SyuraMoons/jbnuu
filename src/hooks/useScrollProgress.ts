"use client";

import { useEffect, useState } from "react";

export function useScrollProgress(containerId: string, maxScroll = 600) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = document.getElementById(containerId);
    if (!el) {
      return;
    }

    const onScroll = () => {
      setProgress(Math.min(el.scrollTop / maxScroll, 1));
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      el.removeEventListener("scroll", onScroll);
    };
  }, [containerId, maxScroll]);

  return progress;
}
