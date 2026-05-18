import { ShieldCheck, Users, BadgeCheck, Play } from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Reliable Company",
    body: "Over a decade serving Johor and beyond — reliable partners, repeat clients, real referrals.",
  },
  {
    icon: Users,
    title: "Professional Team",
    body: "Certified engineers and project managers who plan carefully, install cleanly, and document everything.",
  },
  {
    icon: BadgeCheck,
    title: "Quality & Warranty",
    body: "We stand behind our workmanship with warranty on installations and responsive after-sales support.",
  },
];

export default function WhyUs() {
  return (
    <section className="relative overflow-hidden bg-navy-900 text-white py-20 lg:py-28">
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="absolute -right-32 top-1/2 -translate-y-1/2 h-[480px] w-[480px] rounded-full bg-brand-600/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-gradient-to-br from-navy-700 to-navy-950 border border-white/10">
            <div className="absolute inset-0 grid grid-cols-12 gap-1 p-3 opacity-70">
              {Array.from({ length: 96 }).map((_, i) => (
                <div
                  key={i}
                  className={`rounded-sm h-1.5 ${
                    i % 7 === 0
                      ? "bg-brand-500"
                      : i % 3 === 0
                      ? "bg-emerald-400/80"
                      : "bg-white/15"
                  }`}
                  style={{ alignSelf: "center" }}
                />
              ))}
            </div>
            <button
              type="button"
              aria-label="Play introduction"
              className="absolute inset-0 m-auto h-20 w-20 rounded-full bg-brand-600 text-white flex items-center justify-center shadow-2xl shadow-brand-600/40 hover:scale-105 transition-transform"
            >
              <Play className="h-7 w-7 fill-current ml-1" />
            </button>
          </div>
        </div>

        <div>
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-400">
            Why Speedmax
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            View <span className="text-brand-500">our services</span> in your area
          </h2>
          <p className="mt-5 text-white/70 leading-relaxed">
            We deliver structured cabling, networking, IP telephony and managed
            IT services for businesses across Malaysia — backed by a team that
            cares about doing the job right the first time.
          </p>

          <ul className="mt-10 space-y-4">
            {reasons.map(({ icon: Icon, title, body }) => (
              <li
                key={title}
                className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur p-5 hover:border-brand-500/40 hover:bg-white/[0.06] transition-colors"
              >
                <div className="h-11 w-11 shrink-0 rounded-lg bg-brand-600 text-white flex items-center justify-center">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold">{title}</div>
                  <div className="text-sm text-white/65 mt-0.5">{body}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
