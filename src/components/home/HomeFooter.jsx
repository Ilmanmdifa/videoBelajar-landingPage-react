import React from "react";
import logo from "../../assets/images/logo.svg";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router";

const HomeFooter = () => {
  return (
    <footer className="flex flex-col md:flex-row md:flex-wrap md:justify-between border-t-1 border-solid border-[#3A35411F] bg-[#f8f8f8] p-5 md:px-[120px] md:py-[60px]">
      <div className="font-[Open_sans] leading-[140%] tracking-[0.2px] md:w-[380px]">
        <img
          src={logo}
          alt="logo"
          className="w-[170px] md:w-[204px] h-auto mb-5"
        />
        <div className="text-sm flex flex-col gap-2">
          <h4 className="font-bold text-sm md:text-[18px] text-[#222325]">
            Gali Potensi Anda Melalui Pembelajaran Video di hariesok.id!
          </h4>
          <div className="flex flex-col text-sm md:text-base md:gap-3">
            <p>Jl. Usman Effendi No. 50 Lowokwaru, Malang</p>
            <p>+62-877-7123-1234</p>
          </div>
        </div>
      </div>
      <div className="hidden md:flex gap-[50px]">
        <div>
          <h4 className="font-bold text-base font-[DM_Sans] mb-5">Kategori</h4>
          <ul className="flex flex-col gap-3 mb-2.5 text-[#333333AD] font-[DM_Sans] leading-[140%] tracking-[0.2px]">
            <li>
              <Link>Digital & Teknologi</Link>
            </li>
            <li>
              <Link>Pemasaran</Link>
            </li>
            <li>
              <Link>Manajemen Bisnis</Link>
            </li>
            <li>
              <Link>Pengembangan Diri</Link>
            </li>
            <li>
              <Link>Desain</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-base font-[DM_Sans] mb-5">
            Perusahaan
          </h4>
          <ul className="flex flex-col gap-3 mb-2.5 text-[#333333AD] font-[DM_Sans] leading-[140%] tracking-[0.2px]">
            <li>
              <Link>Tentang Kami</Link>
            </li>
            <li>
              <Link>FAQ</Link>
            </li>
            <li>
              <Link>Kebijakan Privasi</Link>
            </li>
            <li>
              <Link>Ketentuan Layanan</Link>
            </li>
            <li>
              <Link>Bantuan</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-base font-[DM_Sans] mb-5">Komunitas</h4>
          <ul className="flex flex-col gap-3 mb-2.5 text-[#333333AD] font-[DM_Sans] leading-[140%] tracking-[0.2px]">
            <li>
              <Link>Tips Sukses</Link>
            </li>
            <li>
              <Link>Blog</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full mt-4 md:hidden">
        <div className="flex flex-col items-center gap-3 font-bold text-[#222325] text-base">
          <div className="flex items-center justify-between w-full cursor-pointer ">
            <span className="">Kategori</span>
            <FontAwesomeIcon icon={faAngleRight} className="text-[#f64920]" />
          </div>
          <div className="flex items-center justify-between w-full cursor-pointer">
            <span className="">Perusahaan</span>
            <FontAwesomeIcon icon={faAngleRight} className="text-[#f64920]" />
          </div>
          <div className="flex items-center justify-between w-full cursor-pointer">
            <span className="">Komunitas</span>
            <FontAwesomeIcon icon={faAngleRight} className="text-[#f64920]" />
          </div>
        </div>
      </div>
      <div className="flex items-center my-[16px] w-full">
        <hr className="text-[#3A35411F] w-full h-[1px]" />
      </div>
      <div className="flex flex-col-reverse md:flex-row gap-1 justify-between items-center w-full text-center">
        <p className="text-[#333333AD] font-medium font-[DM_Sans]">
          @2023 Gerobak Sayur All Rights Reserved.
        </p>
        <div className="flex justify-center gap-5">
          <Link className="inline-flex justify-center items-center w-[35px] h-[35px] border border-solid border-[#666] rounded-[50%]">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </Link>
          <Link className="inline-flex justify-center items-center w-[35px] h-[35px] border border-solid border-[#666] rounded-[50%]">
            <FontAwesomeIcon icon={faFacebookF} />
          </Link>
          <Link className="inline-flex justify-center items-center w-[35px] h-[35px] border border-solid border-[#666] rounded-[50%]">
            <FontAwesomeIcon icon={faInstagram} />
          </Link>
          <Link className="inline-flex justify-center items-center w-[35px] h-[35px] border border-solid border-[#666] rounded-[50%]">
            <FontAwesomeIcon icon={faTwitter} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default HomeFooter;
