import React from "react";
import AuthContentHeader from "./AuthContentHeader";
import AuthContentItem from "./AuthContentItem";
import AuthContentFooter from "./AuthContentFooter";

const AuthContainer = ({ title, description }) => {
  return (
    <div className="flex flex-col p-5 md:w-[590px] md:p-9 items-center border-1 border-solid border-[#f1f1f1] rounded-sm bg-white">
      <AuthContentHeader title={title} description={description} />
      <div className="flex flex-col text-sm w-full gap-3 font-[DM_sans]">
        <AuthContentItem
          itemLabel={"email"}
          itemTitle={"E-Mail"}
          itemType={"text"}
        />
        <AuthContentItem
          itemLabel={"password"}
          itemTitle={"Kata Sandi"}
          itemType={"password"}
        />
        <AuthContentFooter />
      </div>
    </div>
  );
};

export default AuthContainer;
