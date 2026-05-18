import Link from "next/link";
import Logo from "./Logo";
import { nav, services, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 pt-20 lg:pt-28 pb-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end">
          <div className="lg:col-span-6">
            <div className="font-display text-[44px] sm:text-[72px] lg:text-[112px] leading-[0.96]">
              {site.email}
            </div>
          </div>
          <div className="lg:col-span-6 lg:pl-10 lg:border-l border-white/12">
            <div className="text-[12px] tracking-[0.14em] uppercase text-paper/60">
              Studio
            </div>
            <address className="not-italic mt-3 text-[16px] leading-relaxed text-paper/85">
              {site.address.line1}<br />
              {site.address.line2}<br />
              {site.address.city}<br />
              {site.address.state}, {site.address.country}
            </address>

            <div className="mt-6 flex flex-col sm:flex-row sm:gap-10 gap-2 text-[14px] tabular-nums text-paper/85">
              <span>T &nbsp; {site.phone}</span>
              <span>F &nbsp; {site.fax}</span>
            </div>
          </div>
        </div>

        <div className="rule-ink mt-20 lg:mt-28" />

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <Logo variant="paper" />
            <p className="mt-5 text-[14px] text-paper/65 leading-relaxed max-w-xs">
              {site.legalName}. Specialist contractor for ICT and extra-low-voltage construction across Malaysia since {site.foundedYear}.
            </p>
          </div>

          <div className="lg:col-span-3">
            <div className="text-[12px] tracking-[0.14em] uppercase text-paper/60">
              Index
            </div>
            <ul className="mt-4 space-y-2.5 text-[14px]">
              {nav.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="text-paper/85 hover:text-paper link-ul">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <div className="text-[12px] tracking-[0.14em] uppercase text-paper/60">
              Capabilities
            </div>
            <ul className="mt-4 space-y-2.5 text-[14px]">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/products#${s.slug}`}
                    className="text-paper/85 hover:text-paper link-ul"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <div className="text-[12px] tracking-[0.14em] uppercase text-paper/60">
              Elsewhere
            </div>
            <ul className="mt-4 space-y-2.5 text-[14px]">
              <li>
                <a href={site.social.linkedin} className="text-paper/85 hover:text-paper link-ul">
                  LinkedIn ↗
                </a>
              </li>
              <li>
                <a href={site.social.facebook} className="text-paper/85 hover:text-paper link-ul">
                  Facebook ↗
                </a>
              </li>
              <li>
                <a href={`https://wa.me/${site.whatsapp}`} className="text-paper/85 hover:text-paper link-ul">
                  WhatsApp ↗
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-[12px] text-paper/55 tabular-nums">
          <div>© {new Date().getFullYear()} {site.legalName} · SSM {site.ssm}</div>
          <div className="flex items-center gap-6">
            <Link href="/" className="hover:text-paper">Privacy</Link>
            <Link href="/" className="hover:text-paper">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
