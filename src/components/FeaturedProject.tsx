import Image from "next/image";
import { img } from "@/lib/images";
import { featured } from "@/lib/site";

export default function FeaturedProject() {
  return (
    <section className="relative bg-ink-deep py-20 lg:py-28">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="flex items-baseline justify-between mb-10 lg:mb-14">
          <div>
            <div className="eyebrow">Selected work</div>
            <h2 className="mt-4 font-display text-[28px] sm:text-[36px] lg:text-[44px] text-white">
              {featured.client}.
            </h2>
          </div>
          <div className="hidden sm:block text-[11px] tracking-[0.18em] uppercase text-white/55 tabular">
            Case · 01 / {featured.year}
          </div>
        </div>

        <figure className="relative aspect-[16/9] lg:aspect-[16/8] overflow-hidden border border-white/10">
          <Image
            src={img("featuredProject", 2400, 80)}
            alt={`${featured.client} — ${featured.scope}`}
            fill
            sizes="100vw"
            className="object-cover duotone-cool"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-deep/85 via-ink-deep/10 to-transparent" />

          <figcaption className="absolute inset-x-6 lg:inset-x-10 bottom-6 lg:bottom-10 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-3 text-white">
            <div className="text-[11px] tracking-[0.18em] uppercase text-accent">
              {featured.location}
            </div>
            <div className="text-[13px] lg:text-[15px] text-white/85 tabular">
              {featured.scope}
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
