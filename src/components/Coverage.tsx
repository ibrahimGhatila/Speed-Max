import { coverage } from "@/lib/site";

// Stylised, abstracted outline of Peninsular Malaysia + Borneo.
// Not a topographically accurate map — a clean schematic that reads
// "national coverage" without distracting from the type.

export default function Coverage() {
  return (
    <section className="relative bg-ink-deep py-24 lg:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-30 pointer-events-none" />
      <div className="absolute -left-32 top-1/3 h-[400px] w-[400px] rounded-full bg-accent/15 blur-[140px]" />

      <div className="relative mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left — content */}
          <div className="lg:col-span-5">
            <div className="eyebrow">06 — Coverage</div>
            <h2 className="mt-6 font-display text-[40px] sm:text-[52px] lg:text-[68px] text-white">
              Field engineering
              <br />
              <span className="text-white/55">across</span>{" "}
              <span className="text-white">Malaysia.</span>
            </h2>
            <p className="mt-6 text-[16px] text-white/70 leading-relaxed max-w-md">
              Headquartered in Johor Bahru with project teams across the
              peninsula, and on-request coverage for the East Coast,
              East Malaysia and cross-border Singapore engagements.
            </p>

            <ul className="mt-10">
              {coverage.map((r, i) => (
                <li
                  key={r.region}
                  className="flex items-baseline justify-between py-4 border-b border-white/10 first:border-t"
                >
                  <div className="flex items-baseline gap-4">
                    <span className="text-[11px] tabular text-white/40">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[16px] text-white font-medium">
                      {r.region}
                    </span>
                  </div>
                  <span className="text-[12px] text-white/55 tracking-wide uppercase">
                    {r.note}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — schematic map */}
          <div className="lg:col-span-7 relative">
            <svg
              viewBox="0 0 600 500"
              className="w-full h-auto"
              aria-hidden="true"
            >
              <defs>
                <radialGradient id="ping" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#e11d2a" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#e11d2a" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* Peninsular Malaysia — stylised outline */}
              <path
                d="M210 60
                   C 240 65, 265 90, 275 130
                   C 280 165, 268 200, 272 240
                   C 278 285, 305 320, 308 360
                   C 310 395, 295 425, 270 445
                   C 258 455, 245 458, 232 452
                   C 222 446, 218 432, 220 420
                   C 224 405, 230 392, 226 378
                   C 220 360, 200 348, 190 330
                   C 175 310, 175 285, 180 260
                   C 184 235, 195 215, 192 188
                   C 188 158, 178 130, 184 100
                   C 188 78, 198 62, 210 60 Z"
                fill="rgba(255,255,255,0.05)"
                stroke="rgba(255,255,255,0.18)"
                strokeWidth="1.2"
              />

              {/* East Malaysia — abstracted */}
              <path
                d="M380 200
                   C 420 195, 460 210, 495 230
                   C 525 248, 545 270, 555 295
                   C 560 312, 555 325, 540 330
                   C 510 335, 470 318, 440 305
                   C 415 295, 395 280, 380 260
                   C 370 245, 370 220, 380 200 Z"
                fill="rgba(255,255,255,0.04)"
                stroke="rgba(255,255,255,0.12)"
                strokeWidth="1.2"
              />

              {/* Dots — regions */}
              <Pin x={250} y={420} label="Johor" main />
              <Pin x={222} y={300} label="KL" />
              <Pin x={200} y={210} label="Penang" />
              <Pin x={260} y={170} label="East Coast" />
              <Pin x={445} y={260} label="Borneo" />
              <Pin x={268} y={455} label="Singapore" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

function Pin({
  x,
  y,
  label,
  main = false,
}: {
  x: number;
  y: number;
  label: string;
  main?: boolean;
}) {
  return (
    <g>
      {main && <circle cx={x} cy={y} r="24" fill="url(#ping)" />}
      <circle cx={x} cy={y} r={main ? 5 : 3.5} fill="#e11d2a" />
      <circle
        cx={x}
        cy={y}
        r={main ? 9 : 7}
        fill="none"
        stroke="#e11d2a"
        strokeOpacity={main ? 0.7 : 0.4}
        strokeWidth="1"
      />
      <text
        x={x + 12}
        y={y + 4}
        fill="rgba(255,255,255,0.85)"
        fontSize="11"
        fontFamily="var(--font-sans), system-ui, sans-serif"
        fontWeight="500"
        letterSpacing="0.04em"
      >
        {label}
      </text>
    </g>
  );
}
