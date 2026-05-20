"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Reveal from "@/components/Reveal";
import { img } from "@/lib/images";
import { stats } from "@/lib/site";

export default function AboutStats() {
  return (
    <section id="about" className="bg-paper py-24 lg:py-32">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left — label + headline + stats */}
          <Reveal className="lg:col-span-7">
            <span className="section-label">About us</span>
            <h2 className="mt-5 font-display text-[34px] sm:text-[44px] lg:text-[56px] leading-[1.02] tracking-[-0.02em] text-ink max-w-[18ch]">
              Quality manufactured
              <br />
              <span className="font-display-italic text-[color:var(--color-ink-soft)]">
                with attention to every detail
              </span>
            </h2>

            <p className="mt-7 max-w-md text-[14px] leading-[1.7] text-mute">
              We work with proven materials and focus on precision and
              durability — so the surface we hand back to you reads exactly as
              it did on the renders, and still does ten years on.
            </p>

            <dl className="mt-12 lg:mt-16 divide-y divide-[color:var(--color-line)] border-y border-[color:var(--color-line)] max-w-xl">
              {stats.map((s) => (
                <StatRow key={s.label} value={s.value} suffix={s.suffix} label={s.label} />
              ))}
            </dl>
          </Reveal>

          {/* Right — image */}
          <Reveal delay={120} className="lg:col-span-5">
            <div className="tile relative aspect-[4/5] rounded-[6px] overflow-hidden">
              <Image
                src={img("aboutDetail", 1400, 82)}
                alt="A close-up of one of our finished wall panel installations"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover tile-image"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function StatRow({
  value,
  suffix,
  label,
}: {
  value: string;
  suffix: string;
  label: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Strip commas to parse, retain pattern for output
    const targetNum = parseFloat(value.replace(/,/g, ""));
    const hasDecimal = value.includes(".");
    const groupings = value.includes(",");

    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const duration = 1100;
          const start = performance.now();
          const step = (now: number) => {
            const t = Math.min(1, (now - start) / duration);
            const eased = 1 - Math.pow(1 - t, 3);
            const current = targetNum * eased;
            const out = hasDecimal
              ? current.toFixed(1)
              : groupings
                ? Math.round(current).toLocaleString("en-US")
                : Math.round(current).toString();
            setDisplay(out);
            if (t < 1) requestAnimationFrame(step);
            else setDisplay(value);
          };
          requestAnimationFrame(step);
          obs.disconnect();
          break;
        }
      },
      { threshold: 0.4 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="grid grid-cols-[auto_1fr] items-baseline gap-8 py-5">
      <dt className="font-display text-[44px] lg:text-[56px] leading-none tabular text-[color:var(--color-accent)]">
        {display}
        <span className="text-[0.5em] align-top ml-0.5">{suffix}</span>
      </dt>
      <dd className="text-[13px] text-mute leading-[1.5] max-w-[24ch] justify-self-end text-right">
        {label}
      </dd>
    </div>
  );
}
