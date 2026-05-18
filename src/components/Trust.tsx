import { partners } from "@/lib/site";

export default function Trust() {
  const list = [...partners, ...partners];
  return (
    <section className="bg-ink border-y border-white/8">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10 py-10 lg:py-12">
        <div className="flex items-center gap-8">
          <div className="hidden lg:block shrink-0 max-w-[200px]">
            <div className="eyebrow-mute">Vendors & partners</div>
            <div className="mt-2 text-[14px] text-white/70">
              Authorised across the brands you rely on.
            </div>
          </div>
          <div className="relative flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)]">
            <div className="marquee-track flex items-center gap-14 whitespace-nowrap">
              {list.map((p, i) => (
                <span
                  key={`${p}-${i}`}
                  className="text-[22px] lg:text-[26px] font-semibold text-white/35 hover:text-white transition-colors tracking-[-0.02em]"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
