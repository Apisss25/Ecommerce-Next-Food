"use client";
import { dataDelivery } from "../../../Data";
const DeliverySection = () => {
  return (
    <>
      <section className="w-full flex items-center justify-evenly py-20 ">
        {dataDelivery.map((item) => {
          const Icon = item.font;

          return (
            <div
              key={item.id}
              className="w-[150px] h-[150px] flex items-center gap-2 justify-center flex-col text-center"
            >
              <div className="w-[60px] h-[60px] flex items-center justify-center rounded-full bg-[#E7F8F2]">
                <Icon size={30} className="text-[#12B985]" />
              </div>
              <h1 className="text-[18px] font-medium font-poppins mt-[10px]">
                {item.title}
              </h1>
              <p className="text-[14px] font-poppins">{item.description}</p>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default DeliverySection;
