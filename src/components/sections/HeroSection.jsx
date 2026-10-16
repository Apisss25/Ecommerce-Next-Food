"use client"

import CoffeeImage from "../../../public/Coffee_IMG_1.jpg";
import Image from "next/image";
import Button from "../ui/Button";
const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#ffffff_0%,#f6fff9_45%,#fffce9_100%)] -z-30" />

      {/* Green Glow */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-[#d8f7e8] rounded-full blur-[150px] opacity-70 -z-20" />

      {/* Yellow Glow */}
      <div className="absolute -bottom-40 -right-40 w-[700px] h-[700px] bg-[#fff3c4] rounded-full blur-[180px] opacity-80 -z-20" />

      <div className="container mx-auto px-6 lg:px-12 py-8 ">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#bfead7] bg-[#effcf5] text-[#12B985] text-sm font-medium">
              🌱 100% Fresh & Organic Ingredients
            </div>

            {/* Heading */}
            <h1 className="font-poppins text-[52px] md:text-[68px] leading-[1.1] font-bold text-[#161616] mt-8">
              Coffee, Tea, and More
              <br />
              <span className="text-[#12B985]">Delivered Fresh</span>
              <br />
              Every Day
            </h1>

            {/* Description */}
            <p className="mt-8 text-gray-500 text-lg leading-relaxed max-w-xl">
              Delicious, nutritionist-approved bento boxes delivered to your
              doorstep. No cooking, no prep, no hassle just pure healthy
              goodness.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-10">
              <Button
                title="Build Your Plan"
                rounded="45px"
                bg="#28DF99"
                text="black"
                hoverText="white"
                width="150px"
                height="55px"
                shadow="0_6px_14px_rgba(18,185,133,0.22)"
                hoverBg="#2ed2a0"
                hoverShadow="0_12px_28px_rgba(18,185,133,0.32)"
                font="poppins"
                sizeText="14px"
                border="2px solid #28DF99"
              />

              <Button
                title="See Sample Menu"
                rounded="45px"
                bg="white"
                text="black"
                hoverText="white"
                width="170px"
                height="55px"
                shadow="0_6px_14px_rgba(18,185,133,0.22)"
                hoverBg="#2ed2a0"
                hoverShadow="0_12px_28px_rgba(18,185,133,0.32)"
                font="poppins"
                sizeText="14px"
                border="2px solid #2ed2a0"
              />
            </div>

            {/* Customers */}
            <div className="flex items-center gap-4 mt-10">
              <div className="flex -space-x-3">
                <Image
                  src={CoffeeImage}
                  alt=""
                  className="w-[40px] h-[40px] rounded-full border-2 border-white"
                />
                <Image
                  src={CoffeeImage}
                  alt=""
                  className="w-[40px] h-[40px] rounded-full border-2 border-white"
                />
                <Image
                  src={CoffeeImage}
                  alt=""
                  className="w-[40px] h-[40px] rounded-full border-2 border-white"
                />
                <Image
                  src={CoffeeImage}
                  alt=""
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
              </div>

              <div>
                <div className="text-yellow-400 text-lg">★★★★★</div>
                <p className="text-gray-500 text-sm">50k+ Happy Customers</p>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="flex items-center justify-center">
            <Image
              src={CoffeeImage}
              alt="Food"
              className="object-cover rounded-[30px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
