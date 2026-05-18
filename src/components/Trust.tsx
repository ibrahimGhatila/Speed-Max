import { partners } from "@/lib/site";
import Reveal from "./Reveal";

export default function Trust() {
  const list = [...partners, ...partners];
  return (
    <section className="bg-paper border-b border-line">
      <Reveal as="div" className="mx-auto max-w-[1440px] px-6 lg:px-10 py-8">
        <div className="flex items-center gap-8">
          <div className="hidden lg:block shrink-0 max-w-[200px]">
            <div className="text-[10px] tracking-[0.18em] uppercase font-medium text-mute">
              Vendors & partners
            </div>
            <div className="mt-1.5 text-[13px] text-ink/70 leading-snug">
              Authorised across the brands you rely on.
            </div>
          </div>
          <div className="relative flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)]">
            <div className="marquee-track flex items-center gap-12 whitespace-nowrap">
              {list.map((p, i) => (
                <span
                  key={`${p}-${i}`}
                  className="text-[18px] lg:text-[20px] font-semibold text-ink/35 hover:text-ink transition-colors tracking-[-0.02em]"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
