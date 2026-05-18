import Link from "next/link";
import { ArrowRight, Play, ShieldCheck, Zap, Award } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-900 text-white">
      <div className="absolute inset-0 bg-grid opacity-60" />
      <div className="absolute inset-0 bg-radial-brand" />
      {/* Decorative network lines */}
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.08]"
        viewBox="0 0 1440 800"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="lineGrad" x1="0" x2="1">
            <stop offset="0%" stopColor="#fff" stopOpacity="0" />
            <stop offset="50%" stopColor="#fff" stopOpacity="1" />
            <stop offset="100%" stopColor="#fff" stopOpacity="0" />
          </linearGradient>
        </defs>
        {Array.from({ length: 14 }).map((_, i) => (
          <path
            key={i}
            d={`M0 ${80 + i * 50} Q 720 ${i * 30} 1440 ${500 - i * 25}`}
            stroke="url(#lineGrad)"
            strokeWidth="1"
            fill="none"
          />
        ))}
      </svg>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28 grid lg:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
            Serving Malaysian businesses since 2010
          </div>

          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight">
            One-Stop{" "}
            <span className="text-brand-500">Technology Solutions</span>
            <br />
            for Modern Business
          </h1>

          <p className="mt-6 max-w-xl text-lg text-white/75 leading-relaxed">
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
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold hover:bg-white/10 transition-colors"
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

        {/* Visual */}
        <div className="relative hidden lg:block">
          <div className="relative aspect-[5/6] w-full max-w-md ml-auto">
            <div className="absolute -inset-4 rounded-3xl bg-brand-600/20 blur-3xl" />
            <div className="relative h-full w-full rounded-3xl border border-white/10 bg-gradient-to-br from-navy-800 to-navy-950 overflow-hidden shadow-2xl">
              {/* Server rack mock */}
              <div className="absolute inset-0 p-6 flex flex-col gap-3">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-md bg-navy-700/60 border border-white/5 flex items-center justify-between px-3"
                  >
                    <div className="flex gap-1.5">
                      {Array.from({ length: 8 }).map((_, j) => (
                        <span
                          key={j}
                          className={`h-2 w-2 rounded-full ${
                            (i + j) % 4 === 0
                              ? "bg-brand-500"
                              : (i + j) % 3 === 0
                              ? "bg-emerald-400"
                              : "bg-white/15"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-[10px] uppercase tracking-widest text-white/40 font-mono">
                      Rack-{String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                ))}
              </div>
              <div className="absolute bottom-5 left-5 right-5 rounded-xl bg-white/95 text-navy-900 p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-brand-600 text-white flex items-center justify-center">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div className="text-sm">
                    <div className="font-semibold">99.9% Uptime SLA</div>
                    <div className="text-navy-900/60 text-xs">
                      Managed networks across Malaysia
                    </div>
                  </div>
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
      <div className="h-10 w-10 rounded-lg bg-white/10 border border-white/10 flex items-center justify-center text-brand-400">
        {icon}
      </div>
      <span className="text-sm font-medium text-white/80">{label}</span>
    </div>
  );
}
