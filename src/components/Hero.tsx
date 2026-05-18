import Link from "next/link";
import Image from "next/image";
import { img } from "@/lib/images";
import { stats } from "@/lib/site";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-ink-deep -mt-20 pt-20 min-h-[100svh] flex flex-col">
      <div className="absolute inset-0 z-0">
        <Image
          src={img("heroFiber", 2400, 80)}
          alt="High-density fibre network infrastructure"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center duotone-cool"
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="absolute -right-40 top-1/4 h-[420px] w-[420px] rounded-full bg-accent/15 blur-[120px]" />
      </div>

      <div className="relative z-10 flex-1 flex flex-col">
        <div className="flex-1 mx-auto w-full max-w-[1440px] px-6 lg:px-10 pt-10 lg:pt-20 pb-10 lg:pb-14 flex flex-col justify-center">
          <div className="max-w-3xl rise">
            <h1 className="font-display text-[34px] sm:text-[44px] lg:text-[60px] xl:text-[72px] text-white max-w-3xl">
              Network infrastructure for businesses that{" "}
              <span className="text-white/55">can&apos;t afford</span>{" "}
              <span className="relative inline-block text-accent">
                downtime.
                <span className="absolute -right-2 top-[0.1em] h-2 w-2 bg-accent" />
              </span>
            </h1>
          </div>

          <div className="mt-10 lg:mt-12 flex flex-wrap items-center gap-x-5 gap-y-3 rise rise-2">
            <Link
              href="/contact"
              className="btn-lift group inline-flex items-center gap-2.5 bg-accent text-white px-6 py-3 text-[14px] font-semibold hover:bg-accent-hot"
            >
              Request site survey
              <Arrow />
            </Link>
            <Link
              href="/products"
              className="group inline-flex items-center gap-2.5 border border-white/20 bg-white/5 backdrop-blur text-white px-6 py-3 text-[14px] font-semibold hover:bg-white/10 transition-colors"
            >
              View capabilities
            </Link>
          </div>
        </div>

        <div className="relative z-10 border-t border-white/10 bg-ink-deep/70 backdrop-blur shrink-0">
          <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
            <dl className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/8">
              {stats.map((s, i) => (
                <div
                  key={s.label}
                  className={`py-5 lg:py-6 ${i === 0 ? "lg:pl-0" : "lg:pl-7"} pr-6`}
                >
                  <dd className="font-display text-[26px] lg:text-[34px] text-white tabular leading-none">
                    {s.value}
                    <span className="text-accent text-[0.55em] font-medium ml-1 align-baseline">
                      {s.suffix}
                    </span>
                  </dd>
                  <dt className="mt-1.5 text-[10px] tracking-[0.16em] uppercase text-white/55 font-medium">
                    {s.label}
                  </dt>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

function Arrow() {
  return (
    <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true" className="transition-transform group-hover:translate-x-1">
      <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
