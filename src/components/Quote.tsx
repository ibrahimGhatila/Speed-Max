import { featured } from "@/lib/site";

export default function Quote() {
  return (
    <section className="bg-ink text-paper">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-24 lg:py-40">
        <div className="eyebrow text-paper/60">06 / In their words</div>

        <blockquote className="mt-12 lg:mt-16 font-display text-[28px] sm:text-[40px] lg:text-[56px] leading-[1.08] tracking-[-0.03em] max-w-5xl">
          <span className="text-accent">&ldquo;</span>
          {featured.quote}
          <span className="text-accent">&rdquo;</span>
        </blockquote>

        <div className="mt-12 flex items-center gap-6">
          <div className="h-px w-12 bg-paper/30" />
          <div className="text-[13px] tracking-wider uppercase text-paper/70">
            {featured.attribution}
          </div>
        </div>
      </div>
    </section>
  );
}
