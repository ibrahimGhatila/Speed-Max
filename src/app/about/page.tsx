import type { Metadata } from "next";
import Image from "next/image";
import Approach from "@/components/Approach";
import Quote from "@/components/Quote";
import Trust from "@/components/Trust";
import Coverage from "@/components/Coverage";
import CtaBanner from "@/components/CtaBanner";
import { img } from "@/lib/images";
import { site, stats } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Speedmax Solutions Sdn Bhd — a Johor-based ICT and extra-low-voltage contractor since 2010, serving businesses across Malaysia.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-ink-deep -mt-20 pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden min-h-[80svh] flex flex-col justify-center">
        <div className="absolute inset-0 bg-dots opacity-30" />
        <div className="absolute -left-32 top-0 h-[400px] w-[400px] rounded-full bg-accent/15 blur-[140px]" />

        <div className="relative mx-auto max-w-[1440px] w-full px-6 lg:px-10">
          <div className="flex items-center justify-between text-[11px] tracking-[0.16em] uppercase text-white/55">
            <span>03 — About</span>
            <span className="hidden sm:block tabular">
              Est. {site.foundedYear}
            </span>
          </div>
          <div className="h-px bg-white/10 mt-4" />

          <div className="mt-10 lg:mt-14 grid lg:grid-cols-12 gap-10">
            <h1 className="lg:col-span-10 font-display text-[34px] sm:text-[44px] lg:text-[64px] xl:text-[72px] text-white">
              A fourteen-year record{" "}
              <span className="text-white/55">of</span>{" "}
              <span className="relative inline-block text-white">
                quiet work.
                <span className="absolute -right-2.5 top-[0.15em] h-2.5 w-2.5 rounded-full bg-accent" />
              </span>
            </h1>
          </div>

          <div className="mt-10 lg:mt-14 grid lg:grid-cols-12 gap-10">
            <p className="lg:col-span-5 text-[15px] lg:text-[16px] leading-[1.55] text-white/80">
              Founded in {site.foundedYear} in Johor Bahru as a specialist
              contractor for ICT and extra-low-voltage construction.
            </p>
            <div className="lg:col-span-4 lg:col-start-9 lg:pl-7 lg:border-l border-white/10 text-[13px] text-white/65 leading-relaxed">
              We measure ourselves on what doesn&apos;t happen — no downtime,
              no callbacks, no surprises on invoice day.
            </div>
          </div>
        </div>
      </section>

      {/* Studio body (light) */}
      <section className="bg-paper py-20 lg:py-28">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10 grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] rounded-xl overflow-hidden border border-line">
              <Image
                src={img("team", 1400, 80)}
                alt="Speedmax team"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover duotone-cool"
              />
            </div>
          </div>

          <div className="lg:col-span-7 lg:pt-2">
            <div className="text-[11px] tracking-[0.18em] uppercase font-medium text-accent">
              The studio
            </div>
            <p className="mt-5 text-[18px] lg:text-[20px] leading-[1.55] text-ink max-w-xl">
              Speedmax Solutions Sdn Bhd grew — deliberately — from a
              structured-cabling team into a one-stop technology partner for
              Malaysian businesses.
            </p>
            <p className="mt-4 text-[14px] text-ink/70 leading-relaxed max-w-xl">
              Today, our work spans cabling, networking, IP telephony,
              security and AutoCount accounting. We design, install and
              support every system ourselves, which means one phone number
              when something needs attention, and one company that owns the
              outcome.
            </p>

            <div className="mt-10 border-t border-line">
              <dl className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-line">
                {stats.map((s, i) => (
                  <div key={s.label} className={`py-5 ${i === 0 ? "" : "lg:pl-5"}`}>
                    <dd className="font-display text-[26px] lg:text-[32px] text-ink tabular">
                      {s.value}
                      <span className="text-accent text-[0.55em] font-medium ml-1">
                        {s.suffix}
                      </span>
                    </dd>
                    <dt className="mt-1 text-[10px] tracking-[0.18em] uppercase text-mute">
                      {s.label}
                    </dt>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      <Trust />
      <Approach />
      <Quote />
      <Coverage />
      <CtaBanner />
    </>
  );
}
