import React from "react";
import logo2 from "../../assets/images/Logo.svg";
import NavMenu from "./NavMenu";

const HomeHeader = () => {
  return (
    <nav className="w-full flex p-6 md:py-3 md:px-[120px] justify-between border-b border-[#F1F1F1] md:border-header md:shadow-none shadow-lg blur-b-sm">
      <div className="flex items-center justify-center">
        <img
          src={logo2}
          alt="logo-video-belajar"
          className="h-7 object-contain md:h-8 flex"
        />
      </div>
      <NavMenu />
    </nav>
  );
};

export default HomeHeader;
