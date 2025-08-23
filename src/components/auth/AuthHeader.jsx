import logo from "../../assets/images/Logo.png";

const AuthHeader = () => {
  return (
    <header className="flex space-between items-center p-6 md:px-28 md:py-6 border-solid border-1 border-[#F1F1F1] shadow-md md:shadow-none">
      <img src={logo} alt="logo" />
    </header>
  );
};

export default AuthHeader;
