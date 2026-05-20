import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { img, type ImageKey } from "@/lib/images";
import { categories } from "@/lib/site";

export default function Catalog() {
  return (
    <section id="catalog" className="bg-paper-2 py-24 lg:py-32">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        <Reveal className="text-center">
          <span className="section-label">Catalog</span>
          <h2 className="mt-4 font-display text-[34px] sm:text-[44px] lg:text-[56px] leading-[1.02] tracking-[-0.02em] text-ink">
            Every texture tells
            <br />
            <span className="font-display-italic text-[color:var(--color-ink-soft)]">
              the story of your home
            </span>
          </h2>
          <Link
            href="/#contact"
            className="mt-7 inline-flex items-center gap-2 text-[13px] font-semibold text-[color:var(--color-accent)] hover:gap-3 transition-all"
          >
            View all materials
            <Arrow />
          </Link>
        </Reveal>

        <div className="mt-14 lg:mt-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {categories.map((c, i) => (
            <Reveal key={c.slug} delay={i * 90}>
              <Link
                href={`/#contact`}
                className="tile group relative block aspect-[4/5] rounded-[6px] overflow-hidden border border-[color:var(--color-line)]"
              >
                <Image
                  src={img(c.image as ImageKey, 1200, 80)}
                  alt={`${c.title} wall panel sample`}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover tile-image"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-5 lg:p-6 flex items-end justify-between gap-4">
                  <div>
                    <h3 className="font-display text-[24px] lg:text-[28px] text-white tracking-[0.04em] uppercase">
                      {c.title}
                    </h3>
                    <p className="mt-1.5 text-[12px] text-white/75 leading-[1.55] max-w-[28ch]">
                      {c.short}
                    </p>
                  </div>
                  <span
                    aria-hidden
                    className="w-9 h-9 rounded-full bg-white/15 backdrop-blur border border-white/30 inline-flex items-center justify-center text-white shrink-0 group-hover:bg-[color:var(--color-accent)] group-hover:border-[color:var(--color-accent)] transition-all"
                  >
                    <Arrow />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Arrow() {
  return (
    <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
