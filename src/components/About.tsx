import Image from "next/image";
import Reveal from "./Reveal";
import { img } from "@/lib/images";
import { site, stats } from "@/lib/site";

export default function About() {
  return (
    <section
      id="about"
      className="relative bg-white lg:h-[calc(100svh-5rem)] flex items-center py-14 lg:py-16"
    >
      <div className="mx-auto max-w-[1440px] w-full px-6 lg:px-10 grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        <Reveal className="lg:col-span-5">
          <div className="relative aspect-[4/3] lg:aspect-[5/4] overflow-hidden border border-line">
            <Image
              src={img("team", 1200, 80)}
              alt="Speedmax engineering team"
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

        <div className="lg:col-span-7">
          <Reveal delay={120}>
            <div className="text-[11px] tracking-[0.18em] uppercase font-medium text-accent">
              About
            </div>
            <h2 className="mt-3 font-display text-[30px] sm:text-[36px] lg:text-[44px] leading-[1.05] text-ink">
              A fourteen-year record{" "}
              <span className="text-mute">of quiet work.</span>
            </h2>
            <p className="mt-5 text-[15px] lg:text-[17px] leading-[1.55] text-ink/85 max-w-xl">
              Speedmax Solutions Sdn Bhd was founded in {site.foundedYear} in
              Johor Bahru as a specialist contractor for ICT and
              extra-low-voltage construction — grown, deliberately, into a
              one-stop technology partner for Malaysian businesses.
            </p>
            <p className="mt-3 text-[13px] lg:text-[14px] text-ink/65 leading-relaxed max-w-xl">
              We design, install and support every system ourselves: one
              phone number when something needs attention, one company that
              owns the outcome. Measured on what doesn&apos;t happen — no
              downtime, no callbacks, no surprises on invoice day.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-7 border-t border-line">
              <dl className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-line">
                {stats.map((s, i) => (
                  <div
                    key={s.label}
                    className={`py-4 ${i === 0 ? "" : "lg:pl-5"}`}
                  >
                    <dd className="font-display text-[24px] lg:text-[30px] text-ink tabular leading-none">
                      {s.value}
                      <span className="text-accent text-[0.55em] font-medium ml-1">
                        {s.suffix}
                      </span>
                    </dd>
                    <dt className="mt-1.5 text-[10px] tracking-[0.18em] uppercase text-mute">
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
  );
}
