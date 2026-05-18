import { coverage } from "@/lib/site";
import Reveal from "./Reveal";

const MAP_SRC = "/malaysia-map.jpg";

export default function Coverage() {
  return (
    <section className="relative bg-white">
      <div className="relative mx-auto max-w-[1440px] px-6 lg:px-10 pt-4 pb-10 lg:pt-6 lg:pb-14">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left — header + city list */}
          <div className="lg:col-span-5">
            <Reveal>
              <div className="text-[11px] tracking-[0.18em] uppercase font-medium text-accent">
                Coverage
              </div>
              <h2 className="mt-3 font-display text-[28px] sm:text-[36px] lg:text-[44px] text-ink">
                Field engineering{" "}
                <span className="text-mute">across Malaysia.</span>
              </h2>
            </Reveal>

            <ul className="mt-8 max-w-md">
              {coverage.map((r, i) => (
                <Reveal
                  key={r.region}
                  as="li"
                  delay={150 + i * 100}
                  className="flex items-baseline gap-6 py-4 border-b border-line first:border-t"
                >
                  <span className="text-[11px] tabular text-mute tracking-wider w-6">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-[24px] lg:text-[28px] text-ink tracking-[-0.025em]">
                    {r.region}
                  </span>
                </Reveal>
              ))}
            </ul>
          </div>

          {/* Right — Malaysia map */}
          <div className="lg:col-span-7 flex justify-center lg:justify-start lg:pl-[150px]">
            <Reveal
              delay={200}
              className="relative w-full max-w-[480px]"
            >
              <div className="relative w-full" style={{ aspectRatio: "1 / 1" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={MAP_SRC}
                  alt="Malaysia coverage map"
                  className="absolute inset-0 w-full h-full object-contain"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
