"use client";

import Image from "next/image";
import { useState } from "react";
import Reveal from "@/components/Reveal";
import { img, type ImageKey } from "@/lib/images";
import { testimonials } from "@/lib/site";

export default function Testimonials() {
  const [idx, setIdx] = useState(0);
  const total = testimonials.length;
  const active = testimonials[idx];

  const prev = () => setIdx((i) => (i - 1 + total) % total);
  const next = () => setIdx((i) => (i + 1) % total);

  return (
    <section className="bg-paper py-24 lg:py-32">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        <Reveal className="text-center max-w-3xl mx-auto">
          <span className="section-label">Testimonials</span>
          <h2 className="mt-4 font-display text-[34px] sm:text-[44px] lg:text-[56px] leading-[1.02] tracking-[-0.02em] text-ink">
            The best review of our work
            <br />
            <span className="font-display-italic text-[color:var(--color-ink-soft)]">
              — satisfied clients
            </span>
          </h2>
        </Reveal>

        <Reveal delay={120} className="mt-14 lg:mt-20">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            {/* Left — controls + quote */}
            <div className="lg:col-span-5 flex flex-col">
              <div className="flex items-center gap-2">
                <button
                  onClick={prev}
                  aria-label="Previous testimonial"
                  className="w-11 h-11 inline-flex items-center justify-center border border-[color:var(--color-line-strong)] rounded-full hover:bg-white hover:border-ink transition-colors"
                >
                  <Chevron direction="left" />
                </button>
                <button
                  onClick={next}
                  aria-label="Next testimonial"
                  className="w-11 h-11 inline-flex items-center justify-center border border-[color:var(--color-line-strong)] rounded-full hover:bg-white hover:border-ink transition-colors"
                >
                  <Chevron direction="right" />
                </button>
                <span className="ml-4 text-[12px] tabular text-mute">
                  {String(idx + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
                </span>
              </div>

              <figure key={idx} className="mt-8 relative rise">
                <span
                  aria-hidden
                  className="absolute -top-6 -left-1 font-display italic text-[110px] leading-none text-[color:var(--color-accent)]/15 select-none"
                >
                  &ldquo;
                </span>
                <blockquote className="relative font-display-italic text-[20px] lg:text-[24px] leading-[1.45] text-ink max-w-prose">
                  {active.quote}
                </blockquote>
                <figcaption className="mt-7 flex items-center gap-3">
                  <span className="h-px w-8 bg-[color:var(--color-accent)]" />
                  <div>
                    <div className="text-[13px] font-medium text-ink">
                      {active.name}
                    </div>
                    <div className="text-[12px] text-mute mt-0.5">
                      {active.role}
                    </div>
                  </div>
                </figcaption>
              </figure>
            </div>

            {/* Right — image */}
            <div className="lg:col-span-7">
              <div className="tile relative aspect-[16/10] rounded-[6px] overflow-hidden">
                <Image
                  key={active.image}
                  src={img(active.image as ImageKey, 1600, 80)}
                  alt={`${active.role} — a project we delivered for ${active.name}`}
                  fill
                  sizes="(min-width: 1024px) 60vw, 100vw"
                  className="object-cover tile-image rise"
                />
                <span className="absolute top-5 left-5 inline-flex items-center gap-2 bg-white/85 backdrop-blur-sm px-3 py-1.5 rounded-full text-[11px] tracking-[0.16em] uppercase text-ink/80 font-medium">
                  {active.role.split("·")[0]?.trim() || active.role}
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Chevron({ direction }: { direction: "left" | "right" }) {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path
        d={direction === "left" ? "M9 1L3 7l6 6" : "M5 1l6 6-6 6"}
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
