"use client";

import Image from "next/image";
import { useState } from "react";
import Reveal from "@/components/Reveal";
import { img } from "@/lib/images";
import { site } from "@/lib/site";

export default function ContactCTA() {
  return (
    <section id="contact" className="relative isolate bg-shade py-20 lg:py-28 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={img("contactBackdrop", 2200, 75)}
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-[color:var(--color-shade-deep)]/70" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1280px] px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          {/* Left — eyebrow line for mobile, hidden on desktop (form has its own heading) */}
          <div className="lg:col-span-5 text-white">
            <span className="eyebrow text-[color:var(--color-accent-hot)]">
              Contact
            </span>
            <h2 className="mt-4 font-display text-[34px] sm:text-[44px] lg:text-[52px] leading-[1.04] tracking-[-0.02em]">
              Let&apos;s find the perfect
              <br />
              <span className="font-display-italic">custom solution</span>
              <br />
              <span className="font-display-italic text-[color:var(--color-accent-hot)]">
                for your space
              </span>
            </h2>
            <p className="mt-5 max-w-md text-[14px] leading-[1.7] text-white/70">
              Leave your contact information, and we&apos;ll reach out to
              discuss the details of your project.
            </p>

            <dl className="mt-9 grid grid-cols-2 gap-x-6 gap-y-5 text-[13px]">
              <div>
                <dt className="eyebrow-mute text-white/55">Email</dt>
                <dd className="mt-1.5">
                  <a
                    href={`mailto:${site.email}`}
                    className="link-ul text-white hover:text-[color:var(--color-accent-hot)] transition-colors break-all"
                  >
                    {site.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="eyebrow-mute text-white/55">Phone</dt>
                <dd className="mt-1.5 tabular">
                  <a
                    href={`tel:${site.phoneRaw}`}
                    className="text-white hover:text-[color:var(--color-accent-hot)] transition-colors"
                  >
                    {site.phone}
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          {/* Right — form card */}
          <Reveal delay={120} className="lg:col-span-7">
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <form
      onSubmit={onSubmit}
      className="bg-white rounded-[6px] p-7 lg:p-10 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.5)]"
    >
      <div className="grid sm:grid-cols-2 gap-x-8 gap-y-2">
        <Field label="Your name" name="name" required />
        <Field label="Email" name="email" type="email" required />
        <Field label="Phone (optional)" name="phone" type="tel" />
        <Field label="Room / surface" name="surface" />
      </div>

      <div className="mt-2">
        <TextareaField label="Tell us about your project" name="message" required />
      </div>

      <div className="mt-7 flex flex-wrap items-center justify-between gap-4">
        <p className="text-[11px] text-mute leading-[1.6] max-w-[36ch]">
          By submitting, you agree to be contacted about your enquiry. We never
          share your details.
        </p>
        <button
          type="submit"
          className="btn-primary"
          disabled={submitted}
        >
          {submitted ? "Thanks — we'll be in touch" : "Discuss the project"}
          <Arrow />
        </button>
      </div>
    </form>
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
    <div className="field">
      <input id={name} name={name} type={type} required={required} placeholder=" " />
      <label htmlFor={name}>
        {label}
        {required && <span className="text-[color:var(--color-accent)] ml-1">*</span>}
      </label>
    </div>
  );
}

function TextareaField({
  label,
  name,
  required = false,
}: {
  label: string;
  name: string;
  required?: boolean;
}) {
  return (
    <div className="field">
      <textarea id={name} name={name} required={required} placeholder=" " rows={3} />
      <label htmlFor={name}>
        {label}
        {required && <span className="text-[color:var(--color-accent)] ml-1">*</span>}
      </label>
    </div>
  );
}

function Arrow() {
  return (
    <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
