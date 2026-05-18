import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Speedmax studio in Johor Bahru. Brief us on a project — we reply within one working day.",
};

export default function ContactPage() {
  return (
    <section className="relative bg-ink-deep -mt-20 pt-32 pb-20 lg:pt-40 lg:pb-24 overflow-hidden min-h-[100svh]">
      <div className="absolute inset-0 bg-dots opacity-30" />
      <div className="absolute -right-32 top-0 h-[400px] w-[400px] rounded-full bg-accent/15 blur-[140px]" />

      <div className="relative mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="flex items-center justify-between text-[11px] tracking-[0.16em] uppercase text-white/55">
          <span>04 — Contact</span>
          <span className="hidden sm:block">
            Replies within one working day
          </span>
        </div>
        <div className="h-px bg-white/10 mt-4" />

        <div className="mt-10 lg:mt-14 grid lg:grid-cols-12 gap-10 lg:gap-14">
          <div className="lg:col-span-7">
            <h1 className="font-display text-[34px] sm:text-[44px] lg:text-[60px] xl:text-[68px] text-white">
              Brief us on a{" "}
              <span className="text-white/55">project.</span>
            </h1>

            <form
              action={`mailto:${site.email}`}
              method="post"
              encType="text/plain"
              className="mt-10 lg:mt-12 max-w-2xl"
            >
              <div className="grid sm:grid-cols-2 gap-x-8">
                <Field label="Your name" name="name" required />
                <Field label="Company" name="company" />
                <Field label="Email" name="email" type="email" required />
                <Field label="Phone" name="phone" type="tel" />
              </div>

              <div className="border-b border-white/15 py-5">
                <label className="block text-[11px] tracking-[0.16em] uppercase font-medium text-white/55">
                  Discipline
                </label>
                <select
                  name="service"
                  defaultValue=""
                  className="mt-3 w-full bg-transparent text-[17px] text-white focus:outline-none [&>option]:text-black"
                >
                  <option value="" disabled>
                    Choose a discipline
                  </option>
                  <option>Structured cabling</option>
                  <option>System integration</option>
                  <option>IP telephony</option>
                  <option>Security & access</option>
                  <option>Collaboration rooms</option>
                  <option>AutoCount suite</option>
                  <option>Something else</option>
                </select>
              </div>

              <div className="border-b border-white/15 py-5">
                <label className="block text-[11px] tracking-[0.16em] uppercase font-medium text-white/55">
                  Brief
                </label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  placeholder="Tell us about the site, the timeline, the constraints…"
                  className="mt-3 w-full bg-transparent text-[17px] text-white focus:outline-none resize-none placeholder:text-white/35"
                />
              </div>

              <button
                type="submit"
                className="btn-lift mt-12 inline-flex items-center gap-3 bg-accent text-white px-7 py-4 text-[15px] font-semibold hover:bg-accent-hot"
              >
                Send brief
                <Arrow />
              </button>
              <p className="mt-4 text-[12px] text-white/45">
                By submitting this form you agree to be contacted by
                Speedmax about your enquiry.
              </p>
            </form>
          </div>

          <aside className="lg:col-span-5 lg:pl-8 lg:border-l border-white/10">
            <Block label="Studio">
              {site.address.line1}
              <br />
              {site.address.line2}
              <br />
              {site.address.city}
              <br />
              {site.address.state}, {site.address.country}
            </Block>

            <Block label="Direct">
              <a
                href={`tel:${site.phoneRaw}`}
                className="block tabular link-ul"
              >
                T &nbsp; {site.phone}
              </a>
              <div className="block tabular text-white/55 mt-1">
                F &nbsp; {site.fax}
              </div>
              <a
                href={`mailto:${site.email}`}
                className="block mt-3 link-ul"
              >
                {site.email}
              </a>
            </Block>

            <Block label="Hours">{site.hours}</Block>

            <Block label="Registration">
              SSM &nbsp; <span className="tabular">{site.ssm}</span>
            </Block>

            <Block label="Or, in real time">
              <a
                href={`https://wa.me/${site.whatsapp}`}
                target="_blank"
                rel="noreferrer noopener"
                className="link-ul"
              >
                WhatsApp the studio ↗
              </a>
            </Block>
          </aside>
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
    <div className="border-b border-white/15 py-5">
      <label className="block text-[11px] tracking-[0.16em] uppercase font-medium text-white/55">
        {label}
        {required && <span className="text-accent ml-1">*</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="mt-3 w-full bg-transparent text-[17px] text-white focus:outline-none"
      />
    </div>
  );
}

function Block({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border-b border-white/10 py-6 first:border-t">
      <div className="text-[11px] tracking-[0.16em] uppercase font-medium text-white/55">
        {label}
      </div>
      <div className="mt-3 text-[16px] leading-relaxed text-white">
        {children}
      </div>
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
