import { coverage } from "@/lib/site";

// Real Malaysia outline SVG from the public-domain `mapsicon` project on
// GitHub, served via jsDelivr CDN. The viewBox is 1000 × 1000 with the country
// drawn at true geographic proportions.
// Source: https://github.com/djaiss/mapsicon
const MAP_SRC =
  "https://cdn.jsdelivr.net/gh/djaiss/mapsicon@master/all/malaysia/vector.svg";

// Pin coordinates as percentages of the rendered map container.
const pins = [
  { region: "Johor", x: 34, y: 56, main: true },
  { region: "Klang Valley", x: 27, y: 47 },
  { region: "Penang", x: 24, y: 32 },
  { region: "East Coast", x: 36, y: 42 },
  { region: "Singapore", x: 33.5, y: 60, below: true },
  { region: "Borneo", x: 64, y: 50 },
];

export default function Coverage() {
  return (
    <section className="relative bg-ink-deep py-20 lg:py-28 overflow-hidden">
      <div className="absolute -left-32 top-1/3 h-[400px] w-[400px] rounded-full bg-accent/10 blur-[140px]" />
      <div className="relative mx-auto max-w-[1440px] px-6 lg:px-10">
        {/* Section header */}
        <div className="max-w-3xl mb-12 lg:mb-16">
          <div className="eyebrow">Coverage</div>
          <h2 className="mt-4 font-display text-[32px] sm:text-[40px] lg:text-[52px] text-white">
            Field engineering{" "}
            <span className="text-white/55">across Malaysia.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left — city list */}
          <div className="lg:col-span-4">
            <ul>
              {coverage.map((r, i) => (
                <li
                  key={r.region}
                  className="flex items-baseline gap-5 py-4 border-b border-white/10 first:border-t"
                >
                  <span className="text-[10px] tabular text-white/40 tracking-wider w-6">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-[20px] lg:text-[22px] text-white tracking-[-0.02em]">
                    {r.region}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — Malaysia map + pin overlay */}
          <div className="lg:col-span-8 relative">
            <div className="relative w-full" style={{ aspectRatio: "1 / 1" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={MAP_SRC}
                alt="Malaysia coverage map"
                className="absolute inset-0 w-full h-full"
                style={{
                  filter: "brightness(0) invert(1) opacity(0.5)",
                }}
              />

              {pins.map((p) => (
                <Pin key={p.region} {...p} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Pin({
  region,
  x,
  y,
  main = false,
  below = false,
}: {
  region: string;
  x: number;
  y: number;
  main?: boolean;
  below?: boolean;
}) {
  return (
    <div
      className="absolute z-10"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        transform: "translate(-50%, -50%)",
      }}
    >
      <div className="relative flex flex-col items-center">
        {main && (
          <span className="absolute h-10 w-10 rounded-full bg-accent/30 blur-md" />
        )}
        {main && (
          <span className="absolute h-5 w-5 rounded-full border border-accent/60" />
        )}
        <span className="relative h-2.5 w-2.5 rounded-full bg-accent" />
        <span
          className={`absolute text-[11px] tracking-[0.04em] font-medium text-white/90 whitespace-nowrap ${
            below
              ? "top-full mt-2"
              : "left-full ml-2.5 top-1/2 -translate-y-1/2"
          }`}
        >
          {region}
        </span>
      </div>
    </div>
  );
}
