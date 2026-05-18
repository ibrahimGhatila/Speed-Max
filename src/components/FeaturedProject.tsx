import Image from "next/image";
import { img } from "@/lib/images";
import { featured } from "@/lib/site";

export default function FeaturedProject() {
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-16 lg:py-24">
        <div className="flex items-end justify-between mb-8">
          <div className="eyebrow">02 / Selected project</div>
          <div className="eyebrow tabular-nums">{featured.year}</div>
        </div>
        <div className="rule" />
      </div>

      <figure className="relative">
        <div className="relative aspect-[16/8] lg:aspect-[16/7] w-full overflow-hidden">
          <Image
            src={img("featuredProject", 2400, 80)}
            alt={`${featured.client} — ${featured.scope}`}
            fill
            priority
            sizes="100vw"
            className="object-cover duotone"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
        </div>

        <figcaption className="absolute bottom-6 lg:bottom-10 left-6 lg:left-10 right-6 lg:right-10 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 text-paper">
          <div>
            <div className="text-[12px] tracking-[0.14em] uppercase text-paper/70">
              {featured.location}
            </div>
            <div className="mt-2 font-display text-[28px] lg:text-[40px] max-w-xl">
              {featured.client}
            </div>
          </div>
          <div className="text-[14px] text-paper/85 lg:text-right tabular-nums max-w-xs">
            {featured.scope}
          </div>
        </figcaption>
      </figure>
    </section>
  );
}
