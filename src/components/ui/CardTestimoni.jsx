"use client";
import { Star, User } from "lucide-react"; // Menambahkan import User

const CardTestimoni = ({ name, description, stars, department }) => {
  return (
    <div className="bg-[#F6FDF8] border border-transparent shadow-[0_5px_15px_2px_rgba(0,0,0,0.16)] transition-all duration-300 ease-out hover:-translate-y-2 hover:border-[#12B985]/70 hover:shadow-[0_12px_30px_4px_rgba(18,185,133,0.30)] rounded-3xl p-6 sm:p-8 flex flex-col gap-5 max-w-[350px]">
      <div className="flex gap-1">
        {[...Array(stars)].map((_, index) => (
          <Star
            key={index}
            size={20}
            className="text-[#F5A623] fill-[#F5A623] stroke-[#F5A623]"
          />
        ))}
      </div>

      <p className="text-gray-700 text-base leading-relaxed grow">
        {description}
      </p>

      <div className="w-full h-px bg-green-100/60 my-1"></div>

      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-[#10A760] flex items-center justify-center text-white shrink-0">
          <User size={24} className="stroke-[2.5]" />
        </div>

        <div className="flex flex-col">
          <h4 className="font-bold text-gray-900 text-[15px]">{name}</h4>
          <p className="text-gray-500 text-sm mt-0.5">{department}</p>
        </div>
      </div>
    </div>
  );
};

export default CardTestimoni;
