import React from "react";
import Image from "next/image";
import { Calculator, CircleAlert } from "lucide-react";

export const CardPopular = ({ image, title, cal, protein, includes }) => {
  return (
    <div className="flex w-[350px] h-full min-h-[480px] flex-col overflow-hidden rounded-[20px] bg-white shadow-md transition-shadow hover:shadow-lg">
      {/* Image */}
      <div className="relative h-[200px] w-full shrink-0">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
        />

        <span className="absolute right-3 top-3 z-10 rounded-full bg-[#12B985] px-3 py-1 text-xs font-medium text-white">
          High Protein
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        <h2 className="text-[21px] font-bold leading-tight text-[#222222]">
          {title}
        </h2>

        {/* Nutrition */}
        <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-2 text-[13px] text-[#777777]">
          <p className="flex items-center gap-1.5">
            <Calculator size={15} />
            <span>{cal}</span>
          </p>

          <p className="flex items-center gap-1.5">
            <CircleAlert size={15} />
            <span>Protein: {protein}</span>
          </p>
        </div>

        {/* Includes */}
        <div className="mt-4">
          <p className="mb-2 text-[11px] font-medium uppercase text-[#777777]">
            Includes:
          </p>

          <ul className="flex flex-wrap gap-2">
            {includes.map((item) => (
              <li
                key={item.id}
                className="rounded-full bg-[#F7F8F7] px-3 py-1.5 text-[11px] text-[#333333]"
              >
                {item.item}
              </li>
            ))}
          </ul>
        </div>

        {/* Button */}
        <button className="mt-auto w-full rounded-2xl bg-[#12B985] py-3 text-sm font-medium text-white transition-colors hover:bg-[#0FA574]">
          Add to Plan
        </button>
      </div>
    </div>
  );
};
