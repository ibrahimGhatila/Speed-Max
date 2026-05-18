import { Mail, Phone, MapPin } from "lucide-react";
import { Facebook, Instagram, Linkedin } from "./SocialIcons";
import { site } from "@/lib/site";

export default function UtilityBar() {
  return (
    <div className="bg-navy-950 text-white/90 text-[13px]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-2.5 flex flex-wrap items-center justify-between gap-y-2 gap-x-6">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-1">
          <a
            href={`mailto:${site.email}`}
            className="inline-flex items-center gap-2 hover:text-brand-400 transition-colors"
          >
            <Mail className="h-4 w-4 text-brand-500" />
            {site.email}
          </a>
          <a
            href={`tel:${site.phoneRaw}`}
            className="inline-flex items-center gap-2 hover:text-brand-400 transition-colors"
          >
            <Phone className="h-4 w-4 text-brand-500" />
            {site.phone}
          </a>
          <span className="hidden md:inline-flex items-center gap-2">
            <MapPin className="h-4 w-4 text-brand-500" />
            Johor Bahru, Malaysia
          </span>
        </div>
        <div className="flex items-center gap-4 text-white/70">
          <a href={site.social.facebook} aria-label="Facebook" className="hover:text-white">
            <Facebook className="h-4 w-4" />
          </a>
          <a href={site.social.instagram} aria-label="Instagram" className="hover:text-white">
            <Instagram className="h-4 w-4" />
          </a>
          <a href={site.social.linkedin} aria-label="LinkedIn" className="hover:text-white">
            <Linkedin className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
