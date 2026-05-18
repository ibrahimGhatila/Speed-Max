/* eslint-disable @next/next/no-img-element */

type Props = {
  variant?: "ink" | "paper" | "light";
  className?: string;
};

const LOGO_SRC = "https://speedmax.my/sites/all/themes/jollyness/logo.png";

export default function Logo({ variant = "ink", className = "" }: Props) {
  // The brand logo is dark — invert it on dark backgrounds.
  const invert = variant === "paper" || variant === "light";
  return (
    <img
      src={LOGO_SRC}
      alt="Speedmax"
      className={`h-8 lg:h-9 w-auto ${invert ? "brightness-0 invert" : ""} ${className}`}
    />
  );
}
