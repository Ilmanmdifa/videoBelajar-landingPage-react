import "./App.css";
import { Link } from "react-router";
import Login from "./pages/Login";
function App() {
  return (
    <div className="flex gap-5 h-[100vh] w-full items-center justify-center">
      <Link
        to="/login"
        className="bg-black hover:bg-[#494949] text-[#ffffff] p-3 w-fill rounded-2xl"
      >
        Login
      </Link>
      <Link
        to="/register"
        className="bg-black hover:bg-[#494949] text-[#ffffff] p-3 w-fill rounded-2xl"
      >
        Register
      </Link>
      <Link
        to="/homepage"
        className="bg-black hover:bg-[#494949] text-[#ffffff] p-3 w-fill rounded-2xl"
      >
        Homepage
      </Link>
    </div>
  );
}

export default App;
