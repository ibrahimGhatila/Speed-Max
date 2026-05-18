"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { industries } from "@/lib/site";
import { img, type ImageKey } from "@/lib/images";

export default function Industries() {
  const [i, setI] = useState(0);
  const total = industries.length;
  const current = industries[i];

  const prev = useCallback(() => setI((p) => (p - 1 + total) % total), [total]);
  const next = useCallback(() => setI((p) => (p + 1) % total), [total]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next]);

  return (
    <section className="relative bg-ink-deep py-20 lg:py-28">
      <div className="absolute inset-0 bg-dots opacity-30 pointer-events-none" />
      <div className="relative mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <div className="eyebrow">Industries</div>
            <h2 className="mt-4 font-display text-[32px] sm:text-[40px] lg:text-[56px] text-white">
              Built for the{" "}
              <span className="text-white/55">
                businesses that build Malaysia.
              </span>
            </h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-9 text-[14px] leading-relaxed text-white/65">
            From single-site clinics to multi-floor manufacturing plants —
            grounded in the operational realities of the sectors we serve.
          </div>
        </div>

        <div className="mt-12 lg:mt-20 grid lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          <div className="lg:col-span-5 flex flex-col justify-between order-2 lg:order-1">
            <div key={`text-${current.slug}`} className="rise">
              <div className="flex items-baseline gap-3 text-[10px] tabular tracking-[0.18em] uppercase text-white/55">
                <span>{String(i + 1).padStart(2, "0")}</span>
                <span className="h-px w-6 bg-white/20" />
                <span>{String(total).padStart(2, "0")}</span>
              </div>
              <h3 className="mt-5 font-display text-[36px] lg:text-[52px] text-white leading-[1.05]">
                {current.title}
              </h3>
              <p className="mt-5 text-[15px] lg:text-[16px] text-white/75 leading-[1.6] max-w-md">
                {current.body}
              </p>
              <div className="mt-6 h-px w-10 bg-accent" />

              <div className="mt-8 text-[11px] tracking-[0.18em] uppercase text-white/45">
                Other sectors
              </div>
              <ul className="mt-3 space-y-0.5">
                {industries.map((ind, idx) =>
                  idx === i ? null : (
                    <li key={ind.slug}>
                      <button
                        type="button"
                        onClick={() => setI(idx)}
                        className="text-[13px] text-white/55 hover:text-white transition-colors"
                      >
                        {ind.title}
                      </button>
                    </li>
                  ),
                )}
              </ul>
            </div>

            <div className="mt-10 lg:mt-12 flex items-center gap-5">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={prev}
                  aria-label="Previous sector"
                  className="h-11 w-11 border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-ink hover:border-white transition-colors"
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M13 7H1M7 1L1 7l6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={next}
                  aria-label="Next sector"
                  className="h-11 w-11 border border-white/20 flex items-center justify-center text-white hover:bg-accent hover:border-accent transition-colors"
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
              <div className="flex items-center gap-1.5">
                {industries.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setI(idx)}
                    aria-label={`Go to sector ${idx + 1}`}
                    className={`h-px transition-all duration-300 ${
                      idx === i
                        ? "w-10 bg-accent"
                        : "w-5 bg-white/25 hover:bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2">
            <div
              key={`image-${current.slug}`}
              className="relative aspect-[5/6] overflow-hidden border border-white/10 rise"
            >
              <Image
                src={img(current.image as ImageKey, 1400, 80)}
                alt={current.title}
                fill
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="object-cover duotone-cool"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-deep/40 via-transparent to-transparent" />
              <div className="absolute top-6 left-6 right-6 flex items-baseline justify-between text-[10px] tabular tracking-[0.18em] uppercase text-white/80">
                <span>Sector</span>
                <span>{current.title}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
