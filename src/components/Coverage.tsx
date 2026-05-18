import { coverage } from "@/lib/site";

export default function Coverage() {
  return (
    <section className="relative bg-paper py-20 lg:py-28 overflow-hidden">
      <div className="relative mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <div className="text-[11px] tracking-[0.18em] uppercase font-medium text-accent">
              06 — Coverage
            </div>
            <h2 className="mt-4 font-display text-[32px] sm:text-[40px] lg:text-[52px] text-ink">
              Field engineering{" "}
              <span className="text-mute">across Malaysia.</span>
            </h2>
            <p className="mt-5 text-[15px] text-ink/65 leading-relaxed max-w-md">
              Headquartered in Johor Bahru with project teams across the
              peninsula, and on-request coverage for the East Coast,
              East Malaysia and cross-border Singapore engagements.
            </p>

            <ul className="mt-8">
              {coverage.map((r, i) => (
                <li
                  key={r.region}
                  className="flex items-baseline justify-between py-3 border-b border-line first:border-t"
                >
                  <div className="flex items-baseline gap-4">
                    <span className="text-[10px] tabular text-mute">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[14px] text-ink font-medium">
                      {r.region}
                    </span>
                  </div>
                  <span className="text-[11px] text-mute tracking-wide uppercase">
                    {r.note}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-7 relative">
            <svg
              viewBox="0 0 600 500"
              className="w-full h-auto"
              aria-hidden="true"
            >
              <defs>
                <radialGradient id="pingLight" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#e11d2a" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#e11d2a" stopOpacity="0" />
                </radialGradient>
              </defs>

              <path
                d="M210 60 C 240 65, 265 90, 275 130 C 280 165, 268 200, 272 240 C 278 285, 305 320, 308 360 C 310 395, 295 425, 270 445 C 258 455, 245 458, 232 452 C 222 446, 218 432, 220 420 C 224 405, 230 392, 226 378 C 220 360, 200 348, 190 330 C 175 310, 175 285, 180 260 C 184 235, 195 215, 192 188 C 188 158, 178 130, 184 100 C 188 78, 198 62, 210 60 Z"
                fill="rgba(10,20,40,0.04)"
                stroke="rgba(10,20,40,0.18)"
                strokeWidth="1.2"
              />
              <path
                d="M380 200 C 420 195, 460 210, 495 230 C 525 248, 545 270, 555 295 C 560 312, 555 325, 540 330 C 510 335, 470 318, 440 305 C 415 295, 395 280, 380 260 C 370 245, 370 220, 380 200 Z"
                fill="rgba(10,20,40,0.03)"
                stroke="rgba(10,20,40,0.12)"
                strokeWidth="1.2"
              />

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
      {main && <circle cx={x} cy={y} r="24" fill="url(#pingLight)" />}
      <circle cx={x} cy={y} r={main ? 4.5 : 3} fill="#e11d2a" />
      <circle
        cx={x}
        cy={y}
        r={main ? 8 : 6.5}
        fill="none"
        stroke="#e11d2a"
        strokeOpacity={main ? 0.65 : 0.35}
        strokeWidth="1"
      />
      <text
        x={x + 11}
        y={y + 3.5}
        fill="rgba(10,20,40,0.78)"
        fontSize="10.5"
        fontFamily="var(--font-sans), system-ui, sans-serif"
        fontWeight="500"
        letterSpacing="0.04em"
      >
        {label}
      </text>
    </g>
  );
}
