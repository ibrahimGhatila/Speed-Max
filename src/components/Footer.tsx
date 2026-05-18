import Link from "next/link";
import { Mail, Phone, MapPin, Printer, ArrowRight } from "lucide-react";
import { Facebook, Instagram, Linkedin } from "./SocialIcons";
import Logo from "./Logo";
import { nav, services, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-4">
          <Logo variant="light" />
          <p className="mt-5 text-sm leading-relaxed text-white/60 max-w-sm">
            Speedmax Solutions is a one-stop technology provider delivering
            structured cabling, system integration, IP telephony, security and
            AutoCount accounting solutions to businesses across Malaysia.
          </p>

          <div className="mt-6 flex items-center gap-3">
            <a
              href={site.social.facebook}
              aria-label="Facebook"
              className="h-9 w-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-600 hover:border-brand-600 transition-colors"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href={site.social.instagram}
              aria-label="Instagram"
              className="h-9 w-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-600 hover:border-brand-600 transition-colors"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href={site.social.linkedin}
              aria-label="LinkedIn"
              className="h-9 w-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-600 hover:border-brand-600 transition-colors"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="text-white font-semibold mb-4">Company</div>
          <ul className="space-y-2.5 text-sm">
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="hover:text-white transition-colors">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <div className="text-white font-semibold mb-4">Services</div>
          <ul className="space-y-2.5 text-sm">
            {services.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/products#${s.slug}`}
                  className="hover:text-white transition-colors"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <div className="text-white font-semibold mb-4">Get in Touch</div>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="h-4 w-4 text-brand-500 mt-0.5 shrink-0" />
              <span>
                {site.address.line1}, {site.address.line2},
                <br />
                {site.address.city}, {site.address.state}
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-brand-500" />
              <a href={`tel:${site.phoneRaw}`} className="hover:text-white">
                {site.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Printer className="h-4 w-4 text-brand-500" />
              {site.fax}
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-brand-500" />
              <a href={`mailto:${site.email}`} className="hover:text-white">
                {site.email}
              </a>
            </li>
          </ul>

          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-600 text-white px-5 py-2.5 text-sm font-semibold hover:bg-brand-700 transition-colors"
          >
            Free Site Survey
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-white/50">
          <div>
            © {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </div>
          <div className="flex items-center gap-5">
            <Link href="/" className="hover:text-white">Privacy</Link>
            <Link href="/" className="hover:text-white">Terms</Link>
            <span>SSM Registered · Malaysia</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
