import React from "react";
import AuthHeader from "../components/auth/AuthHeader";
import AuthContainer from "../components/auth/AuthContainer";

const Login = () => {
  return (
    <>
      <AuthHeader />
      <main className="h-full flex items-center md:py-[120px] flex-col px-[20px] py-[28px] bg-[#fff7d7cc]">
        <AuthContainer
          title={"Masuk Ke Akun"}
          description={"Yuk, lanjutin belajarmu di videobelajar."}
          typeContainer={"login"}
        />
      </main>
    </>
  );
};

export default Login;
