import Link from "next/link";
import Image from "next/image";
import { img } from "@/lib/images";
import { site } from "@/lib/site";

export default function About() {
  return (
    <section className="relative bg-paper py-20 lg:py-28">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] rounded-xl overflow-hidden border border-line">
              <Image
                src={img("team", 1200, 80)}
                alt="Speedmax engineering team"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover duotone-cool"
              />
              <div className="absolute bottom-5 left-5 right-5 flex items-baseline justify-between text-[10px] tabular tracking-[0.18em] uppercase text-white/85">
                <span>Studio · JB</span>
                <span>Est. {site.foundedYear}</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 lg:pt-2">
            <div className="text-[11px] tracking-[0.18em] uppercase font-medium text-accent">
              08 — Studio
            </div>
            <h2 className="mt-4 font-display text-[32px] sm:text-[40px] lg:text-[56px] text-ink">
              A fourteen-year record{" "}
              <span className="text-mute">of quiet work.</span>
            </h2>

            <p className="mt-7 text-[16px] lg:text-[17px] leading-[1.6] text-ink/85 max-w-xl">
              Speedmax Solutions Sdn Bhd was founded in {site.foundedYear} in
              Johor Bahru as a specialist contractor for ICT and
              extra-low-voltage construction. We have grown — deliberately —
              into a one-stop technology partner for Malaysian businesses.
            </p>
            <p className="mt-4 text-[14px] text-ink/65 leading-relaxed max-w-xl">
              We measure ourselves on what doesn&apos;t happen: no downtime,
              no callbacks, no surprises on invoice day. Every system we
              install is documented, certified and supported on a response
              SLA you can hold us to.
            </p>

            <div className="mt-10 grid sm:grid-cols-2 gap-x-10 gap-y-5 max-w-md">
              <Meta label="Founded" value={String(site.foundedYear)} />
              <Meta label="Headquarters" value="Johor Bahru" />
              <Meta label="Registration" value={`SSM ${site.ssm}`} />
              <Meta label="Coverage" value="Malaysia + SG" />
            </div>

            <Link
              href="/about"
              className="mt-10 inline-flex items-center gap-2.5 text-[13px] font-semibold text-ink link-ul"
            >
              Read about the studio
              <Arrow />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-[10px] tracking-[0.18em] uppercase text-mute">
        {label}
      </div>
      <div className="mt-1.5 text-[14px] text-ink tabular">{value}</div>
    </div>
  );
}

function Arrow() {
  return (
    <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
