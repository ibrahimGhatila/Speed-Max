import Image from "next/image";
import { img } from "@/lib/images";
import { featured } from "@/lib/site";

export default function Quote() {
  return (
    <section className="relative bg-ink overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-25 pointer-events-none" />
      <div className="relative mx-auto max-w-[1440px] px-6 lg:px-10 py-20 lg:py-28">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-4">
            <div className="relative aspect-[4/5] rounded-xl overflow-hidden border border-white/10">
              <Image
                src={img("studio", 1000, 78)}
                alt="On site"
                fill
                sizes="(min-width: 1024px) 33vw, 100vw"
                className="object-cover duotone-cool"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-deep/40 via-transparent to-transparent" />
            </div>
          </div>

          <div className="lg:col-span-8 lg:pl-4">
            <div className="eyebrow">07 — Testimony</div>
            <blockquote className="mt-6 font-display text-[24px] sm:text-[30px] lg:text-[40px] leading-[1.18] tracking-[-0.02em] text-white max-w-3xl">
              <span className="text-accent">“</span>
              {featured.quote}
              <span className="text-accent">”</span>
            </blockquote>

            <div className="mt-8 flex items-center gap-5">
              <div className="h-px w-10 bg-accent" />
              <div>
                <div className="text-[13px] text-white font-semibold">
                  {featured.attribution}
                </div>
                <div className="text-[11px] text-white/55 tracking-wide uppercase mt-0.5">
                  {featured.location} · {featured.year}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
