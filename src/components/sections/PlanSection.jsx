"use client";
import Title from "../ui/Title";
import { useState } from "react";
import { dataPricing } from "../../../Data";
import { CardPlan } from "../ui/CardPlan";
const PlanSection = () => {
  const [period, setPeriod] = useState("Weekly");
  const Buttons = ["Daily", "Weekly", "Monthly"];
  const Periods = dataPricing[period];
  return (
    <section>
      <Title
        title="Choose Your Plan"
        description="Flexible pricing that works for your lifestyle"
      />
      <div className="flex items-center justify-center gap-5 my-10">
        {Buttons.map((item, index) => {
          return (
            <button key={index} className={`w-[120px] h-[40px] rounded-[20px] ${period === item ? 'text-white bg-[#12B985]' : 'text-black bg-[#E7F8F2] border-[1px] border-[#12B985]'} transition-colors duration-300`} onClick={() => setPeriod(item)}>
              {item}
            </button>
          );
        })}
      </div>
      <div className="flex items-center justify-center gap-10 mt-10">
        {Periods.map((item) => {
          return (
            <CardPlan
              key={item.id}
              title={item.title}
              price={item.price}
              period={item.period}
              meals={item.meals}
              features={item.features}
            />
          );
        })}
      </div>
      <p className="text-center text-[14px] font-poppins capitalize text-[#777777] mt-[20px]">
        all plans include flexible delivery and the ability to pause or cancel your plan at any time.
      </p>
    </section>
  );
};

export default PlanSection;
