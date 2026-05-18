import type { Metadata } from "next";
import Image from "next/image";
import Approach from "@/components/Approach";
import Quote from "@/components/Quote";
import Partners from "@/components/Partners";
import CtaBanner from "@/components/CtaBanner";
import { img } from "@/lib/images";
import { site, stats } from "@/lib/site";

export const metadata: Metadata = {
  title: "Studio",
  description:
    "Speedmax Solutions Sdn Bhd is a Johor-based ICT and extra-low-voltage contractor — founded 2010, serving businesses across Malaysia.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-paper">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 pt-20 lg:pt-32 pb-16 lg:pb-24">
          <div className="flex items-center justify-between text-[12px] tracking-[0.14em] uppercase text-mute">
            <span className="tabular-nums">03 / Studio</span>
            <span className="tabular-nums hidden sm:block">
              Est. {site.foundedYear}
            </span>
          </div>
          <div className="rule mt-5" />

          <div className="mt-12 lg:mt-20 grid lg:grid-cols-12 gap-10">
            <h1 className="lg:col-span-10 font-display text-[44px] sm:text-[64px] lg:text-[104px]">
              A fourteen-year
              <br />
              <span className="text-mute">record of</span>{" "}
              <span className="relative inline-block">
                quiet work.
                <span className="absolute -right-3 sm:-right-5 top-[0.05em] h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-accent" />
              </span>
            </h1>
          </div>

          <div className="mt-16 lg:mt-20 grid lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-5">
              <div className="relative aspect-[5/6] overflow-hidden">
                <Image
                  src={img("team", 1400, 80)}
                  alt="Speedmax team"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover duotone"
                />
              </div>
            </div>

            <div className="lg:col-span-7 lg:pl-10 lg:border-l border-line">
              <p className="text-[18px] lg:text-[22px] leading-[1.55] text-ink/85">
                Speedmax Solutions was founded in {site.foundedYear} in Johor
                Bahru as a specialist contractor for ICT and extra-low-voltage
                construction. We started as a structured-cabling team, and
                grew — deliberately — into a one-stop technology partner for
                Malaysian businesses.
              </p>
              <p className="mt-6 text-[16px] text-ink/70 leading-relaxed">
                Today, our work spans cabling, networking, IP telephony,
                security and AutoCount accounting. We design, install and
                support every system ourselves, which means one phone number
                when something needs attention, and one company that owns the
                outcome.
              </p>
              <p className="mt-6 text-[16px] text-ink/70 leading-relaxed">
                We measure ourselves on what doesn&apos;t happen: no downtime,
                no callbacks, no surprises on invoice day.
              </p>

              <div className="mt-12 border-t border-line">
                <dl className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-line">
                  {stats.map((s) => (
                    <div key={s.label} className="py-6 px-0 lg:px-5 first:pl-0 last:pr-0">
                      <dt className="eyebrow">{s.label}</dt>
                      <dd className="mt-3 font-display text-[32px] lg:text-[40px] tabular-nums">
                        {s.value}
                        <span className="text-mute font-normal text-[0.5em] ml-1">
                          {s.suffix}
                        </span>
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Approach />
      <Quote />
      <Partners />
      <CtaBanner />
    </>
  );
}
