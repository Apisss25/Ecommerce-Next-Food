import React from "react";

const Title = ({title, description}) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 ">
      <h1 className="font-bitter text-[35px] font-bold">{title}</h1>
      <p className="text-[14px] font-poppins text-[#777777]">
        {description}
      </p>
    </div>
  );
};

export default Title;
