"use client";

import type { CSSProperties, ReactNode } from "react";
import { useInView } from "@/hooks/useInView";
import { FADE_UP_TRANSITION } from "@/lib/animations";

type FadeUpProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  style?: CSSProperties;
};

export function FadeUp({ children, delay = 0, className, style }: FadeUpProps) {
  const [ref, inView] = useInView();

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(40px)",
        transition: FADE_UP_TRANSITION(delay),
        ...style,
      }}
    >
      {children}
    </div>
  );
}
