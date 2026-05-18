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
      <section className="relative bg-ink-deep pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-30" />
        <div className="absolute -left-32 top-0 h-[480px] w-[480px] rounded-full bg-accent/15 blur-[140px]" />

        <div className="relative mx-auto max-w-[1440px] px-6 lg:px-10">
          <div className="flex items-center justify-between text-[12px] tracking-[0.16em] uppercase text-white/55">
            <span>03 — About</span>
            <span className="hidden sm:block tabular">
              Est. {site.foundedYear}
            </span>
          </div>
          <div className="h-px bg-white/10 mt-5" />

          <div className="mt-14 lg:mt-20 grid lg:grid-cols-12 gap-10">
            <h1 className="lg:col-span-10 font-display text-[44px] sm:text-[64px] lg:text-[104px] text-white">
              A fourteen-year
              <br />
              <span className="text-white/55">record of</span>{" "}
              <span className="relative inline-block text-white">
                quiet work.
                <span className="absolute -right-3 lg:-right-4 top-[0.05em] h-3 w-3 lg:h-4 lg:w-4 rounded-full bg-accent" />
              </span>
            </h1>
          </div>

          <div className="mt-16 lg:mt-24 grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <div className="relative aspect-[5/6] rounded-2xl overflow-hidden border border-white/8">
                <Image
                  src={img("team", 1400, 80)}
                  alt="Speedmax team"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover duotone-cool"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-deep/50 via-transparent to-transparent" />
              </div>
            </div>

            <div className="lg:col-span-7 lg:pt-4">
              <p className="text-[18px] lg:text-[22px] leading-[1.55] text-white">
                Speedmax Solutions Sdn Bhd was founded in {site.foundedYear} in
                Johor Bahru as a specialist contractor for ICT and
                extra-low-voltage construction. We started as a structured-
                cabling team, and grew — deliberately — into a one-stop
                technology partner for Malaysian businesses.
              </p>
              <p className="mt-6 text-[16px] text-white/70 leading-relaxed">
                Today, our work spans cabling, networking, IP telephony,
                security and AutoCount accounting. We design, install and
                support every system ourselves, which means one phone
                number when something needs attention, and one company
                that owns the outcome.
              </p>
              <p className="mt-6 text-[16px] text-white/70 leading-relaxed">
                We measure ourselves on what doesn&apos;t happen.
              </p>

              {/* Big stats */}
              <div className="mt-12 border-t border-white/10">
                <dl className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/10">
                  {stats.map((s) => (
                    <div key={s.label} className="py-6 first:pl-0 lg:px-5">
                      <dd className="font-display text-[32px] lg:text-[40px] text-white tabular">
                        {s.value}
                        <span className="text-accent text-[0.5em] font-medium ml-1">
                          {s.suffix}
                        </span>
                      </dd>
                      <dt className="mt-1 text-[11px] tracking-[0.16em] uppercase text-white/55">
                        {s.label}
                      </dt>
                    </div>
                  ))}
                </dl>
              </div>
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
