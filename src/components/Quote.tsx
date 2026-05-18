import Image from "next/image";
import { img } from "@/lib/images";
import { featured } from "@/lib/site";

export default function Quote() {
  return (
    <section className="relative bg-ink overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10 py-24 lg:py-40">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5">
            <div className="relative aspect-[5/6] rounded-2xl overflow-hidden border border-white/10">
              <Image
                src={img("studio", 1200, 78)}
                alt="On site"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover duotone-cool"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-deep/40 via-transparent to-transparent" />
            </div>
          </div>

          <div className="lg:col-span-7 lg:pl-6">
            <div className="eyebrow">07 — Testimony</div>
            <blockquote className="mt-8 font-display text-[28px] sm:text-[36px] lg:text-[52px] leading-[1.1] tracking-[-0.025em] text-white">
              <span className="text-accent">“</span>
              {featured.quote}
              <span className="text-accent">”</span>
            </blockquote>

            <div className="mt-10 flex items-center gap-6">
              <div className="h-px w-12 bg-accent" />
              <div>
                <div className="text-[14px] text-white font-medium">
                  {featured.attribution}
                </div>
                <div className="text-[12px] text-white/55 tracking-wide uppercase mt-0.5">
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
