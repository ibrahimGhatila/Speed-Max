import Link from "next/link";
import Image from "next/image";
import Logo from "./Logo";
import Reveal from "./Reveal";
import { img } from "@/lib/images";
import { site } from "@/lib/site";

const disciplines = [
  "Structured cabling",
  "System integration",
  "IP telephony",
  "Security & access",
  "Collaboration rooms",
  "AutoCount suite",
  "Something else",
];

const promises = [
  {
    num: "01",
    title: "Reply within 24 hours",
    body: "Acknowledged by the next working day, without fail.",
  },
  {
    num: "02",
    title: "Fixed-price in 10 days",
    body: "Scope, timeline and price — no open-ended estimates.",
  },
  {
    num: "03",
    title: "One-year workmanship",
    body: "Warrantied on everything we design and install.",
  },
  {
    num: "04",
    title: "One accountable team",
    body: "Direct line to the engineer who built your system.",
  },
];

export default function Closing() {
  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden bg-ink-deep min-h-[calc(100svh-5rem)] lg:h-[calc(100svh-5rem)] flex flex-col border-t border-white/8"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src={img("heroFiber", 2400, 70)}
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-[0.08] duotone-cool"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-deep/55 via-ink-deep/75 to-ink-deep" />
        <div className="absolute -left-40 top-16 rounded-full h-[440px] w-[440px] bg-accent/15 blur-[140px]" />
        <div className="absolute -right-40 bottom-32 rounded-full h-[400px] w-[400px] bg-accent/10 blur-[150px]" />
      </div>

      <div className="relative z-10 flex-1 min-h-0 flex flex-col mx-auto w-full max-w-[1440px] px-6 lg:px-10 pt-6 lg:pt-7 pb-3">
        {/* ─── Headline + Form + Studio ─── */}
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-10">
          {/* Left — headline + form */}
          <Reveal className="lg:col-span-7 flex flex-col min-h-0">
            <div>
              <div className="eyebrow">Engage</div>
              <h2 className="mt-1.5 font-display text-[26px] sm:text-[30px] lg:text-[34px] text-white leading-[1.04] max-w-3xl">
                Let&apos;s build something{" "}
                <span className="relative inline-block">
                  <span className="text-white/65">that doesn&apos;t fail.</span>
                  <span className="absolute -right-2.5 top-[0.18em] h-1.5 w-1.5 bg-accent" />
                </span>
              </h2>
            </div>

            <form
              action={`mailto:${site.email}`}
              method="post"
              encType="text/plain"
              className="mt-5 lg:mt-6"
            >
              <div className="grid sm:grid-cols-2 gap-x-8">
                <Field label="Name" name="name" required />
                <Field label="Email" name="email" type="email" required />
                <Field label="Company" name="company" />
                <Field label="Phone" name="phone" type="tel" />
              </div>

              <div className="border-b border-white/15 py-2.5">
                <label className="block text-[10px] tracking-[0.16em] uppercase font-medium text-white/55">
                  Discipline
                </label>
                <select
                  name="service"
                  defaultValue=""
                  className="mt-1.5 w-full bg-transparent text-[14px] text-white focus:outline-none"
                >
                  <option value="" disabled className="bg-ink-deep">
                    Choose a discipline
                  </option>
                  {disciplines.map((d) => (
                    <option key={d} className="bg-ink-deep">
                      {d}
                    </option>
                  ))}
                </select>
              </div>

              <div className="border-b border-white/15 py-2.5">
                <label className="block text-[10px] tracking-[0.16em] uppercase font-medium text-white/55">
                  Brief<span className="text-accent ml-1">*</span>
                </label>
                <textarea
                  name="message"
                  rows={2}
                  required
                  placeholder="Site, timeline, constraints…"
                  className="mt-1.5 w-full bg-transparent text-[14px] text-white focus:outline-none resize-none placeholder:text-white/35"
                />
              </div>

              <button
                type="submit"
                className="btn-lift group mt-4 inline-flex items-center gap-2.5 bg-accent text-white px-6 py-2.5 text-[13px] font-semibold hover:bg-accent-hot"
              >
                Send brief
                <Arrow />
              </button>
            </form>
          </Reveal>

          {/* Right — studio panel */}
          <Reveal
            delay={150}
            className="lg:col-span-5 lg:pl-10 lg:border-l border-white/12 flex flex-col"
          >
            <div className="eyebrow-mute">Or, reach us directly</div>
            <a
              href={`mailto:${site.email}`}
              className="mt-2 block font-display text-[22px] sm:text-[24px] lg:text-[26px] leading-[1.05] tracking-[-0.02em] text-white hover:text-accent transition-colors break-all"
            >
              {site.email}
            </a>
            <div className="mt-1.5 flex items-center gap-3 text-[10px] text-white/55">
              <span className="h-px w-6 bg-accent" />
              We reply within one working day
            </div>

            <a
              href={`tel:${site.phoneRaw}`}
              className="mt-5 block font-display text-[20px] lg:text-[22px] leading-none tabular text-white hover:text-accent transition-colors"
            >
              {site.phone}
            </a>
            <div className="mt-1 text-[11px] tabular text-white/50">
              F &nbsp;{site.fax}
            </div>

            <dl className="mt-5 grid grid-cols-2 gap-x-6 gap-y-4">
              <div>
                <dt className="eyebrow-mute">Studio</dt>
                <dd className="not-italic mt-1.5 text-[12px] text-white/85 leading-relaxed">
                  {site.address.line1}
                  <br />
                  {site.address.line2}
                  <br />
                  {site.address.city} · {site.address.state}
                </dd>
              </div>

              <div>
                <dt className="eyebrow-mute">Hours</dt>
                <dd className="mt-1.5 text-[12px] text-white/85 leading-relaxed">
                  {site.hours}
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>

        {/* ─── Promise strip ─── */}
        <div className="mt-auto pt-6 lg:pt-8 border-t border-white/10">
          <div className="eyebrow-mute mb-4">Our promise</div>
          <dl className="grid grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-6">
            {promises.map((p, i) => (
              <div
                key={p.num}
                className={`${i === 0 ? "" : "lg:pl-5 lg:border-l lg:border-white/8"}`}
              >
                <dt className="text-[10px] tracking-[0.18em] uppercase text-accent font-medium tabular">
                  {p.num}
                </dt>
                <dd className="mt-2">
                  <div className="font-display text-[15px] lg:text-[17px] text-white leading-[1.2] tracking-[-0.01em]">
                    {p.title}
                  </div>
                  <div className="mt-1.5 text-[11px] lg:text-[12px] text-white/60 leading-[1.5] max-w-[26ch]">
                    {p.body}
                  </div>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* ─── Bottom bar ─── */}
        <div className="mt-5 pt-3 border-t border-white/10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-2.5 text-[10px] text-white/50 tabular shrink-0">
          <div className="flex items-center gap-4">
            <Logo variant="light" />
            <span>
              © {new Date().getFullYear()} {site.legalName} · SSM {site.ssm}
            </span>
          </div>
          <div className="flex items-center gap-4 flex-wrap">
            <a
              href={site.social.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className="hover:text-white"
            >
              LinkedIn ↗
            </a>
            <a
              href={site.social.facebook}
              target="_blank"
              rel="noreferrer noopener"
              className="hover:text-white"
            >
              Facebook ↗
            </a>
            <a
              href={`https://wa.me/${site.whatsapp}`}
              target="_blank"
              rel="noreferrer noopener"
              className="hover:text-white"
            >
              WhatsApp ↗
            </a>
            <span className="h-3 w-px bg-white/15 hidden lg:block" />
            <Link href="/" className="hover:text-white">
              Privacy
            </Link>
            <Link href="/" className="hover:text-white">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div className="border-b border-white/15 py-2.5">
      <label className="block text-[10px] tracking-[0.16em] uppercase font-medium text-white/55">
        {label}
        {required && <span className="text-accent ml-1">*</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="mt-1.5 w-full bg-transparent text-[14px] text-white focus:outline-none"
      />
    </div>
  );
}

function Arrow() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
      className="transition-transform group-hover:translate-x-1"
    >
      <path
        d="M1 7h12M7 1l6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
