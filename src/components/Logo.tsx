type Props = {
  variant?: "light" | "dark";
  className?: string;
};

export default function Logo({ variant = "light", className = "" }: Props) {
  const color =
    variant === "light" ? "#ffffff" : "var(--color-ink)";
  const accent = "var(--color-accent)";
  return (
    <div className={`inline-flex items-center gap-2 ${className}`}>
      <svg
        viewBox="0 0 28 28"
        width={26}
        height={26}
        fill="none"
        aria-hidden="true"
      >
        <rect x="2" y="2" width="24" height="24" rx="6" fill={color} />
        <path d="M9 16l5-8 5 8" stroke={accent} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="14" cy="20" r="1.6" fill={accent} />
      </svg>
      <span
        className="font-semibold text-[19px] tracking-[-0.04em] leading-none"
        style={{ color }}
      >
        Speedmax
      </span>
    </div>
  );
}
