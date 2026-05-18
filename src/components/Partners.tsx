import { partners } from "@/lib/site";

export default function Partners() {
  const list = [...partners, ...partners];
  return (
    <section className="bg-paper border-y border-line">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-12 flex items-center gap-10">
        <div className="hidden sm:block shrink-0 eyebrow w-32">
          07 / Vendors
        </div>
        <div className="relative overflow-hidden flex-1 [mask-image:linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)]">
          <div className="marquee-track flex items-center gap-14 whitespace-nowrap will-change-transform">
            {list.map((p, i) => (
              <span
                key={`${p}-${i}`}
                className="text-[20px] lg:text-[24px] font-medium text-ink/40 hover:text-ink transition-colors tracking-[-0.02em]"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
