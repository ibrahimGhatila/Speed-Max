import Link from "next/link";
import Image from "next/image";
import Logo from "./Logo";
import Reveal from "./Reveal";
import { img } from "@/lib/images";
import { nav, services, site } from "@/lib/site";

export default function Closing() {
  return (
    <section className="relative isolate overflow-hidden bg-ink-deep min-h-[100svh] flex flex-col border-t border-white/8">
      {/* Subtle full-bleed network image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={img("heroFiber", 2400, 70)}
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-[0.08] duotone-cool"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-deep/55 via-ink-deep/75 to-ink-deep" />
        <div className="absolute -left-40 top-16 rounded-full h-[440px] w-[440px] bg-accent/15 blur-[140px]" />
        <div className="absolute -right-40 bottom-32 rounded-full h-[400px] w-[400px] bg-accent/10 blur-[150px]" />
      </div>

      <div className="relative z-10 flex-1 flex flex-col mx-auto w-full max-w-[1440px] px-6 lg:px-10">
        {/* ─── CTA ─── */}
        <div className="pt-8 lg:pt-12 pb-6 lg:pb-8 grid lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          <Reveal className="lg:col-span-8">
            <div className="eyebrow">Engage</div>
            <h2 className="mt-3 font-display text-[26px] sm:text-[34px] lg:text-[44px] text-white leading-[1.04]">
              Let&apos;s build something{" "}
              <span className="relative inline-block text-white">
                that doesn&apos;t fail.
                <span className="absolute -right-2.5 top-[0.15em] h-2 w-2 bg-accent" />
              </span>
            </h2>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-4 lg:pl-8 lg:border-l border-white/12">
            <p className="text-[13px] text-white/70 leading-relaxed">
              Tell us about your site, your team and your timeline — we
              return a fixed-price proposal within three working days.
            </p>
            <div className="mt-4 flex flex-col sm:flex-row lg:flex-col gap-2.5">
              <Link
                href="/#contact"
                className="btn-lift group inline-flex items-center justify-center gap-2.5 bg-accent text-white px-5 py-3 text-[13px] font-semibold hover:bg-accent-hot"
              >
                Request site survey
                <Arrow />
              </Link>
              <a
                href={`tel:${site.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 border border-white/20 bg-white/5 text-white px-5 py-3 text-[13px] font-semibold tabular hover:bg-white/10 transition-colors"
              >
                {site.phone}
              </a>
            </div>
          </Reveal>
        </div>

        <div className="h-px bg-white/10" />

        {/* ─── Email + studio ─── */}
        <div className="pt-7 lg:pt-10 pb-5 grid lg:grid-cols-12 gap-8 items-end">
          <Reveal delay={80} className="lg:col-span-8">
            <div className="eyebrow-mute">Start a conversation</div>
            <a
              href={`mailto:${site.email}`}
              className="mt-3 block font-display text-[26px] sm:text-[36px] lg:text-[48px] xl:text-[56px] leading-[1] tracking-[-0.03em] text-white hover:text-accent transition-colors"
            >
              {site.email}
            </a>
            <div className="mt-3 flex items-center gap-3 text-[11px] text-white/55">
              <span className="h-px w-8 bg-accent" />
              We reply within one working day
            </div>
          </Reveal>
          <Reveal delay={200} className="lg:col-span-4 lg:pl-8 lg:border-l border-white/10">
            <div className="eyebrow-mute">Studio</div>
            <address className="not-italic mt-2.5 text-[12px] leading-relaxed text-white/85">
              {site.address.line1}
              <br />
              {site.address.line2}
              <br />
              {site.address.city} · {site.address.state}, {site.address.country}
            </address>
            <div className="mt-2 text-[12px] tabular text-white/80 flex gap-6">
              <span>T &nbsp; {site.phone}</span>
              <span>F &nbsp; {site.fax}</span>
            </div>
          </Reveal>
        </div>

        {/* ─── Sitemap (anchored to bottom) ─── */}
        <div className="mt-auto pt-5 border-t border-white/10 grid sm:grid-cols-2 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-4">
            <Logo variant="light" />
            <p className="mt-2.5 text-[11px] text-white/55 leading-relaxed max-w-xs">
              {site.legalName}. Specialist contractor for ICT and
              extra-low-voltage construction across Malaysia since{" "}
              {site.foundedYear}.
            </p>
          </div>
          <div className="lg:col-span-3">
            <div className="eyebrow-mute">Index</div>
            <ul className="mt-2.5 space-y-1 text-[12px]">
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
            <ul className="mt-2.5 space-y-1 text-[12px]">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href="/#capabilities"
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
            <ul className="mt-2.5 space-y-1 text-[12px]">
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

        {/* ─── Bottom bar ─── */}
        <div className="pt-4 pb-4 mt-4 border-t border-white/8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-[10px] text-white/45 tabular">
          <div>
            © {new Date().getFullYear()} {site.legalName} · SSM {site.ssm}
          </div>
          <div className="flex items-center gap-5">
            <Link href="/" className="hover:text-white">
              Privacy
            </Link>
            <Link href="/" className="hover:text-white">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function Arrow() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
      className="transition-transform group-hover:translate-x-1"
    >
      <path
        d="M1 7h12M7 1l6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
