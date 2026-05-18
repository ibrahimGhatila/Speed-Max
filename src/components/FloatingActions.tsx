import { MessageCircle, Phone } from "lucide-react";
import { site } from "@/lib/site";

export default function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      <a
        href={`https://wa.me/${site.whatsapp}`}
        target="_blank"
        rel="noreferrer noopener"
        aria-label="Chat on WhatsApp"
        className="group inline-flex items-center gap-2 rounded-full bg-emerald-500 text-white h-12 pl-3 pr-5 shadow-xl shadow-emerald-500/30 hover:bg-emerald-600 transition-colors"
      >
        <span className="h-9 w-9 -ml-1 rounded-full bg-white/15 flex items-center justify-center">
          <MessageCircle className="h-5 w-5" />
        </span>
        <span className="font-semibold text-sm hidden sm:inline">
          Chat with us
        </span>
      </a>
      <a
        href={`tel:${site.phoneRaw}`}
        aria-label="Call Speedmax"
        className="sm:hidden inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-600 text-white shadow-xl shadow-brand-600/30"
      >
        <Phone className="h-5 w-5" />
      </a>
    </div>
  );
}
