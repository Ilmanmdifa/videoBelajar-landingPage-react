import React from "react";
import HomeHero from "./HomeHero";
import HomeContent from "./HomeContent";

const HomeMain = () => {
  return (
    <main className="flex items-center justify-center bg-[#fff7d7cc]">
      <div className="w-full h-full flex gap-6 md:gap-8 flex-col px-[20px] py-[28px] md:px-[64px] md:py-[64px]">
        <HomeHero />
        <HomeContent />
      </div>
    </main>
  );
};

export default HomeMain;
