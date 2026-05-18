import Link from "next/link";
import { site } from "@/lib/site";

export default function CtaBanner() {
  return (
    <section className="relative bg-ink overflow-hidden border-t border-white/8">
      {/* Decorative glow */}
      <div className="absolute -left-32 -top-32 h-[400px] w-[400px] rounded-full bg-accent/20 blur-[120px]" />
      <div className="absolute -right-32 -bottom-32 h-[400px] w-[400px] rounded-full bg-accent/10 blur-[140px]" />

      <div className="relative mx-auto max-w-[1440px] px-6 lg:px-10 py-24 lg:py-40">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end">
          <div className="lg:col-span-8">
            <div className="eyebrow">09 — Engage</div>
            <h2 className="mt-6 font-display text-[40px] sm:text-[64px] lg:text-[96px] text-white leading-[0.98]">
              Let&apos;s build
              <br />
              <span className="text-white/55">something that</span>
              <br />
              <span className="relative inline-block text-white">
                doesn&apos;t fail.
                <span className="absolute -right-3 lg:-right-4 top-[0.05em] h-3 w-3 lg:h-4 lg:w-4 rounded-full bg-accent" />
              </span>
            </h2>
          </div>

          <div className="lg:col-span-4 lg:pl-8 lg:border-l border-white/12">
            <p className="text-[16px] text-white/70 leading-relaxed">
              Tell us about your site, your team and your timeline. We come
              back with a fixed-price proposal within three working days.
            </p>

            <div className="mt-10 flex flex-col gap-4">
              <Link
                href="/contact"
                className="btn-lift group inline-flex items-center justify-center gap-3 bg-accent text-white px-7 py-4 text-[15px] font-semibold rounded-full hover:bg-accent-hot"
              >
                Request site survey
                <Arrow />
              </Link>
              <a
                href={`tel:${site.phoneRaw}`}
                className="inline-flex items-center justify-center gap-3 border border-white/20 bg-white/5 text-white px-7 py-4 text-[15px] font-semibold rounded-full tabular hover:bg-white/10 transition-colors"
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
      <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
