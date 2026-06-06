"use client";

import { useState } from "react";
import { FadeUp } from "@/components/ui/FadeUp";
import { Grain } from "@/components/ui/Grain";
import { MessageCard } from "@/components/ui/MessageCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { MESSAGES } from "@/data/messages";

const POSITIONS = [
  { top: 0, left: 0 },
  { top: 0, left: 220 },
  { top: 0, left: 440 },
  { top: 200, left: 80 },
  { top: 200, left: 300 },
  { top: 200, left: 520 },
  { top: 400, left: 20 },
  { top: 400, left: 260 },
  { top: 400, left: 480 },
];

export function MessageWallSection() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="ch5" className="section bg-neutral-950">
      <Grain />
      <div className="container-main">
        <SectionHeader chapter="CHAPTER 06" line1="MESSAGE" line2="Wall" className="mb-14" />

        <FadeUp delay={0.1}>
          <div className="relative h-[600px]">
            {MESSAGES.map((message, i) => {
              const p = POSITIONS[i] ?? { top: i * 60, left: (i % 3) * 200 };
              const isExpanded = expanded === i;
              return (
                <MessageCard
                  key={`${message.author}-${i}`}
                  message={message}
                  expanded={isExpanded}
                  top={p.top}
                  left={p.left}
                  onClick={() => setExpanded(isExpanded ? null : i)}
                />
              );
            })}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
