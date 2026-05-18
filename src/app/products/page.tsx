import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { services } from "@/lib/site";
import { img, type ImageKey } from "@/lib/images";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Capabilities",
  description:
    "Six disciplines under one contractor — structured cabling, system integration, IP telephony, security, collaboration and AutoCount.",
};

export default function ProductsPage() {
  return (
    <>
      <section className="bg-paper">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 pt-20 lg:pt-32 pb-12 lg:pb-20">
          <div className="flex items-center justify-between text-[12px] tracking-[0.14em] uppercase text-mute">
            <span className="tabular-nums">02 / Capabilities</span>
            <span className="tabular-nums hidden sm:block">6 disciplines</span>
          </div>
          <div className="rule mt-5" />

          <div className="mt-12 lg:mt-20 grid lg:grid-cols-12 gap-10">
            <h1 className="lg:col-span-9 font-display text-[44px] sm:text-[64px] lg:text-[96px]">
              Everything we
              <br />
              <span className="text-mute">design, install</span>
              <br />
              <span className="text-mute">and maintain.</span>
            </h1>
            <p className="lg:col-span-3 lg:pt-4 text-[16px] lg:text-[17px] leading-relaxed text-ink/75">
              One contractor for the cabling, networks and systems that
              underpin a working business. No hand-offs, no finger-pointing,
              one accountable team.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 pb-16 lg:pb-24 space-y-24 lg:space-y-40">
          {services.map((svc, i) => {
            const reverse = i % 2 === 1;
            return (
              <article
                id={svc.slug}
                key={svc.slug}
                className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start scroll-mt-24"
              >
                <div className={`lg:col-span-6 ${reverse ? "lg:order-2" : ""}`}>
                  <div className="relative aspect-[5/6] overflow-hidden">
                    <Image
                      src={img(svc.image as ImageKey, 1400, 80)}
                      alt={svc.title}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover duotone"
                    />
                  </div>
                  <div className="mt-4 flex items-center justify-between text-[12px] tracking-[0.14em] uppercase text-mute">
                    <span className="tabular-nums">Fig. {svc.number}</span>
                    <span>{svc.title}</span>
                  </div>
                </div>

                <div className={`lg:col-span-6 ${reverse ? "lg:order-1" : ""} lg:pt-8`}>
                  <div className="font-display text-[12px] tabular-nums tracking-[0.14em] uppercase text-mute">
                    / {svc.number}
                  </div>
                  <h2 className="mt-6 font-display text-[36px] sm:text-[52px] lg:text-[64px]">
                    {svc.title}
                  </h2>
                  <p className="mt-6 text-[18px] lg:text-[20px] text-ink/85 leading-[1.55] max-w-lg">
                    {svc.description}
                  </p>

                  <div className="mt-12 max-w-lg">
                    <div className="text-[12px] tracking-[0.14em] uppercase text-mute">
                      What&apos;s included
                    </div>
                    <ul className="mt-4 border-t border-line">
                      {svc.specs.map((s) => (
                        <li
                          key={s}
                          className="flex items-baseline gap-4 py-3 border-b border-line text-[15px]"
                        >
                          <span className="text-mute text-[11px] tabular-nums w-6">
                            ·
                          </span>
                          <span>{s}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href="/contact"
                    className="mt-10 inline-flex items-center gap-3 text-[14px] font-medium link-ul"
                  >
                    Brief us on a project
                    <span>→</span>
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
