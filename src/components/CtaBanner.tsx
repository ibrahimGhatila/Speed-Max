import Link from "next/link";
import { site } from "@/lib/site";

export default function CtaBanner() {
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-24 lg:py-32 border-t border-line">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            <div className="eyebrow">08 / Get in touch</div>
            <h2 className="mt-6 font-display text-[40px] sm:text-[60px] lg:text-[88px] leading-[0.98]">
              Let&apos;s build
              <br />
              <span className="text-mute">something</span>
              <span className="relative inline-block">
                {" "}reliable.
                <span className="absolute -right-3 top-[0.05em] h-2 w-2 rounded-full bg-accent" />
              </span>
            </h2>
          </div>

          <div className="lg:col-span-5 lg:pl-10 lg:border-l border-line flex flex-col justify-end">
            <p className="text-[16px] text-ink/75 leading-relaxed max-w-md">
              Tell us about your site, your timeline, your concerns.
              We&apos;ll come back with a fixed-price proposal within three
              working days.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-6">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 bg-ink text-paper px-6 py-4 text-[14px] font-medium rounded-[2px] hover:bg-accent transition-colors"
              >
                Start a project
                <Arrow />
              </Link>
              <a
                href={`tel:${site.phoneRaw}`}
                className="text-[14px] font-medium link-ul tabular-nums"
              >
                {site.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Arrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" className="transition-transform group-hover:translate-x-1">
      <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="square" />
    </svg>
  );
}
