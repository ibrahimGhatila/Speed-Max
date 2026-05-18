import Link from "next/link";
import { stats, site } from "@/lib/site";

export default function Hero() {
  return (
    <section className="relative bg-paper">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 pt-20 lg:pt-32 pb-16 lg:pb-24">
        {/* Top meta */}
        <div className="flex items-center justify-between text-[12px] tracking-[0.14em] uppercase text-mute">
          <div className="flex items-center gap-6">
            <span className="tabular-nums">01 / Index</span>
            <span className="hidden sm:inline">{site.address.city.replace(/^\d+\s*/, "")}, {site.address.state}</span>
          </div>
          <div className="tabular-nums hidden sm:block">Est. {site.foundedYear}</div>
        </div>

        <div className="rule mt-5" />

        {/* Headline */}
        <div className="mt-12 lg:mt-20 grid lg:grid-cols-12 gap-10">
          <h1 className="lg:col-span-10 font-display text-[44px] sm:text-[64px] lg:text-[104px] xl:text-[124px] rise">
            Network infrastructure,
            <br className="hidden sm:block" />{" "}
            <span className="text-mute">engineered for</span>{" "}
            <span className="relative inline-block">
              uptime.
              <span className="absolute -right-3 sm:-right-5 top-[0.05em] h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-accent" />
            </span>
          </h1>
        </div>

        {/* Sub + CTAs */}
        <div className="mt-12 lg:mt-16 grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-5 rise rise-2">
            <p className="text-[18px] lg:text-[20px] leading-[1.5] text-ink/85 max-w-md">
              Since 2010, Speedmax has designed, built and maintained the
              cabling, networks, telephony and accounting systems that keep
              Malaysian businesses running.
            </p>
          </div>

          <div className="lg:col-span-6 lg:col-start-7 flex flex-wrap items-center gap-x-8 gap-y-4 rise rise-3">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 bg-ink text-paper px-6 py-4 text-[14px] font-medium rounded-[2px] hover:bg-accent transition-colors"
            >
              Start a project
              <Arrow />
            </Link>
            <Link
              href="/products"
              className="text-[14px] font-medium link-ul"
            >
              View capabilities
            </Link>
          </div>
        </div>

        {/* Metric bar */}
        <div className="mt-24 lg:mt-32 border-t border-line">
          <dl className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-line">
            {stats.map((s) => (
              <div key={s.label} className="px-0 lg:px-6 first:pl-0 last:pr-0 py-8">
                <dt className="eyebrow">{s.label}</dt>
                <dd className="mt-3 font-display text-[44px] lg:text-[64px] tabular-nums">
                  {s.value}
                  <span className="text-mute font-normal text-[0.5em] align-baseline ml-1">
                    {s.suffix}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

function Arrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" className="transition-transform group-hover:translate-x-1">
      <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="square" />
    </svg>
  );
}
