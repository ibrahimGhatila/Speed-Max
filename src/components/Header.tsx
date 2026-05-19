"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Logo from "./Logo";
import { nav, site, type NavItem } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const closeTimer = useRef<number | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Esc closes any open dropdown
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenMenu(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const openWithDelay = (label: string) => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    setOpenMenu(label);
  };
  const closeWithDelay = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setOpenMenu(null), 120);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-ink-deep/85 backdrop-blur-md border-b border-white/8"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10 h-20 flex items-center justify-between">
        <Link href="/" aria-label="Speedmax home" className="shrink-0">
          <Logo variant="light" />
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((item) =>
            item.children ? (
              <DesktopDropdown
                key={item.label}
                item={item}
                isOpen={openMenu === item.label}
                onOpen={() => openWithDelay(item.label)}
                onClose={closeWithDelay}
              />
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-[14px] font-medium text-white/85 hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden lg:flex items-center gap-5">
          <a
            href={`tel:${site.phoneRaw}`}
            className="text-[14px] tabular text-white/80 hover:text-white transition-colors"
          >
            {site.phone}
          </a>
          <Link
            href="/contact"
            className="btn-lift inline-flex items-center gap-2 bg-accent text-white px-5 py-2.5 text-[14px] font-semibold hover:bg-accent-hot"
          >
            Start a project
            <Arrow />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="lg:hidden w-10 h-10 inline-flex flex-col items-center justify-center gap-1.5"
          aria-label="Toggle menu"
        >
          <span
            className={`block h-px w-6 bg-white transition-transform ${
              open ? "translate-y-[3px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-white transition-transform ${
              open ? "-translate-y-[3px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-white/8 bg-ink-deep">
          <div className="px-6 py-6 flex flex-col">
            {nav.map((item) =>
              item.children ? (
                <MobileAccordion
                  key={item.label}
                  item={item}
                  onNavigate={() => setOpen(false)}
                />
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="py-3 text-[17px] text-white/90 border-b border-white/6"
                >
                  {item.label}
                </Link>
              ),
            )}
            <a
              href={`tel:${site.phoneRaw}`}
              className="py-4 text-[14px] text-white/70 tabular"
            >
              {site.phone}
            </a>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 bg-accent text-white px-4 py-3 text-[14px] font-semibold"
            >
              Start a project
              <Arrow />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

function DesktopDropdown({
  item,
  isOpen,
  onOpen,
  onClose,
}: {
  item: NavItem;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}) {
  // Split children into the overview link (promoted to header) and the rest.
  const overview = item.children?.find((c) => c.href === item.href);
  const items = item.children?.filter((c) => c.href !== item.href) ?? [];

  return (
    <div
      className="relative"
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
      onFocus={onOpen}
      onBlur={onClose}
    >
      <Link
        href={item.href}
        className="inline-flex items-center gap-1.5 px-4 py-2 text-[14px] font-medium text-white/85 hover:text-white transition-colors"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        {item.label}
        <Chevron className={`transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </Link>

      <div
        className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 transition-all duration-300 ease-out ${
          isOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-1 pointer-events-none"
        }`}
      >
        <div className="w-[720px] bg-white border border-line shadow-[0_30px_80px_-30px_rgba(10,20,40,0.35)]">
          {/* Top bar */}
          <div className="flex items-center justify-between px-7 py-4 border-b border-line">
            <span className="text-[10px] tracking-[0.18em] uppercase font-medium text-mute">
              {item.label}
            </span>
            <Link
              href={item.href}
              onClick={onClose}
              className="group/all inline-flex items-center gap-2 text-[12px] font-semibold text-ink hover:text-accent transition-colors"
            >
              {overview?.label ?? "View all"}
              <Arrow className="transition-transform group-hover/all:translate-x-0.5" />
            </Link>
          </div>

          {/* 2-column grid of items */}
          <ul className="grid grid-cols-2 divide-x divide-line">
            {items.map((child, idx) => (
              <li
                key={child.href}
                className={`${idx >= 2 ? "border-t border-line" : ""}`}
              >
                <Link
                  href={child.href}
                  onClick={onClose}
                  className="group/item flex items-start gap-4 px-7 py-5 hover:bg-paper-warm/60 transition-colors h-full"
                >
                  <span className="mt-1.5 h-px w-3 bg-ink/20 group-hover/item:bg-accent group-hover/item:w-7 transition-all duration-300 shrink-0" />
                  <span className="flex-1">
                    <span className="block text-[15px] font-semibold text-ink tracking-[-0.02em]">
                      {child.label}
                    </span>
                    {child.short && (
                      <span className="block text-[12px] text-ink/65 leading-[1.5] mt-0.5">
                        {child.short}
                      </span>
                    )}
                  </span>
                  <Arrow className="text-ink/25 group-hover/item:text-accent group-hover/item:translate-x-0.5 transition-all mt-1" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function MobileAccordion({
  item,
  onNavigate,
}: {
  item: NavItem;
  onNavigate: () => void;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/6">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-3 text-[17px] text-white/90"
        aria-expanded={open}
      >
        {item.label}
        <Chevron
          className={`text-white/60 transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {open && (
        <ul className="pb-3 pl-1">
          {item.children?.map((child) => (
            <li key={child.href}>
              <Link
                href={child.href}
                onClick={onNavigate}
                className="block py-2 text-[14px] text-white/70 hover:text-white"
              >
                {child.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M1 7h12M7 1l6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Chevron({ className = "" }: { className?: string }) {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M2 3.5L5 6.5L8 3.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
