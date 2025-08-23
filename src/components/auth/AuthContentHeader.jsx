const AuthContentHeader = ({ title, description }) => {
  return (
    <div className="flex flex-col items-center gap-2.5 mb-5 font-semibold font-[Poppins, sans_serif]">
      <h1 className="text-2xl md:text-[32px] font-bold text-[#222325]">
        {title}
      </h1>
      <p className="text-sm md:text-base font-normal text-[#333333AD] font-[DM_sans, sans_serif]">
        {description}
      </p>
    </div>
  );
};

export default AuthContentHeader;
