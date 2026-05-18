import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Speedmax studio in Johor Bahru. Brief us on a project — we reply within one working day.",
};

export default function ContactPage() {
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 pt-20 lg:pt-32 pb-24 lg:pb-32">
        <div className="flex items-center justify-between text-[12px] tracking-[0.14em] uppercase text-mute">
          <span className="tabular-nums">04 / Contact</span>
          <span className="hidden sm:block">Replies within one working day</span>
        </div>
        <div className="rule mt-5" />

        <div className="mt-12 lg:mt-20 grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-7">
            <h1 className="font-display text-[44px] sm:text-[64px] lg:text-[88px]">
              Brief us on a
              <br />
              <span className="text-mute">project.</span>
            </h1>

            <form
              action={`mailto:${site.email}`}
              method="post"
              encType="text/plain"
              className="mt-12 lg:mt-16 max-w-2xl"
            >
              <Field label="Your name" name="name" required />
              <Field label="Company" name="company" />
              <Field label="Email" name="email" type="email" required />
              <Field label="Phone" name="phone" type="tel" />

              <div className="border-b border-line py-5">
                <label className="block eyebrow">Discipline</label>
                <select
                  name="service"
                  defaultValue=""
                  className="mt-3 w-full bg-transparent text-[18px] focus:outline-none border-0"
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

              <div className="border-b border-line py-5">
                <label className="block eyebrow">Brief</label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  placeholder="Tell us about the site, the timeline, the constraints…"
                  className="mt-3 w-full bg-transparent text-[18px] focus:outline-none resize-none placeholder:text-mute/60"
                />
              </div>

              <button
                type="submit"
                className="group mt-10 inline-flex items-center gap-3 bg-ink text-paper px-6 py-4 text-[14px] font-medium rounded-[2px] hover:bg-accent transition-colors"
              >
                Send brief
                <Arrow />
              </button>
              <p className="mt-4 text-[12px] text-mute">
                By submitting this form you agree to be contacted by Speedmax
                about your enquiry. We never share details with third parties.
              </p>
            </form>
          </div>

          <aside className="lg:col-span-5 lg:pl-10 lg:border-l border-line">
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
                className="block tabular-nums link-ul"
              >
                T &nbsp; {site.phone}
              </a>
              <span className="block tabular-nums text-ink/65 mt-1">
                F &nbsp; {site.fax}
              </span>
              <a
                href={`mailto:${site.email}`}
                className="block mt-3 link-ul"
              >
                {site.email}
              </a>
            </Block>

            <Block label="Hours">{site.hours}</Block>

            <Block label="Registration">
              SSM &nbsp; <span className="tabular-nums">{site.ssm}</span>
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
    <div className="border-b border-line py-5">
      <label className="block eyebrow">
        {label}
        {required && <span className="text-accent ml-1">*</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="mt-3 w-full bg-transparent text-[18px] focus:outline-none"
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
    <div className="border-b border-line py-6 first:border-t">
      <div className="eyebrow">{label}</div>
      <div className="mt-3 text-[16px] leading-relaxed text-ink/85">
        {children}
      </div>
    </div>
  );
}

function Arrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" className="transition-transform group-hover:translate-x-1">
      <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="square" />
    </svg>
  );
}
