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

export default function Closing() {
  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden bg-ink-deep min-h-[100svh] flex flex-col border-t border-white/8"
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

      <div className="relative z-10 flex-1 flex flex-col mx-auto w-full max-w-[1440px] px-6 lg:px-10 pt-8 lg:pt-10 pb-4">
        {/* ─── Headline ─── */}
        <Reveal>
          <div className="eyebrow">Engage</div>
          <h2 className="mt-2 font-display text-[26px] sm:text-[32px] lg:text-[40px] text-white leading-[1.04] max-w-3xl">
            Let&apos;s build something{" "}
            <span className="relative inline-block">
              <span className="text-white/65">that doesn&apos;t fail.</span>
              <span className="absolute -right-2.5 top-[0.18em] h-1.5 w-1.5 bg-accent" />
            </span>
          </h2>
        </Reveal>

        {/* ─── Form + Studio panel ─── */}
        <div className="mt-6 lg:mt-8 grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Form */}
          <Reveal delay={80} className="lg:col-span-7">
            <form
              action={`mailto:${site.email}`}
              method="post"
              encType="text/plain"
            >
              <div className="grid sm:grid-cols-2 gap-x-8">
                <Field label="Name" name="name" required />
                <Field label="Email" name="email" type="email" required />
                <Field label="Company" name="company" />
                <Field label="Phone" name="phone" type="tel" />
              </div>

              <div className="border-b border-white/15 py-3.5">
                <label className="block text-[10px] tracking-[0.16em] uppercase font-medium text-white/55">
                  Discipline
                </label>
                <select
                  name="service"
                  defaultValue=""
                  className="mt-2 w-full bg-transparent text-[15px] text-white focus:outline-none"
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

              <div className="border-b border-white/15 py-3.5">
                <label className="block text-[10px] tracking-[0.16em] uppercase font-medium text-white/55">
                  Brief<span className="text-accent ml-1">*</span>
                </label>
                <textarea
                  name="message"
                  rows={2}
                  required
                  placeholder="Site, timeline, constraints…"
                  className="mt-2 w-full bg-transparent text-[15px] text-white focus:outline-none resize-none placeholder:text-white/35"
                />
              </div>

              <button
                type="submit"
                className="btn-lift group mt-5 inline-flex items-center gap-2.5 bg-accent text-white px-6 py-3 text-[13px] font-semibold hover:bg-accent-hot"
              >
                Send brief
                <Arrow />
              </button>
              <p className="mt-2.5 text-[10px] text-white/45 leading-relaxed max-w-sm">
                By submitting this form you agree to be contacted by Speedmax
                about your enquiry.
              </p>
            </form>
          </Reveal>

          {/* Studio details */}
          <Reveal
            delay={150}
            className="lg:col-span-5 lg:pl-10 lg:border-l border-white/12"
          >
            <div className="eyebrow-mute">Or, reach us directly</div>
            <a
              href={`mailto:${site.email}`}
              className="mt-3 block font-display text-[22px] sm:text-[26px] lg:text-[30px] leading-[1.05] tracking-[-0.02em] text-white hover:text-accent transition-colors break-all"
            >
              {site.email}
            </a>
            <div className="mt-2 flex items-center gap-3 text-[10px] text-white/55">
              <span className="h-px w-6 bg-accent" />
              We reply within one working day
            </div>

            <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-5">
              <div className="col-span-2">
                <dt className="eyebrow-mute">Studio</dt>
                <dd className="not-italic mt-2 text-[12px] text-white/85 leading-relaxed">
                  {site.address.line1}
                  <br />
                  {site.address.line2}
                  <br />
                  {site.address.city} · {site.address.state}, {site.address.country}
                </dd>
              </div>

              <div>
                <dt className="eyebrow-mute">Phone</dt>
                <dd className="mt-2 text-[12px] tabular text-white/85">
                  <a
                    href={`tel:${site.phoneRaw}`}
                    className="block hover:text-white"
                  >
                    {site.phone}
                  </a>
                  <span className="block text-white/50 mt-0.5">
                    F {site.fax}
                  </span>
                </dd>
              </div>

              <div>
                <dt className="eyebrow-mute">Hours</dt>
                <dd className="mt-2 text-[12px] text-white/85 leading-relaxed">
                  {site.hours}
                </dd>
              </div>

              <div className="col-span-2 flex flex-wrap gap-x-5 gap-y-1.5 text-[11px] tabular text-white/75 pt-1">
                <a
                  href={site.social.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="link-ul hover:text-white"
                >
                  LinkedIn ↗
                </a>
                <a
                  href={site.social.facebook}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="link-ul hover:text-white"
                >
                  Facebook ↗
                </a>
                <a
                  href={`https://wa.me/${site.whatsapp}`}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="link-ul hover:text-white"
                >
                  WhatsApp ↗
                </a>
              </div>
            </dl>
          </Reveal>
        </div>

        {/* ─── Bottom bar ─── */}
        <div className="mt-auto pt-5 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-[10px] text-white/50 tabular">
          <div className="flex items-center gap-4">
            <Logo variant="light" />
            <span>
              © {new Date().getFullYear()} {site.legalName} · SSM {site.ssm}
            </span>
          </div>
          <div className="flex items-center gap-5">
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
    <div className="border-b border-white/15 py-3.5">
      <label className="block text-[10px] tracking-[0.16em] uppercase font-medium text-white/55">
        {label}
        {required && <span className="text-accent ml-1">*</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="mt-2 w-full bg-transparent text-[15px] text-white focus:outline-none"
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
