import { stats } from "@/lib/site";
import { Award, Briefcase, Users, Clock } from "lucide-react";

const icons = [Award, Briefcase, Users, Clock];

export default function Stats() {
  return (
    <section className="relative overflow-hidden bg-navy-950 text-white">
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="absolute inset-0 bg-radial-brand" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Trusted by businesses across{" "}
            <span className="text-brand-500">Malaysia</span>
          </h2>
          <div className="mt-4 mx-auto h-[3px] w-24 rounded-full bg-brand-600" />
          <p className="mt-6 text-white/70 leading-relaxed">
            We listen. We advise. We design together. Long-term, value-driven
            relationships with our clientele are what we strive for — measured
            by results and how our customers feel about working with us.
          </p>
        </div>

        <dl className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, i) => {
            const Icon = icons[i] ?? Award;
            return (
              <div
                key={s.label}
                className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur p-6 lg:p-8"
              >
                <div className="h-12 w-12 rounded-xl bg-brand-600/15 text-brand-400 border border-brand-500/20 flex items-center justify-center">
                  <Icon className="h-6 w-6" />
                </div>
                <dt className="mt-5 font-display text-4xl lg:text-5xl font-bold">
                  {s.value}
                </dt>
                <dd className="mt-1 text-white/65 text-sm uppercase tracking-wider">
                  {s.label}
                </dd>
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}
