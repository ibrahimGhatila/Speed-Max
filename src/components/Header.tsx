"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[color:var(--color-paper)]/85 backdrop-blur-md border-b border-[color:var(--color-line)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10 h-16 lg:h-20 grid grid-cols-[1fr_auto_1fr] items-center gap-6">
        {/* Left nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {nav.slice(0, 2).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[13px] font-medium text-ink/85 hover:text-[color:var(--color-accent)] transition-colors tracking-[0.01em]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Centered wordmark */}
        <Link
          href="/"
          aria-label="Trenddeck home"
          className="font-display text-[20px] lg:text-[22px] tracking-[0.32em] uppercase text-ink justify-self-center lg:justify-self-center"
        >
          {site.name}
        </Link>

        {/* Right nav + actions */}
        <div className="hidden lg:flex items-center gap-7 justify-end">
          {nav.slice(2).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[13px] font-medium text-ink/85 hover:text-[color:var(--color-accent)] transition-colors tracking-[0.01em]"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={`tel:${site.phoneRaw}`}
            className="text-[13px] tabular text-ink/70 hover:text-ink transition-colors"
            title={site.phone}
          >
            <PhoneIcon />
          </a>
        </div>

        {/* Mobile menu trigger */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="lg:hidden w-10 h-10 inline-flex flex-col items-center justify-center gap-1.5 justify-self-end col-start-3"
          aria-label="Toggle menu"
        >
          <span className={`block h-px w-6 bg-ink transition-transform ${open ? "translate-y-[3px] rotate-45" : ""}`} />
          <span className={`block h-px w-6 bg-ink transition-transform ${open ? "-translate-y-[3px] -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-[color:var(--color-line)] bg-paper">
          <div className="px-6 py-5 flex flex-col">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-3 text-[16px] text-ink/90 border-b border-[color:var(--color-line)]"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/#contact"
              onClick={() => setOpen(false)}
              className="btn-primary mt-5 justify-center"
            >
              Discuss a project
              <Arrow />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

function Arrow() {
  return (
    <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M5 3.5h2.2l1.3 3.2-1.6 1a10 10 0 0 0 4.4 4.4l1-1.6 3.2 1.3V14a2.5 2.5 0 0 1-2.5 2.5A11 11 0 0 1 2.5 5.5 2.5 2.5 0 0 1 5 3z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
