import React from "react";
import googleLogo from "../../assets/images/google-icon.png";

const BtnAuth = ({ btnType, btnTitle }) => {
  const commonClass =
    "px-1.5 py-5 rounded-lg h-9 border-none cursor-pointer font-bold text-sm md:text-base";
  return (
    <>
      {btnType === "primary" && (
        <button
          className={`${commonClass} text-white bg-green-500 hover:bg-green-600 items-center flex justify-center`}
        >
          {btnTitle}
        </button>
      )}
      {btnType === "secondary" && (
        <button
          className={`${commonClass} text-[#3ECF4C] bg-[#E2FCD9CC] hover:bg-[#c9fab9cc] items-center flex justify-center`}
        >
          {btnTitle}
        </button>
      )}
      {btnType === "google" && (
        <button className="flex items-center justify-center text-[#4A505C] rounded-lg px-1.5 py-1.5 font-bold text-sm md:text-base hover:bg-[#f1f1f1] border-1 border-solid border-[#3a35411f] gap-2.5 cursor-pointer">
          <img src={googleLogo} alt="google-logo" /> Masuk dengan Google
        </button>
      )}
    </>
  );
};

export default BtnAuth;
