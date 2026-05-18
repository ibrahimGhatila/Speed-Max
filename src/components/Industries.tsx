import Image from "next/image";
import { industries } from "@/lib/site";
import { img, type ImageKey } from "@/lib/images";

export default function Industries() {
  return (
    <section className="relative bg-paper py-20 lg:py-28">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <div className="text-[11px] tracking-[0.18em] uppercase font-medium text-accent">
              03 — Industries
            </div>
            <h2 className="mt-4 font-display text-[32px] sm:text-[40px] lg:text-[56px] text-ink">
              Built for the{" "}
              <span className="text-mute">businesses that build Malaysia.</span>
            </h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-9 text-[14px] leading-relaxed text-ink/65">
            From single-site clinics to multi-floor manufacturing plants —
            grounded in the operational realities of the sectors we serve.
          </div>
        </div>

        <div className="mt-12 lg:mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {industries.map((ind) => (
            <article
              key={ind.slug}
              className="card-hover group relative aspect-[5/6] rounded-xl overflow-hidden border border-line"
            >
              <Image
                src={img(ind.image as ImageKey, 900, 75)}
                alt={ind.title}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover duotone-cool card-image"
              />
              <div className="absolute inset-0 industry-overlay" />
              <div className="absolute inset-x-5 bottom-5 lg:inset-x-6 lg:bottom-6 text-white">
                <div className="text-[10px] tabular tracking-[0.18em] uppercase text-white/70">
                  Sector
                </div>
                <h3 className="mt-1.5 font-display text-[22px] lg:text-[26px] tracking-[-0.02em]">
                  {ind.title}
                </h3>
                <p className="mt-1.5 text-[13px] text-white/80 leading-relaxed max-w-xs">
                  {ind.body}
                </p>
                <div className="mt-4 h-px w-8 bg-accent group-hover:w-14 transition-all duration-300" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
