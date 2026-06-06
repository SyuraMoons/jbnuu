"use client";

import { useEffect, useRef, useState } from "react";
import { FadeUp } from "@/components/ui/FadeUp";
import { Grain } from "@/components/ui/Grain";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StatisticCard } from "@/components/ui/StatisticCard";
import { STATS } from "@/data/stats";

export function StatisticsSection() {
  const [visible, setVisible] = useState(false);
  const [counts, setCounts] = useState([0, 0, 0, 0, 0]);
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      obs.observe(ref.current);
    }

    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) {
      return;
    }

    [5, 30, 8000, 20].forEach((target, i) => {
      let value = 0;
      const duration = 2000;
      const step = 16;
      const increment = target / (duration / step);

      const timer = setInterval(() => {
        value = Math.min(value + increment, target);
        setCounts((prev) => {
          const next = [...prev];
          next[i] = Math.round(value);
          return next;
        });

        if (value >= target) {
          clearInterval(timer);
        }
      }, step);
    });
  }, [visible]);

  return (
    <section id="ch4" ref={ref} className="section bg-base">
      <Grain />
      <div className="container-main">
        <SectionHeader chapter="CHAPTER 05" line1="BY THE" line2="Numbers" className="mb-20" />

        <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))]">
          {STATS.map((stat, index) => {
            const display = stat.num === "∞" ? "∞" : stat.num.includes(",") ? (visible ? stat.num : "0") : counts[index].toLocaleString();

            return (
              <FadeUp key={stat.label} delay={index * 0.1}>
                <StatisticCard stat={stat} display={display} />
              </FadeUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}
