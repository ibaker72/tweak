import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Projects } from "@/components/projects";
import { Testimonials } from "@/components/testimonials";
import { WhyUs } from "@/components/founder";
import { Process } from "@/components/process";
import { Pricing } from "@/components/pricing";

import { FAQ, FinalCTA } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Projects />
      <WhyUs />
      <Process />
      <Testimonials />
      <Pricing />
      <FAQ />
      <FinalCTA />
    </>
  );
}
