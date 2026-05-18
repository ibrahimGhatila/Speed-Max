import { approach } from "@/lib/site";

export default function Approach() {
  return (
    <section className="relative bg-white py-20 lg:py-28">
      <div className="relative mx-auto max-w-[1440px] px-6 lg:px-10">
        <div>
          <div className="text-[11px] tracking-[0.18em] uppercase font-medium text-accent">
            Method
          </div>
          <h2 className="mt-4 font-display text-[32px] sm:text-[40px] lg:text-[56px] text-ink">
            Three steps.{" "}
            <span className="text-mute">No surprises.</span>
          </h2>
        </div>

        <div className="mt-12 lg:mt-16 grid md:grid-cols-3 gap-px bg-line border border-line overflow-hidden">
          {approach.map((a, i) => (
            <div
              key={a.number}
              className="bg-white p-7 lg:p-9 min-h-[220px] flex flex-col justify-between relative"
            >
              <div className="flex items-baseline justify-between">
                <div className="font-display text-[44px] lg:text-[60px] tabular text-ink leading-none">
                  {a.number}
                </div>
                <span className="text-[10px] tracking-[0.18em] uppercase text-mute">
                  Phase {i + 1}
                </span>
              </div>
              <div className="mt-6">
                <h3 className="font-display text-[20px] lg:text-[22px] text-ink tracking-[-0.02em]">
                  {a.title}
                </h3>
                <p className="mt-2 text-[13px] text-ink/65 leading-relaxed">
                  {a.body}
                </p>
              </div>
              {i < approach.length - 1 && (
                <span className="hidden md:block absolute top-1/2 -right-1.5 w-3.5 h-3.5 bg-accent border-[3px] border-white" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
