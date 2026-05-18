import Link from "next/link";
import {
  Cable,
  Server,
  PhoneCall,
  ShieldCheck,
  Users,
  Calculator,
  ArrowUpRight,
} from "lucide-react";
import { services } from "@/lib/site";

const iconMap = {
  Cable,
  Server,
  PhoneCall,
  ShieldCheck,
  Users,
  Calculator,
} as const;

export default function Services() {
  return (
    <section className="bg-navy-50/40 py-20 lg:py-28" id="services">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">
            Our Products & Services
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            <span className="brand-underline">Everything</span> you need to run,
            secure and grow your IT
          </h2>
          <p className="mt-5 text-navy-900/70 text-lg">
            From the cabling in your walls to the accounting software on your
            laptops — we design, install and maintain it all under one roof.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {services.map((svc) => {
            const Icon = iconMap[svc.icon as keyof typeof iconMap] ?? Server;
            return (
              <Link
                key={svc.slug}
                href={`/products#${svc.slug}`}
                className="group relative rounded-2xl border border-navy-900/8 bg-white p-7 hover:border-brand-600/40 hover:shadow-xl hover:shadow-navy-900/5 transition-all"
              >
                <div className="h-14 w-14 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center group-hover:bg-brand-600 group-hover:text-white transition-colors">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-navy-900">
                  {svc.title}
                </h3>
                <p className="mt-2 text-navy-900/65 leading-relaxed text-sm">
                  {svc.short}
                </p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600">
                  Learn more
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
