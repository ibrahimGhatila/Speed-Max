import { approach } from "@/lib/site";
import Reveal from "./Reveal";

export default function Approach() {
  return (
    <section className="relative bg-white py-20 lg:py-28">
      <div className="relative mx-auto max-w-[1440px] px-6 lg:px-10">
        <Reveal>
          <div className="text-[11px] tracking-[0.18em] uppercase font-medium text-accent">
            Method
          </div>
          <h2 className="mt-4 font-display text-[32px] sm:text-[40px] lg:text-[56px] text-ink">
            Three steps.{" "}
            <span className="text-mute">No surprises.</span>
          </h2>
        </Reveal>

        <div className="mt-12 lg:mt-16 grid md:grid-cols-3 gap-px bg-line border border-line overflow-hidden">
          {approach.map((a, i) => (
            <Reveal key={a.number} delay={120 + i * 120} className="h-full">
              <article className="group relative h-full min-h-[300px] lg:min-h-[340px] bg-white overflow-hidden flex flex-col cursor-default transition-colors duration-500 hover:bg-paper-warm/40">
                {/* Top accent line — slides in on hover */}
                <span className="absolute top-0 left-0 h-[2px] w-0 bg-accent group-hover:w-full transition-[width] duration-700 ease-[cubic-bezier(0.22,0.61,0.36,1)]" />

                {/* Watermark number — thick, very faint, lightly grows on hover */}
                <span
                  aria-hidden="true"
                  className="absolute right-4 lg:right-6 -bottom-6 lg:-bottom-8 tabular leading-[0.82] font-extrabold text-[210px] lg:text-[260px] tracking-[-0.06em] text-ink/[0.035] group-hover:text-ink/[0.08] group-hover:scale-[1.04] origin-bottom-right transition-all duration-700 ease-out select-none pointer-events-none"
                >
                  {a.number}
                </span>

                {/* Top row: phase label + arrow */}
                <div className="relative p-8 lg:p-10 flex items-start justify-between">
                  <span className="text-[10px] tracking-[0.18em] uppercase font-medium text-mute">
                    Phase {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="h-8 w-8 flex items-center justify-center border border-line bg-white/0 text-ink/40 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:border-accent group-hover:text-accent transition-all duration-500">
                    <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                      <path
                        d="M3 11L11 3M11 3H4M11 3V10"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>

                {/* Bottom content, anchored down */}
                <div className="relative mt-auto px-8 lg:px-10 pb-8 lg:pb-10">
                  <div className="h-px w-8 bg-accent transition-all duration-500 group-hover:w-20" />
                  <h3 className="mt-5 font-display text-[22px] lg:text-[26px] text-ink tracking-[-0.025em] group-hover:translate-x-1 transition-transform duration-500">
                    {a.title}
                  </h3>
                  <p className="mt-3 text-[13px] lg:text-[14px] text-ink/65 leading-[1.6] max-w-sm">
                    {a.body}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
