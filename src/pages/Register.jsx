import React from "react";
import AuthHeader from "../components/auth/AuthHeader";
import AuthContainer from "../components/auth/AuthContainer";

const Register = () => {
  return (
    <>
      <AuthHeader />
      <main className="h-full flex items-center md:py-[120px] flex-col px-[20px] py-[28px] bg-[#fff7d7cc]">
        <AuthContainer
          title={"Pendaftaran Akun"}
          description={"Yuk, daftarkan akunmu sekarang juga!"}
          typeContainer={"register"}
        />
      </main>
    </>
  );
};

export default Register;
