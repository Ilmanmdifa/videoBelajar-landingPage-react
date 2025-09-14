import React from "react";
import cardContent from "../../assets/images/home/card/card-content.jpg";
import cardAvatar from "../../assets/images/home/card/card-avatar.png";
import starRating from "../../assets/images/home/card/star-rating.png";

const GridCard = ({ product }) => {
  return (
    <div className="w-full md:384px flex flex-col gap-2 justify-between p-4 md:p-5 bg-[#FFFFFF] rounded-[10px] border border-solid border-[#3A35411F]">
      <div className="flex gap-2.5 md:gap-4 md:flex-col">
        <img
          src={cardContent}
          alt="card content"
          className="max-w-[82px] max-h-[82px] md:max-h-[193px] md:max-w-full object-cover h-[193px] w-full rounded-[10px]"
        />
        <div className="flex flex-col gap-2 h-[82px] md:h-full">
          <div className="flex flex-col gap-2 overflow-hidden">
            <h3 className="text-base md:text-[18px] font-[Poppins] font-semibold leading-[120%]">
              {product.judulKelas}
            </h3>
            <div className="hidden sm:block ">
              <p className="line-clamp-2 md:text-base md:text-[#333333AD]">
                {product.ketKelas}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 md:gap-2.5 font-[DM_Sans_medium]">
            <img
              src={cardAvatar}
              alt="card avatar"
              className="h-[36px] md:h-[40px] w-auto object-cover rounded-[10px]"
            />
            <div className="flex flex-col md:justify-center h-[37px] font-[DM_Sans]">
              <span className="text-sm md:text-base font-medium">
                {product.namaMentor}
              </span>
              <p className="text-[12px] md:text-sm leading-[140%] tracking-[0.2px] text-[#333333AD]">
                Senior Accountant <span className="hidden md:inline">di</span>
                <span className="hidden md:inline font-bold"> Gojek</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <span>
            <img src={starRating} alt="star rating" className="h-4.5" />
          </span>
          <span className="text-[12px] font-[DM_Sans] font-medium leading-[140%] tracking-[0.2px] underline text-[#333333AD]">
            3.5 (86)
          </span>
        </div>
        <div className="text-[24px] font-[Poppins] font-semibold text-[#3ECF4C]">
          Rp {product.hargaKelas}K
        </div>
      </div>
    </div>
  );
};

export default GridCard;
