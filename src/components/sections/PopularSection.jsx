"use client"
import { dataPopular } from "../../../Data";
import { CardPopular } from "../ui/CardPopular";
import Button from "../ui/Button";
import Title from "../ui/Title";
const PopularSection = () => {
  return (
    <section>
      <Title
        title="Our Popular Menu"
        description="Chef Curated, Nutritionist Approved Meals"
      />
       
      <div className="flex items-center justify-center gap-10 my-10">
        {dataPopular.map((item) => {
          return (
            <CardPopular
              key={item.id}
              image={item.image}
              title={item.title}
              cal={item.calories}
              protein={item.protein}
              includes={item.includes}
            />
          );
        })}
      </div>
      <div className="flex items-center justify-center my-10">
        <Button
          title="View All Menu"
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

export default PopularSection;
