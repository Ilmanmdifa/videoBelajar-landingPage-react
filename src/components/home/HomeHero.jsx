import React from "react";

const HomeHero = () => {
  return (
    <section className="flex items-center justify-center bg-hero bg-hero-image w-[320px] h-[400px] md:w-[1200px] rounded-[10px] shadow-md mx-auto">
      <div className="relative flex flex-col text-center gap-3 items-center py-[36px] md:py-[64px] px-[20px] md:px-[140px] font-[DM_sans] text-[#ffffff] z-1">
        <h1 className="text-2xl md:text-5xl font-bold leading-[110%] font-[Poppins]">
          Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video
          Interaktif!
        </h1>
        <p className="text-sm md:text-base font-medium leading-[140%] tracking-[0.2px]">
          Temukan ilmu baru yang menarik dan mendalam melalui koleksi video
          pembelajaran berkualitas tinggi. Tidak hanya itu, Anda juga dapat
          berpartisipasi dalam latihan interaktif yang akan meningkatkan
          pemahaman Anda.
        </p>
        <button className="text-sm md:text-base h-10 md:h-10.5 w-auto mt-3 rounded-[10px] p-2.5 md:py-[10px] md:px-[26px] bg-[#3ECF4C] hover:bg-[#39b946] cursor-pointer">
          Temukan Video Course untuk Dipelajari!
        </button>
      </div>
    </section>
  );
};

export default HomeHero;
