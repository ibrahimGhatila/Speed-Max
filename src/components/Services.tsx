import Link from "next/link";
import Image from "next/image";
import { services } from "@/lib/site";
import { img, type ImageKey } from "@/lib/images";
import { serviceIcons } from "./ServiceIcons";

export default function Services() {
  return (
    <section className="relative bg-ink py-24 lg:py-36">
      <div className="absolute inset-0 bg-dots opacity-40 pointer-events-none" />
      <div className="relative mx-auto max-w-[1440px] px-6 lg:px-10">
        {/* Heading */}
        <div className="grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8">
            <div className="eyebrow">02 — Capabilities</div>
            <h2 className="mt-6 font-display text-[40px] sm:text-[56px] lg:text-[80px] text-white">
              Six disciplines.
              <br />
              <span className="text-white/55">One accountable</span>{" "}
              <span className="text-white">team.</span>
            </h2>
          </div>
          <div className="lg:col-span-4 text-[16px] leading-relaxed text-white/65 lg:pl-8 lg:border-l border-white/10 lg:pt-2">
            We design, install and maintain the systems your business runs
            on — from the cabling in your walls to the accounting software
            on your laptops.
          </div>
        </div>

        {/* Card grid */}
        <div className="mt-16 lg:mt-24 grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {services.map((svc) => {
            const Icon = serviceIcons[svc.slug] ?? serviceIcons["structured-cabling"];
            return (
              <Link
                key={svc.slug}
                href={`/products#${svc.slug}`}
                className="card-hover group relative overflow-hidden rounded-2xl bg-ink-soft/60 border border-white/8 hover:border-white/20 transition-colors"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={img(svc.image as ImageKey, 900, 75)}
                    alt={svc.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover duotone-cool card-image"
                  />
                  <div className="absolute inset-0 card-overlay" />
                  <div className="absolute top-5 left-5 right-5 flex items-start justify-between">
                    <div className="h-11 w-11 rounded-full bg-white/10 backdrop-blur border border-white/15 flex items-center justify-center text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="text-[11px] tabular tracking-[0.18em] uppercase text-white/65 mt-3">
                      /{svc.number}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 lg:p-7">
                  <h3 className="font-display text-[22px] lg:text-[24px] text-white tracking-[-0.03em]">
                    {svc.title}
                  </h3>
                  <p className="mt-2 text-[14px] text-white/65 leading-relaxed">
                    {svc.short}
                  </p>
                  <div className="mt-5 flex items-center gap-2 text-[13px] font-medium text-accent">
                    Read capability
                    <ArrowRight />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ArrowRight() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
      className="inline-block transition-transform group-hover:translate-x-1"
    >
      <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
