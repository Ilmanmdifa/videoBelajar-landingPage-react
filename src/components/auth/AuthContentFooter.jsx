import React from "react";
import BtnAuth from "./BtnAuth";
import DividerAuth from "./DividerAuth";

const AuthContentFooter = () => {
  return (
    <div className="flex flex-col gap-4 text-[#333333AD] md:text-[#4A505C] text-normal leading-[140%] tracking-normal">
      <div className="flex justify-end">
        <a href="#" className="font-medium hover:underline">
          Lupa Password?
        </a>
      </div>
      <BtnAuth btnType={"primary"} btnTitle={"Masuk"} />
      <BtnAuth btnType={"secondary"} btnTitle={"Daftar"} />
      <DividerAuth />
      <BtnAuth btnType={"google"} />
    </div>
  );
};

export default AuthContentFooter;
