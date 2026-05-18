type Props = {
  variant?: "ink" | "paper";
  className?: string;
};

export default function Logo({ variant = "ink", className = "" }: Props) {
  const color = variant === "ink" ? "var(--color-ink)" : "var(--color-paper)";
  return (
    <div className={`inline-flex items-baseline gap-[0.4em] ${className}`}>
      <span
        className="font-semibold text-[20px] tracking-[-0.04em] leading-none"
        style={{ color }}
      >
        Speedmax
      </span>
      <span
        className="text-[10px] tracking-[0.16em] uppercase font-medium leading-none"
        style={{ color: variant === "ink" ? "var(--color-mute)" : "rgba(250,250,249,0.6)" }}
      >
        / Solutions
      </span>
    </div>
  );
}
