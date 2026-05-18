import Link from "next/link";
import Image from "next/image";
import { img } from "@/lib/images";
import { site } from "@/lib/site";

export default function About() {
  return (
    <section className="relative bg-ink-deep py-24 lg:py-36">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Image */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/8">
              <Image
                src={img("team", 1200, 80)}
                alt="Speedmax engineering team"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover duotone-cool"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-deep/50 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex items-baseline justify-between text-[11px] tabular tracking-[0.18em] uppercase text-white/65">
                <span>Studio · JB</span>
                <span>Est. {site.foundedYear}</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-7">
            <div className="eyebrow">08 — Studio</div>
            <h2 className="mt-6 font-display text-[40px] sm:text-[56px] lg:text-[80px] text-white">
              A fourteen-year
              <br />
              <span className="text-white/55">record of</span>{" "}
              <span className="text-white">quiet work.</span>
            </h2>

            <p className="mt-8 text-[18px] lg:text-[20px] leading-[1.55] text-white/85 max-w-xl">
              Speedmax Solutions Sdn Bhd was founded in {site.foundedYear} in
              Johor Bahru as a specialist contractor for ICT and
              extra-low-voltage construction. We have grown — deliberately —
              into a one-stop technology partner for Malaysian businesses.
            </p>
            <p className="mt-5 text-[15px] text-white/65 leading-relaxed max-w-xl">
              We measure ourselves on what doesn&apos;t happen: no downtime,
              no callbacks, no surprises on invoice day. Every system we
              install is documented, certified and supported on a response
              SLA you can hold us to.
            </p>

            <div className="mt-12 grid sm:grid-cols-2 gap-x-10 gap-y-6 max-w-lg">
              <Meta label="Founded" value={String(site.foundedYear)} />
              <Meta label="Headquarters" value="Johor Bahru" />
              <Meta label="Registration" value={`SSM ${site.ssm}`} />
              <Meta label="Coverage" value="Malaysia + SG" />
            </div>

            <Link
              href="/about"
              className="mt-12 inline-flex items-center gap-3 text-[14px] font-semibold text-white link-ul"
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
      <div className="text-[11px] tracking-[0.18em] uppercase text-white/55">
        {label}
      </div>
      <div className="mt-2 text-[16px] text-white tabular">{value}</div>
    </div>
  );
}

function Arrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
