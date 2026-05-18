import Link from "next/link";
import Image from "next/image";
import { img } from "@/lib/images";
import { site } from "@/lib/site";

export default function About() {
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-20 lg:py-32">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="eyebrow">05 / Studio</div>
            <h2 className="mt-6 font-display text-[36px] sm:text-[48px] lg:text-[56px]">
              Built in Johor.
              <br />
              <span className="text-mute">Trusted across</span>
              <br />
              <span className="text-mute">Malaysia.</span>
            </h2>

            <Link
              href="/about"
              className="mt-10 inline-flex items-center gap-3 text-[14px] font-medium link-ul"
            >
              Read about the studio
              <span>→</span>
            </Link>
          </div>

          <div className="lg:col-span-7 lg:pl-10 lg:border-l border-line">
            <p className="text-[18px] lg:text-[20px] leading-[1.6] text-ink/85">
              Speedmax Solutions {site.legalName.includes("Sdn") ? "(Sdn Bhd)" : ""} was founded in {site.foundedYear} in
              Johor Bahru as a specialist contractor for ICT and extra-low-voltage
              construction. Today we operate as a one-stop technology partner —
              from cabling and switching to telephony, security and accounting
              systems.
            </p>
            <p className="mt-6 text-[16px] text-ink/70 leading-relaxed">
              Our work is measured by what doesn&apos;t happen: no downtime, no
              callbacks, no surprises on invoice day. We document everything,
              certify what we install, and stand behind it with a response SLA
              you can hold us to.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-8 max-w-md">
              <div>
                <div className="eyebrow">Registration</div>
                <div className="mt-2 text-[14px] tabular-nums">{site.ssm}</div>
              </div>
              <div>
                <div className="eyebrow">Headquarters</div>
                <div className="mt-2 text-[14px]">
                  {site.address.city}
                </div>
              </div>
              <div>
                <div className="eyebrow">Founded</div>
                <div className="mt-2 text-[14px] tabular-nums">{site.foundedYear}</div>
              </div>
              <div>
                <div className="eyebrow">Coverage</div>
                <div className="mt-2 text-[14px]">Peninsular Malaysia</div>
              </div>
            </div>

            <div className="relative mt-12 aspect-[16/9] overflow-hidden">
              <Image
                src={img("studio", 1600, 80)}
                alt="Speedmax studio"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover duotone"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
