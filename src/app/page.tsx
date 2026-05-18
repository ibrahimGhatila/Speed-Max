import Hero from "@/components/Hero";
import About from "@/components/About";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Partners from "@/components/Partners";
import Testimonials from "@/components/Testimonials";
import CtaBanner from "@/components/CtaBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Stats />
      <Services />
      <WhyUs />
      <Testimonials />
      <Partners />
      <CtaBanner />
    </>
  );
}
