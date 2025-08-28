import React from "react";
import { Link } from "react-router";
import HomeContentGrid from "./HomeContentGrid";
import HomeNewsletter from "./HomeNewsletter";
const HomeContent = () => {
  return (
    <div className="w-full md:max-w-[1200px] flex flex-col gap-6 md:gap-8 m-auto">
      <section className="flex flex-col gap-2.5">
        <h1 className="text-[24px] md:text-[32px] text-left font-semibold font-[Poppins] leading-[110%] text-[#222325]">
          Koleksi Video Pembelajaran Unggulan
        </h1>
        <p className="text-sm md:text-base md:text-left leading-[140%] tracking-[0.2px] text-[#333333AD] font-[DM_Sans]">
          Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
        </p>
      </section>
      <ul className="flex whitespace-nowrap overflow text-sm  md:text-base leading-[140%] tracking-[0.2px] font-medium list-none gap-1.5 font-[DM_Sans] text-[#333333AD]">
        <li>
          <Link className="link-selected pt-3 pr-9 mb-3">Semua Kelas</Link>
        </li>
        <li>
          <Link className="pt-3 pr-9 mb-3">Pemasaran</Link>
        </li>
        <li>
          <Link className="pt-3 pr-9 mb-3">Desain</Link>
        </li>
        <li>
          <Link className="pt-3 pr-9 mb-3">Pengembangan Diri</Link>
        </li>
        <li>
          <Link>Bisnis</Link>
        </li>
      </ul>
      <HomeContentGrid />
      <HomeNewsletter />
    </div>
  );
};

export default HomeContent;

//todo finish newsletter and footer
