import Reveal from "@/components/Reveal";
import { benefits } from "@/lib/site";

export default function WhyUs() {
  return (
    <section className="bg-paper py-24 lg:py-32">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <Reveal className="lg:col-span-5 lg:sticky lg:top-28">
            <span className="section-label">Benefits</span>
            <h2 className="mt-5 font-display text-[34px] sm:text-[44px] lg:text-[56px] leading-[1.02] tracking-[-0.02em] text-ink">
              Why people
              <br />
              <span className="font-display-italic text-[color:var(--color-ink-soft)]">
                choose us?
              </span>
            </h2>
            <p className="mt-6 max-w-md text-[14px] leading-[1.7] text-mute">
              Four reasons our clients come back and recommend us. Read them in
              order, and the rest of the site starts to make sense.
            </p>
          </Reveal>

          <Reveal className="lg:col-span-7" delay={120}>
            <ul className="border-t border-[color:var(--color-line)]">
              {benefits.map((b) => (
                <li
                  key={b.num}
                  className="group grid grid-cols-[auto_auto_1fr] gap-5 lg:gap-8 py-7 lg:py-9 border-b border-[color:var(--color-line)] items-start"
                >
                  <span className="font-display text-[18px] tabular text-[color:var(--color-accent)] pt-1">
                    {b.num}
                  </span>
                  <span className="pt-1 text-[color:var(--color-ink-soft)] group-hover:text-[color:var(--color-accent)] transition-colors">
                    <Icon name={b.icon} />
                  </span>
                  <div>
                    <h3 className="font-display text-[22px] lg:text-[26px] tracking-[-0.01em] text-ink">
                      {b.title}
                    </h3>
                    <p className="mt-2.5 text-[14px] leading-[1.65] text-mute max-w-[48ch]">
                      {b.body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Icon({ name }: { name: "turnkey" | "factory" | "compass" | "map" }) {
  const common = {
    width: 26,
    height: 26,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.4,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };
  switch (name) {
    case "turnkey":
      return (
        <svg {...common}>
          <path d="M3 11l9-7 9 7" />
          <path d="M5 10v10h14V10" />
          <path d="M10 20v-5h4v5" />
        </svg>
      );
    case "factory":
      return (
        <svg {...common}>
          <path d="M3 20V9l5 3V9l5 3V9l5 3v8z" />
          <path d="M7 20v-3M11 20v-3M15 20v-3M19 20v-3" />
        </svg>
      );
    case "compass":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M8.5 15.5L11 11l4.5-2.5L13 13z" />
        </svg>
      );
    case "map":
      return (
        <svg {...common}>
          <path d="M9 3L3 5v16l6-2 6 2 6-2V3l-6 2z" />
          <path d="M9 3v16M15 5v16" />
        </svg>
      );
  }
}
