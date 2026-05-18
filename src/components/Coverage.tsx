import Image from "next/image";
import { coverage } from "@/lib/site";

// Real Malaysia outline map asset from Wikimedia Commons (public domain).
// Source: https://commons.wikimedia.org/wiki/File:Malaysia_blank.png
// Rendered in white via CSS filters and overlaid with pin markers.
const MAP_SRC =
  "https://upload.wikimedia.org/wikipedia/commons/8/86/Malaysia_blank.png";

// Pin coordinates as percentages of the rendered map container.
// The Wikimedia blank map is roughly equirectangular over Malaysia's bounds,
// so these are approximate geographic placements — tune visually as needed.
const pins = [
  { region: "Johor", x: 26, y: 78, main: true },
  { region: "Klang Valley", x: 19.5, y: 60 },
  { region: "Penang", x: 17, y: 38 },
  { region: "East Coast", x: 30, y: 50 },
  { region: "Singapore", x: 26, y: 86, below: true },
  { region: "Borneo", x: 68, y: 60 },
];

export default function Coverage() {
  return (
    <section className="relative bg-ink-deep py-20 lg:py-28 overflow-hidden">
      <div className="absolute -left-32 top-1/3 h-[400px] w-[400px] rounded-full bg-accent/10 blur-[140px]" />
      <div className="relative mx-auto max-w-[1440px] px-6 lg:px-10">
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

          {/* Right — Malaysia map asset + pin overlay */}
          <div className="lg:col-span-8 relative">
            <div
              className="relative w-full"
              style={{ aspectRatio: "1000 / 560" }}
            >
              <Image
                src={MAP_SRC}
                alt="Malaysia coverage map"
                fill
                sizes="(min-width: 1024px) 60vw, 100vw"
                className="object-contain"
                style={{
                  filter:
                    "brightness(0) invert(1) opacity(0.35)",
                }}
                unoptimized
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
            below ? "top-full mt-2" : "left-full ml-2.5 top-1/2 -translate-y-1/2"
          }`}
        >
          {region}
        </span>
      </div>
    </div>
  );
}
