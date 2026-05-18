"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Stagger delay in ms */
  delay?: number;
  /** Element tag, defaults to div */
  as?: ElementType;
  className?: string;
  /** Optional override of the default transform — "y" (rise), "fade" (no movement) */
  variant?: "y" | "fade";
};

/**
 * Single-shot scroll-reveal. Watches the element with an IntersectionObserver,
 * fades + lifts it in once when it enters the viewport, then disconnects.
 */
export default function Reveal({
  children,
  delay = 0,
  as: Tag = "div",
  className = "",
  variant = "y",
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      const id = window.setTimeout(() => setShown(true), 0);
      return () => window.clearTimeout(id);
    }
    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setShown(true);
            obs.disconnect();
            break;
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as never}
      data-reveal={variant}
      data-revealed={shown ? "true" : "false"}
      className={`reveal ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
