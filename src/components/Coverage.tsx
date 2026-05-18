import { coverage } from "@/lib/site";

// City pins positioned in percentage coordinates over the Malaysia SVG asset
// at /public/malaysia.svg (viewBox 1000 × 560). Swap the asset there if you
// want a different basemap — the pin overlay positions stay relative.
const pins = [
  { region: "Johor", x: 33.8, y: 84, main: true },
  { region: "Klang Valley", x: 24.5, y: 58 },
  { region: "Penang", x: 22, y: 32 },
  { region: "East Coast", x: 42, y: 42 },
  { region: "Singapore", x: 31.8, y: 90, below: true },
  { region: "Borneo", x: 70, y: 53 },
];

export default function Coverage() {
  return (
    <section className="relative bg-paper py-20 lg:py-28 overflow-hidden">
      <div className="relative mx-auto max-w-[1440px] px-6 lg:px-10">
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

          {/* Right — Malaysia map asset with pin overlay */}
          <div className="lg:col-span-8 relative">
            <div className="relative w-full" style={{ aspectRatio: "1000 / 560" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/malaysia.svg"
                alt="Malaysia coverage map"
                className="absolute inset-0 w-full h-full text-ink/25"
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
      className="absolute"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        transform: "translate(-50%, -50%)",
      }}
    >
      <div className="relative flex flex-col items-center">
        {main && (
          <span className="absolute inset-0 m-auto h-12 w-12 rounded-full bg-accent/25 blur-md" />
        )}
        <span className="relative h-2.5 w-2.5 rounded-full bg-accent" />
        {main && (
          <span className="absolute h-5 w-5 rounded-full border border-accent/55" />
        )}
        <span
          className={`absolute text-[11px] tracking-[0.04em] font-medium text-ink/75 whitespace-nowrap ${
            below ? "top-full mt-2" : "left-full ml-2 top-1/2 -translate-y-1/2"
          }`}
        >
          {region}
        </span>
      </div>
    </div>
  );
}
