import Image from "next/image";
import Link from "next/link";
import { img } from "@/lib/images";

export default function Hero() {
  return (
    <section className="relative -mt-16 lg:-mt-20 pt-16 lg:pt-20 bg-paper">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10 pt-8 lg:pt-12">
        {/* Headline + side note */}
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 items-end pb-8 lg:pb-12 rise">
          <h1 className="lg:col-span-8 font-display text-[40px] sm:text-[56px] lg:text-[80px] xl:text-[92px] leading-[0.98] tracking-[-0.02em] text-ink">
            Premium solutions
            <br />
            <span className="font-display-italic text-[color:var(--color-ink-soft)]">
              for modern interiors
            </span>
          </h1>

          <div className="lg:col-span-4 lg:pb-3 max-w-md">
            <p className="text-[13px] leading-[1.6] text-mute">
              <span className="mr-1 inline-block h-px w-6 align-middle bg-[color:var(--color-accent)]" />
              We design and manufacture decorative wall panels that highlight
              the character of an interior and add genuine depth.
            </p>
            <Link
              href="/#catalog"
              className="mt-3 inline-flex items-center gap-2 text-[13px] font-semibold text-[color:var(--color-accent)] hover:gap-3 transition-all"
            >
              View catalog
              <Arrow />
            </Link>
          </div>
        </div>

        {/* Full-bleed hero image */}
        <div className="tile relative aspect-[16/8] lg:aspect-[16/7] rise rise-2 rounded-[6px] overflow-hidden">
          <Image
            src={img("hero", 2400, 82)}
            alt="A warmly lit living room with sculpted decorative wall panels"
            fill
            priority
            sizes="(min-width: 1280px) 1280px, 100vw"
            className="object-cover tile-image"
          />
          {/* Subtle warm wash to anchor text contrast at the bottom if needed */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/15 to-transparent pointer-events-none" />

          {/* CTA cluster anchored bottom-left */}
          <div className="absolute left-5 bottom-5 lg:left-8 lg:bottom-8 flex items-center gap-3">
            <Link href="/#contact" className="btn-primary">
              Discuss a project
              <Arrow />
            </Link>
            <Link
              href="/#process"
              className="btn-ghost bg-white/85 backdrop-blur-sm border-white/60 text-ink"
            >
              How we work
            </Link>
          </div>
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
