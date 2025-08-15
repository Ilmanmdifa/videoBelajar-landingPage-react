import "./App.css";
import { Link } from "react-router";
import Login from "./pages/Login";

function App() {
  return (
    <div className="flex gap-2">
      <Link to="/login"> Login</Link>
      <Link to="/register"> Register</Link>
      <Link to="/homepage"> Homepage</Link>
    </div>
  );
}

export default App;
