import Hero from "@/components/Hero";
import FeaturedProject from "@/components/FeaturedProject";
import Services from "@/components/Services";
import Approach from "@/components/Approach";
import About from "@/components/About";
import Quote from "@/components/Quote";
import Partners from "@/components/Partners";
import CtaBanner from "@/components/CtaBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProject />
      <Services />
      <Approach />
      <About />
      <Quote />
      <Partners />
      <CtaBanner />
    </>
  );
}
