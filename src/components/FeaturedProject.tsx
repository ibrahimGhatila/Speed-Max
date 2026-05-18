import Image from "next/image";
import { img } from "@/lib/images";
import { featured } from "@/lib/site";

export default function FeaturedProject() {
  return (
    <section className="relative bg-ink-deep py-20 lg:py-28 min-h-[90svh] flex items-center">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10 w-full">
        <div className="grid lg:grid-cols-12 gap-8 items-end mb-10 lg:mb-14">
          <div className="lg:col-span-8">
            <div className="eyebrow">Selected work</div>
            <h2 className="mt-4 font-display text-[32px] sm:text-[40px] lg:text-[52px] text-white">
              A recent project{" "}
              <span className="text-white/55">we&apos;re proud of.</span>
            </h2>
          </div>
        </div>

        <article className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-8 relative">
            <div className="relative aspect-[16/10] lg:aspect-[16/9] overflow-hidden border border-white/10">
              <Image
                src={img("featuredProject", 2000, 80)}
                alt={`${featured.client} — ${featured.scope}`}
                fill
                sizes="(min-width: 1024px) 66vw, 100vw"
                className="object-cover duotone-cool"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-deep/70 via-transparent to-transparent" />
              <div className="absolute top-5 left-5 right-5 flex items-center justify-between text-[10px] tabular tracking-[0.18em] uppercase text-white/70">
                <span>Case · 01</span>
                <span>{featured.year}</span>
              </div>
              <div className="absolute bottom-5 left-5 right-5">
                <div className="text-[11px] tracking-[0.16em] uppercase text-accent font-medium">
                  {featured.location}
                </div>
                <div className="mt-1.5 font-display text-[24px] lg:text-[32px] text-white tracking-[-0.025em]">
                  {featured.client}
                </div>
              </div>
            </div>
          </div>

          <aside className="lg:col-span-4 lg:pt-2">
            <Meta label="Scope" value={featured.scope} />
            <Meta label="Location" value={featured.location} />
            <Meta label="Year" value={featured.year} />
            <Meta label="Sector" value="Manufacturing" />

            <div className="mt-8">
              <div className="eyebrow-mute">In their words</div>
              <blockquote className="mt-3 text-[15px] lg:text-[16px] text-white leading-[1.55]">
                <span className="text-accent">“</span>
                {featured.quote}
                <span className="text-accent">”</span>
              </blockquote>
              <div className="mt-4 text-[11px] tracking-[0.14em] uppercase text-white/55">
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
    <div className="flex items-baseline justify-between gap-6 py-3 border-b border-white/10 first:border-t">
      <span className="text-[10px] tracking-[0.18em] uppercase text-white/55 shrink-0">
        {label}
      </span>
      <span className="text-[13px] text-white text-right tabular">{value}</span>
    </div>
  );
}
