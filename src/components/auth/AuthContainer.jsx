import React from "react";
import AuthContentHeader from "./AuthContentHeader";
import AuthContentItem from "./AuthContentItem";
import AuthContentFooter from "./AuthContentFooter";

const AuthContainer = ({ title, description, typeContainer }) => {
  const commonClass =
    "flex flex-col p-5 md:w-[590px] md:p-9 items-center border-1 border-solid border-[#f1f1f1] rounded-sm bg-white";

  const isLogin = typeContainer === "login";
  return (
    <div className={`${commonClass}`}>
      <AuthContentHeader title={title} description={description} />
      <div className="flex flex-col text-sm w-full gap-3 font-[DM_sans]">
        {isLogin ? (
          <>
            <AuthContentItem
              itemLabel={"email"}
              itemTitle={"E-Mail"}
              itemType={"text"}
            />
            <AuthContentItem
              itemLabel={"password"}
              itemTitle={"Kata Sandi"}
              itemType={"passwordLogin"}
            />
          </>
        ) : (
          <>
            <AuthContentItem
              itemLabel={"nama"}
              itemTitle={"Nama Lengkap"}
              itemType={"text"}
            />
            <AuthContentItem
              itemLabel={"email"}
              itemTitle={"E-Mail"}
              itemType={"email"}
            />
            <AuthContentItem
              itemLabel={"gender"}
              itemTitle={"Jenis Kelamin"}
              itemType={"gender"}
            />
            <AuthContentItem
              itemLabel={"phone"}
              itemTitle={"No. Hp"}
              itemType={"phoneNumber"}
            />
            <AuthContentItem
              itemLabel={"password"}
              itemTitle={"Kata Sandi"}
              itemType={"passwordRegister"}
            />
            <AuthContentItem
              itemLabel={"password"}
              itemTitle={"Konfirmasi Kata Sandi"}
              itemType={"passwordConfirm"}
            />
          </>
        )}
        <AuthContentFooter />
      </div>
    </div>
  );
};

export default AuthContainer;
