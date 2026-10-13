"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { dataFAQ } from "../../../Data";
import Title from "../ui/Title";

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="bg-[#F8FAFC] px-6 py-10">
      <div className="mb-10 text-center">
        <Title
          title="Frequently Asked Questions"
          description="Everything you need to know about our services and offerings"
        />
      </div>

      <div className="mx-auto max-w-[752px] space-y-[14px]">
        {dataFAQ.map((item, index) => (
          <div
            key={index}
            className="rounded-[15px] border border-transparent bg-white shadow-[0_5px_15px_2px_rgba(0,0,0,0.16)] transition-all duration-300 ease-out hover:shadow-[0_12px_30px_4px_rgba(18,185,133,0.30)] hover:border-[#12B985]/70"
          >
            <button
              onClick={() =>
                setActiveIndex(activeIndex === index ? null : index)
              }
              className="flex w-full items-center justify-between px-[29px] py-[24px] text-left"
            >
              <span className="text-[16px] font-semibold text-[#171717] font-poppins">
                {item.question}
              </span>
              <ChevronDown
                size={17}
                className={`shrink-0 text-[#12B985] transition-transform duration-300 ${
                  activeIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>

            {activeIndex === index && (
              <div className="px-[29px] pb-6 text-sm leading-6 text-gray-600">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqSection;
