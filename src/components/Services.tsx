import Link from "next/link";
import Image from "next/image";
import { services } from "@/lib/site";
import { img } from "@/lib/images";
import type { ImageKey } from "@/lib/images";

export default function Services() {
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-20 lg:py-32">
        <div className="grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8">
            <div className="eyebrow">03 / Capabilities</div>
            <h2 className="mt-6 font-display text-[36px] sm:text-[52px] lg:text-[72px] max-w-3xl">
              Six disciplines.
              <br />
              <span className="text-mute">One contractor.</span>
            </h2>
          </div>
          <div className="lg:col-span-4 text-[15px] text-mute leading-relaxed">
            We design, install and maintain the systems your business runs on
            — from the structured cabling in your walls to the accounting
            software on your laptops.
          </div>
        </div>

        <div className="mt-16 lg:mt-24 border-t border-line">
          {services.map((svc) => (
            <Link
              key={svc.slug}
              href={`/products#${svc.slug}`}
              className="group block border-b border-line py-6 lg:py-8 transition-colors hover:bg-paper-warm/40"
            >
              <div className="grid grid-cols-12 items-center gap-4 lg:gap-8">
                <div className="col-span-2 lg:col-span-1 text-[12px] text-mute tabular-nums tracking-wider">
                  / {svc.number}
                </div>
                <div className="col-span-10 lg:col-span-4 font-display text-[22px] lg:text-[32px] tracking-[-0.03em]">
                  {svc.title}
                </div>
                <div className="hidden lg:block lg:col-span-5 text-[15px] text-ink/70">
                  {svc.short}
                </div>
                <div className="col-span-12 lg:col-span-2 lg:hidden text-[14px] text-ink/70 mt-1">
                  {svc.short}
                </div>
                <div className="hidden lg:flex lg:col-span-2 justify-end">
                  <div className="relative h-14 w-20 overflow-hidden rounded-[2px] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                    <Image
                      src={img(svc.image as ImageKey, 400, 70)}
                      alt=""
                      fill
                      sizes="80px"
                      className="object-cover duotone"
                    />
                  </div>
                </div>
                <div className="hidden lg:block lg:col-span-1 text-right">
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
      width="18"
      height="14"
      viewBox="0 0 18 14"
      fill="none"
      aria-hidden="true"
      className="inline-block text-ink/40 transition-all group-hover:text-accent group-hover:translate-x-1"
    >
      <path d="M1 7h16M11 1l6 6-6 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="square" />
    </svg>
  );
}
