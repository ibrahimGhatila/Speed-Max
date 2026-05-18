import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { services } from "@/lib/site";
import { img, type ImageKey } from "@/lib/images";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Trust from "@/components/Trust";
import Approach from "@/components/Approach";

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const svc = services.find((s) => s.slug === slug);
  if (!svc) return {};
  return {
    title: svc.title,
    description: svc.short,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const svc = services.find((s) => s.slug === slug);
  if (!svc) notFound();

  const related = services.filter((s) => s.slug !== svc.slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={`Capability · ${svc.number}`}
        marker={`${String(services.findIndex((s) => s.slug === svc.slug) + 1).padStart(2, "0")} / ${String(services.length).padStart(2, "0")}`}
        title={
          <>
            {svc.title}
            <span className="text-accent">.</span>
          </>
        }
        subtitle={svc.short}
        image={svc.image as ImageKey}
      />

      {/* Overview — copy left, image right */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10 grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <Reveal className="lg:col-span-7">
            <div className="text-[11px] tracking-[0.18em] uppercase font-medium text-accent">
              Overview
            </div>
            <h2 className="mt-3 font-display text-[28px] sm:text-[34px] lg:text-[44px] text-ink max-w-2xl">
              {svc.title} —{" "}
              <span className="text-mute">{svc.short.replace(/\.$/, "")}.</span>
            </h2>
            <p className="mt-7 text-[16px] lg:text-[17px] text-ink/75 leading-[1.6] max-w-xl">
              {svc.description}
            </p>
          </Reveal>

          <Reveal delay={150} className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden border border-line">
              <Image
                src={img(svc.image as ImageKey, 1200, 80)}
                alt={svc.title}
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover duotone-cool"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* What's included — paper section with two-column spec list */}
      <section className="bg-paper-warm py-20 lg:py-24">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <Reveal>
            <div className="text-[11px] tracking-[0.18em] uppercase font-medium text-accent">
              What&apos;s included
            </div>
            <h2 className="mt-3 font-display text-[28px] sm:text-[34px] lg:text-[44px] text-ink max-w-2xl">
              Every engagement{" "}
              <span className="text-mute">covers the following.</span>
            </h2>
          </Reveal>

          <ul className="mt-10 lg:mt-14 grid md:grid-cols-2 gap-x-10">
            {svc.specs.map((s, i) => (
              <Reveal
                key={s}
                as="li"
                delay={100 + i * 100}
                className="flex items-start gap-6 py-5 border-b border-line first:border-t md:[&:nth-child(2)]:md:border-t"
              >
                <span className="text-[11px] tabular text-mute tracking-wider w-7 shrink-0 mt-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-[18px] lg:text-[20px] text-ink tracking-[-0.02em]">
                  {s}
                </span>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <Approach />

      {/* Related capabilities */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <Reveal>
            <div className="text-[11px] tracking-[0.18em] uppercase font-medium text-accent">
              Pairs well with
            </div>
            <h2 className="mt-3 font-display text-[28px] sm:text-[34px] lg:text-[44px] text-ink max-w-2xl">
              Other capabilities{" "}
              <span className="text-mute">we deliver in-house.</span>
            </h2>
          </Reveal>

          <div className="mt-10 lg:mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
            {related.map((r, i) => (
              <Reveal key={r.slug} delay={120 + i * 90}>
                <Link
                  href={`/products/${r.slug}`}
                  className="group relative block aspect-[4/5] overflow-hidden border border-line"
                >
                  <Image
                    src={img(r.image as ImageKey, 900, 75)}
                    alt={r.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover duotone-cool transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-deep/90 via-ink-deep/30 to-transparent" />

                  <div className="absolute top-5 right-5 h-9 w-9 border border-white/30 flex items-center justify-center text-white/85 group-hover:bg-accent group-hover:border-accent group-hover:text-white transition-colors">
                    <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true" className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                      <path d="M3 11L11 3M11 3H4M11 3V10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>

                  <div className="absolute inset-x-6 bottom-6 text-white">
                    <div className="text-[10px] tracking-[0.18em] uppercase text-white/65 font-medium">
                      Capability
                    </div>
                    <h3 className="mt-2 font-display text-[22px] lg:text-[24px] tracking-[-0.02em]">
                      {r.title}
                    </h3>
                    <p className="mt-2 text-[13px] text-white/85 leading-[1.55] max-w-[95%]">
                      {r.short}
                    </p>
                    <div className="mt-4 h-px w-8 bg-accent group-hover:w-14 transition-all duration-500" />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <div className="mt-10 lg:mt-14 border-t border-line pt-8 flex flex-wrap items-center justify-between gap-4">
              <Link
                href="/products"
                className="text-[13px] font-semibold text-ink link-ul"
              >
                ← View all capabilities
              </Link>
              <Link
                href="/contact"
                className="btn-lift inline-flex items-center gap-2.5 bg-accent text-white px-6 py-3 text-[14px] font-semibold hover:bg-accent-hot"
              >
                Brief us on a {svc.title.toLowerCase()} project
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <Trust />
    </>
  );
}
