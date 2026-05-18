import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { services } from "@/lib/site";
import { img, type ImageKey } from "@/lib/images";
import { serviceIcons } from "@/components/ServiceIcons";
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
      <section className="relative bg-ink-deep pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-30" />
        <div className="absolute -right-32 top-0 h-[420px] w-[420px] rounded-full bg-accent/20 blur-[140px]" />
        <div className="relative mx-auto max-w-[1440px] px-6 lg:px-10">
          <div className="flex items-center justify-between text-[12px] tracking-[0.16em] uppercase text-white/55">
            <span>02 — Capabilities</span>
            <span className="hidden sm:block">Six disciplines</span>
          </div>
          <div className="h-px bg-white/10 mt-5" />

          <div className="mt-14 lg:mt-20 grid lg:grid-cols-12 gap-10">
            <h1 className="lg:col-span-10 font-display text-[44px] sm:text-[64px] lg:text-[104px] text-white">
              Everything we
              <br />
              <span className="text-white/55">design, install</span>
              <br />
              <span className="text-white">and maintain.</span>
            </h1>
          </div>

          <div className="mt-14 lg:mt-20 grid lg:grid-cols-12 gap-10">
            <p className="lg:col-span-5 text-[18px] lg:text-[20px] leading-[1.5] text-white/80">
              One contractor for the cabling, networks and systems that
              underpin a working business. No hand-offs. No finger-pointing.
              One accountable team.
            </p>
            <div className="lg:col-span-4 lg:col-start-9 lg:pl-8 lg:border-l border-white/10 text-[14px] text-white/65 leading-relaxed">
              Every engagement begins with a free site survey and ends with a
              certified, documented handover. All six disciplines are
              delivered in-house.
            </div>
          </div>
        </div>
      </section>

      <Trust />

      {/* Service detail sections */}
      <section className="bg-ink py-20 lg:py-32">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10 space-y-28 lg:space-y-44">
          {services.map((svc, i) => {
            const reverse = i % 2 === 1;
            const Icon = serviceIcons[svc.slug] ?? serviceIcons["structured-cabling"];
            return (
              <article
                id={svc.slug}
                key={svc.slug}
                className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start scroll-mt-28"
              >
                <div className={`lg:col-span-6 ${reverse ? "lg:order-2" : ""}`}>
                  <div className="relative aspect-[5/6] rounded-2xl overflow-hidden border border-white/8">
                    <Image
                      src={img(svc.image as ImageKey, 1400, 80)}
                      alt={svc.title}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover duotone-cool"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-deep/60 via-transparent to-transparent" />
                    <div className="absolute top-6 left-6 right-6 flex items-start justify-between">
                      <div className="h-12 w-12 rounded-full bg-white/10 backdrop-blur border border-white/15 flex items-center justify-center text-white">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="text-[11px] tabular tracking-[0.18em] uppercase text-white/65 mt-3.5">
                        /{svc.number}
                      </div>
                    </div>
                  </div>
                </div>

                <div className={`lg:col-span-6 ${reverse ? "lg:order-1" : ""} lg:pt-4`}>
                  <div className="eyebrow">
                    Capability · {svc.number}
                  </div>
                  <h2 className="mt-6 font-display text-[40px] sm:text-[56px] lg:text-[72px] text-white">
                    {svc.title}
                  </h2>
                  <p className="mt-6 text-[18px] lg:text-[20px] text-white/85 leading-[1.55] max-w-lg">
                    {svc.description}
                  </p>

                  <div className="mt-12 max-w-lg">
                    <div className="eyebrow-mute">What&apos;s included</div>
                    <ul className="mt-5">
                      {svc.specs.map((s, idx) => (
                        <li
                          key={s}
                          className="flex items-baseline gap-5 py-4 border-b border-white/10 first:border-t text-[15px] text-white"
                        >
                          <span className="text-[11px] tabular text-white/40 w-6 shrink-0">
                            {String(idx + 1).padStart(2, "0")}
                          </span>
                          <span>{s}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href="/contact"
                    className="mt-12 inline-flex items-center gap-3 text-[14px] font-semibold text-white link-ul"
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
