import React from "react";

const HomeNewsletter = () => {
  return (
    <div className="flex flex-col bg-hero bg-newsletter">
      <div className="font-[DM_Sans] relative md:w-[525px] leading-[140%] px-5 py-12 tracking-[0.2px] mx-auto z-2">
        <div className="flex flex-col font-[DM_Sans] text-center items-center gap-1">
          <span className="text-base text-[#C1C2C4] font-medium md:text-18px[">
            NEWSLETTER
          </span>
          <h1 className="text-[24px] md:text-[32px] text-[#FFFFFF] font-[Poppins] mb-2.5 font-semibold leading-[110%] tracking-normal">
            Mau Belajar Lebih Banyak?
          </h1>
        </div>
        <p className="text-sm md:text-base mb-10 text-[#F4F5FA] text-center">
          Daftarkan dirimu untuk mendapatkan informasi terbaru dan penawaran
          spesial dari program-program terbaik harisenin.com
        </p>
        <div className="bg-[#ffffff] flex justify-between rounded-[10px]">
          <input
            type="email"
            placeholder="Masukkan Emailmu"
            className="font-[DM_Sans] border-0 outline-0 text-sm md:text-base text-center md:pl-8 md:py-2 md:h-[58px] md:text-left py-2.5 w-full"
          />
          <button className="hidden md:block bg-[#ffbd3a] text-[#ffffff] text-base py-2.5 px-6.5 rounded-[10px] border-none h-[42px] w-auto mr-2 cursor-pointer m-auto">
            Subscribe
          </button>
        </div>
        <button className="bg-[#ffbd3a] md:hidden text-[#ffffff] mt-4 font-bold h-10 rounded-[10px] border-none w-full cursor-pointer">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default HomeNewsletter;
