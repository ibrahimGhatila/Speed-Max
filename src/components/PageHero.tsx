import Image from "next/image";
import { img, type ImageKey } from "@/lib/images";

type Props = {
  eyebrow: string;
  /** Full headline. Use <span className="text-white/55"> to mute portions. */
  title: React.ReactNode;
  /** Optional short subtitle below the headline. */
  subtitle?: string;
  /** Small marker shown top-right, e.g. "02 / Capabilities" */
  marker?: string;
  /** Image key for the background. */
  image: ImageKey;
};

/**
 * Inner-page hero. Mirrors the homepage hero's dark + image + heavy left
 * fade aesthetic, but at roughly 60svh with smaller display sizes.
 */
export default function PageHero({
  eyebrow,
  title,
  subtitle,
  marker,
  image,
}: Props) {
  return (
    <section className="relative isolate overflow-hidden bg-ink-deep -mt-20 pt-20 min-h-[60svh] flex flex-col">
      <div className="absolute inset-0 z-0">
        <Image
          src={img(image, 2400, 80)}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center duotone-cool"
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="absolute -right-40 top-1/4 h-[380px] w-[380px] rounded-full bg-accent/15 blur-[120px]" />
      </div>

      <div className="relative z-10 flex-1 flex flex-col">
        <div className="flex-1 mx-auto w-full max-w-[1440px] px-6 lg:px-10 pt-8 lg:pt-16 pb-12 lg:pb-16 flex flex-col justify-end">
          <div className="flex items-baseline justify-between gap-6 mb-8 lg:mb-10">
            <div className="text-[11px] tracking-[0.18em] uppercase font-medium text-accent">
              {eyebrow}
            </div>
            {marker && (
              <div className="text-[10px] tabular tracking-[0.18em] uppercase text-white/55">
                {marker}
              </div>
            )}
          </div>
          <div className="h-px w-full bg-white/10 mb-8 lg:mb-12" />

          <h1 className="font-display text-[34px] sm:text-[44px] lg:text-[64px] xl:text-[76px] text-white max-w-4xl rise">
            {title}
          </h1>

          {subtitle && (
            <p className="mt-6 lg:mt-8 max-w-xl text-[15px] lg:text-[17px] leading-[1.55] text-white/80 rise rise-2">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
