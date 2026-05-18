import { coverage } from "@/lib/site";

const MAP_SRC = "/malaysia-map.jpg";

export default function Coverage() {
  return (
    <section className="relative bg-white">
      <div className="relative mx-auto max-w-[1440px] px-6 lg:px-10 py-10 lg:py-14">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left — header + city list */}
          <div className="lg:col-span-5">
            <div className="text-[11px] tracking-[0.18em] uppercase font-medium text-accent">
              Coverage
            </div>
            <h2 className="mt-3 font-display text-[28px] sm:text-[36px] lg:text-[44px] text-ink">
              Field engineering{" "}
              <span className="text-mute">across Malaysia.</span>
            </h2>

            <ul className="mt-8 max-w-sm">
              {coverage.map((r, i) => (
                <li
                  key={r.region}
                  className="flex items-baseline gap-5 py-3 border-b border-line first:border-t"
                >
                  <span className="text-[10px] tabular text-mute tracking-wider w-6">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-[17px] lg:text-[18px] text-ink tracking-[-0.02em]">
                    {r.region}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — Malaysia map */}
          <div className="lg:col-span-7 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[480px]" style={{ aspectRatio: "1 / 1" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={MAP_SRC}
                alt="Malaysia coverage map"
                className="absolute inset-0 w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
