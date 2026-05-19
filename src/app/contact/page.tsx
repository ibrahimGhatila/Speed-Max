import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Brief us on a project. Speedmax studio at 25 Jalan Ekoperniagaan 2/7, Johor Bahru. T +607 213 2500 · sales@speedmax.my. We reply within one working day.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Speedmax",
    description:
      "Tell us about the site, the timeline and the constraints — we return a fixed-price proposal within three working days.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        marker="Replies within one working day"
        title={
          <>
            Brief us on a{" "}
            <span className="text-white/55">project.</span>
          </>
        }
        subtitle="Tell us about the site, the timeline and the constraints — we return a fixed-price proposal within three working days."
        image="heroContact"
      />

      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10 grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Form */}
          <Reveal className="lg:col-span-7">
            <div className="text-[11px] tracking-[0.18em] uppercase font-medium text-accent">
              Your brief
            </div>
            <h2 className="mt-3 font-display text-[28px] sm:text-[34px] lg:text-[40px] text-ink">
              Tell us what you need.
            </h2>

            <form
              action={`mailto:${site.email}`}
              method="post"
              encType="text/plain"
              className="mt-10 max-w-2xl"
            >
              <div className="grid sm:grid-cols-2 gap-x-8">
                <Field label="Your name" name="name" required />
                <Field label="Company" name="company" />
                <Field label="Email" name="email" type="email" required />
                <Field label="Phone" name="phone" type="tel" />
              </div>

              <div className="border-b border-line py-5">
                <label className="block text-[11px] tracking-[0.16em] uppercase font-medium text-mute">
                  Discipline
                </label>
                <select
                  name="service"
                  defaultValue=""
                  className="mt-3 w-full bg-transparent text-[17px] text-ink focus:outline-none"
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
                <label className="block text-[11px] tracking-[0.16em] uppercase font-medium text-mute">
                  Brief
                </label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  placeholder="Tell us about the site, the timeline, the constraints…"
                  className="mt-3 w-full bg-transparent text-[17px] text-ink focus:outline-none resize-none placeholder:text-mute/55"
                />
              </div>

              <button
                type="submit"
                className="btn-lift mt-10 inline-flex items-center gap-3 bg-accent text-white px-7 py-4 text-[14px] font-semibold hover:bg-accent-hot"
              >
                Send brief
                <Arrow />
              </button>
              <p className="mt-4 text-[12px] text-mute">
                By submitting this form you agree to be contacted by Speedmax
                about your enquiry.
              </p>
            </form>
          </Reveal>

          {/* Studio details */}
          <Reveal
            delay={150}
            className="lg:col-span-5 lg:pl-8 lg:border-l border-line"
          >
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
              <div className="block tabular text-ink/55 mt-1">
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
          </Reveal>
        </div>
      </section>
    </>
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
      <label className="block text-[11px] tracking-[0.16em] uppercase font-medium text-mute">
        {label}
        {required && <span className="text-accent ml-1">*</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="mt-3 w-full bg-transparent text-[17px] text-ink focus:outline-none"
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
      <div className="text-[11px] tracking-[0.16em] uppercase font-medium text-mute">
        {label}
      </div>
      <div className="mt-3 text-[16px] leading-relaxed text-ink">
        {children}
      </div>
    </div>
  );
}

function Arrow() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M1 7h12M7 1l6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
