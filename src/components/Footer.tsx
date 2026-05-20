import Link from "next/link";
import { site, nav } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-paper border-t border-[color:var(--color-line)] pt-16 lg:pt-20 pb-8">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        {/* Top — columns */}
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-y-10 gap-x-10">
          <div className="col-span-2 lg:col-span-4">
            <Link
              href="/"
              className="font-display text-[22px] tracking-[0.32em] uppercase text-ink"
            >
              {site.name}
            </Link>
            <p className="mt-4 max-w-xs text-[13px] leading-[1.7] text-mute">
              Decorative wall panels — stone, MDF and wood. Designed,
              manufactured and installed by our own team.
            </p>
          </div>

          <FooterCol title="Navigate" items={nav.map((n) => ({ label: n.label, href: n.href }))} />

          <FooterCol
            title="Address"
            items={[
              { label: site.address.line1 },
              { label: site.address.line2 },
              { label: `${site.address.city} · ${site.address.country}` },
            ]}
          />

          <FooterCol
            title="Get in touch"
            items={[
              { label: site.phone, href: `tel:${site.phoneRaw}` },
              { label: site.email, href: `mailto:${site.email}` },
              { label: site.hours },
            ]}
          />
        </div>

        {/* Wordmark sign-off */}
        <div className="mt-16 lg:mt-20 overflow-hidden">
          <div className="wordmark text-[22vw] lg:text-[16rem] leading-none">
            {site.name}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-6 border-t border-[color:var(--color-line)] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-3 text-[11px] text-mute tabular">
          <span>
            © {new Date().getFullYear()} {site.legalName} · {site.tagline}
          </span>
          <div className="flex items-center gap-5">
            <a href={site.social.instagram} className="link-ul hover:text-ink">Instagram</a>
            <a href={site.social.facebook} className="link-ul hover:text-ink">Facebook</a>
            <a href={site.social.pinterest} className="link-ul hover:text-ink">Pinterest</a>
            <span className="hidden lg:inline">·</span>
            <Link href="/" className="link-ul hover:text-ink">Privacy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

type Item = { label: string; href?: string };

function FooterCol({ title, items }: { title: string; items: Item[] }) {
  return (
    <div className="lg:col-span-2 lg:col-end-auto">
      <div className="eyebrow-mute">{title}</div>
      <ul className="mt-4 space-y-2.5 text-[13px] text-ink/85">
        {items.map((it, i) =>
          it.href ? (
            <li key={i}>
              <a href={it.href} className="hover:text-[color:var(--color-accent)] transition-colors">
                {it.label}
              </a>
            </li>
          ) : (
            <li key={i} className="text-mute">{it.label}</li>
          ),
        )}
      </ul>
    </div>
  );
}
