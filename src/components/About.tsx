import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const points = [
  "Founded in Johor Bahru in 2010",
  "Trusted by SMEs, retail and enterprise",
  "ICT trading & extra-low-voltage contracting",
  "End-to-end design, build and support",
];

export default function About() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="relative">
          <div className="relative aspect-square w-full max-w-lg rounded-3xl overflow-hidden bg-gradient-to-br from-navy-800 to-navy-950 shadow-xl">
            <div className="absolute inset-0 bg-grid opacity-30" />
            <div className="absolute inset-0 p-10 flex flex-col justify-between text-white">
              <div>
                <div className="text-sm uppercase tracking-[0.3em] text-brand-400 font-semibold">
                  Since {2010}
                </div>
                <div className="mt-3 font-display text-7xl font-bold">14+</div>
                <div className="text-white/70">years of trusted service</div>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="rounded-xl bg-white/5 border border-white/10 p-4">
                  <div className="text-2xl font-bold">1,200+</div>
                  <div className="text-white/60">Projects</div>
                </div>
                <div className="rounded-xl bg-white/5 border border-white/10 p-4">
                  <div className="text-2xl font-bold">500+</div>
                  <div className="text-white/60">Clients</div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-6 -right-6 hidden md:flex h-32 w-32 rounded-2xl bg-brand-600 text-white items-center justify-center text-center p-4 shadow-xl">
            <div>
              <div className="font-display text-lg font-bold leading-tight">100%</div>
              <div className="text-xs leading-tight mt-1">Client Satisfaction</div>
            </div>
          </div>
        </div>

        <div>
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">
            About Speedmax
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            <span className="brand-underline">Your trusted</span> technology partner
            in Malaysia
          </h2>

          <p className="mt-6 text-navy-900/70 text-lg leading-relaxed">
            Speedmax Solutions is a one-stop technology provider founded in 2010.
            Our business spans ICT trading and renovation & contracting for
            extra-low-voltage construction — covering structured cabling, system
            integration, IP telephony, security, and AutoCount accounting.
          </p>
          <p className="mt-4 text-navy-900/70 leading-relaxed">
            We implement IT equipment to reduce business operation cost and
            enhance work efficiency — so our customers can focus on growth and
            higher profit. That mission has guided us for over a decade and
            continues to drive every project we take on.
          </p>

          <ul className="mt-8 grid sm:grid-cols-2 gap-3">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3 text-navy-900/85">
                <CheckCircle2 className="h-5 w-5 text-brand-600 mt-0.5 shrink-0" />
                <span>{p}</span>
              </li>
            ))}
          </ul>

          <Link
            href="/about"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-navy-900 text-white px-6 py-3 text-sm font-semibold hover:bg-navy-800 transition-colors"
          >
            Learn more about us
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
