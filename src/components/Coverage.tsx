import { coverage } from "@/lib/site";

export default function Coverage() {
  return (
    <section className="relative bg-paper py-20 lg:py-28 overflow-hidden">
      <div className="relative mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left — city list only */}
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

          {/* Right — Malaysia map */}
          <div className="lg:col-span-8 relative">
            <MalaysiaMap />
          </div>
        </div>
      </div>
    </section>
  );
}

function MalaysiaMap() {
  // Geographically-approximated outline of Malaysia. Coordinates tuned
  // visually rather than projected — clean and recognisable, not survey-grade.
  const peninsular =
    "M 175 50 " +
    "C 195 40, 230 38, 250 45 " +
    "C 265 70, 278 110, 282 150 " +
    "C 292 200, 290 250, 282 290 " +
    "C 272 340, 262 380, 252 420 " +
    "C 248 440, 246 458, 246 466 " +
    "C 241 470, 232 466, 228 458 " +
    "C 220 446, 215 425, 213 405 " +
    "C 208 370, 200 340, 195 310 " +
    "C 188 280, 180 250, 178 220 " +
    "C 175 190, 172 160, 173 130 " +
    "C 172 100, 173 70, 175 50 Z";

  const borneo =
    "M 340 285 " +
    "C 365 268, 410 258, 450 258 " +
    "C 490 256, 528 262, 548 275 " +
    "C 560 286, 562 302, 552 315 " +
    "C 535 322, 500 324, 470 322 " +
    "C 430 320, 390 320, 355 314 " +
    "C 340 307, 332 296, 340 285 Z";

  const stroke = "rgba(10, 20, 40, 0.22)";
  const fill = "rgba(10, 20, 40, 0.035)";

  return (
    <svg viewBox="0 0 600 500" className="w-full h-auto" aria-hidden="true">
      <defs>
        <radialGradient id="cv-ping" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#e11d2a" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#e11d2a" stopOpacity="0" />
        </radialGradient>
      </defs>

      <path d={peninsular} fill={fill} stroke={stroke} strokeWidth="1.2" />
      <path d={borneo} fill={fill} stroke={stroke} strokeWidth="1.2" />

      {/* Singapore — small island below peninsular tip */}
      <ellipse
        cx="244"
        cy="478"
        rx="9"
        ry="4"
        fill={fill}
        stroke={stroke}
        strokeWidth="1"
      />

      <Pin x={245} y={438} label="Johor" main />
      <Pin x={205} y={330} label="Klang Valley" />
      <Pin x={183} y={210} label="Penang" />
      <Pin x={278} y={245} label="East Coast" />
      <Pin x={244} y={478} label="Singapore" align="below" />
      <Pin x={445} y={290} label="Borneo" />
    </svg>
  );
}

function Pin({
  x,
  y,
  label,
  main = false,
  align = "right",
}: {
  x: number;
  y: number;
  label: string;
  main?: boolean;
  align?: "right" | "below";
}) {
  return (
    <g>
      {main && <circle cx={x} cy={y} r="22" fill="url(#cv-ping)" />}
      <circle cx={x} cy={y} r={main ? 4.5 : 3} fill="#e11d2a" />
      {main && (
        <circle
          cx={x}
          cy={y}
          r="9"
          fill="none"
          stroke="#e11d2a"
          strokeOpacity="0.5"
          strokeWidth="1"
        />
      )}
      {align === "right" ? (
        <text
          x={x + 11}
          y={y + 3.5}
          fill="rgba(10, 20, 40, 0.8)"
          fontSize="11"
          fontFamily="var(--font-sans), system-ui, sans-serif"
          fontWeight="500"
          letterSpacing="0.04em"
        >
          {label}
        </text>
      ) : (
        <text
          x={x}
          y={y + 16}
          textAnchor="middle"
          fill="rgba(10, 20, 40, 0.65)"
          fontSize="10"
          fontFamily="var(--font-sans), system-ui, sans-serif"
          fontWeight="500"
          letterSpacing="0.06em"
        >
          {label}
        </text>
      )}
    </g>
  );
}
