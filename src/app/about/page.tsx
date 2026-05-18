import type { Metadata } from "next";
import About from "@/components/About";
import Stats from "@/components/Stats";
import WhyUs from "@/components/WhyUs";
import Partners from "@/components/Partners";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Founded in 2010, Speedmax Solutions is a one-stop technology provider headquartered in Johor Bahru — delivering structured cabling, integration, IP telephony and AutoCount accounting across Malaysia.",
};

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy-900 text-white">
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="absolute inset-0 bg-radial-brand" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="max-w-3xl">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-400">
              Who We Are
            </div>
            <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              A decade of <span className="text-brand-500">technology</span>{" "}
              partnership
            </h1>
            <p className="mt-5 text-lg text-white/75">
              Speedmax Solutions is a one-stop technology provider founded in
              2010 in Johor Bahru. We help Malaysian businesses run leaner,
              connect better, and grow with confidence.
            </p>
          </div>
        </div>
      </section>

      <About />
      <Stats />
      <WhyUs />
      <Partners />
      <CtaBanner />
    </>
  );
}
