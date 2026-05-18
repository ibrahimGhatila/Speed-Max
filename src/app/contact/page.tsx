import type { Metadata } from "next";
import { Mail, Phone, MapPin, Printer, Clock, ArrowRight } from "lucide-react";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Speedmax Solutions in Johor Bahru. Call, email or request a free site survey for your next IT project.",
};

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy-900 text-white">
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="absolute inset-0 bg-radial-brand" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="max-w-3xl">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-400">
              Get in Touch
            </div>
            <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Let’s discuss your{" "}
              <span className="text-brand-500">next project</span>
            </h1>
            <p className="mt-5 text-lg text-white/75">
              Tell us a bit about what you need. We’ll come back with a
              proposal — typically within three working days.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-5 gap-10 lg:gap-12">
          {/* Contact details */}
          <div className="lg:col-span-2 space-y-5">
            <ContactCard
              icon={<MapPin className="h-5 w-5" />}
              title="Visit our office"
              body={`${site.address.line1}, ${site.address.line2}, ${site.address.city}, ${site.address.state}`}
            />
            <ContactCard
              icon={<Phone className="h-5 w-5" />}
              title="Call us"
              body={site.phone}
              href={`tel:${site.phoneRaw}`}
            />
            <ContactCard
              icon={<Printer className="h-5 w-5" />}
              title="Fax"
              body={site.fax}
            />
            <ContactCard
              icon={<Mail className="h-5 w-5" />}
              title="Email"
              body={site.email}
              href={`mailto:${site.email}`}
            />
            <ContactCard
              icon={<Clock className="h-5 w-5" />}
              title="Business hours"
              body={site.hours}
            />
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <form
              action="mailto:sales@speedmax.my"
              method="post"
              encType="text/plain"
              className="rounded-2xl border border-navy-900/10 bg-white p-6 sm:p-8 shadow-sm"
            >
              <h2 className="text-2xl font-bold">Request a free site survey</h2>
              <p className="mt-2 text-navy-900/65">
                Fill in the form and our team will be in touch within one
                working day.
              </p>

              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                <Field label="Full name" name="name" required />
                <Field label="Company" name="company" />
                <Field label="Email" name="email" type="email" required />
                <Field label="Phone" name="phone" type="tel" />
              </div>

              <div className="mt-4">
                <label className="block text-sm font-medium text-navy-900 mb-1.5">
                  Service of interest
                </label>
                <select
                  name="service"
                  className="w-full rounded-lg border border-navy-900/15 bg-white px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Choose a service
                  </option>
                  <option>Structured Cabling</option>
                  <option>System Integration</option>
                  <option>IP PBX & VoIP</option>
                  <option>Security & Access Control</option>
                  <option>Collaboration</option>
                  <option>AutoCount Accounting</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="mt-4">
                <label className="block text-sm font-medium text-navy-900 mb-1.5">
                  How can we help?
                </label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  className="w-full rounded-lg border border-navy-900/15 bg-white px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
                  placeholder="Tell us about your office, site or system…"
                />
              </div>

              <button
                type="submit"
                className="mt-6 group inline-flex items-center gap-2 rounded-full bg-brand-600 text-white px-6 py-3.5 text-sm font-semibold shadow-lg shadow-brand-600/20 hover:bg-brand-700 transition-colors"
              >
                Send enquiry
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              <p className="mt-3 text-xs text-navy-900/55">
                By submitting this form you agree to be contacted by Speedmax
                regarding your enquiry.
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

function ContactCard({
  icon,
  title,
  body,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
  href?: string;
}) {
  const inner = (
    <div className="rounded-2xl border border-navy-900/10 bg-white p-5 flex items-start gap-4 hover:border-brand-600/40 hover:shadow-md transition-all">
      <div className="h-11 w-11 shrink-0 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center">
        {icon}
      </div>
      <div>
        <div className="text-sm font-semibold text-navy-900">{title}</div>
        <div className="text-navy-900/70 text-sm mt-1">{body}</div>
      </div>
    </div>
  );
  return href ? <a href={href}>{inner}</a> : inner;
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
    <div>
      <label className="block text-sm font-medium text-navy-900 mb-1.5">
        {label}
        {required && <span className="text-brand-600 ml-0.5">*</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full rounded-lg border border-navy-900/15 bg-white px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
      />
    </div>
  );
}
