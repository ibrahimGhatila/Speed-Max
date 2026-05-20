import Hero from "@/components/home/Hero";
import AboutStats from "@/components/home/AboutStats";
import Catalog from "@/components/home/Catalog";
import WhyUs from "@/components/home/WhyUs";
import Process from "@/components/home/Process";
import Testimonials from "@/components/home/Testimonials";
import ContactCTA from "@/components/home/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutStats />
      <Catalog />
      <WhyUs />
      <Process />
      <Testimonials />
      <ContactCTA />
    </>
  );
}
