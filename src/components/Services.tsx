import Link from "next/link";
import Image from "next/image";
import { services } from "@/lib/site";
import { img, type ImageKey } from "@/lib/images";
import Reveal from "./Reveal";

export default function Services() {
  return (
    <section id="capabilities" className="relative bg-paper py-20 lg:py-28">
      <div className="relative mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 items-end">
          <Reveal className="lg:col-span-7">
            <div className="text-[11px] tracking-[0.18em] uppercase font-medium text-accent">
              Capabilities
            </div>
            <h2 className="mt-4 font-display text-[32px] sm:text-[40px] lg:text-[56px] text-ink">
              Six disciplines.{" "}
              <span className="text-mute">One accountable team.</span>
            </h2>
          </Reveal>
          <Reveal
            className="lg:col-span-4 lg:col-start-9 text-[14px] leading-relaxed text-ink/65"
            delay={120}
          >
            We design, install and maintain the systems your business runs on —
            from the cabling in your walls to the accounting on your laptops.
          </Reveal>
        </div>

        <div className="mt-12 lg:mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {services.map((svc, i) => (
            <Reveal key={svc.slug} delay={80 + i * 90}>
              <Link
                href="/#contact"
                className="group relative block aspect-[4/5] overflow-hidden border border-line"
              >
                <Image
                  src={img(svc.image as ImageKey, 900, 75)}
                  alt={svc.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover duotone-cool transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-deep/90 via-ink-deep/30 to-transparent" />

                <div className="absolute top-5 right-5 h-9 w-9 border border-white/30 flex items-center justify-center text-white/85 group-hover:bg-accent group-hover:border-accent group-hover:text-white transition-colors">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 14 14"
                    fill="none"
                    aria-hidden="true"
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  >
                    <path
                      d="M3 11L11 3M11 3H4M11 3V10"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <div className="absolute inset-x-6 bottom-6 text-white">
                  <div className="text-[10px] tracking-[0.18em] uppercase text-white/65 font-medium">
                    Capability
                  </div>
                  <h3 className="mt-2 font-display text-[22px] lg:text-[26px] tracking-[-0.02em]">
                    {svc.title}
                  </h3>
                  <p className="mt-2 text-[13px] text-white/85 leading-[1.55] max-w-[95%]">
                    {svc.short}
                  </p>
                  <div className="mt-4 h-px w-8 bg-accent group-hover:w-14 transition-all duration-500" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
