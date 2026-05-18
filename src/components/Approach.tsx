import { approach } from "@/lib/site";

export default function Approach() {
  return (
    <section className="bg-paper-warm">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-20 lg:py-32">
        <div className="grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <div className="eyebrow">04 / Approach</div>
            <h2 className="mt-6 font-display text-[36px] sm:text-[52px] lg:text-[64px] max-w-3xl">
              Three steps,
              <br />
              <span className="text-mute">no surprises.</span>
            </h2>
          </div>
        </div>

        <div className="mt-16 lg:mt-20 grid md:grid-cols-3 gap-px bg-line">
          {approach.map((a) => (
            <div key={a.number} className="bg-paper-warm p-8 lg:p-10 min-h-[260px] flex flex-col">
              <div className="font-display text-[44px] tabular-nums text-accent">
                {a.number}
              </div>
              <h3 className="mt-6 text-[20px] font-medium">{a.title}</h3>
              <p className="mt-3 text-[15px] text-ink/70 leading-relaxed">
                {a.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
