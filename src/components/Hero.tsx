import Link from "next/link";
import Image from "next/image";
import { img } from "@/lib/images";
import { stats } from "@/lib/site";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-ink-deep -mt-20 pt-20 min-h-[760px] lg:min-h-[860px]">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={img("heroFiber", 2400, 80)}
          alt="High-density fibre network infrastructure"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center duotone-cool"
        />
        {/* Dark cinematic overlay */}
        <div className="absolute inset-0 hero-overlay" />
        {/* Accent edge glow */}
        <div className="absolute -right-40 top-1/4 h-[480px] w-[480px] rounded-full bg-accent/20 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 lg:px-10 pt-16 lg:pt-28 pb-24 lg:pb-32">
        <div className="max-w-4xl rise">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 backdrop-blur px-4 py-1.5 text-[12px] tracking-[0.14em] uppercase text-white/85 font-medium">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
            Serving Malaysian businesses since 2010
          </div>

          <h1 className="mt-7 font-display text-[44px] sm:text-[64px] lg:text-[88px] xl:text-[104px] text-white">
            Network infrastructure
            <br />
            for businesses that
            <br />
            <span className="text-white">can&apos;t afford</span>{" "}
            <span className="relative inline-block text-accent">
              downtime.
              <span className="absolute -right-2 top-[0.05em] h-3 w-3 rounded-full bg-accent" />
            </span>
          </h1>
        </div>

        <div className="mt-12 lg:mt-16 grid lg:grid-cols-12 gap-10 items-end rise rise-2">
          <p className="lg:col-span-5 text-[18px] lg:text-[20px] leading-[1.55] text-white/85 max-w-xl">
            Structured cabling, networks, IP telephony, security and AutoCount —
            designed, installed and maintained by one accountable team.
          </p>
          <div className="lg:col-span-6 lg:col-start-7 flex flex-wrap items-center gap-x-6 gap-y-4">
            <Link
              href="/contact"
              className="btn-lift group inline-flex items-center gap-3 bg-accent text-white px-7 py-4 text-[15px] font-semibold rounded-full hover:bg-accent-hot"
            >
              Request site survey
              <Arrow />
            </Link>
            <Link
              href="/products"
              className="group inline-flex items-center gap-3 border border-white/20 bg-white/5 backdrop-blur text-white px-7 py-4 text-[15px] font-semibold rounded-full hover:bg-white/10 transition-colors"
            >
              View capabilities
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom stats strip */}
      <div className="relative z-10 border-t border-white/10 bg-ink-deep/70 backdrop-blur">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <dl className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/8">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`py-6 lg:py-8 ${i === 0 ? "lg:pl-0" : "lg:pl-8"} pr-6`}
              >
                <dd className="font-display text-[34px] lg:text-[48px] text-white tabular">
                  {s.value}
                  <span className="text-accent text-[0.55em] font-medium ml-1 align-baseline">
                    {s.suffix}
                  </span>
                </dd>
                <dt className="mt-1 text-[12px] tracking-[0.14em] uppercase text-white/60 font-medium">
                  {s.label}
                </dt>
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
      <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
