import { coverage } from "@/lib/site";

// Map asset lives at /public/malaysia-map.png — the halftone Malaysia image.
// Swap the file there or update MAP_SRC to point elsewhere.
const MAP_SRC = "/malaysia-map.png";

export default function Coverage() {
  return (
    <section className="relative bg-paper py-20 lg:py-28 overflow-hidden">
      <div className="relative mx-auto max-w-[1440px] px-6 lg:px-10">
        {/* Section header */}
        <div className="max-w-3xl mb-12 lg:mb-16">
          <div className="text-[11px] tracking-[0.18em] uppercase font-medium text-accent">
            Coverage
          </div>
          <h2 className="mt-4 font-display text-[32px] sm:text-[40px] lg:text-[52px] text-ink">
            Field engineering{" "}
            <span className="text-mute">across Malaysia.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left — city list */}
          <div className="lg:col-span-4">
            <ul>
              {coverage.map((r, i) => (
                <li
                  key={r.region}
                  className="flex items-baseline gap-5 py-4 border-b border-line first:border-t"
                >
                  <span className="text-[10px] tabular text-mute tracking-wider w-6">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-[20px] lg:text-[22px] text-ink tracking-[-0.02em]">
                    {r.region}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — Malaysia map image, no overlay */}
          <div className="lg:col-span-8 relative">
            <div className="relative w-full" style={{ aspectRatio: "1 / 1" }}>
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
