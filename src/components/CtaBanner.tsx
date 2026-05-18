import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { site } from "@/lib/site";

export default function CtaBanner() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-navy-900 to-navy-950" />
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute -left-32 -bottom-32 h-96 w-96 rounded-full bg-brand-600/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Ready to modernise your{" "}
            <span className="text-brand-500">technology stack</span>?
          </h2>
          <p className="mt-4 text-white/70 text-lg">
            Tell us about your project — we’ll arrange a free site survey and
            return a fixed-price proposal within 3 working days.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-brand-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-600/20 hover:bg-brand-700 transition-colors"
          >
            Request Site Survey
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <a
            href={`tel:${site.phoneRaw}`}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
          >
            <Phone className="h-4 w-4" />
            {site.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
