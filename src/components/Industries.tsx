import Image from "next/image";
import { industries } from "@/lib/site";
import { img, type ImageKey } from "@/lib/images";

export default function Industries() {
  return (
    <section className="relative bg-ink-deep py-24 lg:py-36">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <div className="eyebrow">03 — Industries</div>
            <h2 className="mt-6 font-display text-[40px] sm:text-[56px] lg:text-[80px] text-white">
              Built for the
              <br />
              <span className="text-white/55">businesses that build</span>{" "}
              <span className="text-white">Malaysia.</span>
            </h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-9 text-[16px] leading-relaxed text-white/65">
            From single-site clinics to multi-floor manufacturing plants —
            our work is grounded in the operational realities of the
            sectors we serve.
          </div>
        </div>

        <div className="mt-16 lg:mt-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {industries.map((ind) => (
            <article
              key={ind.slug}
              className="card-hover group relative aspect-[5/6] rounded-2xl overflow-hidden bg-ink-soft border border-white/8 hover:border-white/20 transition-colors"
            >
              <Image
                src={img(ind.image as ImageKey, 900, 75)}
                alt={ind.title}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover duotone-cool card-image"
              />
              <div className="absolute inset-0 industry-overlay" />
              <div className="absolute inset-x-6 bottom-6 lg:inset-x-7 lg:bottom-7">
                <div className="text-[11px] tabular tracking-[0.18em] uppercase text-white/65">
                  Sector
                </div>
                <h3 className="mt-2 font-display text-[26px] lg:text-[30px] text-white tracking-[-0.03em]">
                  {ind.title}
                </h3>
                <p className="mt-2 text-[14px] text-white/75 leading-relaxed max-w-xs">
                  {ind.body}
                </p>
                <div className="mt-5 h-px w-10 bg-accent group-hover:w-16 transition-all duration-300" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
