import React from "react";
import eyeOff from "../../assets/images/eye-off.png";

const AuthContentItem = ({ itemLabel, itemTitle, itemType }) => {
  const commonClass =
    "w-full h-12 rounded-sm text-[#222325] leading-[140%] tracking-[0.2] border-1 border-solid border-[#3a35411f] px-[14px] py-[10px]";
  return (
    <div className="flex flex-col gap-1 text-sm md:text-base text-[#333333AD] md:text-[#4A505C] text-normal leading-[140%] tracking-[0.2]">
      <label htmlFor={itemLabel}>
        {itemTitle} <span className="text-[#ff5c2b]">*</span>
      </label>
      {itemType === "password" ? (
        <>
          <input type={itemType} className={`${commonClass}`} />
          <img
            src={eyeOff}
            alt="eye-off"
            className="absolute contain w-auto top-[40%] right-[13%] md:top-[74%] md:right-[31.5%]"
          />
        </>
      ) : (
        <input type={itemType} className={`${commonClass}`} />
      )}
    </div>
  );
};

export default AuthContentItem;
