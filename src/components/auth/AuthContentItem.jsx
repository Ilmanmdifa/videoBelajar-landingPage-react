import React from "react";
import eyeOff from "../../assets/images/eye-off.png";
import indo from "../../assets/images/Indonesia.png";

const AuthContentItem = ({ itemLabel, itemTitle, itemType }) => {
  const commonClass =
    "w-full h-12 rounded-[6px] text-[#222325] leading-[140%] tracking-[0.2] border-1 border-solid border-[#3a35411f] px-[14px] py-[10px]";

  const getInputType = (itemType) => {
    switch (itemType) {
      case "passwordLogin":
      case "passwordRegister":
      case "passwordConfirm":
        return "password";
      case "email":
        return "email";
      case "text":
      case "phoneNumber":
      default:
        return "text";
    }
  };
  return (
    <>
      <div className="flex flex-col gap-1 text-sm md:text-base text-[#333333AD] md:text-[#4A505C] text-normal leading-[140%] tracking-[0.2]">
        <label htmlFor={itemLabel}>
          {itemTitle} <span className="text-[#ff5c2b]">*</span>
        </label>
        {[
          "text",
          "email",
          "passwordLogin",
          "passwordRegister",
          "passwordConfirm",
        ].includes(itemType) && (
          <div className="relative w-full">
            <input type={getInputType(itemType)} className={commonClass} />
            {itemType.includes("password") && (
              <img
                src={eyeOff}
                alt="eye-off"
                className="absolute right-3 top-1/2 -translate-y-1/2 w-5 cursor-pointer"
              />
            )}
          </div>
        )}
        {itemType === "gender" && (
          <>
            <select name="" className={`${commonClass}`} id="">
              <option value="wanita">Wanita</option>
              <option value="pria">Pria</option>
            </select>
          </>
        )}
        {itemType === "phoneNumber" && (
          <div className="flex gap-2.5">
            <div className="flex w-[180px] md:w-[200px]">
              <div className="flex justify-center items-center bg-[#F4F5FA] border border-[#3A35411F] rounded-tl-[6px] rounded-bl-[6px] border-r-0 w-16 h-12">
                <img src={indo} alt="indo-flag" className="w-6" />
              </div>
              <select
                name=""
                className={`${commonClass} rounded-r-[6px] rounded-l-none`}
                id=""
              >
                <option value="">+62</option>
              </select>
            </div>
            <input
              type="text"
              className={`${commonClass}`}
              name=""
              id=""
              maxLength="12"
            ></input>
          </div>
        )}
      </div>
    </>
  );
};

export default AuthContentItem;
