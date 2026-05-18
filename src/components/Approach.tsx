import { approach } from "@/lib/site";

export default function Approach() {
  return (
    <section className="relative bg-ink py-20 lg:py-28">
      <div className="absolute inset-0 bg-dots opacity-30 pointer-events-none" />
      <div className="relative mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <div className="eyebrow">04 — Method</div>
            <h2 className="mt-4 font-display text-[32px] sm:text-[40px] lg:text-[56px] text-white">
              Three steps.{" "}
              <span className="text-white/55">No surprises.</span>
            </h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-9 text-[14px] leading-relaxed text-white/65">
            Every engagement follows the same disciplined sequence — so you
            know exactly what is being delivered, when, and at what cost,
            before the first cable is pulled.
          </div>
        </div>

        <div className="mt-12 lg:mt-16 grid md:grid-cols-3 gap-px bg-white/10 border border-white/10 overflow-hidden">
          {approach.map((a, i) => (
            <div
              key={a.number}
              className="bg-ink p-7 lg:p-9 min-h-[220px] flex flex-col justify-between relative"
            >
              <div className="flex items-baseline justify-between">
                <div className="font-display text-[44px] lg:text-[60px] tabular text-white leading-none">
                  {a.number}
                </div>
                <span className="text-[10px] tracking-[0.18em] uppercase text-white/45">
                  Phase {i + 1}
                </span>
              </div>
              <div className="mt-6">
                <h3 className="font-display text-[20px] lg:text-[22px] text-white tracking-[-0.02em]">
                  {a.title}
                </h3>
                <p className="mt-2 text-[13px] text-white/65 leading-relaxed">
                  {a.body}
                </p>
              </div>
              {i < approach.length - 1 && (
                <span className="hidden md:block absolute top-1/2 -right-1.5 w-3.5 h-3.5 bg-accent border-[3px] border-ink" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
