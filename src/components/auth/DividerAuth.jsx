import React from "react";
import divider from "../../assets/images/Divider.png";

const DividerAuth = () => {
  return (
    <div className="w-full flex items-center justify-center relative gap-2.5">
      <img src={divider} alt="divider" className="w-full h-0.5" />
      <p className="relative text-sm md:text-base text-[#4A505C]">atau</p>
      <img src={divider} alt="divider" className="w-full h-0.5" />
    </div>
  );
};

export default DividerAuth;
