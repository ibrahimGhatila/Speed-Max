import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Play, ShieldCheck, Zap, Award } from "lucide-react";
import { images } from "@/lib/images";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-900 text-white isolate">
      {/* Background image - right side */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-2/3 z-0">
        <Image
          src={`${images.heroCables}?auto=format&fit=crop&w=2000&q=80`}
          alt="High-density network cabling installation"
          fill
          priority
          sizes="(min-width: 1024px) 66vw, 100vw"
          className="object-cover"
        />
        {/* Left fade to navy */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/85 to-navy-900/30 lg:from-navy-900 lg:via-navy-900/60 lg:to-transparent" />
        {/* Bottom darken */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
      </div>

      <div className="absolute inset-0 bg-grid opacity-30 z-0" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-32 grid lg:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
            Serving Malaysian businesses since 2010
          </div>

          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight drop-shadow-lg">
            One-Stop{" "}
            <span className="text-brand-500">Technology Solutions</span>
            <br />
            for Modern Business
          </h1>

          <p className="mt-6 max-w-xl text-lg text-white/85 leading-relaxed">
            Structured cabling, system integration, IP telephony and
            AutoCount accounting — engineered to reduce operating cost,
            enhance efficiency and keep your business connected.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-brand-600 px-6 py-3.5 text-sm font-semibold shadow-lg shadow-brand-600/20 hover:bg-brand-700 transition-colors"
            >
              Request Free Site Survey
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 backdrop-blur px-6 py-3.5 text-sm font-semibold hover:bg-white/20 transition-colors"
            >
              <Play className="h-4 w-4" />
              Explore Services
            </Link>
          </div>

          <dl className="mt-12 grid grid-cols-3 gap-6 max-w-md">
            <Feature icon={<ShieldCheck className="h-5 w-5" />} label="Reliable" />
            <Feature icon={<Zap className="h-5 w-5" />} label="Efficient" />
            <Feature icon={<Award className="h-5 w-5" />} label="Certified" />
          </dl>
        </div>

        {/* Floating badge on hero image */}
        <div className="hidden lg:flex justify-end">
          <div className="rounded-2xl bg-white/95 text-navy-900 p-5 shadow-2xl backdrop-blur max-w-xs">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-xl bg-brand-600 text-white flex items-center justify-center shrink-0">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div>
                <div className="font-semibold">99.9% Uptime SLA</div>
                <div className="text-navy-900/65 text-sm mt-0.5">
                  Managed networks across Malaysia
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Feature({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex flex-col items-start gap-2">
      <div className="h-10 w-10 rounded-lg bg-white/10 border border-white/15 backdrop-blur flex items-center justify-center text-brand-400">
        {icon}
      </div>
      <span className="text-sm font-medium text-white/90">{label}</span>
    </div>
  );
}
