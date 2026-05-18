import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { services } from "@/lib/site";
import { img, type ImageKey } from "@/lib/images";
import CtaBanner from "@/components/CtaBanner";
import Trust from "@/components/Trust";

export const metadata: Metadata = {
  title: "Capabilities",
  description:
    "Six disciplines under one contractor — structured cabling, system integration, IP telephony, security, collaboration and AutoCount.",
};

export default function ProductsPage() {
  return (
    <>
      {/* Page hero */}
      <section className="relative bg-ink-deep -mt-20 pt-32 pb-16 lg:pt-44 lg:pb-24 overflow-hidden min-h-[80svh] flex flex-col justify-center">
        <div className="absolute inset-0 bg-dots opacity-30" />
        <div className="absolute -right-32 top-0 h-[380px] w-[380px] rounded-full bg-accent/20 blur-[140px]" />
        <div className="relative mx-auto max-w-[1440px] w-full px-6 lg:px-10">
          <div className="flex items-center justify-between text-[11px] tracking-[0.16em] uppercase text-white/55">
            <span>02 — Capabilities</span>
            <span className="hidden sm:block">Six disciplines</span>
          </div>
          <div className="h-px bg-white/10 mt-4" />

          <div className="mt-10 lg:mt-14 grid lg:grid-cols-12 gap-10">
            <h1 className="lg:col-span-10 font-display text-[34px] sm:text-[44px] lg:text-[64px] xl:text-[76px] text-white">
              Everything we{" "}
              <span className="text-white/55">design, install and maintain.</span>
            </h1>
          </div>

          <div className="mt-10 lg:mt-14 grid lg:grid-cols-12 gap-10">
            <p className="lg:col-span-5 text-[15px] lg:text-[16px] leading-[1.55] text-white/80">
              One contractor for the cabling, networks and systems that
              underpin a working business. No hand-offs. No finger-pointing.
              One accountable team.
            </p>
            <div className="lg:col-span-4 lg:col-start-9 lg:pl-7 lg:border-l border-white/10 text-[13px] text-white/65 leading-relaxed">
              Every engagement begins with a free site survey and ends with a
              certified, documented handover. All six disciplines are
              delivered in-house.
            </div>
          </div>
        </div>
      </section>

      <Trust />

      {/* Service detail sections */}
      <section className="bg-paper py-16 lg:py-24">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10 space-y-20 lg:space-y-28">
          {services.map((svc, i) => {
            const reverse = i % 2 === 1;
            return (
              <article
                id={svc.slug}
                key={svc.slug}
                className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start scroll-mt-28"
              >
                <div className={`lg:col-span-6 ${reverse ? "lg:order-2" : ""}`}>
                  <div className="relative aspect-[5/6] overflow-hidden border border-line">
                    <Image
                      src={img(svc.image as ImageKey, 1400, 80)}
                      alt={svc.title}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover duotone-cool"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-deep/55 via-transparent to-transparent" />
                  </div>
                </div>

                <div className={`lg:col-span-6 ${reverse ? "lg:order-1" : ""} lg:pt-2`}>
                  <div className="text-[11px] tracking-[0.18em] uppercase font-medium text-accent">
                    Capability · {svc.number}
                  </div>
                  <h2 className="mt-4 font-display text-[30px] sm:text-[36px] lg:text-[48px] text-ink">
                    {svc.title}
                  </h2>
                  <p className="mt-5 text-[16px] lg:text-[17px] text-ink/75 leading-[1.55] max-w-lg">
                    {svc.description}
                  </p>

                  <div className="mt-9 max-w-lg">
                    <div className="text-[10px] tracking-[0.18em] uppercase font-medium text-mute">
                      What&apos;s included
                    </div>
                    <ul className="mt-4">
                      {svc.specs.map((s, idx) => (
                        <li
                          key={s}
                          className="flex items-baseline gap-5 py-3 border-b border-line first:border-t text-[14px] text-ink"
                        >
                          <span className="text-[10px] tabular w-6 shrink-0 text-mute">
                            {String(idx + 1).padStart(2, "0")}
                          </span>
                          <span>{s}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href="/contact"
                    className="mt-9 inline-flex items-center gap-2.5 text-[13px] font-semibold text-ink link-ul"
                  >
                    Brief us on a {svc.title.toLowerCase()} project
                    <Arrow />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}

function Arrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
