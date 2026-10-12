"use client";

import { useState } from "react";

const Button = ({
  title,
  width,
  height,
  bg,
  text,
  shadow,
  hoverShadow,
  hoverBg,
  font,
  sizeText,
  rounded,
  border,
  hoverText,
  Click,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const activeShadow = isHovered ? hoverShadow : shadow;

  return (
    <button
      className=" transition-all duration-300"
      style={{
        width,
        height,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        cursor: "pointer",
        borderRadius: rounded,
        backgroundColor: isHovered ? hoverBg : bg,
        color: isHovered ? hoverText : text,
        boxShadow: activeShadow?.replaceAll("_", " "),
        fontFamily: font ? `var(--font-${font})` : undefined,
        fontSize: sizeText,
        transition: "all 600ms",
        border: border,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => Click}
    >
      {title}
    </button>
  );
};

export default Button;
