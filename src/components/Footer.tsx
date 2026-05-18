import Link from "next/link";
import Logo from "./Logo";
import { nav, services, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-ink-deep text-white border-t border-white/8">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10 pt-20 lg:pt-28 pb-10">
        {/* Big email statement */}
        <div className="grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8">
            <div className="eyebrow-mute">Start a conversation</div>
            <a
              href={`mailto:${site.email}`}
              className="mt-6 block font-display text-[40px] sm:text-[64px] lg:text-[96px] xl:text-[112px] leading-[0.96] tracking-[-0.04em] link-ul text-white hover:text-accent transition-colors"
            >
              {site.email}
            </a>
          </div>
          <div className="lg:col-span-4 lg:pl-6 lg:border-l border-white/10">
            <div className="eyebrow-mute">Studio</div>
            <address className="not-italic mt-3 text-[15px] leading-relaxed text-white/85">
              {site.address.line1}
              <br />
              {site.address.line2}
              <br />
              {site.address.city}
              <br />
              {site.address.state}, {site.address.country}
            </address>
            <div className="mt-5 text-[14px] tabular text-white/80 space-y-1">
              <div>T &nbsp; {site.phone}</div>
              <div>F &nbsp; {site.fax}</div>
            </div>
          </div>
        </div>

        <div className="my-16 lg:my-20 h-px bg-white/10" />

        {/* Sitemap */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <Logo variant="light" />
            <p className="mt-5 text-[14px] text-white/60 leading-relaxed max-w-xs">
              {site.legalName}. Specialist contractor for ICT and
              extra-low-voltage construction across Malaysia since{" "}
              {site.foundedYear}.
            </p>
          </div>

          <div className="lg:col-span-3">
            <div className="eyebrow-mute">Index</div>
            <ul className="mt-5 space-y-3 text-[14px]">
              {nav.map((n) => (
                <li key={n.href}>
                  <Link
                    href={n.href}
                    className="text-white/80 hover:text-white link-ul"
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <div className="eyebrow-mute">Capabilities</div>
            <ul className="mt-5 space-y-3 text-[14px]">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/products#${s.slug}`}
                    className="text-white/80 hover:text-white link-ul"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <div className="eyebrow-mute">Elsewhere</div>
            <ul className="mt-5 space-y-3 text-[14px]">
              <li>
                <a
                  href={site.social.linkedin}
                  className="text-white/80 hover:text-white link-ul"
                >
                  LinkedIn ↗
                </a>
              </li>
              <li>
                <a
                  href={site.social.facebook}
                  className="text-white/80 hover:text-white link-ul"
                >
                  Facebook ↗
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${site.whatsapp}`}
                  className="text-white/80 hover:text-white link-ul"
                >
                  WhatsApp ↗
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-white/8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-[12px] text-white/50 tabular">
          <div>
            © {new Date().getFullYear()} {site.legalName} · SSM {site.ssm}
          </div>
          <div className="flex items-center gap-6">
            <Link href="/" className="hover:text-white">
              Privacy
            </Link>
            <Link href="/" className="hover:text-white">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
