import Link from "next/link";
import Image from "next/image";
import { services } from "@/lib/site";
import { img, type ImageKey } from "@/lib/images";

export default function Services() {
  return (
    <section className="relative bg-ink py-20 lg:py-28">
      <div className="absolute inset-0 bg-dots opacity-40 pointer-events-none" />
      <div className="relative mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <div className="eyebrow">02 — Capabilities</div>
            <h2 className="mt-4 font-display text-[32px] sm:text-[40px] lg:text-[56px] text-white">
              Six disciplines.{" "}
              <span className="text-white/55">One accountable team.</span>
            </h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-9 text-[14px] leading-relaxed text-white/65">
            We design, install and maintain the systems your business runs on —
            from the cabling in your walls to the accounting on your laptops.
          </div>
        </div>

        <div className="mt-12 lg:mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {services.map((svc) => (
            <Link
              key={svc.slug}
              href={`/products#${svc.slug}`}
              className="card-hover group relative overflow-hidden bg-ink-soft/50 border border-white/8 hover:border-white/20 transition-colors"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={img(svc.image as ImageKey, 900, 75)}
                  alt={svc.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover duotone-cool card-image"
                />
                <div className="absolute inset-0 card-overlay" />
              </div>

              <div className="p-5 lg:p-6">
                <h3 className="font-display text-[18px] lg:text-[20px] text-white tracking-[-0.02em]">
                  {svc.title}
                </h3>
                <p className="mt-1.5 text-[13px] text-white/65 leading-relaxed">
                  {svc.short}
                </p>
                <div className="mt-4 flex items-center gap-2 text-[12px] font-medium text-accent">
                  Read capability
                  <ArrowRight />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function ArrowRight() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
      className="inline-block transition-transform group-hover:translate-x-1"
    >
      <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
