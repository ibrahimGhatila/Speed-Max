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

        <div className="mt-12 lg:mt-16 grid md:grid-cols-3 gap-4 lg:gap-5">
          {approach.map((a, i) => (
            <Reveal key={a.number} delay={120 + i * 120} className="h-full">
              <article className="group relative h-full min-h-[300px] lg:min-h-[340px] overflow-hidden border border-line bg-white transition-all duration-500 hover:border-ink/25 hover:shadow-[0_24px_60px_-30px_rgba(10,20,40,0.18)] hover:-translate-y-1 flex flex-col">
                {/* Watermark number */}
                <span
                  aria-hidden="true"
                  className="absolute right-4 lg:right-6 -bottom-6 lg:-bottom-8 font-display tabular leading-[0.82] text-[200px] lg:text-[240px] text-ink/[0.06] group-hover:text-ink/[0.13] transition-colors duration-700 select-none pointer-events-none"
                >
                  {a.number}
                </span>

                {/* Top phase label */}
                <div className="relative p-8 lg:p-10 flex items-baseline justify-between">
                  <span className="text-[10px] tracking-[0.18em] uppercase font-medium text-mute">
                    Phase {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="h-1.5 w-1.5 bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Bottom content, pushed down */}
                <div className="relative mt-auto px-8 lg:px-10 pb-8 lg:pb-10">
                  <div className="h-px w-8 bg-accent transition-all duration-500 group-hover:w-16" />
                  <h3 className="mt-5 font-display text-[22px] lg:text-[26px] text-ink tracking-[-0.025em]">
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
