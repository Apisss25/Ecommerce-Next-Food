"use client";

import { Check } from "lucide-react";
import Button from "./Button";

export const CardPlan = ({ title, price, period, meals, features }) => {
  return (
    <div className="group flex flex-col w-[300px] h-[420px] bg-white rounded-[20px] border border-transparent p-5 gap-5 shadow-[0_5px_15px_2px_rgba(0,0,0,0.16)] transition-all duration-300 ease-out hover:-translate-y-2 hover:border-[#12B985]/70 hover:shadow-[0_12px_30px_4px_rgba(18,185,133,0.30)]">
      <div className="flex flex-col text-center gap-2">
        <h1 className="text-[25px] font-merriweather font-bold">{title}</h1>
        <div className="flex justify-center items-center gap-1">
          <h1 className="text-[30px] font-poppins font-semibold text-[#12B985]">
            $ {price}
          </h1>
          <p className="text-[16px]">/per {period}</p>
        </div>
        <p className="text-[14px] font-poppins">{meals} meals included</p>
      </div>
      <div>
        {features.map((item, index) => {
          return (
            <div key={index} className="flex items-center gap-2 mb-[15px]">
              <Check
                className="w-[20px] h-[20px] rounded-full bg-[#E3F8F1]"
                size={14}
                color="#12B985"
              />
              <p className="text-[14px] font-poppins">{item}</p>
            </div>
          );
        })}
      </div>
      <div className="mt-auto">
        <Button
          title="Get Started"
          width="100%"
          height="40px"
          bg="#12B985"
          text="#FFFFFF"
          hoverBg="#0EA57A"
          hoverText="#FFFFFF"
          shadow="none"
          hoverShadow="none"
          font="poppins"
          sizeText="14px"
          rounded="10px"
        />
      </div>
    </div>
  );
};
