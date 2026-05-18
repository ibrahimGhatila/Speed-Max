/* eslint-disable @next/next/no-img-element */

type Props = {
  variant?: "ink" | "paper" | "light";
  className?: string;
};

const LOGO_SRC = "/logo.png";

export default function Logo({ variant = "ink", className = "" }: Props) {
  // The brand mark is rendered dark by default; on dark backgrounds the
  // "light" / "paper" variants invert it so the same asset reads as white.
  const invert = variant === "paper" || variant === "light";
  return (
    <img
      src={LOGO_SRC}
      alt="Speedmax"
      width={159}
      height={37}
      className={`h-7 lg:h-8 w-auto ${invert ? "brightness-0 invert" : ""} ${className}`}
    />
  );
}
