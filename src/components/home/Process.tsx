import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { img, type ImageKey } from "@/lib/images";
import { process } from "@/lib/site";

export default function Process() {
  return (
    <section id="process" className="bg-paper-2 py-24 lg:py-32">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        <Reveal className="text-center max-w-2xl mx-auto">
          <span className="section-label">Process</span>
          <h2 className="mt-4 font-display text-[34px] sm:text-[44px] lg:text-[56px] leading-[1.02] tracking-[-0.02em] text-ink">
            From idea to reality
            <br />
            <span className="font-display-italic text-[color:var(--color-ink-soft)]">
              step by step
            </span>
          </h2>
          <p className="mt-6 text-[14px] leading-[1.7] text-mute">
            Every project moves through a single, predictable arc — from first
            sketch to a wall you can run your hand across.
          </p>
          <Link href="/#contact" className="btn-primary mt-7">
            Submit a request
            <Arrow />
          </Link>
        </Reveal>

        <div className="mt-14 lg:mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {process.map((p, i) => (
            <Reveal key={p.num} delay={i * 90}>
              <article className="card-soft tile relative h-full overflow-hidden flex flex-col">
                <div className="relative aspect-[5/4] overflow-hidden">
                  <Image
                    src={img(p.image as ImageKey, 900, 80)}
                    alt={`${p.title} — step ${p.num} of our process`}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover tile-image"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 font-display italic text-[40px] text-white drop-shadow-sm leading-none">
                    {p.num}
                  </span>
                </div>
                <div className="p-6 flex-1">
                  <h3 className="font-display text-[20px] lg:text-[22px] text-ink tracking-[-0.01em]">
                    {p.title}
                  </h3>
                  <p className="mt-2.5 text-[13px] leading-[1.6] text-mute">
                    {p.body}
                  </p>
                </div>
              </article>
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
