"use client";

import Link from "next/link";
import { useState } from "react";
import Logo from "./Logo";
import { nav, site } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-paper/80 backdrop-blur-md border-b border-line">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 h-16 flex items-center justify-between">
        <Link href="/" aria-label="Speedmax home" className="shrink-0">
          <Logo />
        </Link>

        <nav className="hidden lg:flex items-center gap-10">
          {nav.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              className="group inline-flex items-baseline gap-2 text-[13px] text-ink hover:text-accent transition-colors"
            >
              <span className="text-mute text-[10px] tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="link-ul">{item.label}</span>
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-6">
          <a
            href={`tel:${site.phoneRaw}`}
            className="text-[13px] tabular-nums text-ink hover:text-accent transition-colors"
          >
            {site.phone}
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center text-[13px] font-medium text-paper bg-ink hover:bg-accent transition-colors px-4 py-2 rounded-[2px]"
          >
            Start a project
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="lg:hidden w-9 h-9 inline-flex flex-col items-center justify-center gap-1.5"
          aria-label="Toggle menu"
        >
          <span
            className={`block h-px w-5 bg-ink transition-transform ${
              open ? "translate-y-[3px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px w-5 bg-ink transition-transform ${
              open ? "-translate-y-[3px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-line bg-paper">
          <div className="px-6 py-6 flex flex-col">
            {nav.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-baseline gap-3 py-3 text-base"
              >
                <span className="text-mute text-[10px] tabular-nums w-6">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {item.label}
              </Link>
            ))}
            <div className="rule my-4" />
            <a
              href={`tel:${site.phoneRaw}`}
              className="py-2 text-sm text-mute tabular-nums"
            >
              {site.phone}
            </a>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex items-center justify-center text-sm font-medium text-paper bg-ink px-4 py-3 rounded-[2px]"
            >
              Start a project
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
