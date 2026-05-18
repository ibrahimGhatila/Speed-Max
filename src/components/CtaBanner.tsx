import Link from "next/link";
import { site } from "@/lib/site";

export default function CtaBanner() {
  return (
    <section className="relative bg-ink overflow-hidden border-t border-white/8">
      <div className="absolute -left-32 -top-32 h-[360px] w-[360px] rounded-full bg-accent/20 blur-[120px]" />
      <div className="absolute -right-32 -bottom-32 h-[360px] w-[360px] rounded-full bg-accent/10 blur-[140px]" />

      <div className="relative mx-auto max-w-[1440px] px-6 lg:px-10 py-20 lg:py-28">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-end">
          <div className="lg:col-span-8">
            <div className="eyebrow">09 — Engage</div>
            <h2 className="mt-4 font-display text-[34px] sm:text-[48px] lg:text-[64px] text-white leading-[1.04]">
              Let&apos;s build something{" "}
              <span className="relative inline-block text-white">
                that doesn&apos;t fail.
                <span className="absolute -right-3 top-[0.15em] h-2.5 w-2.5 rounded-full bg-accent" />
              </span>
            </h2>
          </div>

          <div className="lg:col-span-4 lg:pl-8 lg:border-l border-white/12">
            <p className="text-[14px] text-white/70 leading-relaxed">
              Tell us about your site, your team and your timeline. We come
              back with a fixed-price proposal within three working days.
            </p>

            <div className="mt-7 flex flex-col gap-3">
              <Link
                href="/contact"
                className="btn-lift group inline-flex items-center justify-center gap-2.5 bg-accent text-white px-6 py-3.5 text-[14px] font-semibold rounded-full hover:bg-accent-hot"
              >
                Request site survey
                <Arrow />
              </Link>
              <a
                href={`tel:${site.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 border border-white/20 bg-white/5 text-white px-6 py-3.5 text-[14px] font-semibold rounded-full tabular hover:bg-white/10 transition-colors"
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
    <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true" className="transition-transform group-hover:translate-x-1">
      <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
