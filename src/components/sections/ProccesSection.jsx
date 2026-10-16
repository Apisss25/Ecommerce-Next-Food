"use client";
import { ChevronRight } from "lucide-react";

import { dataProcces } from "../../../Data";
const ProccesSection = () => {
  return (
    <>
      <section className="my-15">
        <div className="w-37.5 h-7.5 flex justify-center items-center rounded-full bg-[#E7F8F2] my-5 mx-auto">
          <p className="text-[#12B985] text-[14px] font-bitter">
            simple procces
          </p>
        </div>
        <h1 className="flex justify-center items-center font-bold text-[35px] font-bitter">
          How
          <span className="text-[35px] font-raleway text-[#12B985] ml-2.5">
            T
          </span>
          erra
          <span className="text-[35px] font-raleway text-[#12B985] ml-2.5">
            G
          </span>
          arage Works
        </h1>
        <p className="text-center text-[13px]  font-bitter">
          From Selection to Delivery in 3 easy steps.
        </p>

        <div className="flex items-center justify-center gap-1 my-20">
          {dataProcces.map((item, index) => {
            const Icon = item.icon;

            return (
              <div key={item.id} className="flex items-center">
                {/* CARD */}
                <div className="relative w-[320px] h-[200px] rounded-[18px] border border-[#e5e5e5] bg-white shadow-[2px_3px_12px_0px_rgba(0,0,0,0.15)] px-6 pt-7">
                  {/* NUMBER */}
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-[50px] h-[50px] flex justify-center items-center rounded-full bg-[#12B985] shadow-sm">
                    <span className="text-[13px] font-poppins font-semibold text-white">
                      {item.number}
                    </span>
                  </div>

                  {/* ICON */}
                  <div className="w-[48px] h-[48px] flex justify-center items-center rounded-[10px] bg-[#E8F9F4] mb-3">
                    <Icon
                      size={30}
                      strokeWidth={2}
                      className="text-[#12B985]"
                    />
                  </div>

                  {/* TITLE */}
                  <h3 className="font-poppins font-semibold text-[18px] leading-tight text-[#202020] mb-2">
                    {item.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="font-poppins font-normal text-[13px] leading-[1.6] text-[#777777] max-w-[300px]">
                    {item.description}
                  </p>
                </div>

                {/* ARROW */}
                {index < dataProcces.length - 1 && (
                  <ChevronRight
                    size={24}
                    strokeWidth={2}
                    className="mx-2 text-[#12B985]"
                  />
                )}
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default ProccesSection;
