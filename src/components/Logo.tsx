type Props = {
  variant?: "light" | "dark";
  className?: string;
};

export default function Logo({ variant = "dark", className = "" }: Props) {
  const fg = variant === "light" ? "#ffffff" : "#0b1224";
  const accent = "#e11d2a";
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg
        viewBox="0 0 40 40"
        width={36}
        height={36}
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M6 28c4-12 18-14 24-8"
          stroke={accent}
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M10 32c4-10 16-12 22-6"
          stroke={fg}
          strokeWidth="3"
          strokeLinecap="round"
        />
        <circle cx="30" cy="20" r="3" fill={accent} />
      </svg>
      <div className="leading-none">
        <div
          className="font-display text-2xl font-bold tracking-tight"
          style={{ color: fg }}
        >
          speed<span style={{ color: accent }}>max</span>
        </div>
        <div
          className="text-[10px] uppercase tracking-[0.18em] font-medium mt-0.5"
          style={{ color: variant === "light" ? "rgba(255,255,255,0.6)" : "rgba(11,18,36,0.55)" }}
        >
          Technology Solutions
        </div>
      </div>
    </div>
  );
}
