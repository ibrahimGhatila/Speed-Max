import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Approach from "@/components/Approach";
import Quote from "@/components/Quote";
import Trust from "@/components/Trust";
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
      <PageHero
        eyebrow="About"
        marker={`Est. ${site.foundedYear}`}
        title={
          <>
            A fourteen-year record{" "}
            <span className="text-white/55">of</span>{" "}
            <span className="relative inline-block text-white">
              quiet work.
              <span className="absolute -right-2 top-[0.15em] h-2.5 w-2.5 bg-accent" />
            </span>
          </>
        }
        subtitle="Founded in 2010 in Johor Bahru as a specialist contractor for ICT and extra-low-voltage construction. Today, a one-stop technology partner for Malaysian businesses."
        image="heroAbout"
      />

      {/* Studio body */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10 grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <Reveal className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden border border-line">
              <Image
                src={img("team", 1400, 80)}
                alt="Speedmax team"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover duotone-cool"
              />
              <div className="absolute bottom-5 left-5 right-5 flex items-baseline justify-between text-[10px] tabular tracking-[0.18em] uppercase text-white/85">
                <span>Studio · JB</span>
                <span>Est. {site.foundedYear}</span>
              </div>
            </div>
          </Reveal>

          <div className="lg:col-span-7 lg:pt-2">
            <Reveal delay={120}>
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
              <p className="mt-4 text-[14px] text-ink/70 leading-relaxed max-w-xl">
                We measure ourselves on what doesn&apos;t happen: no downtime,
                no callbacks, no surprises on invoice day.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-10 border-t border-line">
                <dl className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-line">
                  {stats.map((s, i) => (
                    <div
                      key={s.label}
                      className={`py-5 ${i === 0 ? "" : "lg:pl-5"}`}
                    >
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
            </Reveal>
          </div>
        </div>
      </section>

      <Trust />
      <Approach />
      <Quote />
    </>
  );
}
