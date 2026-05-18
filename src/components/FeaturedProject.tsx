import Image from "next/image";
import { img } from "@/lib/images";
import { featured } from "@/lib/site";

export default function FeaturedProject() {
  return (
    <section className="relative bg-ink py-24 lg:py-36">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 items-end mb-12 lg:mb-16">
          <div className="lg:col-span-8">
            <div className="eyebrow">05 — Selected work</div>
            <h2 className="mt-6 font-display text-[40px] sm:text-[56px] lg:text-[72px] text-white">
              A recent project
              <br />
              <span className="text-white/55">we&apos;re proud of.</span>
            </h2>
          </div>
        </div>

        <article className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Image */}
          <div className="lg:col-span-8 relative">
            <div className="relative aspect-[4/3] lg:aspect-[16/11] overflow-hidden rounded-2xl border border-white/10">
              <Image
                src={img("featuredProject", 2000, 80)}
                alt={`${featured.client} — ${featured.scope}`}
                fill
                sizes="(min-width: 1024px) 66vw, 100vw"
                className="object-cover duotone-cool"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-deep/70 via-transparent to-transparent" />
              <div className="absolute top-6 left-6 right-6 flex items-center justify-between text-[11px] tabular tracking-[0.18em] uppercase text-white/70">
                <span>Case · 01</span>
                <span>{featured.year}</span>
              </div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="text-[12px] tracking-[0.16em] uppercase text-accent font-medium">
                  {featured.location}
                </div>
                <div className="mt-2 font-display text-[28px] lg:text-[40px] text-white tracking-[-0.03em]">
                  {featured.client}
                </div>
              </div>
            </div>
          </div>

          {/* Metadata + quote */}
          <aside className="lg:col-span-4 lg:pt-4">
            <Meta label="Scope" value={featured.scope} />
            <Meta label="Location" value={featured.location} />
            <Meta label="Year" value={featured.year} />
            <Meta label="Sector" value="Manufacturing" />

            <div className="mt-10">
              <div className="eyebrow-mute">In their words</div>
              <blockquote className="mt-4 text-[18px] lg:text-[20px] text-white leading-[1.45] tracking-[-0.01em]">
                <span className="text-accent">“</span>
                {featured.quote}
                <span className="text-accent">”</span>
              </blockquote>
              <div className="mt-5 text-[12px] tracking-[0.14em] uppercase text-white/55">
                — {featured.attribution}
              </div>
            </div>
          </aside>
        </article>
      </div>
    </section>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between gap-6 py-4 border-b border-white/10 first:border-t">
      <span className="text-[11px] tracking-[0.18em] uppercase text-white/55 shrink-0">
        {label}
      </span>
      <span className="text-[14px] text-white text-right tabular">
        {value}
      </span>
    </div>
  );
}
