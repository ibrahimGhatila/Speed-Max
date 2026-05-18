import { approach } from "@/lib/site";

export default function Approach() {
  return (
    <section className="relative section-light py-24 lg:py-36">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <div className="text-[12px] tracking-[0.16em] uppercase font-medium text-accent">
              04 — Method
            </div>
            <h2 className="mt-6 font-display text-[40px] sm:text-[56px] lg:text-[80px] text-[var(--color-ink)]">
              Three steps.
              <br />
              <span className="text-[var(--color-mute)]">No surprises.</span>
            </h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-9 text-[16px] leading-relaxed text-[var(--color-mute)]">
            Every Speedmax engagement follows the same disciplined sequence —
            so you know exactly what is being delivered, when, and at what
            cost, before the first cable is pulled.
          </div>
        </div>

        <div className="mt-16 lg:mt-24 grid md:grid-cols-3 gap-px bg-[var(--color-line)] border border-[var(--color-line)] rounded-2xl overflow-hidden">
          {approach.map((a, i) => (
            <div
              key={a.number}
              className="bg-[var(--color-paper)] p-8 lg:p-10 min-h-[280px] flex flex-col justify-between relative"
            >
              <div className="flex items-baseline justify-between">
                <div className="font-display text-[60px] lg:text-[80px] tabular text-[var(--color-ink)] leading-none">
                  {a.number}
                </div>
                <span className="text-[11px] tracking-[0.18em] uppercase text-[var(--color-mute)]">
                  Phase {i + 1}
                </span>
              </div>
              <div className="mt-8">
                <h3 className="font-display text-[24px] lg:text-[28px] text-[var(--color-ink)] tracking-[-0.03em]">
                  {a.title}
                </h3>
                <p className="mt-3 text-[15px] text-[var(--color-mute)] leading-relaxed">
                  {a.body}
                </p>
              </div>
              {i < approach.length - 1 && (
                <span className="hidden md:block absolute top-1/2 -right-2.5 w-5 h-5 rounded-full bg-accent border-4 border-[var(--color-paper)]" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
