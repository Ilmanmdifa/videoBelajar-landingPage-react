import logo from "../../assets/images/Logo.svg";

const AuthHeader = () => {
  return (
    <header className="flex space-between items-center p-6 md:px-28 md:py-6 border-solid border-1 border-[#F1F1F1] shadow-md shadow-shadowHeader md:shadow-none">
      <img src={logo} alt="logo" className="h-6 md:h-8" />
    </header>
  );
};

export default AuthHeader;
