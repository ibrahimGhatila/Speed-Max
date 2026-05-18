import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Gem } from "lucide-react";
import { images } from "@/lib/images";

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
          <div className="relative aspect-[4/5] w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src={`${images.aboutTeam}?auto=format&fit=crop&w=1200&q=80`}
              alt="Speedmax engineering and consulting team"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/30 via-transparent to-transparent" />
          </div>

          {/* Floating badge */}
          <div className="absolute -bottom-5 left-6 sm:left-10 right-6 sm:right-auto sm:max-w-[260px] rounded-2xl bg-navy-900 text-white p-4 shadow-2xl flex items-center gap-3">
            <div className="h-11 w-11 rounded-xl bg-brand-600 flex items-center justify-center shrink-0">
              <Gem className="h-5 w-5" />
            </div>
            <div className="text-sm leading-tight">
              <div className="font-semibold">100% Client</div>
              <div className="font-semibold">Satisfaction</div>
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
