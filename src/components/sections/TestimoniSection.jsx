"use client";

import Title from "../ui/Title";
import { Star } from "lucide-react";
import { testimoniData } from "../../../Data";
import CardTestimoni from "../ui/CardTestimoni";
import Button from "../ui/Button";
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
      <div className="flex flex-wrap gap-6 justify-center p-10 bg-gray-50">
        {testimoniData.map((item) => (
          <CardTestimoni
            key={item.id}
            stars={item.stars}
            description={item.description}
            name={item.name}
            department={item.department}
          />
        ))}
      </div>
      <div className="flex items-center justify-center my-5">
        <Button
          title="View All Reviews"
          rounded="45px"
          bg="white"
          text="black"
          hoverText="white"
          width="300px"
          height="50px"
          shadow="0_6px_14px_rgba(18,185,133,0.22)"
          hoverBg="#2ed2a0"
          hoverShadow="0_12px_28px_rgba(18,185,133,0.32)"
          font="poppins"
          sizeText="14px"
          border="2px solid #2ed2a0"
        />
      </div>
    </section>
  );
};

export default TestimoniSection;
