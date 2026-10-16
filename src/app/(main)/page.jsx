"use client";

import HeroSection from "@/components/sections/HeroSection";
import DeliverySection from "@/components/sections/DeliverySection";
import ProccesSection from "@/components/sections/ProccesSection";
import PopularSection from "@/components/sections/PopularSection";
import PlanSection from "@/components/sections/PlanSection";
import TestimoniSection from "@/components/sections/TestimoniSection";
import AskSection from "@/components/sections/AskSection";
const page = () => {
  return (
    <>
      <section>
        <HeroSection />
        <DeliverySection />
        <ProccesSection />
        <PopularSection />
        <PlanSection />
        <TestimoniSection />
        <AskSection />
      </section>
    </>
  );
};

export default page;
