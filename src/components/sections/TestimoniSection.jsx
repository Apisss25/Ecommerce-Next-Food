"use client";

import Title from "../ui/Title";
import { Star } from "lucide-react";
const TestimoniSection = () => {
  return (
    <section className="my-20">
      <Title title="What Our Customers Say" />
      <div className="flex items-center justify-center gap-1 mt-2">
        {[...Array(5)].map((e, i) => (
          <Star key={i} size={20} className="text-[#F49E0E] fill-[#F49E0E]" />
        ))}
        <p className="text-[16px] font-poppins">4.9/5 from 1,000+ reviews</p>
      </div>
      <div>
        
      </div>
    </section>
  );
};

export default TestimoniSection;
