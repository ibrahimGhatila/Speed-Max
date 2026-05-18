import type { Metadata } from "next";
import Link from "next/link";
import {
  Cable,
  Server,
  PhoneCall,
  ShieldCheck,
  Users,
  Calculator,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { services } from "@/lib/site";
import CtaBanner from "@/components/CtaBanner";

const iconMap = {
  Cable,
  Server,
  PhoneCall,
  ShieldCheck,
  Users,
  Calculator,
} as const;

export const metadata: Metadata = {
  title: "Products & Services",
  description:
    "Structured cabling, system integration, IP PBX, security & access control, collaboration and AutoCount accounting services from Speedmax Solutions.",
};

export default function ProductsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy-900 text-white">
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="absolute inset-0 bg-radial-brand" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="max-w-3xl">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-400">
              What We Do
            </div>
            <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Products & <span className="text-brand-500">Services</span>
            </h1>
            <p className="mt-5 text-lg text-white/75">
              One partner for the cabling in your walls, the systems on your
              desks, and the accounting in your books. Explore everything
              Speedmax delivers below.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16 lg:space-y-24">
          {services.map((svc, i) => {
            const Icon = iconMap[svc.icon as keyof typeof iconMap] ?? Server;
            const reverse = i % 2 === 1;
            return (
              <article
                id={svc.slug}
                key={svc.slug}
                className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center scroll-mt-28"
              >
                <div className={reverse ? "lg:order-2" : ""}>
                  <div className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">
                    {String(i + 1).padStart(2, "0")} · Service
                  </div>
                  <h2 className="mt-3 text-3xl sm:text-4xl font-bold leading-tight">
                    <span className="brand-underline">{svc.title}</span>
                  </h2>
                  <p className="mt-5 text-navy-900/70 text-lg leading-relaxed">
                    {svc.description}
                  </p>
                  <ul className="mt-6 grid sm:grid-cols-2 gap-3">
                    {svc.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-3 text-navy-900/85 text-sm"
                      >
                        <CheckCircle2 className="h-5 w-5 text-brand-600 mt-0.5 shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="mt-8 inline-flex items-center gap-2 rounded-full bg-navy-900 text-white px-5 py-3 text-sm font-semibold hover:bg-navy-800 transition-colors"
                  >
                    Talk to a specialist
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>

                <div className={reverse ? "lg:order-1" : ""}>
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-navy-800 to-navy-950 border border-navy-900/10">
                    <div className="absolute inset-0 bg-grid opacity-30" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="h-32 w-32 rounded-3xl bg-brand-600/20 border border-brand-500/30 flex items-center justify-center text-brand-400">
                        <Icon className="h-16 w-16" />
                      </div>
                    </div>
                    <div className="absolute bottom-5 left-5 right-5 rounded-xl bg-white/95 text-navy-900 p-4">
                      <div className="text-xs uppercase tracking-widest text-brand-600 font-semibold">
                        Speedmax · {svc.slug}
                      </div>
                      <div className="mt-1 font-semibold">{svc.short}</div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
